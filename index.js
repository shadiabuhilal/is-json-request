const jsonContentTypesArr = [
    'application/json', 
    'application/problem+json', 
    'application/vnd.api+json', 
    'application/hal+json'
];

export const isJsonReq = (req)=> {
    const contentType = req && req.headers && req.headers['content-type'];

    const normalizedContentType = contentType && contentType.toLowerCase();

    if (normalizedContentType && jsonContentTypesArr.some((value)=> normalizedContentType.includes(value))) {
        return true;
    }

    return false;
};

const checkMethod = (req, method)=> {
    const normalizedReqMethod  = req && req.method && req.method && req.method.toLowerCase();
    
    if (normalizedReqMethod === method) {
        return true;
    }

    return false;
};

export const isGetReq = (req)=> checkMethod(req, 'get');
export const isPostReq = (req)=> checkMethod(req, 'post');
export const isPutReq = (req)=> checkMethod(req, 'put');
export const isDeleteReq = (req)=> checkMethod(req, 'delete');
