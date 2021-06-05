export const TOKEN_KEY = '@writer-Token';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}