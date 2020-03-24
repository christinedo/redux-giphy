export const fetchSearchGiphys = searchTerm =>
  $.ajax({
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.GIPHY_API_KEY}&limit=2`
  });
