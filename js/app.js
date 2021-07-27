'use strict';

let leftElement = document.getElementById('leftImge');
let middleElement = document.getElementById('middleImge');
let rightElement = document.getElementById('rightImge');

let maxAttempts = 10;
let userAttemptCounter = 0;
// for the chart
let namesArry = [];

let votesArry = [];

let shownArry = [];


let products = [];


function Product(name, src) {
  this.nameOfProduct = name;
  this.imgSource = src;
  this.vote = 0;
  this.shown = 0;
  products.push(this);
  // for the chart
  namesArry.push(this.nameOfProduct);

}

// chart
// Product.products=[];


// instances
new Product('bag', 'imges/bag.jpg');
new Product('banana', 'imges/banana.jpg');
new Product('bathroom', 'imges/bathroom.jpg');
new Product('boots', 'imges/boots.jpg');
new Product('breakfast', 'imges/breakfast.jpg');
new Product('bubblegum', 'imges/bubblegum.jpg');
new Product('chair', 'imges/chair.jpg');
new Product('cthulhu', 'imges/cthulhu.jpg');
new Product('dog-duck', 'imges/dog-duck.jpg');
new Product('dragon', 'imges/dragon.jpg');
new Product('pen', 'imges/pen.jpg');
new Product('pet-sweep', 'imges/pet-sweep.jpg');
new Product('scissors', 'imges/scissors.jpg');
new Product('shark', 'imges/shark.jpg');
new Product('sweep', 'imges/sweep.png');
new Product('tauntaun', 'imges/tauntaun.jpg');
new Product('unicorn', 'imges/unicorn.jpg');
new Product('water-can', 'imges/water-can.jpg');
new Product('wine-glass ', 'imges/wine-glass copy.jpg');

// console.log(products);
// console.log(Product);



// from w3 schools / calss dom
function getRandomIndex() {
  // 0=>20
  return Math.floor(Math.random() * products.length);
}

//   console.log(getRandomIndex());

let leftImg;
let rightImg;
let middleImg;
// let seen;
let Imges = [];

// render 
function renderThreeImges() {
  leftImg = getRandomIndex();
  middleImg = getRandomIndex();
  rightImg = getRandomIndex();

 

  while (leftImg === middleImg || leftImg === rightImg || rightImg === middleImg 
    || Imges.includes(leftImg) || Imges.includes(rightImg) || Imges.includes(middleImg)) {

    leftImg=getRandomIndex();
    rightImg = getRandomIndex();
    middleImg = getRandomIndex();
    
    

  }
  Imges = [leftImg, middleImg, rightImg];




  leftElement.src = products[leftImg].imgSource;
  products[leftImg].shown++;
  middleElement.src =products[middleImg].imgSource;
   products[leftImg].shown++;
  rightElement.src = products[rightImg].imgSource;
  products[leftImg].shown++;


  updateStorge();



}
renderThreeImges();


// console.log(leftImg, rightImg, middleImg);







// hand click 
let divImges = document.getElementById('parent');
divImges.addEventListener('click', userClick);
let buttonelement = document.getElementById('button');


function userClick(event) {
  // console.log(event.target.id);
  // userAttemptCounter++;

  if (userAttemptCounter <= maxAttempts) {
    if (event.target.id === 'leftImge') {
      products[leftImg].vote++;
      // console.log(products);
      // renderThreeImges();

    } else if (event.target.id === 'middleImge') {
      products[middleImg].vote++;
      // console.log(products);
      // renderThreeImges();
    } else if (event.target.id === 'rightImge') {
      products[rightImg].vote++;
      // console.log(products);
      // renderThreeImges()
    }
    renderThreeImges();

    
  
  
}else {
    buttonelement.hidden = false;
    // buttonelement.addEventListener('click', userClick);
    buttonelement.addEventListener('click', list);

    // chart 
    for (let i = 0; i < products.length; i++) {

      votesArry.push(products[i].vote);
      shownArry.push(products[i].shown);

    }
    console.log(votesArry);
    divImges.removeEventListener('click', userClick);
    showChart();
  }
  userAttemptCounter++;
}




function list() {
  let list = document.getElementById('list-result');

  for (let i = 0; i < products.length; i++) {
    let listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent = `${products[i].nameOfProduct} has ${products[i].vote} votes , and was seen ${products[i].shown} times.`

  }
  // remaove event 
  
  buttonelement.removeEventListener('click', list);

}






// chart 


function showChart() {

  const data = {
    labels: namesArry,
    datasets: [{
      label: 'Votes',
      data: votesArry,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
    {
      label: 'Shown',
      data: shownArry,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }

    ]
  };



  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}

// local storage 

function updateStorge() {
console.log('updatearr',products);
let strigArr=JSON.stringify(products);
localStorage.setItem('Products',strigArr);
}

function getStorageData(){
  let data=localStorage.getItem('Products');
  console.log(data);
  let parseArr=JSON.parse(data);
  console.log(parseArr);
  if (parseArr!==null) {
    products=parseArr;
  }
  
  renderThreeImges();
}

getStorageData();




