// Получаем ссылки на элементы DOM
const servicesMenuItem = document.getElementById('services');
const servicesSubmenu = servicesMenuItem.querySelector('.submenu');

// Отображаем подменю при наведении
servicesMenuItem.addEventListener('mouseenter', function() {
    servicesSubmenu.style.display = 'block';
});

// Скрываем подменю при уходе с элемента "Услуги"
servicesMenuItem.addEventListener('mouseleave', function() {
    servicesSubmenu.style.display = 'none';
});
