

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
};

function displayUsers(users) {
    const usersContainer = document.getElementById('users-container')
    for (const user of users) {
        const userDiv = document.createElement('div')
        // adding an classList for creating a class
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h2>ID: ${user.id}</h2>
        <p>Name: ${user.name}</p>
        <p>User Name: ${user.username}</p>
        <p>Email: ${user.email}</p>
                <h3>Address</h3>
        <p>Street: ${user.address.street}</p>
        <p>Suite: ${user.address.suite}</p>
        <p>City: ${user.address.city}</p>
        <p>Zipcode: ${user.address.zipcode}</p>
                 <h4>Geo</h4>
        <p>Lat: ${user.address.geo.lat}</p>
        <p>Lng: ${user.address.geo.lng}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
                 <h5>Company</h5>
        <p>Name: ${user.company.name}</p>
        <p>Catch Phrase: ${user.company.catchPhrase}</p>
        <p>Bs: ${user.company.bs}</p>
        `;
        usersContainer.appendChild(userDiv)
    }
};


loadUsers();