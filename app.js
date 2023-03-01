// var xhr = new XMLHttpRequest();
// var fileID = "1pQ_y5Q2EBaCWVDujDgiO-KDL1VZveHKh";
// let accessToken = "AIzaSyCNdfG6M-gWIBdBiX6Nz3S0O5aXWRRqllo";
// xhr.open(
//   "GET",
//   "https://www.googleapis.com/drive/v3/files/" + fileID + "?alt=media"
// );
// xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       var json = JSON.parse(xhr.responseText);
//       console.log(json);
//     } else {
//       console.log("Error: " + xhr.status);
//     }
//   }
// };

// var accessToken = "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";
// var xhr = new XMLHttpRequest();
// xhr.open(
//   "GET",
//   "https://www.googleapis.com/drive/v3/files?access_token=" + accessToken
// );
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       var json = JSON.parse(xhr.responseText);
//       console.log(json);
//     } else {
//       console.log("Error: " + xhr.status);
//     }
//   }
// };
// xhr.send();
var fileId = "1pX4o6LEVebUWApXGV4FQ1JlP0lMWvxjR";
var apiKey = "AIzaSyCNdfG6M-gWIBdBiX6Nz3S0O5aXWRRqllo";
var url =
  "https://www.googleapis.com/drive/v3/files/" +
  fileId +
  "?key=" +
  apiKey +
  "&alt=media";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
