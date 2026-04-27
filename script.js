document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const form = document.getElementById('form');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;

  if (name === '' || phone === '' || service === '') {
    message.style.color = '#d94f86';
    message.textContent = 'Пожалуйста, заполните все поля.';
    return;
  }

  message.style.color = '#4f9b6d';
  message.textContent = 'Спасибо! Ваша заявка отправлена. Мы свяжемся с вами.';

  form.reset();
});