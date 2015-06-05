function writeCorsHeaders(request, response){
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', request.headers['access-control-request-headers'] || '');
}

function corsRoute(callback) {
    return function(request, response){
        writeCorsHeaders(request, response);

        if(request.method === 'OPTIONS'){
            return response.end();
        }

        callback.apply(null, arguments);
    };
}

module.exports = corsRoute;
