const getGeoData = require("./index");

async function getLocation() {
  const ip = "112.134.193.130";

  try {
    const data = await getGeoData(ip);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getLocation();
