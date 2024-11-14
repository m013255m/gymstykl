// جافا سكربت لإضافة العناصر الديناميكية لكل قسم.
document.getElementById('memberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let table = document.getElementById('memberTable');
    let row = table.insertRow();
    row.innerHTML = `<td>${event.target.fullName.value}</td><td>${event.target.age.value}</td><td>${event.target.phone.value}</td><td>${event.target.address.value}</td>`;
});

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let table = document.getElementById('subscriptionTable');
    let row = table.insertRow();
    row.innerHTML = `<td>${event.target.memberName.value}</td><td>${event.target.subscriptionType.value}</td><td>${event.target.startDate.value}</td><td>${event.target.endDate.value}</td>`;
});

// تكرار نفس الشيء لبقية النماذج
