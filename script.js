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

document.getElementById('memberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const age = e.target.age.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const row = document.createElement('tr');
    row.innerHTML = `<td>${fullName}</td><td>${age}</td><td>${phone}</td><td>${address}</td>`;
    document.getElementById('memberTable').appendChild(row);

    e.target.reset();
});

document.getElementById('workoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const memberName = e.target.memberName.value;
    const workoutType = e.target.workoutType.value;
    const reps = e.target.reps.value;
    const duration = e.target.duration.value;

    const row = document.createElement('tr');
    row.innerHTML = `<td>${memberName}</td><td>${workoutType}</td><td>${reps}</td><td>${duration}</td>`;
    document.getElementById('workoutTable').appendChild(row);

    e.target.reset();
});

document.getElementById('nutritionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const memberName = e.target.memberName.value;
    const meal = e.target.meal.value;
    const calories = e.target.calories.value;

    const row = document.createElement('tr');
    row.innerHTML = `<td>${memberName}</td><td>${meal}</td><td>${calories}</td>`;
    document.getElementById('nutritionTable').appendChild(row);

    e.target.reset();
});
