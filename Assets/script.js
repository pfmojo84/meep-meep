console.log("This is a place for growth and learning. Self worth is not defined by how much we have grown, but only that we are growing :)");

//outline time

//a user submits their preferences/memberships to stores
    //What do we need to make this happen?
        //Nicole warned against text as the users input for preferences/memberships. However, if we were to use text, we need to standarize it. There are probs other issue as well that I do not foresee
            //Questions: with text how do we use the users text input specify to the api what we are looking (what preference/membership)
        //We could have predefined preferences/memberships that the user selects from via radio buttons (a long list of radios with as many stores as possible)

        
//Regardless of how we take in the user preferences/memberships, we will most certainly have an event listener for the submit button where those preferences will be saved (client side storage) and displayed on the page somehow
    //more than likely we are using JSON here to store/stringify the preferences

//a user submits a location
    //having a user submit their current location/ desired location via address would be the easiest. Autocomplete addresses would be biiiiiiiiiiiig which is possible with the google places api which is a huuuuuuuuuuuge plus

    //Another event listener here for when they submit their location/desired location

//A map displayes the closest 5 (or whatever number we desire) of the preferences/memberships


//there are two scenarios we need to consider
    //a. only one type of preference/membership is shown at a time //this is the donut
    //b. all the users preferences/memberships are shown // this is the sprinkles
        //after more consideration we will start with a.

var preBtn = document.body.appendChild(document.createElement("button"));
preBtn.setAttribute("id", "btn");

var button = document.getElementById("btn");
button.textContent = "Press Here for the closest walmart to my location";

button.addEventListener("click", test());

function test(){ 
    console.log("sorry, cant talk, busy event listening");
};

