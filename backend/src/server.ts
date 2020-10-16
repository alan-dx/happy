import express from 'express';
import path from "path";
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

//MODELO MVC

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))//Permite abrir os arquivos retornados
app.use(errorHandler)

app.listen(3333);