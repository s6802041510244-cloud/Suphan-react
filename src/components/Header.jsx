function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>WebTech TCT 1 DERA</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "18px",
    textAlign: "center",
  },
  title: {
    fontSize: "48px",
    margin: 0,
  },
  subtitle: {
    fontSize: "13px",
    opacity: 0.7,
    marginTop: "4px",
  },
};

export default Header;
