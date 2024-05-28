

const users = [
    {
        imgUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        name: 'Syed Zohaib',
        designation: 'Mern Stack Developer',
        description: 'My Self MERN Stack Developers are tasked with overseeing the complete software development lifecycle.',
    },
    {
        imgUrl: 'https://iconape.com/wp-content/png_logo_vector/avatar-9.png',
        name: 'John Smith',
        designation: 'Python Developer',
        description: 'A Python Web Developer is responsible for writing server-side web application logic.',
    }, {
        imgUrl: 'https://iconape.com/wp-content/png_logo_vector/avatar-11.png',
        name: 'Anna',
        designation: 'Word Press Developer',
        description: 'WordPress developers design and implement websites for companies using the WordPress creation tool. ',
    }, {
        imgUrl: 'https://www.shareicon.net/data/2016/05/26/771198_man_512x512.png',
        name: 'Usama Usman',
        designation: 'Software Engineer',
        description: 'Software engineering is the branch of computer science that deals with the design, development, testing, and maintenance of software applications.',
    },
]
// console.log(users)
const previousHandler = () => {
    console.log('previous handler')
}
const nextHandler = () => {
    console.log('next handler')
}
function surprise() {
    alert("oo i am surprice")
}