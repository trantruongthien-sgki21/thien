// Smooth scrolling cho menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Xử lý form liên hệ (tạm thời báo đã gửi, vì chưa có backend)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! (Tính năng gửi mail sẽ cập nhật sau)');
        form.reset();
    });
}

// Thông báo console (giống log trong báo cáo)
console.log('Website Portfolio đã sẵn sàng!');