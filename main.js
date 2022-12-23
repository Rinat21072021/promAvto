(async () => {
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
    let response = await fetch(url);

    let commits = await response.json()

    console.log(commits);
})()