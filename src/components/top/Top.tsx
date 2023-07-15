import styles from "./Top.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";

export default function Top() {
  return (
    <div className={styles.top}>
      <div>
        <KeyboardBackspaceIcon />
      </div>
      <div>
        <SearchIcon />
      </div>
    </div>
  );
}
