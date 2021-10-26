var movies = [

    {
        watched: false,
        moviename: "Lajanje na zvezde",
        year: 1998,
        country: "Srbija",
        note: "",
        cast: "Dragan Mićanović, Nataša Tapušković, Nikola Đuričko, Velimir Bata Živojinović, Dragan Jovanović"
    },
    {
        watched: false,
        moviename: "The Notebook",
        year: 2004,
        country: "The USA",
        note: "",
        cast: "Ryan Gosling, Rachel McAdams, James Garner, Gena Rowlands"
     },
     {
        watched: false,
        moviename: "Inception",
        year: 2010,
        country: "The USA",
        note: "",
        cast: "Leonardo DiCaprio, Tom Hardy, Joseph Gordon-Levitt, Elliot Page"
     }
];

function displayMoviesAsTable(moviesToShow = null){

    if(moviesToShow == null) moviesToShow = movies;

    let tableContents = "";
    moviesToShow.forEach( (movies) => {
        
        tableContents += `<tr>
                            <td>
                                <div id="chb">
                                    <input type="checkbox" name"checkbox1" ></input>
                                </div>
                            </td>
                            <td>${movies.moviename}</td>
                            <td>${movies.year}</td>
                            <td>${movies.country}</td>
                            <td>${movies.note}</td>
                            <td>${movies.cast}</td>
                        </tr>`;

    });

    document.getElementById("movies_table_body").innerHTML = tableContents;

}
$('input[name="checkbox1"]').on('change', function() {
  $(this).closest('tr').toggleClass('green', $(this).is(':checked'));
});//ne radi promjena boje reda...

var modalWrap = null;
const showModal = () => {
    if (modalWrap !== null) {
        modalWrap.remove();
      }
    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
    <div class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-light">
            <h5 class="modal-title">Dodaj novi film</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
            <div class="col-2">
            <form action="" id="newmovieform" >

                <label for="name_input">Naziv:</label>
                <input type="text" name="name" class="mb-2" placeholder="Unesite naziv filma" id="name_input">

                <label for="countryName_input">Godina:</label>
                <input type=number name="year" class="mb-2" placeholder="Unesite godinu prvog prikazivanja filma" id="year_input">

                <label for="population_input">Država:</label>
                <input type="text" name="country" class=" mb-2" placeholder="Unesite državu" id="country_input">

                <label for="population_input">Napomena:</label>
                <input type="text" name="note" class="mb-2" placeholder="Unesite napomenu" id="note_input">
            
                <label for="population_input">Glumci</label>
                <input type="text" name="cast" class="mb-2" placeholder="Unesite glumce" id="cast_input">


            </form>
        </div>
            </p>
          </div>
          <div class="modal-footer bg-light">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Odustani</button>
            <button type="button" class="btn btn-primary modal-success-btn" data-bs-dismiss="modal" onclick="addNewMovie()">Potvrdi</button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.append(modalWrap);
  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
 }
 
 function getUserInputs(){

    let name_input = document.getElementById("name_input").value;
    let year_input= document.getElementById("year_input").value;
    let country_input = document.getElementById("country_input").value;
    let note_input = document.getElementById("note_input").value;
    let cast_input = document.getElementById("cast_input").value;

    return {

        watched: false,
        moviename: name_input,
        year: year_input,
        country: country_input,
        note: note_input,
        cast: cast_input
    }
}

function clearInputs(){
    document.getElementById('new_city_form').reset();
}

function addNewMovie(){
    let newMovie = getUserInputs();
    movies.push(newMovie);
    displayMoviesAsTable();
    clearInputs();
}
displayMoviesAsTable();
