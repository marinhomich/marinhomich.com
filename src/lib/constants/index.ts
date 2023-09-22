export const APP_HOSTNAMES = new Set([
  "app.marinhomich.dev",
  "app.localhost:3000",
]);


export const HOME_HOSTNAMES = new Set([
  "marinhomich.dev",
  "home.localhost:3000",
  "localhost:3000",
]);

export const isHomeHostname = (domain: string) => {
  return HOME_HOSTNAMES.has(domain) || domain.endsWith(".vercel.app");
};