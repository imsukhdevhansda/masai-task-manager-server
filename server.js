const PORT = process.env.PORT || 8070;
const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname,'db.json'));
const middleware = jsonServer.defaults();
server.use(middleware);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))