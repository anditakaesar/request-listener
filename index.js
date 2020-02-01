const http = require('./app').http;

http.listen(3002, () => {
    console.log(`App listen at port 3002`);
});