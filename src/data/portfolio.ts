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
    github: "https://github.com/chidori2022",
    whatsapp: "https://wa.me/5551998182838",
    phoneDisplay: "+55 51 99818-2838",
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
      title: "Plataforma Local de IA & Agentes",
      period: "Atualmente",
      function: "Orquestração de LLM, RAG e agentes de domínio",
      description: "Serviço chatgpt-local em Go com chat, RAG sobre Qdrant e agentes isolados por domínio (RH, MySQL, documentação, EPI, redes e Zabbix via MCP). Cada agent_* possui contrato HTTP próprio; a plataforma consulta bases e documentos sem depender de operação manual.",
      tools: ["Go 1.23", "Qdrant", "RAG / Embeddings", "OpenAI", "MCP MySQL", "MCP Zabbix", "Docker"]
    },
    {
      title: "Bot WhatsApp (Meta Cloud API)",
      period: "Atualmente",
      function: "Canal de atendimento e notificação via WhatsApp",
      description: "Webhook Meta (X-Hub-Signature-256) em Go: mensagens entrantes passam pelo LLM e seguem para o bridge de RH. Linha dedicada wa-bot-epi (observe/notify). Allowlist de telefones, JWT entre portal e agents, e logs no monitor do portal.",
      tools: ["Go 1.23", "Meta WhatsApp API", "Webhook HMAC", "JWT", "Agent_RH", "Docker"]
    },
    {
      title: "Monitoramento Zabbix & Grafana",
      period: "Atualmente",
      function: "Observabilidade de infraestrutura e alertas operacionais",
      description: "Stack Zabbix Server/Web + Grafana no Compose corporativo, com MIBs (ex.: Sophos) e provisioning via automation. Dashboards e alertas alimentam a operação; o agent_zabbix e o canal WhatsApp consomem eventos de monitoramento em modo leitura.",
      tools: ["Zabbix", "Grafana", "SNMP / MIBs", "Docker Compose", "MySQL (zabbix)", "Automation Python"]
    },
    {
      title: "Visão Computacional & Biometria",
      period: "Atualmente",
      function: "Identificação facial e streaming de câmeras na planta",
      description: "Pipeline RTSP → HLS/WHEP (MediaMTX): face-api (InsightFace buffalo_l) com load balancer e ~13 réplicas, person-detector (MediaPipe/HOG) e rtsp-identify em serviços separados (capture/detect/identify/API).",
      tools: ["Python FastAPI", "InsightFace", "MediaPipe", "MediaMTX", "Nginx LB", "Docker"]
    },
    {
      title: "Portal Corporativo (Intranet)",
      period: "Atualmente",
      function: "Aplicação web interna com SSO e módulos de negócio",
      description: "Portal PHP 8.3 (Nginx + SPNEGO/Kerberos AD) com módulos RH, Qualidade, Logística, Produção, Financeiro, Câmeras, Face, Chamados e Conferência. Persistência MySQL (mysqli), ACL por módulo e perímetro TLS interno vs face pública restrita (Sophos).",
      tools: ["PHP 8.3", "Nginx", "AD / Kerberos", "MySQL 8.4", "Docker", "JWT portal→agents"]
    },
    {
      title: "RPA Protheus (Chrome CDP)",
      period: "Atualmente",
      function: "Automação de operações no ERP Protheus WebApp",
      description: "Stack protheus-rpa (Python FastAPI + Playwright) com bridge CDP e cliente Windows tray WinForms (.NET 8) para Chrome CDP e túnel SSH reverso, eliminando operação manual de OPs no Protheus.",
      tools: [".NET 8 WinForms", "Chrome CDP", "Python FastAPI", "Playwright", "SSH reverso"]
    },
    {
      title: "API Biometria Control iD",
      period: "Atualmente",
      function: "Leitura biométrica local via HTTP",
      description: "API HTTP local em .NET 8 (x86) usando SDK CIDBio para leitores Control iD, expondo enroll/identify para integração com sistemas internos.",
      tools: [".NET 8 x86", "SDK CIDBio", "Control iD", "API HTTP local"]
    },
    {
      title: "Integração CLP Melsec",
      period: "Atualmente",
      function: "Comunicação com CLPs no chão de fábrica",
      description: "Integrações de baixo nível com Controladores Lógicos Programáveis Melsec (Mitsubishi), sincronizando dados industriais via Python/C#.",
      tools: ["Python", "C#", "CLP Melsec", "IoT industrial"]
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