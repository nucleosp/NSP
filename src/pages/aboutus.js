import ExpansiveCard from "../components/card";
import styles from "../styles/aboutus.module.css";
import Link from "next/link";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import { GrOptimize } from "react-icons/gr";
import { GiBrain } from "react-icons/gi";
import { FiGlobe } from "react-icons/fi";

export default function AboutUsContent() {
  return (
    <div className={styles.aboutUsContent}>
      <div className={styles.pageTitleWrap}>
        <div className={styles.pageTitle}>
          <h1 style={{ marginLeft: "20%" }}>SOBRE NÓS</h1>
        </div>
      </div>
      <div className={styles.allWidth}>
        <div className={styles.aboutUsTexts}>
          <div className={styles.subtitle}>
            <h2>O QUE SÃO AS EMPRESAS JUNIORES?</h2>
          </div>
          <p>
            As <span className={styles.coloredTitle}>Empresas Juniores </span>
            são formadas por estudantes de cursos de graduação, que desenvolvem
            projetos e serviços por valores até 70% abaixo do mercado, mas com
            muita qualidade e inovação nas entregas. O valor do projeto
            desenvolvido com uma Empresa Júnior é reinvestido na educação
            empreendedora dos jovens universitários que a compõem. Os serviços
            são das{" "}
            <span className={styles.coloredTitle}>mais diversas áreas</span>,
            como criação de sites e aplicativos, pesquisas de mercado, workshops
            e palestras, planejamento financeiro, gestão de mídias sociais,
            design de interiores, projetos de reforma e instalações, criação de
            identidade visual, otimização de processos, formulações, análises
            químicas e muitos outros.
          </p>
          <p>
            O Movimento Empresa Júnior existe no mundo todo, mas ele é muito
            forte no Brasil, contando com,{" "}
            <span className={styles.coloredTitle}>
              mais de 1400 Empresas Juniores espalhadas pelo país.
            </span>
          </p>
          <div
            className={styles.horizontalContainer}
            style={{ justifyContent: "space-around" }}
          >
            <button className={styles.button}>
              <Link href="/services" className={styles.link}>
                <a>SAIBA MAIS</a>
              </Link>
            </button>
            <button className={styles.button}>
              <Link
                href="https://brasiljunior.org.br/conheca-o-mej"
                className={styles.link}
              >
                <a>CONHEÇA O MEJ</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.imageTextWrap}
        style={{ backgroundColor: "#0D324D" }}
      >
        <div className={styles.imageTextContent}>
          <div className={styles.halfWidth}>
            <div className={styles.imageTextText}>
              <h2>
                <span className={styles.coloredTitle}> SOBRE O NSP </span>
              </h2>
              <p>
                Com a missão de formar, a partir do inconformismo, uma rede
                pioneira, pragmática e responsável por alcançar todo seu
                potencial, o Núcleo São Paulo é uma instância que promove o
                desenvolvimento de{" "}
                <span className={styles.coloredTitle}>
                  jovens universitários
                </span>{" "}
                que fazem parte do Movimento Empresa Júnior. Atualmente, a rede
                do Núcleo São Paulo conta com{" "}
                <span className={styles.coloredTitle}>
                  59 Empresas Juniores, de 21 Instituições de Ensino Superior
                </span>{" "}
                vindas de 12 cidades da Região Metropolitana de São Paulo, Vale
                do Paraíba, Litoral Norte do estado e Baixada Santista. Em 2020,
                as Empresas Juniores da rede do Núcleo São Paulo conseguiram
                realizar mais de 1500 projetos, impactando cada vez mais a
                sociedade a partir das suas soluções e desenvolvendo mais de
                1400 jovens universitários.
              </p>
            </div>
          </div>
          <div className={styles.halfWidth}>
            <img src="/FotoEquipe.png" className={styles.imageTextImage} />
          </div>
        </div>
      </div>
      <div className={styles.allWidth}>
        <div className={styles.aboutUsTexts}>
          <div className={styles.subtitle}>
            <h2>Jeito NSP de agir</h2>
          </div>
          <p>
            Primeiro, precisamos ter consciência do privilégio que temos por
            estar na nossa região. Essa consciência gera em nós, o inconformismo
            por não nos contentarmos a entregar menos que o nosso máximo. Porém,
            não basta entregarmos muito sem foco em resultado. Para isso,
            encaramos as adversidades com{" "}
            <span className={styles.coloredTitle}>protagonismo</span> , e assim
            conseguimos servir de exemplo de constante revolução, conforme nossa
            história. Por fim, tudo isso pede{" "}
            <span className={styles.coloredTitle}>resiliência</span> , porque
            vamos errar ao longo desse caminho, mas nenhum erro vai fazer com
            que desistamos
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.allWidth}>
          <div className={styles.aboutUsTexts80}>
            <div className={styles.subtitle}>
              <h2>MISSÃO</h2>
            </div>
            <p>
              Formar, a partir do inconformismo, uma rede pioneira, pragmática e
              responsável por alcançar todo o seu potencial
            </p>
          </div>
        </div>
        <div className={styles.allWidth} style={{ marginBottom: "2rem" }}>
          <div className={styles.aboutUsTexts80}>
            <div className={styles.subtitle}>
              <h2>VISÃO</h2>
            </div>
            <p>
              Ser agente de integração do ecossistema fomentando uma rede
              protagonista que transforma o potencial da região em resultado
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.imageTextWrap}
        style={{ backgroundColor: "#FF1B81" }}
      >
        <div className={styles.imageTextContent}>
          <div className={styles.halfWidth}>
            <img
              src="/TorcendComBackground.png"
              className={styles.imageTextImage}
            />
          </div>
          <div className={styles.halfWidth}>
            <div
              className={(styles.imageTextText, styles.verticalContainer)}
              style={{ color: "#000" }}
            >
              <h1>Valores</h1>
              <div className={styles.horizontalContainer}>
                <div className={styles.verticalContainer}>
                  <GiBrain size='36px' />
                  <p><b>CONSCIÊNCIA</b></p>
                </div>
                <div className={styles.verticalContainer}>
                  <FiGlobe size='36px' />
                  <p><b>INCONFORMISMO</b></p>
                </div>
              </div>
              <div className={styles.horizontalContainer2}>
                <div className={styles.verticalContainer}>
                  <GrOptimize size='36px' />
                  <p><b>FOCO EM RESULTADOS</b></p>
                </div>
                <div className={styles.verticalContainer}>
                  <AccessibilityIcon size='36px' />
                  <p><b>PROTAGONISMO</b></p>
                </div>
              </div>
              <div className={styles.horizontalContainer2}>
                <div className={styles.verticalContainer}>
                  <AccessibilityIcon size='36px' />
                  <p><b>RESILIÊNCIA</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.valuesContent}>
        <div className={styles.allWidth}>
          <div>
            <h2 className={styles.title}>DIRETORIAS</h2>
          </div>
          <div className={styles.cardsDisplay}>
            <div>
            <ExpansiveCard
                Department="Presidência Executiva"
                Director=""
                smallText="Responsável por representar a organização perante o ecossistema, gerenciando assessoria de imprensa,propondo iniciativas públicas de apoio ao MEJ e facilitando o relacionamento com Instituições de Ensino Superior. Além disso, gera oportunidade de conexão entre a rede e grandes empresas parceiras, cujo objetivo é atrair grandes talentos do MEJ. "
              ></ExpansiveCard>
            </div>
            <div>
              <ExpansiveCard
                Department="Vice-Presidência"
                Director=""
                smallText="Acaba sendo dividida entre funções de gente, gestão e operações. Fica responsável pela atração, seleção e experiência do time do NSP, além do planejamento financeiro e fluxo de caixa da organização. Por fim, olha para todo o planejamento, monitoramento e debriefing da estratégia organizacional. "
              ></ExpansiveCard>
            </div>
          </div>
          <div className={styles.cardsDisplay}>
            <div>
              <ExpansiveCard
                Department="Expansão"
                Director=""
                smallText="Desenvolvimento e suporte de programas para as empresas juniores federadas para torná-las cada vez mais maduras, criação de estímulos para as empresas juniores se tornarem conectadas, além do monitoramento e inteligência de dados da rede federada."
              ></ExpansiveCard>
            </div>
            <div>
              <ExpansiveCard
                Department="Desenvolvimento"
                Director=""
                smallText="Desenvolvimento e suporte de programas para as empresas juniores federadas para torná-las cada vez mais maduras, criação de estímulos para as empresas juniores se tornarem conectadas, além do monitoramento e inteligência de dados da rede federada."
              ></ExpansiveCard>
            </div>
          </div>
          <div className={styles.cardsDisplay}>
            <div>
              <ExpansiveCard
                Department="Formação Empreendedora"
                Director=""
                smallText="Planejamento, articulação e execução de campanhas e eventos, além de toda coordenação geral do Evento Regional do NSP. Além disso, fica responsável pelo gerenciamento das redes sociais e criação de estímulos que cumpram o papel de garantir toda vivência empresarial de qualidade para todos os empresários juniores da rede."
              ></ExpansiveCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
