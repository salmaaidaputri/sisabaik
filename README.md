# SisaBaik API - Chapter 7

REST API SisaBaik dibuat pakai Node.js, Express, dan database PostgreSQL.

## Cara Menjalankan

1. Pastikan PostgreSQL aktif dan database `sisabaik_dev` sudah dikonfigurasi di file `.env`.
2. Install dependensi:
   npm install
3. Jalanin server mode dev:
   npm run dev

Server bakal jalan di `http://localhost:3000`.

## Pengujian
- Uji API: `node scripts/uji-api.js`
- Uji Konkurensi: `node scripts/uji-konkurensi.js`