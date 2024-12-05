//STEP 1
let arrMovies = [
    "Eternal Sunshine of the Spotless Mind",
    "The Greatest Showman",
    "Lala Land",
    "Ratatouille",
    "Singing In The Rain"
]

console.log(arrMovies[1])

//STEP 2
let movies =  new Array(5)
for(let i = 0; i < arrMovies.length; i++){
    movies[i] = arrMovies[i]
}
console.log(movies[0])

//STEP 3
movies =  new Array(5)
for(let i = 0; i < arrMovies.length; i++){
    movies[i] = arrMovies[i]
}
console.log(movies[0])

movies.splice(3,0,"The Sound of Music")
console.log(movies.length)

//STEP 4
movies = [] 
for (let i = 0; i < 5; i++){
    movies.push(arrMovies[i])
}
delete(movies[0])
console.log(movies)

//STEP 5
movies = [
    "Eternal Sunshine of the Spotless Mind",
    "The Greatest Showman",
    "Lala Land",
    "Ratatouille",
    "Singing In The Rain",
    "Rat Race",
    "The Classic"
] 

for(index in movies){
    console.log(movies[index])
}

//STEP 6
movies = [
    "Eternal Sunshine of the Spotless Mind",
    "The Greatest Showman",
    "Lala Land",
    "Ratatouille",
    "Singing In The Rain",
    "Rat Race",
    "The Classic"
] 

/*for(index in movies){
    console.log(movies[index])
}*/

for(let movie of movies){
    console.log(movie)
}

//STEP 7
movies = [
    "Eternal Sunshine of the Spotless Mind",
    "The Greatest Showman",
    "Lala Land",
    "Ratatouille",
    "Singing In The Rain",
    "Rat Race",
    "The Classic"
] 

/*for(index in movies){
    console.log(movies[index])
}

for(let movie of movies){
    console.log(movie)
}*/

movies.sort()
for(let movie of movies){
    console.log(movie)
}

//STEP 8
movies = [
    "Eternal Sunshine of the Spotless Mind",
    "The Greatest Showman",
    "Lala Land",
    "Ratatouille",
    "Singing In The Rain",
    "Rat Race",
    "The Classic"
] 
/*
for(index in movies){
    console.log(movies[index])
}

for(let movie of movies){
    console.log(movie)
}*/

movies.sort()
/*for(let movie of movies){
    console.log(movie)
}*/

leastFavMovies = ["John Wick","Pearl Harbor","Batman Begins"]
let movieStr = ""

movieStr += "Movies I like: \n\n"
for(let i = 0; i < movies.length; i++){
    movieStr += movies[i]+"\n"
}

movieStr += "\nMovies I regret watching:\n\n"
for(let i = 0; i < leastFavMovies.length; i++){
    movieStr += leastFavMovies[i]+"\n"
}
console.log(movieStr)

//STEP 9
movies = [
    "Eternal Sunshine of the Spotless Mind",
    "The Greatest Showman",
    "Lala Land",
    "Ratatouille",
    "Singing In The Rain",
    "Rat Race",
    "The Classic"
] 
/*
for(index in movies){
    console.log(movies[index])
}

for(let movie of movies){
    console.log(movie)
}*/

movies.sort()

/*for(let movie of movies){
    console.log(movie)
}*/

leastFavMovies = ["John Wick","Pearl Harbor","Batman Begins"]

movies = movies.concat(leastFavMovies)
movies = movies.reverse()
movieStr = ""

movieStr += "Movies: \n\n"
for(let i = 0; i < movies.length; i++){
    movieStr += movies[i]+"\n"
}

console.log(movieStr)

//STEP 10
movies = [
    "Eternal Sunshine of the Spotless Mind",
    "The Greatest Showman",
    "Lala Land",
    "Ratatouille",
    "Singing In The Rain",
    "Rat Race",
    "The Classic"
] 
/*
for(index in movies){
    console.log(movies[index])
}

for(let movie of movies){
    console.log(movie)
}*/

movies.sort()

/*for(let movie of movies){
    console.log(movie)
}*/

leastFavMovies = ["John Wick","Pearl Harbor","Batman Begins"]

movies = movies.concat(leastFavMovies)
movies = movies.reverse()
movieStr = ""

movieStr += "Movies: \n\n"
for(let i = 0; i < movies.length; i++){
    movieStr += movies[i]+"\n"
}

//console.log(movieStr)

console.log(movies[movies.length-1])

//STEP 11
movies = [
    "Eternal Sunshine of the Spotless Mind",
    "The Greatest Showman",
    "Lala Land",
    "Ratatouille",
    "Singing In The Rain",
    "Rat Race",
    "The Classic"
] 
/*
for(index in movies){
    console.log(movies[index])
}

for(let movie of movies){
    console.log(movie)
}*/

movies.sort()

/*for(let movie of movies){
    console.log(movie)
}*/

leastFavMovies = ["John Wick","Pearl Harbor","Batman Begins"]

movies = movies.concat(leastFavMovies)
movies = movies.reverse()
movieStr = ""

movieStr += "Movies: \n\n"
for(let i = 0; i < movies.length; i++){
    movieStr += movies[i]+"\n"
}

//console.log(movieStr)
//console.log(movies[movies.length-1])
console.log(movies[0])

//STEP 12
let leastFavIndexes = []

for (let i = 0; i < movies.length; i++){
    let index = leastFavMovies.indexOf(movies[i])
    if(index > -1) leastFavIndexes.push(index)
}

let moreFavMovies = ["Anchorman","Wallace and Gromit: A Grand Day Out","The Proposal"]

for(let i = 0; i < leastFavIndexes.length; i++){
    movies[leastFavIndexes[i]] = moreFavMovies[i]
}

//STEP 13
movies = [
    ["Eternal Sunshine of the Spotless Mind",1],
    ["The Greatest Showman",2],
    ["La la Land",3],
    ["Ratatouille",4],
    ["Singing In The Rain",5]
]

let movieList = ""
for(let i = 0; i < movies.length; i++){
    movieList += "\n" + movies[i].filter(item=>typeof item == "string").join("")
}

console.log(movieList)

//STEP 14
let employees = ["ZAK","JESSICA","MARK","FRED","SALLY"]

console.log("Employees: \n\n")

const showEmployee = (employees)=>{
    for(let i = 0; i < employees.length; i++){
        console.log(employees[i])
    }
}

showEmployee(employees)

//STEP 15
let testArray = [58, '', 'abcd', true, null, false, 0]
const filterValues = (arr) => {
    console.log(arr.filter(item=>item))
}

filterValues(testArray)

//STEP 16
const getRandomItem = (arr)=>{
    let index = Math.floor(Math.random() * (0,arr.length))
    return arr[index]
}

getRandomItem([1,2,3,4,5,6,7,8,9])

//STEP 17
const getMaxElement = (arr) =>{
    return(Math.max(...arr))
}

getMaxElement([2,35,49,24,1])