import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default ({ mode }: { mode: string }) => {
  // Ladda .env-filen för aktuell mode (development, production osv)
  const env = loadEnv(mode, process.cwd(), '')

  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(env.VITE_PORT) || 5173,
    },
  })
}
