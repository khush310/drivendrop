Parse.Cloud.useMasterKey();

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.afterSave("Listing", function(request, response) {
  console.log("req is");
  console.log(request.object.get("driver").objectId);
  var User = Parse.Object.extend("User");
  var query = new Parse.Query(Parse.User);
  query.get(request.object.get("driver").objectId, {
    success: function(user) {
      //console.log("fetched user", request.object.get("driver").id, request.object.get("driver").objectId);
      user.increment("credit", 1);
      user.save(function(error, resp) {
        if (error) {
          console.error("Got an error " + error.code + " : " + error.message);
        } else {
          console.log(resp);
        }
      });
    },
    error: function(error) {
      console.log("error", error);
      if (error) {
        console.error("Got an error " + error.code + " : " + error.message);
      }
    }
  });

});
