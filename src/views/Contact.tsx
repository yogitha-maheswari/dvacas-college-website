"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { PageShell } from "@/components/shared/PageShell";
import { PageHero } from "@/components/shared/PageHero";
import { CTAButton } from "@/components/shared/CTAButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { COLLEGE } from "@/data/college";
import { STRINGS } from "@/data/strings";

const socialIcons = [
  { href: COLLEGE.socialMedia.instagram, Icon: FaInstagram, label: "Instagram" },
  { href: COLLEGE.socialMedia.facebook, Icon: FaFacebookF, label: "Facebook" },
  { href: COLLEGE.socialMedia.youtube, Icon: FaYoutube, label: "YouTube" },
  { href: COLLEGE.socialMedia.linkedin, Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: COLLEGE.socialMedia.twitter, Icon: FaTwitter, label: "Twitter" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast({
      title: STRINGS.pages.contact.success,
      description: STRINGS.pages.contact.successDesc,
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${COLLEGE.address.coordinates.lat},${COLLEGE.address.coordinates.lng}`;

  return (
    <PageShell title="Contact | Dr. Vikram Aggarwal College of Arts & Science Chennai" description={STRINGS.pages.contact.sub}>
      <PageHero
        eyebrow={STRINGS.pages.contact.eyebrow}
        title={STRINGS.pages.contact.title}
        italicWord={STRINGS.pages.contact.titleItalic}
        sub={STRINGS.pages.contact.sub}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section bg-surface-canvas">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-3xl text-ink-primary md:text-4xl">{STRINGS.pages.contact.formHeading}</h2>
            <p className="mt-3 font-body text-ink-secondary">{STRINGS.pages.contact.formSub}</p>

            <form onSubmit={onSubmit} className="mt-10 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-sans text-xs uppercase tracking-[0.14em] text-ink-tertiary">
                    {STRINGS.pages.contact.name}
                  </label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-12 border-border-default bg-surface-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-sans text-xs uppercase tracking-[0.14em] text-ink-tertiary">
                    {STRINGS.pages.contact.email}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-12 border-border-default bg-surface-base"
                  />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block font-sans text-xs uppercase tracking-[0.14em] text-ink-tertiary">
                    {STRINGS.pages.contact.phone}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-12 border-border-default bg-surface-base"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block font-sans text-xs uppercase tracking-[0.14em] text-ink-tertiary">
                    {STRINGS.pages.contact.subject}
                  </label>
                  <Input
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="h-12 border-border-default bg-surface-base"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-sans text-xs uppercase tracking-[0.14em] text-ink-tertiary">
                  {STRINGS.pages.contact.message}
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="border-border-default bg-surface-base"
                />
              </div>

              <CTAButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={submitting}
                iconRight={<Send className="h-4 w-4" />}
              >
                {submitting ? STRINGS.pages.contact.submitting : STRINGS.pages.contact.submit}
              </CTAButton>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl bg-brand-primary p-8 text-ink-onDark relative overflow-hidden">
              <div className="absolute inset-0 grain-bg opacity-40" aria-hidden />
              <div className="relative z-10">
                <p className="eyebrow text-purple-pale">{STRINGS.pages.contact.reachUs}</p>

                <ul className="mt-6 space-y-6">
                  <li className="flex gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-silver" />
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-purple-pale">{STRINGS.pages.contact.address}</p>
                      <p className="mt-1 font-body text-sm text-ink-onDark/90">
                        {COLLEGE.address.street}, {COLLEGE.address.area}, {COLLEGE.address.city} {COLLEGE.address.pincode}
                      </p>
                      <p className="mt-1 font-sans text-xs text-purple-pale">{COLLEGE.address.landmark}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-silver" />
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-purple-pale">{STRINGS.pages.contact.phoneLabel}</p>
                      {COLLEGE.phone.map((p) => (
                        <a key={p} href={`tel:${p}`} className="block font-body text-sm text-ink-onDark/90 hover:text-silver">{p}</a>
                      ))}
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-silver" />
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-purple-pale">{STRINGS.pages.contact.emailLabel}</p>
                      <a href={`mailto:${COLLEGE.email}`} className="font-body text-sm text-ink-onDark/90 hover:text-silver">{COLLEGE.email}</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-silver" />
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-purple-pale">{STRINGS.pages.contact.whatsappLabel}</p>
                      <a
                        href={`https://wa.me/${COLLEGE.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-body text-sm text-ink-onDark/90 hover:text-silver"
                      >
                        {COLLEGE.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-silver" />
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-purple-pale">{STRINGS.pages.contact.hours}</p>
                      <p className="font-body text-sm text-ink-onDark/90">{STRINGS.pages.contact.hoursValue}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 border-t border-ink-onDark/15 pt-6">
                  <p className="eyebrow text-purple-pale mb-3">{STRINGS.pages.contact.socialLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {socialIcons.map(({ href, Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-onDark/20 text-ink-onDark/80 transition-all hover:border-silver hover:text-silver"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Map */}
      <section className="bg-surface-base pb-20">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">{STRINGS.pages.contact.mapLabel}</p>
              <h2 className="font-display text-2xl text-ink-primary md:text-3xl">{COLLEGE.address.area}, {COLLEGE.address.city}</h2>
            </div>
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer noopener"
              className="font-sans text-sm font-medium text-brand-primary story-link"
            >
              {STRINGS.pages.contact.directions} →
            </a>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-border-subtle">
            <iframe
              title={`${COLLEGE.name} location`}
              src={COLLEGE.address.mapEmbedUrl}
              className="h-105 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
