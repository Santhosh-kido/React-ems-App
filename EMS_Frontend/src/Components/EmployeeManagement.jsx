import { useState, useEffect } from "react";
import "../CSS/EmployeeManagement.css";

function EmployeeManagement() {


  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState('');

  const [addName, setAddName] = useState('');
  const [addId, setAddId] = useState('');
  const [addDept, setAddDept] = useState('');

  const [removeId, setRemoveId] = useState('');

  const [updateName, setUpdateName] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [updateDept, setUpdateDept] = useState('');

  const [filterType, setFilterType] = useState("all");
  const [filtered, setFiltered] = useState([]);


  // Fetch employe --
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
        setFiltered(data);
      })
      .catch((err) => {
        alert("Failed to load resources..!");
      });
  }
  useEffect(() => {
    getEmployees();
  }, [])

  //Add employee --
  const add = (obj) => {
    if (obj.id === '' || obj.name === '' || obj.dept === '') {
      alert("Please enter all values");
      return;
    }
    const exists = employees.some((emp) => emp.id === Number(obj.id));
    if (exists) {
      alert("ID already exists");
      return;
    }
    fetch("http://localhost:8080/add-employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Number(obj.id), name: obj.name, dept: obj.dept }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((msg) => { throw new Error(msg); });
        }
        return res.text();
      }).then((msg) => {
        alert(msg);
        getEmployees();
        setAddDept(''); setAddId(''); setAddName('');
      })
      .catch((err) => {
        alert(err.message);
      })

  };

  const removeUserById = (id) => {
    const exists = employees.some((emp) => emp.id === Number(id));
    if (!exists) {
      alert("No employee with that ID");
      return;
    }
    fetch(`http://localhost:8080/remove-by-id?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((msg) => { throw new Error(msg); });
        }
        return res.text();
      }).then((msg) => {
        alert(msg);
        getEmployees();
        setRemoveId('');
      })
      .catch((err) => {
        alert(err.message)
      })
  };

  const clear = () => {
    setEmployees([]);
    setFiltered([]);
  };

  const UpdateEmployee = (obj) => {
    const exists = employees.some((emp) => emp.id === Number(obj.id));
    if (!exists) {
      alert("No employee with that ID");
      return;
    }
    fetch("http://localhost:8080/update-employee", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: Number(obj.id), name: obj.name, dept: obj.dept }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((msg) => { throw new Error(msg); });
        }
        return res.text();
      })
      .then((msg) => {
        alert(msg);
        getEmployees();
        setUpdateDept(''); setUpdateId(''); setUpdateName('');
      })
      .catch((err) => {
        alert(err.message);
      })
  };

  const handleFilter = (value) => {
    setFilterType(value);

    if (value === "even") {
      setFiltered(employees.filter((emp) => emp.id % 2 === 0));
    } else if (value === "odd") {
      setFiltered(employees.filter((emp) => emp.id % 2 !== 0));
    } else if (value === "all") {
      setFiltered(employees);
    } else {
      setFiltered(employees);
    }
  };

  const inputStyle = {
    borderRadius: '3px',
    width: '180px',
    height: '30px',
    fontSize: '15px',
    padding: '0 10px',
    boxSizing: 'border-box'
  };



  return (
    <div>
      <h2 style={{ marginTop: '25px', fontSize: '32px' }}>Employee Management System</h2>

      {/* Add Employee */}
      <div style={{ display: 'flex', width: '850px', gap: '30px', marginTop: '40px', marginLeft: '135px' }}>
        <input type="number" value={addId} placeholder="Id" style={inputStyle} onChange={(e) => { setAddId(e.target.value) }} />
        <input type="text" value={addName} placeholder="Name" style={inputStyle} onChange={(e) => { setAddName(e.target.value) }} />
        <input type="text" value={addDept} placeholder="Department" style={inputStyle} onChange={(e) => { setAddDept(e.target.value) }} />
        <button className="employee-btn"
          onClick={() => { add({ id: addId, name: addName, dept: addDept }); }}>add Employee</button>
      </div>

      {/* Update Employee */}
      <div style={{ display: 'flex', width: '850px', gap: '30px', marginTop: '30px', marginLeft: '135px' }}>
        <input type="number" value={updateId} placeholder="Target Id" style={inputStyle} onChange={(e) => { setUpdateId(e.target.value) }} />
        <input type="text" value={updateName} placeholder="Updated Name" style={inputStyle} onChange={(e) => { setUpdateName(e.target.value) }} />
        <input type="text" value={updateDept} placeholder="Updated Department" style={inputStyle} onChange={(e) => { setUpdateDept(e.target.value) }} />
        <button className="employee-btn"
          onClick={() => { UpdateEmployee({ name: updateName, dept: updateDept, id: updateId }); }}>Update Employee</button>
      </div>

      {/* Remove Employee */}
      <div style={{ display: 'flex', width: '430px', gap: '30px', marginTop: '30px', marginLeft: '49.5%' }}>
        <input type="number" value={removeId} placeholder="Target Id" style={inputStyle} onChange={(e) => { setRemoveId(Number(e.target.value)) }} />
        <button className="employee-btn"
          onClick={() => { removeUserById(removeId); }}>Remove Employee</button>
      </div>

      {/* Filter row */}
      <div style={{ display: 'flex', gap: '30px', marginLeft: '30%', marginTop: '30px', marginBottom: '20px', alignItems: 'center' }}>

        <div style={{ width: '185px', display: 'flex', justifyContent: 'flex-end' }}>
          {filterType === "ByName" && (
            <input
              type="text"
              placeholder="Enter Name"
              style={inputStyle}
              onChange={(e) => {
                const value = e.target.value;
                setFiltered(employees.filter((emp) =>
                  emp.name.toLowerCase().startsWith(value.toLowerCase())
                ));
              }}
            />
          )}
          {filterType === "ByDept" && (
            <input
              type="text"
              placeholder="Enter Department"
              style={inputStyle}
              onChange={(e) => {
                const value = e.target.value;
                setFiltered(employees.filter((emp) =>
                  emp.dept.toLowerCase().startsWith(value.toLowerCase())
                ));
              }}
            />
          )}
        </div>

        <select
          className="employee-btn"
          style={{ borderRadius: '3px', color: 'white', width: '185px', height: '34px', fontSize: '16px', background: '#2563eb' }}
          value={filterType}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="all">All Employees</option>
          <option value="even">Filter By Even ID's </option>
          <option value="odd">Filter By Odd ID's </option>
          <option value="ByName">Filter By Name</option>
          <option value="ByDept">Filter By Department</option>
        </select>

        <button

          className="clear-btn"
          onClick={clear}
        >
          Clear
        </button>
      </div>

      {/* Employee Details */}
      <table style={{ marginLeft: '135px', marginTop: '28px', tableLayout: 'fixed', borderCollapse: 'collapse', width: '850px', boxShadow: '0 4px 10px rgba(0,0,0,0.4)' }} border="1">
        <thead style={{ background: '#2563eb' }}>
          <tr>
            <th style={{ width: '18%', padding: '8px', color: 'white' }}>ID</th>
            <th style={{ width: '32%', padding: '8px', color: 'white' }}>Name</th>
            <th style={{ padding: '8px', color: 'white' }}>Dept</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((emp, i) => (
            <tr key={emp.id} style={{ background: i % 2 === 0 ? '#1f2937' : '#111827' }}>
              <td style={{ padding: '8px', color: '#e5e7eb' }}>{emp.id}</td>
              <td style={{ padding: '8px', color: '#e5e7eb' }}>{emp.name}</td>
              <td style={{ padding: '8px', color: '#e5e7eb' }}>{emp.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeManagement;