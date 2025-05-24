# **Express Password Authentication**
A simple Node.js and Express application that implements password authentication to control access to a secret page. Now includes automatic server restarts using **nodemon**.

## **Features**

- Express.js for server-side functionality
- Body-parser middleware to handle form submissions
- Password verification middleware
- Basic authorization mechanism
- **nodemon** for automatic server restarts during development

## **Installation**

### **1. Clone the repository:**
   ```bash
   git clone https://github.com/OJ254/Secrets_Challenge.git
   ```
### **2. Navigate to the project directory:**
   ```bash
   cd Secrets_Challenge
   ```
### **3. Install dependencies:**
   ```bash
   npm i
   ```
### **4. Install **nodemon** as a development dependency:**
   ```bash
   npm install --save-dev nodemon
   ```

## **Usage**

### **Running the server**
You can start the server using **nodemon** to watch for changes automatically:

```bash
npx nodemon index.js
```

Or, if **nodemon** is installed globally:

```bash
nodemon index.js
```
### **Open on Browser**
Then, open your browser and visit:

```
http://localhost:3000
```

Enter the password to access the secret page.

## **File Structure**

```
📂 project-directory
├── 📂 public
│   ├── index.html
│   ├── secret.html
├── index.js
├── package.json
```

## **License**
This project is licensed under the MIT License. Feel free to modify and improve it.

---
## **Author**
Developed by Japheth Oruko.
