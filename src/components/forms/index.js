import { useState } from "react";
import styles from "./forms.module.css";

export default function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <forms>
      <div className={styles.formsContainer}>
        <h1><span className={styles.span}>Seja uma</span> empresa parceira</h1>
        <h4 className={styles.text}>
          {" "}
        </h4>
        <div className={styles.formWrapper}>
          <div className={styles.firstRow}>
            <input
              className={styles.input}
              placeholder="Nome da Empresa"
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
        <button className={styles.submit}>Enviar</button>
      </div>
    </forms>
  );
}