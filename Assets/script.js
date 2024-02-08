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

var mainDiv = document.body.appendChild(document.createElement("div"));
mainDiv.setAttribute("id", "main-div");







var preBtn = document.body.appendChild(document.createElement("button"));
preBtn.setAttribute("id", "btn");

var button = document.getElementById("btn");
button.textContent = "Press Here for the closest walmart to my location";

var map;
var service;
var infowindow;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    var somersworth = new google.maps.LatLng(43.2618, -70.8653);


    map = new google.maps.Map(
        document.getElementById("map"), { center: somersworth, zoom: 12 }); //where do we put the map on our webpage and what is the map displaying

    window.initMap = initMap;

    var request = {
        query: 'John Powers School',
        fields: ['name', 'geometry'],
    };
    console.log(request);

    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }

            map.setCenter(results[0].geometry.location);
        }
    });
}
window.initMap = initMap;
initMap();






