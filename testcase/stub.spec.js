var sinon = require("sinon");
var chai=require('chai');
var expect=chai.expect;
var Student=require('../controllers/studentctrl')
var studentObj =new Student();


describe('-----stub-------',function(){
   
    it(' function arguments check ',function(){
        var stub=sinon.stub(studentObj,'getExternal')
       stub.withArgs(5).returns(5);
        expect(studentObj.finalMarks(5)).to.be.equal(19);


    })
})