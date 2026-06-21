// Import library yang dibutuhkan
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Inisialisasi Express app
const app = express();
const PORT = 5000;

// ============ MIDDLEWARE ============
// Izinkan request dari frontend
app.use(cors());
// Parse JSON request
app.use(express.json());

// ============ DATABASE SETUP ============
// Buat/Connect ke database SQLite
const dbPath = path.join(__dirname, 'inventory.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error membuka database:', err);
  } else {
    console.log('✅ Database connected');
    // Buat table jika belum ada
    createTable();
  }
});

// Fungsi untuk membuat table
function createTable() {
  db.run(`
    CREATE TABLE IF NOT EXISTS barang (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nama_barang TEXT NOT NULL,
      kategori TEXT,
      jumlah INTEGER DEFAULT 0,
      lokasi TEXT,
      tanggal_input DATETIME DEFAULT CURRENT_TIMESTAMP,
      keterangan TEXT
    )
  `, (err) => {
    if (err) {
      console.error('Error membuat table:', err);
    } else {
      console.log('✅ Table barang siap');
    }
  });
}

// ============ API ROUTES ============

// 1. GET - Ambil semua barang
app.get('/api/barang', (req, res) => {
  const query = 'SELECT * FROM barang';
  
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// 2. GET - Ambil barang by ID
app.get('/api/barang/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM barang WHERE id = ?';
  
  db.get(query, [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(row);
  });
});

// 3. POST - Tambah barang baru
app.post('/api/barang', (req, res) => {
  const { nama_barang, kategori, jumlah, lokasi, keterangan } = req.body;
  
  // Validasi input
  if (!nama_barang) {
    res.status(400).json({ error: 'Nama barang harus diisi' });
    return;
  }
  
  const query = `
    INSERT INTO barang (nama_barang, kategori, jumlah, lokasi, keterangan)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  db.run(query, [nama_barang, kategori, jumlah || 0, lokasi, keterangan], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ 
      message: 'Barang berhasil ditambahkan',
      id: this.lastID 
    });
  });
});

// 4. PUT - Update barang
app.put('/api/barang/:id', (req, res) => {
  const { id } = req.params;
  const { nama_barang, kategori, jumlah, lokasi, keterangan } = req.body;
  
  const query = `
    UPDATE barang 
    SET nama_barang = ?, kategori = ?, jumlah = ?, lokasi = ?, keterangan = ?
    WHERE id = ?
  `;
  
  db.run(query, [nama_barang, kategori, jumlah, lokasi, keterangan, id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Barang berhasil diupdate' });
  });
});

// 5. DELETE - Hapus barang
app.delete('/api/barang/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM barang WHERE id = ?';
  
  db.run(query, [id], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Barang berhasil dihapus' });
  });
});

// ============ ERROR HANDLING ============
// Route tidak ditemukan
app.use((req, res) => {
  res.status(404).json({ error: 'Route tidak ditemukan' });
});

// ============ START SERVER ============
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════╗
  ║   🚀 Server berjalan di port ${PORT}   ║
  ║   📍 http://localhost:${PORT}        ║
  ║   Tekan CTRL+C untuk stop          ║
  ╚════════════════════════════════════╝
  `);
});
