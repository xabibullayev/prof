import styles from "./page.module.scss";

import Link from "next/link";
import Bottom from "@/components/bottom/Bottom";

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
    </div>
  );
}
