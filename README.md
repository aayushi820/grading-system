# Grading System 📝

This is a JavaScript project that processes student marks to:

- ✅ Filter out students who passed
- 🔢 Sort them in descending order of marks
- 🏷️ Assign grades (A+, A, B, C)

### 💻 Features Used:
- `filter()` — to select students with marks above 35
- `sort()` — to arrange students from highest to lowest marks
- `map()` — to assign grades based on marks
- `forEach()` — to display the results

---

### 📌 Grading Criteria:
- **A+** → Marks ≥ 90  
- **A** → Marks ≥ 75 and < 90  
- **B** → Marks ≥ 60 and < 75  
- **C** → Marks < 60 (but passed)

---

### 🧪 Sample Data:
```js
[
  { name: "aayushi", marks: 95 },
  { name: "ravi", marks: 68 },
  { name: "kunal", marks: 79 },
  { name: "neha", marks: 56 },
  { name: "megha", marks: 72 },
  { name: "abhay", marks: 18 }
]

