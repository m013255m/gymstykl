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
            <button class="btn btn-primary">تعديل</button>
            <button class="btn btn-danger">حذف</button>
        </td>
    `;

    table.appendChild(row);

    document.getElementById("member-name").value = "";
    document.getElementById("member-phone").value = "";
    document.getElementById("member-age").value = "";
    document.getElementById("member-address").value = "";
});
