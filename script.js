
    function showSection(section) {
        // Hide all sections
        var sections = document.getElementsByClassName('section');
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
        }
        
        // Show the clicked section
        document.getElementById(section).style.display = 'block';
    }
    