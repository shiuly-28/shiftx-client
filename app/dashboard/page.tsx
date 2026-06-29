"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  GitBranch,
  Server,
  Settings,
  Users,
  Activity,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";

const stats = [
  { icon: Activity, label: "Total Deployments", value: "248", change: "+12%" },
  { icon: Server, label: "Active Services", value: "16", change: "+2" },
  { icon: Clock, label: "Avg Deploy Time", value: "1m 42s", change: "-8%" },
  { icon: Users, label: "Team Members", value: "9", change: "+1" },
];

const deployments = [
  { project: "shiftx-client", branch: "main", status: "success", time: "2 min ago" },
  { project: "shiftx-api", branch: "develop", status: "building", time: "5 min ago" },
  { project: "shiftx-client", branch: "feature/auth", status: "success", time: "1 hour ago" },
  { project: "shiftx-worker", branch: "main", status: "failed", time: "3 hours ago" },
  { project: "shiftx-api", branch: "main", status: "success", time: "5 hours ago" },
];

const statusConfig = {
  success: { icon: CheckCircle2, color: "text-green-400", bg: "bg-green-500/10", label: "Success" },
  building: { icon: Loader2, color: "text-amber-400", bg: "bg-amber-500/10", label: "Building" },
  failed: { icon: XCircle, color: "text-red-400", bg: "bg-red-500/10", label: "Failed" },
};

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: GitBranch, label: "Deployments", active: false },
  { icon: Server, label: "Services", active: false },
  { icon: Users, label: "Team", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full flex  text-slate-60 font-sans">

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 p-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent mb-10"
        >
          ShiftX
        </Link>

        <nav className="flex flex-col gap-1.5">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                active
                  ? "bg-amber-500/10 text-amber-400 "
                  : "text-slate-400 hover:text-slate-60 hover:bg-slate-60/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
            ← Back to site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-10 overflow-x-hidden">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-1">Dashboard</h1>
            <p className="text-sm text-slate-400">Welcome back, here&apos;s what&apos;s happening.</p>
          </div>
          <button className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-95">
            New Deployment
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(({ icon: Icon, label, value, change }) => (
            <div
              key={label}
              className="p-5 rounded-2xl bg-slate-60/5 backdrop-blur-xl  shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-amber-500/10 ">
                  <Icon className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <span
                  className={`text-xs font-medium ${
                    change.startsWith("-") ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {change}
                </span>
              </div>
              <div className="text-2xl font-extrabold mb-0.5">{value}</div>
              <div className="text-xs text-slate-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Recent Deployments Table */}
        <div className="rounded-2xl bg-slate-60/5 backdrop-blur-xl   overflow-hidden">
          <div className="px-6 py-4 ">
            <h2 className="text-lg font-semibold">Recent Deployments</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500 ">
                  <th className="px-6 py-3 font-medium">Project</th>
                  <th className="px-6 py-3 font-medium">Branch</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {deployments.map((d, i) => {
                  const config = statusConfig[d.status];
                  const StatusIcon = config.icon;
                  return (
                    <tr
                      key={i}
                      className=""
                    >
                      <td className="px-6 py-4 font-medium">{d.project}</td>
                      <td className="px-6 py-4 text-slate-400">
                        <span className="px-2 py-0.5 rounded-md bg-slate-60/5 border border-slate-60/10 text-xs">
                          {d.branch}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
                          <StatusIcon className={`w-3.5 h-3.5 ${d.status === "building" ? "animate-spin" : ""}`} />
                          {config.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-400">{d.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}