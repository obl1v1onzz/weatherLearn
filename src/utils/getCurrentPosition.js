export let getCurrentPosition = (func) => {
  navigator.geolocation.getCurrentPosition(func);
};
