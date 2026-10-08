# Laporan Hasil Pengujian API Chapter 7 - SisaBaik

- Tautan Repository: https://github.com/salmaaidaputri/sisabaik
- Branch: feature/rest-postgresql
- Database: PostgreSQL (sisabaik_dev)

---

## 1. Matriks Pengujian

| Skenario | Ekspektasi Status & Response | Efek yang Diperiksa | Hasil Aktual |
| :--- | :--- | :--- | :--- |
| Health & GET Koleksi | 200 OK, envelope benar | Database dapat diakses | Lolos (200 OK) |
| ID Bukan Angka / Besar | 400 Bad Request | Tidak ada SQL cast error | Lolos (400 Bad Request) |
| JSON Rusak | 400 Bad Request | Request ditolak di validasi body | Lolos (400 Bad Request) |
| Body Terlalu Besar | 413 Payload Too Large | Request dibatalkan sebelum ke server | Lolos (413 Payload Too Large) |
| Content-Type Salah | 415 Unsupported Media Type | Request ditolak jika bukan JSON | Lolos (415 Unsupported Media Type) |
| Uji Konkurensi | 201 Created & 409 Conflict | Stok berkurang pas, tidak ada double claim | Lolos (1 Sukses 201, 1 Ditolak 409, stok akhir 0) |

---

## 2. Bukti Persistensi & Efek Database

### A. Hasil Kueri Transaksi & Detail Pesanan
- Status Pesanan: menunggu-konfirmasi
- Total Transaksi: 10000
- Nilai Stok Terselamatkan: 20000
- Kuantitas Item: 2
- Harga Penawaran Satuan: 5000
- Subtotal: 10000

### B. Uji Persistensi Server Restart
- Server dimatikan pakai Ctrl+C lalu dijalankan lagi dengan npm run dev.
- Data pesanan ID 6 dan 4 tetap tersimpan di PostgreSQL tanpa ada data hilang atau schema ter-reset.

---

## 3. Catatan Uji Konkurensi

- Script: node scripts/uji-konkurensi.js
- ID Penawaran Uji: 18
- Hasil Eksekusi: PASS: satu berhasil, satu ditolak; stok akhir 0.
- Penjelasan singkat: Saat dua request pemesanan dikirim bersamaan pada stok 1, locking database berhasil memastikan cuma 1 request yang dapet 201. Request kedua otomatis ditolak dengan 409 Conflict.

---

## 4. Kendala & Perbaikan

- Kendala: Sempat error pas pisahin commit Git gara-gara pakai simbol && di PowerShell.
- Penyebab: PowerShell di Windows gak bisa baca && buat gabungin perintah.
- Solusi: Perintah Git dijalanin satu per satu (git add, git commit, baru git push). Semua file sukses masuk ke branch feature/rest-postgresql.