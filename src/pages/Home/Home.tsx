import { Suspense, lazy } from "react";
import styles from "./home.module.css";
import { Loader } from "@cars/uikit";

const Home = () => {
  const RemoteComponent = lazy(() => import("remote2/Test"));
  console.log("RemoteComponent:", RemoteComponent);

  return (
    <div className={styles.homeContainer}>
      <h1>Hello, Styled React 2024-05!!!</h1>
      <h2>ENV test: {process.env.TEST}</h2>
      <Suspense fallback={<Loader size="lg" />}>
        <RemoteComponent />
      </Suspense>
    </div>
  );
};

export default Home;
