import type { ReactNode } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink, type WaMessage } from "@/lib/whatsapp";

type Variant = "primary" | "whatsapp" | "outline" | "light" | "ghost-light";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-accent shadow-soft",
  whatsapp: "bg-whatsapp text-whatsapp-foreground hover:brightness-95 shadow-soft",
  outline: "border border-border bg-background text-primary hover:border-accent/50 hover:bg-secondary",
  light: "bg-background text-primary hover:bg-secondary",
  "ghost-light": "border border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10",
};

export function WaButton({
  children,
  message = "general",
  variant = "primary",
  icon = "arrow",
  className,
}: {
  children: ReactNode;
  message?: WaMessage;
  variant?: Variant;
  icon?: "arrow" | "chat" | "none";
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-7 text-[15px] font-semibold tracking-[-0.005em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variants[variant],
        className,
      )}
    >
      {icon === "chat" && <MessageCircle className="size-[18px]" aria-hidden />}
      {children}
      {icon === "arrow" && (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
      )}
    </a>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 md:py-28", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-accent", className)}>
      <span aria-hidden className="h-px w-6 bg-accent/60" />
      {children}
    </p>
  );
}

export function Heading({
  eyebrow,
  title,
  children,
  center = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-[1.9rem] font-bold leading-[1.15] tracking-[-0.025em] text-primary md:text-[2.5rem]">
        {title}
      </h2>
      {children && (
        <div className="mt-5 space-y-4 text-[17px] leading-[1.7] text-muted-foreground">{children}</div>
      )}
    </div>
  );
}

export function DoctorPhoto({ className }: { className?: string }) {
  // Placeholder until the doctor's original photograph is supplied.
  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden rounded-[28px] bg-primary text-primary-foreground",
        className,
      )}
      role="img"
      aria-label="Photograph of Dr. Mohsin Mehmood (placeholder)"
    >
      <svg aria-hidden viewBox="0 0 400 500" className="absolute inset-0 h-full w-full text-primary-foreground/[0.07]" fill="none">
        {[80, 130, 180, 230, 280].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>
      <span className="relative flex size-28 items-center justify-center rounded-full border border-primary-foreground/25 text-4xl font-light tracking-[0.08em]">
        MM
      </span>
      <span className="relative mt-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-foreground/60">
        Photo coming soon
      </span>
    </div>
  );
}
