var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
const expect = chai.expect;

var server = require("../app");

let chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Task api",  () => {
  it("get user",  (done) =>{
    chai
      .request(server)
      .get("/user")
      .end((err, response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body).to.have.all.keys('data','statusText');
        done();
      });
  });
});
