function actionFunction() {
    document.getElementById("action-button").style.backgroundColor="green";  
    document.getElementById("comedy-button").style.backgroundColor="white";  
    document.getElementById("crime-button").style.backgroundColor="white";  
    document.getElementById("romance-button").style.backgroundColor="white";
    alert("ACTION"); 
}
function comedyFunction() {
    document.getElementById("action-button").style.backgroundColor="white";  
    document.getElementById("comedy-button").style.backgroundColor="yellow";  
    document.getElementById("crime-button").style.backgroundColor="white";  
    document.getElementById("romance-button").style.backgroundColor="white";
    alert("COMEDY"); 
}
function crimeFunction() {
    document.getElementById("action-button").style.backgroundColor="white";  
    document.getElementById("comedy-button").style.backgroundColor="white";  
    document.getElementById("crime-button").style.backgroundColor="skyblue";  
    document.getElementById("romance-button").style.backgroundColor="white"; 
    alert("CRIME");
}
function romanceFunction() {
    document.getElementById("action-button").style.backgroundColor="white";  
    document.getElementById("comedy-button").style.backgroundColor="white";  
    document.getElementById("crime-button").style.backgroundColor="white";  
    document.getElementById("romance-button").style.backgroundColor="red"; 
    alert("ROMANCE");
}
function getMovies(){

  const url='https://image.tmdb.org/t/p/w500/';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzczMGNjNjFlZjdlNWY4ZjIyM2NjY2EwNWUyMGNmMiIsInN1YiI6IjY1YWJjNzlhOThmMWYxMDEyM2RmMjljZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oW76KevPa4JPpsmeDubrL7kZ0j_vVtzvNzZ9zT35kRs'
    }
  };

  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
      const container = document.getElementById('container');


         response.results.forEach(res => {


            const card = document.createElement('div');
  card.classList = 'card-body';
   let idx = 1;
  // Construct card content
  const content = `
    <div class="card">
    <div class="card-header" id="heading-${idx}">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">

                </button>
      </h5>
    </div>

    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body">

        <h2 style="color:red;">${res.title}</h1>
        <img src="${url+res.poster_path}"  height:100px width=160px alt="image">

        <p>${res.overview}</p>
        <p>${res.vote_count}</p>
        ...
      </div>
    </div>
  </div>
  `;

  // Append newyly created card element to the container
  container.innerHTML += content;
   // let card = document.createElement("div");

        // let name = document.createTextNode('Name:' + res.title + ', ');
        // card.appendChild(name);

        // let description = document.createTextNode('Description:' + res.overview + ', ');
        // card.appendChild(description);

        // let vote = document.createTextNode('vote:' + res.vote_count);
        // card.appendChild(vote);

        // let container = document.querySelector("#container");
        // container.appendChild(card);
    });
})
.catch(err => console.error(err));


}