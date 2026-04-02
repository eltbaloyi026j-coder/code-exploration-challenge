# Algorithm Deconstruction Challenge

## 📌 Selected Algorithm

Task Priority Sorting Algorithm (JavaScript)

---

## 🧠 What the Algorithm Does

This algorithm calculates a score for each task based on different factors like priority, due date, status, and tags.

After calculating the score, it sorts all tasks from highest score to lowest score, so the most important tasks appear first.

---

## ⚙️ Step-by-Step Breakdown

### 1. Assign Base Score

Each task gets a score based on priority:

* LOW → small score
* MEDIUM → medium score
* HIGH → higher score
* URGENT → highest score

---

### 2. Check Due Date

If a task has a due date:

* Overdue → big increase in score
* Due today → increase score
* Due soon → small increase

---

### 3. Check Task Status

* DONE → reduce score a lot
* REVIEW → reduce score a bit

---

### 4. Check Tags

If task has tags like:

* "urgent"
* "critical"
* "blocker"

👉 score increases

---

### 5. Check Recent Updates

If task was updated recently:
👉 small boost in score

---

### 6. Sorting

After calculating scores:

* All tasks are sorted
* Highest score comes first

---

## 🔄 Simple Flow Diagram

User Tasks
↓
Calculate Score (priority + due date + status + tags)
↓
Sort Tasks
↓
Return Top Tasks

---

## 💡 Key Insights

* The algorithm combines multiple factors into one score
* It helps prioritize tasks automatically
* It balances urgency and importance

---

## 🤔 What Was Difficult

* Understanding how different scores combine
* Understanding date calculations

---

## 🗣️ How I Would Explain It

I would explain it like this:

The algorithm gives each task a score based on how important it is. Then it sorts all tasks so the most important ones come first.

---

## 🚀 Possible Improvements

* Allow users to customize scoring
* Make scoring logic clearer using separate functions
* Add more flexible date handling
