import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { DataTable } from "@/components/Table";
import { StatusBadge } from "@/components/StatusBadge";
import { adminNav } from "@/data/roleNav";

const columns = [
  { key: "title", label: "Title" },
  { key: "author", label: "Author" },
  { key: "department", label: "Department" },
  { key: "submitted", label: "Submitted On" },
  { key: "status", label: "Status" },
  { key: "action", label: "Action", align: "right" as const },
];

const rows = [
  {
    id: "1",
    title: "AI in Healthcare",
    author: "John Smith",
    department: "Computer Science",
    submitted: "15 May 2024",
    status: <StatusBadge status="Pending" />,
    action: (
      <Link
        href="/admin/submissions/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        Review
      </Link>
    ),
  },
  {
    id: "2",
    title: "Blockchain for Security",
    author: "Emily Davis",
    department: "Information Tech",
    submitted: "14 May 2024",
    status: <StatusBadge status="Pending" />,
    action: (
      <Link
        href="/admin/submissions/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        Review
      </Link>
    ),
  },
  {
    id: "3",
    title: "Smart Cities and IoT",
    author: "Michael Brown",
    department: "Electronics",
    submitted: "10 May 2024",
    status: <StatusBadge status="Approved" />,
    action: (
      <Link
        href="/admin/submissions/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        Review
      </Link>
    ),
  },
];

export default function AdminSubmissionsPage() {
  return (
    <PageLayout
      title="Submissions"
      userName="Admin"
      roleLabel="Administrator"
      navItems={adminNav}
      activeItem="Submissions"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4">
          <div>
            <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
              Submissions
            </h2>
            <p className="text-sm text-slate-500">
              Review all submissions across the institution.
            </p>
          </div>
          <select className="rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-xs font-semibold text-slate-600">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
        <div className="mt-4">
          <DataTable columns={columns} rows={rows} />
        </div>
      </section>
    </PageLayout>
  );
}
