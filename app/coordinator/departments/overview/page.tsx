import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  ClipboardCheck,
  FileText,
  Users,
} from "lucide-react";
import { DashboardCards } from "@/components/DashboardCards";
import { PageLayout } from "@/components/PageLayout";
import { coordinatorNav } from "@/data/roleNav";

const metrics = [
  { label: "Total scholars", value: "28", icon: Users },
  { label: "Total submissions", value: "56", icon: FileText },
  { label: "Approved", value: "32", icon: CheckCircle },
  { label: "Pending", value: "14", icon: ClipboardCheck },
];

const researchAreas = [
  { name: "Artificial Intelligence", value: 12 },
  { name: "Web Technologies", value: 10 },
  { name: "Data Science", value: 9 },
  { name: "Cloud Computing", value: 8 },
  { name: "Cyber Security", value: 7 },
];

const recentActivity = [
  "Riya Sharma submitted AI in Healthcare",
  "Aman Verma submitted Blockchain for Security",
  "Neha Gupta submission approved",
  "Pooja Singh submission rejected",
];

export default function CoordinatorOverviewPage() {
  return (
    <PageLayout
      title="MCA Department Overview"
      userName="Dr. Priya Sharma"
      roleLabel="Coordinator"
      navItems={coordinatorNav}
      activeItem="Departments"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <Link
          href="/coordinator/departments"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--maroon-700)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Departments
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--maroon-700)]">
              Department
            </p>
            <h2 className="mt-2 font-display text-xl text-[color:var(--maroon-900)]">
              MCA - Master of Computer Applications
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Academic year 2024-2025
            </p>
          </div>
        </div>
        <div className="mt-6">
          <DashboardCards items={metrics} />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)] p-5">
            <h3 className="text-sm font-semibold text-[color:var(--maroon-900)]">
              Top research areas
            </h3>
            <div className="mt-4 space-y-3">
              {researchAreas.map((area) => (
                <div key={area.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{area.name}</span>
                    <span>{area.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white">
                    <div
                      className="h-2 rounded-full bg-[color:var(--maroon-700)]"
                      style={{ width: `${area.value * 6}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)] p-5">
            <h3 className="text-sm font-semibold text-[color:var(--maroon-900)]">
              Recent activity
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {recentActivity.map((activity) => (
                <div key={activity} className="rounded-xl border border-white bg-white px-3 py-2">
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
