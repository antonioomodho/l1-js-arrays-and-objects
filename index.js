// Utility
function print(tag, value){
    console.info(tag, value)
}

// 1. ARRAYS
// TODO: Complete the function. Create an array that contains numbers
function scores (){
    // create array with 10 elements
    const grades = [15, 7, 9, 10, 13, 0, 10, 5, 14, 7]
    // return the array
    return grades
}
// display value
 print(`Scores Array:`, scores())



// TODO: Access an element from the array
function accessScore(){
    // using array above access the 3rd element
    const grades = scores();
    const third = grades[2]
    // return the elememt
    return third
}
// display value
print(`Third Score:`, accessScore())


// TODO: Create an array that has multiple nested arrays
function nestedScores(){
    // create an array with 3 elements. (The first two elements should be arrays of 2 elements each)
    const nested = [
        [45, 90],[33, 65], 8
    ]
    // return the nested arrays
    return nested
}
// display value
 print(`Nested Score Array:`, nestedScores())
const nestedArray = nestedScores()
print('33', nestedArray[1][0])

// TODO: Some array methods (length)
function getNumberOfScores(){
    // using either of the two arrays created above get the length of the array
const grades = scores()
const size = grades.length
//const size = scores()length  as alternative
    // return the number of elements
    return size
}
// display value
print(`Number of elements:`, getNumberOfScores())


// TODO: Some array methods
function addElement(){
    // using either of the two arrays created above, add two new elements of your choice
const grades = scores()

//push -> adds the new element
    grades.push(23, 45, 12, 0)
//unshift adds the new element at the front
    grades.unshift(true, true)
//shift removes an element from the front...does not require parameter
    grades.shift()
//pop removes from the end
    grades.pop()
// return the new array with the elements that have been added
return grades
}
// display value
print(`Added elements:`, addElement())
//high order function
//function abc(score){
//return score*2
const x = [0, 1, 1, 2, 3, 5, 8, 13]
const y = x.map(
    (element)=>element * element
)
print("Squares", y)

// 2. OBJECTS
// TODO: Create an student object with the follwoing properties [name, age, email, studentNumber, isKenyan]
function student(){
    // create student object
    const student ={
        name: 'Takeoff', 
        age:28,
        email: 'takeoff@qclabel.com',
        studentNumber: 'MS-1234',
        isKenyan: false
    }
    const computer = {
        "laptop-model !": 'HP' ,
        "*-=": 67
    }
    // return student object
    return student
}
// display value
print(`Student:`, student())

// TODO: Access student's age
function studentAge(){
    // access student age using key
        const learner = student()
    //Work for both plain or quoted keys
    age = learner["age"]
    //Limited to keys that are plain
    age = learner.age    

    // return student age
return learner.age
}
// display value
 print(`Student Age:`, studentAge())


// TODO: Access student's age
function studentEmail(){
    // access student email using dot operator
    const learner = student()
    email = learner.email
    // return student email
return learner.email
}
// display value
 print(`Student Email:`, studentEmail())


// TODO(nested objects): create user object that contains course object => [User(id, name, course), Course(name, number)]
function user(){
    // create user object
    const userDetails = {
        id: 45,
        name: 'Quavo',
        course: {
            name: 'Culture 1',
            number: 20,
        }
    }

    // return user object
return userDetails
}
// display value
 print(`User:`, user())


    const details = user()
    //Dot operator
    let c_num = details.course.number
    //[]
    c_num = details["course"]["number"]
    // dot operator , []
    c_num = details.course["number"]




// TODO: Some object methods (entries)
function getUserEntries(){
    // get user entries


    // return entries

}
// display value
// print(`User Entries:`, getUserEntries())


// TODO: Some object methods (keys)
function getUserKeys(){
    // get user keys
    const keys = Object.keys(details)

    // return keys
    return keys
}
// display value
print(`User Keys:`, getUserKeys())

