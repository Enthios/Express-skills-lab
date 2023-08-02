<!-- RESTful Routing -->
<!-- REST - server architecture -> Representational State Transfer -->
<!-- REST -> URL / endpoint describe structure and behavior of your server interaction -->
<!-- HTTP -> ENDPOINT: url "/resource/" METHOD -->

# TO DO APP Routing

### Root Route
- "/" Home Route

### Todos Routing
- index - "/todos" - GET -> Displaying a list of all todo items
- show - "/todos/:id" - GET -> Displaying information about a single resource 

- new - "/todos/new" - GET -> Displaying a form that can trigger a 'create' action in our DB 

- create - "/todos" - POST -> sending data to our controller - createTodo - updating the DB -> redirect back to index

- destroy - "/todos/:id" - DELETE -> removing a resource from the DB -> redirect back to index 