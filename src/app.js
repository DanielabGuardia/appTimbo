const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

/* Enrutadores */
const homeRoutes = require('./routes/homeRouter');

app.use(express.static('./public'));

/* Settings*/


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));


/*capturar información*/
 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('../public'));

/*Routes */
/*app.use(routes);*/
app.use('/', homeRoutes);


/* Static files*/





/* --- views  errors
app.use(express.static(path.join(__dirname, 'public')));*/




app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));
