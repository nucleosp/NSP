import Link from "next/link";
import EJ from "../components/EJcard/index";
import EJ1 from "../components/EJcard1/index";
import EJ2 from "../components/EJcard2/index";
import style from "../components/EJcard1/ej.module.css";

export default function EjSaude() {
  return (
    <div>
      <div className={style.row}>
        <EJ
          name="EEFUSP jr"
          cidade="São Paulo."
          curso="Licenciatura em Educação Física,
          Bacharelado em Educação Física e
          Bacharelado em Esporte."
          universidade="USP."
          serviços="Ginástica Laboral, Avaliação e
          Treinamento Físico, Gestão de Mídias Sociais
          Esportivas, Plano de Marketing Esportivo,
          Organização de Eventos Recreacionais e Esportivos."
        ></EJ>
        <EJ1
          name="EJAV"
          cidade="São Paulo."
          curso="Medicina Veterinária."
          universidade="USP."
          serviços="Consultoria para clínicas veterinárias e hotéis pet (controle de
            qualidade e fidelização, comportamento e bem estar animal, diagnóstico de
            instalação, gestão de pessoas, financeira e plano de marketing) Nutrição pet
            (desenvolvimento, análise e reformulação de receitas para dieta caseiras de
            cães e gatos, consultoria para a produção e comercialização de produtos de
            alimentação pet), Regulamentação,"
        ></EJ1>
      </div>
      <div className={style.row}>
        <EJ1
          name="FARMA"
          cidade="São Paulo."
          curso="Farmácia."
          universidade="USP."
          serviços="Análise microbiológica, tabela e rotulagem nutricional,
          análises físico químicas (alimentos, cosméticos e medicamentos),
          análise do tempo de validade de um alimento, análise de aceitabilidade
          de alimento, desenvolvimento de formas farmacêuticas,
          desenvolvimento de cosméticos, desenvolvimento de alimentos,
          análise bromatológica, exames de glicemia,"
        ></EJ1>
        <EJ name="icb" cidade="" curso="" universidade="" serviços=""></EJ>
      </div>
      <div className={style.row}>
        <EJ
          name="icb"
          cidade="São Paulo."
          curso="Ciências Biomédicas e Ciências"
          universidade="USP."
          serviços="Divulgação científica, Produção de
          conteúdo, Conteúdo para site institucional, Conteúdo
          para divulgação em bares e restaurantes e
          Consultoria em gestão laboral"
        ></EJ>
        <EJ2
          name="Nutri jr"
          cidade="São Paulo."
          curso="Nutrição."
          universidade="USP."
          serviços="Tabelas Nutricionais, Cardápios,
          Coffee break, Ficha técnica e Educação
          nutricional."
        ></EJ2>
      </div>
      <div className={style.row}>
        <EJ1
          name="Trinus jr"
          cidade="Santos"
          curso="Psicologia, Fisioterapia, Nutrição, Terapia Ocupacional e
          Educação Física."
          universidade="UNIFESP."
          serviços="Análise da qualidade de vida no trabalho, análise da
          dinâmica de trabalho, análise de feedback de funcionários, avaliação de
          desempenho dos funcionários, pesquisa de clima, recrutamento e
          seleção, oficinas culinárias, coffee-break, rotulagem, ficha técnica,
          cardápios, capacitação em boas práticas, formulação de produtos
          alimentícios, relaxamento corporativo/ergonomia, consultorias,
          eventos/palestras,"
        ></EJ1>
      </div>
    </div>
  );
}
