import { User } from "lucide-react";

type TopbarProps = {
  title: string;
  userName: string;
  roleLabel: string;
};

export function Topbar({ title, userName, roleLabel }: TopbarProps) {
  return (
    <header className="border-b border-[color:var(--border)] bg-white px-6 py-5 shadow-[0_8px_20px_rgba(91,11,22,0.05)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl text-[color:var(--maroon-900)]">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--muted)] text-[color:var(--maroon-800)]">
            <User className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-800">{userName}</p>
            <p className="text-xs text-slate-500">{roleLabel}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
