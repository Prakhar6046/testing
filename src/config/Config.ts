export const config = {
  serverURL:
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    'https://www.wilsoncg.online',
}
