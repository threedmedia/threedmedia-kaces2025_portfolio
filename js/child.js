// 햄버거 메뉴 토글
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// 메뉴 항목 클릭 시 모바일에서 사이드바 닫기
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // 모바일에서 메뉴 닫기
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// 사이드바 외부 클릭 시 닫기 (모바일)
document.addEventListener('click', function (e) {
    if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});