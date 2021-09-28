import Link from "next/link";
import EJ from "../components/EJ/index";
import EJ1 from "../components/EJ1/index";
import EJ2 from "../components/EJ2/index";

export default function EjsArquitetura() {
  return (
    <div>
      <EJ2
        name="ATRIUM"
        imgPath="LogosEJ/Arquitetura/ATRIUM.png"
        cidade="Taubaté."
        universidade="UNITAU."
        curso="Arquitetura e Urbanismo."
        serviços="Projeto arquitetônico, projeto elétrico,
        projeto hidrossanitário, projeto de acessibilidade,
        acompanhamento de obra, design de interiores,
        projeto urbanístico,"
      ></EJ2>
      <EJ
        name="BELAS_ARTES"
        imgPath="LogosEJ/Arquitetura/BELAS_ARTES.png"
        cidade="São Paulo."
        universidade="Centro Universitário Belas Artes."
        curso="Arquitetura e Relações Internacionais."
        serviços="Serviços de Arquitetura e Urbanismo:
        projeto de modelagem 3D, renderização, design de
        interiores e exteriores, paisagismo e executivo de
        marcenaria."
      ></EJ>
      <EJ1
        name="Estúdio9"
        imgPath="LogosEJ/Arquitetura/ESTUDIO9.png"
        cidade="São Paulo."
        universidade="Mackenzie."
        curso="Design, Arquitetura e Urbanismo."
        serviços="Acompanhamento fotográfico, Proposta
        arquitetônica, Proposta paisagística, Identidade visual,
        Representação gráfica,"
      ></EJ1>
      <EJ
        name="FAUUSP"
        imgPath="LogosEJ/Arquitetura/FAU.png"
        cidade="São Paulo."
        universidade="USP"
        curso="Arquitetura e Urbanismo."
        serviços="Design gráfico, Identidade visual,
        Editoração, Sinalização, Design de embalagens, Design de
        interface UX/UI (site, aplicativo) e Design de produto;"
      ></EJ>
    </div>
  );
}
