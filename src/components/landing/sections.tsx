import { useState } from "react";
import {
  Brain, CloudRain, MoonStar, Wind, Flame, HeartCrack, Check, ShieldCheck, UserRound,
  MessagesSquare, Stethoscope, Lightbulb, ListChecks, Footprints, MapPin, Clock, Video,
  GraduationCap, Award, BookOpen, PlayCircle, Users, Plus, Minus, Menu, X, Mail,
  MessageCircle, Sparkles, Activity, Eye, HeartPulse,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import { DoctorPhoto, Heading, Section, WaButton } from "./ui";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About the Doctor" },
  { href: "#consultation", label: "Consultation" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

const CLINIC = "Clinic No. 56, Anklesaria Hospital";
const HOURS = "Monday, Wednesday, Friday · 6:00 PM–9:00 PM";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="leading-tight">
          <span className="block text-[17px] font-extrabold tracking-tight text-primary">Dr. Mohsin Mehmood</span>
          <span className="block text-xs font-medium text-muted-foreground">Consultant Psychiatrist</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent">
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
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border/60 py-3.5 font-medium text-foreground">
              {n.label}
            </a>
          ))}
          <WaButton className="mt-5 w-full">Book Your Consultation</WaButton>
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-12 sm:px-8 md:pb-28 md:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-secondary),transparent_60%)]" />
      <svg aria-hidden className="pointer-events-none absolute -right-20 top-10 h-[520px] w-[520px] text-border" viewBox="0 0 200 200" fill="none">
        {[30, 50, 70, 90].map((r) => <circle key={r} cx="100" cy="100" r={r} stroke="currentColor" strokeWidth="0.5" />)}
      </svg>
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">Psychiatric Consultation</p>
          <h1 className="text-balance text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-primary md:text-6xl">
            Your Mind Feels Exhausted.{" "}
            <span className="text-accent">You Don't Have to Figure Everything Out Alone.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Struggling with overthinking, anxiety, low mood, or sleepless nights? Get a professional psychiatric assessment
            with Dr. Mohsin Mehmood to better understand what you're experiencing and explore appropriate treatment options.
          </p>
          <ul className="mt-8 space-y-3">
            {["One-to-One Psychiatric Consultation", "Professional Assessment and Treatment Guidance", "A Respectful, Nonjudgmental Approach"].map((t) => (
              <li key={t} className="flex items-center gap-3 font-medium text-foreground">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-accent"><Check className="size-3.5" strokeWidth={3} /></span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WaButton>Book Your Consultation</WaButton>
            <WaButton variant="outline" icon="chat">Chat on WhatsApp</WaButton>
          </div>
        </div>
        <figure className="mx-auto w-full max-w-sm">
          <DoctorPhoto className="shadow-[0_30px_60px_-30px_var(--color-primary)]" />
          <figcaption className="relative mx-6 -mt-12 rounded-2xl border border-border bg-background p-5 shadow-lg">
            <p className="font-extrabold text-primary">Dr. Mohsin Mehmood</p>
            <p className="text-sm text-muted-foreground">Consultant Psychiatrist</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent">MBBS, FCPS (Psychiatry)</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

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
    <Section className="bg-secondary">
      <Heading title="When Your Mind Won't Let You Rest, Even Everyday Life Can Feel Difficult.">
        <p>Sometimes, the hardest part is explaining what you're going through.</p>
        <p>You may find yourself overthinking simple situations, struggling to sleep, feeling unusually low, or finding it difficult to concentrate. These experiences can affect your relationships, work, and everyday life. You don't need to have all the answers before seeking professional guidance.</p>
      </Heading>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SYMPTOMS.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md">
            <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-accent"><Icon className="size-5" /></span>
            <h3 className="mt-4 font-bold text-primary">{title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">These experiences can have many different causes. Only a professional assessment can help clarify what may be contributing to them.</p>
      <WaButton className="mt-8">Talk to a Psychiatrist</WaButton>
    </Section>
  );
}

export function Empathy() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <Heading title="You Deserve to Be Heard, Not Judged.">
          <p>Maybe you've been trying to handle everything on your own. Maybe you're worried about what others might think. Or perhaps you have questions about psychiatric medication, treatment, or what seeking help actually means for your life.</p>
          <p>These concerns deserve to be taken seriously.</p>
          <p>Dr. Mohsin Mehmood's approach focuses on listening carefully, understanding your perspective, and discussing your concerns without judgment.</p>
          <p className="font-semibold text-primary">You don't have to know exactly what's wrong before starting a conversation.</p>
        </Heading>
        <div className="rounded-3xl border border-border bg-secondary p-8">
          <ul className="space-y-5">
            {["Your concerns deserve to be heard.", "Your questions are welcome.", "Your treatment options can be discussed with you."].map((t) => (
              <li key={t} className="flex gap-4 text-lg font-semibold text-primary">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-4" strokeWidth={3} /></span>
                {t}
              </li>
            ))}
          </ul>
          <WaButton className="mt-8 w-full" icon="chat">Start a Conversation</WaButton>
        </div>
      </div>
    </Section>
  );
}

export function Doctor() {
  return (
    <Section id="about" className="bg-secondary">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <DoctorPhoto className="mx-auto max-w-sm" />
        <div>
          <Heading eyebrow="About the Doctor" title="Meet Dr. Mohsin Mehmood">
            <p className="font-semibold text-accent">Consultant Psychiatrist · MBBS, FCPS (Psychiatry)</p>
            <p>Dr. Mohsin Mehmood approaches psychiatric care by listening carefully, understanding each patient's perspective, and discussing appropriate treatment options.</p>
            <p>His approach emphasizes empathy, open-mindedness, and respect for each patient's individual experiences.</p>
          </Heading>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { icon: GraduationCap, t: "MBBS" },
              { icon: Award, t: "FCPS (Psychiatry)" },
              { icon: ShieldCheck, t: "Fellow of College of Physicians & Surgeons Pakistan" },
              { icon: Activity, t: "5 years of clinical experience" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <Icon className="size-5 shrink-0 text-accent" />
                <span className="text-sm font-semibold text-primary">{t}</span>
              </div>
            ))}
          </div>
          <WaButton className="mt-8">Consult Dr. Mohsin Mehmood</WaButton>
        </div>
      </div>
    </Section>
  );
}

const CONDITIONS = [
  { icon: HeartPulse, group: "Mood and Emotional Health", items: ["Depression", "Bipolar Disorder"] },
  { icon: Wind, group: "Anxiety and Related Conditions", items: ["Anxiety", "OCD", "PTSD"] },
  { icon: Eye, group: "Thought and Perception", items: ["Schizophrenia"] },
  { icon: Sparkles, group: "Other Psychiatric Concerns", items: ["Substance Use Disorders", "Sleep Problems", "Relationship Problems", "Sexual Problems"] },
];

export function Conditions() {
  return (
    <Section>
      <Heading center eyebrow="Areas of Practice" title="Psychiatric Consultation for a Range of Mental Health Concerns" />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {CONDITIONS.map(({ icon: Icon, group, items }) => (
          <article key={group} className="rounded-2xl border border-border p-7">
            <div className="flex items-center gap-3">
              <Icon className="size-5 text-accent" />
              <h3 className="font-bold text-primary">{group}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((i) => (
                <li key={i} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-foreground">{i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

const STEPS = [
  { icon: MessagesSquare, t: "Share Your Concerns", d: "Discuss the symptoms or challenges you are experiencing." },
  { icon: Stethoscope, t: "Professional Assessment", d: "Your psychiatrist assesses your symptoms and relevant history." },
  { icon: Lightbulb, t: "Understand Your Situation", d: "Discuss the assessment and what it may mean." },
  { icon: ListChecks, t: "Explore Treatment Options", d: "Discuss appropriate options based on your individual assessment." },
  { icon: Footprints, t: "Plan Your Next Steps", d: "Understand any recommended follow-up and practical next steps." },
];

export function Process() {
  return (
    <Section id="consultation" className="bg-secondary">
      <Heading center eyebrow="The Consultation" title="Understand What to Expect From Your Consultation." />
      <ol className="relative mt-14 grid gap-8 md:grid-cols-5 md:gap-4">
        <span aria-hidden className="absolute left-6 top-6 bottom-6 w-px bg-border md:left-[10%] md:right-[10%] md:top-6 md:bottom-auto md:h-px md:w-auto" />
        {STEPS.map(({ icon: Icon, t, d }, i) => (
          <li key={t} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
            <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-4 border-secondary bg-primary text-primary-foreground">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent md:mt-4">Step {i + 1}</p>
              <h3 className="mt-1 font-bold text-primary">{t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Options() {
  return (
    <Section>
      <Heading center title="Choose the Consultation Option That Works for You." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="flex flex-col rounded-3xl border border-border p-8">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-accent"><MapPin className="size-6" /></span>
          <h3 className="mt-6 text-2xl font-extrabold text-primary">In-Clinic Consultation</h3>
          <dl className="mt-5 space-y-3 text-foreground">
            <div className="flex gap-3"><dt className="sr-only">Location</dt><MapPin className="mt-0.5 size-5 shrink-0 text-accent" /><dd>{CLINIC}</dd></div>
            <div className="flex gap-3"><dt className="sr-only">Availability</dt><Clock className="mt-0.5 size-5 shrink-0 text-accent" /><dd>Monday, Wednesday, Friday<br />6:00 PM–9:00 PM</dd></div>
          </dl>
          <WaButton message="clinic" className="mt-auto pt-0 [margin-top:2rem]">Ask About In-Clinic Appointments</WaButton>
        </article>
        <article className="flex flex-col rounded-3xl border border-primary bg-primary p-8 text-primary-foreground">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10"><Video className="size-6" /></span>
          <h3 className="mt-6 text-2xl font-extrabold">Online Consultation</h3>
          <p className="mt-5 leading-relaxed text-primary-foreground/80">Explore online psychiatric consultation options from Pakistan or internationally, subject to appointment availability.</p>
          <WaButton message="online" variant="light" className="[margin-top:2rem] mt-auto">Ask About Online Consultation</WaButton>
        </article>
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section className="bg-secondary">
      <Heading center title="Take the First Step Toward Understanding Your Mental Health." />
      <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-3xl border border-border bg-background shadow-[0_30px_60px_-40px_var(--color-primary)]">
        <div className="bg-primary p-8 text-primary-foreground">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Psychiatric Consultation</p>
          <p className="mt-1 text-sm text-primary-foreground/70">with Dr. Mohsin Mehmood</p>
          <p className="mt-6 flex items-baseline gap-2"><span className="text-lg font-semibold">PKR</span><span className="text-5xl font-extrabold tracking-tight">2,200</span></p>
          <p className="mt-1 text-sm text-primary-foreground/70">Consultation fee</p>
        </div>
        <div className="p-8">
          <ul className="space-y-3.5">
            {["One-to-one psychiatric consultation", "Professional assessment", "Discussion of appropriate treatment options"].map((b) => (
              <li key={b} className="flex gap-3 text-foreground"><Check className="mt-0.5 size-5 shrink-0 text-accent" />{b}</li>
            ))}
          </ul>
          <WaButton className="mt-8 w-full">Book Your Consultation</WaButton>
          <p className="mt-4 text-center text-xs text-muted-foreground">Our team will share booking and payment details on WhatsApp.</p>
        </div>
      </div>
    </Section>
  );
}

export function Credentials() {
  return (
    <Section>
      <Heading center title="Learn More About the Doctor's Professional Approach." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[
          { icon: GraduationCap, t: "Qualified Specialist", d: "MBBS and FCPS (Psychiatry), Fellow of the College of Physicians & Surgeons Pakistan." },
          { icon: UserRound, t: "Patient-Centred", d: "Careful listening and respect for each patient's individual experiences." },
          { icon: ShieldCheck, t: "Nonjudgmental Care", d: "Open-minded discussion of your concerns and treatment options." },
        ].map(({ icon: Icon, t, d }) => (
          <article key={t} className="rounded-2xl border border-border p-7 text-center">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-accent"><Icon className="size-6" /></span>
            <h3 className="mt-4 font-bold text-primary">{t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

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
    <Section id="faqs" className="bg-secondary">
      <Heading center eyebrow="FAQs" title="It's Okay to Have Questions Before Seeking Psychiatric Help." />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className={cn("rounded-2xl border bg-background transition-colors", isOpen ? "border-accent/40" : "border-border")}>
              <h3>
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-primary"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
              </h3>
              {isOpen && <p id={`faq-${i}`} className="px-5 pb-5 leading-relaxed text-muted-foreground">{f.a}</p>}
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-background p-8 text-center">
        <h3 className="text-xl font-extrabold text-primary">Still Have Questions?</h3>
        <WaButton message="question" variant="whatsapp" icon="chat" className="mt-5">Chat With Our Team</WaButton>
      </div>
    </Section>
  );
}

export function Resources() {
  const cards = [
    { icon: PlayCircle, t: "Mental Health Educational Videos", d: "Short educational videos about common mental health concerns.", cta: "Watch Educational Videos" },
    { icon: BookOpen, t: "Mental Health E-book", d: "“10 Scientifically Proven Ways to Improve Your Mental Health”", cta: "Get the E-book" },
    { icon: Users, t: "WhatsApp Community", d: "Stay connected for educational information and future updates.", cta: "Join the WhatsApp Community" },
  ];
  return (
    <Section>
      <Heading center title="Not Ready to Book Yet? Start by Learning More About Your Mental Health." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {cards.map(({ icon: Icon, t, d, cta }) => (
          <article key={t} className="flex flex-col rounded-2xl border border-border p-7">
            <Icon className="size-7 text-accent" />
            <h3 className="mt-4 font-bold text-primary">{t}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">{d}</p>
            <button disabled className="mt-6 min-h-11 cursor-not-allowed rounded-full border border-border px-5 text-sm font-semibold text-muted-foreground">
              {cta} · Coming soon
            </button>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          You Don't Need to Have Everything Figured Out Before Asking for Help.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
          If emotional or psychological difficulties are affecting your everyday life, a professional assessment can help you
          understand your situation and explore possible next steps. Start with a conversation about what you're experiencing.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <WaButton variant="light">Book Your Consultation</WaButton>
          <WaButton variant="ghost-light" icon="chat">Chat on WhatsApp</WaButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary px-5 pb-28 pt-14 text-primary-foreground/80 sm:px-8 md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-primary-foreground">Dr. Mohsin Mehmood</p>
          <p className="text-sm">Consultant Psychiatrist · MBBS, FCPS (Psychiatry)</p>
        </div>
        <ul className="space-y-3 text-sm">
          <li><a className="flex gap-2 hover:text-primary-foreground" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4" />WhatsApp: {WHATSAPP_DISPLAY}</a></li>
          <li><a className="flex gap-2 break-all hover:text-primary-foreground" href={`mailto:${EMAIL}`}><Mail className="size-4 shrink-0" />{EMAIL}</a></li>
          <li className="flex gap-2"><MapPin className="size-4 shrink-0" />{CLINIC}</li>
          <li className="flex gap-2"><Clock className="size-4 shrink-0" />{HOURS}</li>
        </ul>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:flex-col" aria-label="Footer">
          {[["#home", "Home"], ["#about", "About"], ["#consultation", "Consultation"], ["#faqs", "FAQs"], ["#contact", "Contact"]].map(([h, l]) => (
            <a key={h} href={h} className="hover:text-primary-foreground">{l}</a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-primary-foreground/10 pt-6 text-xs leading-relaxed text-primary-foreground/60">
        The information on this page is for educational purposes only and is not a substitute for professional medical advice,
        diagnosis, or treatment. If you are in crisis or at risk of harming yourself, please go to your nearest emergency department immediately.
      </p>
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
