// حفظ عضو جديد
document.getElementById('memberForm').addEventListener('submit', saveMember);
function saveMember(e) {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const age = e.target.age.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${fullName}</td>
        <td>${age}</td>
        <td>${phone}</td>
        <td>${address}</td>
        <td><button onclick="editRow(this)">تعديل</button></td>
        <td><button onclick="deleteRow(this)">حذف</button></td>
    `;
    document.getElementById("memberTable").appendChild(row);
    e.target.reset();
}

// حفظ مدرب جديد
document.getElementById('trainerForm').addEventListener('submit', saveTrainer);
function saveTrainer(e) {
    e.preventDefault();
    const trainerName = e.target.trainerName.value;
    const specialization = e.target.specialization.value;
    const trainerPhone = e.target.trainerPhone.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${trainerName}</td>
        <td>${specialization}</td>
        <td>${trainerPhone}</td>
        <td><button onclick="editRow(this)">تعديل</button></td>
        <td><button onclick="deleteRow(this)">حذف</button></td>
    `;
    document.getElementById("trainerTable").appendChild(row);
    e.target.reset();
}

// حفظ اشتراك جديد
document.getElementById('subscriptionForm').addEventListener('submit', saveSubscription);
function saveSubscription(e) {
    e.preventDefault();
    const subscriberName = e.target.subscriberName.value;
    const startDate = e.target.startDate.value;
    const endDate = e.target.endDate.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${subscriberName}</td>
        <td>${startDate}</td>
        <td>${endDate}</td>
        <td><button onclick="editRow(this)">تعديل</button></td>
        <td><button onclick="deleteRow(this)">حذف</button></td>
    `;
    document.getElementById("subscriptionTable").appendChild(row);
    e.target.reset();
}

// حفظ منتج جديد في المخزون
document.getElementById('inventoryForm').addEventListener('submit', saveInventory);
function saveInventory(e) {
    e.preventDefault();
    const productName = e.target.productName.value;
    const quantity = e.target.quantity.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${productName}</td>
        <td>${quantity}</td>
        <td><button onclick="editRow(this)">تعديل</button></td>
        <td><button onclick="deleteRow(this)">حذف</button></td>
    `;
    document.getElementById("inventoryTable").appendChild(row);
    e.target.reset();
}

// حفظ تمرين جديد
document.getElementById('workoutForm').addEventListener('submit', saveWorkout);
function saveWorkout(e) {
    e.preventDefault();
    const workoutName = e.target.workoutName.value;
    const duration = e.target.duration.value;
    const repetitions = e.target.repetitions.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${workoutName}</td>
        <td>${duration}</td>
        <td>${repetitions}</td>
        <td><button onclick="editRow(this)">تعديل</button></td>
        <td><button onclick="deleteRow(this)">حذف</button></td>
    `;
    document.getElementById("workoutTable").appendChild(row);
    e.target.reset();
}

// حفظ مكافأة جديدة
document.getElementById('incentiveForm').addEventListener('submit', saveIncentive);
function saveIncentive(e) {
    e.preventDefault();
    const incentiveMemberName = e.target.incentiveMemberName.value;
    const incentiveType = e.target.incentiveType.value;
    const incentiveAmount = e.target.incentiveAmount.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${incentiveMemberName}</td>
        <td>${incentiveType}</td>
        <td>${incentiveAmount}</td>
        <td><button onclick="editRow(this)">تعديل</button></td>
        <td><button onclick="deleteRow(this)">حذف</button></td>
    `;
    document.getElementById("incentiveTable").appendChild(row);
    e.target.reset();
}

// حذف صف
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

// تعديل صف
function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName("td");
    const newValues = prompt("تعديل البيانات:", cells[0].innerText);
    if (newValues) {
        cells[0].innerText = newValues;
    }
}
