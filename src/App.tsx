import Header from "./components/Header/Header";
import MainRoute from "./navigation/MainRoute";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <MainRoute />
      </main>
    </>
  );
}

export default App;
