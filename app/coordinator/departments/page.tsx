import Link from "next/link";
import { Plus, Search } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { DataTable } from "@/components/Table";
import { coordinatorNav } from "@/data/roleNav";

const columns = [
  { key: "department", label: "Department" },
  { key: "head", label: "Head / Coordinator" },
  { key: "email", label: "Email" },
  { key: "total", label: "Total Scholars" },
  { key: "action", label: "Action", align: "right" as const },
];

const rows = [
  {
    id: "1",
    department: "MCA - Master of Computer Applications",
    head: "Dr. Priya Sharma",
    email: "priya.sharma@college.edu",
    total: "28",
    action: (
      <Link
        href="/coordinator/departments/overview"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        View
      </Link>
    ),
  },
  {
    id: "2",
    department: "BCA - Bachelor of Computer Applications",
    head: "Dr. Rohit Verma",
    email: "rohit.verma@college.edu",
    total: "24",
    action: (
      <Link
        href="/coordinator/departments/overview"
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--maroon-700)]"
      >
        View
      </Link>
    ),
  },
];

export default function CoordinatorDepartmentsPage() {
  return (
    <PageLayout
      title="Departments"
      userName="Dr. Priya Sharma"
      roleLabel="Coordinator"
      navItems={coordinatorNav}
      activeItem="Departments"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4">
          <div>
            <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
              Departments
            </h2>
            <p className="text-sm text-slate-500">
              Monitor departments under the research centre.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--maroon-800)] px-4 py-2 text-xs font-semibold text-white shadow-sm"
          >
            <Plus className="h-4 w-4" />
            Add Department
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-xs text-slate-500">
            <Search className="h-4 w-4" />
            <span>Search departments...</span>
          </div>
        </div>
        <div className="mt-4">
          <DataTable columns={columns} rows={rows} />
        </div>
      </section>
    </PageLayout>
  );
}
