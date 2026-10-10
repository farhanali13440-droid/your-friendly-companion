import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, Coins, Eye,
  MapPin, Menu, Phone, ShieldCheck, Users, X, MessageCircle, Instagram,
  Facebook,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const PHONE = "03006913585";
const WHATSAPP = "https://wa.me/923006913585";
const faqs = [
  { q: "What is cataract and how is it treated?", a: "A cataract is clouding of the eye’s natural lens that can make vision blurry. After an eye examination, cataract surgery may be recommended when it begins to affect daily activities." },
  { q: "How much does cataract surgery cost?", a: "Cataract surgery prices start from PKR 25,000, depending on the lens selected and your individual treatment needs. Our team can explain suitable options after an assessment." },
  { q: "Do you perform surgery without injection and suture?", a: "Selected cataract procedures may be performed using modern techniques without stitches. Your ophthalmologist will explain which approach is appropriate for your eyes." },
  { q: "Can children get an eye checkup here?", a: "Yes. We welcome children, adults and seniors for eye checkups and can advise you on the right examination for your child’s age and symptoms." },
  { q: "What is glaucoma and how can it be detected early?", a: "Glaucoma can damage the optic nerve, often without obvious early symptoms. Regular eye examinations, including eye pressure and optic nerve checks when indicated, can help detect it early." },
];
const locations = [
  { name: "Sahiwal Branch", hospital: "Al-Rehmat Hospital,", city: "Sahiwal", phone: "0300-6913585", image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=500&q=85" },
  { name: "Pakpattan Branch", hospital: "Al-Shifa Hospital,", city: "Pakpattan", phone: "0325-6553573", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=85" },
];

function Brand({ light = false }: { light?: boolean }) {
  return <a href="#home" className={`brand ${light ? "brand-light" : ""}`} aria-label="NOVA Eye Centre home">
    <span className="brand-eye"><Eye size={35} strokeWidth={2.5} /><i /></span>
    <span className="brand-words"><strong>NOVA</strong><small>EYE CENTRE</small></span>
  </a>;
}
function WhatsAppButton({ children = "Book on WhatsApp", className = "" }: { children?: ReactNode; className?: string }) {
  return <a className={`btn btn-green ${className}`} href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} />{children}</a>;
}
function PhoneButton({ children = "Call for Appointment", className = "" }: { children?: React.ReactNode; className?: string }) {
  return <a className={`btn btn-blue ${className}`} href={`tel:${PHONE}`}><Phone size={17} fill="currentColor" />{children}</a>;
}
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [review, setReview] = useState(0);
  const testimonials = [
    { quote: "My vision is much clearer after cataract surgery. The staff was very supportive and the experience was excellent.", name: "Patient – Sahiwal" },
    { quote: "The team explained my eye examination clearly and made the whole visit comfortable.", name: "Patient – Pakpattan" },
    { quote: "Professional care, friendly staff and a very smooth appointment experience.", name: "Patient – Sahiwal" },
  ];
  return <main id="home" className="nova-site">
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} onClick={() => setMenuOpen(false)}>
          <a href="#home">Home</a><a href="#about">About Us</a>
          <a href="#services">Services <ChevronDown size={12} /></a><a href="#cataract">Cataract Surgery</a>
          <a href="#locations">Our Locations <ChevronDown size={12} /></a><a href="#stories">Patient Stories</a><a href="#contact">Contact</a>
        </nav>
        <div className="header-actions"><PhoneButton className="header-call">Call Us</PhoneButton><WhatsAppButton className="header-wa">WhatsApp</WhatsAppButton></div>
      </div>
    </header>

    <section className="hero split-section" id="about">
      <div className="hero-copy">
        <span className="eyebrow">YOUR VISION. OUR PRIORITY.</span>
        <h1>Expert Eye Care<br /><span>in Sahiwal &amp; Pakpattan</span></h1>
        <p>From simple eye checkups to advanced cataract and eye disease management, NOVA EYE CENTRE provides modern and compassionate care for you and your family.</p>
        <div className="trust-points">
          <div><Users /><span><b>Almost 5 Years</b><small>Experience</small></span></div>
          <div><Eye /><span><b>Modern Eye Care</b><small>for All Ages</small></span></div>
          <div><ShieldCheck /><span><b>Surgery Without</b><small>Injection &amp; Suture</small></span></div>
          <div><MapPin /><span><b>Two Convenient</b><small>Locations</small></span></div>
        </div>
        <div className="hero-actions"><WhatsAppButton> <span>Book Your Eye Checkup<small>on WhatsApp</small></span></WhatsAppButton><PhoneButton /></div>
      </div>
      <div className="hero-visual">
        <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=90" alt="Eye specialist examining a patient" />
        <div className="price-badge"><span>Eye<br />Checkup Only</span><strong>PKR 200</strong><i /></div>
      </div>
    </section>

    <section className="offer-banner split-section">
      <div className="offer-copy"><span className="eyebrow">SPECIAL OFFER</span><h2>Eye Checkup Only<br /><span>PKR 200</span></h2><p>Get a complete eye examination by an experienced eye care professional. Suitable for adults, seniors and children.</p><div className="inline-actions"><WhatsAppButton>Book on WhatsApp</WhatsAppButton><PhoneButton>Call Now</PhoneButton></div></div>
      <div className="offer-image"><img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=90" alt="Smiling child having an eye examination" /></div>
    </section>

    <section className="cataract-banner split-section" id="cataract">
      <div className="cataract-copy"><span className="eyebrow">ADVANCED &amp; SAFE TREATMENT</span><h2>Cataract Surgery</h2><p>Clearer vision with modern techniques. We perform selected eye surgeries without injection and suture.</p><ul><li><Check />Advanced surgical techniques</li><li><Check />Wide range of lens options</li><li><Check /><span>Prices starting from PKR 25,000<br />(depending on lens type)</span></li><li><Check />Comfortable and quicker recovery</li></ul><a className="btn btn-white" href="#services">Learn More About Cataract Surgery <ArrowRight size={16} /></a></div>
      <div className="cataract-image"><img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=90" alt="Modern surgical care in an operating room" /></div>
    </section>

    <section className="services-intro" id="services"><span className="eyebrow">OUR SERVICES</span><h2>Comprehensive Eye Care for All Ages</h2><p>From routine checkups to advanced treatments, we provide complete eye care under one roof.</p><a className="btn btn-blue" href="#all-services">View All Services <ArrowRight size={16} /></a></section>
    <section className="featured-service split-section" id="all-services"><div className="featured-copy"><span className="eyebrow">FEATURED SERVICE</span><h2>Cataract Surgery</h2><p>Modern and safe cataract surgery options to help you see clearly again. Various lens options are available to suit your needs and budget.</p><a className="btn btn-blue" href="#cataract">Learn More <ArrowRight size={16} /></a></div><div className="eye-closeup"><img src="https://images.unsplash.com/photo-1530128118208-89f6ce02b37b?auto=format&fit=crop&w=1200&q=90" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1530128118208-89f6ce02b37b?auto=format&fit=crop&w=1200&q=90"; }} alt="Close-up of an eye" /></div></section>

    <section className="why-section"><span className="eyebrow">WHY CHOOSE NOVA EYE CENTRE?</span><h2>Care that puts you first</h2><p>We are committed to providing high-quality, affordable and patient-focused eye care.</p><div className="benefits">
      <article><span><Users /></span><h3>Experienced Team</h3><p>Almost 5 years of<br />experience in eye care</p></article>
      <article><span><Eye /></span><h3>Modern Technology</h3><p>Advanced equipment<br />for accurate diagnosis</p></article>
      <article><span><ShieldCheck /></span><h3>Surgery Without<br />Injection &amp; Suture</h3><p>Selected eye surgeries<br />with modern techniques</p></article>
      <article><span><Coins /></span><h3>Affordable Care</h3><p>Eye checkup only PKR 200<br />and flexible options for<br />cataract surgery</p></article>
    </div></section>

    <section className="locations-section" id="locations"><div className="location-overlay" /><div className="locations-heading"><span className="eyebrow">OUR LOCATIONS</span><h2>Two Convenient Branches</h2><p>Quality eye care services now available in Sahiwal and Pakpattan.</p></div><div className="location-cards">{locations.map((loc) => <article className="location-card" key={loc.name}><img src={loc.image} alt={loc.name + " building"} /><div className="location-info"><h3><MapPin />{loc.name}</h3><p>{loc.hospital}<br />{loc.city}</p><a href={`tel:${loc.phone.replaceAll("-", "")}`}><Phone />{loc.phone}</a><a href={WHATSAPP}><MessageCircle />{loc.phone}</a><a className="btn btn-blue directions" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.hospital + " " + loc.city)}`} target="_blank" rel="noreferrer"><MapPin size={15} />Get Directions <ArrowRight size={15} /></a></div></article>)}</div></section>

    <section className="stories-section" id="stories"><span className="eyebrow">PATIENT STORIES</span><h2>Real People. Real Results.</h2><p>Hear from our patients about their experience at NOVA EYE CENTRE.</p><div className="testimonial-row"><button className="round-arrow" aria-label="Previous testimonial" onClick={() => setReview((review + testimonials.length - 1) % testimonials.length)}><ChevronLeft /></button><article className="testimonial"><div className="patient-avatar"><Users /></div><div><span className="quote-mark">“</span><p>{testimonials[review].quote}</p><strong>{testimonials[review].name}</strong></div><span className="quote-end">”</span></article><button className="round-arrow" aria-label="Next testimonial" onClick={() => setReview((review + 1) % testimonials.length)}><ChevronRight /></button></div></section>

    <section className="faq-section"><h2>Frequently Asked Questions</h2><p>Find answers to common questions about our services, procedures and appointments.</p><div className="faq-list">{faqs.map((faq, i) => <article className={openFaq === i ? "faq-item faq-expanded" : "faq-item"} key={faq.q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{faq.q}</span><span>{openFaq === i ? "−" : "+"}</span></button>{openFaq === i && <p>{faq.a}</p>}</article>)}</div></section>

    <section className="final-cta" id="contact"><div><span className="eyebrow">TAKE THE FIRST STEP</span><h2>Book Your Eye Checkup Today</h2><p>Get expert advice for your eye health. Convenient locations in Sahiwal and Pakpattan.</p></div><div className="final-actions"><WhatsAppButton>WhatsApp Us Now</WhatsAppButton><PhoneButton>Call Us Now</PhoneButton></div></section>

    <footer className="site-footer"><div className="footer-main"><Brand light /><div><h3>Quick Links</h3><div className="footer-links"><a href="#home">Home</a><a href="#about">About Us</a><a href="#cataract">Cataract Surgery</a><a href="#locations">Our Locations</a><a href="#stories">Patient Stories</a><a href="#contact">Contact</a></div></div><div><h3>Our Locations</h3><p><MapPin /> Al-Rehmat Hospital,<br />Sahiwal</p><a className="footer-phone" href="tel:03006913585">0300-6913585</a><p><MapPin /> Al-Shifa Hospital,<br />Pakpattan</p><a className="footer-phone" href="tel:03256553573">0325-6553573</a></div><div><h3>Follow Us</h3><a className="social-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook /> NOVA EYE CENTRE</a><a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram /> novaeyecentre</a><a className="social-link" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp Us</a></div></div><div className="footer-bottom"><span>© 2026 NOVA EYE CENTRE. All rights reserved.</span><span>Clearer Vision. Brighter Tomorrows.</span></div></footer>
  </main>;
}
