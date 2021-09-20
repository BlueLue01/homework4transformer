let chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function eleMaker(char){
    let ele = document.createElement("div");
    ele.classList.add("character");
    let nameEle = document.createElement("h3");
    let classEle = document.createElement("h3");
    let vehicleEle = document.createElement("h3");
    let imgEle = document.createElement("img");

    nameEle.innerHTML = "Name: " + char.name;
    classEle.innerHTML = "Class: " + char.class.toUpperCase();
    vehicleEle.innerHTML = "Vehicle: " + char.vehicle;

    if (char.afl === "autobot") {
        ele.classList.add("autobot");
        imgEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";

    } else if (char.afl === "decepticon") {
        ele.classList.add("decepticon");
        imgEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";

    }

    if (char.vehicle === "truck") {
        vehicleEle.style.color = "blue"
    }
    if (char.vehicle === "tank") {
        vehicleEle.style.color = "green"
    }
    if (char.vehicle === "car") {
        vehicleEle.style.color = "gold"
    }
    if (char.vehicle === "plane") {
        vehicleEle.style.color = "white"
    }

    ele.appendChild(nameEle);
    ele.appendChild(classEle);
    ele.appendChild(vehicleEle);
    ele.appendChild(imgEle);

    document.body.appendChild(ele);

}

for(let i=0; i<chrs.length; i++){
    eleMaker(chrs[i]);
}



// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white
