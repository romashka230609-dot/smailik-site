// ПЛАВНАЯ ПРОКРУТКА
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// ФОРМА EMAILJS
const form = document.getElementById('form');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;

  if (!name || !phone || !service) {
    message.style.color = 'red';
    message.textContent = 'Пожалуйста, заполните все поля';
    return;
  }

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: name,
    phone: phone,
    service: service
  })
  .then(() => {
    message.style.color = 'green';
    message.textContent = 'Спасибо! Заявка отправлена.';
    form.reset();
  })
  .catch(() => {
    message.style.color = 'red';
    message.textContent = 'Ошибка отправки. Попробуйте ещё раз.';
  });
});


// КНОПКА MAX — копирует номер
function copyMaxNumber() {
  navigator.clipboard.writeText('+79804278998');
  alert('Номер скопирован: +7 (980) 427-89-98');
}


// КНОПКА VK — открывает страницу
function openVK() {
  window.open('https://vk.com/psmayl84', '_blank');
}
