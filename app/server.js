import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { routeMiddleware } from '@webformula/pax-core';

const PORT = 8080;
const app = express();
// app.use(morgan('tiny'))
app.use(cors({
  optionsSuccessStatus: 200
}));

app.use(routeMiddleware({
  pagesFolder: 'app/pages',
  path404: 'app/pages/404/page.html',

  /**
   * If false then only the code for the requested page will be loaded
   * If true then all code is loaded and it will start working like a SPA
   */
  allowSPA: false
}));

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
