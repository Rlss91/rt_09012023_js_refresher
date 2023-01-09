const getAllChar = () => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then(({ data }) => {
      console.log("🚀 ~ file: rickAndMorty.js:5 ~ .then ~ data", data);
      //   let { data } = response;
      //   console.log("response from axios", response);
    })
    .catch((error) => {
      console.log("error from axios", error);
    });
};
getAllChar();
