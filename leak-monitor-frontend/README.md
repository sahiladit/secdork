# Secdork – Leak Monitor Frontend

Secdork is a privacy-first security monitoring platform that helps users understand whether their data may be at risk due to publicly reported data breaches.

This repository contains the **frontend application** built with React and deployed on Vercel.

---

## 🚀 What This App Does

- Secure user authentication using **Clerk**
- Displays a user dashboard with the monitored email address
- Associates reported data breaches (from public blogs and disclosures) with the user’s email domain
- Presents risk information clearly and responsibly (no false claims of confirmed leaks)

> ⚠️ This application does **not** store plaintext emails or passwords and does **not** scrape private or paid data sources.

---

## 🧠 How It Works (High Level)

1. User signs up / logs in via Clerk  
2. The dashboard retrieves the authenticated user’s email  
3. The email is used to check **publicly reported breach information** via a backend API  
4. Results are displayed as **risk associations**, not confirmed exposures  

---

