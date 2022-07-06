const express = require("express");
const app = express();


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});




const data = require("./data.json")

app.get("/studentsList",(req,res)=>{
    res.send(data)
    console.log(data)
    
})


