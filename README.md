# Projeto: Currículo PJ e Portfólio (Marcelo Ramos Winter)

Este repositório contém o código-fonte do Portfólio Web em Next.js e o Currículo em Markdown estruturado para vagas de Desenvolvedor Full Stack PJ e Infraestrutura.

Abaixo está o registro do escopo e planejamento discutidos e executados via Inteligência Artificial durante a estruturação deste projeto.

---

## 📅 Registro do Planejamento e Execução

### 1. Definição do Objetivo
**Usuário:** Solicitou ajuda para montar um currículo PJ e criar um portfólio.
**IA:** Questionou o usuário sobre posicionamento de mercado, público-alvo, formato do portfólio e forma de extração de dados do LinkedIn.
**Resposta do Usuário:** Foco em Full-stack e Engenharia de Dados/IA, mirando o mercado nacional e agências de software. Formato escolhido: Código (React/Next.js).

### 2. Pesquisa de Mercado (Benchmarking de Vagas)
**IA (usando automação de navegador interna):**
Buscou no LinkedIn por vagas de "Desenvolvedor Full Stack PJ" no Brasil e extraiu os seguintes padrões requeridos pelo mercado B2B:
- **Front-end:** React, Next.js, HTML5/CSS3 (Tailwind).
- **Back-end:** Node.js, PHP (Laravel), C#/.NET.
- **Dados:** Bases relacionais (PostgreSQL, SQL Server) e NoSQL.
- **Infraestrutura/DevOps:** Docker, Kubernetes, AWS/GCP, metodologias ágeis e CI/CD.
- **Diferenciais:** Integrações robustas (APIs RESTful), IA (Github Copilot/Cursor) e ferramentas de mensageria (RabbitMQ, SQS).

### 3. Extração e Cruzamento de Perfil Profissional
O usuário forneceu o PDF do seu perfil no LinkedIn, além de solicitar a análise do seu GitHub (`chidori2022`).
**Descobertas técnicas adicionadas ao perfil:**
- Domínio avançado em C# / .NET 8 (aplicações WinForms e API HTTP).
- Automações de RPA com Chrome CDP e túnel reverso.
- Integração de Hardwares de Controle de Acesso (Leitores Biométricos Control iD).
- Integração com automação industrial (CLP Melsec).
- Conhecimentos em Flutter, Go, Python e TypeScript.
- Vivência real em infraestrutura de missão crítica (Zabbix, Grafana, Veeam Backup, Firewall Sophos, Active Directory).

### 4. Entregas Geradas

**Entrega 1: Currículo Markdown PJ**
O arquivo `curriculo-pj.md` (presente neste ambiente) foi reescrito. A linguagem de "funcionário" foi substituída por uma comunicação de "consultor/provedor de soluções B2B". O Pitch foca no diferencial híbrido: unir código limpo com infraestrutura resiliente de ponta a ponta.

**Entrega 2: Portfólio Web (Next.js + Tailwind CSS)**
O projeto web foi inicializado dentro do diretório `C:\meu-portifolio` contendo:
- `src/app/page.tsx`: A página "One Page" contendo seções de Hero (com animações abstratas em background), Serviços B2B, Stack Tecnológica e Experiência Timeline.
- `src/data/portfolio.ts`: Arquivo centralizado contendo o texto extraído da análise de currículo + Github, abstraindo o conteúdo da lógica de UI.
- Pacotes utilizados: `framer-motion`, `lucide-react`, `tailwindcss`.

### 5. Próximos Passos
Para visualizar o portfólio localmente, instale as dependências caso não tenham sido instaladas na inicialização, e rode o servidor:
```bash
npm install
npm run dev
```
Para publicar o portfólio, é recomendado conectar este repositório no GitHub e vinculá-lo diretamente à plataforma Vercel.