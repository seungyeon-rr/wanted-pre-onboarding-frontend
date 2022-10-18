import axios from 'axios';

const baseURL = 'https://pre-onboarding-selection-task.shop/';
const config = {
  headers: {
    'content-type': 'application/json',
  },
};

export function postSignupAPI(data) {
  return axios.post(baseURL + 'auth/signup', { ...data }, config);
}

export function postSignInAPI(data) {
  return axios.post(baseURL + 'auth/signin', { ...data }, config);
}
