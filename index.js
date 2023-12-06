export const isJsonReq = (req)=> {
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

export const isGetReq = (req)=> checkMethod(req, 'get');
export const isPostReq = (req)=> checkMethod(req, 'post');
export const isPutReq = (req)=> checkMethod(req, 'put');
export const isDeleteReq = (req)=> checkMethod(req, 'delete');
