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
console.log(user.lessonsCompleted.map(element => element + 1))


//! DOUBLE USER

let users = [
    { //! SINGLE USER # 01
        name: 'Owais',
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

console.log(users[0])
console.log(users[0].city)

//! FUNCTION LOGIN
// function logIn (email, password) {
//     console.log(email, password);
// }
// console.log('ammar123@email.com','1223321')


//! PROJECT/QUESTION #01

function logIn (email, password) {
    for(let i=0; i<users.length; i++)
    {
        console.log(email, password);
        if (users[i].email == email ){
            console.log(users[i]);
            if (users[i].password == password){
                console.log("Details are correct")
            }
            else (console.log("Password is Incorrect"));
        }
    }
}

logIn('owais123@email.com','1234432');


//! REGISTER
//?  1- Create user object
//?  2- Information ko push krna hai

function registerdUser (userName, userEmail, userPassword, userSubscription) 
{
    let user = {
        username : userName,
        useremail : userEmail,
        userpassword : userPassword,
        subscription : userSubscription,
    }
    newUsers =[]
    newUsers.push(user)
    console.log(user)
}
// registerdUser = {
//     userName : 'Owais',
//     userEmail : 'owais123@email.com',
//     userPassword : '12344321',
//     userSubscription : 'VIP',
// }
console.log(newUsers)