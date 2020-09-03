class SwappiService {
  _apiBase = 'https://swapi.dev/api'
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}`)
    }
    return await res.json()
  }
  async  getAllPeople() {
    const res =  await this.getResource(`/people`)
    return res.results;
  }
  getPerson(id) {
    return this.getResource(`/people${id}/`)
  }
  async getPlantes() {
    const res =  await this.getResource(`/planets`)
    return res.results;
  }
  getPlante(id) {
    const res =  await this.getResource(`/planets${id}`)
    return res.results;
  }
  async  getAllStarships(id) {
    const res =  await this.getResource(`/starships`)
    return res.results;
  }
  getAllStarships(id) {
    const res =  await this.getResource(`/starships${id}`)
    return res.results;
  }
}
const swapi = new SwappiService()
swapi.getAllPeople().then((people)=> {
  people.forEach((item, i) => {
    console.log(item.name);
  });

})
