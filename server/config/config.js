//
///
//  PUERTO
///
//
process.env.PORT = process.env.PORT || 3000;

//
///
//  ENTORNO
///
//

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//
///
//  BASE DE DATOS
///
//

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/cafe'
} else {
    urlDB = 'mongodb+srv://uziah:W0ee7fmtqlHlfezS@cluster0-etdvi.mongodb.net/test'
}

process.env.URLDB = urlDB;