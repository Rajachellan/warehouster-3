import re
import os
import glob

files = glob.glob("src/**/*.tsx", recursive=True) + glob.glob("src/**/*.ts", recursive=True)

REGEX_REPLACEMENTS = [
    (r"text-\[12px\] font-black uppercase tracking-\[0\.[0-9]+em\] text-accent", "text-[12px] font-black uppercase tracking-[0.4em] text-primary/40"),
    (r"text-\[11px\] font-black uppercase tracking-\[0\.[0-9]+em\] text-accent", "text-[11px] font-black uppercase tracking-[0.5em] text-primary/40"),
    (r"text-\[10px\] font-black uppercase tracking-\[0\.[0-9]+em\] text-accent", "text-[10px] font-black uppercase tracking-[0.35em] text-primary/40"),
    (r"text-\[9px\] font-black uppercase tracking-\[0\.[0-9]+em\] text-accent", "text-[9px] font-black uppercase tracking-[0.3em] text-primary/40"),
]

STRING_REPLACEMENTS = [
    ("h-[1px] w-12 bg-accent", "h-[1px] w-12 bg-primary/20"),
    ("h-[2px] w-12 bg-accent", "h-[2px] w-12 bg-primary/20"),
    ("h-[2px] w-8 bg-accent", "h-[2px] w-8 bg-primary/20"),
    ("h-[1px] w-8 bg-accent", "h-[1px] w-8 bg-primary/20"),
    ("h-[1px] w-10 bg-accent", "h-[1px] w-10 bg-primary/20"),
    ("h-[1px] w-6 bg-accent", "h-[1px] w-6 bg-primary/20"),
    ("h-px w-8 bg-accent", "h-px w-8 bg-primary/20"),
    ("w-12 h-[1px] bg-accent", "w-12 h-[1px] bg-primary/20"),
    ("group-hover:text-accent transition-colors", "group-hover:text-primary transition-colors"),
    ("group-hover:text-accent transition-all", "group-hover:text-primary transition-all"),
    ("hover:text-accent transition-colors", "hover:text-primary transition-colors"),
    ("hover:text-accent transition-all", "hover:text-primary transition-all"),
    ("hover:border-accent/50", "hover:border-primary/20"),
    ("hover:border-accent/40", "hover:border-primary/20"),
    ("hover:border-accent/30", "hover:border-primary/20"),
    ('className="text-accent" />', 'className="text-primary" />'),
    ('className="text-accent shrink-0', 'className="text-primary shrink-0'),
    ('<Calendar size={12} className="text-accent"', '<Calendar size={12} className="text-primary/50'),
    ('<Calendar size={14} className="text-accent"', '<Calendar size={14} className="text-primary/50'),
    ('<Calendar size={16} className="text-accent"', '<Calendar size={16} className="text-primary/50'),
    ('<User size={16} className="text-accent"', '<User size={16} className="text-primary/50'),
    ('<User size={14} className="text-accent"', '<User size={14} className="text-primary/50'),
    ('<Clock size={16} className="text-accent"', '<Clock size={16} className="text-primary/50'),
    ('<MapPin size={14} className="text-accent"', '<MapPin size={14} className="text-primary/50'),
    ('<Clock size={14} className="text-accent"', '<Clock size={14} className="text-primary/50'),
    ('<Activity className="text-accent"', '<Activity className="text-primary'),
    ('<TrendingUp className="text-accent"', '<TrendingUp className="text-primary'),
    ('<BarChart3 className="text-accent"', '<BarChart3 className="text-primary'),
    ('<CheckCircle2 className="text-accent', '<CheckCircle2 className="text-primary'),
    ('<ArrowRight size={16} className="text-accent"', '<ArrowRight size={16} className="text-primary'),
    ("group-hover:w-full group-hover:bg-accent", "group-hover:w-full group-hover:bg-primary/30"),
    ("group-hover:bg-accent transition-colors duration-700", "group-hover:bg-primary/20 transition-colors duration-700"),
    ("h-2 w-full shrink-0 bg-gray-100 group-hover:bg-accent", "h-2 w-full shrink-0 bg-gray-100 group-hover:bg-primary/20"),
    ("group-hover:bg-accent group-hover:text-white group-hover:border-transparent", "group-hover:bg-primary group-hover:text-white group-hover:border-transparent"),
    ("border-[rgba(212,175,55,0.3)] text-accent bg-[rgba(212,175,55,0.05)]", "border-primary/15 text-primary/60 bg-primary/[0.03]"),
    ("border-[rgba(212,175,55,0.2)] text-accent bg-[rgba(212,175,55,0.05)]", "border-primary/15 text-primary/60 bg-primary/[0.03]"),
    ("border-l-2 border-accent pl-4", "border-l-2 border-white/20 pl-4"),
    ("group-hover:w-3 h-[1px] bg-accent", "group-hover:w-3 h-[1px] bg-white/60"),
    ("hover:text-accent hover:border-accent hover:bg-[rgba(212,175,55,0.05)]", "hover:text-white hover:border-white/30 hover:bg-white/5"),
    ("text-accent group-hover:bg-accent group-hover:text-white", "text-white/60 group-hover:bg-white/10 group-hover:text-white"),
    ("border-r border-[rgba(212,175,55,0.3)]", "border-r border-white/20"),
    ("hover:text-accent hover:bg-white/5", "hover:text-white hover:bg-white/5"),
    ('activeMenu === link.name ? "rotate-180 text-accent"', 'activeMenu === link.name ? "rotate-180 text-white"'),
    ('? "text-accent scale-105"', '? "text-white scale-105"'),
    ("border-b-2 border-r-2 border-accent/50", "border-b-2 border-r-2 border-primary/15"),
    ("w-1.5 h-1.5 bg-accent rounded-full", "w-1.5 h-1.5 bg-primary/40 rounded-full"),
    ("w-1.5 h-1.5 rounded-full bg-accent", "w-1.5 h-1.5 rounded-full bg-primary/40"),
    ("group-hover:bg-accent group-hover:text-white transition-all", "group-hover:bg-primary group-hover:text-white transition-all"),
    ("group-hover:bg-accent group-hover:text-white transition-colors", "group-hover:bg-primary group-hover:text-white transition-colors"),
    ("text-accent group-hover:text-white transition-colors", "text-primary group-hover:text-white transition-colors"),
    ("absolute top-0 left-0 w-1 h-full bg-accent", "absolute top-0 left-0 w-1 h-full bg-primary/30"),
    ("absolute right-0 bottom-0 top-0 w-1 bg-gray-100 group-hover:bg-accent", "absolute right-0 bottom-0 top-0 w-1 bg-gray-100 group-hover:bg-primary/30"),
]

SKIP_FILES = {"HeroSection.tsx", "CTASection.tsx"}

changed = []
for fp in files:
    if os.path.basename(fp) in SKIP_FILES:
        continue
    with open(fp, "r", encoding="utf-8") as f:
        content = f.read()
    orig = content
    for pattern, repl in REGEX_REPLACEMENTS:
        content = re.sub(pattern, repl, content)
    for old, new in STRING_REPLACEMENTS:
        content = content.replace(old, new)
    if content != orig:
        with open(fp, "w", encoding="utf-8") as f:
            f.write(content)
        changed.append(fp)

print(f"Updated {len(changed)} files")
for f in changed:
    print(" ", f)
