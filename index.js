/**
 * @private
 * @description Supported JSON content type values ['application/json', 'application/problem+json', 'application/vnd.api+json', 'application/hal+json'].
 */
const jsonContentTypes = [
    'application/json', 
    'application/problem+json', 
    'application/vnd.api+json', 
    'application/hal+json'
];

/**
 * @function
 * @description Function that check if current request is a json request or not.
 * @param {Object} req - Http request object
 * @param {Object} req.headers - Http request headers object
 * @param {string} req.headers."content-type" - Http request content-type header
 * @returns {boolean}
 */
export const isJsonReq = (req)=> {
    const contentType = req && req.headers && req.headers['content-type'];

    const normalizedContentType = contentType && contentType.toLowerCase();

    if (normalizedContentType && jsonContentTypes.some((value)=> normalizedContentType.includes(value))) {
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

/**
 * @function
 * @description Function that check if current request is a http GET method request or not.
 * @param {Object} req - Http request object
 * @param {string} req.method - Http request method string
 * @returns {boolean}
 */
export const isGetReq = (req)=> checkMethod(req, 'get');

/**
 * @function 
 * @description Function that check if current request is a http POST method request or not.
 * @param {Object} req - Http request object
 * @param {string} req.method - Http request method string
 * @returns {boolean}
 */
export const isPostReq = (req)=> checkMethod(req, 'post');

/**
 * @function
 * @description Function that check if current request is a http PUT method request or not.
 * @param {Object} req - Http request object
 * @param {string} req.method - Http request method string
 * @returns {boolean}
 */
export const isPutReq = (req)=> checkMethod(req, 'put');

/**
 * @function 
 * @description Function that check if current request is a http DELETE method request or not.
 * @param {Object} req - Http request object
 * @param {string} req.method - Http request method string
 * @returns {boolean}
 */
export const isDeleteReq = (req)=> checkMethod(req, 'delete');
