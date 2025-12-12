
// 햄버거 메뉴 토글
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 모바일에서 사이드바 닫기
const navLinks = document.querySelectorAll('.sidebar a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        if (window.innerWidth <= 1024) {
            sidebar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});