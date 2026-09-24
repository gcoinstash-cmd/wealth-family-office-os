-- WEALTH FAMILY OFFICE OS Sample Seed Data

INSERT INTO public.direct_syndicates (project_name, asset_class, equity_target, target_irr, pref_return, hold_period, status, highlights, image_url)
VALUES
('Project Highland Tower', 'TROPHY CLASS-A MULTIFAMILY (AUSTIN CBD)', '$65,000,000 Equity Tranche', '15.4% Target Net IRR', '8.0% Cumulative Preferred Return', '5-Year Harvest Horizon', 'ALLOCATION OPEN // 70% COMMITTED', '["Zero GP Promote Burden (Direct LP Club Deal)", "Cost Segregation Accelerated Depreciation Pass-Through", "98.5% Historical Submarket Occupancy", "Fixed 5.15% Agency Debt in Place"]'::jsonb, 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'),
('Project Cyber-Core Hyperscale', 'CRITICAL AI INFRASTRUCTURE & DATA CENTER', '$120,000,000 Syndication', '17.2% Target Net IRR', '9.0% Current Cash Distribution', '7-Year Triple Net Lease', 'DUE DILIGENCE STAGE', '["15-Year Unconditional Corporate Guaranty by Hyperscaler", "100MW Contracted Grid Interconnect Capacity", "Full Carbon-Neutral Hydroelectric Power Offtake", "Sovereign Real Asset Inflation Hedge"]'::jsonb, 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'),
('Sovereign Senior Secured Credit Pool', 'FIRST-LIEN ASSET-BACKED COMMERCIAL DEBT', '$80,000,000 Revolving Pool', '12.8% Net Annualized Yield', 'Monthly Cash Distribution (10.5% Net)', 'Open-Ended Liquidity Window', 'DEPLOYING CAPITAL', '["55% Maximum Loan-to-Value (LTV) Discipline", "First Priority Perfected Liens on Real Estate Assets", "Personal Guarantees from Sponsor Principals", "Quarterly Redemptions Available"]'::jsonb, 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80');

INSERT INTO public.family_allocations (family_entity, asset_class, committed_amount, annual_yield, custody_jurisdiction, status)
VALUES
('Beaumont Family Trust', 'Direct Real Estate & Infrastructure', '$45,000,000', '14.2% Net IRR', 'South Dakota Statutory Trust', 'ACTIVE ALLOCATION'),
('Vanderbilt Legacy SFO', 'Senior Secured Asset-Backed Credit', '$25,000,000', '11.5% Net Yield', 'Delaware PTC', 'ACTIVE ALLOCATION'),
('Aura Sovereign Capital', 'AI Infrastructure Hyperscale Co-Invest', '$60,000,000', '17.2% Target Net', 'Zurich / Singapore Dual Custody', 'ACTIVE ALLOCATION');
