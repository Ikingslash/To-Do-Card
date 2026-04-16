const title = document.getElementById("title");
const duedate = document.getElementById("due-date");
const timeRemaining = document.getElementById("time-remaining");
const due = new Date(duedate.getAttribute("datetime"));
const cardStatus = document.getElementById("status");
const toggle = document.getElementById("toggle");
const editButton = document.getElementById("edit-button");
const deleteButton = document.getElementById("delete-button");

editButton.addEventListener("click", () => {
    console.log("Edit Clicked");
});

deleteButton.addEventListener("click", () => {
    alert("Delete Clicked");
});


toggle.addEventListener("change", () => {
    if (toggle.checked) {
        cardStatus.textContent = "Done";
        title.classList.add("completed");
    } else {
        cardStatus.textContent = "In Progress";
        title.classList.remove("completed");
    }
});



function updateTimeRemaining() {
    const now = new Date();
    const diff = due - now;

    const minutes = Math.floor(Math.abs(diff) / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (diff <= 0) {
        if (minutes < 1) {
            timeRemaining.textContent = "Due now!";
        } else if (minutes < 60) {
            timeRemaining.textContent = `Overdue by ${minutes} min`;
        } else if (hours < 24) {
            timeRemaining.textContent = `Overdue by ${hours} hour${hours > 1 ? "s" : ""}`;
        } else {
            timeRemaining.textContent = `Overdue by ${days} day${days > 1 ? "s" : ""}`;
        }
        return;
    }

    if (minutes < 1) {
        timeRemaining.textContent = "Due now!";
    } else if (minutes < 60) {
        timeRemaining.textContent = `Due in ${minutes} min`;
    } else if (hours < 24) {
        timeRemaining.textContent = `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
    } else {
        timeRemaining.textContent = `Due in ${days} day${days > 1 ? "s" : ""}`;
    }
}

updateTimeRemaining();
setInterval(updateTimeRemaining, 30000);