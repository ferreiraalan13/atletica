import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Verificar se existe um token no cookie
  const token = request.cookies.get("atletica-token")?.value;
  // Considerar autenticado se o token existir
  const isAuthenticated = !!token;

  // Rotas protegidas que requerem autenticação
  const protectedRoutes = [
    "/dashboard",
    "/perfil",
    // Adicione outras rotas protegidas aqui
  ];

  // Verificar se a rota atual está na lista de rotas protegidas
  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  // Redirecionar para login se tentar acessar rota protegida sem autenticação
  if (isProtectedRoute && !isAuthenticated) {
    console.log("Redirecionando para login: rota protegida");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirecionar para home se tentar acessar login já estando autenticado
  if (request.nextUrl.pathname === "/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
