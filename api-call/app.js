// const res = axios.get("https://jservice.io/api/random");
// console.log(res.data);

// axios
//   .get("https://jservice.io/api/random/")
//   .then(({ data }) => {
//     console.log(data.question);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// axios
//   .get("https://swapi.dev/api/planets/")
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//     return axios.get(data.next);
//   })
//   .then(({ data }) => {
//     console.log(data);
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const fetchMorePlanets = (url = "https://swapi.dev/api/planets/") => {
//   console.log(url);
//   return axios.get(url);
// };

// const printPlanets = ({ data }) => {
//   console.log(data);
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// fetchMorePlanets()
//   .then(printPlanets)
//   .then(fetchMorePlanets)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log("err", err);
//   });

// function getPlanets() {
//   return axios.get("https://swapi.dev/api/planets/");
// }

// getPlanets().then((res) => {
//   console.log(res.data)
// })

// async function getPlanets() {
//   try {
//     const res = await axios.get("https://swapi.dev/api/planets/");
//     console.log(res.data);
//   } catch (err) {
//     console.error("our error handler", err);
//   }

// const fetchMorePlanets = (url = "https://swapi.dev/api/planets/") => {
//   console.log(url);
//   return axios.get(url);
// };
const printPlanets = ({ data }) => {
  for (let planet of data.results) {
    const ul = document.querySelector("#name");
    const newLi = document.createElement("li");
    // newLi.classList.add("cssClass")
    newLi.innerText = planet.name;
    ul.appendChild(newLi);
  }
  return Promise.resolve(data.next);
};
// fetchMorePlanets().then(printPlanets);

async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.dev/api/planets/");
    printPlanets(res);
  } catch (err) {
    console.error("our error handler", err);
  }
}
getPlanets();

// document.getElementById();
// document.querySelector("#name");
