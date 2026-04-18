# Updated Task Card (Stage 1)

## Overview
This project is a  Task Card UI built as part of Stage 0 (Frontend).

---

## Features Include
* Semantic HTML structure (`<article>`, `<header>`, `<time>`, etc.)
*  `data-testid` attributes for automated testing
* Interactive checkbox to toggle task completion
* Accessible elements with `aria-label` where necessary
---

## How to Run Locally

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate into the project folder:

   ```
   cd your-repo-name
   ```

3. Open `index.html` in your browser



4. Run the Webpage using Live Server in your IDE
---
## Decisions Made
* Used semantic HTML elements to improve accessibility and structure
* Chose a real `<input type="checkbox">` for proper accessibility and usability
* Added `data-testid` attributes to required elements for testing 
* Used `setInterval` to update time remaining every 30 seconds
* Used event listeners on Edit and Delete Buttons to indicate it was triggered
  


---

## Trade-offs

* Did not use a framework (e.g. React) to keep the implementation simple for Stage 0
* No fixed state (task resets on page refresh)

Changes from Stage 0
* Introduction of edit, status, priority, expand/collapse and time functionality to make the task card interactive
* Coordination of estates, especially involving status display and control

New design decisions
* Use of colour components to indicate key state changes such as priority and status

Any Known Limitations
* Elements are wired to a single task card, meaning you cannot have multiple to-do cards
* Status is based on string-based inputs 

*Accessibility Notes
* Use of aria-labels makes it screen-friendly for readers
---

