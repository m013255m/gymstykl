// وظائف لحفظ وإدارة البيانات لكل قسم
document.getElementById( memberForm ).addEventListener( submit , function (e) {
    e.preventDefault();
    saveData( memberTable , [ fullName ,  age ,  phone ,  address ]);
});

document.getElementById( trainerForm ).addEventListener( submit , function (e) {
    e.preventDefault();
    saveData( trainerTable , [ trainerName ,  specialization ,  trainerPhone ]);
});

document.getElementById( subscriptionForm ).addEventListener( submit , function (e) {
    e.preventDefault();
    saveData( subscriptionTable , [ subscriberName ,  startDate ,  endDate ]);
});

// وظيفة لإضافة البيانات للجداول
function saveData(tableId, fields) {
    const table = document.getElementById(tableId);
    const row = document.createElement( tr );

    fields.forEach(field => {
        const value = document.getElementsByName(field)[0].value;
        const cell = document.createElement( td );
        cell.innerText = value;
        row.appendChild(cell);
    });

    const editCell = document.createElement( td );
    const deleteCell = document.createElement( td );
    editCell.innerHTML = `<button onclick="editRow(this)">تعديل</button>`;
    deleteCell.innerHTML = `<button onclick="deleteRow(this)">حذف</button>`;
    row.appendChild(editCell);
    row.appendChild(deleteCell);

    table.appendChild(row);

    fields.forEach(field => (document.getElementsByName(field)[0].value =   ));
}

// حذف صف
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

// تعديل صف
function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll( td );
    cells.forEach((cell, index) => {
        if (index < cells.length - 2) {
            const newValue = prompt( تعديل القيمة: , cell.innerText);
            if (newValue) cell.innerText = newValue;
        }
    });
}
