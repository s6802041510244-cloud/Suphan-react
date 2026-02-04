function Footer() {
  return (
    <footer style={styles.footer}>
      &copy; Department of Computer Education, KMUTNB
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "auto",
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
    fontSize: "36px",
    padding: "12px 7px",
    letterSpacing: "0.5px",
    fontWeight: "500",
  },
};

export default Footer;
