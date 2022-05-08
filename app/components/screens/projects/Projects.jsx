import Circles from "../../ui/cicrcles/Circles";
import MetaTitle from "../../ui/MetaTitle";
import Grid from "./grid/Grid";
import styles from "./Projects.module.scss";
import Description from "./description/Description";

const Projects = ({ links }) => {
  return (
    <section className={styles.section}>
      <MetaTitle title="ParkerDev | Проекты где работал" />
      <div className={styles.container}>
        <Description />
        <Grid links={links} />
      </div>
      <Circles />
    </section>
  );
};


export default Projects;
