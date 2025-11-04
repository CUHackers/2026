const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

// Serve static files from dist (Vite build output)
app.use(express.static(path.join(__dirname, 'dist')))

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
