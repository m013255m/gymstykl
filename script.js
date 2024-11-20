document.addEventListener("DOMContentLoaded", function () {
    // حفظ البيانات من النماذج
    document.getElementById("memberForm").addEventListener("submit", saveMember);
    document.getElementById("trainerForm").addEventListener("submit", saveTrainer);
    document.getElementById("inventoryForm").addEventListener("submit", saveInventory);
    document.getElementById("workoutForm").addEventListener("submit", saveWorkout);
    document.getElementById("nutritionForm").addEventListener("submit", saveNutrition);
    document.getElementById("penaltyForm").addEventListener("submit", savePenalty);
    document.getElementById("incentiveForm").addEventListener("submit", saveIncentive);
    document.getElementById("promotionForm").addEventListener("submit", savePromotion);
});

// حفظ عضو جديد
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

// حفظ منتج للمخزون
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

// حفظ تمرين
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

// حفظ وجبة
function saveNutrition(e) {
    e.preventDefault();
    const mealName = e.target.mealName.value;
    const calories = e.target.calories.value;
    const ingredients = e.target.ingredients.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${mealName}</td>
        <td>${calories}</td>
        <td>${ingredients}</td>
        <td><button onclick="editRow(this)">تعديل</button></td>
        <td><button onclick="deleteRow(this)">حذف</button></td>
    `;
    document.getElementById("nutritionTable").appendChild(row);
    e.target.reset();
}

// حفظ عقوبة
function savePenalty(e) {
    e.preventDefault();
    const memberName = e.target.memberName.value;
    const penaltyReason = e.target.penaltyReason.value;
    const penaltyAmount = e.target.penaltyAmount.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${memberName}</td>
        <td>${penaltyReason}</td>
        <td>${penaltyAmount}</td>
        <td><button onclick="editRow(this)">تعديل</button></td>
        <td><button onclick="deleteRow(this)">حذف</button></td>
    `;
    document.getElementById("penaltyTable").appendChild(row);
    e.target.reset();
}

// حفظ حافز
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

// حفظ عرض ترويجي
function savePromotion(e) {
    e.preventDefault();
    const promotionName = e.target.promotionName.value;
    const discountAmount = e.target.discountAmount.value;
    const validUntil = e.target.validUntil.value;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${promotionName}</td>
        <td>${discountAmount}</td>
        <td>${validUntil}</td>
        <td><button onclick="editRow(this)">تعديل</button></td>
        <td><button onclick="deleteRow(this)">حذف</button></td>
    `;
    document.getElementById("promotionTable").appendChild(row);
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
