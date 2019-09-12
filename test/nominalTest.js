const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('https://api-ilhamcell.herokuapp.com');
const nominalDb = require('../models/nominalModel');

describe('nominal test', () => {

    it('menampilkan semua data nominal', function (done) {
        server
            .get('/nominal')
            .expect("Content-type",/json/)
            .expect(200)
            .end(function (err, res) {
                console.log(res);
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                // res.body.error.should.equal(false);
                done();
            })
    });

    it('menyimpan data nominal', function (done) {
        server
            .post('/nominal')
            .send({ nama: '50' })
            .expect(201)
            .end(function (err, res) {
                console.log(res);
                res.status.should.equal(201);
                done();
            })
    });

    it('menghapus data nominal', function (done) {
        server
            .delete('/nominal/5d72773d4551f332f8a65935')
            .expect(200)
            .end(function (err, res) {
                console.log(res);
                res.status.should.equal(200);
                done();
            })
    });

    it('mengubah data nominal', function (done) {
        server
            .get('/nominal')
            .end(function (err, res) {
                server
                    .put('/nominal/'+res.body[0]._id)
                    .send({ nama: "500" })
                    .end(function (error, response) {
                        console.log(response);
                        response.status.should.equal(200);
                        done();
                    })
            })
    });
});