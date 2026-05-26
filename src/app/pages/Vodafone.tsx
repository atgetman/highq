"use client"

import { useState } from "react"
import { Link } from "react-router"
import {
  LayoutDashboard,
  KanbanSquare,
  Table2,
  Sparkles,
  ChevronRight,
  X,
  Search,
  Send,
  FileText,
  Check,
  AlertCircle,
} from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

type Priority = "Urgent" | "High" | "Medium" | "Low"
type Stage =
  | "Early Conciliation"
  | "Response Filed"
  | "Case Management"
  | "Hearing Prep"
  | "Hearing"
  | "Concluded"

interface Case {
  ref: string
  claimant: string
  type: string
  lawyer: string
  stage: Stage
  hearing: string
  daysAway: number | null
  priority: Priority
  detail: string
}

const cases: Case[] = [
  {
    ref: "ET/2300456/25",
    claimant: "Michael Johnson",
    type: "Unfair Dismissal",
    lawyer: "J.Park",
    stage: "Hearing Prep",
    hearing: "12 Jun",
    daysAway: 17,
    priority: "Urgent",
    detail:
      "Claimant dismissed in restructuring. Employer argues fair selection. Key issue: was selection matrix fairly applied?",
  },
  {
    ref: "ET/2301122/25",
    claimant: "Adaeze Okafor",
    type: "Race Discrimination",
    lawyer: "E.Drummond",
    stage: "Hearing",
    hearing: "28 Jun",
    daysAway: 33,
    priority: "High",
    detail:
      "Race discrimination in promotion. Strong documentary evidence. Respondent confident in defence.",
  },
  {
    ref: "ET/2298834/25",
    claimant: "David Clarke",
    type: "TUPE Transfer",
    lawyer: "J.Park",
    stage: "Case Management",
    hearing: "5 Jul CMC",
    daysAway: null,
    priority: "Medium",
    detail:
      "TUPE transfer from outsourcing. Material detriment post-transfer alleged. ECS undertaking in dispute.",
  },
  {
    ref: "ET/2302567/25",
    claimant: "Priya Sharma",
    type: "Disability Discrimination",
    lawyer: "E.Drummond",
    stage: "Response Filed",
    hearing: "—",
    daysAway: null,
    priority: "High",
    detail: "Failure to make reasonable adjustments. OH report obtained.",
  },
  {
    ref: "ET/2303891/25",
    claimant: "Tom Whitfield",
    type: "Redundancy",
    lawyer: "J.Park",
    stage: "Hearing Prep",
    hearing: "18 Jul",
    daysAway: 53,
    priority: "Medium",
    detail: "Redundancy selection pool definition disputed. 12-week consultation completed.",
  },
  {
    ref: "ET/2304102/25",
    claimant: "Sarah Mensah",
    type: "Sex Discrimination",
    lawyer: "E.Drummond",
    stage: "Response Filed",
    hearing: "—",
    daysAway: null,
    priority: "High",
    detail: "Sex discrimination in pay review. Equal pay comparators identified.",
  },
  {
    ref: "ET/2305234/25",
    claimant: "Kevin O'Brien",
    type: "Whistleblowing",
    lawyer: "J.Park",
    stage: "Early Conciliation",
    hearing: "—",
    daysAway: null,
    priority: "Medium",
    detail: "Protected disclosure re financial irregularities. ACAS in progress.",
  },
  {
    ref: "ET/2306445/25",
    claimant: "Fatima Al-Hassan",
    type: "Unfair Dismissal",
    lawyer: "J.Park",
    stage: "Hearing Prep",
    hearing: "22 Aug",
    daysAway: 88,
    priority: "Low",
    detail: "Probation dismissal. Capability grounds. Bundle in preparation.",
  },
]

const stages: Stage[] = [
  "Early Conciliation",
  "Response Filed",
  "Case Management",
  "Hearing Prep",
  "Hearing",
  "Concluded",
]

const stageColors: Record<Stage, string> = {
  "Early Conciliation": "#94D1C2",
  "Response Filed": "#0A4E75",
  "Case Management": "#1D4B34",
  "Hearing Prep": "#D64000",
  Hearing: "#7A1F1F",
  Concluded: "#6B7280",
}

const priorityColors: Record<Priority, string> = {
  Urgent: "#D64000",
  High: "#0A4E75",
  Medium: "#94D1C2",
  Low: "#D2D2D2",
}

type TabId = "dashboard" | "board" | "cases" | "ai"

export function Vodafone() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard")
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)

  const tabs: { id: TabId; label: string; icon: typeof LayoutDashboard }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "board", label: "Case Board", icon: KanbanSquare },
    { id: "cases", label: "Cases", icon: Table2 },
    { id: "ai", label: "AI Assistant", icon: Sparkles },
  ]

  const stageCounts = stages.reduce(
    (acc, s) => {
      acc[s] = cases.filter((c) => c.stage === s).length
      return acc
    },
    {} as Record<Stage, number>,
  )

  return (
    <div className="flex h-[calc(100vh-104px)] bg-[#F8F8F8]">
      {/* Icon rail */}
      <nav className="w-[72px] bg-white border-r border-[#E5E5E5] flex flex-col items-center py-4 gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-14 h-14 flex flex-col items-center justify-center gap-1 rounded-md transition-colors ${
                isActive
                  ? "bg-[#1D4B34] text-white"
                  : "text-[#212223] hover:bg-[#F0F0F0]"
              }`}
              title={tab.label}
            >
              <Icon className="w-5 h-5" strokeWidth={1.75} />
              <span className="text-[10px] font-medium font-['Source_Sans_3',sans-serif] leading-none">
                {tab.label.split(" ")[0]}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Context sidebar */}
      <aside className="w-[300px] bg-white border-r border-[#E5E5E5] flex flex-col overflow-y-auto">
        <div className="p-5 border-b border-[#E5E5E5]">
          <h2 className="font-['Clario:Medium',sans-serif] text-[18px] text-[#212223] leading-tight">
            Vodafone Employment Matters
          </h2>
          <p className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#6B7280] mt-1">
            Taylor Wessing LLP
          </p>
          <div className="mt-3 text-[13px] font-['Source_Sans_3',sans-serif]">
            <span className="text-[#6B7280]">Client: </span>
            <span className="text-[#212223] font-medium">Vodafone UK Limited</span>
          </div>
        </div>

        <div className="p-5 border-b border-[#E5E5E5]">
          <div className="bg-[#F8F8F8] rounded-lg p-4 grid grid-cols-2 gap-3">
            <div>
              <div className="text-[20px] font-['Clario:Bold',sans-serif] text-[#212223] leading-none">
                8
              </div>
              <div className="text-[11px] text-[#6B7280] font-['Source_Sans_3',sans-serif] mt-1">
                active
              </div>
            </div>
            <div>
              <div className="text-[20px] font-['Clario:Bold',sans-serif] text-[#212223] leading-none">
                2
              </div>
              <div className="text-[11px] text-[#6B7280] font-['Source_Sans_3',sans-serif] mt-1">
                hearings
              </div>
            </div>
            <div>
              <div className="text-[20px] font-['Clario:Bold',sans-serif] text-[#D64000] leading-none">
                1
              </div>
              <div className="text-[11px] text-[#6B7280] font-['Source_Sans_3',sans-serif] mt-1">
                urgent
              </div>
            </div>
            <div>
              <div className="text-[20px] font-['Clario:Bold',sans-serif] text-[#212223] leading-none">
                4
              </div>
              <div className="text-[11px] text-[#6B7280] font-['Source_Sans_3',sans-serif] mt-1">
                in prep
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 border-b border-[#E5E5E5]">
          <h3 className="text-[12px] uppercase tracking-wider text-[#6B7280] font-['Source_Sans_3',sans-serif] font-semibold mb-3">
            Cases by stage
          </h3>
          <div className="space-y-2">
            {stages.map((stage) => (
              <div key={stage} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: stageColors[stage] }}
                  />
                  <span className="text-[13px] text-[#212223] font-['Source_Sans_3',sans-serif]">
                    {stage}
                  </span>
                </div>
                <span className="text-[12px] text-[#6B7280] font-['Source_Sans_3',sans-serif] font-medium bg-[#F0F0F0] rounded-full px-2 py-0.5 min-w-[24px] text-center">
                  {stageCounts[stage]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 mt-auto">
          <h3 className="text-[12px] uppercase tracking-wider text-[#6B7280] font-['Source_Sans_3',sans-serif] font-semibold mb-3">
            Other sites
          </h3>
          <div className="space-y-1">
            <Link
              to="/alpine"
              className="flex items-center justify-between px-2 py-1.5 rounded text-[13px] text-[#212223] hover:bg-[#F0F0F0] font-['Source_Sans_3',sans-serif]"
            >
              Project Alpine
              <ChevronRight className="w-3.5 h-3.5 text-[#6B7280]" />
            </Link>
            <Link
              to="/lg"
              className="flex items-center justify-between px-2 py-1.5 rounded text-[13px] text-[#212223] hover:bg-[#F0F0F0] font-['Source_Sans_3',sans-serif]"
            >
              L&G Institutional Portfolio
              <ChevronRight className="w-3.5 h-3.5 text-[#6B7280]" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {activeTab === "dashboard" && <Dashboard onCaseClick={setSelectedCase} />}
        {activeTab === "board" && <Board onCaseClick={setSelectedCase} />}
        {activeTab === "cases" && <CasesTable onCaseClick={setSelectedCase} />}
        {activeTab === "ai" && <AIAssistant />}
      </main>

      {/* Case drawer */}
      {selectedCase && (
        <CaseDrawer caseData={selectedCase} onClose={() => setSelectedCase(null)} />
      )}
    </div>
  )
}

function Dashboard({ onCaseClick }: { onCaseClick: (c: Case) => void }) {
  const claimTypeData = [
    { name: "Unfair Dismissal", value: 3, color: "#0A4E75" },
    { name: "Discrimination", value: 3, color: "#1D4B34" },
    { name: "TUPE", value: 1, color: "#94D1C2" },
    { name: "Other", value: 1, color: "#D2D2D2" },
  ]

  const upcomingHearings = cases
    .filter((c) => c.daysAway !== null && c.daysAway <= 60 && c.stage !== "Concluded")
    .sort((a, b) => (a.daysAway ?? 999) - (b.daysAway ?? 999))
    .slice(0, 2)

  return (
    <div className="p-8 max-w-[1400px]">
      <h1 className="font-['Clario:Medium',sans-serif] text-[28px] text-[#212223] mb-6">
        Dashboard
      </h1>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: "Active Cases", value: "8", color: "#212223" },
          { label: "Hearings This Month", value: "2", color: "#0A4E75" },
          { label: "Urgent Deadline", value: "1", color: "#D64000" },
          { label: "In Prep", value: "4", color: "#1D4B34" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="bg-white border border-[#E5E5E5] rounded-lg p-5"
          >
            <div className="text-[13px] text-[#6B7280] font-['Source_Sans_3',sans-serif] mb-2">
              {kpi.label}
            </div>
            <div
              className="text-[36px] font-['Clario:Bold',sans-serif] leading-none"
              style={{ color: kpi.color }}
            >
              {kpi.value}
            </div>
          </div>
        ))}
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Donut */}
        <div className="bg-white border border-[#E5E5E5] rounded-lg p-6">
          <h3 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#212223] mb-4">
            Claim Type Mix
          </h3>
          <div className="flex items-center gap-6">
            <div className="w-[180px] h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={claimTypeData}
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {claimTypeData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-2">
              {claimTypeData.map((d) => (
                <div key={d.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: d.color }}
                    />
                    <span className="text-[13px] font-['Source_Sans_3',sans-serif] text-[#212223]">
                      {d.name}
                    </span>
                  </div>
                  <span className="text-[13px] font-['Source_Sans_3',sans-serif] font-medium text-[#212223]">
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming hearings */}
        <div className="bg-white border border-[#E5E5E5] rounded-lg p-6">
          <h3 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#212223] mb-4">
            Upcoming Hearings
          </h3>
          <div className="space-y-3">
            {upcomingHearings.map((c) => (
              <button
                key={c.ref}
                onClick={() => onCaseClick(c)}
                className="w-full text-left bg-[#F8F8F8] hover:bg-[#F0F0F0] border border-[#E5E5E5] rounded-lg p-4 transition-colors"
              >
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <div className="font-['Source_Sans_3',sans-serif] font-medium text-[15px] text-[#212223]">
                      {c.claimant}
                    </div>
                    <div className="text-[12px] text-[#6B7280] font-mono mt-0.5">
                      {c.ref}
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-['Source_Sans_3',sans-serif] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: priorityColors[c.priority] }}
                  >
                    {c.daysAway}d
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[13px] text-[#6B7280] font-['Source_Sans_3',sans-serif]">
                    {c.type}
                  </span>
                  <span className="text-[13px] text-[#212223] font-['Source_Sans_3',sans-serif] font-medium">
                    {c.hearing}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Brief */}
      <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 border-l-4 border-l-[#D64000]">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#D64000]" />
          <h3 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#212223]">
            AI Brief
          </h3>
        </div>
        <ul className="space-y-3">
          <li className="flex gap-3 text-[14px] text-[#212223] font-['Source_Sans_3',sans-serif] leading-[1.55]">
            <span className="text-[#D64000] mt-1">•</span>
            <span>
              <strong>Johnson</strong> hearing 12 June — 17 days away. Witness
              statements not filed. J.Park should be chased today.
            </span>
          </li>
          <li className="flex gap-3 text-[14px] text-[#212223] font-['Source_Sans_3',sans-serif] leading-[1.55]">
            <span className="text-[#0A4E75] mt-1">•</span>
            <span>
              <strong>Okafor</strong> hearing 28 June confirmed. Bundle on track.
              E.Drummond to review witness statement by 30 May.
            </span>
          </li>
          <li className="flex gap-3 text-[14px] text-[#212223] font-['Source_Sans_3',sans-serif] leading-[1.55]">
            <span className="text-[#1D4B34] mt-1">•</span>
            <span>
              <strong>O'Brien</strong> ACAS deadline 10 June. Position paper not
              yet finalised.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function Board({ onCaseClick }: { onCaseClick: (c: Case) => void }) {
  return (
    <div className="p-6">
      <h1 className="font-['Clario:Medium',sans-serif] text-[28px] text-[#212223] mb-6">
        Case Board
      </h1>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageCases = cases.filter((c) => c.stage === stage)
          return (
            <div
              key={stage}
              className="flex-shrink-0 w-[280px] bg-[#F0F0F0] rounded-lg flex flex-col"
            >
              <div
                className="rounded-t-lg border-t-4 px-4 py-3 bg-white"
                style={{ borderTopColor: stageColors[stage] }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-['Clario:Medium',sans-serif] text-[14px] text-[#212223]">
                    {stage}
                  </h3>
                  <span className="text-[12px] font-['Source_Sans_3',sans-serif] font-medium bg-[#F0F0F0] rounded-full px-2 py-0.5 min-w-[24px] text-center text-[#6B7280]">
                    {stageCases.length}
                  </span>
                </div>
              </div>
              <div className="p-2 space-y-2 flex-1 min-h-[200px]">
                {stageCases.map((c) => (
                  <button
                    key={c.ref}
                    onClick={() => onCaseClick(c)}
                    className="w-full text-left bg-white rounded-md p-3 border-l-4 hover:shadow-sm transition-shadow"
                    style={{ borderLeftColor: priorityColors[c.priority] }}
                  >
                    <div className="text-[11px] text-[#6B7280] font-mono mb-1">
                      {c.ref}
                    </div>
                    <div className="font-['Source_Sans_3',sans-serif] font-semibold text-[14px] text-[#212223] mb-2">
                      {c.claimant}
                    </div>
                    <div className="inline-block text-[11px] font-['Source_Sans_3',sans-serif] bg-[#F0F0F0] text-[#212223] rounded-full px-2 py-0.5 mb-2">
                      {c.type}
                    </div>
                    <div className="flex items-center justify-between text-[12px] text-[#6B7280] font-['Source_Sans_3',sans-serif]">
                      <span>{c.lawyer}</span>
                      {c.hearing !== "—" && <span>{c.hearing}</span>}
                    </div>
                    {c.daysAway !== null && c.daysAway < 60 && (
                      <div className="mt-2">
                        <span
                          className="text-[10px] font-['Source_Sans_3',sans-serif] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: priorityColors[c.priority] }}
                        >
                          {c.daysAway} days
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CasesTable({ onCaseClick }: { onCaseClick: (c: Case) => void }) {
  const [typeFilter, setTypeFilter] = useState<string>("All")
  const [stageFilter, setStageFilter] = useState<string>("All")
  const [search, setSearch] = useState("")
  const [sortKey, setSortKey] = useState<keyof Case>("daysAway")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")

  const types = ["All", ...Array.from(new Set(cases.map((c) => c.type)))]
  const stageOpts = ["All", ...stages]

  let filtered = cases.filter((c) => {
    if (typeFilter !== "All" && c.type !== typeFilter) return false
    if (stageFilter !== "All" && c.stage !== stageFilter) return false
    if (
      search &&
      !c.claimant.toLowerCase().includes(search.toLowerCase()) &&
      !c.ref.toLowerCase().includes(search.toLowerCase())
    )
      return false
    return true
  })

  filtered = [...filtered].sort((a, b) => {
    const av = a[sortKey]
    const bv = b[sortKey]
    if (av === null && bv === null) return 0
    if (av === null) return 1
    if (bv === null) return -1
    if (av < bv) return sortDir === "asc" ? -1 : 1
    if (av > bv) return sortDir === "asc" ? 1 : -1
    return 0
  })

  const toggleSort = (key: keyof Case) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc")
    } else {
      setSortKey(key)
      setSortDir("asc")
    }
  }

  return (
    <div className="p-8">
      <h1 className="font-['Clario:Medium',sans-serif] text-[28px] text-[#212223] mb-6">
        Cases
      </h1>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search claimant or ref..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-[13px] border border-[#E5E5E5] rounded-md font-['Source_Sans_3',sans-serif] focus:outline-none focus:border-[#1D4B34]"
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2 text-[13px] border border-[#E5E5E5] rounded-md font-['Source_Sans_3',sans-serif] bg-white focus:outline-none focus:border-[#1D4B34]"
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "All claim types" : t}
            </option>
          ))}
        </select>
        <select
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
          className="px-3 py-2 text-[13px] border border-[#E5E5E5] rounded-md font-['Source_Sans_3',sans-serif] bg-white focus:outline-none focus:border-[#1D4B34]"
        >
          {stageOpts.map((s) => (
            <option key={s} value={s}>
              {s === "All" ? "All stages" : s}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#E5E5E5] rounded-lg overflow-hidden">
        <table className="w-full text-[13px] font-['Source_Sans_3',sans-serif]">
          <thead className="bg-[#F8F8F8] border-b border-[#E5E5E5]">
            <tr className="text-left text-[#6B7280] font-medium">
              {[
                { k: "ref", label: "Case Ref" },
                { k: "claimant", label: "Claimant" },
                { k: "type", label: "Claim Type" },
                { k: "stage", label: "Stage" },
                { k: "lawyer", label: "Lawyer" },
                { k: "hearing", label: "Hearing" },
                { k: "daysAway", label: "Days Away" },
                { k: "priority", label: "Priority" },
              ].map((col) => (
                <th
                  key={col.k}
                  className="px-4 py-3 cursor-pointer hover:bg-[#F0F0F0] select-none"
                  onClick={() => toggleSort(col.k as keyof Case)}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    {sortKey === col.k && (
                      <span className="text-[10px]">
                        {sortDir === "asc" ? "▲" : "▼"}
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.ref}
                onClick={() => onCaseClick(c)}
                className="border-b border-[#E5E5E5] last:border-0 hover:bg-[#F8F8F8] cursor-pointer text-[#212223]"
              >
                <td className="px-4 py-3 font-mono text-[12px]">{c.ref}</td>
                <td className="px-4 py-3 font-medium">{c.claimant}</td>
                <td className="px-4 py-3">{c.type}</td>
                <td className="px-4 py-3">
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px]"
                    style={{ color: stageColors[c.stage] }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: stageColors[c.stage] }}
                    />
                    {c.stage}
                  </span>
                </td>
                <td className="px-4 py-3">{c.lawyer}</td>
                <td className="px-4 py-3">{c.hearing}</td>
                <td className="px-4 py-3">
                  {c.daysAway !== null ? `${c.daysAway}d` : "—"}
                </td>
                <td className="px-4 py-3">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: priorityColors[c.priority] }}
                  >
                    {c.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function CaseDrawer({ caseData, onClose }: { caseData: Case; onClose: () => void }) {
  const checklist = [
    { label: "Draft/finalise witness statements", done: true },
    { label: "Prepare hearing bundle", done: true },
    { label: "Brief counsel", done: false },
    { label: "Update Scott schedule", done: false },
    { label: "File documents with tribunal", done: false },
  ]

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={onClose}>
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="relative w-[480px] bg-white shadow-xl h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-[#E5E5E5] px-6 py-4 flex items-start justify-between">
          <div>
            <div className="text-[12px] text-[#6B7280] font-mono mb-1">{caseData.ref}</div>
            <h2 className="font-['Clario:Medium',sans-serif] text-[20px] text-[#212223] leading-tight">
              {caseData.claimant} v Vodafone UK
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#F0F0F0] rounded"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            <span className="text-[12px] font-['Source_Sans_3',sans-serif] bg-[#F0F0F0] text-[#212223] rounded-full px-3 py-1">
              {caseData.type}
            </span>
            <span
              className="text-[12px] font-['Source_Sans_3',sans-serif] rounded-full px-3 py-1 text-white"
              style={{ backgroundColor: stageColors[caseData.stage] }}
            >
              {caseData.stage}
            </span>
            <span
              className="text-[12px] font-['Source_Sans_3',sans-serif] font-semibold uppercase tracking-wide rounded-full px-3 py-1 text-white"
              style={{ backgroundColor: priorityColors[caseData.priority] }}
            >
              {caseData.priority}
            </span>
          </div>

          {/* Detail */}
          <div>
            <h3 className="text-[12px] uppercase tracking-wider text-[#6B7280] font-['Source_Sans_3',sans-serif] font-semibold mb-2">
              Case Detail
            </h3>
            <p className="text-[14px] text-[#212223] font-['Source_Sans_3',sans-serif] leading-[1.6]">
              {caseData.detail}
            </p>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 text-[13px] font-['Source_Sans_3',sans-serif]">
            <div>
              <div className="text-[#6B7280] mb-1">Lawyer</div>
              <div className="text-[#212223] font-medium">{caseData.lawyer}</div>
            </div>
            <div>
              <div className="text-[#6B7280] mb-1">Hearing</div>
              <div className="text-[#212223] font-medium">{caseData.hearing}</div>
            </div>
          </div>

          {/* Checklist */}
          <div>
            <h3 className="text-[12px] uppercase tracking-wider text-[#6B7280] font-['Source_Sans_3',sans-serif] font-semibold mb-3">
              Preparation Checklist
            </h3>
            <ul className="space-y-2">
              {checklist.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-[14px] font-['Source_Sans_3',sans-serif]"
                >
                  <span
                    className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                      item.done
                        ? "bg-[#1D4B34] border-[#1D4B34]"
                        : "bg-white border-[#D2D2D2]"
                    }`}
                  >
                    {item.done && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                  </span>
                  <span
                    className={
                      item.done ? "text-[#6B7280] line-through" : "text-[#212223]"
                    }
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function AIAssistant() {
  const [input, setInput] = useState("")

  return (
    <div className="flex flex-col h-full">
      {/* Banner */}
      <div className="bg-[#EAF2EF] border-b border-[#94D1C2] px-8 py-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#1D4B34]" />
        <span className="text-[13px] font-['Source_Sans_3',sans-serif] text-[#1D4B34] font-medium">
          Scoped to Vodafone Employment Matters
        </span>
      </div>

      {/* Conversation */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 max-w-[860px] w-full mx-auto">
        {/* Q1 */}
        <UserMessage text="What are the key risks in the Johnson case before 12 June?" />
        <AssistantMessage>
          <p className="mb-3">
            Three risks identified for the Johnson hearing on 12 June (17 days away):
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex gap-2">
              <span className="text-[#D64000] font-bold">1.</span>
              <span>
                <strong>Witness statements not filed.</strong> J.Park should be chased
                today — these must be served before bundle preparation.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#D64000] font-bold">2.</span>
              <span>
                <strong>Selection matrix inconsistency</strong> raised in the
                claimant's grounds. Cross-referencing source documents recommended.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#D64000] font-bold">3.</span>
              <span>
                <strong>Hearing bundle</strong> must be filed at least 7 days before
                hearing — deadline 5 June.
              </span>
            </li>
          </ul>
          <ArtifactCard title="Johnson Risk Summary — 26 May 2026" />
        </AssistantMessage>

        {/* Q2 */}
        <UserMessage text="Draft an agenda for a case review meeting across all 8 matters" />
        <AssistantMessage>
          <p className="mb-3">Suggested agenda — 60 minutes total:</p>
          <div className="space-y-3 text-[14px]">
            <div>
              <div className="font-semibold text-[#D64000] mb-1">Urgent items (25 min)</div>
              <ul className="space-y-1 ml-4">
                <li>• Johnson — hearing prep status (15 min)</li>
                <li>• Okafor — bundle and witness review (10 min)</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-[#0A4E75] mb-1">Active matters (25 min)</div>
              <ul className="space-y-1 ml-4">
                <li>• Sharma — OH report and adjustments (8 min)</li>
                <li>• Mensah — comparator strategy (8 min)</li>
                <li>• Clarke — CMC preparation (5 min)</li>
                <li>• Whitfield, Al-Hassan — round-up (4 min)</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-[#1D4B34] mb-1">AOB (10 min)</div>
              <ul className="space-y-1 ml-4">
                <li>• O'Brien ACAS update</li>
                <li>• Cross-matter resourcing</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <ArtifactCard title="Case Review Agenda — 26 May 2026" />
          </div>
        </AssistantMessage>
      </div>

      {/* Input */}
      <div className="border-t border-[#E5E5E5] bg-white px-8 py-4">
        <div className="max-w-[860px] mx-auto">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about this site..."
              className="w-full pl-4 pr-12 py-3 text-[14px] border border-[#E5E5E5] rounded-lg font-['Source_Sans_3',sans-serif] focus:outline-none focus:border-[#1D4B34]"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1D4B34] hover:bg-[#163826] rounded-md flex items-center justify-center transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[#6B7280] font-['Source_Sans_3',sans-serif] mt-2">
            <AlertCircle className="w-3 h-3" />
            <span>
              AI responses are based on site content. Verify before relying on them.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-[#1D4B34] text-white rounded-lg px-4 py-3 max-w-[75%] font-['Source_Sans_3',sans-serif] text-[14px]">
        {text}
      </div>
    </div>
  )
}

function AssistantMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-[#EAF2EF] flex items-center justify-center flex-shrink-0">
        <Sparkles className="w-4 h-4 text-[#1D4B34]" />
      </div>
      <div className="flex-1 font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] leading-[1.6]">
        {children}
      </div>
    </div>
  )
}

function ArtifactCard({ title }: { title: string }) {
  return (
    <button className="w-full text-left bg-white border border-[#E5E5E5] rounded-lg p-4 hover:border-[#1D4B34] transition-colors flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-[#F0F0F0] flex items-center justify-center flex-shrink-0">
        <FileText className="w-5 h-5 text-[#1D4B34]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-['Source_Sans_3',sans-serif] font-semibold text-[14px] text-[#212223] truncate">
          {title}
        </div>
        <div className="text-[12px] text-[#6B7280] font-['Source_Sans_3',sans-serif]">
          Click to view artifact
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-[#6B7280] flex-shrink-0" />
    </button>
  )
}
