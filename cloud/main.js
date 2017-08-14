
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('setProjectAssignmentsToFalse', function(req, res) {
  
  const query = new Parse.Query("Review");
  query.equalTo(req.params.header, true);
  .find()
  .then((results) => {
   let value = false;
    for (let i = 0, i < results.length; ++i) {
      results[i].set(req.params.header, false);
      results[i].save();
    }
    res.success("completed");
  })
  .catch(() => {
    res.error("Column Update Failed");
  });
});
