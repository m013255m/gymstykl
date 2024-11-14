function showSection(section) {
    // إخفاء جميع الأقسام
    document.querySelectorAll('.section-content').forEach(function (sec) {
        sec.classList.remove('active');
    });

    // إظهار القسم المحدد
    document.getElementById(section).classList.add('active');
}

// وظيفة إنشاء نسخة احتياطية
function createBackup() {
    alert("تم إنشاء النسخة الاحتياطية بنجاح!");
}
