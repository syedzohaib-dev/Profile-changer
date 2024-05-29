

const users = [
    {
        imgUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        name: 'Syed Zohaib',
        designation: 'Mern Stack Developer',
        description: 'My Self MERN Stack Developers are tasked with overseeing the complete software development lifecycle.',
    },
    {
        imgUrl: 'https://cdn-icons-png.flaticon.com/512/2919/2919906.png',
        name: 'John Smith',
        designation: 'Python Developer',
        description: 'A Python Web Developer is responsible for writing server-side web application logic. responsible for writing server-side web application logic.',
    }, {
        imgUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
        name: 'Anna',
        designation: 'Word Press Developer',
        description: 'WordPress developers design and implement websites for companies using the WordPress creation tool. implement websites for companies using the WordPress creation tool.',
    }, {
        imgUrl: 'https://avatars.githubusercontent.com/u/50479258?v=4',
        name: 'Usama Usman',
        designation: 'Software Engineer',
        description: 'Software engineering is the branch of computer science that deals with the design, development, testing, and maintenance of software applications. computer science that deals with the design, development, testing, and maintenance of software applications.',
    },
]
var userCounter = 0


const previousHandler = () => {
    if (userCounter > 0) {


        userCounter--
        // console.log(userCounter, '===>> userCounter')
        // console.log(users[userCounter], '===>> konsa user')
        document.querySelector('#myImage').style.backgroundImage = `url(${users[userCounter].imgUrl})`
        document.querySelector('#myName').textContent = users[userCounter].name
        document.querySelector('#myDesignation').textContent = users[userCounter].designation
        document.querySelector('#myDescription').textContent = users[userCounter].description
    } else {
        userCounter = 3
        // console.log(userCounter, '===>> userCounter')
        // console.log(users[userCounter], '===>> konsa user')
        document.querySelector('#myImage').style.backgroundImage = `url(${users[userCounter].imgUrl})`
        document.querySelector('#myName').textContent = users[userCounter].name
        document.querySelector('#myDesignation').textContent = users[userCounter].designation
        document.querySelector('#myDescription').textContent = users[userCounter].description
    }
}

const nextHandler = () => {
    if (userCounter < users.length - 1) {


        userCounter++
        // console.log(userCounter, '===>> userCounter')
        // console.log(users[userCounter], '===>> konsa user')
        document.querySelector('#myImage').style.backgroundImage = `url(${users[userCounter].imgUrl})`
        document.querySelector('#myName').textContent = users[userCounter].name
        document.querySelector('#myDesignation').textContent = users[userCounter].designation
        document.querySelector('#myDescription').textContent = users[userCounter].description
    } else {
        userCounter = 0
        // console.log(userCounter, '===>> userCounter')
        // console.log(users[userCounter], '===>> konsa user')
        document.querySelector('#myImage').style.backgroundImage = `url(${users[userCounter].imgUrl})`
        document.querySelector('#myName').textContent = users[userCounter].name
        document.querySelector('#myDesignation').textContent = users[userCounter].designation
        document.querySelector('#myDescription').textContent = users[userCounter].description
    }

}



function surprise() {
    // alert("oo i am surprice")
    Swal.fire({
        title: 'OO I Am Surprise!',
        // text: 'This is a SweetAlert surprise!',
        icon: 'success',
        confirmButtonText: '..Cool..'
    });
}

