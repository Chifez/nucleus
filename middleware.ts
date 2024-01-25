import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next();
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res });
  // Check if we have a session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Check auth condition
  if (user && req.nextUrl.pathname === '/auth/login') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== '/auth/login') {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return res;
}

export const config = {
  matcher: '/dashboard',
};
