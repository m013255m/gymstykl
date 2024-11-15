// إضافة عضو جديد
document.getElementById("add-member").addEventListener("click", function () {
    const name = document.getElementById("member-name").value;
    const phone = document.getElementById("member-phone").value;

    if (name.trim() === "" || phone.trim() === "") {
        alert("يرجى إدخال جميع الحقول");
        return;
    }

    const table = document.getElementById("member-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td><button class="delete-btn">حذف</button></td>
    `;

    table.appendChild(row);

    document.getElementById("member-name").value = "";
    document.getElementById("member-phone").value = "";
});

// حذف عضو
document.getElementById("member-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.parentElement.remove();
    }
});
