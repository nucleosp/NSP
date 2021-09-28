import Link from "next/link";
import EJ from "../components/EJ/index";
import EJ1 from "../components/EJ1/index";
import EJ2 from "../components/EJ2/index";

export default function EjsTecnologia() {
  return (
    <div>
      <EJ2
        name="CORE"
        imgPath="LogosEJ/Tecnologia/CORE.jpg"
        cidade="Santos."
        universidade="USP."
        curso="Engenharia Mecânica, de Produção,
        de Petróleo, Química e Civil."
        serviços="Desenvolvimento de aplicativos,
        desenvolvimento de sites, criação de planilhas
        em Excel/VBA, desenvolvimento de projetos
        piloto em outras linguagens de programação."
      ></EJ2>
      <EJ
        name="Gamma"
        imgPath="LogosEJ/Tecnologia/gamma.jpg"
        cidade="Lorena."
        universidade="USP."
        curso="Engenharia Física."
        serviços="Automação residencial e Desenvolvimento
        de sites e aplicativos."
      ></EJ>
      <EJ1
        name="ITAjr"
        imgPath="LogosEJ/Tecnologia/ITA.jpg"
        cidade="São José dos Campos."
        universidade="ITA."
        curso="Engenharia Aeronáutica, Eletrônica,
        Mecânica-Aeronáutica, Civil-Aeronáutica,
        Computação e Aeroespacial."
        serviços="Tecnologia da informação
        (desenvolvimento de sites e aplicativos),
        Desenvolvimento de automatizações, Criação de
        planilhas e dashboards, Pesquisa de mercado e
        Pesquisa operacional."
      ></EJ1>
      <EJ
        name="Síntese"
        imgPath="LogosEJ/Tecnologia/SINTESE.png"
        cidade="São Paulo."
        universidade="USP."
        curso="Sistemas de Informação."
        serviços="Desenvolvimento de sistemas web
        para pequenas empresas, Site e-commerce,
        Site institucional, Desenvolvimento de
        aplicativos mobile, Design de interface para
        sites e aplicativos e Sistemas de agendamento."
      ></EJ>
    </div>
  );
}
