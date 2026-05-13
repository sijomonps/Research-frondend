import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { scholarNav } from "@/data/roleNav";

const inputClass =
  "mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--maroon-600)]";

export default function ScholarNewSubmissionPage() {
  return (
    <PageLayout
      title="New Submission"
      userName="Scholar User"
      roleLabel="Scholar"
      navItems={scholarNav}
      activeItem="My Submissions"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <Link
          href="/scholar/submissions"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--maroon-700)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to My Submissions
        </Link>
        <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
          New submission
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Submit your research paper for review.
        </p>
        <form className="mt-6 space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="title">
              Title
            </label>
            <input id="title" placeholder="Enter research title" className={inputClass} />
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="department">
                Department
              </label>
              <select id="department" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select department
                </option>
                <option>Computer Science</option>
                <option>Information Tech</option>
                <option>Electronics</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="file">
                File upload (PDF)
              </label>
              <input id="file" type="file" className={inputClass} />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="abstract">
              Abstract
            </label>
            <textarea
              id="abstract"
              placeholder="Enter abstract"
              className={`${inputClass} min-h-[120px] resize-none`}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-[color:var(--maroon-800)] px-6 py-2 text-xs font-semibold text-white shadow-sm"
            >
              Submit
            </button>
            <Link
              href="/scholar/submissions"
              className="rounded-full border border-[color:var(--border)] px-6 py-2 text-xs font-semibold text-slate-600"
            >
              Cancel
            </Link>
          </div>
        </form>
      </section>
    </PageLayout>
  );
}
