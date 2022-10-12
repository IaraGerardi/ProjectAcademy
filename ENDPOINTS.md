## ENDPOINTS

Login:<br>
http://localhost:8000/admin/login //Log in for admin (POST)<br>
http://localhost:8000/logout //Destroys cookie and unlog the client. (GET)<br>

Admin:<br>
http://localhost:8000/admins //Gets all admins (GET)<br>
http://localhost:8000/admins/:id //Gets the admin on :id (GET)<br>

Counselor:<br>
http://localhost:8000/counselor //Gets all counselors(GET)<br>

Oriented:<br>
http://localhost:8000/oriented //Gets all oriented students (GET)<br>
http://localhost:8000/oriented/paginated //Gets all oriented students paginated (GET)<br>
http://localhost:8000/oriented/:id //Gets oriented on :id (GET)<br>
http://localhost:8000/oriented/:id/counselor //Oriented selected on :id and his counselor (GET)<br>
http://localhost:8000/oriented/create //Create an Oriented Student (POST)<br>
http://localhost:8000/oriented/:id/counselorToOriented // Assigns or modifies the counselor of an oriented student on :id (PUT)<br>

News: <br>
http://localhost:8000/news //Gets all the news (GET)<br>

Events: <br>
http://localhost:8000/events //Gets all the events (GET)<br>
http://localhost:8000/events/create //Creates an event (POST)<br>
http://localhost:8000/events/:id/delete //Deletes an event selected in :id (DELETE)<br>
