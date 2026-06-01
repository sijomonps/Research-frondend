"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { adminNav } from "@/data/roleNav";
import { apiGet, type ApiItemResponse } from "@/lib/api";

type User = {
  _id: string;
  name: string;
  email: string;
  role?: string;
  roles?: string[];
  department?: string;
  status?: string;
  phone?: string;
  researchCenter?: { name?: string; code?: string } | null;
  guide?: { name?: string; email?: string } | null;
};

const roleLabels: Record<string, string> = {
  admin: "Admin",
  coordinator: "Research Center Coordinator",
  faculty: "Faculty",
  scholar: "Scholar",
  research_guide: "Research Guide",
};

export default function AdminUserDetailsPage() {
  const searchParams = useSearchParams();
  const userId = useMemo(() => searchParams.get("id") ?? "", [searchParams]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(Boolean(userId));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;
    let isMounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await apiGet<ApiItemResponse<User>>(`/users/${userId}`);
        if (!isMounted) return;
        setUser(response.item);
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err.message : "Failed to load user");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  const roles = (user?.roles ?? (user?.role ? [user.role] : []))
    .map((role) => roleLabels[role] ?? role)
    .join(", ");

  return (
    <PageLayout
      title="User Details"
      userName="Admin"
      roleLabel="Administrator"
      navItems={adminNav}
      activeItem="Users"
    >
      <section className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
        <Link
          href="/admin/users"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--maroon-700)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Users
        </Link>

        <div className="mt-4">
          {loading ? <p className="text-sm text-slate-500">Loading user...</p> : null}
          {!loading && !userId ? <p className="text-sm text-slate-500">Missing user id.</p> : null}
          {!loading && error ? <p className="text-sm text-red-600">Failed to load: {error}</p> : null}
          {!loading && !error && user ? (
            <div className="space-y-5">
              <div>
                <h2 className="font-display text-xl text-[color:var(--maroon-900)]">{user.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{user.email}</p>
              </div>
              <div className="grid gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted)] p-4 text-sm text-slate-700 md:grid-cols-2">
                <p>
                  <span className="font-semibold">Roles:</span> {roles || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Department:</span> {user.department || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> {user.phone || "N/A"}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Status:</span>
                  <StatusBadge status={user.status ?? "Active"} />
                </p>
                <p>
                  <span className="font-semibold">Research Center:</span>{" "}
                  {user.researchCenter?.name ?? "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Guide:</span> {user.guide?.name ?? "N/A"}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </PageLayout>
  );
}
