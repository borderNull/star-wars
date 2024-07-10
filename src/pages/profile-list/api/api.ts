export const fetchList = async (page = 0, searchInput = "") => {

  try {
    const searchRequest = searchInput.length ? "&search=" + searchInput : "";
    const response = await fetch(
      "https://swapi.dev/api/people/?page=" + page + searchRequest
    );
    return response.json();

  } catch (e) {
    console.log('fetchList error', e);

  }
};

export const api = {
  key: "getPersonsList",
  fn: fetchList,
};
