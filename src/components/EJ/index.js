import styles from "./ej.module.css";
import Link from "next/link";

export default function Ejs({
  name,
  imgPath,
  cidade,
  curso,
  universidade,
  serviços,
}) {
  return (
    <div className={styles.aboutUsContent}>
      <div
        className={styles.imageTextWrap}
        style={{ backgroundColor: "#0D324D" }}
      >
        <div className={styles.imageTextContent}>
          <div className={styles.halfWidth}>
            <div className={styles.imageTextText}>
              <h2>
                <span className={styles.coloredTitle}>{name}</span>
              </h2>
              <p>Cidade: {cidade}</p>
              <p>Universidade: {universidade}</p>
              <p>Cursos: {curso}</p>
              <p>Serviços: {serviços}</p>
            </div>
          </div>
          <div className={styles.halfWidth}>
            <img src={imgPath} className={styles.imageTextImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
