# React-ems-App
# Employee Management System (React + Spring Boot)

A full-stack Employee Management System with a React (Vite) frontend and a Spring Boot + PostgreSQL backend. Supports adding, viewing, updating, deleting, and filtering employee records.

## Tech Stack

**Frontend**
- React 19
- React Router 7
- Vite 8
- Plain `fetch()` for API calls (no axios/query libraries)

**Backend**
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Maven

## Project Structure

```
React_EMS/
├── EMS_Frontend/                # React frontend
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── EmployeeManagement.jsx   # owns its own employee data + all API calls
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── EMS.jsx              # renders EmployeeManagement
│   │   │   ├── Employees.jsx        # separate read view, own fetch
│   │   │   └── Contact.jsx
│   │   ├── CSS/
│   │   ├── App.jsx                  # layout shell (Header + Outlet + Footer)
│   │   ├── Routed.jsx                # route definitions
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── EMS_Backend/employe_management_system/   # Spring Boot backend
    └── src/main/java/com/ems/employe_management_system/
        ├── controller/Controller.java
        ├── service/EmpService.java
        ├── service/serviceimpl/EmpServiceImpl.java
        ├── repository/EmpRepository.java
        └── entity/Employee.java
```

## API Endpoints

Base URL: `http://localhost:8080`

| Method | Endpoint | Description | Body / Params |
|---|---|---|---|
| GET | `/get-employees` | Fetch all employees | — |
| POST | `/add-employee` | Add a new employee | `{ id, name, dept }` |
| PUT | `/update-employee` | Update an existing employee | `{ id, name, dept }` |
| DELETE | `/remove-by-id` | Delete an employee | `?id=` |
| GET | `/filter-by-name` | Search by name (starts-with) | `?name=` |
| GET | `/filter-by-dept` | Search by department (starts-with) | `?dept=` |
| GET | `/filter-by-even-id` | Employees with even IDs | — |
| GET | `/filter-by-odd-id` | Employees with odd IDs | — |

`add-employee`, `update-employee`, and `remove-by-id` return a plain-text success/error message. `get-employees` and the filter endpoints return JSON.

## Getting Started

### Backend

1. Create a PostgreSQL database named `employeesdb`.
2. Set your DB credentials as environment variables (see `application.properties` — do not commit real credentials):
   ```
   spring.datasource.username=${DB_USERNAME}
   spring.datasource.password=${DB_PASSWORD}
   ```
3. From the repo root:
   ```bash
   cd EMS_Backend/employe_management_system
   ./mvnw spring-boot:run
   ```
   The API will start on `http://localhost:8080`.

### Frontend

1. From the repo root:
   ```bash
   cd EMS_Frontend
   npm install
   npm run dev
   ```
2. Vite will serve the app on `http://localhost:5173` (check your terminal — it may pick a different port if 5173 is busy).
3. If the port differs from `5173`, update `@CrossOrigin(origins = "...")` in `Controller.java` to match, or requests will be blocked by CORS.

## Known Limitations

- The "Clear" button in Employee Management clears the local view only — there's no bulk-delete endpoint on the backend, so this does not affect the database.
- No authentication/authorization layer yet — all endpoints are open once CORS is satisfied.

## License

For personal/learning use.
