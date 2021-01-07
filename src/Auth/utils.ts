import { TOKEN_AUTH } from './constants';

export const getToken = () => ({
  token: localStorage.getItem(TOKEN_AUTH),
});

export const setToken = (auth: string) => {
  localStorage.setItem(TOKEN_AUTH, auth);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_AUTH);
};
