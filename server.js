const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended : true }));
app.use(express.json())
app.use(express.static('./views'))
app.use(require('./controller/controller'))

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}, bitch!`);
})