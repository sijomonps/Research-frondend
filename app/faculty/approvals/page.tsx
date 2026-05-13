import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { DataTable } from "@/components/Table";
import { StatusBadge } from "@/components/StatusBadge";
import { facultyNav } from "@/data/roleNav";

const columns = [
  { key: "title", label: "Title" },
  { key: "scholar", label: "Scholar" },
  { key: "department", label: "Department" },
  { key: "submitted", label: "Submitted On" },
  { key: "status", label: "Status" },
  { key: "action", label: "Action", align: "right" as const },
];

const rows = [
  {
    id: "1",
    title: "AI in Healthcare",
    scholar: "John Smith",
    department: "Computer Science",
    submitted: "15 May 2024",
    status: <StatusBadge status="Pending" />,
    action: (
      <Link
        href="/faculty/submissions/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        View
      </Link>
    ),
  },
  {
    id: "2",
    title: "Blockchain for Security",
    scholar: "Michael Brown",
    department: "Information Tech",
    submitted: "14 May 2024",
    status: <StatusBadge status="Pending" />,
    action: (
      <Link
        href="/faculty/submissions/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        View
      </Link>
    ),
  },
  {
    id: "3",
    title: "Smart Cities and IoT",
    scholar: "Sarah Wilson",
    department: "Electronics",
    submitted: "10 May 2024",
    status: <StatusBadge status="Approved" />,
    action: (
      <Link
        href="/faculty/submissions/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        View
      </Link>
    ),
  },
];

export default function FacultyApprovalsPage() {
  return (
    <PageLayout
      title="Approvals"
      userName="Dr. Emily Davis"
      roleLabel="Faculty Member"
      navItems={facultyNav}
      activeItem="Approvals"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4">
          <div>
            <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
              Approval requests
            </h2>
            <p className="text-sm text-slate-500">
              Pending and approved decisions from your scholars.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[color:var(--border)] p-1">
            <button
              type="button"
              className="rounded-full bg-[color:var(--maroon-800)] px-4 py-1 text-xs font-semibold text-white"
            >
              Pending
            </button>
            <button
              type="button"
              className="rounded-full px-4 py-1 text-xs font-semibold text-slate-500"
            >
              Approved
            </button>
          </div>
        </div>
        <div className="mt-4">
          <DataTable columns={columns} rows={rows} />
        </div>
      </section>
    </PageLayout>
  );
}
