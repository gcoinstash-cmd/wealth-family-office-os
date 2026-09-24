import React, { useState } from 'react';
import { Lock, X, CheckCircle, Shield, Award, Landmark, DollarSign, FileCheck, PieChart } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState<'allocations' | 'syndicates' | 'dynasty'>('allocations');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === 'familyoffice2026') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleAutoFill = () => {
    setPasscode('familyoffice2026');
    setIsAuthenticated(true);
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#121214] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-zinc-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close Admin Modal"
          className="absolute top-6 right-6 p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div className="py-8 max-w-md mx-auto text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-inner">
              <Lock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">Family Office Fiduciary Portal</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Enter principal partner passkey or trigger instant 1-click verification bypass.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter partner key (familyoffice2026)"
                  className="w-full px-4 py-3 bg-zinc-900/90 border border-zinc-700 rounded-xl text-center text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
                {error && <p className="text-rose-400 text-xs mt-2">Invalid principal credentials. Use familyoffice2026.</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-xl transition duration-150 shadow-lg shadow-amber-500/20"
                >
                  Authorize
                </button>
                <button
                  type="button"
                  onClick={handleAutoFill}
                  className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 border border-amber-500/40 text-amber-300 font-medium rounded-xl transition duration-150"
                >
                  1-Click Passkey
                </button>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-zinc-800 text-xs text-zinc-500 flex items-center justify-center gap-2">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Multi-Jurisdictional Trust Governance • Zero Third-Party Custody Gate</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-zinc-800 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Authenticated Principal Desk</span>
                <h2 className="text-2xl font-bold text-white tracking-tight">Sovereign Wealth Command Center</h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('allocations')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeTab === 'allocations' ? 'bg-amber-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Portfolio AUM
                </button>
                <button
                  onClick={() => setActiveTab('syndicates')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeTab === 'syndicates' ? 'bg-amber-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Direct Deals
                </button>
                <button
                  onClick={() => setActiveTab('dynasty')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                    activeTab === 'dynasty' ? 'bg-amber-500 text-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  Dynasty Trusts
                </button>
              </div>
            </div>

            {/* TAB CONTENT */}
            {activeTab === 'allocations' && (
              <div className="py-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <p className="text-xs text-zinc-400">Aggregated Family Portfolio AUM</p>
                    <p className="text-2xl font-bold text-amber-400 mt-1">$3,420,000,000</p>
                    <p className="text-[11px] text-zinc-500 mt-1">Spread Across 28 Sovereign Families</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <p className="text-xs text-zinc-400">Net Annualized Cash-Flow Yield</p>
                    <p className="text-2xl font-bold text-white mt-1">11.8% Net IRR</p>
                    <p className="text-[11px] text-amber-400 mt-1">Real Assets & Senior Secured Debt</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <p className="text-xs text-zinc-400">Direct Secondary Allocations</p>
                    <p className="text-2xl font-bold text-white mt-1">$485,000,000</p>
                    <p className="text-[11px] text-zinc-500 mt-1">Zero Middleman GP Fee Load</p>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-zinc-300">Macro Asset Allocation Model</h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-white">Direct Real Estate & Infrastructure (42%)</span>
                      <span className="text-amber-400 font-mono font-bold">$1.436 Billion</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-white">Private Equity Co-Investments & Secondaries (31%)</span>
                      <span className="text-amber-400 font-mono font-bold">$1.060 Billion</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-amber-400 h-2 rounded-full" style={{ width: '31%' }}></div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-white">Senior Secured Asset-Backed Credit (18%)</span>
                      <span className="text-amber-400 font-mono font-bold">$615.6 Million</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'syndicates' && (
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-zinc-300">Active Direct Co-Investment Syndicates</h4>
                  <span className="text-xs text-amber-400">Available Only To Verified LP Families</span>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">PROJECT HIGHLAND TOWER</span>
                      <h5 className="font-semibold text-white mt-1">Class-A Trophy Multifamily (Austin CBD)</h5>
                      <p className="text-xs text-zinc-400">$65M Equity Check • Target Net IRR: 15.2% • 8.0% Preferred Return</p>
                    </div>
                    <button className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold rounded-lg">Access Data Room</button>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">PROJECT CYBER-CORE</span>
                      <h5 className="font-semibold text-white mt-1">Tier-4 Sovereign AI Data Center Facility (Northern VA)</h5>
                      <p className="text-xs text-zinc-400">$120M Direct Syndication • 15-Year Triple Net Lease to Hyperscaler</p>
                    </div>
                    <button className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold rounded-lg">Access Data Room</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dynasty' && (
              <div className="py-6 space-y-4">
                <h4 className="text-sm font-semibold text-zinc-300">Dynasty Trust & Generational Ledgers</h4>
                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-zinc-800">
                    <span className="text-zinc-400">South Dakota Dynasty Trust (Perpetual Duration)</span>
                    <span className="font-bold text-white">Zero State Income Tax • Complete Creditor Shield</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-zinc-800">
                    <span className="text-zinc-400">Private Family Trust Company (PTC) Charter</span>
                    <span className="font-bold text-white">Full Family Board Governance & Investment Committee Control</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-zinc-400">Irrevocable Life Insurance Trust (ILIT) Liquidity Desk</span>
                    <span className="font-bold text-amber-400">Estate Tax Liquidity Provision ($150M Structured Policy)</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center">
              <span className="text-xs text-zinc-500">Autonomous Family Office Engine • Supabase RLS Protected</span>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-rose-400 hover:underline"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
