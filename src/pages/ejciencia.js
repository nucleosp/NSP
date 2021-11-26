import Link from "next/link";
import EJ from "../components/EJ/index";
import EJ1 from "../components/EJ1/index";
import EJ2 from "../components/EJ2/index";

export default function EjsCiencia() {
  return (
    <div>
      <EJ2
        name="GA Júnior"
        imgPath="LogosEJ/Ciencias/GA.png"
        cidade="São Paulo."
        universidade="USP."
        curso="Gestão ambiental."
        serviços="Educação ambiental, Plano de gestão de
        resíduos sólidos, Licenciamento ambiental,
        Inventário de emissões de gases de efeito estufa e
        Treinamentos associados ao sistema de gestão
        ambiental (SGA)."
      ></EJ2>
      <EJ
        name="Geo Júnior"
        imgPath="LogosEJ/Ciencias/GEO.jpg"
        cidade="São Paulo."
        universidade="USP."
        curso="Geociências."
        serviços="Assessoria em licenciamento
        ambiental, consultoria em engenharia mineral,
        projetos de geotecnia, mineração, segurança
        do trabalho, e modelagem geológica."
      ></EJ>
      <EJ1
        name="IAG Júnior"
        imgPath="LogosEJ/Ciencias/IAG.jpg"
        cidade="São Paulo."
        universidade="USP."
        curso="Astronomia, Geofísica e Meteorologia."
        serviços="Palestras, oficinas, observações
        noturnas, pesquisa mineral, geofísica
        ambiental, estudos hidrológicos, investigação
        do susbsolo para engenharia e geotecnia,
        coleta e análise de dados meteorológicos."
      ></EJ1>
      <EJ2
        name="Inova Júnior"
        imgPath="LogosEJ/Ciencias/inova.jpg"
        cidade="São Paulo."
        universidade="USP."
        curso="Bacharelado em Química e
        Licenciatura em Química."
        serviços="Análises físico-químicas e
        microbiológicas, otimização de produtos e
        processos, consultorias teóricas."
      ></EJ2>
      <EJ1
        name="IO Júnior"
        imgPath="LogosEJ/Ciencias/IO.jpg"
        cidade="São Paulo."
        universidade="USP."
        curso="Oceanografia."
        serviços="Coletas de dados, monitoramento
        ambiental, gerenciamento costeiro, elaboração de
        relatórios, análises de qualidade da água,
        caracterizações oceanográficas, diagnósticos e
        avaliações ambientais, cursos de capacitação,
        projetos de educação ambiental."
      ></EJ1>
      <EJ
        name="Protos Biotec Jr."
        imgPath="LogosEJ/Ciencias/PROTOS.png"
        cidade="São Paulo."
        universidade="USP."
        curso="Biotecnologia."
        serviços="Divulgação científica, Otimização
        de bioprocessos, Marketing Científico,
        Rotulagem Nutricional e Análise bioinformática"
      ></EJ>
      <EJ1
        name="SOLBIO"
        imgPath="LogosEJ/Ciencias/SOLBIO.png"
        cidade="São Paulo."
        universidade="USP."
        curso="Ciências Biológicas."
        serviços="Identificação Taxonômica, Elaboração de protocolos
        laboratoriais, Análises laboratoriais (análise de água, análise de solo,
        interpretação de resultados laboratoriais), Cursos em biologia
        (montagem de composteira, plantas alimentícias não
        convencionais(PANCs), Workshop COVID/Prevenção de doenças,
        Workshop boas práticas laboratoriais) e Consultoria científica"
      ></EJ1>
    </div>
  );
}
