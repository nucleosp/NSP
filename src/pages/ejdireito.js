import Link from "next/link";
import EJ from "../components/EJ/index";
import EJ1 from "../components/EJ1/index";
import EJ2 from "../components/EJ2/index";

export default function EjsDireito() {
  return (
    <div>
      <EJ2
        name="CJP"
        imgPath="LogosEJ/Direito/CJP.png"
        cidade="São Paulo."
        universidade="Fundação Getúlio Vargas."
        curso="Administração de Empresa, Administração Pública, Direito,
        Economia e Relações Internacionais."
        serviços="Primeiro Setor: redesenho de processos, pesquisa de clima
        organizacional, planejamento estratégico, plano de comunicação,
        levantamento e análise de dados.
        Terceiro Setor: planejamento estratégico, elaboração de indicadores e
        mapeamento de processos, pesquisa organizacional e gestão de
        voluntariado, planejamento financeiro, captação de recurso, plano de
        comunicação, plano de marketing e pesquisa de marketing. "
      ></EJ2>
      <EJ
        name="SANRFRAN"
        imgPath="LogosEJ/Direito/SANRFRAN.jpg"
        cidade="São Paulo."
        curso="Direito."
        universidade="USP"
        serviços="Regularização jurídica básica (revisão e
          elaboração de estatuto social + abertura de CNPJ
          para associações; contratos sociais para sociedades),
          Regimentos internos para associações e sociedades,"
      ></EJ>
      <EJ1
        name="VALEJUR"
        imgPath="LogosEJ/Direito/VALEJUR.png"
        cidade="Lorena."
        curso="Direito."
        universidade="UNISAL."
        serviços="Elaboração e Revisão de Contratos,
        Consultoria e assessoria acadêmica jurídica, Recuperação
        de crédito, Política de privacidade e termos de uso,
        Recurso de multas, Capacitação jurídicas, Elaboração e
        Revisão de Atos Constitutivos, Parecer Jurídico, Registro de
        Marca."
      ></EJ1>
    </div>
  );
}
