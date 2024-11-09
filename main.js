const products = [
  {
    title: "Mars rug",
    img: "./images/image 10.svg",
    coin: 100,
    count: 24,
  },
  {
    title: "Keyboard sticker",
    img: "./images/image 22.svg",
    coin: 49,
    count: 11,
  },
  {
    title: "Smart watch",
    img: "./images/image 23.svg",
    coin: 899,
    count: 12,
  },
  {
    title: "Wireless keyboard",
    img: "./images/image 24.svg",
    coin: 350,
    count: 0,
  },
  {
    title: "Mouse",
    img: "./images/image 25.svg",
    coin: 256,
    count: 2,
  },
  {
    title: "AirPods",
    img: "./images/image 26.svg",
    coin: 600,
    count: 5,
  },
  {
    title: "Powerbank",
    img: "./images/image 27.svg",
    coin: 899,
    count: 5,
  },
  {
    title: "USB flash drive",
    img: "./images/image 28.svg",
    coin: 350,
    count: 21,
  },
  {
    title: "Smartphone",
    img: "./images/image 29.svg",
    coin: 3699,
    count: 2,
  },
  {
    title: "Playstation 5",
    img: "./images/image 30.svg",
    coin: 7449,
    count: 1,
  },
  {
    title: "Yandex Station",
    img: "./images/image 31.svg",
    coin: 1999,
    count: 0,
  },
  {
    title: "Planshet Samsung",
    img: "./images/image 32.svg",
    coin: 4999,
    count: 24,
  },
];

const searchInput = document.querySelector("#searchInput");
let cards = document.querySelector(".cards");

function displayProducts(productsArray) {
  cards.innerHTML = ""; 

  productsArray.forEach((item) => {
    let box = document.createElement("div");
    box.classList.add("box1");

    let img = document.createElement("img");
    img.src = item.img;

    let span = document.createElement("span");
    span.classList.add("span");

    let coinIMG = document.createElement("img");
    coinIMG.src = "./images/Coin 1.svg";

    let text = document.createElement("p");
    text.textContent = item.title;

    let span1 = document.createElement("span");
    span1.textContent = `${item.count} dona mavjud`;
    span1.classList.add("span1");

    span.append(coinIMG);
    box.append(img, text, span, span1);

    cards.append(box);
  });
}

displayProducts(products);

searchInput.addEventListener("input", (e) => {
  let inputValue = e.target.value.toLowerCase();

  let filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(inputValue)
  );

  displayProducts(filteredProducts);
});




