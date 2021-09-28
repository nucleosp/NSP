import { useState } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { pink } from "@material-ui/core/colors";
import Link from "next/link";

import emailjs from "emailjs-com";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = () => {
    console.log("OII!");
    var templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(
        "service_n3spemq",
        "template_9sx6dzb",
        templateParams,
        "user_eabFs5j40Ov9S4LXBceYh"
      )
      .then(
        function (response) {
          setSubmitMessage(
            "Mensagem enviada com sucesso! Já te responderemos."
          );
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <footer>
      <div className={styles.footerContainer}>
        <h3>Entre em contato com o Núcleo São Paulo</h3>
        <h1>Precisa de ajuda?</h1>
        <h4>
          Seja qual for seu problema, uma de nossas Empresas será sua solução
        </h4>
        <div className={styles.formWrapper}>
          <div className={styles.firstRow}>
            <input
              className={styles.input}
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
            />
            <input
              className={styles.input}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
            />
            <input
              className={styles.input}
              placeholder="Telefone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
            />
          </div>
          <textarea
            placeholder="Mensagem"
            className={styles.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className={styles.submit}>
          Enviar
        </button>
        {submitMessage ? <p>{submitMessage}</p> : null}
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.footerWrapper}>
          <Image
            src="/LogoFooter.png"
            width={170}
            height={220}
            priority={true}
          ></Image>
        </div>
        <div className={styles.contact}>
          <div className={styles.title}>
            <h2>Contatos</h2>
          </div>
          <div className={styles.iconRows}>
            <PhoneOutlinedIcon style={{ color: pink[500] }} />
            <div className={styles.iconContent}>
              <h5>(11)99323929392</h5>
            </div>
          </div>
          <div className={styles.iconRows}>
            <LocationOnOutlinedIcon style={{ color: pink[500] }} />
            <div className={styles.iconContent}>
              <h5>
                wjenfjbjfbjksdbfjksdbjkjbfjkbdsjkfb
                <br />
                jksdbfjksdbfjkdsbkjdsbfkdsb
              </h5>
            </div>
          </div>
          <div className={styles.iconRows}>
            <EmailOutlinedIcon style={{ color: pink[500] }} />
            <div className={styles.iconContent}>
              <h5>amandaazedo@nsp.com</h5>
            </div>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.title}>
            <h2>Redes sociais</h2>
          </div>
          <div className={styles.iconRows}>
            <div className={styles.icons}>
              <Link href="/transformesp">
                <FacebookIcon fontSize="large" />
              </Link>
            </div>
            <div className={styles.icons}>
              <Link href="/transformesp">
                <InstagramIcon fontSize="large" />
              </Link>
            </div>
            <div className={styles.icons}>
              <Link href="/transformesp">
                <LinkedInIcon fontSize="large" />
              </Link>
            </div>
          </div>
          <button className={styles.button}>
            <Link href="/contact">
              <a>Contato</a>
            </Link>
          </button>
        </div>
      </div>
    </footer>
  );
}
