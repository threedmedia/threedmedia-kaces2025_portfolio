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

// 이미지 모달 기능
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imageModalImg");
    const closeBtn = document.querySelector(".image-modal-close");

    // 모든 이미지에 클릭 이벤트 추가
    document.querySelectorAll(".content-item img, .result-image img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            document.body.style.overflow = "hidden"; // 배경 스크롤 방지
        });
    });

    // 닫기 버튼 클릭
    closeBtn.addEventListener("click", closeModal);
    
    // 모달 배경 클릭
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // ESC 키로 닫기
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // 모달 닫기 함수
    function closeModal() {
        modal.style.display = "none";
        modalImg.src = "";
        document.body.style.overflow = "";
    }
});