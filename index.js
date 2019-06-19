fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(data => data.results)
  .then(people=>appendPeople(people))

  function appendPeople(people){
    people.forEach(function(people){$('article').append(`<p> <b> Name:  <u> ${people.name} </u> </b> <br>
      Birth year: ${people.birth_year} <br>
      Gender: ${people.gender} <br>
      Hair Color: ${people.hair_color} <br>
      Height: ${people.height}
      </p> <br> <br>`)
    })
  }
