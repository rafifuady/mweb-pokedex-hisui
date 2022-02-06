import { baseService } from "../../../common/services/baseService";

function encodeQueryData(data) {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
  return ret.join("&");
}

export class pokedexService extends baseService {
  getList(payload) {
    let param = {
      offset: payload.offset,
      limit: payload.limit
    }

    const querystring = encodeQueryData(param);

    return this.baseGET(`pokemon?${querystring}`, true);
  }

  getDetail(pokeId) {
    return this.baseGET(`pokemon/${pokeId}`)
  }
}