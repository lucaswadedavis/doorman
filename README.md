# Doorman

Exercises and notes for the doormen.

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

### Big Endian, Little Endian

From Wikipedia

For example, the number 123, has the hundreds-digit, 1, left-most which is understood by a numerate reader. This is an example of a big-endian convention taken from daily life. The little-endian way of writing the same number would place the digit 1 in the right-most position: 321. A person following conventional place-value order, who is not aware of this special ordering, would read the number as three hundred and twenty one. Endianness in computing is similar, but it applies to the ordering of bytes in memory or during transmission.

[Link](https://en.wikipedia.org/wiki/Endianness)
