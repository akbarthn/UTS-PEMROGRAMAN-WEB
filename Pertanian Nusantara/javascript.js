function showAlert() {
  document.querySelector("form").addEventListener("submit", function (event) {
    // Ambil nilai input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Cek apakah semua input telah diisi
    if (name && email && message) {
      alert("Masukkan dan saran telah dikirim.");
    } else {
      event.preventDefault();
      alert("Harap isi semua data terlebih dahulu.");
    }
  });
}
