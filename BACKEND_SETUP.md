# 🔧 Backend Setup - Panduan Lengkap

Selamat datang! Mari kita setup backend Node.js Anda dengan **pelan-pelan**.

---

## 📋 Apa itu Backend?

**Backend** = "Dapur" aplikasi yang:
- ✅ Menyimpan data
- ✅ Memproses request
- ✅ Mengirim data ke frontend

Kalau frontend adalah "wajah", backend adalah "otak" 🧠

---

## 🎯 Yang Akan Kita Setup

```
Backend (Node.js + Express)
   ↓
Database (SQLite)
   ↓
API Endpoints (CRUD)
```

### API Endpoints yang dibuat:
- `GET /api/barang` → Ambil semua barang
- `POST /api/barang` → Tambah barang baru
- `PUT /api/barang/:id` → Update barang
- `DELETE /api/barang/:id` → Hapus barang

---

## 🚀 Step 1: Buka Terminal & Clone Repository

### 1.1 Buka Terminal (Command Prompt / PowerShell / Terminal)

**Windows:**
- Tekan `Windows + R`
- Ketik `cmd` atau `powershell`
- Enter

**Mac/Linux:**
- Buka Terminal aplikasi

### 1.2 Masuk ke folder tempat Anda mau menyimpan project

```bash
# Contoh: Masuk ke Desktop
cd Desktop

# Atau Documents
cd Documents
```

### 1.3 Clone repository dari GitHub

```bash
git clone https://github.com/ajiyogaofficial-del/office-inventory.git
cd office-inventory
```

**Penjelasan:**
- `git clone` = Download repository dari GitHub
- `cd office-inventory` = Masuk ke folder project

---

## 🔨 Step 2: Install Backend Dependencies

### 2.1 Masuk ke folder backend

```bash
cd backend
```

### 2.2 Install semua library yang dibutuhkan

```bash
npm install
```

**Apa yang terjadi:**
- npm membaca file `package.json`
- npm download semua library dari internet
- Semua library masuk ke folder `node_modules`
- **Tunggu sampai selesai** (mungkin 1-2 menit)

**Output yang benar:**
```
added 50 packages, and audited 51 packages in 2s
```

---

## ▶️ Step 3: Jalankan Backend

### 3.1 Start server

```bash
npm start
```

**Output yang benar:**
```
╔════════════════════════════════════╗
║   🚀 Server berjalan di port 5000   ║
║   📍 http://localhost:5000         ║
║   Tekan CTRL+C untuk stop          ║
╚════════════════════════════════════╝
```

🎉 **Selamat! Backend Anda berjalan!**

---

## ✅ Step 4: Test Backend (Opsional)

Buka browser dan pergi ke URL ini:

```
http://localhost:5000/api/barang
```

**Output yang seharusnya:**
```json
[]
```

Artinya: Database kosong (belum ada barang) ✅

---

## 📝 Penjelasan File Backend

### `server.js` - File Utama

```javascript
// 1. Import library
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3');

// 2. Buat app Express
const app = express();

// 3. Setup middleware
app.use(cors());          // Izinkan request dari frontend
app.use(express.json()); // Parse JSON

// 4. Buat database & table
const db = new sqlite3.Database('inventory.db');

// 5. Buat API routes (GET, POST, PUT, DELETE)
app.get('/api/barang', ...);
app.post('/api/barang', ...);
app.put('/api/barang/:id', ...);
app.delete('/api/barang/:id', ...);

// 6. Start server
app.listen(5000, ...);
```

### `package.json` - Daftar Library

Berisi:
- **dependencies**: Library yang dipakai app
  - `express`: Framework web
  - `cors`: Izinkan request dari frontend
  - `sqlite3`: Database

- **scripts**: Shortcut command
  - `npm start`: Jalankan server

---

## 🎓 Konsep Penting

### CORS (Cross-Origin Resource Sharing)

**Masalah:**
- Frontend berjalan di `localhost:3000`
- Backend berjalan di `localhost:5000`
- Browser tidak izinkan request antar port

**Solusi:**
```javascript
app.use(cors());  // Izinkan request dari frontend
```

### SQLite Database

**Apa itu SQLite?**
- Database ringan (file lokal)
- Cocok untuk development & small apps
- Tidak perlu install server terpisah

**File database:**
```
backend/
  ├── server.js
  ├── package.json
  └── inventory.db  ← Database file (auto created)
```

---

## 🐛 Troubleshooting

### Error: "Port 5000 already in use"

**Artinya:** Ada program lain pakai port 5000

**Solusi:**
```bash
# Cara 1: Ubah port di server.js
const PORT = 5001;  // Ganti dari 5000

# Cara 2: Kill program di port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5000 | xargs kill -9
```

### Error: "npm: command not found"

**Artinya:** Node.js belum terinstall

**Solusi:**
```bash
# Cek versi Node.js
node --version
npm --version

# Kalau error, download & install dari nodejs.org
```

### Error: "Cannot find module 'express'"

**Artinya:** Belum run `npm install`

**Solusi:**
```bash
npm install
```

---

## ✨ Selesai!

Sekarang backend Anda berjalan dan siap menerima request dari frontend! 🎉

**Step selanjutnya:**
- Setup Frontend React
- Buat form untuk input barang
- Connect Frontend dengan Backend

---

## 💡 Tips Debugging

Kalau ada error, cek:

1. **Terminal menampilkan error apa?**
   - Baca message error dengan teliti
   - Copy error ke Google atau ChatGPT

2. **File backend/server.js ada?**
   - Cek folder backend

3. **Sudah run `npm install`?**
   - Cek folder `node_modules` ada

4. **Port 5000 terpakai?**
   - Cek di browser: http://localhost:5000/api/barang

---

**Sudah selesai setup backend? Lanjut ke Frontend setup! 🚀**
