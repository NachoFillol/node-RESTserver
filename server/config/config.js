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

process.env.CADUCIDAD_TOKEN = '48h';

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

//
///
//  GOOGLE CLIENT
///
//

process.env.CLIENT_ID = process.env.CLIENT_ID || '171615903163-g4e5jruq9rg9kqbvr9i2449k0ev5i59m.apps.googleusercontent.com';