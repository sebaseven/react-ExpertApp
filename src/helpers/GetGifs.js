

export const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=uAGAsR5SfbHKu2g4cMqHOQN7V7inU76d&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((imagen) => {
      return {
        id: imagen.id,
        title: imagen.title,
        url: imagen.images?.downsized_medium.url,
      };
    });
    return gifs;
  };