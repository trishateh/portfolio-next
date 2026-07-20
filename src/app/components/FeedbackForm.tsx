"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Magnetic from "./ui/Magnetic";

const fieldClasses =
  "bg-brand-surface border border-brand-line rounded-lg font-mono text-sm text-white placeholder:text-slate-600 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none block w-full p-2.5";

const labelClasses =
  "font-mono text-xs uppercase tracking-[0.2em] text-slate-500 block mb-2";

export function FeedbackForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<any>(null);

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setStatus("pending");
      setError(null);
      const myForm = event.target;
      const formData: any = new FormData(myForm);
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.status === 200) {
        setStatus("ok");
      } else {
        setStatus("error");
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`${e}`);
    }
  };

  return (
    <form
      className="flex flex-col"
      name="contact"
      onSubmit={handleFormSubmit}
      data-netlify="true"
      method="post"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="mb-6">
        <label htmlFor="email" className={labelClasses}>
          Your email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className={fieldClasses}
          placeholder="example@email.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className={labelClasses}>
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          className={fieldClasses}
          placeholder="Just saying hi"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          className={fieldClasses}
          placeholder="Let's talk about..."
        />
      </div>
      <Magnetic>
        <Button variant="primary" type="submit" disabled={status === "pending"}>
          {status === "pending" ? "Sending…" : "Send Message"}
        </Button>
      </Magnetic>
      {status === "ok" && (
        <p className="mt-4 font-mono text-sm text-brand-accent">
          {"message sent ✓"}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 font-mono text-sm text-red-400">
          {"error: "}{error}
        </p>
      )}
    </form>
  );
}
