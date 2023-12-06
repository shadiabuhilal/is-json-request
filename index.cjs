'use strict';

const isJsonReq = (req)=> {
    const contentType = req && req.headers && req.headers['content-type'];
    if (contentType && contentType.toLowerCase().includes('application/json')) {
        return true;
    }

    return false;
};

const checkMethod = (req, method)=> {
    if (method && method.toLowerCase() === method) {
        return true;
    }

    return false;
};

const isGetReq = (req)=> checkMethod(req, 'get');
const isPostReq = (req)=> checkMethod(req, 'post');
const isPutReq = (req)=> checkMethod(req, 'put');
const isDeleteReq = (req)=> checkMethod(req, 'delete');

exports.isDeleteReq = isDeleteReq;
exports.isGetReq = isGetReq;
exports.isJsonReq = isJsonReq;
exports.isPostReq = isPostReq;
exports.isPutReq = isPutReq;
