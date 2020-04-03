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
//  VENCIMIENTO DE TOKEN
/// 60 SEGUNDO X 60 MINUTOS * 24 HRS * 30 DIAS
//

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//
///
//  SEED DE AUTH
///
//

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//
///
//  BASE DE DATOS
///
//

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;