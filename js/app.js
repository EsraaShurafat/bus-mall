'use strict';

let leftElement=document.getElementById('leftImge');
let middleElement=document.getElementById('middleImge');
let rightElement=document.getElementById('rightImge');

let maxAttempts=10;
let userAttemptCounter=0;





function Product(name,src){
    this.nameOfProduct=name;
    this.imgSource=src;
    this.vote=0;
    this.shown=0;
products.push(this);

}
let products=[];
// instances
new Product('bag','imges/bag.jpg');
new Product('banana','imges/banana.jpg');
new Product('bathroom','imges/bathroom.jpg');
new Product('boots','imges/boots.jpg');
new Product('breakfast','imges/breakfast.jpg');
new Product('bubblegum','imges/bubblegum.jpg');
new Product('chair','imges/chair.jpg');
new Product('cthulhu','imges/cthulhu.jpg');
new Product('dog-duck','imges/dog-duck.jpg');
new Product('dragon','imges/dragon.jpg');
new Product('pen','imges/pen.jpg');
new Product('pet-sweep','imges/pet-sweep.jpg');
new Product('scissors','imges/scissors.jpg');
new Product('shark','imges/shark.jpg');
new Product('sweep','imges/sweep.png');
new Product('tauntaun','imges/tauntaun.jpg');
new Product('unicorn','imges/unicorn.jpg');
new Product('water-can','imges/water-can.jpg');
new Product('wine-glass ','imges/wine-glass copy.jpg');
new Product('wireframe','imges/wireframe.png');
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
let seen;

// render 
function renderThreeImges() {
 leftImg=getRandomIndex();
 middleImg=getRandomIndex();
rightImg=getRandomIndex();

while ( leftImg===middleImg || leftImg===rightImg || rightImg===middleImg){

rightImg=getRandomIndex();
middleImg=getRandomIndex();
}

 leftElement.src=products[leftImg].imgSource;
 seen=products[leftImg].shown++;
 middleElement.src=products[middleImg].imgSource;
 seen=products[leftImg].shown++;
 rightElement.src=products[rightImg].imgSource;
 seen=products[leftImg].shown++;
 




    
}
renderThreeImges();


console.log(leftImg , rightImg , middleImg);

  
    
   
    


// hand click 
let divImges=document.getElementById('parent');
divImges.addEventListener('click',userClick);



function userClick(event) {
    console.log(event.target.id);
    userAttemptCounter++;

    if (userAttemptCounter<maxAttempts){
      if (event.target.id==='leftImge') {
          products[leftImg].vote++;
          renderThreeImges();
          
      } else if (event.target.id==='middleImge') {
        products[middleImg].vote++;
        renderThreeImges();
    }else if (event.target.id==='rightImge'){ 
            products[rightImg].vote++;
            renderThreeImges();
            
  

          
        }} else {
            let list=document.getElementById('list-result');

            for (let i = 0; i < products.length; i++) {
               let listItem=document.createElement('li');
               list.appendChild(listItem);
               listItem.textContent=`${products[i].nameOfProduct} has ${products[i].vote} votes , and was seen ${products[i].shown} times.`
                
            }
      // remaove event 
      

      
          
      }
   
    }


        


   



