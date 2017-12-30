const savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary ({ name, extension, size}) {
    return `The file ${name}. ${extension} is of size ${size}.`
}

fileSummary(savedFile);

//////////////////////////////////////////

const companies = [
    {name: 'Google', location: 'Mountain View'},
    {name: 'Facebook', location: 'Menlo Park'},
    {name: 'Uber', location: 'San Francisco'},
];

// const [{ location }] = companies;
// location;

const Google = {
    locations: ['Mountain View', 'New York', 'London']
};

console.log(Google.locations[0]);

const { locations: [ location ] } = Google;
console.log(location);


//////////////////////////////////////////

function signup({username, password, email, dateOfBirth, city}) {
    // create new user
}


const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dateOfBirth: '1/1/1900',
    city: 'New York'
};

signup(user);

//////////////////////////////////////////

const points = [
    [4, 5],
    [10, 1],
    [0, 20]
];

points.map(([ x, y ]) => {
    return { x, y }
});

