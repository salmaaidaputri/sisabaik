# Dokumentasi API SisaBaik - Chapter 7

API ini digunakan untuk menangani penawaran dan transaksi pesanan SisaBaik. Semua response API menggunakan format envelope JSON standar.

---

## Endpoint Penawaran

### GET /api/penawaran
Mengambil seluruh daftar penawaran yang aktif.

- Method: GET
- URL: /api/penawaran
- Query Parameter:
  - stokMinimum (opsional): Angka untuk menyaring penawaran berdasarkan stok minimal.

Contoh Response (200 OK):
{
  "success": true,
  "data": [
    {
      "id": "1",
      "nama": "Paket SisaBaik 1",
      "stok": 5,
      "harga": 5000
    }
  ]
}

---

## Endpoint Pesanan

### POST /api/pesanan
Membuat pesanan baru dari penawaran yang tersedia.

- Method: POST
- URL: /api/pesanan
- Header Wajib: Content-Type: application/json
- Request Body:
{
  "emailPembeli": "siti.pembeli@example.test",
  "items": [
    {
      "penawaranId": "1",
      "kuantitas": 1
    }
  ]
}

Contoh Response (201 Created):
{
  "success": true,
  "data": {
    "id": 6,
    "status": "menunggu-konfirmasi",
    "total_transaksi": 5000
  }
}

---

## Response Status & Error

- 200 OK: Request berhasil diproses.
- 201 Created: Data pesanan berhasil dibuat.
- 400 Bad Request: Format JSON rusak, payload tidak valid, atau ID bukan angka.
- 409 Conflict: Stok penawaran habis / terjadi error penawaran tidak tersedia.
- 413 Payload Too Large: Ukuran body request melebihi batas.
- 415 Unsupported Media Type: Header Content-Type bukan application/json.