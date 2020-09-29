// JavaScript Document
var usCitiies = ["New York", "LA", "Seattle", "Houston", "Green bay"]; 



function outputArray() {
    usCitiies.push('Jackson');
    usCitiies.splice(0, 2);
    usCitiies.sort();
    for (var i = 0; i < usCitiies.length; i++) {
        document.write(usCitiies[i] + "<br>");
  }
}

outputArray(usCitiies)