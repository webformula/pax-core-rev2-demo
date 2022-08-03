import express from 'express';
import cors from 'cors';
import { App } from '@webformula/pax-core/server';


const app = new App({
  appRoot: 'app2',
  indexTemplate: 'pages/index.html',
  notFoundTemplate: 'pages/404.html'
});

const PORT = 8080;
const server = express();
server.use(cors({
  optionsSuccessStatus: 200
}));


server.use(app.middleware());

app.route({
  url: '/',
  template: 'pages/home/template.html'
});

app.route({
  url: '/one',
  template: 'pages/one/template.html',
  controller: 'pages/one/page.js'
}, () => {
  return {
    label: 'one'
  };
});

app.route({
  url: '/one/:id',
  template: 'pages/one/template.html',
  controller: 'pages/one/page.js'
}, ({ urlParameters }) => {
  console.log(urlParameters);
  return {
    label: 'one'
  };
});

app.route({
  url: '/two',
  template: 'pages/two/template.html',
  controller: 'pages/two/page.js'
}, () => {
  return {
    label: 'two'
  };
});

server.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});

