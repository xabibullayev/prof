import Link from "next/link";
import styles from "./Bottom.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

export default function Bottom() {
  return (
    <div className={styles.bottom}>
      <div className={styles.left}>
        <Link href="/">
          <span>
            <HomeIcon />
          </span>
          <h1>Home</h1>
        </Link>
      </div>
      <div className={styles.right}>
        <Link href="/">
          <span>
            <PersonIcon />
          </span>
          <h1>Profile</h1>
        </Link>
      </div>
    </div>
  );
}
