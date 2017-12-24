const btnText = document.getElementById('btnText');
const btnJSON = document.getElementById('btnJSON');
const btnAPI = document.getElementById('btnAPI');





btnText.addEventListener('click',getText)

btnJSON.addEventListener('click',getJSON);

btnAPI.addEventListener('click',getAPI);

//Get local file .txt data
function getText() {
  fetch('data.txt')
  .then(function(response) {
   return response.text()
   })
   .then(function(data) {
    // console.log(data)
    document.getElementById('output').innerHTML = `<ul class = "z-depth-4">
    <li >${data}</li></ul>`
  })
  .catch(function(error) {
    console.log(error);
  })
 
}

function getJSON() {
  fetch('data.json')
  .then(function(res) {
    return res.json()
  })
  .then(function(data) {
    // console.log(data);
    let output = ''
    data.forEach(post => {
     output+=`
     <ul class="z-depth-3">
      <li>${post.title}</li>
      <li>${post.body}</li>
      </ul>`
    });
    document.getElementById('output').innerHTML = output;
   
  })
}
function getAPI() {
  fetch('https://api.github.com/users')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    let output = ''
    data.forEach(user => {
     output+=`
     <ul class="z-depth-2">
      <li ><img src="${user.avatar_url}"> </img></li>
      <li>
     
     ${user.login}
      
   
      </li>
      <div>
        <a href="${user.html_url}"   class>Visit  ${user.login} page
        </a>
      </div>
      <li></li>
      </ul>`
  })
  document.getElementById('output').innerHTML = output;
})
}