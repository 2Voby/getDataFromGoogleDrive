var fileId = "1pX4o6LEVebUWApXGV4FQ1JlP0lMWvxjR";
var apiKey = "AIzaSyCNdfG6M-gWIBdBiX6Nz3S0O5aXWRRqllo";
var url =
  "https://www.googleapis.com/drive/v3/files/" +
  fileId +
  "?key=" +
  apiKey +
  "&alt=media";

setInterval(() => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}, 100);
