<h1>Shobiz</h1>
<a href="https://shobiz.web.app/">Shobiz</a> is a movie review website for the latest movies. <br> 
By <a href="https://github.com/ShobhitRatan">Shobhit Ratan</a> and <a href="https://github.com/berellevy">Berel Levy</a>
<h2>Built With</h2>
<ul>
  <li>Backend: Ruby on Rails, twdbAPI</li>
  <li>Database: PostgreSQL</li>
  <li>Frontend: ReactJS, React-Bootstrap for styling</li>
  <li>Deployment: Heroku for Backend API deployment <a href="https://shobiz-backend.herokuapp.com/movies">Movies API example</a>, 
    Firebase by Google for <a href="https://shobiz.web.app/">Frontend</a> Deployment.</li>
</ul>
<h2>Local Installation Steps</h2>
<ol>
    <li>Click on the links for both the <a href="https://github.com/ShobhitRatan/shobiz-frontend">Frontend</a> 
    and <a href="https://github.com/ShobhitRatan/shobiz-backend">Backend.</a></li>  
    <li>Clone both repositories into separate folders on your computer.</li>
    <li>In the command line, cd into the backend folder and enter bundle install to install project dependencies.</li>
    <li>Type rails s in the command line to start the backend server and server should be live on localhost:4000.</li>
    <li>Open a new terminal and cd into the frontend folder and run npm install to install project dependencies.</li>
    <li>Run npm start to start your frontend server and ensure the server is running on localhost:3000.</li>
</ol>
<h2>Core Features</h2>
<ul>
  <li>A user can register to the website.</li>
  <li>A user can login to the website.</li>
  <li>Implemented Authentication using JSON Web Token and Local Storage to encrypt user data.</li>
  <li>Ability to search movies by type and language</li>
  <li>Ability to add / delete reviews</li>
  <li>Ability to like a review</li> 
  <li>Dynamic Pagination</li>
  <li>Ability to have discussion on movies.</li>
</ul>
<h2>Future Goals</h2>
<ul>
  <li>Ability to reply on previous reviews (polymorphic relationship)</li>
  <li>Implement backend pagination capability for faster response time</li>
  <li>Add an admin / superuser account to the website who can approve / deny users who don't maintain decorum on forums.</li>
  <li>Implement following functionality so that users can follow other users.</li>
  <li>Create a React-Native version of the app for mobile phones.</li>
</ul>
