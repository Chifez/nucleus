import useUserState from '@/store/user';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/dashboard'];
const { user } = useUserState();

export default function middleware(req: NextRequest) {
  if (!user && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect('/auth/login');
  }
}
