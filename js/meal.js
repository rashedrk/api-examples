const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
};

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerText = "";

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Launch demo modal
                    </button>
                </div>
            </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
};

const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
    document.getElementById("mealDetailsBody").innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}">
        <p>${meal.strInstructions}</p>
    `;
}

const loadSearch = () => {
    const searchText = document.getElementById('search-field').value;
    loadMeals(searchText);
};



loadMeals('rice');