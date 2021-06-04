export const TOKEN_KEY = '@writer-Token';

export function isAuthenticated(): boolean
{
  return localStorage.getItem(TOKEN_KEY) !== null;
}

export function getToken() 
{
  return localStorage.getItem(TOKEN_KEY);
}

export function login(token: string)
{
  localStorage.setItem(TOKEN_KEY, token);
}

export function logout()
{
  localStorage.removeItem(TOKEN_KEY);
}