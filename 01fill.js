function addData() {

        // Retrieve data
        var first = document.getElementById('firstname').value;
        var last = document.getElementById('lastname').value;
        var city = document.getElementById('city').value;
        var state = document.getElementById('state').value;
      
        // Store data
        localStorage.setItem('userFirstName', first);
        localStorage.setItem('userLastName', last);
        localStorage.setItem('userCity', city);
        localStorage.setItem('userState', state);
        
      }
      