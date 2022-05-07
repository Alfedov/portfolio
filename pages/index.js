import Home from "../src/home/Home";
import axios from "axios";

export default function HomePages(props) {
  return <Home />;
}
const API_URL = "http://localhost:3000/api";
export const getStaticProps = async () => {
  const links = await axios.get(`${API_URL}/links`).then(({ data }) => data);
  const me = await axios.get(`${API_URL}/me`).then(({ data }) => data);

  return {
    props: {
      links, me
    },
    revalidate: 60
  };
};