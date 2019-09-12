const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('https://api-ilhamcell.herokuapp.com');
const transaksiDb = require('../models/transaksiModel');

describe('transaksi test', () => {
    it('menampilkan data transaksi', function (done) {
        server
            .get('/transaksi')
            .expect("Content-type",/json/)
            .expect(200)
            .end((err, res) => {
               console.log(res);
               res.status.should.equal(200);
               done();
            });
    });

    it('menambah data transaksi', function (done) {
        server
            .post('/transaksi')
            .send({ nama: "yolo", nomorHp: "085330157883", operatorId: "5d727da5521737123c17816d", nominalId: "5d79180ee916fb0f18fb39b4", status: "LUNAS" })
            .expect(201)
            .end((err, res) => {
               console.log(res);
               res.status.should.equal(201);
               done();
            });
    });

    it('menghapus data transaksi', function (done) {
        server
            .delete('/transaksi/5d7a73cd65f127188050b3d0')
            .expect(200)
            .end((err, res) => {
               console.log(res);
               res.status.should.equal(200);
               done();
            });
    });

    it('mengubah data transaksi', function (done) {
        server
            .get('/transaksi')
            .end((err, res) => {
               server
                   .put('/transaksi/'+res.body[0]._id)
                   .send({ nama: "yolo", nomorHp: "085330157883", operatorId: "5d727da5521737123c17816d", nominalId: "5d79180ee916fb0f18fb39b4", status: "LUNAS" })
                   .expect(200)
                   .end((error, result) => {
                      console.log(result);
                      result.status.should.equal(200);
                      done();
                   });
            });
    });
});