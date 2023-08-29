//! OBJECTS 

//!SINGLE USER

let user = {
    userName : 'Owais',
    lastName : 'Gujjar',
    userEmail : 'Owaischaudhry906@gmail.com',
    subscriptionStatus : 'VIP',
    lessonsCompleted : [0,1,2,3,4,5],
}

console.log(user.userName)
console.log(user.userName[0])

//! Progress tracking function --> when user complete a lesson, 
//! it is updated from 0 to 1, or 1 to 2 or so on.
//! from lessons completed object property

console.log(user.lessonsCompleted.map(element => element + 1))


//! DOUBLE USER

let users = [
    { //! SINGLE USER # 01
        name: 'OWAIS',
        email : 'owais123@email.com',
        city: 'Karachi',
        country: 'PAK',
        number : 'xxxxxxxxx',
        password : '12344321',
    },
    { //! SINGLE USER # 02

        name: 'AMMAR',
        email :'Ammar123@email.com',
        city: 'Karachi',
        country: 'PAK',
        number : 'xxxxxxxxx',
        password : '12332189',
    }
]

console.log(users[1])
console.log(users[0].city)

//! FUNCTION LOGIN
function logIn (email, password) {
    console.log(email, password);
}
console.log('ammar123@email.com','1223321')


//! PROJECT/QUESTION #01

// function logIn (email, password) {
//     for(let i=0; i<users.length; i++)
//     {
//         console.log(email, password);
//         if (users[i].email == email ){
//             console.log(users[i]);
//             if (users[i].password == password){
//                 console.log("Details are correct")
//             }
//             else (console.log("Password is Incorrect"));
//         }
//     }
// }

// logIn('owais123@email.com','12344321');


function logIn(email, password){
    for(let i=0;i<users.length;i++){
        console.log(email,password)
        if(users[i].email== email){
            console.log(users[i])
            if(users[i].password==password){
                console.log("Details are Correct ! LoggedIn")
            }
            else {console.log("Details are Incorrect !!")}
        }
        // if(users[i].email== loginInemail)
    }
}

logIn('owais123@email.com','12344321')

//! REGISTER
//?  1- Create user object
//?  2- Information ko push krna hai

function registerUser(username, password, email, gender){
    let user11 = {
        usename:username,
        pass:password,
        mail:email,
        gen:gender,
    }

    newCustomer = []
    newCustomer.push(user11)
    console.log(user11)
}
    //calling the registration function
    registerUser({
        username:'Owais9061',
        password:'pakistan',
        email:'Owais12@email.com',
        gender:'Male'
    })
console.log(newCustomer)
    
    // function registerdUser (userName, userEmail, userPassword, userSubscription) 
    // {
        //     let user = {
            //         username : userName,
//         useremail : userEmail,
//         userpassword : userPassword,
//         subscription : userSubscription,
//     }
//     newUsers =[]
//     newUsers.push(user)
//     console.log(user)
// }

// registerdUser = {
//     userName : 'Owais',
//     userEmail : 'owais123@email.com',
//     userPassword : '12344321',
//     userSubscription : 'VIP',
// }
// console.log(newUsers)

//DONE

