"use client";

import { useState, type ReactElement, type FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { contact } from "@/data/contact";
import { about } from "@/data/about";
import { site } from "@/data/site";

function IconPerson() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 20c1.4-3.7 4.4-5.5 7.5-5.5s6.1 1.8 7.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}
function IconMessage() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 5.5h16A1.5 1.5 0 0 1 21.5 7v9A1.5 1.5 0 0 1 20 17.5H9l-4.5 3.7V17.5H4A1.5 1.5 0 0 1 2.5 16V7A1.5 1.5 0 0 1 4 5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 13l5 5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icons: Record<string, () => ReactElement> = {
  first: IconPerson,
  last: IconPerson,
  email: IconMail,
  phone: IconPhone,
};

function validate(name: string, value: string): boolean {
  const v = value.trim();
  if (name === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  if (name === "phone") return v.replace(/\D/g, "").length >= 7;
  return v.length > 0;
}

function FloatingField({
  name,
  label,
  type,
  required,
  value,
  onChange,
}: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const Icon = icons[name] ?? IconPerson;
  const isValid = validate(name, value);
  const floated = focused || value.length > 0;
  const showError = touched && !focused && required && !isValid && value.length === 0;
  const showInvalid = touched && !focused && value.length > 0 && !isValid;

  return (
    <div className="relative">
      <div
        className={`flex items-center gap-2.5 rounded-xl border bg-white px-4 pb-2 pt-5 transition-colors duration-200 ${
          showError || showInvalid
            ? "border-red-300"
            : focused
              ? "border-brand-500"
              : "border-border"
        }`}
      >
        <span
          className={`shrink-0 transition-colors duration-200 ${
            focused ? "text-brand-600" : "text-ink-2/50"
          }`}
        >
          <Icon />
        </span>
        <div className="relative flex-1">
          <label
            htmlFor={name}
            className={`pointer-events-none absolute left-0 origin-left transition-all duration-200 ${
              floated
                ? "-top-[1.15rem] text-[11px] font-semibold uppercase tracking-wide text-brand-600"
                : "top-0 text-base text-ink-2"
            }`}
          >
            {label} {required && <span className="text-brand-600">*</span>}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            required={required}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => {
              setFocused(false);
              setTouched(true);
            }}
            className="min-h-[28px] w-full bg-transparent text-ink outline-none"
          />
        </div>
        <AnimatePresence>
          {touched && isValid && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white"
            >
              <IconCheck />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {showError && (
        <p className="mt-1 pl-1 text-xs font-medium text-red-500">{label} is required</p>
      )}
      {showInvalid && (
        <p className="mt-1 pl-1 text-xs font-medium text-red-500">
          {name === "email" ? "Enter a valid email address" : "Enter a valid phone number"}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<Record<string, string>>({
    first: "",
    last: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");
  const [messageFocused, setMessageFocused] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  const set = (name: string) => (v: string) => setValues((prev) => ({ ...prev, [name]: v }));

  const allValid = contact.form.fields
    .filter((f) => f.required)
    .every((f) => validate(f.name, values[f.name] ?? ""));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!allValid || (status !== "idle" && status !== "error")) return;
    setStatus("submitting");
    setFeedback(null);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: `${values.first} ${values.last}`,
          Email: values.email,
          Phone: values.phone,
          Message: message,
          _subject: `New website inquiry from ${values.first} ${values.last}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => null);
      const success = res.ok && (data?.success === true || data?.success === "true");
      if (!success) {
        setFeedback(
          data?.message ??
            "Something went wrong sending your message — please try again or call us directly."
        );
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setFeedback("Something went wrong sending your message — please try again or call us directly.");
      setStatus("error");
    }
  }

  const messageFloated = messageFocused || message.length > 0;

  return (
    <div className="relative mx-auto max-w-2xl pt-14 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: -14, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="absolute left-1/2 top-0 z-10 -translate-x-1/2"
      >
        <div className="relative">
          <span
            aria-hidden
            className="absolute -inset-2 rounded-full bg-gradient-to-br from-brand-500 via-brand-600 to-brand-900 opacity-60 blur-lg"
          />
          <Image
            src={about.photo}
            alt={about.ownerName}
            width={112}
            height={112}
            className="relative h-24 w-24 rounded-full object-cover ring-[5px] ring-white shadow-xl sm:h-28 sm:w-28"
          />
          <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 ring-[3px] ring-white">
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute h-2 w-2 rounded-full bg-white"
            />
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
        </div>
      </motion.div>

      <div className="relative overflow-hidden rounded-3xl bg-white p-6 pt-16 shadow-xl ring-1 ring-black/5 sm:p-10 sm:pt-20">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 via-brand-900 to-brand-500"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-100 blur-3xl"
        />

        <div className="relative mb-8 text-center">
          <p className="text-base font-semibold text-brand-900">
            You&apos;re talking directly to {about.ownerName}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-2/60">
            {about.ownerTitle} · {about.veteranBadge}
          </p>
        </div>

      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative flex flex-col items-center gap-4 py-12 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l5 5L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
            <h3 className="text-xl font-semibold text-brand-900">Message sent</h3>
            <p role="status" className="max-w-sm text-ink-2">
              Thanks — your message has been received. We&apos;ll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="relative space-y-6"
          >
            <div className="grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2">
              {contact.form.fields.map((f) => (
                <FloatingField
                  key={f.name}
                  name={f.name}
                  label={f.label}
                  type={f.type}
                  required={f.required}
                  value={values[f.name] ?? ""}
                  onChange={set(f.name)}
                />
              ))}
            </div>

            <div className="relative rounded-xl border border-border bg-white px-4 pb-2 pt-5 transition-colors duration-200 focus-within:border-brand-500">
              <span className="pointer-events-none absolute left-4 top-5 text-ink-2/50">
                <IconMessage />
              </span>
              <label
                htmlFor="your-message"
                className={`pointer-events-none absolute left-11 origin-left transition-all duration-200 ${
                  messageFloated
                    ? "-top-[0.15rem] text-[11px] font-semibold uppercase tracking-wide text-brand-600"
                    : "top-5 text-base text-ink-2"
                }`}
              >
                {contact.form.message.label}
              </label>
              <textarea
                id="your-message"
                name={contact.form.message.name}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setMessageFocused(true)}
                onBlur={() => setMessageFocused(false)}
                className="w-full resize-none bg-transparent pl-7 text-ink outline-none"
              />
              <span className="pointer-events-none absolute bottom-2 right-3 text-[11px] text-ink-2/40">
                {message.length} characters
              </span>
            </div>

            {status === "error" && (
              <p className="text-sm font-medium text-red-500">
                {feedback} Or call us at{" "}
                <a href={site.phoneHref} className="underline">
                  {site.phone}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={!allValid || status === "submitting"}
              className="group relative flex min-h-[48px] w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-900 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 enabled:hover:bg-brand-600 enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white"
                  />
                  Sending…
                </>
              ) : (
                contact.form.submitLabel
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
