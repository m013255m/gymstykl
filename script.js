// وظائف لتسجيل الدخول
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('controlPanel').style.display = 'flex';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

// إضافة بيانات الأعضاء
document.getElementById('membersForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('memberName').value;
    var phone = document.getElementById('memberPhone').value;

    var table = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = `<td>${name}</td><td>${phone}</td><td><button class="delete">حذف</button></td>`;

    document.getElementById('membersForm').reset();
});

// إضافة بيانات الاشتراكات
document.getElementById('subscriptionsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('subscriptionName').value;
    var price = document.getElementById('subscriptionPrice').value;

    var table = document.getElementById('subscriptionsTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = `<td>${name}</td><td>${price}</td><td><button class="delete">حذف</button></td>`;

    document.getElementById('subscriptionsForm').reset();
});

// إضافة بيانات الحصص
document.getElementById('classesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('className').value;
    var time = document.getElementById('classTime').value;

    var table = document.getElementById('classesTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = `<td>${name}</td><td>${time}</td><td><button class="delete">حذف</button></td>`;

    document.getElementById('classesForm').reset();
});

// إضافة بيانات المدربين
document.getElementById('trainersForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('trainerName').value;
    var speciality = document.getElementById('trainerSpeciality').value;

    var table = document.getElementById('trainersTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    newRow.innerHTML = `<td>${name}</td><td>${speciality}</td><td><button class="delete">حذف</button></td>`;

    document.getElementById('trainersForm').reset();
});
