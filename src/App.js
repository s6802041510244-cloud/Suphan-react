import Header from "./components/Header";
import Student from "./components/Student";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <Student />
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
    fontFamily: "system-ui, sans-serif",
  },
};

export default App;
