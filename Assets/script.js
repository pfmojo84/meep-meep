console.log("This is a place for growth and learning. Self worth is not defined by how much we have grown, but only that we are growing :)");

//outline time

//a user submits their preferences/memberships to stores
//What do we need to make this happen?
//Nicole warned against text as the users input for preferences/memberships. However, if we were to use text, we need to standarize it. There are probs other issue as well that I do not foresee
//Questions: with text how do we use the users text input specify to the api what we are looking (what preference/membership)
//We could have predefined preferences/memberships that the user selects from via radio buttons (a long list of radios with as many stores as possible)


//Regardless of how we take in the user preferences/memberships, we will most certainly have an event listener for the submit button where those preferences will be saved (client side storage) and displayed on the page somehow
//we are using JSON here to store/stringify the preferences

//a user submits a location
//having a user submit their current location/ desired location via address would be the easiest. Autocomplete addresses would be biiiiiiiiiiiig which is possible with the google places api which is a huuuuuuuuuuuge plus

//Another event listener here for when they submit their location/desired location
//A map displayes the closest 5 (or whatever number we desire) of the preferences/memberships
//there are two scenarios we need to consider
//a. only one type of preference/membership is shown at a time //this is the donut
//b. all the users preferences/memberships are shown // this is the sprinkles
//after more consideration we will start with a.



//intialize variables
//What var do i need to create?
//I will need var to create html tags
//buttons
//divs
//form
//variables intialized to strings that will be use for the request for the place api

// intialize map var
var map;
//intialize multiple var to an ID on the html 
var memShips = document.getElementById("mem-ship");
var subBtn23 = document.getElementById("subBtn23");
var subBtn101 = document.getElementById("sub-Btn101");
//We might want to do stuff with these in css hence query selector
var walmart1 = document.querySelector("#walmart-id");
var target2 = document.querySelector("#target-id");

//create buttons
var wal = document.createElement("button");
var tar = document.createElement("button");
var rA = document.createElement("button");
var menards = document.createElement("button");
var cosCo = document.createElement("button");
var wholeFoods = document.createElement("button");
var oceanStateJobLot = document.createElement("button");
var bjsWhole = document.createElement("button");
var hannaford = document.createElement("button");
var kohls = document.createElement("button");
var marketBasket;
var ulta;
var barnsNoble;
var shaws;
var stopAndShop;
var dunkinDonuts;
var starbucks;
var aromaJoes;
var amazon;







var btn = document.createElement("button");
//var subMem = subBtn101.insertAdjacentElement("afterend", btn);
var findStoresBTN = document.createElement("h3");
findStoresBTN.setAttribute("style", "display: none;")

//styling the display as default none and giving ids
wal.setAttribute("style", "display:none")
wal.setAttribute("id", "wal-but");
tar.setAttribute("style", "display:none");
tar.setAttribute("id", "cvs-but");
cvs.setAttribute("style", "display:none");
cvs.setAttribute("id", "cvs-but");
rA.setAttribute("style", "display:none")
rA.setAttribute("id", "riteaid-but")


//create a div and intializing var
var memBut = document.createElement("div");
//apending elements
memShips.appendChild(memBut);
memBut.appendChild(wal);
memBut.appendChild(tar);

//This saves the user choices to local storage and is the function run when the submit button is pressed
function saveStores(anotherOne) {
    // var savedStores = JSON.parse(localStorage.getItem("saved-stores"));
    // console.log(savedStores);

    //I have the first item of the array as a placeholder item as to create the array that the later items will push to
    //if the storage object is emptyj this runs
    if (localStorage.getItem("saved-item") === null) {
        var savedStores = [];
        savedStores.push("empty");
        //storage only takes in strings hence the stringify
        localStorage.setItem("saved-stores", JSON.stringify(savedStores))
        console.log(savedStores);

    }


    //WE are currently just manually checking each check mark

    //evaluting value for the walmart checkmark
    if (walmart1.checked === true) {
        console.log("walmart true");
        var walmart = "walmart";
        anotherOne = walmart;
        console.log(anotherOne);
        //we are updating the object array to include this it is checked off by user
        savedStores.push(anotherOne);

    }

    //check walmart1 if statement. Same idea
    if (target2.checked === true) {
        console.log("target true");
        var target = "target";
        anotherOne = target;
        console.log(anotherOne);
        savedStores.push(anotherOne);

    }

    //There is already an item in the array so it needs to be greater than 2 items in the array when we display the following buttons
    if (savedStores.length >= 2) {
        //console.log("at least 2");
        //btn.innerHTML = "FIND YOUR STORES";
        findStoresBTN.setAttribute("style", "display: visible;")
        findStoresBTN.innerHTML = "Choose one of your memberships";
        subBtn101.insertAdjacentElement("afterbegin", findStoresBTN);

    }


    localStorage.setItem("saved-stores", JSON.stringify(savedStores));
    console.log(savedStores);
    //localStorage.clear(); //this is temp

    loadStores();
}

//load array from storage
function loadStores(savedStores) {
    //we dont actually need to parse this i think because the values we are storing are already strings. However, it is probs good practice
    var savedStores = JSON.parse(localStorage.getItem("saved-stores"));
    console.log(savedStores);
    //debugging
    console.log("come in MOTHERBASE! We need your help");

    
    showStores();
    
    //a function that displays the items in the array as buttons
    function showStores(list) {
        // marker.setMap(null);
        var list = savedStores;
        var len = list.length;
        console.log(list.length);
        console.log(list.length);

        //we are checking the value of the checkboxes
        if (walmart1.checked) {
            console.log("walmart was checked");
            wal.setAttribute("style", "display: visible");
            wal.textContent = "Walmart";
        }

        if (target2.checked) {
            console.log("target was checked")
            tar.setAttribute("style", "display: visible");
            tar.textContent = "Target";
        }
    }

}



//intializing the map
async function initMap() {
    //the await waits for a promise and returns its fullfillment. Because we use a boot loader to load in our api libraries (see script id="boot-loader") this waits to load in the library until we need it
    await google.maps.importLibrary("maps");
    //intializing a var to a lat and long
    var somersworth = new google.maps.LatLng(73.2618, -70.8653);
    //creating a map object, the element it will "live in," and setting some properties
    map = new google.maps.Map(
        document.getElementById("map"), { //where do we put the map on our webpage and what is the map displaying
        center: somersworth,
        zoom: 2,
        mapId: "e7ee8484b15ed5af"
    });

    // if there is value (which there usually will be )
    if (navigator.geolocation) {
        //get the location using the getCurretnPosition
        //A word on getCurrentPosition: requres a callback function that takes the position object as it's parameter
        navigator.geolocation.getCurrentPosition(
            //anon function with the position object as a parameter
            (position) => {
                //setting a varible to the users coords
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                //center that goddamn map on their coords
                map.setCenter(pos);

            }
        )
    }

    map = new google.maps.Map(
        document.getElementById("map"), { center: somersworth, zoom: 9  }); //where do we put the map on our webpage and what is the map displaying

    window.initMap = initMap;
}

async function findPlaces(placeSearch) {
    var placeToTarget = placeSearch;
    console.log(placeToTarget);
    const { Place } = await google.maps.importLibrary("places");
    await google.maps.importLibrary("marker");

    const request = {
        textQuery: placeToTarget,
        fields: ["displayName", "location"],
        maxResultCount: 5,
    }

    const { places } = await Place.searchByText(request);

    const { LatLngBounds } = await google.maps.importLibrary("core");
    const bounds = new LatLngBounds();

    places.forEach((place) => {
        const markerView = new google.maps.Marker({
            map,
            position: place.location,
            title: place.displayName,
        });

        bounds.extend(place.location);
        console.log(place);
    });
    map.setCenter(bounds.getCenter());

}

subBtn23.addEventListener("click", saveStores);

wal.addEventListener("click", (x) => {
    var walPlace = "walmart";
    findPlaces(walPlace);
})

tar.addEventListener("click", (x) => {
    var tarPlace = "target";
    findPlaces(tarPlace);
})
initMap();

