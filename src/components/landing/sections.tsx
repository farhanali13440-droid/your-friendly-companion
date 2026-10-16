import { useEffect, useState } from "react";
import {
  Brain, CloudRain, MoonStar, Wind, Flame, HeartCrack, Check, ShieldCheck, UserRound,
  MessagesSquare, Stethoscope, Lightbulb, ListChecks, Footprints, MapPin, Clock, Video,
  GraduationCap, Award, Plus, Minus, Menu, X, Mail, MessageCircle, Activity, Lock,
  HeartPulse, Eye, Sparkles, Quote, CalendarDays,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import { DoctorPhoto, Eyebrow, Heading, Section, WaButton } from "./ui";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About the Doctor" },
  { href: "#consultation", label: "Consultation" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

const CLINIC = "Clinic No. 56, Anklesaria Hospital";
const DAYS = "Monday, Wednesday, Friday";
const TIME = "6:00 PM – 9:00 PM";

/* ------------------------------------------------------------------ Header */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-xl" : "border-b border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-[13px] font-semibold tracking-wider text-primary-foreground">MM</span>
          <span className="leading-tight">
            <span className="block text-[16px] font-bold tracking-[-0.01em] text-primary">Dr. Mohsin Mehmood</span>
            <span className="block text-[12px] font-medium text-muted-foreground">Consultant Psychiatrist</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="relative text-[14px] font-medium text-foreground/75 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <WaButton className="hidden min-h-11 px-5 text-sm sm:inline-flex" icon="none">Book Your Consultation</WaButton>
          <button
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border/60 py-4 font-medium text-foreground">
              {n.label}
            </a>
          ))}
          <WaButton className="mt-6 w-full">Book Your Consultation</WaButton>
        </nav>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------- Hero */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[85%] bg-gradient-to-b from-secondary/70 to-background" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-[12px] font-semibold text-primary shadow-soft">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-whatsapp opacity-60" /><span className="relative inline-flex size-2 rounded-full bg-whatsapp" /></span>
            Psychiatric Consultation · In-Clinic &amp; Online
          </span>
          <h1 className="mt-7 text-balance text-[2.4rem] font-bold leading-[1.06] tracking-[-0.035em] text-primary sm:text-5xl lg:text-[3.6rem]">
            Your Mind Feels Exhausted.{" "}
            <span className="text-accent">You Don't Have to Figure Everything Out Alone.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-muted-foreground md:text-lg">
            Struggling with overthinking, anxiety, low mood, or sleepless nights? Get a professional psychiatric assessment
            with Dr. Mohsin Mehmood to better understand what you're experiencing and explore appropriate treatment options.
          </p>
          <ul className="mt-8 grid gap-3">
            {["One-to-One Psychiatric Consultation", "Professional Assessment and Treatment Guidance", "A Respectful, Nonjudgmental Approach"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-[15px] font-medium text-foreground">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-3" strokeWidth={3} /></span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WaButton>Book Your Consultation</WaButton>
            <WaButton variant="outline" icon="chat">Chat on WhatsApp</WaButton>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[420px]">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[36px] border border-border" />
          <DoctorPhoto className="shadow-elegant" />
          <figcaption className="absolute -bottom-8 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border border-border bg-background p-5 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-bold tracking-[-0.01em] text-primary">Dr. Mohsin Mehmood</p>
                <p className="text-[13px] text-muted-foreground">Consultant Psychiatrist</p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-bold tracking-wide text-accent">FCPS</span>
            </div>
            <p className="mt-3 border-t border-border pt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">MBBS, FCPS (Psychiatry)</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: Award, t: "FCPS (Psychiatry)", s: "Specialist qualification" },
    { icon: Activity, t: "5 Years", s: "Clinical experience" },
    { icon: Video, t: "In-Clinic & Online", s: "Consultation options" },
    { icon: Lock, t: "Confidential", s: "Respectful, private care" },
  ];
  return (
    <div className="px-5 pt-10 sm:px-8 md:pt-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-border bg-background lg:grid-cols-4">
        {items.map(({ icon: Icon, t, s }, i) => (
          <div key={t} className={cn("flex items-center gap-4 p-5 md:p-6", i % 2 === 1 && "border-l border-border", i >= 2 && "border-t border-border lg:border-t-0", i === 2 && "lg:border-l")}>
            <Icon className="size-5 shrink-0 text-accent" strokeWidth={1.75} />
            <div>
              <p className="text-[14px] font-bold text-primary md:text-[15px]">{t}</p>
              <p className="text-[12px] text-muted-foreground md:text-[13px]">{s}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- Pain points */
const SYMPTOMS = [
  { icon: Brain, title: "Overthinking", text: "Your thoughts keep going in circles, making it difficult to relax." },
  { icon: CloudRain, title: "Low Mood", text: "Things that once felt manageable may start feeling difficult." },
  { icon: MoonStar, title: "Sleep Problems", text: "Restless nights can make everyday challenges harder to manage." },
  { icon: Wind, title: "Anxiety and Restlessness", text: "You may find it difficult to feel calm or switch off your thoughts." },
  { icon: Flame, title: "Anger and Irritability", text: "Strong emotions may affect how you communicate with others." },
  { icon: HeartCrack, title: "Relationship Difficulties", text: "Emotional struggles can sometimes affect communication and relationships." },
];

export function PainPoints() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading eyebrow="Does This Sound Familiar?" title="When Your Mind Won't Let You Rest, Even Everyday Life Can Feel Difficult.">
            <p>Sometimes, the hardest part is explaining what you're going through.</p>
            <p>You may find yourself overthinking simple situations, struggling to sleep, feeling unusually low, or finding it difficult to concentrate. These experiences can affect your relationships, work, and everyday life.</p>
            <p className="font-semibold text-primary">You don't need to have all the answers before seeking professional guidance.</p>
          </Heading>
          <WaButton className="mt-8">Talk to a Psychiatrist</WaButton>
        </div>
        <div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {SYMPTOMS.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-background p-7 transition-colors hover:bg-secondary/50">
                <Icon className="size-6 text-accent" strokeWidth={1.6} />
                <h3 className="mt-5 text-[16px] font-bold tracking-[-0.01em] text-primary">{title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 flex gap-2 text-[13px] leading-relaxed text-muted-foreground">
            <span aria-hidden className="mt-0.5 font-bold text-accent">*</span>
            These experiences can have many different causes. Only a professional assessment can help clarify what may be contributing to them.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- Empathy */
export function Empathy() {
  return (
    <Section className="bg-secondary">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <Quote className="size-10 text-accent/40" strokeWidth={1.25} aria-hidden />
          <Heading title="You Deserve to Be Heard, Not Judged." className="mt-4">
            <p>Maybe you've been trying to handle everything on your own. Maybe you're worried about what others might think. Or perhaps you have questions about psychiatric medication, treatment, or what seeking help actually means for your life.</p>
            <p>These concerns deserve to be taken seriously. Dr. Mohsin Mehmood's approach focuses on listening carefully, understanding your perspective, and discussing your concerns without judgment.</p>
          </Heading>
          <p className="mt-8 border-l-2 border-accent pl-5 text-lg font-semibold leading-relaxed text-primary">
            You don't have to know exactly what's wrong before starting a conversation.
          </p>
        </div>
        <div className="rounded-3xl bg-background p-8 shadow-soft md:p-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Our promise to you</p>
          <ul className="mt-6 divide-y divide-border">
            {["Your concerns deserve to be heard.", "Your questions are welcome.", "Your treatment options can be discussed with you."].map((t, i) => (
              <li key={t} className="flex items-start gap-4 py-4 first:pt-0">
                <span className="mt-0.5 text-[13px] font-bold tabular-nums text-accent">0{i + 1}</span>
                <span className="text-[17px] font-semibold leading-snug text-primary">{t}</span>
              </li>
            ))}
          </ul>
          <WaButton className="mt-6 w-full" icon="chat">Start a Conversation</WaButton>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ Doctor */
export function Doctor() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[400px]">
          <DoctorPhoto className="shadow-elegant" />
          <div className="absolute -right-3 bottom-10 rounded-2xl border border-border bg-background px-5 py-4 shadow-soft md:-right-8">
            <p className="text-3xl font-bold tracking-tight text-primary">5<span className="text-accent">+</span></p>
            <p className="text-[12px] font-medium text-muted-foreground">Years clinical<br />experience</p>
          </div>
        </div>
        <div>
          <Heading eyebrow="About the Doctor" title="Meet Dr. Mohsin Mehmood">
            <p className="text-[15px] font-semibold uppercase tracking-[0.12em] text-accent">Consultant Psychiatrist</p>
            <p>Dr. Mohsin Mehmood approaches psychiatric care by listening carefully, understanding each patient's perspective, and discussing appropriate treatment options.</p>
            <p>His approach emphasizes empathy, open-mindedness, and respect for each patient's individual experiences.</p>
          </Heading>
          <dl className="mt-9 divide-y divide-border rounded-2xl border border-border">
            {[
              { icon: GraduationCap, k: "Medical Degree", v: "MBBS" },
              { icon: Award, k: "Specialisation", v: "FCPS (Psychiatry)" },
              { icon: ShieldCheck, k: "Fellowship", v: "Fellow of College of Physicians & Surgeons Pakistan" },
              { icon: Activity, k: "Experience", v: "5 years of clinical experience" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="flex items-center gap-4 px-5 py-4">
                <Icon className="size-5 shrink-0 text-accent" strokeWidth={1.75} />
                <dt className="w-32 shrink-0 text-[13px] font-medium text-muted-foreground max-sm:hidden">{k}</dt>
                <dd className="text-[15px] font-semibold text-primary">{v}</dd>
              </div>
            ))}
          </dl>
          <WaButton className="mt-9">Consult Dr. Mohsin Mehmood</WaButton>
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- Conditions */
const CONDITIONS = [
  { icon: HeartPulse, group: "Mood and Emotional Health", items: ["Depression", "Bipolar Disorder"] },
  { icon: Wind, group: "Anxiety and Related Conditions", items: ["Anxiety", "OCD", "PTSD"] },
  { icon: Eye, group: "Thought and Perception", items: ["Schizophrenia"] },
  { icon: Sparkles, group: "Other Psychiatric Concerns", items: ["Substance Use Disorders", "Sleep Problems", "Relationship Problems", "Sexual Problems"] },
];

export function Conditions() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-2xl">
          <Eyebrow className="text-primary-foreground/70 [&>span]:bg-primary-foreground/40">Areas of Practice</Eyebrow>
          <h2 className="text-balance text-[1.9rem] font-bold leading-[1.15] tracking-[-0.025em] md:text-[2.5rem]">
            Psychiatric Consultation for a Range of Mental Health Concerns
          </h2>
        </div>
        <WaButton variant="light" className="justify-self-start">Discuss Your Concern</WaButton>
      </div>
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/10 md:grid-cols-2 lg:grid-cols-4">
        {CONDITIONS.map(({ icon: Icon, group, items }, i) => (
          <article key={group} className="bg-primary p-7">
            <div className="flex items-center justify-between">
              <Icon className="size-6 text-primary-foreground/80" strokeWidth={1.5} />
              <span className="text-[12px] font-semibold tabular-nums text-primary-foreground/40">0{i + 1}</span>
            </div>
            <h3 className="mt-8 text-[16px] font-bold leading-snug">{group}</h3>
            <ul className="mt-5 space-y-2.5">
              {items.map((it) => (
                <li key={it} className="flex items-center gap-2.5 text-[14.5px] text-primary-foreground/75">
                  <span aria-hidden className="size-1 rounded-full bg-primary-foreground/50" />{it}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- Process */
const STEPS = [
  { icon: MessagesSquare, t: "Share Your Concerns", d: "Discuss the symptoms or challenges you are experiencing." },
  { icon: Stethoscope, t: "Professional Assessment", d: "Your psychiatrist assesses your symptoms and relevant history." },
  { icon: Lightbulb, t: "Understand Your Situation", d: "Discuss the assessment and what it may mean." },
  { icon: ListChecks, t: "Explore Treatment Options", d: "Discuss appropriate options based on your individual assessment." },
  { icon: Footprints, t: "Plan Your Next Steps", d: "Understand any recommended follow-up and practical next steps." },
];

export function Process() {
  return (
    <Section id="consultation">
      <Heading center eyebrow="The Consultation" title="Understand What to Expect From Your Consultation." />
      <ol className="relative mt-16 grid gap-0 md:grid-cols-5 md:gap-6">
        <span aria-hidden className="absolute bottom-8 left-[27px] top-8 w-px bg-border md:left-[10%] md:right-[10%] md:top-7 md:bottom-auto md:h-px md:w-auto" />
        {STEPS.map(({ icon: Icon, t, d }, i) => (
          <li key={t} className="relative flex gap-5 pb-10 last:pb-0 md:flex-col md:items-center md:pb-0 md:text-center">
            <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-background text-accent shadow-soft">
              <Icon className="size-[22px]" strokeWidth={1.6} />
              <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{i + 1}</span>
            </span>
            <div className="pt-1 md:pt-0">
              <h3 className="text-[16px] font-bold tracking-[-0.01em] text-primary md:mt-6">{t}</h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">{d}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ----------------------------------------------------------------- Options */
export function Options() {
  return (
    <Section className="bg-secondary">
      <Heading center eyebrow="Consultation Options" title="Choose the Consultation Option That Works for You." />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <article className="flex flex-col rounded-3xl bg-background p-8 shadow-soft md:p-10">
          <div className="flex items-center justify-between">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-accent"><MapPin className="size-6" strokeWidth={1.6} /></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Visit in person</span>
          </div>
          <h3 className="mt-8 text-2xl font-bold tracking-[-0.02em] text-primary">In-Clinic Consultation</h3>
          <dl className="mt-6 space-y-4 border-t border-border pt-6">
            <div className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} /><div><dt className="text-[12px] font-medium uppercase tracking-wider text-muted-foreground">Location</dt><dd className="mt-0.5 font-semibold text-primary">{CLINIC}</dd></div></div>
            <div className="flex gap-3"><CalendarDays className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} /><div><dt className="text-[12px] font-medium uppercase tracking-wider text-muted-foreground">Days</dt><dd className="mt-0.5 font-semibold text-primary">{DAYS}</dd></div></div>
            <div className="flex gap-3"><Clock className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} /><div><dt className="text-[12px] font-medium uppercase tracking-wider text-muted-foreground">Time</dt><dd className="mt-0.5 font-semibold text-primary">{TIME}</dd></div></div>
          </dl>
          <div className="mt-auto pt-9"><WaButton message="clinic" className="w-full sm:w-auto">Ask About In-Clinic Appointments</WaButton></div>
        </article>
        <article className="relative flex flex-col overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-elegant md:p-10">
          <svg aria-hidden viewBox="0 0 200 200" className="absolute -right-16 -top-16 size-72 text-primary-foreground/[0.06]" fill="none">
            {[40, 60, 80, 100].map((r) => <circle key={r} cx="100" cy="100" r={r} stroke="currentColor" />)}
          </svg>
          <div className="relative flex items-center justify-between">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10"><Video className="size-6" strokeWidth={1.6} /></span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/60">From anywhere</span>
          </div>
          <h3 className="relative mt-8 text-2xl font-bold tracking-[-0.02em]">Online Consultation</h3>
          <p className="relative mt-6 border-t border-primary-foreground/15 pt-6 text-[16px] leading-relaxed text-primary-foreground/80">
            Explore online psychiatric consultation options from Pakistan or internationally, subject to appointment availability.
          </p>
          <div className="relative mt-auto pt-9"><WaButton message="online" variant="light" className="w-full sm:w-auto">Ask About Online Consultation</WaButton></div>
        </article>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- Pricing */
export function Pricing() {
  return (
    <Section>
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Heading eyebrow="Consultation Fee" title="Take the First Step Toward Understanding Your Mental Health.">
            <p>A clear consultation fee. Simply message our team on WhatsApp and we'll guide you through the booking process.</p>
          </Heading>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Lock, t: "Private and confidential consultation" },
              { icon: Video, t: "Available in-clinic or online" },
              { icon: MessageCircle, t: "Simple booking through WhatsApp" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-center gap-3 text-[15px] font-medium text-foreground">
                <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-accent"><Icon className="size-4" /></span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[36px] bg-secondary" />
          <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-elegant">
            <div className="flex items-start justify-between border-b border-border p-8">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent">Psychiatric Consultation</p>
                <p className="mt-1 text-[14px] text-muted-foreground">with Dr. Mohsin Mehmood</p>
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-primary">One-to-one</span>
            </div>
            <div className="p-8">
              <p className="flex items-baseline gap-2 text-primary">
                <span className="text-lg font-semibold text-muted-foreground">PKR</span>
                <span className="text-[3.5rem] font-bold leading-none tracking-[-0.04em]">2,200</span>
              </p>
              <p className="mt-2 text-[13px] text-muted-foreground">Consultation fee</p>
              <ul className="mt-8 space-y-3.5">
                {["One-to-one psychiatric consultation", "Professional assessment", "Discussion of appropriate treatment options"].map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] text-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-3" strokeWidth={3} /></span>{b}
                  </li>
                ))}
              </ul>
              <WaButton className="mt-9 w-full">Book Your Consultation</WaButton>
              <p className="mt-4 text-center text-[12px] text-muted-foreground">Our team will share booking and payment details on WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- Credentials */
export function Credentials() {
  return (
    <Section className="bg-secondary">
      <Heading center eyebrow="Professional Approach" title="Learn More About the Doctor's Professional Approach." />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          { icon: GraduationCap, t: "Qualified Specialist", d: "MBBS and FCPS (Psychiatry), Fellow of the College of Physicians & Surgeons Pakistan." },
          { icon: UserRound, t: "Patient-Centred", d: "Careful listening and respect for each patient's individual experiences." },
          { icon: ShieldCheck, t: "Nonjudgmental Care", d: "Open-minded discussion of your concerns and treatment options." },
        ].map(({ icon: Icon, t, d }) => (
          <article key={t} className="rounded-3xl bg-background p-8 shadow-soft">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Icon className="size-[22px]" strokeWidth={1.6} /></span>
            <h3 className="mt-6 text-[17px] font-bold tracking-[-0.01em] text-primary">{t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------------- FAQ */
const BOOK = "To get started, contact our team on WhatsApp. We will guide you through the available appointment options and booking process.";
const FAQS = [
  { q: "How long is the consultation?", a: "Consultation length can vary from person to person. Our team can share current details when you contact us on WhatsApp." },
  { q: "Is online consultation available?", a: "Yes, online consultation options are available from Pakistan or internationally, subject to appointment availability." },
  { q: "What is the consultation fee?", a: "The consultation fee is PKR 2,200. Our team will confirm the applicable fee when you book." },
  { q: "Do I need to pay before the consultation?", a: "Our team will provide the applicable payment instructions through WhatsApp when you book." },
  { q: "Which payment methods are accepted?", a: "Our team will share the accepted payment methods and instructions through WhatsApp." },
  { q: "What should I bring to the consultation?", a: "If available, bring any previous prescriptions, medical reports, and a list of current medicines. It can also help to note down your main concerns beforehand." },
  { q: "Can I reschedule?", a: "Please contact our team on WhatsApp as early as possible and they will guide you on rescheduling options." },
  { q: "Will my consultation be confidential?", a: "Your privacy is respected. What you discuss with your psychiatrist is treated with professional confidentiality." },
  { q: "Will I necessarily need medication?", a: "Not necessarily. Treatment recommendations depend on your individual assessment, and any options will be discussed with you." },
  { q: "How many sessions will I need?", a: "This differs for each person and depends on your assessment and needs. Your psychiatrist will discuss any recommended follow-up with you." },
  { q: "How do I book an appointment?", a: BOOK },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faqs">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Heading eyebrow="FAQs" title="It's Okay to Have Questions Before Seeking Psychiatric Help." />
          <div className="mt-10 rounded-3xl bg-secondary p-7">
            <span className="flex size-11 items-center justify-center rounded-full bg-background text-whatsapp shadow-soft"><MessageCircle className="size-5" /></span>
            <h3 className="mt-5 text-xl font-bold tracking-[-0.01em] text-primary">Still Have Questions?</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">Our team is happy to help you understand your options.</p>
            <WaButton message="question" variant="whatsapp" icon="chat" className="mt-6">Chat With Our Team</WaButton>
          </div>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-[16px] font-semibold tracking-[-0.01em] text-primary transition-colors hover:text-accent"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {f.q}
                    <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors", isOpen ? "border-primary bg-primary text-primary-foreground" : "border-border text-accent")}>
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                </h3>
                <div id={`faq-${i}`} className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <p className="overflow-hidden pr-12 text-[15.5px] leading-[1.7] text-muted-foreground">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Final CTA */
export function FinalCta() {
  return (
    <section id="contact" className="px-5 pb-20 sm:px-8 md:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-primary px-6 py-16 text-primary-foreground md:px-16 md:py-24">
        <svg aria-hidden viewBox="0 0 400 400" className="absolute -left-24 -bottom-24 size-[420px] text-primary-foreground/[0.06]" fill="none">
          {[60, 100, 140, 180].map((r) => <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" />)}
        </svg>
        <svg aria-hidden viewBox="0 0 400 400" className="absolute -right-24 -top-24 size-[420px] text-primary-foreground/[0.06]" fill="none">
          {[60, 100, 140, 180].map((r) => <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" />)}
        </svg>
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow className="text-primary-foreground/70 [&>span]:bg-primary-foreground/40">Take the First Step</Eyebrow>
          <h2 className="text-balance text-3xl font-bold leading-[1.12] tracking-[-0.03em] md:text-[2.9rem]">
            You Don't Need to Have Everything Figured Out Before Asking for Help.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.7] text-primary-foreground/75">
            If emotional or psychological difficulties are affecting your everyday life, a professional assessment can help you
            understand your situation and explore possible next steps. Start with a conversation about what you're experiencing.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <WaButton variant="light">Book Your Consultation</WaButton>
            <WaButton variant="ghost-light" icon="chat">Chat on WhatsApp</WaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Footer */
export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-5 pb-28 pt-16 sm:px-8 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1.3fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary text-[13px] font-semibold tracking-wider text-primary-foreground">MM</span>
            <div>
              <p className="font-bold text-primary">Dr. Mohsin Mehmood</p>
              <p className="text-[13px] text-muted-foreground">Consultant Psychiatrist</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted-foreground">MBBS, FCPS (Psychiatry). Respectful, nonjudgmental psychiatric care — in-clinic and online.</p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Contact</p>
          <ul className="mt-5 space-y-3.5 text-[14px] text-foreground/80">
            <li><a className="flex gap-3 hover:text-accent" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4 shrink-0 text-accent" />WhatsApp: {WHATSAPP_DISPLAY}</a></li>
            <li><a className="flex gap-3 break-all hover:text-accent" href={`mailto:${EMAIL}`}><Mail className="size-4 shrink-0 text-accent" />{EMAIL}</a></li>
            <li className="flex gap-3"><MapPin className="size-4 shrink-0 text-accent" />{CLINIC}</li>
            <li className="flex gap-3"><Clock className="size-4 shrink-0 text-accent" />{DAYS} · {TIME}</li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Navigate</p>
          <nav className="mt-5 flex flex-col gap-3 text-[14px] text-foreground/80" aria-label="Footer">
            {[["#home", "Home"], ["#about", "About"], ["#consultation", "Consultation"], ["#faqs", "FAQs"], ["#contact", "Contact"]].map(([h, l]) => (
              <a key={h} href={h} className="hover:text-accent">{l}</a>
            ))}
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-6xl border-t border-border pt-6 text-[12px] leading-relaxed text-muted-foreground">
        <p>
          The information on this page is for educational purposes only and is not a substitute for professional medical advice,
          diagnosis, or treatment. If you are in crisis or at risk of harming yourself, please go to your nearest emergency department immediately.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} Dr. Mohsin Mehmood. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function StickyWhatsApp() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <WaButton variant="whatsapp" icon="chat" className="w-full">Book on WhatsApp</WaButton>
    </div>
  );
}
