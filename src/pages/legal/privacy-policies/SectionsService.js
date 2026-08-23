const privacyPoliciesSections = [
  {
    id: "dados-coletados",
    heading: "📌 1. Dados Pessoais Coletados",
    paragraphs: [
      "Coletamos apenas as informações necessárias para processar pedidos, prestar atendimento e melhorar sua experiência.",
    ],
    subsections: [
      {
        title: "1.1. Dados fornecidos diretamente por você:",
        items: [
          "Nome completo;",
          "Endereço de entrega e cobrança;",
          "Telefone e e-mail;",
          "Dados de pagamento (processados por provedores externos seguros);",
          "Informações enviadas via formulário, chat ou WhatsApp.",
        ],
      },
      {
        title: "1.2. Dados coletados automaticamente:",
        items: [
          "Endereço IP;",
          "Dados de navegação;",
          "Cookies (Apenas para a sua autenticação dentro da navegação).",
        ],
      },
    ],
  },
  {
    id: "uso-dados",
    heading: "📌 2. Para Que Usamos Seus Dados",
    paragraphs: ["Utilizamos seus dados pessoais para:"],
    list: [
      "Processar e entregar pedidos;",
      "Emitir notas fiscais;",
      "Entrar em contato sobre o pedido;",
      "Enviar comunicações sobre promoções (somente com consentimento);",
      "Melhorar seu uso do site;",
      "Atender solicitações, dúvidas e suporte;",
      "Cumprir obrigações legais.",
    ],
  },
  {
    id: "compartilhamento",
    heading: "📌 3. Compartilhamento de Dados",
    paragraphs: [
      "Seus dados não são vendidos ou compartilhados com terceiros para fins comerciais.",
      "Podemos compartilhar suas informações apenas com parceiros essenciais:",
    ],
    list: [
      "Gateways de pagamento (ex.: Mercado Pago, PagSeguro, Stripe);",
      "Transportadoras ou entregadores;",
      "Serviços de hospedagem e segurança do site;",
      "Serviços de e-mail marketing (somente com consentimento).",
    ],
    importantText: "Todos esses parceiros seguem padrões de segurança compatíveis com a LGPD."
  },
  {
    id: "seguranca",
    heading: "📌 4. Segurança dos Dados",
    paragraphs: [
      "Adotamos medidas técnicas e administrativas para proteger seus dados:",
    ],
    list: [
      "Certificado SSL (criptografia);",
      "Acesso restrito e controlado às informações;",
      "Monitoramento e prevenção contra acessos não autorizados;",
      "Backup seguro do banco de dados;",
      "Processamento de pagamento feito por plataformas especializadas, sem armazenamento de dados de cartão em nossos servidores.",
    ],
    importantText: "Mesmo assim, nenhum sistema é totalmente imune a riscos; por isso, seguimos práticas contínuas de segurança."
  },
  {
    id: "direitos",
    heading: "📌 5. Direitos do Titular dos Dados (LGPD)",
    paragraphs: ["Você pode, a qualquer momento, solicitar:"],
    list: [
      "Acesso aos dados coletados;",
      "Correção de dados incompletos ou incorretos;",
      "Exclusão de dados, quando permitido pela lei;",
      "Portabilidade;",
      "Revogação de consentimentos;",
      "Informações sobre compartilhamentos.",
    ],
    importantText: "Para exercer esses direitos, entre em contato pelos canais descritos ao final desta política."
  },
  {
    id: "retencao",
    heading: "📌 6. Armazenamento e Prazo de Retenção",
    paragraphs: ["Os dados são mantidos pelo tempo necessário para:"],
    list: [
      "Finalizar o pedido;",
      "Cumprir obrigações legais, fiscais e regulatórias;",
      "Resguardar direitos da empresa e do consumidor.",
    ],
    importantText: "Após esse período, eles são excluídos ou anonimizados de forma segura."
  },
  {
    id: "cookies",
    heading: "📌 7. Cookies",
    paragraphs: [
      "Este site usa cookies para armazenar um token de acesso necessário. Eles mantêm sua sessão segura e conectada. A sua utilização é obrigatória!",
    ],
  },
  {
    id: "marketing",
    heading: "📌 8. Envio de E-mails e Marketing",
    paragraphs: [
      "O envio de promoções, novidades e descontos só acontece se você consentir. Você pode cancelar a assinatura a qualquer momento.",
    ],
  },
  {
    id: "menores",
    heading: "📌 9. Menores de Idade",
    paragraphs: [
      "Não coletamos intencionalmente dados de menores de 18 anos sem autorização de um responsável.",
    ],
  },
  {
    id: "atualizacoes",
    heading: "📌 10. Atualizações desta Política",
    paragraphs: [
      "Esta Política pode ser atualizada a qualquer momento, com data revisada ao final da página. Recomendamos verificá-la regularmente.",
    ],
  },
];

export default privacyPoliciesSections;