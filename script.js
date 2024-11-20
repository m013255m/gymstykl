// تبديل الأقسام بناءً على الضغط على الروابط
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.content > div').forEach(section => {
            section.style.display = 'none';
        });
        const target = link.getAttribute('href').substring(1);
        document.getElementById(target).style.display = 'block';
    });
});
document.getElementById('dashboard').style.display = 'block';

// إضافة عضو جديد
document.getElementById('memberForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const age = e.target.age.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const row = createRow([fullName, age, phone, address], 'memberTable');
    e.target.reset();
});

// إضافة منتج للمخزون
document.getElementById('inventoryForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = e.target.productName.value;
    const quantity = e.target.quantity.value;

    createRow([productName, quantity], 'inventoryTable');
    e.target.reset();
});

// إضافة منتج للمخزون التالف
document.getElementById('damagedForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = e.target.productName.value;
    const damagedQuantity = e.target.damagedQuantity.value;

    createRow([productName, damagedQuantity], 'damagedTable');
    e.target.reset();
});

// إنشاء صف جديد مع أزرار تعديل وحذف
function createRow(data, tableId) {
    const row = document.createElement('tr');
    data.forEach(item => {
        const cell = document.createElement('td');
        cell.textContent = item;
        row.appendChild(cell);
    });
    const editBtn = createButton('تعديل', () => editRow(row));
    const deleteBtn = createButton('حذف', () => row.remove());
    row.appendChild(editBtn);
    row.appendChild(deleteBtn);

    document.getElementById(tableId).appendChild(row);
}

// إنشاء زر
function createButton(label, action) {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.onclick = action;
    return btn;
}

// تعديل صف
function editRow(row) {
    Array.from(row.children).forEach((cell, index) => {
        if (index < row.children.length - 2) {
            const input = document.createElement('input');
            input.value = cell.textContent;
            cell.textContent = '';
            cell.appendChild(input);
        }
    });

    row.lastChild.previousSibling.textContent = 'حفظ';
    row.lastChild.previousSibling.onclick = () => saveRow(row);
}

// حفظ تعديل الصف
function saveRow(row) {
    Array.from(row.children).forEach((cell, index) => {
        if (index < row.children.length - 2) {
            const value = cell.firstChild.value;
            cell.textContent = value;
        }
    });

    row.lastChild.previousSibling.textContent = 'تعديل';
    row.lastChild.previousSibling.onclick = () => editRow(row);
}
