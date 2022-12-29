const URL = "http://10.10.0.31:8080";
const LOGIN_URL = `${URL}/login`;
const REGISTER_URL = `${URL}/register`;


export function doLogin(data) {
  return fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Credenciales incorrectas ...");
      return response.json();
    })
    .then(({ data }) => data);
}

//function Logout() {} //TO DO

export function doRegister(data) {
  return fetch(REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) throw new Error("datos no validos");
      return response.json();
    })
    .then(({ data, error }) => {
      return { data, error };
    });
}
