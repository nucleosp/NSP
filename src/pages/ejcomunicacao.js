import Link from "next/link";
import EJ from "../components/EJ/index";
import EJ1 from "../components/EJ1/index";
import EJ2 from "../components/EJ2/index";

export default function EjsComunicacao() {
  return (
    <div>
      <EJ2
        name="Comunicação Mackenzie"
        imgPath="LogosEJ/Comunicacao/AGENCIA_MACK.png"
        cidade="São Paulo"
        universidade="Mackenzie"
        cursos="Publicidade e Propaganda, Jornalismo e Letras."
        serviços="Adesivo, Certificado, Design de Cardápio Diagramação,
        Embalagem - (arte sacola/produto), Estamparia de camisetas,
        Gerenciamento de mídia, Identidade visual - (logotipo, nome, slogan,
        paleta de cores e manual de identidade da marca), Layout de
        Powerpoint,"
      ></EJ2>
      <EJ
        name="ECA jr"
        imgPath="LogosEJ/Comunicacao/eca.jpg"
        cidade="São Paulo."
        universidade="USP."
        curso="Relações Públicas, Publicidade e propaganda e
        Turismo."
        serviços="Campanha, identidade visual, vídeo e animação,
        gerenciamento de mídia, pesquisa e análise de dados,
        eventos, roteiro turístico, marketing turístico, formatação de
        produtos, pesquisa de opinião, pesquisa de oferta,
        elaboração de calendário de eventos, consultoria em
        turismo, place branding, análise de segmentação turística,
        pesquisa de demanda."
      ></EJ>
      <EJ1
        name="Estúdio MOON"
        imgPath="LogosEJ/Comunicacao/ESTUDIO_MOON.png"
        cidade="São Paulo."
        universidade="Méliès Faculdade."
        curso="Design de Jogos Digitais, Produção
        Audiovisual e Design Gráfico."
        serviços="Desenvolvimento de jogos para
        treinamento, processo seletivo, marketing
        digital e educação."
      ></EJ1>
      <EJ
        name="Jornalismo Jr"
        imgPath="LogosEJ/Comunicacao/JOTA.jpg"
        cidade="São Paulo."
        universidade="USP."
        curso="Jornalismo."
        serviços="Comunicação visual, assessoria de
        imprensa, produção e edição audiovisual,
        gerenciamento de mídias sociais, produção de
        textos e cobertura de eventos."
      ></EJ>
    </div>
  );
}
