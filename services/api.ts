/**
 * Camada de integração com a API.
 * Hoje as funções apenas simulam o envio (somente visual). Para integrar de verdade,
 * descomente o bloco `fetch` de cada função e ajuste os endpoints.
 */

const API_URL = import.meta.env.VITE_API_URL ?? "";

const simularLatencia = (ms = 400) => new Promise<void>((r) => setTimeout(r, ms));

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface RegisterPayload {
  nome: string;
  email: string;
  senha: string;
  habilidades: string;
  formacao: string;
}

export async function loginRequest(payload: LoginPayload): Promise<void> {
  // TODO (integração API): autenticar e guardar o token retornado.
  // const res = await fetch(`${API_URL}/auth/login`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!res.ok) throw new Error("Credenciais inválidas");
  // const { token } = await res.json();
  void payload;
  void API_URL;
  await simularLatencia();
}

export async function registerRequest(payload: RegisterPayload): Promise<void> {
  // TODO (integração API): criar o usuário com todos os campos do formulário.
  // const res = await fetch(`${API_URL}/usuarios`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!res.ok) throw new Error("Não foi possível concluir o cadastro");
  void payload;
  await simularLatencia();
}

export async function forgotPasswordRequest(email: string): Promise<void> {
  // TODO (integração API): disparar o e-mail com o link de redefinição de senha.
  // await fetch(`${API_URL}/auth/recuperar-senha`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ email }),
  // });
  void email;
  await simularLatencia();
}

export async function publishPostRequest(texto: string): Promise<void> {
  // TODO (integração API): publicar no feed e usar a resposta para atualizar a lista.
  // await fetch(`${API_URL}/publicacoes`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ texto }),
  // });
  void texto;
  await simularLatencia(150);
}
