const first_name =document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const country = document.getElementById("country");
const phone_number = document.getElementById("phone_number");
const state = document.getElementById("state");
const city =document.getElementById("city");
const village = document.getElementById("village");

function takePrompt(){
    const firstName = prompt("Enter your First Name")
    const lastName = prompt("Enter your Last Name")
    const Country = prompt("Enter your Country Name")
    const PhoneNumber = prompt("Enter your Phone Number")
    const State = prompt("Enter your State Name")
    const City = prompt("Enter your City Name")
    const Village = prompt("Enter your Vilage Name")

        let object = [{
             firstName,
             lastName,  
             Country,
             PhoneNumber,
             State,
             City,
             Village
        }
    ]

    localStorage.setItem("UserInfo", JSON.stringify(object));
    object.forEach(obj => {
      
        first_name.innerText = obj.firstName;
        last_name.innerText = obj.lastName;
        country.innerText = obj.Country;
        phone_number.innerText = obj.PhoneNumber;
        state.innerText = obj.State;
        city.innerText = obj.City;
        village.innerText = obj.Village;


      });



}
takePrompt();