import { useState, type ReactNode } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronFirst,
  ChevronLast,
  Copy,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderOpen,
  HelpCircle,
  Lock,
  Mail,
  MessageSquare,
  PlusSquare,
  Printer,
  RefreshCw,
  Save,
  Search,
  Settings,
  SlidersHorizontal,
} from 'lucide-react';

export type SapRoute = '/' | '/installment';

const MENUS = [
  'File',
  'Edit',
  'View',
  'Data',
  'Go To',
  'Modules',
  'Tools',
  'Window',
  'Help',
];

const MODULES: { label: string; sub?: { label: string; to?: SapRoute }[] }[] = [
  { label: 'Administration', sub: [] },
  { label: 'Financials', sub: [] },
  { label: 'CRM', sub: [] },
  { label: 'Opportunities', sub: [] },
  { label: 'Sales - A/R', sub: [] },
  { label: 'Purchasing - A/P', sub: [] },
  { label: 'Business Partners', sub: [] },
  { label: 'Banking', sub: [] },
  { label: 'Inventory', sub: [] },
  { label: 'Resources', sub: [] },
  { label: 'Production', sub: [] },
  { label: 'MRP', sub: [] },
  { label: 'Service', sub: [{ label: 'Fixed Deposits', to: '/' }] },
  { label: 'Human Resources', sub: [] },
  { label: 'Project Management', sub: [] },
  { label: 'Reports', sub: [] },
  {
    label: 'Fixed Deposits Details',
    sub: [{ label: 'Fixed Deposits', to: '/installment' }],
  },
  { label: 'Lease Details', sub: [] },
  { label: 'Approval Addon', sub: [] },
];

function SapToolbar({
  currentRoute,
  onNavigate,
}: {
  currentRoute: SapRoute;
  onNavigate: (to: SapRoute) => void;
}) {
  const toolGroups = [
    [
      { title: 'Print Preview', icon: <FileText className="w-3.5 h-3.5 text-slate-700" /> },
      { title: 'Print', icon: <Printer className="w-3.5 h-3.5 text-slate-700" /> },
      { title: 'E-Mail', icon: <Mail className="w-3.5 h-3.5 text-amber-700" /> },
      { title: 'SMS', icon: <MessageSquare className="w-3.5 h-3.5 text-sky-700" /> },
      { title: 'MS Excel', icon: <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" /> },
      { title: 'Lock Screen', icon: <Lock className="w-3.5 h-3.5 text-amber-600" /> },
    ],
    [
      {
        title: 'Find (Ctrl+F)',
        icon: <Search className="w-3.5 h-3.5 text-sky-800" />,
        onClick: () => onNavigate('/installment'),
      },
      {
        title: 'Add (Ctrl+A)',
        icon: <PlusSquare className="w-3.5 h-3.5 text-amber-600" />,
        onClick: () => onNavigate('/'),
      },
      { title: 'Save', icon: <Save className="w-3.5 h-3.5 text-sky-700" /> },
      { title: 'Duplicate', icon: <Copy className="w-3.5 h-3.5 text-slate-700" /> },
    ],
    [
      { title: 'First Data Record', icon: <ChevronFirst className="w-3.5 h-3.5 text-emerald-700" /> },
      { title: 'Previous Record', icon: <ArrowLeft className="w-3.5 h-3.5 text-emerald-700" /> },
      { title: 'Next Record', icon: <ArrowRight className="w-3.5 h-3.5 text-emerald-700" /> },
      { title: 'Last Data Record', icon: <ChevronLast className="w-3.5 h-3.5 text-emerald-700" /> },
    ],
    [
      { title: 'Refresh Record', icon: <RefreshCw className="w-3.5 h-3.5 text-sky-700" /> },
      { title: 'Filter Table', icon: <Filter className="w-3.5 h-3.5 text-amber-700" /> },
      { title: 'Open Fixed Deposits Process', icon: <FolderOpen className="w-3.5 h-3.5 text-amber-600" />, onClick: () => onNavigate(currentRoute === '/' ? '/installment' : '/') },
      { title: 'Form Settings', icon: <SlidersHorizontal className="w-3.5 h-3.5 text-slate-700" /> },
      { title: 'General Settings', icon: <Settings className="w-3.5 h-3.5 text-slate-700" /> },
      { title: 'Context Help', icon: <HelpCircle className="w-3.5 h-3.5 text-sky-700" /> },
    ],
  ];

  return (
    <div className="flex h-[30px] w-full items-center gap-0.5 border-b border-sap-grid-line bg-sap-menubar px-1.5 select-none overflow-x-auto">
      {toolGroups.map((group, gi) => (
        <div key={gi} className="flex items-center">
          {gi > 0 && (
            <span className="mx-1 h-[18px] w-[1px] bg-sap-grid-line inline-block" />
          )}
          <div className="flex items-center gap-[1px]">
            {group.map((item) => (
              <button
                key={item.title}
                type="button"
                title={item.title}
                onClick={item.onClick}
                className="flex h-[22px] w-[22px] items-center justify-center border border-transparent hover:border-sap-field-border hover:bg-white/70 active:bg-sap-highlight/40 cursor-pointer"
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="ml-auto flex items-center gap-1 text-[10px]">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className={`px-2 py-[1px] border cursor-pointer ${
            currentRoute === '/'
              ? 'border-sap-btn-border bg-sap-highlight/60 font-bold text-sap-label'
              : 'border-sap-field-border bg-sap-grid-head text-sap-label hover:bg-white/70'
          }`}
        >
          Fixed Deposits
        </button>
        <button
          type="button"
          onClick={() => onNavigate('/installment')}
          className={`px-2 py-[1px] border cursor-pointer ${
            currentRoute === '/installment'
              ? 'border-sap-btn-border bg-sap-highlight/60 font-bold text-sap-label'
              : 'border-sap-field-border bg-sap-grid-head text-sap-label hover:bg-white/70'
          }`}
        >
          Installment Process
        </button>
      </div>
    </div>
  );
}

function SapLogoBadge() {
  return (
    <div className="flex h-[30px] w-[105px] shrink-0 items-center justify-end gap-1.5 px-1 select-none">
      <svg
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SAP"
      >
        <polygon points="0,0 40,0 30,20 0,20" fill="#0A6ED1" />
        <text
          x="5"
          y="14"
          fill="#FFFFFF"
          fontFamily="Tahoma, Arial, sans-serif"
          fontSize="11"
          fontWeight="bold"
        >
          SAP
        </text>
      </svg>
      <div className="leading-[10px] text-[9px] font-bold text-slate-700">
        <div>Business</div>
        <div>One</div>
      </div>
    </div>
  );
}

export function SapChrome({
  title,
  children,
  statusLeft,
  currentRoute = '/',
  onNavigate,
}: {
  title: string;
  children: ReactNode;
  statusLeft?: string;
  currentRoute?: SapRoute;
  onNavigate?: (to: SapRoute) => void;
}) {
  const [modulesOpen, setModulesOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleNav = (to: SapRoute) => {
    setModulesOpen(false);
    setHovered(null);
    onNavigate?.(to);
  };

  return (
    <div className="sap-font min-h-screen w-full bg-sap-desktop py-0 text-sap-label">
      <div className="mx-auto flex w-[1117px] max-w-full flex-col border border-sap-window-border bg-sap-app-bg shadow-lg">
        {/* Menu bar */}
        <div className="sap-menubar relative flex items-center px-1">
          <div className="flex">
            {MENUS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() =>
                  setModulesOpen(m === 'Modules' ? !modulesOpen : false)
                }
                className={`px-2 py-[3px] cursor-pointer ${
                  m === 'Modules' && modulesOpen
                    ? 'bg-sap-highlight text-sap-label'
                    : 'hover:bg-white/20'
                }`}
              >
                <span className="underline decoration-1 underline-offset-1">
                  {m.charAt(0)}
                </span>
                {m.slice(1)}
              </button>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 flex justify-center">
            <span className="text-[12px] font-bold underline">{title}</span>
          </div>
          <div className="ml-auto flex items-center gap-1 pr-1 text-[10px]">
            <span className="tracking-tighter">▤</span>
            <span className="inline-block h-3 w-3 border border-sap-field-border bg-sap-grid-head" />
            <span className="inline-block h-3 w-3 border border-sap-field-border bg-sap-grid-head" />
            <span className="inline-block h-3 w-3 border border-sap-btn-border bg-destructive" />
          </div>
          {modulesOpen && (
            <div
              className="absolute left-[152px] top-full z-50 w-[180px] border border-sap-window-border bg-sap-app-bg py-[2px] text-sap-label shadow-md"
              onMouseLeave={() => setHovered(null)}
            >
              {MODULES.map((mod) => (
                <div
                  key={mod.label}
                  className="relative"
                  onMouseEnter={() => setHovered(mod.label)}
                >
                  <div
                    className={`flex items-center justify-between px-2 py-[2px] cursor-pointer ${
                      hovered === mod.label ? 'bg-sap-highlight' : ''
                    }`}
                  >
                    <span>
                      <span className="underline decoration-1 underline-offset-1">
                        {mod.label.charAt(0)}
                      </span>
                      {mod.label.slice(1)}
                    </span>
                    <span className="text-[8px]">▶</span>
                  </div>
                  {hovered === mod.label && mod.sub && mod.sub.length > 0 && (
                    <div className="absolute left-full top-0 z-50 w-[150px] border border-sap-window-border bg-sap-app-bg py-[2px] text-sap-label shadow-md">
                      {mod.sub.map((s) => (
                        <button
                          key={s.label}
                          type="button"
                          onClick={() => handleNav(s.to ?? '/')}
                          className="block w-full text-left px-3 py-[2px] hover:bg-sap-highlight cursor-pointer"
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Toolbar */}
        <SapToolbar currentRoute={currentRoute} onNavigate={handleNav} />

        {/* Window */}
        <div className="p-0">{children}</div>

        {/* Status bar */}
        <div className="border-t border-sap-grid-line bg-sap-app-bg px-1 pb-1 pt-1">
          <div className="flex items-end gap-1">
            <div className="flex-1 space-y-[2px]">
              <div className="flex gap-1">
                <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head px-1">
                  {statusLeft}
                </div>
                <div className="h-[15px] w-[90px] border border-sap-field-border bg-sap-grid-head text-center">
                  08/10/26
                </div>
                <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
                <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
              </div>
              <div className="flex gap-1">
                <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
                <div className="h-[15px] w-[90px] border border-sap-field-border bg-sap-grid-head text-center">
                  11:13AM
                </div>
                <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
                <div className="h-[15px] flex-1 border border-sap-field-border bg-sap-grid-head" />
              </div>
            </div>
            <SapLogoBadge />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SapWindow({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className="m-[2px] border border-sap-window-border bg-sap-window-bg">
      <div className="h-[3px] bg-sap-accent" />
      <div className="flex items-center justify-between border-b border-sap-grid-line bg-sap-grid-head px-1 py-[2px] text-[11px]">
        <span className="text-sap-label">{caption}</span>
        <span className="flex gap-[2px]">
          {['_', '▣', '✕'].map((s, i) => (
            <span
              key={i}
              className="inline-flex h-[13px] w-[14px] items-center justify-center border border-sap-field-border bg-sap-grid-head text-[8px] text-sap-label"
            >
              {s}
            </span>
          ))}
        </span>
      </div>
      <div className="p-0">{children}</div>
    </div>
  );
}
