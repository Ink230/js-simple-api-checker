function load() {
  const urlSrc = document.getElementById('urltext');

  urlSrc.addEventListener('keypress', (key) => {
    if (key.key === 'Enter') {
      getApi(); 
    }
  });

  urlSrc.value = setUrlDefault();
}

function getApi() {
  let url = document.getElementById('urltext').value;
  if (url) { setLocalInput(url) }
  
  const results = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
     displayData(data);
    return data;
  })
  .catch((err) => {
    console.warn(err);
  });
}

function displayData(data) {
  document.getElementById('result').innerHTML = '';

  if(data.constructor === Array) {
  data.forEach((item) => document.getElementById('result').innerHTML += JSON.stringify(item) + "\n");
  }
  else {
    document.getElementById('result').innerHTML = JSON.stringify(data);
  }
}

//localstorage
function setLocalInput(input){
  localStorage.setItem('url', input)
}

function setUrlDefault(){
  const storedInput = localStorage.getItem('url');
  return storedInput;
}