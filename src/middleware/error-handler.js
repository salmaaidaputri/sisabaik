export function tanganiError(err, req, res, next) {
  console.error(err);
  res.status(500).json({
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Terjadi kesalahan internal pada server."
    }
  });
}