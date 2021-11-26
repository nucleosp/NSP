import ExpansiveCard from "../components/card";
import styles from "../styles/contact.module.css";
import Link from "next/link";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import NewsletterForm from "../components/newsletterForm";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";

export default function Contact() {
  return (
    <div className={styles.contactContent}>
      <div className={styles.pageTitleWrap}>
        <div className={styles.pageTitle}>
          <h1 style={{ marginLeft: "20%" }}>CONTATO</h1>
        </div>
      </div>

      <div className={styles.contactContentPage}>
        <div className={styles.allWidth}>
          <div className={styles.contactTexts}>
            <div >
              <div className={styles.subtitle}>
                <h2>FALE CONOSCO</h2>
              </div>
              <h3>Como foi sua experiência aqui?</h3>
              <h3>
                Se você se interessou por um de nossos serviços ou quer
                compartilhar suais ideias conosco,
                <br />
                entre em contato com a gente!
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.firstPageContainer}>
          <div className={styles.socialmediaContainer}>
            <h2 className={styles.subtitle}>NOSSAS REDES SOCIAIS</h2>

            <div className={styles.socialmediaIconsContainer}>
              <ul className={styles.socialmediaList}>
                <li className={styles.socialmediaItem}>
                  <a href="https://www.facebook.com/NucleoEJSP/" target="blank">
                    <GrFacebook /> Facebook
                  </a>
                </li>
                <li className={styles.socialmediaItem}>
                  <a href="https://www.instagram.com/nucleosaopaulo/" target="blank">
                    <GrInstagram /> Instagram
                  </a>
                </li>
                <li className={styles.socialmediaItem}>
                  <a href="https://www.linkedin.com/company/nucleo-sao-paulo/" target="blank">
                    <GrLinkedin /> Linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.firstpageImage}>
              <img
                src="/faleconosco.png"
                className={styles.imageTextImage}
              />
            </div>
          </div>

          <div className={styles.halfWidth}>
            <div className={styles.newsletterContainer}>
              <div className={styles.newsletterText}>
                <p>
                  Quer receber atualizações informativas sobre as últimas
                  notícias do Núcleo São Paulo?
                </p>
                <br />
                <br />
                <h2 className={styles.subtitle}>ASSINE NOSSA NEWSLETTER</h2>
                <br />
                <p>Receba os mais novos destaques de nossas Empresas</p>
              </div>

              <div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
