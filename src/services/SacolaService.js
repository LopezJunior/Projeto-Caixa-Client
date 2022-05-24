import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

export const SacolaService = {
  getLista: () => fetch(Api.getSacola(), { method: "GET" }).then(parseResponse),
  create: (sacola) =>
    fetch(Api.createSacola(), {
      method: "POST",
      body: JSON.stringify(sacola),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),
  purchase: (id) =>
    fetch(Api.purchase(id), { method: "DELETE" }).then(parseResponse),
};