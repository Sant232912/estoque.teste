document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.querySelector('.sidebar');
    var menuToggle = document.getElementById('menu-toggle');
    var menuList = document.querySelector('.sidebar ul');

    if (menuList.classList.contains('collapsed')) {
        // Expandir o menu
        menuList.classList.remove('collapsed');
        menuToggle.classList.remove('collapse-icon');
        menuToggle.classList.add('expand-icon');
    } else {
        // Recolher o menu
        menuList.classList.add('collapsed');
        menuToggle.classList.remove('expand-icon');
        menuToggle.classList.add('collapse-icon');
    }
});
