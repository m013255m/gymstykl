function addData(formId, tableId) {
    const form = document.getElementById(formId);
    const tableBody = document.getElementById(tableId).querySelector("tbody");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const row = document.createElement("tr");

        Array.from(form.elements).forEach((input) => {
            if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
                const cell = document.createElement("td");
                cell.textContent = input.value;
                row.appendChild(cell);
            }
        });

        const editCell = document.createElement("td");
        const editBtn = document.createElement("button");
        editBtn.textContent = "تعديل";
        editBtn.addEventListener("click", () => editRow(row, formId));
        editCell.appendChild(editBtn);
        row.appendChild(editCell);

        const deleteCell = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "حذف";
        deleteBtn.addEventListener("click", () => row.remove());
        deleteCell.appendChild(deleteBtn);
        row.appendChild(deleteCell);

        tableBody.appendChild(row);
        form.reset();
    });
}

function editRow(row, formId) {
    const form = document.getElementById(formId);
    const cells = row.querySelectorAll("td");

    Array.from(form.elements).forEach((input, index) => {
        if (input.tagName === "INPUT" || input.tagName === "TEXTAREA") {
            input.value = cells[index].textContent;
        }
    });

    row.remove();
}

function showSection(sectionId) {
    document.querySelectorAll("main .content section").forEach((section) => {
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
}

// استدعاء الوظائف
addData("memberForm", "memberTable");
addData("trainerForm", "trainerTable");
addData("subscriptionForm", "subscriptionTable");
addData("inventoryForm", "inventoryTable");
// كرر نفس الاستدعاء لباقي الأقسام.
