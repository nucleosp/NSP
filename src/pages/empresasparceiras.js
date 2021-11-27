import styles from "../styles/parceiros.module.css";
import Link from "next/link";
import Forms from "../components/forms/index";

export default function AboutUsContent() {
  return (
    <div className={styles.parceriasContent}>
      <div className={styles.pageTitleWrap}>
        <div className={styles.pageTitle}>
          <h1 style={{ marginLeft: "20%" }}>SEJA UM PARCEIRO</h1>
        </div>
      </div>
      <div className={styles.allWidth}>
        <div className={styles.parceriasTexts}>
          <div className={styles.subtitle2}>
            <h2>FORTALECIMENTO DE MARCA EMPREGADORA</h2>
          </div>
          <p>
            Criamos conexões profundas com os talentos mais brilhantes da{" "}
            <span className={styles.coloredTitle}>
              rede São Paulo
            </span>
            {" "}e garantimos que a sua empresa encontre os candidatos com o fit cultural perfeito. 
          </p>
          <p>
            Venha desenvolver ações com a gente, tornando a atração e seleção muito mais fácil e divertida!
          </p>
          <div
            className={styles.horizontalContainer}
            style={{ justifyContent: "space-around" }}
          >
          </div>
        </div>
      </div>
      <div className={styles.forms}>
        <Forms />
      </div>
    </div>
  );
}
