/* globals describe, it */
import expect from 'expect.js';
import { isJsonReq, isGetReq, isPostReq, isPutReq, isDeleteReq } from '../index.js';

describe('is-json-request util', () => {
    describe('isJsonReq()', () => {
        it('should return true', () => {
            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            ).to.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'application/json; charset=utf-8'
                    }
                })
            ).to.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'application/problem+json'
                    }
                })
            ).to.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'application/vnd.api+json'
                    }
                })
            ).to.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'application/hal+json'
                    }
                })
            ).to.be.ok();

            const headersMap = new Map();
            headersMap.set('content-type', 'application/json');

            expect(
                isJsonReq({
                    headers: headersMap
                })
            ).to.be.ok();
        });

        it('should return false', () => {
            expect(
                isJsonReq()
            ).to.not.be.ok();

            expect(
                isJsonReq({})
            ).to.not.be.ok();

            expect(
                isJsonReq({ headers: null })
            ).to.not.be.ok();

            expect(
                isJsonReq({ headers: {} })
            ).to.not.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': null
                    }
                })
            ).to.not.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': ''
                    }
                })
            ).to.not.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'text/plain'
                    }
                })
            ).to.not.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'text/javascript'
                    }
                })
            ).to.not.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'application/xml'
                    }
                })
            ).to.not.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'application/octet-stream'
                    }
                })
            ).to.not.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                })
            ).to.not.be.ok();

            expect(
                isJsonReq({
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                })
            ).to.not.be.ok();
        });
    });

    describe('isGetReq()', () => {
        it('should return true', () => {
            expect(
                isGetReq({
                    method: 'get'
                })
            ).to.be.ok();

            expect(
                isGetReq({
                    method: 'Get'
                })
            ).to.be.ok();

            expect(
                isGetReq({
                    method: 'GEt'
                })
            ).to.be.ok();

            expect(
                isGetReq({
                    method: 'GET'
                })
            ).to.be.ok();
        });

        it('should return false', () => {
            expect(
                isGetReq()
            ).to.not.be.ok();

            expect(
                isGetReq({})
            ).to.not.be.ok();

            expect(
                isGetReq({ method: null })
            ).to.not.be.ok();

            expect(
                isGetReq({ method: '' })
            ).to.not.be.ok();

            expect(
                isGetReq({
                    method: 'post'
                })
            ).to.not.be.ok();
        });
    });

    describe('isPostReq()', () => {
        it('should return true', () => {
            expect(
                isPostReq({
                    method: 'post'
                })
            ).to.be.ok();

            expect(
                isPostReq({
                    method: 'Post'
                })
            ).to.be.ok();

            expect(
                isPostReq({
                    method: 'POst'
                })
            ).to.be.ok();

            expect(
                isPostReq({
                    method: 'POST'
                })
            ).to.be.ok();
        });

        it('should return false', () => {
            expect(
                isPostReq()
            ).to.not.be.ok();

            expect(
                isPostReq({})
            ).to.not.be.ok();

            expect(
                isPostReq({ method: null })
            ).to.not.be.ok();

            expect(
                isPostReq({ method: '' })
            ).to.not.be.ok();

            expect(
                isPostReq({
                    method: 'get'
                })
            ).to.not.be.ok();
        });
    });

    describe('isPutReq()', () => {
        it('should return true', () => {
            expect(
                isPutReq({
                    method: 'put'
                })
            ).to.be.ok();

            expect(
                isPutReq({
                    method: 'Put'
                })
            ).to.be.ok();

            expect(
                isPutReq({
                    method: 'PUt'
                })
            ).to.be.ok();

            expect(
                isPutReq({
                    method: 'PUT'
                })
            ).to.be.ok();
        });

        it('should return false', () => {
            expect(
                isPutReq()
            ).to.not.be.ok();

            expect(
                isPutReq({})
            ).to.not.be.ok();

            expect(
                isPutReq({ method: null })
            ).to.not.be.ok();

            expect(
                isPutReq({ method: '' })
            ).to.not.be.ok();

            expect(
                isPutReq({
                    method: 'get'
                })
            ).to.not.be.ok();
        });
    });

    describe('isDeleteReq()', () => {
        it('should return true', () => {
            expect(
                isDeleteReq({
                    method: 'delete'
                })
            ).to.be.ok();

            expect(
                isDeleteReq({
                    method: 'Delete'
                })
            ).to.be.ok();

            expect(
                isDeleteReq({
                    method: 'DElete'
                })
            ).to.be.ok();

            expect(
                isDeleteReq({
                    method: 'DELETE'
                })
            ).to.be.ok();
        });

        it('should return false', () => {
            expect(
                isDeleteReq()
            ).to.not.be.ok();

            expect(
                isDeleteReq({})
            ).to.not.be.ok();

            expect(
                isDeleteReq({ method: null })
            ).to.not.be.ok();

            expect(
                isDeleteReq({ method: '' })
            ).to.not.be.ok();

            expect(
                isDeleteReq({
                    method: 'get'
                })
            ).to.not.be.ok();
        });
    });
});
