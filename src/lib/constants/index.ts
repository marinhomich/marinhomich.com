export const APP_HOSTNAMES = new Set([
  "app.marinhomich.dev",
  "app.localhost:3000",
])

export const HOME_HOSTNAMES = new Set([
  "marinhomich.dev",
  "home.marinhomich.dev",
  "home.localhost:3000",
  "localhost:3000",
])
export const API_HOSTNAMES = new Set([
  "api.marinhomich.dev",
  "api.localhost:3000",
])

export const HOME_DOMAIN = "http://localhost:3000"

export const isHomeHostname = (domain: string) => {
  return HOME_HOSTNAMES.has(domain) || domain.endsWith(".vercel.app")
}
