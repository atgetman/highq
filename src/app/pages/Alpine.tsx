import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  LayoutDashboard,
  Database,
  CheckSquare,
  Sparkles,
  ChevronDown,
  ChevronRight,
  X,
  ArrowRight,
} from 'lucide-react';

type TabKey = 'dashboard' | 'database' | 'tasks' | 'assistant';

const workstreams = [
  { name: 'Corporate', status: 'on-track' as const },
  { name: 'Employment', status: 'at-risk' as const },
  { name: 'Tax', status: 'on-track' as const },
  { name: 'Real Estate', status: 'on-track' as const },
  { name: 'IP', status: 'complete' as const },
  { name: 'Finance', status: 'on-track' as const },
];

const workstreamRows = [
  { name: 'Corporate', owner: 'James Hartley', status: 'On Track', issues: 2 },
  { name: 'Employment', owner: 'Sarah Chen', status: 'At Risk', issues: 4 },
  { name: 'Tax', owner: 'Marcus Webb', status: 'On Track', issues: 1 },
  { name: 'Real Estate', owner: 'Priya Patel', status: 'On Track', issues: 3 },
  { name: 'IP', owner: 'Tom Eriksen', status: 'Complete', issues: 0 },
  { name: 'Finance', owner: 'Anna Kowalski', status: 'On Track', issues: 4 },
];

interface Issue {
  id: string;
  title: string;
  workstream: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  owner: string;
  status: 'Open' | 'Resolved' | 'Under Review';
  due: string;
  detail: string;
}

const issues: Issue[] = [
  {
    id: '001',
    title: 'TUPE consultation period insufficient',
    workstream: 'Employment',
    priority: 'High',
    owner: 'S.Chen',
    status: 'Open',
    due: '30 Jun',
    detail:
      'Current consultation timeline is only 18 days against the 30-day statutory requirement. Risk of works council injunction if not extended. Mitigation: extend pre-completion period by 12 days or front-load communications.',
  },
  {
    id: '002',
    title: 'Pension scheme deficit not disclosed',
    workstream: 'Employment',
    priority: 'Critical',
    owner: 'S.Chen',
    status: 'Open',
    due: '15 Jun',
    detail:
      'Actuarial review identifies a £4.2M pension scheme deficit not reflected in disclosed accounts. Requires immediate purchase price adjustment discussion with seller and updated indemnity language in SPA.',
  },
  {
    id: '003',
    title: 'IP ownership of core platform unclear',
    workstream: 'IP',
    priority: 'High',
    owner: 'T.Eriksen',
    status: 'Resolved',
    due: '20 May',
    detail:
      'Original assignment chain from founder employees to company verified via signed deeds dated 2018-2020. Resolution memo filed in data room.',
  },
  {
    id: '004',
    title: 'Deferred tax liability understated',
    workstream: 'Tax',
    priority: 'High',
    owner: 'M.Webb',
    status: 'Under Review',
    due: '25 Jun',
    detail:
      'Deferred tax position appears understated by approximately £1.8M based on temporary differences in the German GAAP-to-IFRS reconciliation. Tax team reviewing with Meridian advisors.',
  },
  {
    id: '005',
    title: 'Munich office lease breaks on change of control',
    workstream: 'Real Estate',
    priority: 'Medium',
    owner: 'P.Patel',
    status: 'Open',
    due: '15 Jul',
    detail:
      'Munich HQ lease contains a change-of-control termination right in favour of the landlord. Engagement with landlord scheduled for 5 June to obtain consent or waiver.',
  },
  {
    id: '006',
    title: 'Material contracts require counterparty consent',
    workstream: 'Corporate',
    priority: 'High',
    owner: 'J.Hartley',
    status: 'Open',
    due: '30 Jun',
    detail:
      '14 of the top 20 customer contracts contain assignment / change-of-control restrictions. Outreach prioritised by ARR; tracking matrix in Tasks tab.',
  },
  {
    id: '007',
    title: 'Environmental survey outstanding — Hamburg',
    workstream: 'Real Estate',
    priority: 'Medium',
    owner: 'P.Patel',
    status: 'Open',
    due: '10 Jul',
    detail:
      'Phase 1 environmental survey for Hamburg manufacturing facility not yet commissioned. Expected 4-6 week turnaround; pushing to start week commencing 2 June.',
  },
  {
    id: '008',
    title: 'Works council agreement scope unclear',
    workstream: 'Employment',
    priority: 'High',
    owner: 'S.Chen',
    status: 'Open',
    due: '28 Jun',
    detail:
      'Existing Betriebsvereinbarung covers headcount changes but is silent on transaction-related obligations. Local counsel reviewing whether refreshed framework is required pre-signing.',
  },
  {
    id: '009',
    title: 'R&D tax credits — recapture risk',
    workstream: 'Tax',
    priority: 'Medium',
    owner: 'M.Webb',
    status: 'Open',
    due: '30 Jun',
    detail:
      '€2.3M of historic R&D tax credits may be subject to recapture if qualifying activity is relocated outside Germany within 3 years. Requires post-completion operating commitment.',
  },
  {
    id: '010',
    title: 'Finance facility change of control covenant',
    workstream: 'Finance',
    priority: 'High',
    owner: 'A.Kowalski',
    status: 'Open',
    due: '20 Jun',
    detail:
      'Existing €45M revolving credit facility contains a mandatory prepayment trigger on change of control. Refinancing or consent letter required ahead of signing.',
  },
];

interface TaskItem {
  id: string;
  title: string;
  owner: string;
  status: 'Not Started' | 'In Progress' | 'Complete' | 'Blocked';
  due: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
}

const taskGroups: { title: string; tasks: TaskItem[]; defaultOpen?: boolean }[] = [
  {
    title: 'Pre-signing Conditions',
    tasks: [
      { id: '1.1', title: 'Merger control filing Germany', owner: 'J.Hartley', status: 'In Progress', due: '15 Jun', priority: 'High' },
      { id: '1.2', title: 'FDI screening notification', owner: 'J.Hartley', status: 'Not Started', due: '20 Jun', priority: 'High' },
      { id: '1.3', title: 'Board approval — Meridian Capital', owner: 'J.Hartley', status: 'Not Started', due: '30 Jun', priority: 'Critical' },
    ],
  },
  {
    title: 'Due Diligence',
    defaultOpen: true,
    tasks: [
      { id: '2.1', title: 'Review employment contracts', owner: 'S.Chen', status: 'In Progress', due: '30 May', priority: 'High' },
      { id: '2.2', title: 'Pension scheme actuarial review', owner: 'M.Webb', status: 'Blocked', due: '25 May', priority: 'Critical' },
      { id: '2.3', title: 'IP ownership verification', owner: 'T.Eriksen', status: 'Complete', due: '20 May', priority: 'High' },
      { id: '2.4', title: 'Environmental reports all sites', owner: 'P.Patel', status: 'In Progress', due: '10 Jun', priority: 'Medium' },
      { id: '2.5', title: 'Financial model validation', owner: 'A.Kowalski', status: 'In Progress', due: '28 May', priority: 'High' },
    ],
  },
  {
    title: 'Documentation',
    tasks: [
      { id: '3.1', title: 'Draft SPA first draft', owner: 'J.Hartley', status: 'In Progress', due: '5 Jun', priority: 'High' },
      { id: '3.2', title: 'Disclosure letter', owner: 'J.Hartley', status: 'Not Started', due: '12 Jun', priority: 'High' },
      { id: '3.3', title: 'Tax deed — Meridian review', owner: 'M.Webb', status: 'Not Started', due: '10 Jun', priority: 'Medium' },
    ],
  },
];

// ---------- Pills ----------

function StatusPill({ status }: { status: 'on-track' | 'at-risk' | 'complete' }) {
  const map = {
    'on-track': { bg: '#E3EFE5', text: '#1d4b34', label: 'On Track' },
    'at-risk': { bg: '#FCE8DA', text: '#A04300', label: 'At Risk' },
    complete: { bg: '#EAF2F7', text: '#0a4e75', label: 'Complete' },
  };
  const s = map[status];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-['Source_Sans_3',sans-serif] font-semibold"
      style={{ backgroundColor: s.bg, color: s.text }}
    >
      {s.label}
    </span>
  );
}

function StatusDot({ status }: { status: 'on-track' | 'at-risk' | 'complete' }) {
  const map = { 'on-track': '#1d4b34', 'at-risk': '#D64000', complete: '#0a4e75' };
  return <span className="w-2 h-2 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: map[status] }} />;
}

function PriorityPill({ priority }: { priority: Issue['priority'] }) {
  const map: Record<Issue['priority'], { bg: string; text: string }> = {
    Critical: { bg: '#FBDED2', text: '#8C1D1D' },
    High: { bg: '#FCE8DA', text: '#A04300' },
    Medium: { bg: '#FDF1D6', text: '#7A5A00' },
    Low: { bg: '#E5E7EB', text: '#374151' },
  };
  const s = map[priority];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-['Source_Sans_3',sans-serif] font-semibold"
      style={{ backgroundColor: s.bg, color: s.text }}
    >
      {priority}
    </span>
  );
}

function IssueStatusPill({ status }: { status: Issue['status'] }) {
  const map: Record<Issue['status'], { bg: string; text: string }> = {
    Open: { bg: '#FCE8DA', text: '#A04300' },
    Resolved: { bg: '#E3EFE5', text: '#1d4b34' },
    'Under Review': { bg: '#EAF2F7', text: '#0a4e75' },
  };
  const s = map[status];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-['Source_Sans_3',sans-serif] font-semibold"
      style={{ backgroundColor: s.bg, color: s.text }}
    >
      {status}
    </span>
  );
}

function WorkstreamPill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#F1F7F2] text-[#1d4b34] text-[11px] font-['Source_Sans_3',sans-serif] font-semibold">
      {name}
    </span>
  );
}

function TaskStatusPill({ status }: { status: TaskItem['status'] }) {
  const map: Record<TaskItem['status'], { bg: string; text: string }> = {
    'Not Started': { bg: '#E5E7EB', text: '#374151' },
    'In Progress': { bg: '#EAF2F7', text: '#0a4e75' },
    Complete: { bg: '#E3EFE5', text: '#1d4b34' },
    Blocked: { bg: '#FBDED2', text: '#8C1D1D' },
  };
  const s = map[status];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-['Source_Sans_3',sans-serif] font-semibold"
      style={{ backgroundColor: s.bg, color: s.text }}
    >
      {status}
    </span>
  );
}

// ---------- Icon rail ----------

const tabs: { key: TabKey; label: string; icon: typeof LayoutDashboard }[] = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'database', label: 'Database', icon: Database },
  { key: 'tasks', label: 'Tasks', icon: CheckSquare },
  { key: 'assistant', label: 'AI Assistant', icon: Sparkles },
];

function IconRail({ active, onChange }: { active: TabKey; onChange: (k: TabKey) => void }) {
  return (
    <aside className="w-[72px] bg-white border-r border-[#E5E5E5] flex flex-col items-center py-4 gap-1 flex-shrink-0">
      {tabs.map((t) => {
        const Icon = t.icon;
        const isActive = active === t.key;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`w-14 py-3 rounded-lg flex flex-col items-center gap-1 transition-colors ${
              isActive
                ? 'bg-[#F1F7F2] text-[#1d4b34]'
                : 'text-[#666] hover:bg-[#FAFAFA] hover:text-[#123021]'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon className="w-5 h-5" strokeWidth={isActive ? 2.25 : 1.75} />
            <span className="font-['Source_Sans_3',sans-serif] font-medium text-[10px] leading-none text-center">
              {t.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}

// ---------- Context sidebar ----------

function ContextSidebar() {
  return (
    <aside className="w-[300px] bg-white border-r border-[#E5E5E5] flex-shrink-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="font-['Clario:Bold',sans-serif] text-[28px] leading-[1.15] text-[#123021]">
          Project Alpine
        </h1>
        <p className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#666] mt-1">
          M&amp;A Transaction
        </p>
      </div>

      <div className="px-6 pb-5">
        <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-4">
          <h2 className="font-['Clario:Medium',sans-serif] text-[13px] uppercase tracking-wide text-[#666] mb-3">
            Deal Summary
          </h2>
          <dl className="space-y-2 font-['Source_Sans_3',sans-serif] text-[13px]">
            <div>
              <dt className="text-[#666]">Acquirer</dt>
              <dd className="text-[#212223] font-semibold">Meridian Capital</dd>
            </div>
            <div>
              <dt className="text-[#666]">Target</dt>
              <dd className="text-[#212223] font-semibold">Alpine Technologies GmbH</dd>
            </div>
            <div>
              <dt className="text-[#666]">Value</dt>
              <dd className="text-[#212223] font-semibold">£287M</dd>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div>
                <dt className="text-[#666]">Status</dt>
                <dd className="text-[#212223] font-semibold">Due Diligence</dd>
              </div>
              <StatusPill status="on-track" />
            </div>
          </dl>
        </div>
      </div>

      <div className="px-6 pb-5">
        <h2 className="font-['Clario:Medium',sans-serif] text-[13px] uppercase tracking-wide text-[#666] mb-3">
          Child Workstreams
        </h2>
        <ul className="space-y-1">
          {workstreams.map((w) => (
            <li
              key={w.name}
              className="flex items-center justify-between px-3 py-2 rounded hover:bg-[#FAFAFA] cursor-pointer"
            >
              <span className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223]">
                {w.name}
              </span>
              <StatusDot status={w.status} />
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 pb-8 border-t border-[#E5E5E5] pt-5">
        <h2 className="font-['Clario:Medium',sans-serif] text-[13px] uppercase tracking-wide text-[#666] mb-3">
          Switch Site
        </h2>
        <div className="space-y-2">
          <Link
            to="/lg"
            className="flex items-center justify-between px-3 py-2 rounded hover:bg-[#F1F7F2] text-[#1d4b34] no-underline group"
          >
            <span className="font-['Source_Sans_3',sans-serif] font-medium text-[14px]">
              L&amp;G Portfolio
            </span>
            <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Link>
          <Link
            to="/vodafone"
            className="flex items-center justify-between px-3 py-2 rounded hover:bg-[#F1F7F2] text-[#1d4b34] no-underline group"
          >
            <span className="font-['Source_Sans_3',sans-serif] font-medium text-[14px]">
              Vodafone Employment
            </span>
            <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

// ---------- Dashboard ----------

function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg p-5">
      <p className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#666] mb-1">{label}</p>
      <p className="font-['Clario:Bold',sans-serif] text-[28px] leading-none text-[#123021]">
        {value}
      </p>
    </div>
  );
}

function Timeline() {
  const stages = [
    { label: 'Kick-off', state: 'done' },
    { label: 'DD Complete', state: 'current' },
    { label: 'Board Approval', state: 'upcoming' },
    { label: 'Signing', state: 'upcoming' },
    { label: 'Completion', state: 'upcoming' },
  ];
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg p-6">
      <h2 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#123021] mb-5">
        Deal Timeline
      </h2>
      <div className="flex items-center">
        {stages.map((s, i) => (
          <React.Fragment key={s.label}>
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-['Source_Sans_3',sans-serif] font-semibold ${
                  s.state === 'done'
                    ? 'bg-[#1d4b34] text-white'
                    : s.state === 'current'
                    ? 'bg-white border-2 border-[#1d4b34] text-[#1d4b34]'
                    : 'bg-[#F5F5F5] border border-[#E5E5E5] text-[#999]'
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`mt-2 font-['Source_Sans_3',sans-serif] text-[12px] text-center max-w-[90px] ${
                  s.state === 'upcoming' ? 'text-[#999]' : 'text-[#212223] font-semibold'
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < stages.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 -mt-6 ${
                  s.state === 'done' ? 'bg-[#1d4b34]' : 'bg-[#E5E5E5]'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function WorkstreamTable() {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-[#E5E5E5]">
        <h2 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#123021]">
          Workstream Status
        </h2>
      </div>
      <table className="w-full">
        <thead className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
          <tr>
            <th className="text-left px-6 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
              Workstream
            </th>
            <th className="text-left px-6 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
              Lead
            </th>
            <th className="text-left px-6 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
              Status
            </th>
            <th className="text-right px-6 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
              Open Issues
            </th>
          </tr>
        </thead>
        <tbody>
          {workstreamRows.map((row, i) => (
            <tr key={row.name} className={i > 0 ? 'border-t border-[#F0F0F0]' : ''}>
              <td className="px-6 py-3 font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] font-semibold">
                {row.name}
              </td>
              <td className="px-6 py-3 font-['Source_Sans_3',sans-serif] text-[14px] text-[#404040]">
                {row.owner}
              </td>
              <td className="px-6 py-3">
                <StatusPill
                  status={
                    row.status === 'At Risk'
                      ? 'at-risk'
                      : row.status === 'Complete'
                      ? 'complete'
                      : 'on-track'
                  }
                />
              </td>
              <td className="px-6 py-3 text-right font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] tabular-nums">
                {row.issues}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AiBriefCard() {
  const bullets = [
    'Employment workstream flagged 4 issues — TUPE timeline at risk',
    'Q1 accounts uploaded to data room — tax team notified',
    'Signing deadline 47 days — 2 conditions precedent outstanding',
    'Board approval confirmed 30 June — materials prep required',
  ];
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-[#E5E5E5] bg-[#FFF6F0]">
        <Sparkles className="w-4 h-4 text-[#D64000]" />
        <h3 className="font-['Clario:Medium',sans-serif] text-[14px] text-[#212223]">
          AI Brief
        </h3>
      </div>
      <ul className="p-5 space-y-3">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-2 font-['Source_Sans_3',sans-serif] text-[13px] text-[#212223] leading-[1.5]"
          >
            <span className="text-[#D64000] flex-shrink-0">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DashboardTab() {
  return (
    <div className="p-8 max-w-[1400px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <KpiCard label="Deal Value" value="£287M" />
        <KpiCard label="Workstreams" value="6" />
        <KpiCard label="Open Issues" value="14" />
        <KpiCard label="Days to Signing" value="47" />
      </div>

      <div className="mb-6">
        <Timeline />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WorkstreamTable />
        </div>
        <div>
          <AiBriefCard />
        </div>
      </div>
    </div>
  );
}

// ---------- Database / Issues ----------

function IssueDrawer({ issue, onClose }: { issue: Issue; onClose: () => void }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />
      <div className="fixed top-0 right-0 h-screen w-[480px] bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-start justify-between px-6 py-5 border-b border-[#E5E5E5]">
          <div className="pr-4">
            <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-[#666] mb-1">
              Issue {issue.id}
            </p>
            <h2 className="font-['Clario:Medium',sans-serif] text-[20px] text-[#123021] leading-[1.25]">
              {issue.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#666] hover:text-[#212223] p-1 -mr-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          <div className="flex flex-wrap gap-2">
            <IssueStatusPill status={issue.status} />
            <PriorityPill priority={issue.priority} />
            <WorkstreamPill name={issue.workstream} />
          </div>

          <p className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] leading-[1.6]">
            {issue.detail}
          </p>

          <dl className="border border-[#E5E5E5] rounded-lg divide-y divide-[#F0F0F0]">
            <div className="flex justify-between px-4 py-3">
              <dt className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#666]">Owner</dt>
              <dd className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#212223] font-semibold">
                {issue.owner}
              </dd>
            </div>
            <div className="flex justify-between px-4 py-3">
              <dt className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#666]">Raised</dt>
              <dd className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#212223] font-semibold">
                12 May 2026
              </dd>
            </div>
            <div className="flex justify-between px-4 py-3">
              <dt className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#666]">Due</dt>
              <dd className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#212223] font-semibold">
                {issue.due}
              </dd>
            </div>
          </dl>

          <div className="border border-[#E5E5E5] rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#FFF6F0] border-b border-[#E5E5E5]">
              <Sparkles className="w-4 h-4 text-[#D64000]" />
              <h3 className="font-['Clario:Medium',sans-serif] text-[13px] text-[#212223]">
                AI Analysis
              </h3>
            </div>
            <div className="p-4 font-['Source_Sans_3',sans-serif] text-[13px] text-[#212223] leading-[1.6] space-y-2">
              <p>
                Based on the {issue.workstream.toLowerCase()} workstream context and similar deals
                in the past 24 months, this issue carries a{' '}
                <strong className="text-[#212223]">{issue.priority.toLowerCase()}</strong> probability
                of materially affecting signing.
              </p>
              <p className="text-[#666]">
                Recommended next step: align with workstream lead {issue.owner} this week and
                document mitigation in the disclosure letter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DatabaseTab() {
  const [filter, setFilter] = useState<string>('All');
  const [openIssue, setOpenIssue] = useState<Issue | null>(null);

  const workstreamOptions = ['All', ...Array.from(new Set(issues.map((i) => i.workstream)))];
  const filtered = filter === 'All' ? issues : issues.filter((i) => i.workstream === filter);

  return (
    <div className="p-8 max-w-[1400px]">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="font-['Clario:Bold',sans-serif] text-[24px] text-[#123021] leading-tight">
            Issues Register
          </h2>
          <p className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#666] mt-1">
            {filtered.length} of {issues.length} issues
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {workstreamOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-3 py-1.5 rounded-full font-['Source_Sans_3',sans-serif] font-medium text-[13px] transition-colors ${
                filter === opt
                  ? 'bg-[#123021] text-white'
                  : 'bg-white border border-[#E5E5E5] text-[#404040] hover:bg-[#FAFAFA]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
            <tr>
              <th className="text-left px-4 py-3 w-12 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
                #
              </th>
              <th className="text-left px-4 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
                Title
              </th>
              <th className="text-left px-4 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
                Workstream
              </th>
              <th className="text-left px-4 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
                Priority
              </th>
              <th className="text-left px-4 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
                Owner
              </th>
              <th className="text-left px-4 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
                Status
              </th>
              <th className="text-left px-4 py-3 font-['Source_Sans_3',sans-serif] font-semibold text-[12px] uppercase tracking-wide text-[#666]">
                Due
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((issue, i) => (
              <tr
                key={issue.id}
                onClick={() => setOpenIssue(issue)}
                className={`cursor-pointer hover:bg-[#FAFAFA] ${
                  i > 0 ? 'border-t border-[#F0F0F0]' : ''
                }`}
              >
                <td className="px-4 py-3 font-['Source_Sans_3',sans-serif] text-[13px] text-[#666] tabular-nums">
                  {issue.id}
                </td>
                <td className="px-4 py-3 font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] font-semibold">
                  {issue.title}
                </td>
                <td className="px-4 py-3">
                  <WorkstreamPill name={issue.workstream} />
                </td>
                <td className="px-4 py-3">
                  <PriorityPill priority={issue.priority} />
                </td>
                <td className="px-4 py-3 font-['Source_Sans_3',sans-serif] text-[13px] text-[#404040]">
                  {issue.owner}
                </td>
                <td className="px-4 py-3">
                  <IssueStatusPill status={issue.status} />
                </td>
                <td className="px-4 py-3 font-['Source_Sans_3',sans-serif] text-[13px] text-[#404040]">
                  {issue.due}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openIssue && <IssueDrawer issue={openIssue} onClose={() => setOpenIssue(null)} />}
    </div>
  );
}

// ---------- Tasks ----------

function TaskGroup({
  group,
}: {
  group: { title: string; tasks: TaskItem[]; defaultOpen?: boolean };
}) {
  const [open, setOpen] = useState(!!group.defaultOpen);
  const completed = group.tasks.filter((t) => t.status === 'Complete').length;
  const total = group.tasks.length;
  const pct = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-[#FAFAFA] text-left"
      >
        {open ? (
          <ChevronDown className="w-4 h-4 text-[#666] flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 text-[#666] flex-shrink-0" />
        )}
        <h3 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#123021] flex-shrink-0">
          {group.title}
        </h3>
        <span className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#666] flex-shrink-0">
          {completed}/{total}
        </span>
        <div className="flex-1 mx-4 h-1.5 bg-[#F0F0F0] rounded-full overflow-hidden max-w-[240px]">
          <div
            className="h-full bg-[#1d4b34] transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </button>

      {open && (
        <div className="border-t border-[#E5E5E5]">
          <table className="w-full">
            <thead className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
              <tr>
                <th className="text-left px-5 py-2.5 w-16 font-['Source_Sans_3',sans-serif] font-semibold text-[11px] uppercase tracking-wide text-[#666]">
                  #
                </th>
                <th className="text-left px-5 py-2.5 font-['Source_Sans_3',sans-serif] font-semibold text-[11px] uppercase tracking-wide text-[#666]">
                  Task
                </th>
                <th className="text-left px-5 py-2.5 font-['Source_Sans_3',sans-serif] font-semibold text-[11px] uppercase tracking-wide text-[#666]">
                  Owner
                </th>
                <th className="text-left px-5 py-2.5 font-['Source_Sans_3',sans-serif] font-semibold text-[11px] uppercase tracking-wide text-[#666]">
                  Status
                </th>
                <th className="text-left px-5 py-2.5 font-['Source_Sans_3',sans-serif] font-semibold text-[11px] uppercase tracking-wide text-[#666]">
                  Due
                </th>
                <th className="text-left px-5 py-2.5 font-['Source_Sans_3',sans-serif] font-semibold text-[11px] uppercase tracking-wide text-[#666]">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody>
              {group.tasks.map((t, i) => (
                <tr key={t.id} className={i > 0 ? 'border-t border-[#F0F0F0]' : ''}>
                  <td className="px-5 py-3 font-['Source_Sans_3',sans-serif] text-[13px] text-[#666] tabular-nums">
                    {t.id}
                  </td>
                  <td className="px-5 py-3 font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223]">
                    {t.title}
                  </td>
                  <td className="px-5 py-3 font-['Source_Sans_3',sans-serif] text-[13px] text-[#404040]">
                    {t.owner}
                  </td>
                  <td className="px-5 py-3">
                    <TaskStatusPill status={t.status} />
                  </td>
                  <td className="px-5 py-3 font-['Source_Sans_3',sans-serif] text-[13px] text-[#404040]">
                    {t.due}
                  </td>
                  <td className="px-5 py-3">
                    <PriorityPill priority={t.priority} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function TasksTab() {
  return (
    <div className="p-8 max-w-[1400px]">
      <h2 className="font-['Clario:Bold',sans-serif] text-[24px] text-[#123021] leading-tight mb-5">
        Tasks
      </h2>
      <div className="space-y-4">
        {taskGroups.map((g) => (
          <TaskGroup key={g.title} group={g} />
        ))}
      </div>
    </div>
  );
}

// ---------- AI Assistant ----------

function AssistantTab() {
  const [input, setInput] = useState('');
  return (
    <div className="flex flex-col h-full">
      <div className="px-8 pt-6">
        <div className="bg-[#F1F7F2] border border-[#C7DCC9] rounded-lg px-4 py-2.5 inline-flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#1d4b34]" />
          <span className="font-['Source_Sans_3',sans-serif] font-semibold text-[13px] text-[#1d4b34]">
            Scoped to Project Alpine
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-[760px] mx-auto space-y-6">
          {/* Exchange 1 */}
          <div className="flex justify-end">
            <div className="bg-[#123021] text-white rounded-2xl rounded-br-md px-4 py-3 max-w-[75%]">
              <p className="font-['Source_Sans_3',sans-serif] text-[14px] leading-[1.55]">
                Summarise the key employment risks identified so far
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FFF6F0] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-[#D64000]" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] leading-[1.6] space-y-3">
                <p>
                  Two material employment risks have surfaced in due diligence so far. The most
                  significant is{' '}
                  <strong>Issue 002 — an undisclosed £4.2M pension scheme deficit</strong> (Critical,
                  due 15 Jun), which has not been reflected in the disclosed accounts and will
                  require either a purchase price adjustment or fresh indemnity language in the SPA.
                </p>
                <p>
                  The second is the <strong>TUPE consultation timeline (Issue 001)</strong>: the
                  current pre-completion period only allows for 18 days of consultation against the
                  30 days statutorily required, leaving a 12-day shortfall and creating real risk of
                  a works council injunction on signing.
                </p>
              </div>

              <div className="bg-white border border-[#E5E5E5] rounded-lg px-4 py-3 inline-flex items-center gap-3 max-w-full">
                <div className="w-8 h-8 rounded bg-[#FFF6F0] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-[#D64000]" />
                </div>
                <div className="min-w-0">
                  <p className="font-['Clario:Medium',sans-serif] text-[13px] text-[#212223]">
                    Employment Risk Summary
                  </p>
                  <p className="font-['Source_Sans_3',sans-serif] text-[12px] text-[#666]">
                    Generated 26 May 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exchange 2 */}
          <div className="flex justify-end">
            <div className="bg-[#123021] text-white rounded-2xl rounded-br-md px-4 py-3 max-w-[75%]">
              <p className="font-['Source_Sans_3',sans-serif] text-[14px] leading-[1.55]">
                What's the TUPE timeline risk specifically?
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FFF6F0] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-[#D64000]" />
            </div>
            <div className="flex-1 space-y-3 font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] leading-[1.6]">
              <p>
                The signing schedule currently allows{' '}
                <strong>only 18 days of works council and employee consultation</strong>, against
                the 30-day minimum required under TUPE / German Betriebsverfassungsgesetz
                principles. That is a <strong>12-day shortfall</strong>.
              </p>
              <p>
                The practical risk is twofold: first, any affected employee or works council can
                seek an injunction halting the transfer, which would push signing past the 47-day
                window; second, even where signing proceeds, the consultation defect can ground a
                damages claim post-completion.
              </p>
              <p>
                The cleanest mitigation is to{' '}
                <strong>extend the pre-completion period by ~14 days</strong> so consultation
                concludes before the trigger date. Alternative is to front-load communications and
                negotiate a written waiver from the works council, though local counsel rates the
                waiver path as low probability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E5E5E5] bg-white px-8 py-4">
        <div className="max-w-[760px] mx-auto">
          <div className="flex items-center gap-2 border border-[#E5E5E5] rounded-xl px-4 py-2.5 focus-within:border-[#1d4b34] transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Project Alpine..."
              className="flex-1 outline-none font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] placeholder:text-[#999] bg-transparent"
            />
            <button
              className="px-3 py-1.5 rounded-lg bg-[#1d4b34] text-white font-['Source_Sans_3',sans-serif] font-semibold text-[13px] hover:bg-[#123021] transition-colors disabled:opacity-50"
              disabled={!input.trim()}
            >
              Send
            </button>
          </div>
          <p className="font-['Source_Sans_3',sans-serif] text-[11px] text-[#999] mt-2 text-center">
            HighQ Assist can make mistakes. Verify critical information against source documents.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------- Page ----------

export function Alpine() {
  const [tab, setTab] = useState<TabKey>('dashboard');

  return (
    <div className="flex h-[calc(100vh-44px-72px)] min-h-[640px] bg-[#FAFAFA]">
      <IconRail active={tab} onChange={setTab} />
      <ContextSidebar />
      <main className="flex-1 min-w-0 overflow-y-auto">
        {tab === 'dashboard' && <DashboardTab />}
        {tab === 'database' && <DatabaseTab />}
        {tab === 'tasks' && <TasksTab />}
        {tab === 'assistant' && <AssistantTab />}
      </main>
    </div>
  );
}
