document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const formData = new FormData(form);
            const dataObject = {};

            formData.forEach((value, key) => {
                dataObject[key] = value;
            });

            const table = document.querySelector(`#${form.id.replace("Form", "Table")}`);
            const row = table.insertRow();

            Object.values(dataObject).forEach(value => {
                const cell = row.insertCell();
                cell.textContent = value;
            });

            // حفظ البيانات
            const storageKey = form.id.replace("Form", "");
            let storedData = JSON.parse(localStorage.getItem(storageKey)) || [];
            storedData.push(dataObject);
            localStorage.setItem(storageKey, JSON.stringify(storedData));

            form.reset();
        });
    });

    // تحميل البيانات المحفوظة
    forms.forEach(form => {
        const storageKey = form.id.replace("Form", "");
        const storedData = JSON.parse(localStorage.getItem(storageKey)) || [];
        const table = document.querySelector(`#${form.id.replace("Form", "Table")}`);

        storedData.forEach(data => {
            const row = table.insertRow();
            Object.values(data).forEach(value => {
                const cell = row.insertCell();
                cell.textContent = value;
            });
        });
    });
});
