const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('https://api-ilhamcell.herokuapp.com');
const operatorDb = require('../models/operatorModel');

describe('operator tes', () => {
    it('menampilkan data operator', function (done) {
        server
            .get('/operator')
            .expect("Content-type",/json/)
            .expect(200)
            .end((err,res) => {
                console.log(res);
                res.status.should.equal(200);
                done();
            });
    });

    it('menambah data operator', function (done) {
        server
            .post('/operator')
            .send({ nama: "XL" })
            .expect(201)
            .end((err, res) => {
               console.log(res);
               res.status.should.equal(201);
               done();
            });
    });

    it('menghapus dara operator', function (done) {
        server
            .delete('/operator/5d72773d4551f332f8a65935')
            .expect(200)
            .end((err, res) => {
               console.log(res);
               res.status.should.equal(200);
               done();
            });
    });

    it('mengubah data operator', function (done) {
        server
            .get('/operator')
            .end((err, res) => {
                server
                    .put('/operator/'+res.body[0]._id)
                    .send({ nama: "XL" })
                    .expect(200)
                    .end((error, result) => {
                       console.log(result);
                       result.status.should.equal(200);
                       done();
                    });
            })
    });
});