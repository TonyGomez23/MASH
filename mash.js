function mash (){
    return "You will live in a " + getHome() + " an you will have " + getChildrenCount(process.argv[2]) + " kids, and you'll drive a " + getCar();
}

console.log(mash());

function getHome(){
    let mash = [
        "Mansion",
        "Apartment",
        "Shack",
        "House",

    ];

    //let place = mash[0, 1, 2, 3];
    // MASH[3]
    let ran = Math.random();
    let prop = (ran * mash.length);
    let number = Math.floor(prop);
    return mash[number];
}

let number = getHome();


//to get a value from an array
//arrayName[index of value]

function getChildrenCount(user){
    let numbers = Math.random();
    let mult10 = (numbers * 100);
    let count = Math.floor(mult10);
    
    if(count < 50 ){
        return count;
    } else {
        if (user == undefined){
            console.log("please proved number of kids");
        }else{}
    } 


}
let count = getChildrenCount(process.argv[2]);

function getCar(){
    let cars = [
        "lambo",
        "convertible",
        "box with wheels",
        "shopping cart",
    ];

    let wheels = Math.random();
    let windows = wheels * cars.length;
    let vehicles = Math.floor(windows);
    return cars[vehicles];

}
