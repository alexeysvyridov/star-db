export default class SwappiService {
  _apiBase = 'https://swapi.dev/api'
  _imageBase = 'https://starwars-visualguide.com/assets/img'
   getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}/`);
    if(!res.ok) {
      console.log(`Could not fetch ${url}`)
    }
    return await res.json()
  }
    getAllPeople = async () => {
    const res =  await this.getResource(`/people`)
    return res.results.map(this._transformPerson);
  }
   getPerson = async (id)=> {
    const person = await this.getResource(`/people/${id}`)
    return this._transformPerson(person)
  }
   getAllPlanets = async () => {
    const planets =  await this.getResource(`/planets`)
    return planets.results.map(this._transformPlanet)
  }
   getPlanet = async (id) => {
    try {
      const planet =  await this.getResource(`/planets/${id}`)
      return this._transformPlanet(planet);
    } catch(err) {
      console.log(err);
    }
  }
  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  }
  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  }
  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  }
  getAllStarships = async (id)=> {
    const starships =  await this.getResource(`/starships`)
    return starships.results.map(this._transformStarship);
  }
   getStarship = async (id)=> {
    const starship = this.getResource(`/starships${id}/`)
    return this._transformPlanet(starship)
  }
  _extractId = (item) => {
    const idRegExp = /\/([0-9])*\/$/;
    return item.url.match(idRegExp)[1];
     
  }
  _transformPlanet = (planet) => {
    return  {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    }
  }
  _transformStarship = (starships)  => {
    return  {
        id: this._extractId(starships),
        name: starships.name,
        model: starships.model,
        monufacturer: starships.monufacturer,
        costInCredits: starships.costInCredits,
        length: starships.length,
        crew: starships.crew,
        passangers: starships.passangers,
        cargoCapacity: starships.cargoCapacity
    }
  }
  _transformPerson = (person) => {
    return  {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
    }
  }
}
const swapi = new SwappiService()