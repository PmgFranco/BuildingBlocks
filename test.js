var request = require("supertest");
var app = require("./app");

describe("Tests of Initial Route",function(){

    it("If the server is running",function(done){
      request(app)
            .get("/")
            .expect(200,done) //StatusCode (OK)
    });

    it("HTML format is retrieved",function(done){
      request(app)
            .get("/")
            .expect("Content-Type",/html/,done) //StatusCode (OK)
    });

    it("HTML format is retrieved 2",function(done){
      request(app)
            .get("/")
            .expect("Content-Type",/html/,done) //StatusCode (OK)
    });
});

describe("Gets the list of cities on /cities",function(){

    it("It returns 200 status code",function(done){
        request(app)
              .get("/cities")
              .expect(200,done) //StatusCode (OK)
      });

      it("It returns JSON format",function(done){
          request(app)
                .get("/cities")
                .expect("Content-Type",/json/,done) //StatusCode (OK)
      });

      it("Returns initial cities",function(done){
          request(app)
                .get("/cities")
                .expect(JSON.stringify(["Lotopia","Caspiana","Indigo"]) ,done) //StatusCode (OK)
               });
      });
