import React from 'react';
import { Link } from 'react-router';
import {
  Sparkles,
  Plus,
  Briefcase,
  Building2,
  Users,
  ArrowRight,
  AlertCircle,
  ChevronRight,
} from 'lucide-react';

type SiteKey = 'alpine' | 'lg' | 'vodafone';

interface Site {
  key: SiteKey;
  route: string;
  name: string;
  type: string;
  client: string;
  lastActive: string;
  icon: React.ReactNode;
  alert: string;
  status: string;
  statusTone: 'amber' | 'red' | 'blue';
}

const sites: Site[] = [
  {
    key: 'alpine',
    route: '/alpine',
    name: 'Project Alpine',
    type: 'M&A Transaction',
    client: 'Confidential acquirer',
    lastActive: '8 min ago',
    icon: <Briefcase className="w-4 h-4 text-[#0a4e75]" />,
    alert: 'Employment workstream at risk — 4 new issues',
    status: 'At risk',
    statusTone: 'amber',
  },
  {
    key: 'lg',
    route: '/lg',
    name: 'L&G Institutional Portfolio',
    type: 'Real Estate',
    client: 'Legal & General',
    lastActive: '1 hr ago',
    icon: <Building2 className="w-4 h-4 text-[#0a4e75]" />,
    alert: '3 compliance actions outstanding',
    status: 'Action needed',
    statusTone: 'amber',
  },
  {
    key: 'vodafone',
    route: '/vodafone',
    name: 'Vodafone Employment Matters',
    type: 'Employment',
    client: 'Vodafone Group',
    lastActive: '25 min ago',
    icon: <Users className="w-4 h-4 text-[#0a4e75]" />,
    alert: 'Johnson hearing in 17 days — bundle outstanding',
    status: 'Urgent',
    statusTone: 'red',
  },
];

const activity = [
  {
    initials: 'SC',
    name: 'Sarah Chen',
    action: 'uploaded Employment Risk Summary v3',
    site: 'Project Alpine',
    siteRoute: '/alpine',
    time: '14 min ago',
  },
  {
    initials: 'JP',
    name: 'James Patel',
    action: 'uploaded Witness Statement — M.Johnson DRAFT.docx',
    site: 'Vodafone',
    siteRoute: '/vodafone',
    time: '38 min ago',
  },
  {
    initials: 'PP',
    name: 'Priya Patel',
    action: 'updated lease event — 120 Moorgate rent review',
    site: 'L&G Portfolio',
    siteRoute: '/lg',
    time: '1 hr ago',
  },
  {
    initials: 'MW',
    name: 'Michael Wright',
    action: 'commented on Issue 004 — Deferred tax',
    site: 'Project Alpine',
    siteRoute: '/alpine',
    time: '2 hr ago',
  },
  {
    initials: 'ED',
    name: 'Emma Davies',
    action: 'moved Okafor case to Hearing stage',
    site: 'Vodafone Employment',
    siteRoute: '/vodafone',
    time: '3 hr ago',
  },
];

const tasks = [
  {
    label: 'Review Employment Risk Summary',
    site: 'Project Alpine',
    siteRoute: '/alpine',
    due: 'Today',
    urgent: true,
  },
  {
    label: 'Approve ET3 draft — Okafor',
    site: 'Vodafone Employment',
    siteRoute: '/vodafone',
    due: 'Today',
    urgent: true,
  },
  {
    label: 'Sign off lease renewal — 120 Moorgate',
    site: 'L&G Portfolio',
    siteRoute: '/lg',
    due: 'Tomorrow',
    urgent: false,
  },
  {
    label: 'Review pension scheme analysis',
    site: 'Project Alpine',
    siteRoute: '/alpine',
    due: '28 May',
    urgent: false,
  },
];

export function Home() {
  return (
    <div className="bg-[#FAFAFA] min-h-[calc(100vh-168px)]">
      <div className="max-w-[1400px] mx-auto px-[15px] py-6">
        <div className="flex gap-6">
          {/* LEFT SIDEBAR */}
          <aside className="w-[240px] flex-shrink-0 hidden lg:block">
            <SitesSidebar />
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0">
            <MainContent />
          </main>

          {/* RIGHT TASKS PANEL */}
          <aside className="w-[256px] flex-shrink-0 hidden xl:block">
            <TasksPanel />
          </aside>
        </div>
      </div>
    </div>
  );
}

function SitesSidebar() {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg flex flex-col h-full min-h-[600px]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <h2 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#212223]">
          Sites
        </h2>
        <button
          className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#f4f4f4] transition-colors"
          aria-label="Add site"
        >
          <Plus className="w-4 h-4 text-[#404040]" />
        </button>
      </div>

      {/* Tabs */}
      <div className="px-4 pb-3 flex items-center gap-1">
        <button className="px-3 py-1 text-[13px] rounded-full bg-[#123021] text-white font-['Source_Sans_3',sans-serif] font-medium">
          Recent
        </button>
        <button className="px-3 py-1 text-[13px] rounded-full text-[#404040] hover:bg-[#f4f4f4] font-['Source_Sans_3',sans-serif] font-medium transition-colors">
          Favourites
        </button>
      </div>

      {/* Site list */}
      <div className="flex-1 px-2 pb-2">
        {sites.map((site) => (
          <Link
            key={site.key}
            to={site.route}
            className="block px-2 py-2.5 rounded-md hover:bg-[#f7f7f7] transition-colors no-underline"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded bg-[#eaf2f7] flex items-center justify-center flex-shrink-0 mt-0.5">
                {site.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-['Source_Sans_3',sans-serif] font-semibold text-[14px] text-[#123021] leading-[1.3] truncate">
                  {site.name}
                </p>
                <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-[#666] leading-[1.4] mt-0.5">
                  {site.type}
                </p>
                <p className="font-['Source_Sans_3',sans-serif] text-[11px] text-[#999] leading-[1.4] mt-0.5">
                  {site.lastActive}
                </p>
              </div>
            </div>
          </Link>
        ))}

        {/* Create new site */}
        <button className="w-full mt-1 px-2 py-2.5 rounded-md border border-dashed border-[#CCCCCC] hover:border-[#404040] hover:bg-[#f7f7f7] transition-colors flex items-center gap-2">
          <div className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0">
            <Plus className="w-4 h-4 text-[#404040]" />
          </div>
          <span className="font-['Source_Sans_3',sans-serif] font-medium text-[13px] text-[#404040]">
            Create new site
          </span>
        </button>
      </div>

      {/* Bottom user */}
      <div className="border-t border-[#E5E5E5] px-4 py-3 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-[#0a4e75] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-['Source_Sans_3',sans-serif] font-medium text-[13px]">
            BH
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-['Source_Sans_3',sans-serif] font-semibold text-[13px] text-[#123021] leading-[1.3] truncate">
            Ben Hartley
          </p>
          <p className="font-['Source_Sans_3',sans-serif] text-[11px] text-[#666] leading-[1.3] truncate">
            Partner · Corporate
          </p>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <Sparkles className="w-4 h-4 text-[#D64000]" />
          <span className="font-['Source_Sans_3',sans-serif] font-medium text-[13px] text-[#D64000] uppercase tracking-wide">
            Good morning
          </span>
        </div>
        <h1 className="font-['Clario:Medium',sans-serif] text-[40px] leading-[1.1] text-[#123021] text-balance">
          Good morning, Ben
        </h1>
        <p className="font-['Source_Sans_3',sans-serif] text-[15px] text-[#666] mt-2">
          Tuesday 26 May 2026 · 3 active sites
        </p>
      </div>

      {/* Morning Brief */}
      <MorningBrief />

      {/* Site cards */}
      <section className="space-y-3">
        <h2 className="font-['Clario:Medium',sans-serif] text-[18px] text-[#123021]">
          Your sites
        </h2>
        <div className="space-y-3">
          {sites.map((site) => (
            <SiteCard key={site.key} site={site} />
          ))}
        </div>
      </section>

      {/* Recent activity */}
      <section>
        <div className="bg-white border border-[#E5E5E5] rounded-lg">
          <div className="px-5 pt-4 pb-3 border-b border-[#F0F0F0]">
            <h2 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#123021]">
              Recent activity
            </h2>
          </div>
          <ul className="divide-y divide-[#F0F0F0]">
            {activity.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.siteRoute}
                  className="flex items-start gap-3 px-5 py-3 hover:bg-[#FAFAFA] transition-colors no-underline"
                >
                  <div className="w-8 h-8 rounded-full bg-[#eaf2f7] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-['Source_Sans_3',sans-serif] font-semibold text-[11px] text-[#0a4e75]">
                      {item.initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-['Source_Sans_3',sans-serif] text-[14px] leading-[1.5]">
                      <span className="font-semibold text-[#123021]">
                        {item.name}
                      </span>{' '}
                      <span className="text-[#666]">{item.action}</span>
                    </p>
                    <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-[#999] mt-0.5">
                      <span className="text-[#0a4e75] font-medium">
                        {item.site}
                      </span>
                      <span className="mx-1.5">·</span>
                      {item.time}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function MorningBrief() {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden">
      <div className="bg-[#FFF4EE] px-5 py-3 border-b border-[#FFD9C4] flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#D64000]" />
        <span className="font-['Source_Sans_3',sans-serif] font-semibold text-[13px] text-[#D64000]">
          Morning Brief · 26 May 2026
        </span>
      </div>
      <div className="px-5 py-5">
        <p className="font-['Source_Sans_3',sans-serif] text-[15px] leading-[1.6] text-[#212223] text-pretty">
          Across your three active sites, two items need your attention today.
          The Johnson witness statement deadline is outstanding ahead of the
          12 June hearing. In Project Alpine, Issue 002 (pension deficit) has
          not been updated in 5 days. The 120 Moorgate rent review is 35 days
          away — no surveyor instructed.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            to="/alpine"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#123021] text-white rounded font-['Source_Sans_3',sans-serif] font-medium text-[14px] hover:bg-[#1d4b34] transition-colors no-underline"
          >
            Open Project Alpine
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/vodafone"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#123021] text-white rounded font-['Source_Sans_3',sans-serif] font-medium text-[14px] hover:bg-[#1d4b34] transition-colors no-underline"
          >
            Open Vodafone Matters
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function SiteCard({ site }: { site: Site }) {
  const toneClasses: Record<Site['statusTone'], string> = {
    amber: 'bg-[#FFF4E6] text-[#9A4F00] border-[#FFD9A8]',
    red: 'bg-[#FDECEC] text-[#A8190E] border-[#F5C2BD]',
    blue: 'bg-[#EAF2F7] text-[#0a4e75] border-[#C7DCE8]',
  };

  return (
    <Link
      to={site.route}
      className="block bg-white border border-[#E5E5E5] rounded-lg px-5 py-4 hover:border-[#0a4e75] hover:shadow-sm transition-all no-underline group"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded bg-[#eaf2f7] flex items-center justify-center flex-shrink-0">
          {site.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="min-w-0">
              <h3 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#123021] leading-[1.3]">
                {site.name}
              </h3>
              <p className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#666] mt-0.5">
                {site.client}
              </p>
            </div>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[11px] font-['Source_Sans_3',sans-serif] font-semibold uppercase tracking-wide ${toneClasses[site.statusTone]}`}
            >
              {site.status}
            </span>
          </div>

          <div className="mt-3 px-3 py-2 bg-[#EAF2F7] border border-[#D7E5EE] rounded flex items-start gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-[#0a4e75] flex-shrink-0 mt-0.5" />
            <p className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#123021] leading-[1.4]">
              {site.alert}
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <span className="font-['Source_Sans_3',sans-serif] text-[12px] text-[#999]">
              Last active {site.lastActive}
            </span>
            <ChevronRight className="w-4 h-4 text-[#404040] group-hover:text-[#0a4e75] transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function TasksPanel() {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg sticky top-6">
      <div className="px-5 pt-4 pb-3 border-b border-[#F0F0F0]">
        <h2 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#123021]">
          My tasks
        </h2>
        <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-[#999] mt-0.5">
          Across all sites
        </p>
      </div>
      <ul className="divide-y divide-[#F0F0F0]">
        {tasks.map((task, idx) => (
          <li key={idx}>
            <Link
              to={task.siteRoute}
              className="block px-5 py-3 hover:bg-[#FAFAFA] transition-colors no-underline"
            >
              <p className="font-['Source_Sans_3',sans-serif] font-semibold text-[13px] text-[#123021] leading-[1.4]">
                {task.label}
              </p>
              <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-[#0a4e75] font-medium mt-1">
                {task.site}
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="font-['Source_Sans_3',sans-serif] text-[11px] text-[#666]">
                  {task.due}
                </span>
                {task.urgent && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-[#FDECEC] text-[#A8190E] text-[10px] font-['Source_Sans_3',sans-serif] font-semibold uppercase tracking-wide">
                    Urgent
                  </span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
