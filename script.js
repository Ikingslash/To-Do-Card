
// ---------------- ELEMENTS ----------------
const title = document.getElementById("title");
const description = document.getElementById("description");

const priority = document.getElementById("priority");
const priorityIndicator = document.getElementById("priority-indicator");
const priorityContainer = document.querySelector(".card-priority");

const dueDate = document.getElementById("due-date");
const timeRemaining = document.getElementById("time-remaining");
const overdueIndicator = document.getElementById("overdue-indicator");

const statusEl = document.getElementById("status");
const toggle = document.getElementById("toggle");

const expandToggle = document.getElementById("expand-toggle");
const dots = document.getElementById("dots");
const more = document.getElementById("more");

// ---------------- STATE ----------------
let timerRunning = true;

// ---------------- PRIORITY ----------------
function updatePriority(value) {
    priorityContainer.classList.remove("medium", "low");

    priority.textContent = value;
    priorityIndicator.textContent = "🔴";

    if (value === "Medium") {
        priorityContainer.classList.add("medium");
        priorityIndicator.textContent = "🟡";
    } else if (value === "Low") {
        priorityContainer.classList.add("low");
        priorityIndicator.textContent = "🟢";
    }
}

// ---------------- STATUS SYSTEM ----------------
function setStatus(status) {
    statusEl.classList.remove("status-pending", "status-progress", "status-done");

    if (status === "Done") {
        statusEl.textContent = "Done";
        statusEl.classList.add("status-done");

        toggle.checked = true;
        title.style.textDecoration = "line-through";

        timerRunning = false;
        timeRemaining.textContent = "Completed";
        overdueIndicator.textContent = "";
        return;
    }

    timerRunning = true;
    title.style.textDecoration = "none";

    if (status === "In Progress") {
        statusEl.textContent = "In Progress";
        statusEl.classList.add("status-progress");
    } else {
        statusEl.textContent = "Pending";
        statusEl.classList.add("status-pending");
    }

    toggle.checked = false;
}

// checkbox controls status
toggle.addEventListener("change", () => {
    setStatus(toggle.checked ? "Done" : "Pending");
});

// ---------------- COLLAPSE (YOUR METHOD) ----------------
expandToggle.addEventListener("click", () => {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        more.style.display = "none";
        expandToggle.textContent = "Show More";
    } else {
        dots.style.display = "none";
        more.style.display = "inline";
        expandToggle.textContent = "Show Less";
    }
});

// ---------------- TIME SYSTEM ----------------
function formatTime(diff) {
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `Due in ${days} day(s)`;
    if (hours > 0) return `Due in ${hours} hour(s)`;
    return `Due in ${minutes} minute(s)`;
}

function updateTime() {
    if (!timerRunning) return;

    const now = Date.now();
    const due = new Date(dueDate.getAttribute("datetime")).getTime();
    const diff = due - now;

    overdueIndicator.textContent = "";

    // OVERDUE
    if (diff <= 0) {
        timeRemaining.textContent = `Overdue by ${Math.abs(Math.floor(diff / 60000))} min`;
        overdueIndicator.textContent = "Overdue";
        overdueIndicator.style.color = "red";
        return;
    }

    // NORMAL
    timeRemaining.textContent = formatTime(diff);
}

// update every 30 seconds
updateTime();
setInterval(updateTime, 30000);

// ---------------- INIT ----------------
setStatus(statusEl.textContent.trim());