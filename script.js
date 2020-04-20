// All About Me
// instantiate and assign the following variables with information about yourself:
// firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravel should hold a boolean representing whether or not you like to travel
// Log each variable to the console.


// var firstName = "Derek"
// console.log (firstName)

// var lastName = "Mayse"
// console.log (lastName)

// var likesTravel = true
// console.log (likesTravel)
 
// var age = 27
// console.log (age)

// Favorite Movies
// In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console.

// var movieArray = ["Donnie Darko", "Scott Pilgrim", "Pan's Labryith"]
 
// console.log (movieArray[0])
// console.log (movieArray[1])
// console.log (movieArray[2])

// Instead of storing the data from your first lightning exercise in separate variables, store them in an object. Your object should have a property of firstName, lastName, age, likesToTravel. It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.

// var me ={
//     firstName: "Derek",
//     lastName: "Mayse",
//     age: 27,
//     likesToTravel: true,
//     favoriteMovies: ["Donnie Darko", "Scott Pilgrim", "Pan's Labryinth"],
//     parents:{
//         mom:"Erana",
//         dad:"Michael"
//     }
// }

// dot notation 

// console.log (me)
// console.log (me.firstName)
// console.log (me.favoriteMovies[0])
// console.log (me.parents.mom)

// bracket notation 

// console.log (me["age"])
// console.log (me["favoriteMovies"][0])
// console.log (me["parents"]["mom"])


// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log (wardrobe.height, wardrobe.manufacturer, wardrobe.contents[0], wardrobe.contents[1], wardrobe.contents[2], wardrobe.contents[3], wardrobe.contents[4], wardrobe.depth, wardrobe.width)



// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.


// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }

// console.log (empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.address, empireStateBuilding.squareFeet, empireStateBuilding.constructionDate, empireStateBuilding.cost, empireStateBuilding.owner, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength, empireStateBuilding.architect)

// console.log (empireStateBuilding["stories"], empireStateBuilding["height"], empireStateBuilding["address"], empireStateBuilding["squareFeet"], empireStateBuilding["constructionDate"], empireStateBuilding["cost"], empireStateBuilding["owner"], empireStateBuilding["eastWestLength"], empireStateBuilding["northSouthLength"], empireStateBuilding["architect"])


// Lightning Exercise 1: Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// object 

// Lightning Exercise 2: Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// array 

// Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// var familyMembers = {
//     pizza:"mom",
//     taco:"dad",
//     sushi:"sister",
//     chips:"brother"
// }

// var familyMembers = ["mom","dad", "sister", "brother" ]


// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// Lightning Exercise 2: Output only Andy and Zoe in the console.


// const nashvilleSoftwareSchool = {
//     founded: 2012,
//     director: "John Wark",
//     instructors: {
//         fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
//         partTime: ["Zoe", "Nathan"]
//     },
//     address: "500 Interstate Blvd. S"
// }

// console.log(nashvilleSoftwareSchool.instructors.partTime, nashvilleSoftwareSchool.instructors.fullTime)

// console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0])

// Output the following value to the console.

// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.



// const beatles = {
//     albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
//     history: {
//         formed: 1960,
//         disbanded: 1970
//     },
//     members: [
//         {
//             name: "George Harrison",
//             birth: 1943,
//             death: 2001
//         },
//         {
//             name: "Paul McCartney",
//             birth: 1942,
//             death: null
//         },
//         {
//             name: "John Lennon",
//             birth: 1940,
//             death: 1980
//         },
//         {
//             name: "Ringo Starr",
//             birth: 1940,
//             death: null
//         }
//     ]
// }

// console.log (beatles.members[1].name, `was in the beatles from`, beatles.history.formed, `to`, beatles.history.disbanded, `He was born in`, beatles.members[1].birth, `He contributed heavily to the`, beatles.albums[3])

const likesToTravel = false
if (likesToTravel === true){
    console.log ("bon voyage")
}
else {
    console.log ("stay on yout couch")
}