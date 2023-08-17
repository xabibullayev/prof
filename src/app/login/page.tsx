"use client";
import styles from "./page.module.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PortraitIcon from "@mui/icons-material/Portrait";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/api/auth/login", { username, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <h1>Xosh keldin&apos;iz!</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <span>
              <PortraitIcon className={styles.icon} />
            </span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <span>
              <LockIcon className={styles.icon} />
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
