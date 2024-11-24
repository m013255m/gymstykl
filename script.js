// إخفاء جميع الأقسام
function hideSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

// عرض القسم المحدد
function showSection(sectionId) {
    hideSections();
    const section = document.querySelector(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

// إضافة مستمعين للأحداث على الروابط
const links = document.querySelectorAll('.sidebar-link');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = link.getAttribute('href');
        showSection(targetSection);
    });
});

// عرض القسم الأول بشكل افتراضي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    showSection('#members'); // يتم عرض قسم "إدارة الأعضاء" بشكل افتراضي
});
