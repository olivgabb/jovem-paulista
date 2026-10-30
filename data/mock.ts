export interface Post {
  autor: string;
  cargo: string;
  texto: string;
  curtidas: number;
}

export interface Sugestao {
  nome: string;
  cargo: string;
}

// Dados de exemplo — substitua por chamadas à API (ex.: GET /feed, /sugestoes, /vagas)
export const postsIniciais: Post[] = [
  { autor: "Helena Duarte", cargo: "Diretora de Operações · LogiNova", texto: "Estamos abrindo 12 vagas para analistas de dados em Recife. Quem quer fazer parte do time? 🚀", curtidas: 148 },
  { autor: "Rafael Moreira", cargo: "CEO · Startup Alvorada", texto: "Aprendizado do trimestre: contratar devagar e desligar rápido não é regra, mas cultura clara reduz os dois.", curtidas: 96 },
  { autor: "Beatriz Lemos", cargo: "Gerente de Marketing · Orbita", texto: "Nosso workshop sobre marca empregadora tem inscrições abertas até sexta. Vagas limitadas!", curtidas: 63 },
];

export const sugestoes: Sugestao[] = [
  { nome: "Carlos Menezes", cargo: "Engenheiro de Software" },
  { nome: "Paula Andrade", cargo: "Head de Vendas" },
  { nome: "Iara Souza", cargo: "Analista de RH" },
];

export const vagas: string[] = [
  "Product Manager – Fintech",
  "Desenvolvedor(a) Front-end Sênior",
  "Analista de Negócios Pleno",
];
