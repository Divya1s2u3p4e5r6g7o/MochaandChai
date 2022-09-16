const chai=require('chai')
var expect =chai.expect;
var Student=require('../controllers/studentctrl');
const stdClass=new Student();


const nock=require("nock");

describe("nock test result",function(){


    it('api test',function(done){


        var obj={status:'ok',statusCode:200,data:[]}

        const apihit =nock('http://localhost:3000/groceries')
        .get('/get')
        .reply(200,obj);

        stdClass.thirdPartyApi()
        .then(function(record){
            console.log(record)
            expect(record).to.be.eql(obj);
            done();
        })
        .catch(err=>{
            done(new Error('error:-'+err))
        })

    })

});