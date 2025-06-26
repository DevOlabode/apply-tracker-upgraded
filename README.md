
# 📝 Application Tracker (Upgraded)

This is an upgraded version of the [original Apply Tracker](https://github.com/DevOlabode/Apply-tracker) project. It is a full-stack Node.js web application built using Express and MongoDB that allows users to track job applications. Users can create, view, update, and delete applications, and each application can have statuses such as `applied`, `interviewing`, `offer`, and more.

🔗 GitHub Repo: [apply-tracker-upgraded](https://github.com/DevOlabode/apply-tracker-upgraded)

## 🌟 Features

- Add new job applications with details
- View a list of all applications
- Edit and update application info
- Delete applications
- Handle different application statuses
- Custom error handling
- Server-side input validation using Joi

## 🚀 Technologies Used

- Node.js
- Express
- MongoDB & Mongoose
- EJS templating engine
- EJS-Mate (for layout support)
- Joi (validation)
- Method-Override
- Express custom error class

## 📂 Project Structure

```
/models         → Mongoose schema for applications  
/utils          → Custom error class and async error handling  
/views          → EJS views and templates  
index.js        → Main server file  
```

## 🔧 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DevOlabode/apply-tracker-upgraded.git
   cd apply-tracker-upgraded
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start MongoDB** (ensure MongoDB is installed and running):

   ```bash
   mongod
   ```

4. **Run the app:**

   ```bash
   node index.js
   ```

5. **Visit in browser:**

   ```
   http://localhost:5000
   ```

## 📋 Routes Overview

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home page |
| `/application` | GET | View all applications |
| `/application/new` | GET | Form to create a new application |
| `/application` | POST | Submit a new application |
| `/application/:id` | GET | View application details |
| `/application/:id/edit` | GET | Edit form for an application |
| `/application/:id` | PUT | Update an application |
| `/application/:id` | DELETE | Delete an application |

## 🛠 Requirements

- Node.js
- MongoDB
- Internet connection (for any CDN if used in EJS views)

## 💡 Future Improvements

- Add user authentication
- Add search/filter by job title or status
- Add support for file uploads (resume, cover letter, etc.)

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)

---

> Made with ❤️ by [Samuel Olabode](https://github.com/DevOlabode)
