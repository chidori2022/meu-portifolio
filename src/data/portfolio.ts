import { Code2, Server, Cog, ShieldCheck, Database, ServerCrash, Network, Bot, BrainCircuit, Terminal, Blocks, Braces, Cloud, HardDrive, Shield } from "lucide-react";
import { 
  SiDotnet, SiPhp, SiPython, SiFastapi, SiNodedotjs, SiGo,
  SiReact, SiNextdotjs, SiFlutter, SiTypescript, SiTailwindcss, SiBootstrap,
  SiDocker, SiLinux, SiGrafana,
  SiMysql, SiPostgresql
} from "react-icons/si";
import { TbPlugConnected } from "react-icons/tb";

export const portfolioData = {
  hero: {
    name: "Marcelo Ramos Winter",
    title: "Full Stack Developer",
    subtitle: "Construindo sistemas corporativos escaláveis e infraestrutura de alta disponibilidade.",
    description: "Ajudo empresas a automatizarem rotinas, integrarem sistemas legados e garantirem a segurança da informação de ponta a ponta.",
    email: "sabre.sombra@gmail.com",
    linkedin: "https://www.linkedin.com/in/marceloramoswinter",
    github: "https://github.com/chidori2022"
  },
  services: [
    {
      title: "Sistemas & APIs",
      description: "Desenvolvimento de APIs RESTful e aplicações Web robustas focadas em performance e regras de negócio complexas.",
      icon: Code2
    },
    {
      title: "Infraestrutura & DevOps",
      description: "Conteinerização com Docker, gestão de servidores (Linux/Windows) e esteiras de monitoramento e backup.",
      icon: Server
    },
    {
      title: "Integração & RPA",
      description: "Automação de processos operacionais e integração com hardwares, ERPs e Inteligência Artificial.",
      icon: Cog
    }
  ],
  skills: [
    { 
      category: "Back-end & RPA", 
      items: [
        { name: "C# / .NET 8", icon: Blocks, color: "text-purple-600" },
        { name: "PHP 8.1", icon: SiPhp, color: "text-[#777BB4]" },
        { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
        { name: "FastAPI", icon: SiFastapi, color: "text-[#009688]" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Go", icon: SiGo, color: "text-[#00ADD8]" }
      ] 
    },
    { 
      category: "Front-end & Mobile", 
      items: [
        { name: "React / Next.js", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]" }
      ] 
    },
    { 
      category: "Infra & DevOps", 
      items: [
        { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
        { name: "Linux", icon: SiLinux, color: "text-[#FCC624]" },
        { name: "Zabbix & Grafana", icon: SiGrafana, color: "text-[#F46800]" },
        { name: "Veeam Backup", icon: ServerCrash, color: "text-[#00B336]" },
        { name: "Firewall Sophos", icon: ShieldCheck, color: "text-[#005C9A]" },
        { name: "Túneis SSH", icon: TbPlugConnected, color: "text-slate-600" }
      ] 
    },
    { 
      category: "Dados & IA", 
      items: [
        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
        { name: "SQL Server", icon: Database, color: "text-[#CC292B]" },
        { name: "OpenAI / LangChain", icon: Bot, color: "text-[#412991]" }
      ] 
    },
  ],
  projects: [
    {
      title: "Ecossistema de IA & Agentes Autônomos",
      company: "Dongwon Brasil",
      period: "2026",
      description: "Orquestrei do zero uma malha de microsserviços (Go e Python FastAPI) para dar autonomia ao time. O sistema integra LLMs locais via RAG (Qdrant), permitindo que um bot no WhatsApp converse com bancos de dados, tire dúvidas de RH e leia alarmes do Zabbix sem intervenção humana."
    },
    {
      title: "Visão Computacional & Biometria Industrial",
      company: "Dongwon Brasil",
      period: "2025 - 2026",
      description: "Desenvolvi e escalei um pipeline de processamento de vídeo em tempo real (RTSP para HLS/WHEP) resolvendo gargalos de identificação no chão de fábrica. Arquitetura robusta com InsightFace, MediaPipe, 13 réplicas e Load Balancer segmentado."
    },
    {
      title: "Portal Corporativo & Automação RPA",
      company: "Dongwon / Automação",
      period: "2021 - 2026",
      description: "Assumi o controle ponta a ponta da infraestrutura. Gerencio ~40 containers Docker em monorepo e estruturei o portal corporativo (PHP 8.3 + SSO via AD). Criei clientes Windows nativos (.NET 8) operando via Chrome CDP e túneis SSH para eliminar o trabalho braçal no ERP Protheus."
    },
    {
      title: "Integração CLP Melsec & Catracas",
      company: "Automação Industrial",
      period: "2025",
      description: "Construí APIs locais de alta performance (.NET 8 x86) para comunicação síncrona com hardwares legados. O projeto unificou a leitura de catracas Control iD e Controladores Lógicos Programáveis (CLP Melsec) via Python/C#."
    }
  ],
  experience: [
    {
      company: "Dongwon Brasil (Automotivo)",
      role: "Analista de TI & Full Stack Developer",
      period: "Jul 2021 - Jul 2026",
      description: "Manutenção de infraestrutura de missão crítica da fábrica e desenvolvimento de software corporativo. Gestão de Active Directory, redes e implantação de firewall Sophos XG. Criação de sistemas para automação operacional (PHP, JS, MySQL).",
    },
    {
      company: "Força Aérea Brasileira (Aeronáutica)",
      role: "Infraestrutura & Tecnologia",
      period: "Mar 2014 - Dez 2019",
      description: "Manutenção e suporte avançado de infraestrutura tecnológica, garantindo segurança, disponibilidade e disciplina operacional em ambientes de alta criticidade.",
    }
  ]
};