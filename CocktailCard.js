

const getCocktailData=async()=>{
    try {
        const fetchRes= await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        const cocktails = await fetchRes.json();
        console.log(cocktails.drinks.length);
        return cocktails.drinks;
        //console.log(cocktails);        
    } catch (error) {
        console.log('There is an error during fetching the data and it may due to ' + error);        
    }
}

getCocktailData().then(drink => {
    //console.log(drink[0].strDrink);
    drink.forEach(item => DisplayCocktailData(item));
  });

const DisplayCocktailData=(cocktail)=>{

const cardContainer = document.querySelector('.section-container');
console.log(cardContainer);

cardContainer.innerHTML += `<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
<img src="${cocktail.strDrinkThumb}" class="img-fluid" />
<a href="#!">
  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
</a>
</div>
<div class="card-body">
<h5 class="card-title font-weight-bold"><a>${cocktail.strDrink}</a></h5>
<p class="mb-2"> • ${cocktail.strCategory}</p>
<p class="card-text">${cocktail.strInstructions}</p>

<p class="lead"><strong>Ingredients</strong></p>
<ul class="list-unstyled list-inline d-flex justify-content-between">
  <li class="list-inline-item me-0">
    <div class="chip me-0">${cocktail.strIngredient1}</div>
  </li>
  <li class="list-inline-item me-0">
    <div class="chip me-0">${cocktail.strIngredient2}</div>
  </li>
  <li class="list-inline-item me-0">
    <div class="chip me-0">${cocktail.strIngredient3}</div>
  </li>
  <li class="list-inline-item me-0">
    <div class="chip me-0">${cocktail.strIngredient4}</div>
  </li>
  <li class="list-inline-item me-0">
    <div class="chip me-0">${cocktail.strIngredient5}</div>
  </li>
</ul>
<hr class="my-4" />
</div>`;    
}