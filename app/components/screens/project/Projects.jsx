import styles from "../home/Home.module.scss";
import MetaTitle from "../../ui/MetaTitle";
import Circles from "../../ui/cicrcles/Circles";
import Grid from "./grid/Grid";

const Projects = (project) => {
  return (
    <section className={styles.section}>
      <MetaTitle title="ParkerDev | Мои работы" />
      <div className={styles.container}>
        <Grid links={project} />
      </div>
      <Circles />
    </section>
  );
};

export default Projects;