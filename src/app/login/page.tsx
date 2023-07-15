import styles from "./page.module.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PortraitIcon from "@mui/icons-material/Portrait";
import LockIcon from "@mui/icons-material/Lock";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h1>Xosh keldin&apos;iz!</h1>
        <form>
          <div className={styles.input}>
            <span>
              <PortraitIcon className={styles.icon} />
            </span>
            <input type="text" />
          </div>
          <div className={styles.input}>
            <span>
              <LockIcon className={styles.icon} />
            </span>
            <input type="password" />
            <span>
              <VisibilityOffIcon className={styles.icon} />
            </span>
          </div>
          <button type="submit">Kiriw</button>
        </form>
      </div>
    </div>
  );
}
