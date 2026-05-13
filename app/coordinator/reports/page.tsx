import {
  CheckCircle,
  ClipboardCheck,
  FileText,
  XCircle,
} from "lucide-react";
import { DashboardCards } from "@/components/DashboardCards";
import { PageLayout } from "@/components/PageLayout";
import { coordinatorNav } from "@/data/roleNav";

const metrics = [
  { label: "Total submissions", value: "56", icon: FileText },
  { label: "Pending", value: "14", icon: ClipboardCheck },
  { label: "Approved", value: "32", icon: CheckCircle },
  { label: "Rejected", value: "10", icon: XCircle },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-3 py-2 text-xs text-slate-600 shadow-sm";

const statusSummary = [
  { label: "Approved", value: 32 },
  { label: "Pending", value: 14 },
  { label: "Rejected", value: 10 },
];

export default function CoordinatorReportsPage() {
  return (
    <PageLayout
      title="Reports (MCA)"
      userName="Dr. Priya Sharma"
      roleLabel="Coordinator"
      navItems={coordinatorNav}
      activeItem="Reports"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
          Reports - MCA
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Submission overview for the MCA department.
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
              Report type
            </label>
            <select className={inputClass} defaultValue="Submission Summary">
              <option>Submission Summary</option>
              <option>Approval Timeline</option>
              <option>Scholar Breakdown</option>
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
        <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)] p-5">
          <h3 className="text-sm font-semibold text-[color:var(--maroon-900)]">
            Submission status
          </h3>
          <div className="mt-4 space-y-3">
            {statusSummary.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-xs text-slate-500">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
