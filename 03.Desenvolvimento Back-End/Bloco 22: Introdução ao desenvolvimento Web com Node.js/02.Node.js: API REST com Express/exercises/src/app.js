const express = require('express');
const fs = require('fs').promises;
const movies = require('./movies.json');

const app = express();

app.use(express.json());

const readFile = async () => {
  const result = await fs.readFile('src/movies.json', 'utf-8');
  return JSON.parse(result);
}

const writeFile = async (data) => {
  await fs.writeFile('src/movies.json', JSON.stringify(data));
}

app.get('/movies', async (req, res) => {
  const files = await readFile();
  return res.status(200).json(files);
});

app.get('/movies/search', async (req, res) => {
  const { q } = req.query;
  const files = await readFile();
  const filter = files.filter((mov) => mov.movie.includes(q));
  if (!filter) {
    return res.status(200).json([]);
  }
  return res.status(200).json(filter);
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const files = await readFile();
  const find = files.find((mov) => mov.id === Number(id));
  if (!find) {
    return res.status(404).json({ message: 'Not Found' });
  }
  return res.status(200).json(find);
});

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const files = await readFile();
  const object = {
    id: files.length + 1,
    movie,
    price,
  }
  files.push(object);
  await writeFile(files);
  return res.status(201).json(files);
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const files = await readFile();
  const filter = files.filter((mov) => mov.id !== Number(id));
  if (!filter) {
    return res.status(404).json({ message: 'Not Found' });
  }
  const object = {
    id: Number(id),
    movie,
    price,
  }
  filter.push(object);
  filter.sort((a, b) => a.id - b.id);
  await writeFile(filter);
  return res.status(201).json(filter);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const files = await readFile();
  const filter = files.filter((mov) => mov.id !== Number(id));
  if (!filter) {
    return res.status(404).json({ message: 'Not Found' });
  }
  await writeFile(filter);
  return res.status(204).end();
});

module.exports = app;
