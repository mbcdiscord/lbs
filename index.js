const express = require("express");

const app = express();
~~~
app.listen(3000, () => {
    {
        console.log("Server started (http://localhost:3000/) !");

    }
});


app.get("/", (req, res) => {
    {
        res.send("Hello World...");
    }
});
//https://blog.pagesd.info/2019/10/08/crud-with-express-sqlite-10-steps/#:~:text=in%20this%20tutorial.-,4.%20Add%20EJS%20views,-Since%20the%20purpose