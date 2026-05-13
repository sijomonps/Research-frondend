import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { DataTable } from "@/components/Table";
import { StatusBadge } from "@/components/StatusBadge";
import { facultyNav } from "@/data/roleNav";

const submissionColumns = [
  { key: "title", label: "Title" },
  { key: "submitted", label: "Submitted On" },
  { key: "status", label: "Status", align: "right" as const },
];

const submissionRows = [
  {
    id: "1",
    title: "AI in Healthcare",
    submitted: "15 May 2024",
    status: <StatusBadge status="Pending" />,
  },
  {
    id: "2",
    title: "Deep Learning Applications",
    submitted: "10 May 2024",
    status: <StatusBadge status="Approved" />,
  },
  {
    id: "3",
    title: "Data Mining Techniques",
    submitted: "08 May 2024",
    status: <StatusBadge status="Approved" />,
  },
];

export default function FacultyScholarDetailsPage() {
  return (
    <PageLayout
      title="Scholar Details"
      userName="Dr. Emily Davis"
      roleLabel="Faculty Member"
      navItems={facultyNav}
      activeItem="Scholars"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <Link
          href="/faculty/scholars"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--maroon-700)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Scholars
        </Link>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--muted)] text-sm font-semibold text-[color:var(--maroon-800)]">
            JS
          </div>
          <div>
            <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
              John Smith
            </h2>
            <p className="text-sm text-slate-500">john.smith@univ.edu</p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span>Computer Science Department</span>
              <StatusBadge status="Active" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-3">
            <h3 className="text-sm font-semibold text-[color:var(--maroon-900)]">
              Submissions
            </h3>
          </div>
          <div className="mt-4">
            <DataTable columns={submissionColumns} rows={submissionRows} />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
