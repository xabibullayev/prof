import styles from "./page.module.scss";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.info}></div>
          <div className={styles.items}>
            <div className={styles.item}>
              <Link href="/login">
                <img src="/images/home/home-1.png" alt="" />
                <h1>Profilaktika inspektori</h1>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href="/login">
                <img src="/images/home/home-2.png" alt="" />
                <h1>Hayal-qizlar inspektori</h1>
              </Link>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <Link href="/login">
                <img src="/images/home/home-3.png" alt="" />
                <h1>Inspektor psixolog</h1>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href="/login">
                <img src="/images/home/home-3.png" alt="" />
                <h1>Probaciya</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}
