const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const routes = require('./routes/index');
const bodyParser = require('body-parser');

/* Settings*/
app.set('PORT', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views' ));
app.set('view engine', 'ejs');


/*Midlewares*/
app.use((req, res, next) => {
   console.log(`${req.url} -${req.method}`); 
   next();
})  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/*Routes */
app.use(routes);


/* Static files*/
/* --- views  errors*/
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}`));
