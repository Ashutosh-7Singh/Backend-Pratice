# Backend-Pratice

# Library v/s Framework

# A library is a Collection of pre-Written code That can be used to perform specific tasks Ex-axios

- generally lib use to solve a small task orto complete the samall part
- in lib we have full controll where we want to use it how we want to use it

# A framework is a set of pre-written code that provides a structure for developming software applications Ex-express

    * framewokr overall define the structure of the webpage

#### EXPRESS

- Expres is a Node.js web application framework that helps us to make web applications it is used for server side programming \* client(frontEnd)----------server(backend)

  # Express have 4 major uses

  1. It listen for incomming request means all the request like GET,POST,DELETE,PUT it listen when the request is come
  2. It parse the comming request to NodeJS
  3. 3rd to match response with routes
  4. 4rth to send the suitable response to the request

# so we can install EPRESS using NPM it is a package under the NPM

# STEP TO USE EXPRESS

1. npm init it create a package.json
2. Install Extess using npm i express

# PORTS

- Ports are the logical endpoints of a network connection that is used to exchange information between a web server and a web client

# .listen

- app.listen create web server which listen for the incommming api request

# .Use

- app.use this can listen any time of request GET,POST,PUT,DELETE and according to request it send the collback
- Ex- app.use((req,res)=>{
  console.log("new incoming request");
  })

# sending a Response

- request(req) & response(res)

- any type of request comming to us is a text based request but EXPRESS convert that request into OBJECT
- so this process is the part of PARSING
- All the http request are text based in any languade JS,PYTHON,JAVA but express convert these TEXT based request into object request that is easily understand by JAVASCRIPT
- so when we log the req we get request object- console.log(req)

for respons see express docs

- we can send reaponse using res.send
- we can send string ,object and etc in the response
- ex- res.send({
-  name:"Moni",
-  colot:"red"
-  })
- we can send response only once in same path 
 - // res.send("This is a basic response")
 - // res.send({
 - // name:"Ashu",
 - // Sname:"Moni"
 - // })
 - let code="<h1>Fruits</h1><ul><li>Apple</li></ul>"
 - res.send(code);


# Routing
 * It is process of selecting a path for traffic in a network or between or across multiple netwroks 
    # EX-
        - app.get("/name",(req,res)=>{
        -   res.send({
        -        name:"Moni",
        -        color:"red"
        -    })
        - })
    * if the route is app.get("*") then we can on any route
   - app.get("*",(req,res)=>{
   -     res.send("this path donesnot exist");
   - })


   # Nodemon
   * To automatically restart server with code changed


   # Path Parameters 
   * req.params
 # Ex-
   app.get("/ig/:username",(req,res)=>{
    let {username}= req.params;
    res.send(`This account belogns to @${username}`);
   })

   # what is path parametes 
   - we can sen some vairable or value with our path or routes which is generally changable

   # Query Strings

   req.query

   # Ex-
    - app.get("/search",(req,res)=>{
    -    let {q}=req.query;
    -    if(!q){
    -        res.send("No search query");
    -    }
    -    res.send(`They are the results for: ${Q}`);
    - });

    * we can search any thing on google that is already come in the Query when we see in the url we can see( ? ,=) like this 
    
