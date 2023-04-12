function checkSpam(str) {
  if (
    str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
  ) {
    return false;
  } else {
    return true;
  }
}

console.log(checkSpam("innocent rabbit"));
