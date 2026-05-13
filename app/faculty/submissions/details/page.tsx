import Link from "next/link";
import { ArrowLeft, Paperclip } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { facultyNav } from "@/data/roleNav";

export default function FacultySubmissionDetailsPage() {
  return (
    <PageLayout
      title="Submission Details"
      userName="Dr. Emily Davis"
      roleLabel="Faculty Member"
      navItems={facultyNav}
      activeItem="Submissions"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <Link
          href="/faculty/submissions"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--maroon-700)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Submissions
        </Link>
        <div className="mt-4 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-5">
            <div>
              <h2 className="font-display text-xl text-[color:var(--maroon-900)]">
                AI in Healthcare
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Submitted on 15 May 2024 by John Smith
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)] p-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span>Department: Computer Science</span>
                <StatusBadge status="Pending" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[color:var(--maroon-900)]">
                Abstract
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                This research explores the application of artificial intelligence in
                healthcare for improving diagnostics, treatment planning, and
                patient monitoring.
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--border)] bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-[color:var(--maroon-900)]">
                File
              </h3>
              <div className="mt-3 flex items-center justify-between rounded-xl border border-[color:var(--border)] px-3 py-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Paperclip className="h-4 w-4" />
                  AI_in_Healthcare.pdf
                </div>
                <button type="button" className="text-xs font-semibold text-[color:var(--maroon-700)]">
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-[color:var(--maroon-900)]">
              Actions
            </h3>
            <div className="mt-4 space-y-3">
              <button
                type="button"
                className="w-full rounded-full bg-[color:var(--maroon-800)] px-4 py-2 text-xs font-semibold text-white"
              >
                Approve
              </button>
              <button
                type="button"
                className="w-full rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-slate-600"
              >
                Reject
              </button>
              <button
                type="button"
                className="w-full rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold text-slate-600"
              >
                Request Changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
