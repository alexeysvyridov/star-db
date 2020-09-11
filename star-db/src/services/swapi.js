export default class SwappiService {
  _apiBase = 'https://swapi.dev/api'
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}/`);
    if(!res.ok) {
      console.log(`Could not fetch ${url}`)
    }
    return await res.json()
  }
  async  getAllPeople() {
    const res =  await this.getResource(`/people`)
    return res.map(this._transformPerson);
  }
  getPerson(id) {
    return this.getResource(`/people/${id}`)
  }
  async getAllPlanets() {
    const planets =  await this.getResource(`/planets`)
    return planets.map(this._transformPlanet)
  }
  async getPlanet(id) {
    try {
      const planet =  await this.getResource(`/planets/${id}`)
      return this._transformPlanet(planet);
    } catch(err) {
      console.log(err);
    }
  }
  async  getAllStarships(id) {
    const starships =  await this.getResource(`/starships`)
    return starships.map(this._transformStarship);
  }
  async getStarship(id) {
    const starship = this.getResource(`/starships${id}/`)
    return this._transformPlanet(starship)
  }
  _extractId(item) {
    const idRegExp = /\/([0-9])*\/$/;
    return item.url.match(idRegExp)[1];
     
  }
  _transformPlanet(planet) {
    return  {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    }
  }
  _transformStarship(starships) {
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
  _transformPerson(person) {
    return  {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
    }
  }
}
const swapi = new SwappiService()