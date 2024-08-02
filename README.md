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
- name:"Moni",
- colot:"red"
- })
- we can send response only once in same path
- // res.send("This is a basic response")
- // res.send({
- // name:"Ashu",
- // Sname:"Moni"
- // })
- let code="<h1>Fruits</h1><ul><li>Apple</li></ul>"
- res.send(code);

# Routing

- It is process of selecting a path for traffic in a network or between or across multiple netwroks

  # EX-

       - app.get("/name",(req,res)=>{
       -   res.send({
       -        name:"Moni",
       -        color:"red"
       -    })
       - })

  - if the route is app.get("\*") then we can on any route

  * app.get("\*",(req,res)=>{
  *     res.send("this path donesnot exist");
  * })

  # Nodemon

  - To automatically restart server with code changed

  # Path Parameters

  - req.params

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

# NODE-EJS

# What is templatng

    * EJS (Embedded JavaScript templates)
    * EJS is a simple templating language that lets you generate HTML markup with plain JavaScript
    # Ex -
    * if we have a resume template then if i fill that resume then i got that resume and any one can also fill then that got that templeae
    * another example is that /: req. params  we can put anythign in place of /: and we get that result
    * another example  if i open my facebook account then i got one page if you open account on the facebook you also get the same page with your information so what they do that they give one template that why we got same layout same format so there is so much account and for all account they have different templeate no they have one and they give same tamplate or
    *  we can say that template is like a blueprint

# how can we use EJS

    * so for using EJS we have to write app.set("view engine","ejs");
    * we dont have to require EJS beacuse it al alaready require by the express internally
    * Cehck index.js in NODE-EJs
    * with the help of EJS we render the route not send the route
    # EX-
    -  app.set("view engine","ejs");
    -  app.get("/",(res,req)=>{
    -    res.render("home.ejs");
    -  })
    * render means sendinf File
    * we have create a views folder and stroe all our template and file  express by default find the home.ejs in th view folder

# Views Directory

    * we have to give this path for direct access to EJS
    - const path =require("path");
    - app.set("views",path.join(__dirname,"/views"));

# Interpolation Syntax

    * interpolation refers to embedding expression into marked up text.
    # Ex-
    * ` this is a ${name}` string template literals same
    * so in ejs Templates we can embed all JavaScript code  and we call i interpolation Syntax. and make our HTML  dynamic
    * we go on EJS documentation and see the  informatin about tags

# Parsing dtat to EJS

- Ex-

* app.get("/rolldice",(req,res)=>{
* let num=Math.floor(Math.random()\*6)+1;
* res.render("rollDice.ejs",{diceVal:num});
* }) -<h1>Your dice give value :<%= diceVal:num %></h1>

# Instagram EJS

- Create a basic template for instagram page based on following route:

* /ig/:username

# Conditional Statements in EJS

- Adding conditions inside EJS

* for conditional statement we use <% %> this tage Moni ;
* <% this tag called script tag ,for control-flow gives no-output;

- <% if(diceVal == 6) {%>
- <h2> Nice! Roll dice again.</h2>
- <% } %>

# Loops in EJS

- <% for(user of followers) {%>
- <li><%= user %></li>

- <% } % >

# Instagram page with EJS

- const instaData = require ("./data.json");

# Includes

- include("include/head.ejs");
- include is a method to create subtemplete
- so we see the templetes before and ejs are templepletes

# Serving Static Files

- app.use(express.static(folder_name))

# Ex-

- app.use(express.static(path.join(\_dirname,"public)));

* till now we have seen that how we can render a html file now we have to send too much css or javaScript logic or code when we send any request to any web page then we got response form server then we not only get html we get css and js logic also
* so static file serve means if we have include the css then we can write app.use(express.static(folder_name))

# get & Post Request

- GET

* Used to GET some reaponse
  -Data sent in query strings(limited,String data & visible in URL)

- POST

* Used to POST something (for Create/Write/Update)
* Data sent via request body (any type of data)

# Handlind Post request

- Set up POST request route to get some reaponse
- Parse POST request data

  # EX-

  - app.use(express.urlencoded({extended:true}));
  - app.use(express.json());

# Revisiting JS OOPS

- Object Oriented Programming
- To structure our code

* prototype
* new Operator
* contructors
* classes
* keyword(extends,super)

# Object Prototypes

- Prototypes are the mechanism by which JavaScript objects inherit from one another.
- It is like a single template Object that all object inherit method and properties from without having their own copy.

  - arr._proto_(reference)
  - Array.prototype(actual object)
  - String_prototype

* Every object in javascript has a built-in-properties ,which is called its prototpye.The prototype is itself an object,so the prototype will have its own prototype ,making what's called a prototype chain.
  the chain ends when we reach a prototype that has null for its own prototype.

# Factory Function

- a function that creates objects
- so we can create factory function like this

* function personMaker (name,age){
* const person ={
*        name:name,
*        age:age,
*        talk(){
*            console.log(`Hey my name is  ${this.name}`);

*        }
* }
* return person;
* }

- and we can call or carete a person like this

* let p1= PersonMaker("Moni",21);

- Main distadvantage of the FACTORY FUNCITON is the it send its own copy
- so if we store the data of 1000 pople in the database then it create a copy of that 1000 data also SO we get a new concept called NEW OPERATOR

# NEW OPERATOR

- The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor funciton

# EX---

- We are using constructor and constructor does't return any thing

* function Person(name,age){
* this.name=name;
* this.age=age;
* }

  <!--  if we want every person have a talk  then  -->

- Person.prototype.talk=function(){
- console.log(`Hi my name is ${this.name})
- };
<!-- create object using Contructor -->

* let p1= new person("Ashutosh",25);
* let p2=new person("Moni",21);

* so new operater is better than the factory function the one more is better than new operator that is CLASSES

# Classes

- Classes are a template for creating objects
- The constructor method is a special method of a creating and initializing an object instance of that class.

# EX -

- class Person {
- constructor (name,age){
- this.name=name;
- this.age=age;
- }
<!-- we can write the prototype directly  -->
- talk(){
- console.log(`Hi ,my name is ${this.name}`);
- }
- }

- let p1= new Person ("Ashutosh ",25);
- let p2= nwe Person ("Moni",21);

# Inheritance 
 * Inheritance is a mechanism that allows us to create new classes on the basis of alerady existing classes 

  # Ex -
  * class Student extends Person {
    constructor (name,age,marks){
      super(name,age);
      this.marks=marks;
    }
    great(){
      return  "helllo";
    }
  }

let s1= new studednt ("AshuMoni" 25,30);



# REST
 * Representational State Transfer
 * REST is an architectural style that defines a set of constraints to be used for creating web services.
 


