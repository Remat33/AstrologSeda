document.getElementById('appointment-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const appointmentDate = document.getElementById('appointment-date').value;
  const today = new Date().toISOString().split('T')[0];

  if (appointmentDate < today) {
    alert('Randevu talebi olarak bugünün tarihinden daha erken bir tarih seçilemez.');
    return;
  }

  emailjs.sendForm('service_vb6dl7h', 'template_suqfnx7', this)
    .then(function() {
      alert('Randevu talebiniz oluşturuldu');
    }, function(error) {
      console.error('FAILED...', error);
      alert('Randevu talebi oluşturulamadı. Lütfen tekrar deneyin.');
    });
});

document.getElementById('birthplace-country').addEventListener('change', function() {
  const birthplaceCityLabel = document.getElementById('birthplace-label');
  if (this.value === 'Yurtdışı') {
    birthplaceCityLabel.textContent = 'Doğum Yeri (Ülke/Şehir):';
  } else {
    birthplaceCityLabel.textContent = 'Doğum Yeri (Şehir):';
  }
});
