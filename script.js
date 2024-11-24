// script.js
document.addEventListener('DOMContentLoaded', () => {
    // اضافة الأعضاء
    const memberForm = document.getElementById('memberForm');
    memberForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${memberForm.fullName.value}</td>
            <td>${memberForm.age.value}</td>
            <td>${memberForm.phone.value}</td>
            <td>${memberForm.address.value}</td>
            <td><button class="edit">تعديل</button></td>
            <td><button class="delete">حذف</button></td>
        `;
        document.getElementById('memberTable').querySelector('tbody').appendChild(newRow);
    });

    // عمليات مشابهة لبقية النماذج...
});
