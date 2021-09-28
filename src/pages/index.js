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
        <img src="/Pink Dots.png" className={styles.dotsMEJ}/>
          <div className={styles.textImage}>
            <div className={styles.description}>
              <h1>
                O que é o <span className={styles.coloredTitle}>Nucleo São Paulo?</span>
              </h1>
              <p>
                smcbasjbjoasb cobasocewefwef wefwfwew
                <br />
                fwefw efew basnl asas cvasca ascascasc sd asdasd asdasd asd asd
                as7
                <br /> dasdnasi pcasiocias iciajscnasijaspjxas caspcjasp cpsjcpa
                apsojcapscopasjcjasc
                <br /> ascpjaspc aspjcascas sopcjaspcnas
                <br /> pcjijios djiojs qdqijsdas djaspcnasjc jjaskcajsajs
                japjcaspcjp japo sjcjas
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
          <img src="/SaoPauloAzul.png" className={styles.saoPauloImage}/>
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
              Porque nos <span className={styles.coloredTitle}>contratar?</span>
            </h1>
            <p>
              smcbasjbjoasb cobasocewefwef wefwfwew
              <br />
              fwefwefew basnl asascvasca ascascasc sd asdasd asdasd asd asd as7
              <br /> dasdnasipcasiocias iciajscnasijaspjxas caspcjaspcpsjcpa
              apsojcapscopasjcjasc
              <br /> ascpjaspcnaspjcascas sopcjaspcnas
              <br /> pcjijiosdjiojs qdqijsdasdjaspcnasjc jjaskcajsajs
              japjcaspcjp japosjcjas
            </p>
            <div className={styles.cards}>
              <div className={styles.card}>
                <Image 
                  src='/sub4.png'
                  width={200}
                  height={200}
                  className={styles.pinkImage}
                />
                <h3>Título</h3>
                <p>dasdasid asdhasndkjas asnjdnkasnd</p>
              </div>
              <div className={styles.card}>
                <Image 
                  src='/sub3.png'
                  width={200}
                  height={200}
                />
                <h3>Título</h3>
                <p>dasdasid asdhasndkjas asnjdnkasnd</p>
              </div>
              <div className={styles.card}>
                <Image 
                  src='/sub2.png'
                  width={200}
                  height={200}
                />
                <h3>Título</h3>
                <p>dasdasid asdhasndkjas asnjdnkasnd</p>
              </div>
              <div className={styles.card}>
                <Image 
                  src='/sub1.png'
                  width={200}
                  height={200}

                />
                <h3>Título</h3>
                <p>dasdasid asdhasndkjas asnjdnkasnd</p>
              </div>
            </div>
            <div className={styles.partnerContainer}>
              <h1>Alguns <span className={styles.coloredTitle}>parceiros e mantenedores</span> do Núcleo São Paulo</h1>
              <div className={styles.itau}>
                <Image
                src='/itau.png'
                width={150}
                height={150}

                />
              </div>
              <div className={styles.partnersRow}>
                <Image
                src='/stone.png'
                width={190}
                height={100}
                />
                <Image
                src='/falconi.png'
                width={290}
                height={100}
                />
                <Image
                src='/ifood.png'
                width={200}
                height={100}
                />
                <Image
                src='/sinqia.png'
                width={150}
                height={150}
                />
              </div>
              <div className={styles.partnersRow2}>
                <Image
                src='/bat.png'
                width={190}
                height={100}
                />
                <Image
                src='/elogroup.png'
                width={190}
                height={190}
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
