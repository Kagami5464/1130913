//install: node js
//install web server package: express >npm install express
const { text } = require("body-parser");
var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/AgencyProject"));

var DB = require("nedb-promises"); var Profolio = DB.create(__dirname+"/profolio.db");  Profolio.insert({modal: "#portfolioModal1", imgSrc:"roundicons.png", heading:"Round Icons", text:"Graphic Design"})

/*server.get("/services", (req,res)=>{
    //DB find
    var Server=[
        {icon: "fa-shopping-cart",heading:"E-Commerce",text:"Lorem ipsum dolor sit amet,consectetur"}
        {icon: "fa-laptop",heading:"Responsive Design",text:"Lorem ipsum dolor sit amet,consectetur"}
    ];
    res.send(Server);
});
*/

server.get("/profolio", (req,res)=>{
    //DB find 
    res.send("Profolio");  })

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})
