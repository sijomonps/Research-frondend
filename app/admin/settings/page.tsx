import { PageLayout } from "@/components/PageLayout";
import { adminNav } from "@/data/roleNav";

const inputClass =
  "mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-slate-700 shadow-sm";

const settingsMenu = [
  "Profile",
  "Change Password",
  "System Settings",
  "Email Settings",
  "Backup",
];

export default function AdminSettingsPage() {
  return (
    <PageLayout
      title="Settings"
      userName="Admin"
      roleLabel="Administrator"
      navItems={adminNav}
      activeItem="Settings"
    >
      <section className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <div className="rounded-2xl border border-[color:var(--border)] bg-white p-5 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
          <h3 className="text-sm font-semibold text-[color:var(--maroon-900)]">
            Settings
          </h3>
          <div className="mt-4 space-y-2 text-sm">
            {settingsMenu.map((item) => (
              <button
                key={item}
                type="button"
                className={`w-full rounded-xl px-3 py-2 text-left text-xs font-semibold ${
                  item === "System Settings"
                    ? "bg-[color:var(--maroon-800)] text-white"
                    : "text-slate-600 hover:bg-[color:var(--muted)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-[0_14px_28px_rgba(91,11,22,0.08)]">
          <h2 className="font-display text-lg text-[color:var(--maroon-900)]">
            System Settings
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Configure core system preferences.
          </p>
          <div className="mt-6 space-y-5">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="systemName">
                System name
              </label>
              <input id="systemName" defaultValue="Research System" className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="organization">
                University / organization
              </label>
              <input id="organization" defaultValue="Example University" className={inputClass} />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="timezone">
                Timezone
              </label>
              <select id="timezone" className={inputClass} defaultValue="GMT+05:30">
                <option value="GMT+05:30">(GMT+05:30) India Standard Time</option>
                <option value="GMT+00:00">(GMT+00:00) UTC</option>
                <option value="GMT-05:00">(GMT-05:00) Eastern Time</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor="dateFormat">
                Date format
              </label>
              <input id="dateFormat" defaultValue="dd/mm/yyyy" className={inputClass} />
            </div>
            <button
              type="button"
              className="rounded-full bg-[color:var(--maroon-800)] px-6 py-2 text-xs font-semibold text-white shadow-sm"
            >
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
