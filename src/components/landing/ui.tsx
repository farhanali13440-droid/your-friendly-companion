import type { ReactNode } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink, type WaMessage } from "@/lib/whatsapp";

type Variant = "primary" | "whatsapp" | "outline" | "light" | "ghost-light";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-accent shadow-sm",
  whatsapp: "bg-whatsapp text-whatsapp-foreground hover:brightness-95 shadow-sm",
  outline: "border border-border bg-background text-primary hover:border-accent hover:bg-secondary",
  light: "bg-background text-primary hover:bg-secondary",
  "ghost-light": "border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10",
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
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variants[variant],
        className,
      )}
    >
      {icon === "chat" && <MessageCircle className="size-[18px]" aria-hidden />}
      {children}
      {icon === "arrow" && <ArrowRight className="size-4" aria-hidden />}
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

export function Heading({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-primary md:text-[2.6rem]">
        {title}
      </h2>
      {children && (
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">{children}</div>
      )}
    </div>
  );
}

export function DoctorPhoto({ className }: { className?: string }) {
  // Placeholder until the doctor's original photograph is supplied.
  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-secondary",
        className,
      )}
      role="img"
      aria-label="Photograph of Dr. Mohsin Mehmood (placeholder)"
    >
      <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full text-accent/15" aria-hidden>
        <circle cx="100" cy="95" r="42" fill="currentColor" />
        <path d="M20 250c6-60 40-92 80-92s74 32 80 92z" fill="currentColor" />
      </svg>
      <span className="relative mt-auto mb-6 rounded-full bg-background/90 px-4 py-1.5 text-xs font-medium text-muted-foreground">
        Doctor's photograph
      </span>
    </div>
  );
}
