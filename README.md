## Introduction 
**ProjectAcademy** is a digital plataform that allows the administrators of the academy manage the new entrances of oriented and events for them.

## Technologies
This project was made using the follow technologies (last version):
<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express</a></li>
  <li><a href="https://github.com/mysqljs/mysql">Mysql</a></li>
  <li><a href="https://es.reactjs.org/">React</a></li>
</ul>

## Figma
<a href="https://www.figma.com/file/6E2y1DRnrVNWMBShL2r8KQ/V_camp-Proyecto?node-id=2%3A7968">
    <img src="https://img.shields.io/badge/AcessFigmaWeb-black?style=flat-square&logo=figma&logoColor=red"/>
</a>

## How to run
  0. git clone https://github.com/IaraGerardi/ProjectAcademy
  1. run ```npm i``` for both front and back side. 
  3. delete the ".example" on .env.example file
  4. database migration: <br>
    1. open MySql and create an schema called 'project_academy'<br>
    2. go to back/app.js and uncomment the ```sequelize.sync({force: true})```<br>
    3. run ```nodemon``` on back side<br>
    4. stop the server with ctrl + c<br>
    5. comment ```sequelize.sync({force: true})``` on back/app.js<br>
    7. run ```node seed``` on back side<br>
    8. stop the server with ctrl + c<br>
    9. now you should have the database created with tables and data.<br>
  5. run ```nodemon``` on back side.
  6. run ```npm start``` on front side.
  7. open http://localhost:3000 with your browser to see the result. 

## License
[MIT](https://choosealicense.com/licenses/mit/)

