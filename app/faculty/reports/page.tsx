import {
  CheckCircle,
  ClipboardCheck,
  FileText,
  XCircle,
} from "lucide-react";
import { DashboardCards } from "@/components/DashboardCards";
import { PageLayout } from "@/components/PageLayout";
import { facultyNav } from "@/data/roleNav";

const metrics = [
  { label: "Total submissions", value: "28", icon: FileText },
  { label: "Pending", value: "7", icon: ClipboardCheck },
  { label: "Approved", value: "15", icon: CheckCircle },
  { label: "Rejected", value: "6", icon: XCircle },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-3 py-2 text-xs text-slate-600 shadow-sm";

export default function FacultyReportsPage() {
  return (
    <PageLayout
      title="Reports"
      userName="Dr. Emily Davis"
      roleLabel="Faculty Member"
      navItems={facultyNav}
      activeItem="Reports"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
          Reports
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Generate summary reports for your scholars and submissions.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              From date
            </label>
            <input className={inputClass} placeholder="dd/mm/yyyy" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              To date
            </label>
            <input className={inputClass} placeholder="dd/mm/yyyy" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Department
            </label>
            <select className={inputClass} defaultValue="All Departments">
              <option>All Departments</option>
              <option>Computer Science</option>
              <option>Information Tech</option>
              <option>Electronics</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              className="w-full rounded-full bg-[color:var(--maroon-800)] px-4 py-2 text-xs font-semibold text-white"
            >
              Generate
            </button>
          </div>
        </div>
        <div className="mt-6">
          <DashboardCards items={metrics} />
        </div>
      </section>
    </PageLayout>
  );
}
