// الحفظ التلقائي باستخدام LocalStorage
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('input', () => {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        localStorage.setItem(form.id, JSON.stringify(data));
    });

    // استعادة البيانات عند تحميل الصفحة
    const savedData = localStorage.getItem(form.id);
    if (savedData) {
        const data = JSON.parse(savedData);
        for (const [key, value] of Object.entries(data)) {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = value;
            }
        }
    }
});

// عرض الأقسام
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.content > div').forEach(section => {
            section.style.display = 'none';
        });

        const target = link.getAttribute('href').substring(1);
        document.getElementById(target).style.display = 'block';
    });
});

// تفعيل العرض الأول للقسم
document.getElementById('dashboard').style.display = 'block';
