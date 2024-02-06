import Card from "./Card";
import Pokemon from "./Pokemon";
function App() {

  function getPokemonNumber() {
    return Math.floor(Math.random() * 1010) + 1;
  }

  return (
    <>
      <Pokemon number={getPokemonNumber()}/>
      <Pokemon number={getPokemonNumber()}/>
      <Pokemon number={getPokemonNumber()}/>
      <Pokemon number={getPokemonNumber()}/>
      <Pokemon number={getPokemonNumber()}/>
      <Pokemon number={getPokemonNumber()}/>
      <Pokemon number={getPokemonNumber()}/>
      <Pokemon number={getPokemonNumber()}/>
      <Pokemon number={getPokemonNumber()}/>
      <Pokemon number={getPokemonNumber()}/>
    </>
  )
}

export default App
