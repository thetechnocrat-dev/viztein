export const JSON_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

// Wrapper to remove boiler plate around api requests, returns a fetch promise
// Please expand functionality as needed
// Look at Hook's utilities/api.js for inspiration on extending
export const fRequest = (url, options = {}) => {
  const method = options.method ? options.method : 'GET';
  return window
    .fetch(url, {
      body: options.data ? JSON.stringify(options.data) : null,
      headers: {
        ...JSON_HEADERS
      },
      method: method,
      credentials: 'include'
    })
    .then(response => {
      // We only want to json-ify if JSON is the header
      const contentType = response.headers.get('content-type');
      const isJSONResponse =
        contentType && contentType.includes('application/json');

      if (response.status >= 400) {
        return response[isJSONResponse ? 'json' : 'text']().then(errorResp => {
          return Promise.reject(errorResp);
        });
      }

      return isJSONResponse ? response.json() : response.text();
    });
};
