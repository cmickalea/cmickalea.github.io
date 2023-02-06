let ingredient;
const api = `https://api.edamam.com/api/food-database/v2/parser?app_id=9b0787f2&app_key=8c87be61eaaaeec3e4ec1d01cabb617c%09&ingr=`;
let userInput;

const nutrientList = document.createElement('ul')
const hr = document.createElement('hr')
$(nutrientList).addClass('nutritional-facts')
const table = $('table')
$(nutrientList).insertBefore(table);
$(hr).insertAfter(nutrientList);

const searchButton = $(".search-food-item__submit");


$(searchButton).on("click", function (event) {
  event.preventDefault();
  userInput = $(".search-food-item__input").val();
  ingredient = userInput.replace(/\s/g, "%20");
  console.log(ingredient);
  console.log(api);
  fetch(`${api}${ingredient}&nutrition-type=cooking`)
    .then((res) => res.json())
    .then((data) => {
      let foodInfo = data.hints[0].food;
      let foodImg = foodInfo.image;
      let foodNutrients = foodInfo.nutrients;
      infoSection(foodImg, foodNutrients);
      let listOfNutrients = $(ul)
      listOfNutrients.innerHTML = ' '
    });
});

function infoSection(imageOfFood, nutrientsOfFood) {
  const img = $(".food-image");
  $(img).attr("src", `${imageOfFood}`);
  let entries = Object.entries(nutrientsOfFood);
  $(nutrientList).empty()
  entries.map(([key, val] = entry) => {
    let typeOfNutrient = key;
    let valueOfNutrient = val;
    console.log(typeOfNutrient, valueOfNutrient);
    let li = document.createElement("li");
    li.innerHTML = `${typeOfNutrient} : ${valueOfNutrient}`;
    nutrientList.appendChild(li);
  });
  $(table).removeClass('hide')
}
