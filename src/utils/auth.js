export const BASE_URL = 'https://register.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password })
  })
  .then((response) => {
    if (response.status === 201) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error(
         'One or more of the fields were not provided'
     )
  }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => err);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password}),
  })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error('One or more of the fields were not provided');
    }
    if (response.status === 401) {
      throw new Error('The user with the specified email not found ');
    }
  })
  .then((data) => {
      localStorage.setItem('jwt', data.jwt);
      localStorage.setItem('email', email);
      return data;
  })
  .catch((err) => err)
}

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    }
  })
  .then((response) => {
    if (response.status === 200 || response.status === 201) {
      return response.json();
    }
    if (response.status === 400) {
      throw new Error('Token not provided or provided in the wrong format');
    }
    if (response.status === 401) {
      throw new Error('The provided token is invalid');
    }
  })
  .catch((err) => err)
};
