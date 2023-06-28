function addData() {
  // Retrieve data
  var first = document.getElementById('firstname').value;
  var last = document.getElementById('lastname').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;

  // Create an object with the data
  var userData = {
    firstName: first,
    lastName: last,
    city: city,
    state: state
  };

  // Make a POST request to the API endpoint
  fetch('https://api.example.com/saveUserData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => {
      if (response.ok) {
        console.log('Data saved successfully!');
        // Redirect the user to the next page or perform any other actions
      } else {
        console.log('Failed to save data!');
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}
// Make a GET request to fetch the user data from the API
fetch('https://api.example.com/userData')
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data
    var firstName = data.firstName;
    var lastName = data.lastName;
    var city = data.city;
    var state = data.state;

    // Use the retrieved data as needed
    console.log(firstName, lastName, city, state);
  })
  .catch(error => {
    // Handle any errors
    console.log('Error:', error);
  });

      