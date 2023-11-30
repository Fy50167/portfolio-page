import SPACE from '../assets/space.png';
import STOCKERS from '../assets/super-stockers.jpeg';
import BACKEND from '../assets/backend.png';
import UPWORK from '../assets/lumebox.png';

const projects = [
    {
        name: "The Lumebox",
        techstack: "Shopify Liquid",
        url: "https://github.com/Fy50167/lumebox",
        deploy: "https://www.thelumebox.com",
        background: UPWORK,
        description: "A Shopify E-Commerce website built as part of a Freelance web development job for the Red Light Therapy company Lumebox. Although Shopify's built-in customizer was partially used in order to built the site, \
        because the client already had a design made for the store by a professional graphic designer before hiring me much of it had to be built from the ground up due to not being conducive with the templates natively available \
        in the customizer. Note that small changes have been made to the site since I stopped working on it, but overall the code remains largely the same."
    },
    {
        name: "Space Blog",
        techstack: "GraphQl, MERN",
        url: "https://github.com/Fy50167/space-blog",
        deploy: "https://super-space-blog-8209078db6df.herokuapp.com",
        background: SPACE,
        description: "Application that uses GraphQl instead of restfulAPI calls along with the standard MERN stack to create a blog concerning space themed posts. All blog images are taken directly from the NASA APOD API, \
        with the images displayed updating automatically every day. Users can create accounts, like posts, add comments, and save images to their profile for later viewing. The application also features a pop-out feature on \
        the home page."
    },
    {
        name: "Super Stockers",
        techstack: "node.js, MySQL, Sequelize",
        url: "https://github.com/Fy50167/stock-trader",
        deploy: "https://limitless-lake-22682-94d9006e293e.herokuapp.com/",
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
    }
]
    

export default projects;