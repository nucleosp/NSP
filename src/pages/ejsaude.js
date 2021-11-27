import { FormatAlignLeft } from "@material-ui/icons";
import Link from "next/link";
import EJ from "../components/EJ/index";
import EJ1 from "../components/EJ1/index";
import EJ2 from "../components/EJ2/index";

export default function EjSaude() {
  return (
    <div>
      <EJ2
        name="EEFUSP Júnior Consultoria"
          cidade="São Paulo."
          curso="Licenciatura em Educação Física,
          Bacharelado em Educação Física e
          Bacharelado em Esporte."
          universidade="USP."
          serviços="Ginástica Laboral, Avaliação e
          Treinamento Físico, Gestão de Mídias Sociais
          Esportivas, Plano de Marketing Esportivo,
          Organização de Eventos Recreacionais e Esportivos."
      ></EJ2>
      <EJ
        name="EJAV"
          cidade="São Paulo."
          curso="Medicina Veterinária."
          universidade="USP."
          serviços="Consultoria para clínicas veterinárias e hotéis pet (controle de
            qualidade e fidelização, comportamento e bem estar animal, diagnóstico de
            instalação, gestão de pessoas, financeira e plano de marketing) Nutrição pet
            (desenvolvimento, análise e reformulação de receitas para dieta caseiras de
            cães e gatos, consultoria para a produção e comercialização de produtos de
            alimentação pet), Regulamentação."
      ></EJ>
      <EJ1
        name="Farma Jr."
          cidade="São Paulo."
          curso="Farmácia."
          universidade="USP."
          serviços="Análise microbiológica, tabela e rotulagem nutricional,
          análises físico químicas (alimentos, cosméticos e medicamentos),
          análise do tempo de validade de um alimento, análise de aceitabilidade
          de alimento, desenvolvimento de formas farmacêuticas,
          desenvolvimento de cosméticos, desenvolvimento de alimentos,
          análise bromatológica, exames de glicemia."
      ></EJ1>
      <EJ
        name="ICB Júnior"
          cidade="São Paulo."
          curso="Ciências Biomédicas e Ciências"
          universidade="USP."
          serviços="Divulgação científica, Produção de
          conteúdo, Conteúdo para site institucional, Conteúdo
          para divulgação em bares e restaurantes e
          Consultoria em gestão laboral."
      ></EJ>
      <EJ2
        name="Trinus Jr."
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
          eventos/palestras."
      ></EJ2>
      <EJ
      name="Nutri Jr."
      curso="Nutrição."
      universidade="USP."
      serviços="Tabelas Nutricionais, Cardápios, Coffe Break, Fichas Técnicas e Educação Nutricional."
      ></EJ>
    </div>
  );
}