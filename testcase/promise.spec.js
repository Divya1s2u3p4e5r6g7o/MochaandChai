var sinon = require("sinon");
var chai = require("chai");
var expect = chai.expect;
var Student = require("../controllers/studentctrl");
var studentObj = new Student();
const chaiaspromise = require("chai-as-promised");
const userctrl=require('../controllers/userctrl')
chai.use(chaiaspromise);

describe("-----Promise-------", ()=>{
  it(" Normal check value function ", (done)=> 
  {
    // expect(studentObj.dbData(5)).to.be.equal(10)
    studentObj.dbData().then((result)=>
     {
      expect(result.to.be.equal("hello"))

    });
    done();


  });


  it(" chai promised ", function () {
    this.timeout(0);
   return   expect(studentObj.dbData()).to.eventually.equal("hello");
  });

  it(" otp ", function () {
    this.timeout(0);
   return   expect(userctrl.newsData()).to.eventually.have.deep.property('otp');
  });


});
