const loadData = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
};

const displayUser = user => {
    const userContainer = document.getElementById('user-container');

    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    const gender = user.results[0].gender;
    const city = user.results[0].location.street.number + '/' + user.results[0].location.street.name + ', ' + user.results[0].location.country; 
    const img = user.results[0].picture.medium;

    userContainer.innerHTML = `
    <img src="${img}" alt="">
    <h4>Name: ${name}</h4>
    <h5>Gender: ${gender}</h5>
    <h6>Country: ${city}</h6>
    `;
};

loadData();