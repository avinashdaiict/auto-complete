import request from 'superagent';

const sendRequest = (method, url) => {
    const req = request[method](url);
    const promise = new Promise((resolve, reject) => {
        req
            .accept('application/json; charset=utf-8')
            .end((err, res) => {
                if (!err) {
                    resolve(res.body);
                } else {
                    reject(err.response.body);
                }
            });
    });
    return promise;

}

export const get = function (url) {
    return sendRequest('get', url)
}