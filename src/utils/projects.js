import BISTRO from '../assets/book-bistro.jpeg';
import STOCKERS from '../assets/super-stockers.jpeg';
import BACKEND from '../assets/backend.png';
import UPWORK from '../assets/lumebox.png';

const projects = [
    {
        name: "The Book Bistro",
        techstack: "HTML, CSS, Javascript",
        url: "https://github.com/notUnEeVeN/Book-Bistro-Website",
        deploy: "https://notuneeven.github.io/Book-Bistro-Website/",
        background: BISTRO,
        description: "Basic front-end application deployed to Github Pages that primarily demonstrates usage of API calls, utilizing the Google Books and New York Times APIs. The application allows users to search \
        books to view information as well as add them to their library. The library can then be used to view all added books as well as add personal ratings. Ratings in the library are also used in an algorithm to \
        provide the user with recommendations on the home page. A collaborative project."
    },
    {
        name: "Super Stockers",
        techstack: "node.js, MySQL, Sequelize",
        url: "https://github.com/Fy50167/stock-trader",
        desploy: "floating-wildwood-52719-0a69bbab7cea.herokuapp.com",
        background: STOCKERS,
        description: "Application that combines a basic HTML and CSS front-end with a MySQL back-end connection via Sequelize to simulate a stock-trading service. Users must create accounts and login in order to view market. \
        Once logged in, they can update their balance and purchase various stocks from the displayed market on the home page. They can also go to their profile to view a full list of all stocks currently in their inventory \
        along with quantities, as well as adjust said quantities with corresponding changes being made to their balance. A collaborative project."
    },
    {
        name: 'Social Network Backend API',
        techstack: "Mongo DB, Express, Mongoose",
        url: "https://github.com/Fy50167/social-network-api",
        background: BACKEND,
        description: "A purely back-end focused application revolving around the usage of NoSQL, specifically MongoDB. Although the application has no deployed front-end side, a demo view can be viewed in the repository README. \
        The application allows users to use a variety of different crud requests to simulate a social network. Once a user is created, they can post thoughts, add other users as friends, as well as react to other users thoughts."
    },
    {
        name: "The Lumebox",
        techstack: "Shopify Liquid",
        url: "https://thelumebox.com",
        background: UPWORK,
        description: "A Shopify E-Commerce website built as part of a Freelance web development job for the Red Light Therapy company Lumebox. Although Shopify's built-in customizer was partially used in order to built the site, \
        because the client already had a design made for the store by a professional graphic designer before hiring me much of it had to be built from the ground up due to not being conducive with the templates natively available \
        in the customizer. Note that small changes have been made to the "
    }
]

export default projects;