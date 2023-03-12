/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  // continue the code here

  constructor(firstName, lastName, gender, birthYear){
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.birthYear = birthYear
  }

  printName() {
    console.log(`${this.firstName} ${this.lastName}`)
  }

  calculateAge() {
    let currentYear = new Date().getFullYear()
    console.log(currentYear - this.birthYear)
  }
}

let khaled = new Person('Khaled', 'Alghanim', 'Male', 1986)
khaled.printName()
khaled.calculateAge()

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  constructor(title, duration, genre) {
    this.title = title
    this.duration = duration
    this.genre = genre
    this.rating = []
  }

  rate(rating) {
    if (rating >= 0 && rating <=10) {
      this.rating.push(rating)
    } else {
      console.log('Rating should be between 0 and 10')
    }
  }

  averageRating() {
    const sum = this.rating.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0
    );
    const avg = (sum / this.rating.length)
    
    return avg
  }
}

let batman = new Movie('Batman', 60, 'Action')
batman.rate(10)
batman.rate(7.5)
batman.rate(9.5)

console.log(`Ratings are ${batman.rating}`)
console.log(`${batman.title} movie average ratings is ${batman.averageRating()}`)

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here

class Actor extends Person {
  constructor(firstName, lastName, gender, birthYear) {
    super(firstName, lastName, gender, birthYear)
    this.movies = []
  }

  addMovie(movie) {
    this.movies.push(movie)
  }
}

let tareq = new Actor('Tareq', 'Al-Ali', 'Male', 1965)
tareq.addMovie(batman)
tareq.printName()
console.log(tareq.movies)