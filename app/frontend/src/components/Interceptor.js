import fetchIntercept from "fetch-intercept";
const unregister = fetchIntercept.register({
  request: function (url, config) {
    // Modify the url or config here
    let auth = localStorage.getItem('token')
    // console.log(auth)
    config.headers.authorization = `bearer ${auth}`.replace(/['"]/g,'');
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occured during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: function (response) {
    // Modify the reponse object
    return response;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  },
});

// Call fetch to see your interceptors in action.
// fetch('http://google.com');

// // Unregister your interceptor
// unregister();
export default unregister;