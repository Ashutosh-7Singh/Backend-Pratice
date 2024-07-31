const express = require("express")

const app = express();

// console.dir(app)

let port = 3003;
app.listen(port,()=>{
    console.log(`App is listning on port ${port}`)
});

app.use((req,res)=>{
    // console.log(req)
    console.log("request incomming recieved ")
//    res.send("This is a basic response")
//    res.send({
//     name:"Ashu",
//     Sname:"Moni"
//    })
   let code="<h1>Fruits</h1><ul><li>Apple</li></ul>"
   res.send(code);
})


app.get("/",(req,res)=>{
    res.send("You contacted root path")
})
app.get("/apple",(req,res)=>{
    res.send("this is the path for apple");
})

app.get("*",(req,res)=>{
         res.send("this path donesnot exist");
     })


     app.post("/",(req,res)=>{
        res.send("You send a post request to route");
    })

    // req.params

    app.get("/:username/:id",(req,res)=>{
        let {username,id}=req.params;
        let htmlstr=`<h1>Welcome to the page of @${username}</h1>`
        res.send(htmlstr)
    })

    // query params

    app.get("/search",(req,res)=>{
        console.log(req.query);
        res.send("no results");
    });
    // in post man url /search?="apple"
    // q=apple
    // in post man url /search?=apple

    // we can get our quesry value aslo by destructuring

    app.get("/search",(req,res)=>{
        let {q}=req.query;
        res.send(`search result for query : ${q}`);
    });

    // if in a case tehre is no quesy then 

    app.get("/search",(req,res)=>{
        let {q}=req.query;
        if(!q){
            res.send("<h1>nothing searched</h1>")
        }
        res.send(`search result for query : ${q}`);
    });