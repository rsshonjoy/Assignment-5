document.getElementById("search-button").addEventListener('click', searchResult );

function searchResult() {
    document.getElementById("search-result").innerHTML = "";

    const mealTitle = document.getElementById("title-input").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${mealTitle}`)
    .then(res => res.json())
    .then(data => {

        for (let i = 0; i < data.categories.length; i++) {
            const title = data.categories[i].strCategory;
            const thumb = data.categories[i].strCategoryThumb;

            document.getElementById("search-result").innerHTML += `<div> <h3> ${title} </h3> <img src="${thumb}"/> </div> `;
            // if (i == 0) {
            //     break;
            // }
        }
    });
}


