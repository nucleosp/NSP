import { getDisplayName } from "next/dist/next-server/lib/utils";
import Link from "next/link";
import EJ from "../components/EJcard/index";
import EJ1 from "../components/EJcard1/index";
import EJ2 from "../components/EJcard2/index";
import style from "../components/EJcard1/ej.module.css";

export default function EjEngenharias() {
  return (
    <div>
      <div className={style.row}>
        <EJ
          name="Poli Júnior Engenharia"
          cidade="São Paulo."
          universidade="USP."
          curso="Engenharia de Computação, Produção, Química, Ambiental,
          Metalúrgica, Materiais, Civil, Mecânica, Mecatrônica e Elétrica."
          serviços="Gestão por processos, Mapeamento de processos, Gestão
          industrial, Análise de dados, Pesquisa de mercado, Aplicativos mobile,
          E-commerce, Marketplaces, Web crawlers, CRM, Projetos
          arquitetônicos, estrutural, elétrico, hidrossanitário, Desempenho
          térmico, acústico e luminotécnico de ambientes, Instalações de gás,
          Terraplanagem, Seleção de materiais,"
        ></EJ>

        <EJ2
          name="EEL Júnior"
          cidade="Lorena."
          universidade="USP."
          curso="Engenharia Ambiental, Engenharia Química, Engenharia
        Bioquímica, Engenharia de Materiais e Engenharia de Produção."
          serviços="Manual de boas práticas, Procedimento Operacional
        Padrão (POP), 5s, Valorização de resíduos e fluidos, Planejamento e
        controle da produção, Otimização de processos, Soluções de
        manufatura, Produção de bebidas fermentadas, P&D, Planejamento
        Estratégico (PE), Desenvolvimento de produto, Tratamento de
        efluentes,"
        ></EJ2>
      </div>
      <div className={style.row}>
        <EJ1
          name="EJEM Mackenzie"
          cidade="São Paulo."
          universidade="Mackenzie."
          curso="Engenharia Civil, Engenharia Elétrica, Engenharia de
        Produção, Engenharia Mecânica, Engenharia de Materiais e
        Engenharia Química."
          serviços="Projeto Arquitetônico, AVCB, Reforma, Regularização,
        Desdobro/Remembramento, Maquete Eletrônica, Instalação Elétrica,
        Projeto de Placas Fotovoltaicas, Eficiência Energética, Prototipagem,
        Modelagem 2D/3D, Projeto de máquinas,"
        ></EJ1>
        <EJ
          name="EPEQ Jr."
          cidade="Diadema."
          universidade="UNIFESP."
          curso="Engenharia Química."
          serviços="Gestão de resíduos, organização
        empresarial, estudo de viabilidade, consultoria
        laboratorial e química."
        ></EJ>
      </div>
      <div className={style.row}>
        <EJ
          name="IMar Jr."
          cidade="Santos."
          universidade="UNIFESP."
          curso="Bacharelado interdisciplinar em Ciências e
        Tecnologia do Mar, Engenharia Ambiental, Engenharia do
        Petróleo e dos Recursos Renováveis ."
          serviços="Plano de gerenciamento de resíduos sólidos,
        Otimização e mapeamento de processos, Estabelecimento
        sustentável, Educação ambiental, Gestão de eventos on-line e
        Consultoria on-line"
        ></EJ>
        <EJ2
          name="Jovens Projetistas"
          cidade="Guaratinguetá."
          universidade="UNESP."
          curso="Engenharia Civil, Engenharia Mecânica e Engenharia Elétrica."
          serviços="Projetos hidrossanitários, Projetos de reaproveitamento
        pluvial, Projetos de usucapião, Levantamentos topográficos, Memoriais
        descritivos, Projetos arquitetônicos, Projetos de regularização do
        imóvel, projetos mecânicos, Modelagem 2D/3D, Prototipagem,"
        ></EJ2>
      </div>
      <div className={style.row}>
        <EJ1
          name="Jr. Eng"
          cidade="Guaratinguetá."
          universidade="UNESP."
          curso="Engenharia de Produção, Mecânica, Materiais, Elétrica e Civil."
          serviços="Análise de mercado (análise de concorrentes, pesquisa de
          mercado, pesquisa de fornecedores, cliente oculto e pesquisa eleitoral),
          Mapeamento e otimização de processos, Gestão financeira, Gestão de
          estoque, Estudo de layout e projetos mecânicos"
        ></EJ1>
      </div>
    </div>
  );
}
