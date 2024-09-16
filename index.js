var form = document.querySelector('#loginForm');
var passwordInput = document.querySelector('#password');
var errorMessage = document.querySelector('#error-message');
var username = document.querySelector('#usernama');

// Validasi password saat mengetik (real-time)
passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length < 8) {
        errorMessage.style.display = 'block'; // Tampilkan pesan error
    } else {
        errorMessage.style.display = 'none'; // Sembunyikan pesan error
    }
});

// Validasi form ketika disubmit
form.addEventListener('submit', function(event) {
    // Cek apakah username diisi
  
    // Cek apakah password sudah cukup 8 karakter
    if (passwordInput.value.length < 8) {
        alert('Password minimal 8 karakter');
        event.preventDefault(); // Cegah pengiriman form jika password tidak valid
    } else {
        alert('Data Berhasil Dikirim');
    }
});
