import Link from "next/link";
import { Search } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { DataTable } from "@/components/Table";
import { StatusBadge } from "@/components/StatusBadge";
import { coordinatorNav } from "@/data/roleNav";

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
    scholar: "Riya Sharma",
    department: "MCA",
    submitted: "15 May 2024",
    status: <StatusBadge status="Pending" />,
    action: (
      <Link
        href="/coordinator/submissions/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        Review
      </Link>
    ),
  },
  {
    id: "2",
    title: "Blockchain for Security",
    scholar: "Aman Verma",
    department: "MCA",
    submitted: "14 May 2024",
    status: <StatusBadge status="Pending" />,
    action: (
      <Link
        href="/coordinator/submissions/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        Review
      </Link>
    ),
  },
  {
    id: "3",
    title: "Smart Cities and IoT",
    scholar: "Neha Gupta",
    department: "MCA",
    submitted: "10 May 2024",
    status: <StatusBadge status="Approved" />,
    action: (
      <Link
        href="/coordinator/submissions/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        Review
      </Link>
    ),
  },
];

export default function CoordinatorSubmissionsPage() {
  return (
    <PageLayout
      title="Submissions (MCA)"
      userName="Dr. Priya Sharma"
      roleLabel="Coordinator"
      navItems={coordinatorNav}
      activeItem="Submissions"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4">
          <div>
            <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
              Submissions - MCA
            </h2>
            <p className="text-sm text-slate-500">
              Track and review MCA department submissions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-xs text-slate-500">
              <Search className="h-4 w-4" />
              <span>Search submissions...</span>
            </div>
            <select className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-xs font-semibold text-slate-600">
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <DataTable columns={columns} rows={rows} />
        </div>
      </section>
    </PageLayout>
  );
}
