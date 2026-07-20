"use client";

import { useState } from "react";
import { contact } from "@/data/contact";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mx-auto max-w-2xl space-y-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {contact.form.fields.slice(0, 2).map((f) => (
          <Field key={f.name} {...f} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {contact.form.fields.slice(2).map((f) => (
          <Field key={f.name} {...f} />
        ))}
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-2">
          {contact.form.message.label}
        </label>
        <textarea
          name={contact.form.message.name}
          rows={6}
          className="w-full rounded-sm border border-border bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand-500"
        />
      </div>
      <button
        type="submit"
        className="min-h-[44px] w-full rounded-sm bg-brand-900 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-brand-600 sm:w-auto"
      >
        {contact.form.submitLabel}
      </button>
      {submitted && (
        <p role="status" className="text-sm font-medium text-brand-600">
          Thanks — your message has been received.
        </p>
      )}
    </form>
  );
}

function Field({
  name,
  label,
  type,
  required,
}: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-2">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full min-h-[44px] rounded-sm border border-border bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand-500"
      />
    </div>
  );
}
