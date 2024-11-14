// إضافة الأعضاء
document.getElementById("members-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const memberName = document.getElementById("member-name").value;
    if (memberName) {
        let members = JSON.parse(localStorage.getItem("members")) || [];
        members.push(memberName);
        localStorage.setItem("members", JSON.stringify(members));
        displayMembers();
        document.getElementById("member-name").value = "";
    }
});

// عرض الأعضاء
function displayMembers() {
    const members = JSON.parse(localStorage.getItem("members")) || [];
    const membersList = document.getElementById("members-list");
    membersList.innerHTML = "";
    members.forEach(function(member) {
        const div = document.createElement("div");
        div.classList.add("list-item");
        div.innerHTML = `<i class="fas fa-user"></i> ${member}`;
        membersList.appendChild(div);
    });
}

// إضافة الاشتراكات
document.getElementById("subscriptions-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const subscriptionName = document.getElementById("subscription-name").value;
    if (subscriptionName) {
        let subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
        subscriptions.push(subscriptionName);
        localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
        displaySubscriptions();
        document.getElementById("subscription-name").value = "";
    }
});

// عرض الاشتراكات
function displaySubscriptions() {
    const subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];
    const subscriptionsList = document.getElementById("subscriptions-list");
    subscriptionsList.innerHTML = "";
    subscriptions.forEach(function(subscription) {
        const div = document.createElement("div");
        div.classList.add("list-item");
        div.innerHTML = `<i class="fas fa-credit-card"></i> ${subscription}`;
        subscriptionsList.appendChild(div);
    });
}

// إضافة الإشعارات
document.getElementById("notifications-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const notificationMessage = document.getElementById("notification-message").value;
    if (notificationMessage) {
        let notifications = JSON.parse(localStorage.getItem("notifications")) || [];
        notifications.push(notificationMessage);
        localStorage.setItem("notifications", JSON.stringify(notifications));
        displayNotifications();
        document.getElementById("notification-message").value = "";
    }
});

// عرض الإشعارات
function displayNotifications() {
    const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
    const notificationsList = document.getElementById("notifications-list");
    notificationsList.innerHTML = "";
    notifications.forEach(function(notification) {
        const div = document.createElement("div");
        div.classList.add("list-item");
        div.innerHTML = `<i class="fas fa-bell"></i> ${notification}`;
        notificationsList.appendChild(div);
    });
}
