import Link from "next/link";
import { Plus } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { DataTable } from "@/components/Table";
import { StatusBadge } from "@/components/StatusBadge";
import { facultyNav } from "@/data/roleNav";

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "department", label: "Department" },
  { key: "status", label: "Status" },
  { key: "action", label: "Action", align: "right" as const },
];

const rows = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@univ.edu",
    department: "Computer Science",
    status: <StatusBadge status="Active" />,
    action: (
      <Link
        href="/faculty/scholars/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        View
      </Link>
    ),
  },
  {
    id: "2",
    name: "Sarah Wilson",
    email: "sarah.wilson@univ.edu",
    department: "Electronics",
    status: <StatusBadge status="Active" />,
    action: (
      <Link
        href="/faculty/scholars/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        View
      </Link>
    ),
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.brown@univ.edu",
    department: "Information Tech",
    status: <StatusBadge status="Inactive" />,
    action: (
      <Link
        href="/faculty/scholars/details"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        View
      </Link>
    ),
  },
];

export default function FacultyScholarsPage() {
  return (
    <PageLayout
      title="Scholars"
      userName="Dr. Emily Davis"
      roleLabel="Faculty Member"
      navItems={facultyNav}
      activeItem="Scholars"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4">
          <div>
            <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
              Scholars
            </h2>
            <p className="text-sm text-slate-500">
              Manage scholars under your supervision.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--maroon-800)] px-4 py-2 text-xs font-semibold text-white shadow-sm"
          >
            <Plus className="h-4 w-4" />
            Add Scholar
          </button>
        </div>
        <div className="mt-4">
          <DataTable columns={columns} rows={rows} />
        </div>
      </section>
    </PageLayout>
  );
}
