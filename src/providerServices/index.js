export const getPokemonList = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error);
    return error
  }
}

export const getPokemonInfoByName = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
    return error
  }
}