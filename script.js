document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('[data-page]');
  const pages = document.querySelectorAll('main > div');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Щоб не було переходу по #

      const targetId = this.getAttribute('data-page');

      // Ховаємо всі сторінки
      pages.forEach(page => {
        page.style.display = 'none';
        page.classList.remove('page-fade-in'); // Скидаємо попередню анімацію
      });

      // Показуємо тільки вибрану з анімацією
      const targetPage = document.getElementById(targetId);
      if (targetPage) {
        targetPage.style.display = 'block';
        // Затримка, щоб браузер встиг примінити display: block перед анімацією
        requestAnimationFrame(() => {
          targetPage.classList.add('page-fade-in');
        });
      }
    });
  });

  // Показати тільки головну сторінку спочатку з анімацією
  pages.forEach(page => {
    page.style.display = 'none';
    page.classList.remove('page-fade-in');
  });

  const mainPage = document.getElementById('main_page');
  if (mainPage) {
    mainPage.style.display = 'block';
    requestAnimationFrame(() => {
      mainPage.classList.add('page-fade-in');
    });
  }
});

/*---------------------------------------------------------------------------------------*/

// Додаємо прослуховувач подій для всіх кнопок
const buttons = document.querySelectorAll('.header_ul_buttons');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Видаляємо клас 'selected' з усіх кнопок
    buttons.forEach(b => b.classList.remove('selected'));

    // Додаємо клас 'selected' до натиснутої кнопки
    button.classList.add('selected');
  });
});

/*---------------------------------------------------------------------------------------*/

// Анімація при скролі для елементів .scroll-reveal
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
});

// Анімація при скролі для елементів .scroll-reveal2
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll('.scroll-reveal2');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
});
