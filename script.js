// Добавление класса при прокрутке
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Мобильное меню
document.addEventListener('DOMContentLoaded', () => {
    const navBtn = document.querySelector('.nav-mobile_btn');
    const nav = document.querySelector('.nav');

    if (navBtn && nav) {
        // Открытие/закрытие меню
        navBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu(nav, navBtn);
        });

        // Закрытие при клике вне меню
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !navBtn.contains(e.target)) {
                closeMenu(nav, navBtn);
            }
        });

        // Закрытие при клике на ссылку
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => closeMenu(nav, navBtn));
        });
    }

    // Функции управления меню
    function toggleMenu(nav, navBtn) {
        const isActive = nav.classList.toggle('active');
        navBtn.innerHTML = `<i class="fa-solid ${isActive ? 'fa-times' : 'fa-bars'}"></i>`;
    }

    function closeMenu(nav, navBtn) {
        nav.classList.remove('active');
        navBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});
