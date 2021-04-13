import app from "./app"




app.listen(process.env.PORT || 3000,(err)=>{
    if(err)
        console.log("server başlatılamadı.")
    else
        console.log("server başlatıldı port:"+ process.env.PORT || 3000)
})
