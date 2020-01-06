function checkURL (abc) {
  var string = abc.value;
  if (!~string.indexOf("http")) {
    string = "http://" + string;
  }
  abc.value = string;
  return abc
}