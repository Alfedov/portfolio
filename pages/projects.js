import axios from "axios";
import { API_URL } from "../app/constants";
import Projects from "../app/components/screens/project/Projects";

export default function ProjectPage(props) {
  return <Projects {...props} />;
}

export const getStaticProps = async () => {
  const project = await axios.get(`${API_URL}/projects`).then(({ data }) => data);

  return {
    props: {
      project
    },
    revalidate: 60
  };
};
