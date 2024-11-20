// حفظ بيانات الأعضاء في المتصفح
document.getElementById('memberForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const member = {
        fullName: this.fullName.value,
        age: this.age.value,
        phone: this.phone.value,
        address: this.address.value
    };
    let members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(member);
    localStorage.setItem('members', JSON.stringify(members));
    displayMembers();
});

function displayMembers() {
    const members = JSON.parse(localStorage.getItem('members')) || [];
    const table = document.getElementById('memberTable');
    table.innerHTML = `<tr>
        <th>الاسم</th>
        <th>العمر</th>
        <th>الهاتف</th>
        <th>العنوان</th>
    </tr>`;
    members.forEach(member => {
        const row = table.insertRow();
        row.innerHTML = `<td>${member.fullName}</td>
                         <td>${member.age}</td>
                         <td>${member.phone}</td>
                         <td>${member.address}</td>`;
    });
}

// استدعاء الوظيفة عند تحميل الصفحة
window.onload = function () {
    displayMembers();
};
