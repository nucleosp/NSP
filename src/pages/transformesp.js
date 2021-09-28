import ExpansiveCard from "../components/card";
import styles from "../styles/transformesp.module.css";
import Link from "next/link";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

export default function TransformeSP() {
  return (
    <div className={styles.transformeContent}>
      <div className={styles.pageTitleWrap}>
        <div className={styles.pageTitle}>
          <h1 style={{ marginLeft: "20%" }}>TransformeSP</h1>
        </div>
      </div>
      <div className={styles.allWidth}>
        <img src="/Pink Dots.png" className={styles.dotsMEJ} />
        <div className={styles.transformeTexts}>
          <div className={styles.subtitle}>
            <h2>A Plataforma</h2>
          </div>
          <p>
            Diante de uma crise sem precedentes o Movimento Empresa Júnior
            paulista reafirma seu compromisso em construir um país melhor dia
            após dia. Em um momento tão difícil nossa postura empreendedora nos
            leva a ter papel ativo nas transformações necessárias. Nossas
            empresas juniores se colocam como agentes de mudança para enfrentar
            a crise causada pelo novo coronavírus e{" "}
          </p>
          <div
            className={styles.horizontalContainer}
            style={{ justifyContent: "space-around" }}
          >
            <button className={styles.button}>
              <Link
                href="https://transformesp.fejesp.org.br/"
                className={styles.link}
              >
                <a>Página do TransformeSP</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
