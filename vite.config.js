import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change REPO_NAME to your repo if deploying to a project page.
// For root pages (username.github.io), set base to '/'.
const isProjectPage = true // set to false if deploying to username.github.io root
const repoName = '2026' // <-- change this

export default defineConfig({
  plugins: [react()],
  base: isProjectPage ? `/${2026}/` : '/'
})
