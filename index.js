'use strict';

/* global $ */

function handleGetDog(){
  $('.js-form').on('submit', function(event){
    event.preventDefault();
    const inputNum = $('.js-user-input').val();
    validateInputNum(inputNum);
    getDogImages(inputNum);
    // console.log(`getDogImages is :${getDogImages(inputNum)}`);
    // displayDogImages(getDogImages(inputNum));
  });
}

function validateInputNum(input){
  if (input < 1 || input > 50){
    $('.image-container').html('<p>Please select a number between 1 and 50.</p>');
    throw new Error();
  }
}

function getDogImages(input){
  fetch(`https://dog.ceo/api/breeds/image/random/${input.toString()}`)
    .then(response => response.json())
    .then(data => {
      const imageArr = data.message;
      console.log(imageArr);
      displayDogImages(imageArr);
    });
}

function displayDogImages(data){
  console.log(data);
  $('.image-container').html(data.map(element => `<img src="${element}">`));
}

function handleSearchDog(){
  $('.js-search-form').on('submit', function(event){
    event.preventDefault();
    const dogBreed = $('.js-breed-search').val();
  });
}

function main(){
  handleGetDog();
  handleSearchDog();
}

$(main);