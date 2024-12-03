const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;
const app = express();
const port = 3001;

app.use(cors());

const uploadsPath = path.join(__dirname, 'uploads');

app.use('/uploads', express.static(uploadsPath));


app.get('/uploads/wife', async (req, res) => {
  try {
    const wifeImagesDir = path.join(uploadsPath, 'wife');
    const wifeImages = await fs.readdir(wifeImagesDir);
    res.json(wifeImages);
  } catch (error) {
    console.error('Error fetching wife images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/uploads/husband', async (req, res) => {
  try {
    const husbandImagesDir = path.join(uploadsPath, 'husband');
    const husbandImages = await fs.readdir(husbandImagesDir);
    res.json(husbandImages);
  } catch (error) {
    console.error('Error fetching husband images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/uploads/bracelets', async (req, res) => {
  try {
    const braceletsImagesDir = path.join(uploadsPath, 'bracelets');
    const braceletsImages = await fs.readdir(braceletsImagesDir);
    res.json(braceletsImages);
  } catch (error) {
    console.error('Error fetching bracelets images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/cuflinks', async (req, res) => {
  try {
    const cuflinksImagesDir = path.join(uploadsPath, 'cuflinks');
    const cuflinksImages = await fs.readdir(cuflinksImagesDir);
    res.json(cuflinksImages);
  } catch (error) {
    console.error('Error fetching cuflinks images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/earrings', async (req, res) => {
  try {
    const earringsImagesDir = path.join(uploadsPath, 'earrings');
    const earringsImages = await fs.readdir(earringsImagesDir);
    res.json(earringsImages);
  } catch (error) {
    console.error('Error fetching earrings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/earrings_alkor', async (req, res) => {
  try {
    const earringsImagesDirAlkor = path.join(uploadsPath, 'earrings_alkor');
    console.log("Looking for files in:", earringsImagesDirAlkor);
    const earringsImagesAlkor = await fs.readdir(earringsImagesDirAlkor);
    res.json(earringsImagesAlkor);
  } catch (error) {
    console.error('Error fetching earrings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/earrings_ruse', async (req, res) => {
  try {
    const earringsImagesDirRuse = path.join(uploadsPath, 'earrings_ruse');
    console.log("Looking for files in:", earringsImagesDirRuse);
    const earringsImagesRuse = await fs.readdir(earringsImagesDirRuse);
    res.json(earringsImagesRuse);
  } catch (error) {
    console.error('Error fetching earrings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/earrings_red', async (req, res) => {
  try {
    const earringsImagesDirRuse = path.join(uploadsPath, 'earrings_red');
    console.log("Looking for files in:", earringsImagesDirRuse);
    const earringsImagesRuse = await fs.readdir(earringsImagesDirRuse);
    res.json(earringsImagesRuse);
  } catch (error) {
    console.error('Error fetching earrings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/earrings_crystall', async (req, res) => {
  try {
    const earringsImagesDirRuse = path.join(uploadsPath, 'earrings_crystall');
    console.log("Looking for files in:", earringsImagesDirRuse);
    const earringsImagesRuse = await fs.readdir(earringsImagesDirRuse);
    res.json(earringsImagesRuse);
  } catch (error) {
    console.error('Error fetching earrings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/necklace', async (req, res) => {
  try {
    const necklaceImagesDir = path.join(uploadsPath, 'necklace');
    const necklaceImages = await fs.readdir(necklaceImagesDir);
    res.json(necklaceImages);
  } catch (error) {
    console.error('Error fetching neckalce images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/rings', async (req, res) => {
  try {
    const ringsImagesDir = path.join(uploadsPath, 'rings');
    const ringsImages = await fs.readdir(ringsImagesDir);
    res.json(ringsImages);
  } catch (error) {
    console.error('Error fetching rings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/rings_alkor', async (req, res) => {
  try {
    const ringsImagesDir = path.join(uploadsPath, 'rings_alkor');
    const ringsImages = await fs.readdir(ringsImagesDir);
    res.json(ringsImages);
  } catch (error) {
    console.error('Error fetching rings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/rings_red', async (req, res) => {
  try {
    const ringsImagesDir = path.join(uploadsPath, 'rings_red');
    const ringsImages = await fs.readdir(ringsImagesDir);
    res.json(ringsImages);
  } catch (error) {
    console.error('Error fetching rings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/rings_rus', async (req, res) => {
  try {
    const ringsImagesDir = path.join(uploadsPath, 'rings_rus');
    const ringsImages = await fs.readdir(ringsImagesDir);
    res.json(ringsImages);
  } catch (error) {
    console.error('Error fetching rings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/rings_crystall', async (req, res) => {
  try {
    const ringsImagesDir = path.join(uploadsPath, 'rings_crystall');
    const ringsImages = await fs.readdir(ringsImagesDir);
    res.json(ringsImages);
  } catch (error) {
    console.error('Error fetching rings images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/pendants', async (req, res) => {
  try {
    const pendantsImagesDir = path.join(uploadsPath, 'pendants');
    const pendantsImages = await fs.readdir(pendantsImagesDir);
    res.json(pendantsImages);
  } catch (error) {
    console.error('Error fetching pendants images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/uploads/carousel', async (req, res) => {
  try {
    const carouselImagesDir = path.join(uploadsPath, 'carousel');
    const carouselImages = await fs.readdir(carouselImagesDir);
    res.json(carouselImages);
  } catch (error) {
    console.error('Error fetching carousel images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});