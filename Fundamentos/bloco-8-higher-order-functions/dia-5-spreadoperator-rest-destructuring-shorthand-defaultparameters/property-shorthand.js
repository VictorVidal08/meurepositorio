
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});
  
  console.log(getPosition(-19.8157, -43.9542));

  // tem o mesmo efeito de:

  const getPosition = (latitude, longitude) => ({
    latitude: latitude,
    longitude: longitude});
  
  console.log(getPosition(-19.8157, -43.9542));