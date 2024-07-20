import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Hello, Styled React 2024-05!!!</h1>
      <h2>ENV test: {process.env.TEST}</h2>
    </div>
  );
};

export default Home;
