import MetaTitle from "../ui/MetaTitle";
import styles from "./Home.module.scss";
import About from "./about/About";
import Grid from "./grid/Grid";
import Circles from "../ui/Circles/Circles";

const Home = ({ links, me }) => {
  return <section className={styles.section}>
    <MetaTitle title="ParkerDev | Portfolio" />
    <div className={styles.container}>
      <About me={me} />
      <Grid links={links} />
    </div>
    <Circles />
  </section>;
};

export default Home;