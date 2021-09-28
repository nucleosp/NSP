import Link from "next/link";
import EJ from "../components/EJ/index";
import EJ1 from "../components/EJ1/index";
import EJ2 from "../components/EJ2/index";

export default function EjsRelacoesPublicas() {
  return (
    <div>
      <EJ2
        name="PRISMA"
        imgPath="LogosEJ/RelacoesPublicas/PRISMA.jpg"
        cidade="São Paulo."
        universidade="PUC-SP."
        curso="Relações Internacionais."
        serviços="Identificação de mercado, Análise
        de mercado, Regulamentação e tarifas, Lista de
        compradores, Atualização de Mercado e Lista
        de fornecedores. "
      ></EJ2>
      <EJ
        name="RI USP jr"
        imgPath="LogosEJ/RelacoesPublicas/RI.jpg"
        cidade="São Paulo."
        universidade="USP."
        curso="Relações Internacionais."
        serviços="Análise Tributária, Análise
        Burocrática, Análise Conjuntural, Análise de
        Mercado, Análise de risco e Mapeamento de
        Contatos."
      ></EJ>
    </div>
  );
}
