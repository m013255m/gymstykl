document.querySelectorAll(".sidebar ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelectorAll(".section").forEach(section => {
            section.style.display = "none";
        });
        const sectionId = link.getAttribute("href").substring(1);
        document.getElementById(sectionId).style.display = "block";
    });
});

document.getElementById("dashboard").style.display = "block";
