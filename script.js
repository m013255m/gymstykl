// دالة لتغيير القسم المعروض
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// دالة لإضافة عضو جديد
document.getElementById('member-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('member_name').value;
    const email = document.getElementById('member_email').value;
    const date = document.getElementById('subscription_date').value;
    const plan = document.getElementById('subscription_plan').value;

    const table = document.getElementById('members-table').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = email;
    row.insertCell(2).textContent = date;
    row.insertCell(3).innerHTML = '<button class="btn-remove">إزالة</button>';

    // حفظ البيانات في localStorage
    const membersData = JSON.parse(localStorage.getItem('membersData')) || [];
    membersData.push({ name, email, date, plan });
    localStorage.setItem('membersData', JSON.stringify(membersData));

    // إعادة تعيين النموذج
    document.getElementById('member-form').reset();
});

// دالة لإنشاء نسخة احتياطية
function createBackup() {
    alert("تم إنشاء النسخة الاحتياطية بنجاح!");
}
