# Dokumentasi REST API SisaBaik (Chapter 7)

Aplikasi REST API ini digunakan untuk mengelola penawaran dan transaksi pesanan SisaBaik. Seluruh *response* menggunakan format *envelope* JSON standar.

---

## 1. GET /api/penawaran
Mengambil daftar penawaran aktif.

* **Method:** `GET`
* **URL:** `/api/penawaran`
* **Query Parameters:**
  * `stokMinimum` *(opsional, integer)*: Menyaring penawaran dengan stok minimal tertentu.
* **Response Sukses (200 OK):**
  ```json
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