// Callback Hell
// Set Immediate-> This method is used to break up long running operations and run a callback function
//  immediately after the browser has completed other operations such as events and display updates.
function doAsyncTask(cb) {
    setImmediate(() => {
      console.log("Async Task Calling Callback");
      cb();
    });
  }
  
  doAsyncTask(() => {
    doAsyncTask(() => {
      doAsyncTask(() => {
        doAsyncTask(() => {
          doAsyncTask(() => {
            doAsyncTask(() => {
              doAsyncTask(() => {
                doAsyncTask(() => {
                  doAsyncTask(() => {
                    doAsyncTask(() => {});
                  });
                });
              });
            });
          });
        });
      });
    });
  });