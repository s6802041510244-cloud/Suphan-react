import profile from "../image/1.jpg";

function Student() {
  return (
    <main style={styles.card}>
      <div style={styles.profileWrapper}>
        <img src={profile} alt="profile" style={styles.image} />
      </div>
      <h2 style={styles.name}>Suphan Rueangsombun</h2>
      <p style={styles.nick}>Mai</p>
      <div style={styles.infoBox}>
        <p style={styles.text}><span style={styles.label}>ID:</span> 6802041510244</p>
        <p style={styles.text}><span style={styles.label}>IG:</span> m.mai_s</p>
      </div>
    </main>
  );
}

const styles = {
  card: {
    background: "linear-gradient(135deg, #f2acf8 0%, #a1c4fd 100%)",
    width: "370px",
    margin: "60px auto",
    padding: "32px 28px 28px 28px",
    borderRadius: "24px",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(80,80,180,0.18)",
    fontFamily: 'Segoe UI', 
    border: "1.5px solid #e0e0e0",
    transition: "box-shadow 0.3s",
  },
  profileWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "18px",
    background: "linear-gradient(120deg, #fff6e0 0%, #f2acf8 100%)",
    borderRadius: "50%",
    padding: "8px",
    boxShadow: "0 2px 12px rgba(160,160,160,0.10)",
    width: "220px",
    height: "220px",
    margin: "0 auto 18px auto",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #fff",
    boxShadow: "0 2px 12px rgba(160,160,160,0.10)",
    transition: "transform 0.3s",
  },
  name: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#4b2e83",
    marginBottom: "6px",
    letterSpacing: "1px",
    textShadow: "0 1px 2px #fff6e0",
  },
  nick: {
    fontSize: "1.3rem",
    color: "#7c3aed",
    marginBottom: "18px",
    fontWeight: "500",
    letterSpacing: "0.5px",
  },
  infoBox: {
    background: "rgba(255,255,255,0.7)",
    borderRadius: "12px",
    padding: "16px 0 8px 0",
    boxShadow: "0 2px 8px rgba(160,160,160,0.07)",
    marginTop: "8px",
  },
  text: {
    fontSize: "1.1rem",
    margin: "8px 0",
    color: "#333",
    fontWeight: "400",
    letterSpacing: "0.5px",
  },
  label: {
    fontWeight: "600",
    color: "#4b2e83",
    marginRight: "8px",
    fontSize: "1.1rem",
  },
};

export default Student;
