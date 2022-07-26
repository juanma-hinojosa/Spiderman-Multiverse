const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puert ${PORT}`);
})

app.on("error", (error) => {
    console.log(`Surgio un Error en ${error}`);
})

//Motor de Plantillas
hbs.registerPartials(__dirname + "/views/partials", function(err) {});
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname  + "/public"));

app.get("/", (req, res) => {
    res.render("index", {
        titulo: "Hola Mundo"
    })
})

app.get("/tobey-maguire", (req, res) => {
    res.render("tobey-maguire", {
        link:[
            {linkSite:"/tobey-maguire", num: "01"},
            {linkSite:"/tobey-maguire2", num: "02"},
            {linkSite:"/tobey-maguire3", num: "03"},
        ],
        picture:[
            {actor:"spiderman-tobey", numFolder: "01", num: "01"},
            {actor:"spiderman-tobey", numFolder: "01", num: "02"},
            {actor:"spiderman-tobey", numFolder: "01", num: "03"},
        ]
    })
})

app.get("/tobey-maguire2", (req, res) => {
    res.render("tobey-maguire2", {
        link:[
            {linkSite:"/tobey-maguire", num: "01"},
            {linkSite:"/tobey-maguire2", num: "02"},
            {linkSite:"/tobey-maguire3", num: "03"},
        ],
        picture:[
            {actor:"spiderman-tobey", numFolder: "02", num: "01"},
            {actor:"spiderman-tobey", numFolder: "02", num: "02"},
            {actor:"spiderman-tobey", numFolder: "02", num: "03"},
        ]
    })
})

app.get("/tobey-maguire3", (req, res) => {
    res.render("tobey-maguire3", {
        link:[
            {linkSite:"/tobey-maguire", num: "01"},
            {linkSite:"/tobey-maguire2", num: "02"},
            {linkSite:"/tobey-maguire3", num: "03"},
        ],
        picture:[
            {actor:"spiderman-tobey", numFolder: "03", num: "01"},
            {actor:"spiderman-tobey", numFolder: "03", num: "02"},
            {actor:"spiderman-tobey", numFolder: "03", num: "03"},
        ]
    })
})

app.get("/andrew-garfield", (req, res) => {
    res.render("andrew-garfield", {
        link:[
            {linkSite:"/andrew-garfield", num: "01"},
            {linkSite:"/andrew-garfield2", num: "02"}
        ],
        picture:[
            {actor:"spiderman-andrew", numFolder: "01", num: "01"},
            {actor:"spiderman-andrew", numFolder: "01", num: "02"},
            {actor:"spiderman-andrew", numFolder: "01", num: "03"},
        ]
    })
})

app.get("/andrew-garfield2", (req, res) => {
    res.render("andrew-garfield2", {
        link:[
            {linkSite:"/andrew-garfield", num: "01"},
            {linkSite:"/andrew-garfield2", num: "02"}
        ],
        picture:[
            {actor:"spiderman-andrew", numFolder: "02", num: "01"},
            {actor:"spiderman-andrew", numFolder: "02", num: "02"},
            {actor:"spiderman-andrew", numFolder: "02", num: "03"},
        ]
    })
})

app.get("/tom-holland", (req, res) => {
    res.render("tom-holland", {
        link:[
            {linkSite:"/tom-holland", num: "01"},
            {linkSite:"/tom-holland2", num: "02"},
            {linkSite:"/tom-holland3", num: "03"},
        ],
        picture:[
            {actor:"spiderman-tom", numFolder: "01", num: "01"},
            {actor:"spiderman-tom", numFolder: "01", num: "02"},
            {actor:"spiderman-tom", numFolder: "01", num: "03"},
        ]
    })
})

app.get("/tom-holland2", (req, res) => {
    res.render("tom-holland2", {
        link:[
            {linkSite:"/tom-holland", num: "01"},
            {linkSite:"/tom-holland2", num: "02"},
            {linkSite:"/tom-holland3", num: "03"},
        ],
        picture:[
            {actor:"spiderman-tom", numFolder: "01", num: "01"},
            {actor:"spiderman-tom", numFolder: "01", num: "02"},
            {actor:"spiderman-tom", numFolder: "01", num: "03"},
        ]
    })
})

app.get("/tom-holland3", (req, res) => {
    res.render("tom-holland3", {
        link:[
            {linkSite:"/tom-holland", num: "01"},
            {linkSite:"/tom-holland2", num: "02"},
            {linkSite:"/tom-holland3", num: "03"},
        ],
        picture:[
            {actor:"spiderman-tom", numFolder: "01", num: "01"},
            {actor:"spiderman-tom", numFolder: "01", num: "02"},
            {actor:"spiderman-tom", numFolder: "01", num: "03"},
        ]
    })
})

app.use((req, res, next) => {
    res.status(404).render("404")
})