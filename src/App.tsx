import Header from "./components/Header/Header";
import MainRoute from "./navigation/MainRoute";

import { ToastContainer } from "react-toastify";

import styles from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />

      <main className={styles.wrapper}>
        <MainRoute />
      </main>
    </>
  );
}

export default App;
