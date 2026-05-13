import {
  CheckCircle,
  ClipboardCheck,
  FileText,
  XCircle,
} from "lucide-react";
import { DashboardCards } from "@/components/DashboardCards";
import { PageLayout } from "@/components/PageLayout";
import { adminNav } from "@/data/roleNav";

const metrics = [
  { label: "Total submissions", value: "128", icon: FileText },
  { label: "Pending", value: "32", icon: ClipboardCheck },
  { label: "Approved", value: "96", icon: CheckCircle },
  { label: "Rejected", value: "12", icon: XCircle },
];

const inputClass =
  "mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-3 py-2 text-xs text-slate-600 shadow-sm";

const departmentSummary = [
  { name: "Computer Science", value: 45, share: "35%" },
  { name: "Information Technology", value: 32, share: "25%" },
  { name: "Electronics", value: 28, share: "22%" },
  { name: "Mechanical Engineering", value: 15, share: "18%" },
];

export default function AdminReportsPage() {
  return (
    <PageLayout
      title="Reports"
      userName="Admin"
      roleLabel="Administrator"
      navItems={adminNav}
      activeItem="Reports"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
          Reports
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Institution-wide submission analytics and summaries.
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
              <option>Information Technology</option>
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
        <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)] p-5">
          <h3 className="text-sm font-semibold text-[color:var(--maroon-900)]">
            Submissions by department
          </h3>
          <div className="mt-4 space-y-3">
            {departmentSummary.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl border border-white bg-white px-3 py-2 text-xs text-slate-600"
              >
                <div>
                  <p className="font-semibold text-slate-700">{item.name}</p>
                  <p className="text-[10px] text-slate-400">
                    {item.value} submissions
                  </p>
                </div>
                <span className="rounded-full border border-[color:var(--border)] px-2 py-1 text-[10px] font-semibold text-[color:var(--maroon-700)]">
                  {item.share}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
