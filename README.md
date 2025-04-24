# 🧹 Google Docs Text Cleaner Add-on

A powerful Google Docs add-on that removes unwanted formatting characters like:

- ❌ Invisible Unicode characters (zero-width spaces, joiners, BOMs)  
- 🚫 Directional formatting codes (used in multilingual or RTL text)  
- 🧊 Non-standard space characters (e.g. no-break spaces, en/em/thin spaces)  

It also includes a **Settings page** so users can choose which characters to clean.

---

## 🤖 Why This Matters (AI-Generated Text)

Modern AI tools (like ChatGPT, Copilot, Claude, etc.) sometimes insert **invisible characters** during generation. These can:

- 📈 **Increase AI detectability** (AI detectors look for patterns like zero-width spaces)  
- ♿ **Reduce accessibility** (screen readers or assistive tech may misread or ignore them)  
- 📋 **Cause formatting bugs** (especially when copying between apps or to PDFs)  
- 📉 **Break text processing scripts or regex matching**  

Cleaning these improves **readability, accessibility, and professionalism** — especially for AI-assisted writing.

---

## 🔧 Manual Installation (No Marketplace Required)

You can install this add-on in your own Google account using Apps Script.

### 📌 Instructions:

1. Open [https://script.google.com](https://script.google.com)  
2. Click **“New project”**  
3. In the new project:  
   - Replace `Code.gs` with the code from [`Code.gs`](./Code.gs)  
   - Add a new HTML file called `Settings.html` → paste contents from [`Settings.html`](./Settings.html)  

4. Go to **Project Settings** (⚙️ icon), and enable:  
   > ✅ Show “appsscript.json” manifest file  

5. Add a file called `appsscript.json`, and paste contents from [`appsscript.json`](./appsscript.json)  
6. Save the project  
7. Open any Google Doc, and refresh the page  
8. Go to:  
   `Extensions > Text Cleaner` → Choose:  
   - ✅ `Clean Invisible & Non-standard Spaces`  
   - ⚙️ `Settings` to customise what gets removed  

---

## 🧠 What It Removes

| Category              | Characters Handled                                     |
|-----------------------|--------------------------------------------------------|
| Invisible Characters  | `U+200B`, `U+200C`, `U+200D`, `U+FEFF`, etc.           |
| Directional Controls  | `U+202A–U+202E`, `U+200E`, `U+200F`, `U+2060–U+2062`   |
| Non-Standard Spaces   | `U+00A0`, `U+2000–U+200A`, `U+202F`, `U+205F`, `U+3000`, `U+2800`, etc. |

All cleaned or replaced with standard space (`U+0020`) where appropriate.

---

## 🛡️ Privacy & Safety

- Runs **only when you tell it to**  
- Stores preferences **only in your Google account**  
- No data leaves your document or device 
