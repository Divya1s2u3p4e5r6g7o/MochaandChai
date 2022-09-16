
const axios=require('axios');
class Student{
    constructor(){

    }
    home(type){
        let data= this.getInfo(type,1)
        return data + 5;
    }
    userId(){
        return 12;
    }
    getInfo(type,status){
        return type;
    }

    finalMarks(total){
        let external= this.getExternal(total)
        let internal= this.getInternal(total)
        let finalSum =external + internal + 10;// 6+4  +10 +5
        return finalSum;

    }
    getExternal(total){
        return total + 1;
    }
    getInternal(total){
        return total - 1;
    }

    dbData(){
        return new Promise((resolve,reject)=>
        {
         setTimeout(()=> resolve("hello"),1500);
        })
        

        
    }
    thirdPartyApi(){
        return new Promise((resolve,reject)=>{
            axios.get('http://localhost:3000/groceries/get')
            .then(res=>{
                resolve(res.data)
                console.log(res.data)
            })
            .catch(err=>{
                reject(err)
            })

        })
    }


}
module.exports=Student