// التبديل بين الأقسام
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.content > div').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector(this.getAttribute('href')).style.display = 'block';
    });
});

// إضافة بيانات الأعضاء
document.getElementById('memberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.fullName.value;
    const age = this.age.value;
    const phone = this.phone.value;
    const address = this.address.value;

    const table = document.getElementById('memberTable');
    const row = table.insertRow();
    row.innerHTML = `<td>${name}</td><td>${age}</td><td>${phone}</td><td>${address}</td>`;
    this.reset();
});

// إضافة مستند
document.getElementById('documentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.memberName.value;
    const file = this.documentFile.files[0].name;
    const date = new Date().toLocaleDateString();

    const table = document.getElementById('documentTable');
    const row = table.insertRow();
    row.innerHTML = `<td>${name}</td><td>${file}</td><td>${date}</td>`;
    this.reset();
});
