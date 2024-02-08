import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import { UserAge } from "./hooks/state";

import "./index.css";
import { Score } from "./components/conter";
import styles from "./components/main.module.css";
import { Effect } from "./hooks/effect";
import { Galary } from "./hooks/galary";
// import { Data } from "./hooks/data";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    {/* <App /> */}

    <h2
      style={{
        textAlign: "center",
      }}
    >
      Quiz Game
    </h2>
    <div className={styles.score_container}>
      <Score teamName="A" counterName="Score" />
      <Score teamName="B" counterName="Score" />
    </div>
    <UserAge />

    <Effect />
    {/* <Data /> */}

    <Galary />
  </>
);
