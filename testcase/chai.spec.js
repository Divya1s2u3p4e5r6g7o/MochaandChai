var chai=require('chai');
var assert=chai.assert;
var should=chai.should();
var expect=chai.expect;
//########ASSERT######

describe('------Aspect check-----',function(){
    let userName='code';
    let myList={
        item:[{
            id:1,name:'demo'
        }],
        title:'user list'
    }
    it("check string",function(){
        assert.typeOf(userName,'string');
    })
    it("equal match",function(){
        assert.equal(userName,'code');
    })
    it("length match",function(){
        assert.lengthOf(myList.item,1);
    })

})

//########should####



describe('should check',function(){
    let userName='code';
    let myList={
        item:[{
            id:1,name:'demo'
        }],
        title:'user list'
    }
    it('check String',function(){
        userName.should.be.a('string');
    })
    it('equal check',function(){
        userName.should.equal('code');
    })
    it('length check',function(){
        myList.should.have.property('item').with.lengthOf(1);
    })

})

//######### except########

describe('check except',function () {
    let userName='code';
    let myList={
        item:[{
            id:1,name:'demo'
        }],
        title:'user list',
        address:{
            country:'India',
            phoneNo:['9666109689','8331949349']
        }
    }
    it('string match',function(){
        expect(userName).to.be.a('string');
    })
    it('equal match',function(){
        expect(userName).to.equal('code');
    })
    it('length match',function(){
        expect(userName).to.lengthOf(4);
    })
    it('object match',function(){
        expect(myList).to.have.property('item').with.lengthOf(1);
    })
    it('api object match',function(){
        expect(myList).to.have.all.keys('item','title','address')
    })
    it('phone no',function(){
        expect(myList).to.have.nested.property('address.phoneNo[0]')
    })
    it('country name',function(){
        //expect(myList).to.have.nested.include({'address.country':'India'})
        expect(myList).to.have.nested.include({'address.phoneNo[1]':'8331949349'})

    })
    
    
});