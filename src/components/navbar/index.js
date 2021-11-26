import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Nav from "../navburger";

export default function NavBar() {
  const [width, setWidth] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (width > 751) {
    return (
      <div className={styles.all}>
        <div className={styles.navbar}>
          <h1 className={styles.title}>
            <Link href="/">
              <a>
                <Image src="/logo2.png" width={140} height={70} quality={100} alt="" priority={true}></Image>
              </a>
            </Link>
          </h1>
          <nav>
            <ul className={styles.list}>
              <li>
                <Link href="/aboutus">
                  <a className={styles.link}>Sobre Nós</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className={styles.link}>Serviços</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className={styles.link}>Contato</a>
                </Link>
              </li>
              <li>
                <Link href="/transformesp">
                  <a className={styles.link}>Transforme SP</a>
                </Link>
              </li>
              <li>
                <Link href="/empresasparceiras">
                  <a className={styles.link}>Empresas Parceiras</a>
                </Link>
              </li>
              <li><IconButton
                edge="start"
                // className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              </li>
              <li>
                <Link href="/services">
                  <a className={styles.last}>CONTRATE UMA EJ</a>
                </Link>
              </li>
              <i className="fas fa-search"></i>
            </ul>
          </nav>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.all}>
        <div className={styles.navbar}>
          <h1 className={styles.title}>
            <Link href="/">
              <a>
                <Image src="/logo2.png" width={140} height={70} quality={100} alt="" priority={true}></Image>
              </a>
            </Link>
          </h1>
          <Nav/>
        </div>
      </div>
    );
  }
}
