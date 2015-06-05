# Doorman

Exercises for the doormen.

## Facts

### HTTP Verbs

 - GET (read)
 - PUT (update)
 - POST (create)
 - DELETE (destroy)

### HTTP Status Codes

 - 200 (OK)
 - 201 (created)
 - 304 (not modified)
 - 400 (bad request)
 - 401 (unauthorized)
 - 402 (payment required)
 - 403 (forbidden)
 - 404 (not found)
 - 500 (internal server error)

### CORS (Cross Origin Resourse Sharing)

From MDN:

The Cross-Origin Resource Sharing standard works by adding new HTTP headers that allow servers to describe the set of origins that are permitted to read that information using a web browser.  Additionally, for HTTP request methods that can cause side-effects on user data (in particular, for HTTP methods other than GET, or for POST usage with certain MIME types), the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with an HTTP OPTIONS request method, and then, upon "approval" from the server, sending the actual request with the actual HTTP request method.  Servers can also notify clients whether "credentials" (including Cookies and HTTP Authentication data) should be sent with requests.

[Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)


