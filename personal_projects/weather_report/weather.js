function GetWeatherJSON(loclat,loclong){
    link = "https://api.open-meteo.com/v1/forecast?latitude=" + loclat + "&longitude=" + loclong + "&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,windspeed_10m,uv_index&temperature_unit=fahrenheit&windspeed_unit=mph&past_days=1&timezone=auto"
    return(fetch(link).then(respone => respone.json()))
}

var json = GetWeatherJSON(40.73,-74.08)

var obj = JSON.parse(json)

function printValues(obj) {
    for(var k in obj) {
        if(obj[k] instanceof Object) {
            printValues(obj[k])
        } else {
            document.write(obj[k] + "<br>")
        }
    }
}

printValues(obj)
