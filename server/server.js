import express from 'express';
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.send('Hello from the Node.js backend api!');
});

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});