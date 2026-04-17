const title = document.getElementById("title");
const description = document.getElementById("description");
const priority = document.getElementById("priority");
const priorityIndicator = document.getElementById("priority-indicator");
const priorityContainer = document.querySelector(".card-priority");
const collapseSection = document.getElementById("collapse-sections");
const expandToggle = document.getElementById("expand-toggle");
const duedate = document.getElementById("due-date");
const timeRemaining = document.getElementById("time-remaining");
const overdueIndicator = document.getElementById("overdue-indicator");
const cardStatus = document.getElementById("status");
const toggle = document.getElementById("toggle");
const editButton = document.getElementById("edit-button");
const editForm = document.getElementById("edit-form");
const editTitle = document.getElementById("edit-title");
const editDescription = document.getElementById("edit-description");
const editStatus = document.getElementById("edit-status");
const editPriority = document.getElementById("edit-priority");
const editDueDate = document.getElementById("edit-due-date");
const saveButton = document.getElementById("save-button");
const cancelButton = document.getElementById("cancel-button");
const deleteButton = document.getElementById("delete-button");


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


// ---------------- DESCRIPTION COLLAPSE ----------------
function initDescription() {
    const isLong = description.textContent.trim().length > 50;

    if (isLong) {
        description.classList.add("collapsed");
        expandToggle.style.display = "inline-block";
        expandToggle.textContent = "Show More";
    } else {
        description.classList.remove("collapsed");
        expandToggle.style.display = "none";
    }
}

expandToggle.addEventListener("click", () => {
    description.classList.toggle("collapsed");

    const collapsed = description.classList.contains("collapsed");

    expandToggle.textContent = collapsed ? "Show More" : "Show Less";
});


// ---------------- TIME SYSTEM ----------------
function updateTime() {
    const now = Date.now();
    const due = new Date(duedate.getAttribute("datetime")).getTime();

    const diff = due - now;

    overdueIndicator.textContent = "";

    if (diff <= 0) {
        timeRemaining.textContent = "Overdue";
        overdueIndicator.textContent = "Overdue";
        overdueIndicator.style.color = "red";
        return;
    }

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        timeRemaining.textContent = `Due in ${days} day(s)`;
    } else if (hours > 0) {
        timeRemaining.textContent = `Due in ${hours} hour(s)`;
    } else {
        timeRemaining.textContent = `Due in ${minutes} minute(s)`;
    }
}

updateTime();
setInterval(updateTime, 60000);


// ---------------- STATUS + CHECKBOX SYNC ----------------
function setDoneState(isDone) {
    if (isDone) {
        cardStatus.textContent = "Done";
        toggle.checked = true;
        title.style.textDecoration = "line-through";
        priorityContainer.style.opacity = "0.6";
    } else {
        cardStatus.textContent = "Pending";
        toggle.checked = false;
        title.style.textDecoration = "none";
        priorityContainer.style.opacity = "1";
    }
}

toggle.addEventListener("change", () => {
    setDoneState(toggle.checked);
});


// ---------------- EDIT MODE ----------------
editButton.addEventListener("click", (e) => {
    e.preventDefault();

    editForm.classList.add("active");

    editTitle.value = title.textContent.trim();
    editDescription.value = description.textContent.trim();
    editStatus.value = cardStatus.textContent.trim();
    editPriority.value = priority.textContent.trim();

    editDueDate.value = new Date(duedate.getAttribute("datetime"))
        .toISOString()
        .slice(0, 10);

    editTitle.focus();
});

saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    title.textContent = editTitle.value;
    description.textContent = editDescription.value;
    cardStatus.textContent = editStatus.value;

    updatePriority(editPriority.value);

    const newDate = new Date(editDueDate.value);
    duedate.setAttribute("datetime", newDate.toISOString());
    duedate.textContent = `Due ${newDate.toDateString()}`;

    editForm.classList.remove("active");

    initDescription();
    updateTime();
});

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    editForm.classList.remove("active");
});

deleteButton.addEventListener("click", () => {
    alert("Delete Clicked");
});


// ---------------- INIT ----------------
initDescription();
updateTime();