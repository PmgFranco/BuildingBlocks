var request = require("supertest");
var app = require("./app");

describe("Testing Initial Route",function(){

    it("stuff",function(done){
      request(app)
            .get("/")
           .expect(200) //StatusCode (OK)
           .end(function(err){
                if(err){throw err;}else{
                done();
                }
           });
    });

});
