const express=require ("express");
const app=express();
const PORT = process.env.PORT || 3000;
let funzione=require("./function.js")

app.get('/', (req, res) => res.send("Hello World"));

app.get('/funzione', (req, res) =>
	res.status(200).json({"result": funzione(req.query.a, req.query.b)}));
app.listen(PORT);
