import React, { useState } from 'react';
import { 
  Landmark, Shield, Award, Briefcase, FileCheck, ArrowRight, 
  Calendar, DollarSign, Lock, Building2, ChevronRight, Check, 
  CheckCircle2, Sparkles, Plus, BarChart3, Database, PieChart,
  Coins, KeyRound, Globe, Compass
} from 'lucide-react';
import { AdminPortalModal } from './AdminPortalModal.tsx';

interface DirectSyndicate {
  id: string;
  projectName: string;
  assetClass: string;
  equityTarget: string;
  targetIrr: string;
  prefReturn: string;
  holdPeriod: string;
  status: string;
  highlights: string[];
  image: string;
}

const SYNDICATES: DirectSyndicate[] = [
  {
    id: 'w1',
    projectName: 'Project Highland Tower',
    assetClass: 'TROPHY CLASS-A MULTIFAMILY (AUSTIN CBD)',
    equityTarget: '$65,000,000 Equity Tranche',
    targetIrr: '15.4% Target Net IRR',
    prefReturn: '8.0% Cumulative Preferred Return',
    holdPeriod: '5-Year Harvest Horizon',
    status: 'ALLOCATION OPEN // 70% COMMITTED',
    highlights: ['Zero GP Promote Burden (Direct LP Club Deal)', 'Cost Segregation Accelerated Depreciation Pass-Through', '98.5% Historical Submarket Occupancy', 'Fixed 5.15% Agency Debt in Place'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'w2',
    projectName: 'Project Cyber-Core Hyperscale',
    assetClass: 'CRITICAL AI INFRASTRUCTURE & DATA CENTER',
    equityTarget: '$120,000,000 Syndication',
    targetIrr: '17.2% Target Net IRR',
    prefReturn: '9.0% Current Cash Distribution',
    holdPeriod: '7-Year Triple Net Lease',
    status: 'DUE DILIGENCE STAGE',
    highlights: ['15-Year Unconditional Corporate Guaranty by Hyperscaler', '100MW Contracted Grid Interconnect Capacity', 'Full Carbon-Neutral Hydroelectric Power Offtake', 'Sovereign Real Asset Inflation Hedge'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'w3',
    projectName: 'Sovereign Senior Secured Credit Pool',
    assetClass: 'FIRST-LIEN ASSET-BACKED COMMERCIAL DEBT',
    equityTarget: '$80,000,000 Revolving Pool',
    targetIrr: '12.8% Net Annualized Yield',
    prefReturn: 'Monthly Cash Distribution (10.5% Net)',
    holdPeriod: 'Open-Ended Liquidity Window',
    status: 'DEPLOYING CAPITAL',
    highlights: ['55% Maximum Loan-to-Value (LTV) Discipline', 'First Priority Perfected Liens on Real Estate Assets', 'Personal Guarantees from Sponsor Principals', 'Quarterly Redemptions Available'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedSyndicate, setSelectedSyndicate] = useState<DirectSyndicate | null>(null);
  const [familyPrincipal, setFamilyPrincipal] = useState('');
  const [familyOfficeName, setFamilyOfficeName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [aumTier, setAumTier] = useState('$50M - $100M Net Worth');
  const [submitted, setSubmitted] = useState(false);

  // Check URL route for /admin
  React.useEffect(() => {
    if (window.location.pathname.includes('/admin') || window.location.hash.includes('admin')) {
      setIsAdminOpen(true);
    }
  }, []);

  const handleSubmitFamilyInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!familyOfficeName || !contactEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFamilyOfficeName('');
      setContactEmail('');
      setFamilyPrincipal('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 font-sans selection:bg-amber-500/20 selection:text-amber-400">
      {/* Top Header / Nav */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-zinc-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-black font-extrabold shadow-lg shadow-amber-500/20">
              <Landmark className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">SOVEREIGN MULTI-FAMILY OFFICE</span>
              <h1 className="text-lg font-bold tracking-tight text-white leading-none">WEALTH FAMILY OFFICE OS</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-zinc-400">
            <a href="#syndicates" className="hover:text-amber-400 transition">Direct Syndicates</a>
            <a href="#dynasty" className="hover:text-amber-400 transition">Dynasty Governance</a>
            <a href="#allocation" className="hover:text-amber-400 transition">Asset Matrix</a>
            <a href="#consultation" className="hover:text-amber-400 transition">Principal Intake</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 text-xs font-mono uppercase tracking-wider transition flex items-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>[ PRINCIPAL PASS ]</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOVEREIGN MULTI-FAMILY FIDUCIARY DESK • FULL-STACK OS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Protecting & Compounding <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Generational Family Dynasties</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Multi-family office orchestration, direct private equity co-investments, trophy real asset syndication, and South Dakota dynasty trusts built for 100-year horizons.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#consultation"
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-sm transition shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <span>Schedule Principal Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-medium rounded-xl text-sm transition flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Principal Command Center</span>
            </button>
          </div>

          {/* Quick Metrics HUD */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Landmark className="w-4 h-4 text-amber-400" />
                <span>AGGREGATE AUM</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">$3.42 Billion</p>
              <p className="text-xs font-semibold text-zinc-300 mt-0.5">28 Member Families</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>NET BLENDED IRR</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">11.8% Net</p>
              <p className="text-xs font-semibold text-amber-400 mt-0.5">15-Year Track Record</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>DYNASTY TRUSTS</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">100% Shielded</p>
              <p className="text-xs font-semibold text-zinc-300 mt-0.5">Zero State Tax Perpetual</p>
            </div>

            <div className="p-4 rounded-xl bg-[#121214] border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>DIRECT DEALS</span>
              </div>
              <p className="text-2xl font-bold text-white mt-1">Zero GP Fees</p>
              <p className="text-xs font-semibold text-zinc-300 mt-0.5">Co-Investments & Secondaries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Syndicates Section */}
      <section id="syndicates" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">DIRECT CAPITAL ALLOCATION</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Active Direct Co-Investments</h3>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mt-2 max-w-xl">
              Institutional-grade co-investment opportunities exclusively reserved for accredited family office members. Zero intermediary fee markups.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              3 DIRECT CLUB ROUNDS ACTIVE
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SYNDICATES.map((deal) => (
            <div 
              key={deal.id} 
              className="bg-[#121214] border border-zinc-800 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={deal.image} 
                  alt={deal.projectName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/50 to-transparent"></div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 border border-zinc-700 text-xs font-semibold tracking-wider font-mono font-bold text-amber-400">
                  {deal.status}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold tracking-wider font-mono font-semibold tracking-wider text-zinc-400 uppercase">{deal.assetClass}</span>
                  <h4 className="text-xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">{deal.projectName}</h4>

                  <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-300">Equity Tranche:</span>
                      <span className="font-semibold text-white">{deal.equityTarget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-300">Target Return:</span>
                      <span className="font-semibold text-amber-400">{deal.targetIrr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-300">Preferred Cash Yield:</span>
                      <span className="font-semibold text-zinc-300">{deal.prefReturn}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    {deal.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <button 
                    onClick={() => setSelectedSyndicate(deal)}
                    className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-amber-500/50 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <span>Request Confidential Data Room</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Generational Dynasty Trust Architecture */}
      <section id="dynasty" className="py-20 px-6 bg-[#0E0E10] border-y border-zinc-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">DYNASTY ARCHITECTURE</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Generational Wealth Sovereignty</h3>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mt-2">
              Structuring legal frameworks that defend against estate taxation, divorce claims, frivolous litigation, and jurisdiction risk for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#121214] border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">South Dakota Perpetual Trusts</h4>
              <p className="text-base text-zinc-200 leading-relaxed mt-3 leading-relaxed">
                Perpetual dynasty trust charters with zero state income tax, zero capital gains tax at trust level, and unbreakable 1,000-year statutory creditor immunity.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#121214] border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Private Family Trust Company (PTC)</h4>
              <p className="text-base text-zinc-200 leading-relaxed mt-3 leading-relaxed">
                Empowering the family board to retain complete investment and distribution autonomy without surrendering fiduciary discretion to commercial bank trust departments.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#121214] border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                <KeyRound className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">Cross-Border Tax Arbitrage</h4>
              <p className="text-base text-zinc-200 leading-relaxed mt-3 leading-relaxed">
                Bespoke holding company design spanning Switzerland, Singapore, Delaware, and Puerto Rico Act 60 structures for tax minimization and sovereign mobility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Allocation Matrix Section */}
      <section id="allocation" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">MACRO ASSET STRATEGY</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Multi-Generational Asset Matrix</h3>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mt-2 max-w-xl">
              Conservative preservation paired with high-conviction direct co-investments to generate risk-adjusted inflation-beating yields.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-400 text-xs font-mono rounded-lg transition"
            >
              VIEW PORTFOLIO LEDGER [ familyoffice2026 ]
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-amber-500/40 transition">
            <span className="text-xs font-semibold tracking-wider font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">TARGET: 42% ALLOCATION</span>
            <h4 className="text-lg font-bold text-white mt-3">Direct Real Estate & Infrastructure</h4>
            <p className="text-base text-zinc-200 leading-relaxed mt-2 leading-relaxed">
              Trophy multi-family, critical logistics, and AI compute facilities. Cash flow generation with accelerated depreciation tax benefits.
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs font-semibold text-zinc-300 flex justify-between">
              <span>Historical Yield: 8.5% Cash-on-Cash</span>
              <span className="text-amber-400">$1.436B Deployed</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-amber-500/40 transition">
            <span className="text-xs font-semibold tracking-wider font-mono px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">TARGET: 31% ALLOCATION</span>
            <h4 className="text-lg font-bold text-white mt-3">Private Equity Secondaries & Direct Club</h4>
            <p className="text-base text-zinc-200 leading-relaxed mt-2 leading-relaxed">
              GP-led secondaries purchased at 15–25% discounts to NAV, alongside direct growth co-investments free from 2-and-20 fee hurdles.
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs font-semibold text-zinc-300 flex justify-between">
              <span>Target Net IRR: 16.5%</span>
              <span className="text-amber-400">$1.060B Deployed</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-amber-500/40 transition">
            <span className="text-xs font-semibold tracking-wider font-mono px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">TARGET: 18% ALLOCATION</span>
            <h4 className="text-lg font-bold text-white mt-3">Senior Secured First-Lien Debt</h4>
            <p className="text-base text-zinc-200 leading-relaxed mt-2 leading-relaxed">
              Short-duration, asset-backed commercial credit with conservative loan-to-value covenants and monthly cash distributions.
            </p>
            <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs font-semibold text-zinc-300 flex justify-between">
              <span>Current Yield: 11.2% Net</span>
              <span className="text-amber-400">$615.6M Deployed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Family Intake Form */}
      <section id="consultation" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
        <div className="bg-[#121214] border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">CONFIDENTIAL ONBOARDING</span>
            <h3 className="text-3xl font-extrabold text-white mt-1">Schedule Family Office Consultation</h3>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mt-2">
              Strictly confidential engagement with our senior managing directors. Accredited family offices and ultra-high-net-worth principals only.
            </p>
          </div>

          <form onSubmit={handleSubmitFamilyInquiry} className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold font-mono uppercase text-zinc-400 mb-2">Family Office / Entity Name</label>
                <input
                  type="text"
                  required
                  value={familyOfficeName}
                  onChange={(e) => setFamilyOfficeName(e.target.value)}
                  placeholder="e.g. Beaumont Family Holdings"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold font-mono uppercase text-zinc-400 mb-2">Principal / Family Representative</label>
                <input
                  type="text"
                  required
                  value={familyPrincipal}
                  onChange={(e) => setFamilyPrincipal(e.target.value)}
                  placeholder="e.g. Arthur Beaumont, Managing Trustee"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold font-mono uppercase text-zinc-400 mb-2">Confidential Direct Email</label>
                <input
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="principal@beaumontholdings.com"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold font-mono uppercase text-zinc-400 mb-2">Family Net Worth Bracket</label>
                <select
                  value={aumTier}
                  onChange={(e) => setAumTier(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500"
                >
                  <option>$30M - $100M Liquid (Emerging SFO)</option>
                  <option>$100M - $500M Net Worth (Multi-Generational)</option>
                  <option>$500M+ Net Worth (Institutional Scale)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-sm transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Request Fiduciary Onboarding Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Inquiry received. Managing Director will contact you directly via secure email channel.</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Confidential Data Room Modal */}
      {selectedSyndicate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121214] border border-amber-500/30 rounded-2xl p-6 sm:p-8 max-w-lg w-full text-zinc-100 relative">
            <h4 className="text-xl font-bold text-white">{selectedSyndicate.projectName}</h4>
            <p className="text-xs text-amber-400 font-mono mt-1">{selectedSyndicate.assetClass}</p>

            <div className="my-6 p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-zinc-300">Equity Target:</span>
                <span className="text-white font-bold">{selectedSyndicate.equityTarget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">Target Net IRR:</span>
                <span className="text-amber-400 font-bold">{selectedSyndicate.targetIrr}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">Distribution:</span>
                <span className="text-zinc-300 font-semibold">{selectedSyndicate.prefReturn}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 mb-6">
              Full subscription documents, legal opinion letters, and financial projections require accredited family office verification.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  alert("Encrypted subscription package dispatched to family office desk.");
                  setSelectedSyndicate(null);
                }}
                className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-xs transition"
              >
                Access Direct Data Room
              </button>
              <button
                onClick={() => setSelectedSyndicate(null)}
                className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Portal Modal */}
      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800/80 bg-[#0A0A0B] text-zinc-300 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black font-black">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white tracking-wide">WEALTH FAMILY OFFICE OS</p>
              <p className="text-xs font-semibold text-zinc-300">Sovereign Multi-Family Office & Direct LP Engine</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-amber-400 hover:underline font-mono"
            >
              Principal Door (Cheat Code: familyoffice2026)
            </button>
            <span>•</span>
            <span>Supabase RLS Ready</span>
            <span>•</span>
            <span>Ghost Factory™ Tier-1 Asset</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
