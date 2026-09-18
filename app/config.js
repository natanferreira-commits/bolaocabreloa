// ============================================================
//  CONFIG DO BOLÃO — troque só o que está aqui
//  Afiliado: Cabreloa (O Mago)
//  Contexto atual: Premier League 2026/27, rodada 5 (19 e 20/09)
// ============================================================

export const config = {
  // ---------- Como o bilhete é validado ----------
  // "form-telegram" = botão abre um formulário (nome + telefone), salva o lead e manda pro Telegram
  // "whatsapp"      = botão abre o WhatsApp com a mensagem pronta (modo do bolão do Caumo)
  resgate: {
    modo: "form-telegram",

    // >>> Link do bot/fluxo no Telegram <<<
    // O "start=" abaixo é o ID do fluxo do bot (SendPulse), por isso o nº do bilhete NÃO vai no link.
    // O bilhete fica ligado ao lead pelo nome + telefone gravados no banco.
    // (Se um dia o start ficar livre, dá pra usar {codigo} no link que ele vira o nº do bilhete.)
    telegramUrl: "https://t.me/cabreloa_bot?start=6aada3d9b3aedb61ea0957da",

    // Opcional: URL que recebe um POST com { codigo, nome, telefone, rodada } a cada validação
    // (ex: evento do SendPulse / webhook de automação). "" = desligado.
    webhookUrl: "",

    form: {
      titulo: "Valida teu bilhete",
      subtitulo: "Leva 10 segundos. Depois é só seguir pro Telegram.",
      nomeLabel: "Seu nome",
      telefoneLabel: "Telefone com DDD",
      botao: "Validar e ir pro Telegram",
      consentimento: "Ao validar, você aceita receber contato sobre o bolão. +18.",
    },
  },

  // Só usados no modo "whatsapp"
  whatsappNumero: "5500000000000",
  whatsappMensagem: "Quero validar meu palpite #{codigo}",

  // Supabase: guarda os bilhetes, os leads (nome + telefone) e os eventos do funil, e alimenta o /admin.
  // No modo "form-telegram" ele é OBRIGATÓRIO: sem ele o nome e o telefone não ficam salvos em lugar nenhum.
  // Rode o supabase.sql ANTES de preencher.
  supabase: {
    url: "https://fzskyuctycbuhctitvdz.supabase.co",
    anonKey: "sb_publishable_qSBpAkbg2OqhVglY2Sq5mA_b9hvfNk_",
  },

  marca: "Cabreloa",

  // Google Analytics 4 — ID de medição (ex: "G-XXXXXXXXXX"). "" não carrega.
  gaId: "",

  // Meta Pixel ID (deixe "" pra não carregar)
  pixelId: "",

  // ---------- Tema (cores puxadas da arte do Mago) ----------
  tema: {
    destaque: "#A855F7", // roxo neon das runas: labels, barras, seleção
    destaque2: "#7C3AED", // roxo do chapéu: bordas
    premio: "#FFB238", // laranja-dourado dos feixes: R$ 500 e palavras em *destaque*
    botaoFundo: "#8B3DFF",
    botaoTexto: "#ffffff",
    fundo: "#07040f",
    fundo2: "#0e0a1c",
    card: "#130d24",
  },

  // ---------- Título e descrição da página (aba do navegador, preview do link) ----------
  seo: {
    titulo: "Bolão do Mago — R$ 500 pra quem cravar 10 palpites da Premier League",
    descricao: "Dois palpites por jogo da rodada da Premier League. Cravou os 10, leva R$ 500 no Pix. Grátis.",
  },

  // ---------- Oferta ----------
  oferta: {
    valor: "R$ 500",
    regra: "no Pix pra quem cravar os 10",
  },

  // ---------- Rodada ----------
  rodada: {
    // id curto: vai em todo evento (GA4 e banco) pra separar uma rodada da outra
    id: "cabreloa-pl2627-r5",
    nome: "Premier League • Rodada 5",
    // Encerramento dos palpites (ISO com fuso). "" desliga o contador.
    encerramento: "2026-09-19T11:00:00-03:00",
    // escudos em /public/escudos. Horários de Brasília.
    jogos: [
      { casa: "Brighton", fora: "Arsenal", quando: "Sáb 19/09 • 11h", escudoCasa: "/escudos/brighton.png", escudoFora: "/escudos/arsenal.png" },
      { casa: "Man City", fora: "Sunderland", quando: "Sáb 19/09 • 11h", escudoCasa: "/escudos/man-city.png", escudoFora: "/escudos/sunderland.png" },
      { casa: "Newcastle", fora: "Hull City", quando: "Sáb 19/09 • 11h", escudoCasa: "/escudos/newcastle.png", escudoFora: "/escudos/hull.png" },
      { casa: "Bournemouth", fora: "Liverpool", quando: "Dom 20/09 • 10h", escudoCasa: "/escudos/bournemouth.png", escudoFora: "/escudos/liverpool.png" },
      { casa: "Fulham", fora: "Man United", quando: "Dom 20/09 • 12h30", escudoCasa: "/escudos/fulham.png", escudoFora: "/escudos/man-utd.png" },
    ],
  },

  // Faixa que roda no topo (separada por •)
  marquee: ["Bolão do Mago", "Premier League", "R$ 500 no Pix", "Rodada 5", "Grátis", "10 palpites"],

  // ---------- Landing ----------
  landing: {
    // Imagem do hero, em /public. "" usa fundo liso.
    heroImage: "/hero.webp",
    // "fundo"   = arte vertical 1080x1920 cobrindo o hero inteiro
    // "recorte" = arte quadrada no meio do hero, com as bordas esfumadas
    heroModo: "fundo",
    // "topo" = label acima da foto; "base" = label junto da headline (use quando a arte ocupa o topo, tipo o chapéu)
    labelPosicao: "base",
    label: "Bolão do Mago • Premier League",
    // a palavra entre *asteriscos* vira destaque na cor do prêmio
    titulo: "*R$ 500* pra quem cravar a rodada",
    subtitulo: "Dois palpites por jogo da Premier League: o resultado e um mercado. Cravou os dez, o Pix é seu.",
    ctaLabel: "Fazer meus palpites",
    ctaHint: "Grátis. Resultado domingo à tarde.",
    comoFunciona: [
      "Responde as 10 perguntas em 2 minutos",
      "Valida o bilhete com nome e telefone",
      "Cravou os 10, recebe R$ 500 no Pix",
    ],
  },

  // ---------- Palpites ----------
  // "jogo" é o índice em rodada.jogos, ou null pra palpite da rodada inteira.
  // "mercado" é o rótulo curto que vai no bilhete e no WhatsApp.
  palpites: [
    // --- Brighton x Arsenal ---
    {
      jogo: 0,
      mercado: "Resultado",
      pergunta: "Quem vence o jogo?",
      opcoes: ["Brighton", "Empate", "Arsenal"],
    },
    {
      jogo: 0,
      mercado: "Ambas marcam",
      pergunta: "Os dois times marcam?",
      opcoes: ["Sim", "Não"],
    },
    // --- Man City x Sunderland ---
    {
      jogo: 1,
      mercado: "Resultado",
      pergunta: "Quem vence o jogo?",
      opcoes: ["Man City", "Empate", "Sunderland"],
    },
    {
      jogo: 1,
      mercado: "Total de gols",
      pergunta: "Quantos gols no jogo?",
      opcoes: ["4 ou mais", "Até 3"],
    },
    // --- Newcastle x Hull City ---
    {
      jogo: 2,
      mercado: "Resultado",
      pergunta: "Quem vence o jogo?",
      opcoes: ["Newcastle", "Empate", "Hull City"],
    },
    {
      jogo: 2,
      mercado: "Escanteios",
      pergunta: "Vai ter 10 ou mais escanteios?",
      opcoes: ["Sim, 10 ou mais", "Não, menos de 10"],
    },
    // --- Bournemouth x Liverpool ---
    {
      jogo: 3,
      mercado: "Resultado",
      pergunta: "Quem vence o jogo?",
      opcoes: ["Bournemouth", "Empate", "Liverpool"],
    },
    {
      jogo: 3,
      mercado: "Gol no 1º tempo",
      pergunta: "Sai gol no primeiro tempo?",
      opcoes: ["Sim", "Não"],
    },
    // --- Fulham x Man United ---
    {
      jogo: 4,
      mercado: "Resultado",
      pergunta: "Quem vence o jogo?",
      opcoes: ["Fulham", "Empate", "Man United"],
    },
    {
      jogo: 4,
      mercado: "Cartão vermelho",
      pergunta: "Vai ter cartão vermelho?",
      opcoes: ["Sim", "Não"],
    },
  ],

  // ---------- Loading ----------
  loading: {
    label: "Fechando seu bilhete",
    etapas: ["Anotando seus palpites", "Gerando o número do bilhete", "Quase lá"],
    // segundos antes de mostrar o bilhete (0 desliga)
    segundos: 1.6,
  },

  // ---------- Bilhete ----------
  bilhete: {
    // título que aparece dentro do bilhete
    slipTitulo: "Bolão da Premier League",
    label: "Seu bilhete",
    titulo: "Valida o bilhete pra concorrer",
    subtitulo: "Bilhete sem validação não conta. É nome, telefone e pronto.",
    ctaLabel: "Validar meu bilhete",
    ctaHint: "Leva 10 segundos • Grátis",
    refazerLabel: "Refazer palpites",
  },

  // ---------- Aviso / compliance ----------
  aviso: {
    titulo: "Aviso importante",
    linhas: [
      "Bolão gratuito, sem depósito. Só concorre quem validar o bilhete antes do primeiro jogo.",
      "Se mais de um bilhete cravar os 10, o prêmio é sorteado entre eles.",
      "Apostas esportivas envolvem riscos. Nunca aposte o dinheiro do pão, apenas o da manteiga.",
      "Conteúdo destinado a maiores de 18 anos. Jogue com responsabilidade.",
    ],
  },
};
