"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { COLLEGE, NAV_LINKS, COURSES } from "@/data/college";
import { STRINGS } from "@/data/strings";
import Image from "next/image";
import logo from "@/assets/dvacas-logo.jpeg";

const socialIcons = [
  { href: COLLEGE.socialMedia.instagram, Icon: FaInstagram, label: "Instagram" },
  { href: COLLEGE.socialMedia.facebook, Icon: FaFacebookF, label: "Facebook" },
  { href: COLLEGE.socialMedia.youtube, Icon: FaYoutube, label: "YouTube" },
  { href: COLLEGE.socialMedia.linkedin, Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: COLLEGE.socialMedia.twitter, Icon: FaTwitter, label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-brand-primary text-ink-onDark">
      <div className="absolute inset-0 grain-bg opacity-80" aria-hidden />
      <div className="container-wide relative z-10 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3" aria-label={COLLEGE.name}>
              <Image
                src={logo}
                alt={STRINGS.hero.badgeAlt}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full ring-1 ring-ink-onDark/20"
              />
              <div className="leading-tight">
                <p className="font-display text-lg text-white">{COLLEGE.shortName}</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-purple-pale">
                  Est. {COLLEGE.established}
                </p>
              </div>
            </Link>

            <p className="mt-6 font-body text-sm leading-relaxed text-purple-pale max-w-sm">
              {STRINGS.footer.tagline}
            </p>

            <div className="mt-8">
              <p className="eyebrow text-purple-pale mb-3">{STRINGS.footer.affiliations}</p>
              <p className="font-display text-base tracking-[0.03em] text-ink-onDark">{COLLEGE.affiliatedTo}</p>
              <p className="font-sans text-xs text-purple-pale mt-1">
                {COLLEGE.approvedBy.join(" · ")}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-purple-pale mb-5">{STRINGS.footer.quickLinks}</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-ink-onDark/80 transition-colors hover:text-silver"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-purple-pale mb-5">{STRINGS.footer.programmes}</p>
            <ul className="space-y-3">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/courses/${c.category}/${c.id}`}
                    className="font-sans text-sm text-ink-onDark/80 transition-colors hover:text-silver"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-purple-pale mb-5">{STRINGS.footer.contact}</p>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-silver" aria-hidden />
                <span className="text-ink-onDark/80">
                  {COLLEGE.address.street}, {COLLEGE.address.area},{" "}
                  {COLLEGE.address.city} {COLLEGE.address.pincode}
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-silver" aria-hidden />
                <a href={`tel:${COLLEGE.phone[0]}`} className="text-ink-onDark/80 hover:text-silver">
                  {COLLEGE.phone[0]}
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-silver" aria-hidden />
                <a href={`mailto:${COLLEGE.email}`} className="text-ink-onDark/80 hover:text-silver">
                  {COLLEGE.email}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <p className="eyebrow text-purple-pale mb-3">{STRINGS.footer.follow}</p>
              <div className="flex flex-wrap gap-2">
                {socialIcons.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-onDark/20 text-ink-onDark/80 transition-all hover:border-silver hover:text-silver hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ink-onDark/10 pt-8 font-sans text-xs text-purple-pale md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {COLLEGE.name}. {STRINGS.footer.rights}
          </p>
          <p className="italic">{STRINGS.footer.designed}</p>
        </div>
      </div>
    </footer>
  );
};
