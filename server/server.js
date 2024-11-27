import express from 'express';
import path from 'node:path'
const __dirname = import.meta.dirname;
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
  res.send('Hello from the Node.js backend api!');
});

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});