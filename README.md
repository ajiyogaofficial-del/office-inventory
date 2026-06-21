# 📦 Office Inventory App

Aplikasi Inventory Kantor sederhana dengan React + Node.js

## 🎯 Fitur Dasar

- ✅ Tambah barang
- ✅ Lihat daftar barang
- ✅ Edit barang
- ✅ Hapus barang (CRUD)

---

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js sudah terinstall
- Text Editor (VS Code)

### Step 1: Clone Repository
```bash
git clone https://github.com/ajiyogaofficial-del/office-inventory.git
cd office-inventory
```

### Step 2: Setup Backend (Node.js)
```bash
cd backend
npm install
npm start
```
Backend akan berjalan di: `http://localhost:5000`

### Step 3: Setup Frontend (React) - Terminal Baru
```bash
cd frontend
npm install
npm start
```
Frontend akan berjalan di: `http://localhost:3000`

---

## 📚 Struktur Folder

```
office-inventory/
├── backend/
│   ├── server.js          # Entry point backend
│   ├── package.json       # Dependencies backend
│   └── routes/
│       └── barang.js      # API routes
│
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main component
│   │   ├── index.js       # Entry point
│   │   └── components/
│   │       ├── Dashboard.js
│   │       ├── FormInput.js
│   │       └── TabelBarang.js
│   ├── package.json       # Dependencies frontend
│   └── public/
│
└── README.md
```

---

## 🎓 Penjelasan Sederhana

### Backend (Node.js)
- Server yang menangani request dari frontend
- Menyimpan dan mengambil data barang
- Seperti "otak" aplikasi

### Frontend (React)
- Tampilan yang dilihat user
- Form untuk input barang
- Tabel untuk lihat daftar barang
- Seperti "wajah" aplikasi

### Alur Kerja:
```
User klik tombol → React (Frontend)
                     ↓
                  Kirim request ke Backend
                     ↓
                  Backend proses & ambil data
                     ↓
                  Kirim data ke Frontend
                     ↓
                  React tampilkan data
```

---

## 📝 Tutorial Lengkap

Lihat file panduan di folder docs (akan ditambahkan)

---

## 💡 Tips untuk Pemula

1. **Buka 2 terminal:**
   - Terminal 1: Backend (`npm start` di folder backend)
   - Terminal 2: Frontend (`npm start` di folder frontend)

2. **Jangan lupa install dependencies:**
   - `npm install` di setiap folder

3. **Error apa pun? Cek:**
   - Node.js terinstall? `node --version`
   - Port 5000 & 3000 tidak digunakan?

---

## 🔗 Resources Bermanfaat

- [Node.js Docs](https://nodejs.org/docs/)
- [React Docs](https://react.dev)
- [Express.js Docs](https://expressjs.com/)

---

**Mari kita mulai! Step selanjutnya saya akan buat backend setup.** 🚀
