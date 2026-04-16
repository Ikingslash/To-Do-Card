# Todo Task Card (Stage 0)

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
* Only a single task card implemented instead of a full task list system

---

