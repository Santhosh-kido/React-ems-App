function Contact() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1 style={{ fontSize: "35px" }}>Contact Us</h1>

      <div style={{
        width: "350px",
        margin: "50px auto",
        padding: "35px",
        borderRadius: "10px",
        background: "#1f2937",
        border: "1px solid #2563eb",
      }}>
        <h3 style={{ color: "#e5e7eb", fontWeight: "normal" }}>
          📧 Email: <span style={{ color: "#60a5fa" }}>example@gmail.com</span>
        </h3>
        <h3 style={{ marginTop: '20px', color: "#e5e7eb", fontWeight: "normal" }}>
          📞 Phone: <span style={{ color: "#60a5fa" }}>+91 98765 43210</span>
        </h3>
      </div>
    </div>
  );
}
export default Contact;