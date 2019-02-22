export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.fara = parseFloat((this.kelvin*(9/5)-459.67).toFixed(1))
  }
  getTemplate(){
    return `
    <h1>${this.city}</h1>
    <h3>${this.fara}°F </h1>
    `
}
}