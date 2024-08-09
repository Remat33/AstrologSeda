document.getElementById('appointment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const birthDate = document.getElementById('birthdate').value;
  const today = new Date().toISOString().split('T')[0];

  if (birthDate >= today) {
    alert('Doğum tarihi bugünün tarihinden ileri bir tarih olamaz.');
    return;
  }

  emailjs.sendForm('service_vb6dl7h', 'template_suqfnx7', this)
    .then(function(response) {
      alert('Randevu talebiniz oluşturuldu');
    }, function(error) {
      let errorMessage = 'Randevu talebi oluşturulamadı. Lütfen tekrar deneyin.';

      if (error && error.status && error.text) {
        errorMessage += '\nHata Kodu: ' + error.status + '\nHata Mesajı: ' + error.text;
      }

      alert(errorMessage);
    });
});

document.getElementById('whatsapp-button').addEventListener('click', function() {
  if (confirm("WhatsApp'a yönlendirileceksiniz. Devam etmek istiyor musunuz?")) {
    window.open('https://wa.me/905303514763', '_blank');
  }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
