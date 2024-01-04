import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL;
const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY;
export default async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient(
    { req, res },
    { supabaseUrl, supabaseKey }
  );
  await supabase.auth.getSession();
  return res;
}
