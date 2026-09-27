import { Link } from 'react-router-dom';
import "../CSS/header.css";

function Header() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#E8F0FE",
                borderRadius: "5px",
                padding: "10px 20px",
            }}
        >
            <p
                style={{
                    background: "black",
                    color: "white",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "18px",
                    margin: 0,
                }}
            >
                EMS
            </p>
            <h2 style={{ margin: 0 }}>
                <Link to="/" style={{ color: "black", textDecoration: "none", fontSize: "18px"}}>Home</Link>
            </h2>
            <h2 style={{ margin: 0 }}>
                <Link to="/ems" style={{ color: "black", textDecoration: "none", fontSize: "18px" }}>Employee Management</Link>
            </h2>
            <h2 style={{ margin: 0 }}>
                <Link to="/employees" style={{ color: "black", textDecoration: "none", fontSize: "18px" }}>Employees</Link>
            </h2>
            <h2 style={{ margin: 0 }}>
                <Link to="/contact" style={{ color: "black", textDecoration: "none", fontSize: "18px" }}>Contact</Link>
            </h2>
        </nav>
    );
}

export default Header;
