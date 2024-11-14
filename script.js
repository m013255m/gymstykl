// إشعار تجديد الاشتراك
function sendRenewalReminder(memberName) {
    alert(`تم إرسال تذكير بتجديد الاشتراك إلى: ${memberName}`);
}

document.querySelectorAll('#renewal-reminders button').forEach(button => {
    button.addEventListener('click', () => {
        const memberName = button.parentElement.textContent.trim().split(' - ')[0];
        sendRenewalReminder(memberName);
    });
});
