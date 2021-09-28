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
        <img src="/Pink Dots.png" className={styles.dotsMEJ} />
        <div className={styles.parceriasTexts}>
          <div className={styles.subtitle}>
            <h2>PARTICIPE DO NÚCLEO SÃO PAULO</h2>
          </div>
          <p>
            Vamos ajudar sua empresa a se tornar referência entre as Empresas do
            <span className={styles.coloredTitle}>
              Movimento Empresa Júnior do Núcleo São Paulo
            </span>
            , reduzindo esforços e custos nos processos de seleção, colocando
            sua empresa em contato com uma rede de mais de 1200 jovens
            universitários que representamos. Crie engajamento e conexões
            profundas com as mentes mais brilhantes de São Paulo, de modo a
            expor a cultura de sua universidade, valores de sua empresa e o
            porquê sua empresa é o local ideal para desenvolver novas
            habilidades e{" "}
            <span className={styles.coloredTitle}>
              fazer a diferença na comunidade!
            </span>
          </p>

          <div
            className={styles.horizontalContainer}
            style={{ justifyContent: "space-around" }}
          >
            <button className={styles.button}>
              <Link href="/transformesp">
                <a className={styles.last}>Transforme SP</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.forms}>
        <Forms />
      </div>
    </div>
  );
}
