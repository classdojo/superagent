var request = require("../../"),
Fiber       = require("fibers");

describe("sync-async", function () {
  it("can create an async http request", function (next) {

    var i = 0;

    Fiber(function () {
      request.
        post('http://localhost:3005/echo').
        async(false).
        send([1,2,3]).
        end(function (res) {
          i++;
          res.text.should.equal('[1,2,3]');
        })

        i.should.equal(1);
        next();
    }).run();

  });
});
