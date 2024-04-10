require('dotenv').config();
const express = require('express');

const hbs = require('hbs');

const app = express();
const port = process.env.PORT;



// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático desde el directorio 'public'


app.use(express.static('public'));

app.get('/', (req,res) =>{ 
  res.render("home", { 
    nombre: 'Facux',
    titulo: 'NodeJS'
  });
})

app.get('/generic', (req, res) => {
    res.render('generic', { 
      nombre: 'Facux',
      titulo:'NodeJS'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', { 
      nombre: 'Facux',
      titulo: 'NodeJS'
    });
});

app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`);
});
