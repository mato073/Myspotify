import axios from 'axios'

export const getParamValues = (url) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});
};

export const setAuthHeader = (token) => {
  try {
    if (token) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};
