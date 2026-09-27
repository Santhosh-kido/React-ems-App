import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function Employees() {

  const [employees, setEmployees] = useState([]);

  function getEmployees() {
    fetch("http://localhost:8080/get-employees")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch employees");
        }
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div style={{ marginTop: "40px" }}>
      <h1 style={{ fontSize: "35px" }}>All Employees</h1>
      <table style={{ marginLeft: '115px', borderCollapse: 'collapse', width: '900px', boxShadow: '0 4px 10px rgba(0,0,0,0.4)' }} border="1">
        <thead style={{ background: '#2563eb' }}>
          <tr>
            <th style={{ width: '20%', padding: '10px', color: 'white' }}>ID</th>
            <th style={{ width: '35%', padding: '10px', color: 'white' }}>Name</th>
            <th style={{ padding: '10px', color: 'white' }}>Dept</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={emp.id} style={{ background: i % 2 === 0 ? '#1f2937' : '#111827' }}>
              <td style={{ padding: '10px', color: '#e5e7eb' }}>{emp.id}</td>
              <td style={{ padding: '10px', color: '#e5e7eb' }}>{emp.name}</td>
              <td style={{ padding: '10px', color: '#e5e7eb' }}>{emp.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Employees;