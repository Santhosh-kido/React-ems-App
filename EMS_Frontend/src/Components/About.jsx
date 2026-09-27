function About() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "5px auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "40px", fontSize: "32px" }}>
        About Employee Management System
      </h2>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.7",
          textAlign: "justify",
        }}
      >
        The Employee Management System is a web application designed to
        simplify the process of managing employee information in an
        organization. It provides a centralized place to add, view, update,
        delete, search, and filter employee records.The system allows users to maintain important employee details such
        as employee ID, name, age, department, salary, and other relevant
        information. Instead of managing employee records manually, the
        application provides an organized and easy-to-use interface for
        performing common employee management operations.
      </p>
      <h2 style={{ marginTop: "25px" }}>
        Key Features
      </h2>

      <ul
        style={{
          display: "inline-block",
          textAlign: "left",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#e5e7eb",
        }}
      >
        <li>Add new employees</li>
        <li>View employee information</li>
        <li>Update existing employee details</li>
        <li>Delete employee records</li>
        <li>Search employees by ID or name</li>
        <li>Filter employees based on different criteria</li>
      </ul>

      {/* How It Works */}
      <h2 style={{ marginTop: "10px" }}>
        How It Works
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "35px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "200px", border: "1px solid #2563eb", padding: "10px", borderRadius: "10px", background: "#1f2937" }}>
          <h3 style={{ color: "#e5e7eb", marginTop: "10px" }}>Add</h3>
          <p style={{ color: "#9ca3af" }}>
            Add new employees by entering their basic details into the system.
          </p>
        </div>

        <div style={{ width: "200px", border: "1px solid #2563eb", padding: "10px", borderRadius: "10px", background: "#1f2937" }}>
          <h3 style={{ color: "#e5e7eb", marginTop: "10px" }}>Manage</h3>
          <p style={{ color: "#9ca3af" }}>
            View and update employee information whenever required.
          </p>
        </div>

        <div style={{ width: "200px", border: "1px solid #2563eb", padding: "10px", borderRadius: "10px", background: "#1f2937" }}>
          <h3 style={{ color: "#e5e7eb", marginTop: "10px" }}>Search</h3>
          <p style={{ color: "#9ca3af" }}>
            Quickly find employees using their ID or name.
          </p>
        </div>

        <div style={{ width: "200px", border: "1px solid #2563eb", padding: "10px", borderRadius: "10px", background: "#1f2937" }}>
          <h3 style={{ color: "#e5e7eb", marginTop: "10px" }}>Organize</h3>
          <p style={{ color: "#9ca3af" }}>
            Filter employee records to find the required information easily.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;