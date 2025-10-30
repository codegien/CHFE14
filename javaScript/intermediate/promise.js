const checkScore = new Promise((resolve, reject) => {
  const won = true;
  if (won) {
    resolve("Your team won");
  } else {
    reject("your team lost");
  }
});

// console,log(checkScore);
// in the case of resolve you go with .then();
// in the case of reject you go with .catch();
// in can have .finally for either ways

//checkScore.then().catch().finally()

checkScore
  .then((won) => console.log(wan))
  .catch((lost) => console.error(lost.message))
  .finally(() => console.log("Lets do this one more time"));

  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)).catch((err)=> console.error(err.message));

const apiPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
const outputdiv = document.getElementById('output')
const outputp = document.getElementById('outputp')
fetch(apiPostsUrl).then((response)=>{
    if(!response.ok){
        throw new Error("Network error, ensure you are connected to internet")
    }
    console.log(response);
    return response.json();
}).then((posts)=>{
    console.log(posts);
    outputdiv.textContent = posts[3].title;
    outputp.textContent =posts[3].body;
}).catch((err)=> console.error(err)).finally();
