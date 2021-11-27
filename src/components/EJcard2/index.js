import styles from "./ej.module.css";
import Link from "next/link";

export default function Ejs({ name, cidade, universidade, curso, serviços }) {
  return (
    <div className={styles.aboutUsContent}>
      <div
        className={styles.imageTextWrap}
        style={{ backgroundColor: "#ffffff" }}
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
        </div>
      </div>
    </div>
  );
}
