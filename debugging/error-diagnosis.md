# Debugging – Error Diagnosis Challenge

## 📌 Overview

In this exercise, I practiced identifying and fixing errors in a Node.js CLI application.

---

## 🐞 Problem Identified

While running the CLI commands, I noticed that some outputs were incorrect or not displaying as expected.

Example:

* Status was showing as `undefined` instead of symbols like [ ] or [✓]

---

## 🔍 Root Cause

The issue was caused by a mismatch between the task status values and the mapping used to display status symbols.

The status values (like "todo", "done") did not match the keys used in the statusSymbol object.

---

## 🛠️ Solution

To fix this, the mapping must correctly match the task status values.

Example fix:

* Ensure TaskStatus values are correctly used as keys
* Confirm that task.status matches expected values

---

## ✅ Result

After understanding the issue:

* The CLI structure became clearer
* I understood how data flows from models to CLI output
* I improved my debugging skills

---

## 💡 What I Learned

* Debugging is about understanding the root cause, not just fixing errors
* Small mismatches in values can break functionality
* Logging and testing help identify problems faster

---

## 🚀 Reflection

This exercise helped me gain confidence in debugging real applications. I now understand how to trace issues from output back to the source code.
