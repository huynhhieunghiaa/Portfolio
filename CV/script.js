/* ====================================================
   PHẦN 1: XỬ LÝ DROPDOWN TẢI CV
   (Phải để ở ngoài để HTML gọi được hàm onclick)
   ==================================================== */

// 1. Hàm bật/tắt menu khi bấm nút
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// 2. Hàm đóng menu khi bấm ra ngoài (Click Outside)
window.onclick = function(event) {
    // Kiểm tra: Nếu click KHÔNG PHẢI vào nút bấm VÀ KHÔNG PHẢI vào menu đang mở
    // Sử dụng .closest() để đảm bảo click vào icon bên trong nút vẫn tính là nút
    if (!event.target.closest('.btn-outline') && !event.target.closest('.dropdown-content')) {
        
        var dropdowns = document.getElementsByClassName("dropdown-content");
        
        // Duyệt qua tất cả các menu (nếu có nhiều) để đóng lại
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


/* ====================================================
   PHẦN 2: XỬ LÝ MENU MOBILE & GIAO DIỆN (Code cũ của bạn)
   ==================================================== */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. XỬ LÝ MENU MOBILE ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('is-active'); 
        });
    }

    // --- 2. TỰ ĐỘNG TÔ MÀU MENU (ACTIVE STATE) ---
    const currentPath = window.location.pathname.split("/").pop(); 
    const menuItems = document.querySelectorAll('.nav-links a');

    menuItems.forEach(link => {
        const linkPath = link.getAttribute('href');

        // So sánh đường dẫn
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }

        // Đóng menu mobile khi click vào link
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('is-active');
            }
        });
    });

    // --- 3. HIỆU ỨNG HEADER KHI CUỘN (SCROLL) ---
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    console.log("Script đã tải: Menu & Dropdown hoạt động tốt!");
});