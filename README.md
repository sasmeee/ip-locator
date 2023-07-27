# **IP Locator** - NPM Pacakge for get IP data

IP-Locator is a versatile package that allows you to easily retrieve valuable information based on IP Addresses. With IP-Locator, you can effortlessly access user location details, country-specific data, and even obtain real-time weather updates, all in a single package. This project is based on Javascript.

_Coded by: [Sasmitha Ashinsana](https://github.com/sasmeee)_

## Installation

```
npm i @sasmeee/ip-locator
```

## Usage

```js
const getGeoData = require("@sasmeee/ip-locator");
```

## Note

> **Note:** You should use a valid IP address for doing that.


## Methods

### getGeoData(ip)

Code:

```js
const ip = "112.134.193.130"; // Enter your IP here

const data = await getGeoData(ip);
console.log(data);
```

Output:

```json
{
  "ip": "112.134.193.130",
  "city": "Panadura",
  "region": "Kalutara District (13)",
  "country": "Sri Lanka",
  "postal_code": "12500",
  "continent": "Asia (AS)",
  "coordinates": {
    "lat": "6.7154",
    "long": "79.9019"
  },
  "time": "2023-07-27 13:23:47 (Asia/Colombo)",
  "country_data": {
    "common_name": "Sri Lanka",
    "cca2": "LK",
    "official": "Democratic Socialist Republic of Sri Lanka",
    "subregion": "Southern Asia",
    "languages": "Sinhala, Tamil",
    "currencies": "{\"LKR\":{\"name\":\"Sri Lankan rupee\",\"symbol\":\"Rs  රු\"}}",
    "timezones": "UTC+05:30",
    "area": 65610,
    "population": 21919000,
    "independent": true,
    "capital": "Sri Jayawardenepura Kotte",
    "flags": {
      "svg": "https://flagcdn.com/lk.svg",
      "png": "https://flagcdn.com/w320/lk.png"
    }
  },
  "weather": {
    "temperature": "+30°C",
    "skyCondition": "cloudy",
    "weatherCondition": "↗19km/h"
  }
}
```

## License

This project is protected by the `MIT License.`

## Disclaimer

If you have any complain about this package, please contact via sl.travamaker@gmail.com
