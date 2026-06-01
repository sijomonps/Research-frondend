import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { coordinatorNav } from "@/data/roleNav";

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
        <div className="mt-6 rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--muted)] p-6 text-sm text-slate-500">
          Department analytics are not available yet.
        </div>
      </section>
    </PageLayout>
  );
}
