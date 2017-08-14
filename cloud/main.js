
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


//The following function is used when deleting a project to set all competitors assigned to the project to false

Parse.Cloud.define('setProjectAssignmentsToFalse', function(req, res) {
  
  cont query = new Parse.Query("Review");
  query.equalTo(request.params.header, true);
  .find()
  .then((results) => {
   let value = false;
    for(let i = 0, i < results.length; ++i) {
      results[i].set(request.params.header, false);
      results[i].save();
    }
    response.success("completed");
  })
  .catch(() => {
    response.error("Column Update Failed");
  });
});
