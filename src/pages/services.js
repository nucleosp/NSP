import { StylesProvider } from "@material-ui/core";
import { useState } from "react";
import styles from "../styles/services.module.css";

import Link from "next/link";

export default function Services() {
  return (
    <div className={styles.servicesContent}>
      <div className={styles.pageTitleWrap}>
        <div className={styles.pageTitle}>
          <h1 style={{ marginLeft: "20%" }}>SERVIÇOS</h1>
        </div>
      </div>
      <div className={styles.allWidth}>
        <img src="/Pink Dots.png" className={styles.dotsMEJ} />
        <div className={styles.servicesTexts}>
          <div className={styles.subtitle}>
            <h2>COMO UMA EMPRESA JÚNIOR PODE TE AJUDAR?</h2>
          </div>
          <p>
            Uma empresa júnior é uma organização sem fins lucrativos, formada e
            gerida por{" "}
            <span className={styles.coloredTitle}>
              estudantes universitários voluntários
            </span>{" "}
            de diversos cursos que buscam colocar em prática os conhecimentos
            adquiridos em salas de aula por meio da vivência empresarial e da
            realização de projetos reais. Vale ressaltar que tais estudantes
            estão sob a orientação de profissionais atuantes na área. Além
            disso, uma vez que estas empresas não possuem fins lucrativos, todo
            o dinheiro arrecadado é investido na própria empresa e na
            capacitação dos membros.
          </p>
          <p>
            Atualmente, o Brasil é o país com maior número de empresas júniores
            no mundo, apresentando um movimento que cresce exponencialmente a
            cada ano, impactando o mercado nacional e formando cada vez mais
            empresários capazes e comprometidos a transformar o Brasil.
          </p>
        </div>
      </div>

      <div className={styles.allWidth}>
        <div className={styles.servicesTexts}>
          <div className={styles.subtitle}>
            <h2>TE CONECTAMOS COM A SOLUÇÃO</h2>
          </div>
          <p>
            Um dos mais importantes diferenciais das empresas juniores é que
            elas são capazes de oferecer um{" "}
            <span className={styles.coloredTitle}>
              atendimento personalizado{" "}
            </span>{" "}
            e completo para o seu negócio. E isso é muito importante, pois a
            qualidade dos serviços prestados por outras empresas ao seu negócio
            tem impacto direto sobre a qualidade na oferta dos seus produtos e
            serviços ao seu cliente.
          </p>
          <p>
            Este atendimento mais próximo é possível graças à estrutura e aos
            objetivos particulares de uma empresa júnior. Com um tamanho
            reduzido e um corpo profissional formado por pessoas cujo objetivo é
            desenvolver suas capacidades técnicas, este tipo de organização
            valoriza muito mais o contato com cada cliente do que uma empresa
            comum.
          </p>
          <p>
            Com isso, o acompanhamento do seu projeto será de perto em todos os
            estágios, por uma equipe engajada e{" "}
            <span >
              {" "}
              alinhada com suas metas{" "}
            </span>
            e necessidades específicas. Desta forma, o serviço prestado tende a
            ser mais satisfatório e oferecer resultados mais condizentes com as
            expectativas do seu negócio.
          </p>
        </div>
      </div>
      <div className={styles.allWidth}>
        <div className={styles.servicesTexts}>
          <div className={styles.subtitle}>
            <h2>EXEMPLOS DE AREAS E EMPRESAS</h2>
          </div>

          <div>
            <button className={styles.button}>
              <Link href="/ejtecnologia" className={styles.link}>
                <a>Tecnologia</a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link href="/ejarquitetura" className={styles.link}>
                <a>Arquitetura</a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link href="/ejciencia" className={styles.link}>
                <a>Ciência</a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link href="/ejcomunicacao" className={styles.link}>
                <a>Comunicação</a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link href="/ejdireito" className={styles.link}>
                <a>Direito</a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link href="/ejengenharia" className={styles.link}>
                <a>Engenharia</a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link href="/ejgestao" className={styles.link}>
                <a>Gestão</a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link href="/ejrelacoesinternacionais" className={styles.link}>
                <a>Relações Internacionais</a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link href="/ejsaude" className={styles.link}>
                <a>Saúde</a>
              </Link>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
