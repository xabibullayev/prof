import styles from "./page.module.scss";
import Top from "@/components/top/Top";
import Bottom from "@/components/bottom/Bottom";

export default function ProfInsHome() {
  return (
    <>
      <div className={styles.profInsHome}>
        <Top />

        <div className={styles.info}>
          <div>
            <h1>Tapsirmalar:</h1>
            <span>10</span>
          </div>
          <div>
            <h1>Orinlang&apos;anlar:</h1>
            <span>10</span>
          </div>
        </div>

        <div className={styles.list}>
          <div className={styles.items}>
            <div className={styles.item}>
              <img src="/images/prof-ins-home/img-1.png" alt="" />
              <h1>Bayanlama</h1>
            </div>
            <div className={styles.item}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
              >
                <path
                  d="M46 37.7425C46 38.5525 45.8197 39.385 45.4367 40.195C45.0536 41.005 44.5578 41.77 43.9044 42.49C42.8002 43.705 41.5834 44.5825 40.2088 45.145C38.8568 45.7075 37.3921 46 35.8147 46C33.5163 46 31.0601 45.46 28.4687 44.3575C25.8773 43.255 23.2859 41.77 20.7171 39.9025C18.1257 38.0125 15.6695 35.92 13.326 33.6025C11.005 31.2625 8.90936 28.81 7.03906 26.245C5.19129 23.68 3.70406 21.115 2.62243 18.5725C1.54081 16.0075 1 13.555 1 11.215C1 9.685 1.27041 8.2225 1.81122 6.8725C2.35203 5.5 3.20831 4.24 4.4026 3.115C5.84477 1.6975 7.42213 1 9.08963 1C9.72058 1 10.3515 1.135 10.9149 1.405C11.5008 1.675 12.019 2.08 12.4246 2.665L17.6525 10.0225C18.0581 10.585 18.351 11.1025 18.5538 11.5975C18.7566 12.07 18.8693 12.5425 18.8693 12.97C18.8693 13.51 18.7116 14.05 18.3961 14.5675C18.1032 15.085 17.675 15.625 17.1342 16.165L15.4216 17.9425C15.1738 18.19 15.0611 18.4825 15.0611 18.8425C15.0611 19.0225 15.0836 19.18 15.1287 19.36C15.1963 19.54 15.2639 19.675 15.309 19.81C15.7146 20.5525 16.4131 21.52 17.4046 22.69C18.4186 23.86 19.5002 25.0525 20.672 26.245C21.8888 27.4375 23.0606 28.54 24.2549 29.5525C25.4266 30.5425 26.3956 31.2175 27.1617 31.6225C27.2744 31.6675 27.4096 31.735 27.5674 31.8025C27.7476 31.87 27.9279 31.8925 28.1307 31.8925C28.5138 31.8925 28.8067 31.7575 29.0546 31.51L30.7672 29.8225C31.3305 29.26 31.8713 28.8325 32.3896 28.5625C32.9079 28.2475 33.4261 28.09 33.9895 28.09C34.4176 28.09 34.8683 28.18 35.364 28.3825C35.8598 28.585 36.3781 28.8775 36.9414 29.26L44.4001 34.5475C44.986 34.9525 45.3916 35.425 45.6395 35.9875C45.8648 36.55 46 37.1125 46 37.7425Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
              <h1>Bayanlama</h1>
              <span className={styles.badge}>10</span>
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.item}>
              <img src="/images/prof-ins-home/img-3.png" alt="" />
              <h1>Bayanlama</h1>
              <span className={styles.badge}>10</span>
            </div>
            <div className={styles.item}>
              <img src="/images/prof-ins-home/img-4.png" alt="" />
              <h1>Bayanlama</h1>
              <span className={styles.badge}>10</span>
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.item}>
              <img src="/images/prof-ins-home/img-5.png" alt="" />
              <h1>Bayanlama</h1>
              <span className={styles.badge}>10</span>
            </div>
            <div className={styles.item}>
              <img src="/images/prof-ins-home/img-6.png" alt="" />
              <h1>Bayanlama</h1>
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.item}>
              <img src="/images/prof-ins-home/img-7.png" alt="" />
              <h1>Bayanlama</h1>
            </div>
            <div className={styles.item}>
              <img src="/images/prof-ins-home/img-8.png" alt="" />
              <h1>Bayanlama</h1>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
}
