async function loadJson(url) {
  let responce = await fetch(url);
  if (responce.status === 200) {
    let json = await responce.json();
    return json;
  }
  throw new Error(responce.status);
}

loadJson("noffda").catch(() => console.log(123));
