import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.pageTitleWrap}>
        <div className={styles.pageTitle}>
          <h1 style={{ marginLeft: "20%" }}>HOME</h1>
        </div>
      </div>
        <div className={styles.firstTopic}>
          <div className={styles.textImage}>
            <div className={styles.description}>
              <h1>
                O que é o <span className={styles.coloredTitle}>Nucleo São Paulo?</span>
              </h1>
              <p>
                Nossa missão é formar uma rede pioneira, pragmática e responsável por alcançar todo o seu potencial!
              </p>
            </div>
            <img
              src="/back2.png"
              className={styles.imageTextImage}
            />
          </div>
          <button className={styles.button}>
            <Link href="/aboutus">
              <a>Saiba Mais</a>
            </Link>
          </button>
        </div>
        <div
          className={styles.imageTextWrap}
          style={{ backgroundColor: "#FF1B81" }}
        >
          <div className={styles.mainTitle}>
            <div className={styles.textImage}>
              <img
                src="/back1.png"
                className={styles.imageTextImage}
              />
              <div className={styles.description}>
                <h1>
                  Te conectamos com a sua{" "}
                  <span className={styles.coloredTitle2}>solução</span>
                </h1>
                <p>
                  Os alunos das melhores universidades do Brasil realizando
                  projetos <br />
                  de acordo com a sua demanda
                </p>
                <button className={styles.button2}>
                  <Link href="/services">
                    <a>Encontre uma EJ</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.thirdTopic}>
          <div className={styles.description2}>
            <h1>
              Por que contratar uma <span className={styles.coloredTitle}>EJ?</span>
            </h1>
            <p>
                <br />
                Organização sem fins lucrativos responsável por dar suporte para todas as empresas juniores 
                <br />
                da rede e garantir uma vivência empresarial de qualidade para todos os que a compõe
                <br />
            </p>
            <div className={styles.cards}>
              <div className={styles.card}>
                <Image 
                  src='/sub4.jpg'
                  width={280}
                  height={200}
                  className={styles.pinkImage}
                />
              </div>
              <div className={styles.card}>
                <Image 
                  src='/sub3.jpg'
                  width={280}
                  height={200}
                />
              </div>
              <div className={styles.card}>
                <Image 
                  src='/sub2.jpg'
                  width={280}
                  height={200}
                />
              </div>
              <div className={styles.card}>
                <Image 
                  src='/sub1.jpg'
                  width={280}
                  height={200}
                />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <h1>Alguns <span className={styles.coloredTitle}>parceiros e mantenedores</span> do Núcleo São Paulo</h1>
                <Image
                src='/EmpresasParceiras.png'
                width={909}
                height={531}
                />
            </div>
          </div>
        </div>
    </div>
  );
}
