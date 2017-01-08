var app = require("express")();

var multer = require("multer");
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

app.listen(8080,function(){
    console.log("upload you file......");
});

app.post('/api/fileRead', upload.single("file"), function(req, res){
    console.log(req.file.size)
    res.json( {"size" : req.file.size + " bytes"})
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})