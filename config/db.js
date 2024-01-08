require("mongoose").connect("mongodb://0.0.0.0:27017/project").then(()=>{
console.log("DB Connected")
}).catch((err)=>{
    console.log("DB ---- Not ---- Connected", err)

})