
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("updatePricingAssignments", function(request, response) {
    var query = new Parse.Query("competitorList");
    query.equalTo(request.head, true);
    query.each(function (object) {
        object.set(request.head, false);
        object.save();
    }).then(function (success) {
        response.success("OK");
    }, function(err) {
        response.error(err);
    });
});
