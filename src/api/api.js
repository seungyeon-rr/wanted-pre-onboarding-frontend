import axios from 'axios';

const baseURL = 'https://pre-onboarding-selection-task.shop/';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export function postSignUpAPI(data) {
  return axios.post(baseURL + 'auth/signup', { ...data }, config);
}

export function postSignInAPI(data) {
  return axios.post(baseURL + 'auth/signin', { ...data }, config);
}
