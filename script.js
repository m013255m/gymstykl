// إضافة عضو جديد
document.getElementById("add-member").addEventListener("click", function () {
    const name = document.getElementById("member-name").value.trim();
    const phone = document.getElementById("member-phone").value.trim();
    const age = document.getElementById("member-age").value.trim();
    const address = document.getElementById("member-address").value.trim();

    if (!name || !phone || !age || !address) {
        alert("يرجى إدخال جميع الحقول");
        return;
    }

    const table = document.getElementById("member-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td>${age}</td>
        <td>${address}</td>
        <td>
            <button class="btn btn-primary edit-btn">تعديل</button>
            <button class="btn btn-danger delete-btn">حذف</button>
        </td>
    `;

    table.appendChild(row);

    document.getElementById("member-name").value = "";
    document.getElementById("member-phone").value = "";
    document.getElementById("member-age").value = "";
    document.getElementById("member-address").value = "";
});

// حذف وتعديل عضو
document.getElementById("member-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.parentElement.remove();
    }

    if (e.target.classList.contains("edit-btn")) {
        const row = e.target.parentElement.parentElement;
        const cells = row.querySelectorAll("td");
        document.getElementById("member-name").value = cells[0].innerText;
        document.getElementById("member-phone").value = cells[1].innerText;
        document.getElementById("member-age").value = cells[2].innerText;
        document.getElementById("member-address").value = cells[3].innerText;
        row.remove();
    }
});
