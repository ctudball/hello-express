// Require Mocha/Chai for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

// Setup Chai
chai.use(chaiHttp);
const requester = chai.request(server).keepOpen();
const assert = chai.assert;
const expect = chai.expect;

// Test: Health endpoint returns OK and a status code of 200
describe('Health Endpoint', () => {
    it('Should return a status code of 200', (done) => {
        let result = requester.get('/health').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    })
    it('Should return OK as text/plain', (done) => {
        let result = requester.get('/health').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.be.text;
            expect(res.text).to.be.equal('OK');
            done();
        });
    })
})

// Test: Metatata endpoint returns data
describe('Metadata Endoint', () => {
    it('Should return a status code of 200', (done) => {
        let result = requester.get('/health').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    })
    it('Should return metadata in JSON', (done) => {
        let result = requester.get('/metadata').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.be.json;
            done();
        });
    })
})
// Test: Main endpoint returns valid HTML
describe('HealthPoint', () => {
    it('Should return a status code of 200', (done) => {
        let result = requester.get('/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    })
    it('Should return OK as text/plain', (done) => {
        let result = requester.get('/').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.be.html;
            expect(res.text).to.contain('Hello');
            done();
        });
    })
})

// Test: Invalid URL(s) return 404
describe('Invalid URL(s)', () => {
    it('/invalidpath should return a 404', (done) => {
        let result = requester.get('/invalidpath').end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
        });
    })
})

// Close down Chai - We are done
requester.close();