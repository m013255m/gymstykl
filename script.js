// وظيفة لعرض الأقسام عند النقر على الروابط في الشريط الجانبي
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// إضافة أعضاء في جدول الأعضاء
document.getElementById('member-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const memberName = this.member_name.value;
    const subscriptionDate = this.subscription_date.value;
    const membersTable = document.getElementById('members-table');
    const row = membersTable.insertRow();
    row.insertCell(0).textContent = memberName;
    row.insertCell(1).textContent = subscriptionDate;
    const actionsCell = row.insertCell(2);
    actionsCell.innerHTML = '<button class="edit-btn">تعديل</button> <button class="delete-btn">حذف</button>';
    this.reset();
});

// حذف وتعديل الأعضاء
document.getElementById('members-table').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.parentElement.parentElement;
        row.remove();
    } else if (event.target.classList.contains('edit-btn')) {
        const row = event.target.parentElement.parentElement;
        const memberName = row.cells[0].textContent;
        const subscriptionDate = row.cells[1].textContent;
        document.querySelector('[name="member_name"]').value = memberName;
        document.querySelector('[name="subscription_date"]').value = subscriptionDate;
    }
});

// تذكير الأعضاء بتجديد الاشتراك
function sendRenewalReminder(memberName) {
    const renewalList = document.getElementById('renewal-list');
    const newListItem = document.createElement('li');
    newListItem.textContent = `تذكير بتجديد الاشتراك لـ ${memberName}`;
    renewalList.appendChild(newListItem);
}

// إضافة تذكيرات تجديد الاشتراك عند إضافة الأعضاء
document.querySelectorAll('#members button').forEach(button => {
    button.addEventListener('click', () => {
        const memberName = button.parentElement.textContent.trim().split(' - ')[0];
        sendRenewalReminder(memberName);
    });
});
