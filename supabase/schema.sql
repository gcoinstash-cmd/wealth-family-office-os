-- WEALTH FAMILY OFFICE OS Database Schema
-- Production Supabase SQL Definition with Row Level Security (RLS)

CREATE TABLE IF NOT EXISTS public.direct_syndicates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_name TEXT NOT NULL,
    asset_class TEXT NOT NULL,
    equity_target TEXT NOT NULL,
    target_irr TEXT NOT NULL,
    pref_return TEXT NOT NULL,
    hold_period TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'ALLOCATION OPEN',
    highlights JSONB DEFAULT '[]'::jsonb,
    image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.family_allocations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    family_entity TEXT NOT NULL,
    asset_class TEXT NOT NULL,
    committed_amount TEXT NOT NULL,
    annual_yield TEXT NOT NULL,
    custody_jurisdiction TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'ACTIVE ALLOCATION',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.principal_onboarding_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    family_office_name TEXT NOT NULL,
    principal_name TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    net_worth_bracket TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'NEW SUBMISSION',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.direct_syndicates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.family_allocations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.principal_onboarding_inquiries ENABLE ROW LEVEL SECURITY;

-- Public read access for active syndicates
CREATE POLICY "Public read syndicates" ON public.direct_syndicates
    FOR SELECT USING (true);

-- Public insert for principal onboarding inquiries
CREATE POLICY "Public insert inquiries" ON public.principal_onboarding_inquiries
    FOR INSERT WITH CHECK (true);

-- Authenticated administrative access
CREATE POLICY "Admin full access syndicates" ON public.direct_syndicates
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access allocations" ON public.family_allocations
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admin full access inquiries" ON public.principal_onboarding_inquiries
    FOR ALL TO authenticated USING (true) WITH CHECK (true);
