import { useOutside } from "../../hooks/useOutside";
import styles from "./Buttons.module.scss";

const Buttons = () => {
  const { isShow, setIsShow, ref } = useOutside(false);

  return <div className={styles.parent} ref={ref}>
    <button onClick={() => setIsShow(!isShow)} className={}>
      <span>Обо мне</span>
    </button>
  </div>;

};

export default Buttons;