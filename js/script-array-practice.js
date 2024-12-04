//STEP 1
let arrMovies = [
    "Eternal Sunshine of the Spotless Mind",
    "The Greatest Showman",
    "Lala Land",
    "Ratatouille",
    "Pitch Perfect"
]

console.log(arrMovies[1])

//STEP 2
class Movies{
    constructor(){
       let movies =  new Array(5)
       for(let i = 0; i < arrMovies.length; i++){
        movies[i] = arrMovies[i]
       }
       console.log(movies[0])
    }
}

let m = new Movies()

//STEP 3
class Movies2{
    constructor(){
       let movies =  new Array(5)
       for(let i = 0; i < arrMovies.length; i++){
        movies[i] = arrMovies[i]
       }
       movies.splice(3,0,"The Sound of Music")
       console.log(movies.length)
    }
}

let m2 = new Movies2()

//STEP 4
let movies = [] 
for (let i = 0; i < arrMovies.length; i++){
    movies.push(arrMovies[i])
}
delete(movies[0])
console.log(movies)

//STEP 5
//let movies = [] //how to declare, but commenting out due to beign declared previously
movies = [] 
for (let i = 0; i < arrMovies.length; i++){
    movies.push(arrMovies[i])
}
movies.push("Rat Race")
movies.push("The Classic")

for(let i = 0; i < movies.length; i++){
    console.log(movies[i])
}

//STEP 6
//let movies = [] //how to declare, but commenting out due to beign declared previously
movies = [] 
for (let i = 0; i < arrMovies.length; i++){
    movies.push(arrMovies[i])
}
movies.push("Rat Race")
movies.push("The Classic")

for(let i in movies){
    console.log(movies[i])
}

//STEP 7
//let movies = [] //how to declare, but commenting out due to beign declared previously
movies = [] 
for (let i = 0; i < arrMovies.length; i++){
    movies.push(arrMovies[i])
}
movies.push("Rat Race")
movies.push("The Classic")

for(let movie of movies){
    console.log(movie)
}

//STEP 8
//let movies = [] //how to declare, but commenting out due to beign declared previously
movies = [] 
let leastFavMovies = ["John Wick","Pearl Harbor","Batman Begins"]
let movieStr = ""

for (let i = 0; i < arrMovies.length; i++){
    movies.push(arrMovies[i])
}
movies.push("Rat Race")
movies.push("The Classic")

movieStr += "Movies I Like: \n\n"
for(let i = 0; i < movies.length; i++){
    movieStr += movies[i]+"\n"
}

movieStr += "\nMovies I regret watching:\n\n"
for(let i = 0; i < leastFavMovies.length; i++){
    movieStr += leastFavMovies[i]+"\n"
}
console.log(movieStr)

//STEP 9
//let movies = [] //how to declare, but commenting out due to beign declared previously
movies = [] 
leastFavMovies = ["John Wick","Pearl Harbor","Batman Begins"]
movieStr = ""

for (let i = 0; i < arrMovies.length; i++){
    movies.push(arrMovies[i])
}
movies.push("Rat Race")
movies.push("The Classic")

movies.concat(leastFavMovies)
console.log(movies.reverse())

//STEP 10
//let movies = [] //how to declare, but commenting out due to beign declared previously
movies = [] 
leastFavMovies = ["John Wick","Pearl Harbor","Batman Begins"]
movieStr = ""

for (let i = 0; i < arrMovies.length; i++){
    movies.push(arrMovies[i])
}
movies.push("Rat Race")
movies.push("The Classic")

movies.concat(leastFavMovies)
let reverseMovies = movies.reverse()
console.log(reverseMovies[reverseMovies.length-1])

//STEP 11
//let movies = [] //how to declare, but commenting out due to beign declared previously
movies = [] 
leastFavMovies = ["John Wick","Pearl Harbor","Batman Begins"]
movieStr = ""

for (let i = 0; i < arrMovies.length; i++){
    movies.push(arrMovies[i])
}
movies.push("Rat Race")
movies.push("The Classic")

movies.concat(leastFavMovies)
movies = movies.reverse()
console.log(movies[0])

//STEP 12
let leastFavIndexes = []

for (let i = 0; i < movies.length; i++){
    let index = movies[i].inArray(leastFavMovies)
    if(index > -1) leastFavIndexes.push(index)
}

let moreFavMovies = ["Anchorman","Singing In The Rain","The Proposal"]

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