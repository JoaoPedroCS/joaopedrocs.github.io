

fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/1026')
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    console.log(authorDataArr); 
  })
  .catch((err) => {
    alert("Pokemon not found");
  });