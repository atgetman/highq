"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
  X,
  FileText,
  AlertTriangle,
  TrendingUp,
  Send,
  Grid3x3,
  List,
  Search,
} from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

type TabKey = "dashboard" | "properties" | "events" | "ai"

type PropertyType = "Office" | "Industrial" | "Retail" | "Residential"
type Covenant = "Strong" | "Medium" | "Weak"

interface Property {
  id: string
  name: string
  city: string
  type: PropertyType
  rent: string
  expiry: string
  tenant: string
  covenant: Covenant
}

const PROPERTIES: Property[] = [
  { id: "p1", name: "120 Moorgate", city: "London EC2", type: "Office", rent: "£485k pa", expiry: "29 Jun 2028", tenant: "Blackwell & Partners", covenant: "Strong" },
  { id: "p2", name: "Trafford Park Unit 7", city: "Manchester", type: "Industrial", rent: "£220k pa", expiry: "14 Jul 2026", tenant: "DHL Supply Chain", covenant: "Strong" },
  { id: "p3", name: "Edinburgh Exchange", city: "Edinburgh EH2", type: "Office", rent: "£310k pa", expiry: "30 Jul 2026", tenant: "Shepherd & Co", covenant: "Medium" },
  { id: "p4", name: "Bullring Unit 34", city: "Birmingham B5", type: "Retail", rent: "£195k pa", expiry: "14 Aug 2026", tenant: "Next Retail", covenant: "Strong" },
  { id: "p5", name: "Park Royal Industrial", city: "London NW10", type: "Industrial", rent: "£380k pa", expiry: "31 Aug 2027", tenant: "Amazon Logistics", covenant: "Strong" },
  { id: "p6", name: "Canary Wharf Tower B", city: "London E14", type: "Office", rent: "£1.24M pa", expiry: "25 Dec 2031", tenant: "Morgan Stanley", covenant: "Strong" },
  { id: "p7", name: "Meadowhall Unit 22", city: "Sheffield", type: "Retail", rent: "£165k pa", expiry: "24 Mar 2029", tenant: "H&M", covenant: "Strong" },
  { id: "p8", name: "Bristol Temple Quay", city: "Bristol BS1", type: "Office", rent: "£425k pa", expiry: "11 Nov 2030", tenant: "PwC LLP", covenant: "Strong" },
  { id: "p9", name: "Manchester Airport Logistics", city: "Manchester", type: "Industrial", rent: "£290k pa", expiry: "19 Jan 2033", tenant: "FedEx UK", covenant: "Strong" },
  { id: "p10", name: "Oxford Street Unit 88", city: "London W1", type: "Retail", rent: "£890k pa", expiry: "28 Feb 2028", tenant: "Apple Retail", covenant: "Strong" },
  { id: "p11", name: "Glasgow Buchanan Unit 5", city: "Glasgow", type: "Retail", rent: "£210k pa", expiry: "30 Sep 2027", tenant: "Zara UK", covenant: "Medium" },
  { id: "p12", name: "Swindon Distribution Centre", city: "Swindon", type: "Industrial", rent: "£175k pa", expiry: "15 Jun 2032", tenant: "Royal Mail", covenant: "Strong" },
]

const TYPE_COLORS: Record<PropertyType, string> = {
  Office: "#3E8E7A",
  Industrial: "#0A4E75",
  Retail: "#D64000",
  Residential: "#94D1C2",
}

interface LeaseEvent {
  date: string
  day: string
  monthYear: string
  type: string
  property: string
  daysAway: number
  status: string
  severity: "urgent" | "warning" | "fine"
}

const LEASE_EVENTS: LeaseEvent[] = [
  { date: "30 Jun 2026", day: "30", monthYear: "Jun 2026", type: "Rent Review", property: "120 Moorgate, London", daysAway: 35, status: "Instruction required", severity: "urgent" },
  { date: "14 Jul 2026", day: "14", monthYear: "Jul 2026", type: "Lease Renewal", property: "Trafford Park Unit 7", daysAway: 49, status: "Notice served", severity: "warning" },
  { date: "30 Jul 2026", day: "30", monthYear: "Jul 2026", type: "Break Notice", property: "Edinburgh Exchange", daysAway: 65, status: "Under negotiation", severity: "warning" },
  { date: "14 Aug 2026", day: "14", monthYear: "Aug 2026", type: "Lease Expiry", property: "Bullring Unit 34, Birmingham", daysAway: 80, status: "Renewal agreed", severity: "fine" },
  { date: "01 Sep 2026", day: "01", monthYear: "Sep 2026", type: "Rent Review", property: "Park Royal Industrial, London", daysAway: 98, status: "Surveyor instructed", severity: "fine" },
  { date: "15 Sep 2026", day: "15", monthYear: "Sep 2026", type: "EPC Renewal", property: "Glasgow Buchanan Unit 5", daysAway: 112, status: "Survey booked", severity: "fine" },
  { date: "30 Sep 2026", day: "30", monthYear: "Sep 2026", type: "Insurance Review", property: "Canary Wharf Tower B", daysAway: 127, status: "Renewal due", severity: "fine" },
]

const PORTFOLIO_BY_TYPE = [
  { name: "Office", value: 38, color: "#3E8E7A" },
  { name: "Industrial", value: 28, color: "#0A4E75" },
  { name: "Retail", value: 24, color: "#D64000" },
  { name: "Residential", value: 10, color: "#94D1C2" },
]

const LEASE_EXPIRIES = [
  { year: "2026", count: 4 },
  { year: "2027", count: 8 },
  { year: "2028", count: 12 },
  { year: "2029", count: 6 },
  { year: "2030", count: 9 },
  { year: "2031", count: 5 },
  { year: "2032", count: 3 },
]

const TYPE_FILTERS: Array<{ key: PropertyType | "All"; count: number }> = [
  { key: "All", count: 47 },
  { key: "Office", count: 18 },
  { key: "Industrial", count: 13 },
  { key: "Retail", count: 11 },
  { key: "Residential", count: 5 },
]

export function LG() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard")
  const [typeFilter, setTypeFilter] = useState<PropertyType | "All">("All")
  const [propsView, setPropsView] = useState<"cards" | "table">("cards")
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  return (
    <div className="flex h-[calc(100vh-104px)] bg-[#F8F8F6]">
      {/* Icon Rail */}
      <nav className="flex w-[72px] flex-col items-center border-r border-[#E5E5E5] bg-white py-4">
        <IconTab icon={LayoutDashboard} label="Dashboard" active={activeTab === "dashboard"} onClick={() => setActiveTab("dashboard")} />
        <IconTab icon={Building2} label="Properties" active={activeTab === "properties"} onClick={() => setActiveTab("properties")} />
        <IconTab icon={Calendar} label="Lease Events" active={activeTab === "events"} onClick={() => setActiveTab("events")} />
        <IconTab icon={Sparkles} label="AI Assistant" active={activeTab === "ai"} onClick={() => setActiveTab("ai")} />
      </nav>

      {/* Context Sidebar */}
      <aside className="flex w-[300px] flex-col border-r border-[#E5E5E5] bg-white">
        <div className="border-b border-[#E5E5E5] p-5">
          <h2 className="font-['Clario:Bold',sans-serif] text-[18px] leading-[1.3] text-[#212223]">L&G Institutional Portfolio</h2>
          <p className="mt-1 font-['Source_Sans_3',sans-serif] text-[13px] text-[#6B7280]">Real Estate Portfolio</p>
        </div>

        <div className="border-b border-[#E5E5E5] p-5">
          <dl className="space-y-2 font-['Source_Sans_3',sans-serif] text-[13px]">
            <div className="flex justify-between gap-2">
              <dt className="text-[#6B7280]">Client</dt>
              <dd className="text-right text-[#212223]">Legal & General IM</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-[#6B7280]">Law firm</dt>
              <dd className="text-right text-[#212223]">Clifford Chance LLP</dd>
            </div>
          </dl>
        </div>

        <div className="border-b border-[#E5E5E5] p-5">
          <div className="rounded-md bg-[#F8F8F6] p-4">
            <div className="grid grid-cols-2 gap-3 font-['Source_Sans_3',sans-serif]">
              <SummaryStat value="47" label="Properties" />
              <SummaryStat value="£1.4B" label="AUM" />
              <SummaryStat value="12" label="Events" />
              <SummaryStat value="3" label="Compliance" highlight />
            </div>
          </div>
        </div>

        <div className="border-b border-[#E5E5E5] p-5">
          <h3 className="mb-3 font-['Source_Sans_3',sans-serif] text-[12px] font-medium uppercase tracking-wide text-[#6B7280]">Filter by type</h3>
          <ul className="space-y-1">
            {TYPE_FILTERS.map((f) => (
              <li key={f.key}>
                <button
                  onClick={() => setTypeFilter(f.key)}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-['Source_Sans_3',sans-serif] text-[14px] transition-colors ${
                    typeFilter === f.key ? "bg-[#E8F0EE] text-[#1d4b34]" : "text-[#212223] hover:bg-[#F8F8F6]"
                  }`}
                >
                  <span>{f.key}</span>
                  <span className="text-[12px] text-[#6B7280]">{f.count}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto border-t border-[#E5E5E5] p-5">
          <h3 className="mb-3 font-['Source_Sans_3',sans-serif] text-[12px] font-medium uppercase tracking-wide text-[#6B7280]">Switch site</h3>
          <ul className="space-y-2">
            <li>
              <a href="/alpine" className="flex items-center justify-between rounded-md px-3 py-2 font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] hover:bg-[#F8F8F6]">
                <span>Project Alpine</span>
                <ArrowRight className="h-4 w-4 text-[#6B7280]" />
              </a>
            </li>
            <li>
              <a href="/vodafone" className="flex items-center justify-between rounded-md px-3 py-2 font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] hover:bg-[#F8F8F6]">
                <span>Vodafone Litigation</span>
                <ArrowRight className="h-4 w-4 text-[#6B7280]" />
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {activeTab === "dashboard" && <DashboardTab />}
        {activeTab === "properties" && (
          <PropertiesTab
            view={propsView}
            setView={setPropsView}
            typeFilter={typeFilter}
            onSelectProperty={setSelectedProperty}
          />
        )}
        {activeTab === "events" && <EventsTab />}
        {activeTab === "ai" && <AIAssistantTab />}
      </main>

      {/* Property Drawer */}
      {selectedProperty && <PropertyDrawer property={selectedProperty} onClose={() => setSelectedProperty(null)} />}
    </div>
  )
}

function IconTab({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: typeof LayoutDashboard
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`group relative mb-2 flex h-12 w-12 items-center justify-center rounded-md transition-colors ${
        active ? "bg-[#E8F0EE] text-[#1d4b34]" : "text-[#6B7280] hover:bg-[#F8F8F6] hover:text-[#212223]"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </button>
  )
}

function SummaryStat({ value, label, highlight }: { value: string; label: string; highlight?: boolean }) {
  return (
    <div>
      <div className={`text-[20px] leading-[1.2] font-['Clario:Bold',sans-serif] ${highlight ? "text-[#D64000]" : "text-[#212223]"}`}>
        {value}
      </div>
      <div className="mt-1 text-[12px] text-[#6B7280]">{label}</div>
    </div>
  )
}

function DashboardTab() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="font-['Clario:Bold',sans-serif] text-[28px] leading-[1.2] text-[#212223]">Dashboard</h1>
        <p className="mt-1 font-['Source_Sans_3',sans-serif] text-[14px] text-[#6B7280]">
          Portfolio overview and upcoming lease events
        </p>
      </div>

      {/* KPI Cards */}
      <div className="mb-6 grid grid-cols-4 gap-4">
        <KPICard label="Properties" value="47" />
        <KPICard label="Value" value="£1.4B" />
        <KPICard label="Events This Month" value="12" />
        <KPICard label="Compliance" value="3" highlight />
      </div>

      {/* Charts */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <ChartCard title="Portfolio by Type">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={PORTFOLIO_BY_TYPE}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={2}
              >
                {PORTFOLIO_BY_TYPE.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E5E5",
                  borderRadius: "6px",
                  fontSize: "13px",
                }}
                formatter={(value: number) => `${value}%`}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{ fontSize: "13px", fontFamily: "Source_Sans_3, sans-serif" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Lease Expiries by Year">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={LEASE_EXPIRIES} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280", fontFamily: "Source_Sans_3, sans-serif" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280", fontFamily: "Source_Sans_3, sans-serif" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E5E5",
                  borderRadius: "6px",
                  fontSize: "13px",
                }}
                cursor={{ fill: "#F8F8F6" }}
              />
              <Bar dataKey="count" fill="#1d4b34" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Upcoming Events Table */}
      <div className="rounded-lg border border-[#E5E5E5] bg-white">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] px-6 py-4">
          <h2 className="font-['Clario:Bold',sans-serif] text-[16px] text-[#212223]">Upcoming Events</h2>
          <button className="font-['Source_Sans_3',sans-serif] text-[13px] font-medium text-[#1d4b34] hover:underline">
            View all
          </button>
        </div>
        <table className="w-full font-['Source_Sans_3',sans-serif] text-[14px]">
          <thead>
            <tr className="border-b border-[#E5E5E5] text-left text-[12px] font-medium uppercase tracking-wide text-[#6B7280]">
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Event Type</th>
              <th className="px-6 py-3">Property</th>
              <th className="px-6 py-3">Days Away</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {LEASE_EVENTS.slice(0, 5).map((e, i) => (
              <tr key={i} className="border-b border-[#F0F0EE] last:border-0 hover:bg-[#F8F8F6]">
                <td className="px-6 py-3 text-[#212223]">{e.date}</td>
                <td className="px-6 py-3 text-[#212223]">{e.type}</td>
                <td className="px-6 py-3 text-[#212223]">{e.property}</td>
                <td className="px-6 py-3">
                  <DaysPill days={e.daysAway} severity={e.severity} />
                </td>
                <td className="px-6 py-3 text-[#6B7280]">{e.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function KPICard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-lg border border-[#E5E5E5] bg-white p-5">
      <div className="font-['Source_Sans_3',sans-serif] text-[13px] text-[#6B7280]">{label}</div>
      <div className={`mt-2 font-['Clario:Bold',sans-serif] text-[28px] leading-[1.2] ${highlight ? "text-[#D64000]" : "text-[#212223]"}`}>
        {value}
      </div>
    </div>
  )
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#E5E5E5] bg-white p-5">
      <h2 className="mb-4 font-['Clario:Bold',sans-serif] text-[16px] text-[#212223]">{title}</h2>
      {children}
    </div>
  )
}

function DaysPill({ days, severity }: { days: number; severity: "urgent" | "warning" | "fine" }) {
  const styles =
    severity === "urgent"
      ? "bg-[#FCEBE0] text-[#D64000]"
      : severity === "warning"
      ? "bg-[#FDF4E3] text-[#A87D1A]"
      : "bg-[#E8F0EE] text-[#1d4b34]"
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium ${styles}`}>
      {days} days
    </span>
  )
}

function PropertiesTab({
  view,
  setView,
  typeFilter,
  onSelectProperty,
}: {
  view: "cards" | "table"
  setView: (v: "cards" | "table") => void
  typeFilter: PropertyType | "All"
  onSelectProperty: (p: Property) => void
}) {
  const [search, setSearch] = useState("")

  const filtered = PROPERTIES.filter((p) => {
    if (typeFilter !== "All" && p.type !== typeFilter) return false
    if (search && !`${p.name} ${p.city} ${p.tenant}`.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="p-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="font-['Clario:Bold',sans-serif] text-[28px] leading-[1.2] text-[#212223]">Properties</h1>
          <p className="mt-1 font-['Source_Sans_3',sans-serif] text-[14px] text-[#6B7280]">
            {filtered.length} of {PROPERTIES.length} properties
            {typeFilter !== "All" ? ` · ${typeFilter}` : ""}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search properties"
              className="w-[260px] rounded-md border border-[#E5E5E5] bg-white py-2 pl-9 pr-3 font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] placeholder:text-[#9CA3AF] focus:border-[#1d4b34] focus:outline-none"
            />
          </div>
          <div className="inline-flex rounded-md border border-[#E5E5E5] bg-white p-0.5">
            <button
              onClick={() => setView("cards")}
              className={`flex items-center gap-1.5 rounded px-3 py-1.5 font-['Source_Sans_3',sans-serif] text-[13px] transition-colors ${
                view === "cards" ? "bg-[#E8F0EE] text-[#1d4b34]" : "text-[#6B7280] hover:text-[#212223]"
              }`}
            >
              <Grid3x3 className="h-4 w-4" />
              Cards
            </button>
            <button
              onClick={() => setView("table")}
              className={`flex items-center gap-1.5 rounded px-3 py-1.5 font-['Source_Sans_3',sans-serif] text-[13px] transition-colors ${
                view === "table" ? "bg-[#E8F0EE] text-[#1d4b34]" : "text-[#6B7280] hover:text-[#212223]"
              }`}
            >
              <List className="h-4 w-4" />
              Table
            </button>
          </div>
        </div>
      </div>

      {view === "cards" ? (
        <div className="grid grid-cols-3 gap-4">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} onClick={() => onSelectProperty(p)} />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-lg border border-[#E5E5E5] bg-white">
          <table className="w-full font-['Source_Sans_3',sans-serif] text-[14px]">
            <thead>
              <tr className="border-b border-[#E5E5E5] text-left text-[12px] font-medium uppercase tracking-wide text-[#6B7280]">
                <th className="px-6 py-3">Property</th>
                <th className="px-6 py-3">City</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Passing Rent</th>
                <th className="px-6 py-3">Expiry</th>
                <th className="px-6 py-3">Tenant</th>
                <th className="px-6 py-3">Covenant</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr
                  key={p.id}
                  className="cursor-pointer border-b border-[#F0F0EE] last:border-0 hover:bg-[#F8F8F6]"
                  onClick={() => onSelectProperty(p)}
                >
                  <td className="px-6 py-3 font-medium text-[#212223]">{p.name}</td>
                  <td className="px-6 py-3 text-[#6B7280]">{p.city}</td>
                  <td className="px-6 py-3">
                    <TypePill type={p.type} />
                  </td>
                  <td className="px-6 py-3 text-[#212223]">{p.rent}</td>
                  <td className="px-6 py-3 text-[#212223]">{p.expiry}</td>
                  <td className="px-6 py-3 text-[#6B7280]">{p.tenant}</td>
                  <td className="px-6 py-3">
                    <CovenantPill covenant={p.covenant} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function PropertyCard({ property, onClick }: { property: Property; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-lg border border-[#E5E5E5] bg-white text-left transition-colors hover:border-[#1d4b34]"
    >
      <div
        className="flex h-20 items-center justify-center"
        style={{ backgroundColor: TYPE_COLORS[property.type] }}
      >
        <Building2 className="h-8 w-8 text-white" strokeWidth={1.5} />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 font-['Source_Sans_3',sans-serif]">
        <div>
          <h3 className="font-['Clario:Medium',sans-serif] text-[15px] leading-[1.3] text-[#212223]">{property.name}</h3>
          <p className="text-[13px] text-[#6B7280]">{property.city}</p>
        </div>
        <dl className="space-y-1 text-[13px]">
          <div className="flex justify-between">
            <dt className="text-[#6B7280]">Passing rent</dt>
            <dd className="text-[#212223]">{property.rent}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#6B7280]">Lease expiry</dt>
            <dd className="text-[#212223]">{property.expiry}</dd>
          </div>
        </dl>
        <div className="mt-auto flex items-center justify-between border-t border-[#F0F0EE] pt-3">
          <span className="truncate text-[13px] text-[#6B7280]" title={property.tenant}>
            {property.tenant}
          </span>
          <CovenantPill covenant={property.covenant} />
        </div>
      </div>
    </button>
  )
}

function TypePill({ type }: { type: PropertyType }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium"
      style={{
        backgroundColor: `${TYPE_COLORS[type]}1A`,
        color: TYPE_COLORS[type],
      }}
    >
      {type}
    </span>
  )
}

function CovenantPill({ covenant }: { covenant: Covenant }) {
  const styles =
    covenant === "Strong"
      ? "bg-[#E8F0EE] text-[#1d4b34]"
      : covenant === "Medium"
      ? "bg-[#FDF4E3] text-[#A87D1A]"
      : "bg-[#FCEBE0] text-[#D64000]"
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium ${styles}`}>
      {covenant}
    </span>
  )
}

function PropertyDrawer({ property, onClose }: { property: Property; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/30" onClick={onClose} />
      <aside className="flex w-[480px] flex-col bg-white shadow-xl">
        <div className="flex items-start justify-between border-b border-[#E5E5E5] p-6">
          <div>
            <TypePill type={property.type} />
            <h2 className="mt-2 font-['Clario:Bold',sans-serif] text-[20px] leading-[1.3] text-[#212223]">
              {property.name}
            </h2>
            <p className="mt-1 font-['Source_Sans_3',sans-serif] text-[13px] text-[#6B7280]">{property.city}</p>
          </div>
          <button onClick={onClose} className="rounded-md p-1 text-[#6B7280] hover:bg-[#F8F8F6]">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6 font-['Source_Sans_3',sans-serif]">
          <section className="mb-6">
            <h3 className="mb-3 text-[12px] font-medium uppercase tracking-wide text-[#6B7280]">Property details</h3>
            <dl className="space-y-2 text-[14px]">
              <Row label="Tenant" value={property.tenant} />
              <Row label="Covenant" value={<CovenantPill covenant={property.covenant} />} />
              <Row label="Passing rent" value={property.rent} />
              <Row label="Lease expiry" value={property.expiry} />
              <Row label="Use class" value={property.type} />
              <Row label="Tenure" value="Freehold" />
            </dl>
          </section>

          <section className="mb-6">
            <h3 className="mb-3 text-[12px] font-medium uppercase tracking-wide text-[#6B7280]">Linked documents</h3>
            <ul className="space-y-2">
              {["Lease Agreement", "Title Register", "Survey"].map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 rounded-md border border-[#E5E5E5] p-3 text-[14px] text-[#212223] hover:bg-[#F8F8F6]"
                >
                  <FileText className="h-4 w-4 text-[#1d4b34]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border-l-4 border-l-[#D64000] bg-[#FFF5EE] p-4">
            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#D64000]" />
              <h3 className="font-['Clario:Medium',sans-serif] text-[14px] text-[#212223]">AI Analysis</h3>
            </div>
            <p className="text-[13px] leading-[1.5] text-[#3F3F46]">
              Passing rent for {property.name} is broadly aligned with comparable {property.type.toLowerCase()} stock in {property.city}. Covenant strength of "{property.covenant}" supports refinancing scenarios. Recommend a full ESG screening 18 months ahead of the {property.expiry} expiry to inform reletting strategy.
            </p>
          </section>
        </div>
      </aside>
    </div>
  )
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-[#6B7280]">{label}</dt>
      <dd className="text-right text-[#212223]">{value}</dd>
    </div>
  )
}

function EventsTab() {
  const legend: Array<{ key: string; color: string }> = [
    { key: "Rent Review", color: "#3E8E7A" },
    { key: "Lease Renewal", color: "#0A4E75" },
    { key: "Lease Expiry", color: "#D64000" },
    { key: "Break Notice", color: "#A87D1A" },
    { key: "EPC Renewal", color: "#94D1C2" },
    { key: "Insurance Review", color: "#6B7280" },
  ]

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="font-['Clario:Bold',sans-serif] text-[28px] leading-[1.2] text-[#212223]">Lease Events</h1>
        <p className="mt-1 font-['Source_Sans_3',sans-serif] text-[14px] text-[#6B7280]">
          {LEASE_EVENTS.length} upcoming events across the portfolio
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {legend.map((l) => (
          <span
            key={l.key}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E5E5E5] px-3 py-1 font-['Source_Sans_3',sans-serif] text-[12px] text-[#212223]"
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: l.color }} />
            {l.key}
          </span>
        ))}
      </div>

      <ul className="space-y-3">
        {LEASE_EVENTS.map((e, i) => (
          <li key={i}>
            <EventCard event={e} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function EventCard({ event }: { event: LeaseEvent }) {
  const borderColor = event.severity === "urgent" ? "#D64000" : event.severity === "warning" ? "#94D1C2" : "#3E8E7A"

  return (
    <article
      className="flex overflow-hidden rounded-lg border border-[#E5E5E5] bg-white"
      style={{ borderLeft: `4px solid ${borderColor}` }}
    >
      <div className="flex w-[120px] flex-col items-center justify-center border-r border-[#E5E5E5] bg-[#F8F8F6] py-4 font-['Source_Sans_3',sans-serif]">
        <div className="font-['Clario:Bold',sans-serif] text-[36px] leading-[1] text-[#212223]">{event.day}</div>
        <div className="mt-1 text-[12px] uppercase tracking-wide text-[#6B7280]">{event.monthYear}</div>
      </div>
      <div className="flex flex-1 items-center justify-between gap-4 p-5 font-['Source_Sans_3',sans-serif]">
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium"
              style={{ backgroundColor: `${borderColor}1A`, color: borderColor }}
            >
              {event.type}
            </span>
            <DaysPill days={event.daysAway} severity={event.severity} />
          </div>
          <h3 className="font-['Clario:Medium',sans-serif] text-[16px] text-[#212223]">{event.property}</h3>
          <p className="mt-1 text-[13px] text-[#6B7280]">{event.status}</p>
        </div>
        {event.severity === "urgent" && <AlertTriangle className="h-5 w-5 shrink-0 text-[#D64000]" />}
      </div>
    </article>
  )
}

function AIAssistantTab() {
  const [input, setInput] = useState("")

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-[#E5E5E5] bg-[#FFF5EE] px-8 py-3">
        <div className="flex items-center gap-2 font-['Source_Sans_3',sans-serif] text-[13px] text-[#D64000]">
          <Sparkles className="h-4 w-4" />
          <span className="font-medium">Scoped to L&G Institutional Portfolio</span>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <UserMsg text="Which lease events need urgent attention in the next 90 days?" />
          <AIMsg>
            <p className="mb-3">
              I&apos;ve identified <strong>three events</strong> that need immediate attention in the next 90 days:
            </p>
            <ul className="mb-4 space-y-2 pl-1">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D64000]" />
                <span>
                  <strong>120 Moorgate, London</strong> — Rent Review in 35 days. Passing rent is approximately £100k below market and no surveyor has been instructed.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D64000]" />
                <span>
                  <strong>Edinburgh Exchange</strong> — Break notice decision required now to preserve optionality.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D64000]" />
                <span>
                  <strong>Trafford Park Unit 7</strong> — Lease expiry on 14 Jul 2026. Renewal negotiations have not commenced.
                </span>
              </li>
            </ul>
            <ArtifactCard
              title="Portfolio Events Summary — May 2026"
              meta="3 urgent items · 4 monitoring · PDF"
              icon={TrendingUp}
            />
          </AIMsg>

          <UserMsg text="What's the market rent position on 120 Moorgate?" />
          <AIMsg>
            <p className="mb-3">
              <strong>120 Moorgate</strong> is currently passing at <strong>£485k pa</strong> against an estimated open-market value of <strong>£570–600k pa</strong>, placing it 18–24% below market.
            </p>
            <p className="mb-3">
              The lease contains an <strong>upward-only rent review clause</strong>, so this is a meaningful uplift opportunity — but the review date is 35 days away and no surveyor has been instructed.
            </p>
            <div className="rounded-md border border-[#FCEBE0] bg-[#FFF5EE] p-3 text-[13px] text-[#3F3F46]">
              <strong className="text-[#D64000]">Recommendation:</strong> instruct a City office rent review surveyor immediately to file the trigger notice and prepare comparables.
            </div>
          </AIMsg>
        </div>
      </div>

      <div className="border-t border-[#E5E5E5] bg-white p-4">
        <div className="mx-auto flex max-w-3xl items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the L&G portfolio…"
            rows={1}
            className="flex-1 resize-none rounded-md border border-[#E5E5E5] bg-white px-4 py-2.5 font-['Source_Sans_3',sans-serif] text-[14px] text-[#212223] placeholder:text-[#9CA3AF] focus:border-[#1d4b34] focus:outline-none"
          />
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#1d4b34] text-white hover:bg-[#163a28]">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </button>
        </div>
        <p className="mx-auto mt-2 max-w-3xl font-['Source_Sans_3',sans-serif] text-[12px] text-[#6B7280]">
          AI responses are scoped to this site&apos;s data and may contain inaccuracies. Verify before relying on outputs.
        </p>
      </div>
    </div>
  )
}

function UserMsg({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-lg bg-[#1d4b34] px-4 py-3 font-['Source_Sans_3',sans-serif] text-[14px] leading-[1.5] text-white">
        {text}
      </div>
    </div>
  )
}

function AIMsg({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FFF5EE]">
        <Sparkles className="h-4 w-4 text-[#D64000]" />
      </div>
      <div className="flex-1 rounded-lg border border-[#E5E5E5] bg-white p-4 font-['Source_Sans_3',sans-serif] text-[14px] leading-[1.5] text-[#212223]">
        {children}
      </div>
    </div>
  )
}

function ArtifactCard({
  title,
  meta,
  icon: Icon,
}: {
  title: string
  meta: string
  icon: typeof TrendingUp
}) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-[#E5E5E5] bg-[#F8F8F6] p-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white">
        <Icon className="h-5 w-5 text-[#1d4b34]" />
      </div>
      <div className="flex-1">
        <div className="font-['Clario:Medium',sans-serif] text-[14px] text-[#212223]">{title}</div>
        <div className="text-[12px] text-[#6B7280]">{meta}</div>
      </div>
      <button className="rounded-md border border-[#E5E5E5] bg-white px-3 py-1.5 text-[12px] font-medium text-[#1d4b34] hover:bg-[#F0F0EE]">
        Open
      </button>
    </div>
  )
}
