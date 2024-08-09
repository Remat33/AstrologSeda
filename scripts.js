document.getElementById('appointment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const appointmentDate = document.getElementById('appointment-date').value;
  const today = new Date().toISOString().split('T')[0];

  if (appointmentDate < today) {
    alert('Randevu talebi olarak bugünün tarihinden daha erken bir tarih seçilemez.');
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
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
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
