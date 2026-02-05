document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null, // отслеживаем относительно вьюпорта
    threshold: 0.15, // элемент считается видимым, когда показано 15% его площади
    rootMargin: '0px 0px -50px 0px' // небольшая задержка снизу для естественности
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Добавляем класс, когда элемент вошел в кадр
        entry.target.classList.add('visible');
      } else {
        // Убираем класс, если хотим, чтобы анимация повторялась при каждом скролле
        // Если нужно анимировать только один раз — удалите строку ниже
        entry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  // Находим все элементы для анимации
  const animatedElements = document.querySelectorAll('.fade-in, .approach-row, .expertise-item');
  animatedElements.forEach(el => observer.observe(el));
});