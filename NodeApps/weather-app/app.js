const request = require("request");
const chalk = require('chalk')
const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/63581c7e05d248215dafc9789acb407d/37.8267,-122.4233?units=si'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log(chalk.red.inverse.bold('Unable to connect to weather service!'))
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain. ")
//   }
// })

// Forward Geocoding
// Address-> API converts to lat and long -> Weather

// const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmF0c2FhYXNod2luIiwiYSI6ImNrMmEzeWxjeTF3ODMzYnBlY3d2bmEzbDIifQ.ZUoV1zzvGkN3y6PLoyGxSw'

// request({ url: urlGeo, json: true }, (error, response) => {
//   if (error) {
//     console.log(chalk.red.inverse.bold('Unable to connect to geoLocation service!'))
//   } else if (response.body.features.length == 0) {
//     console.log('Unable to match location. Try another search!')
//   } else {
//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]
//     console.log(longitude, latitude)
//   }
// })



geocode('Portland', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})


