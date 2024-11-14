// إشعار تذكير تجديد الاشتراك
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
