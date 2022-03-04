// listando as chavbes dos objetos usando for;

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  for (const property in coolestTvShow) {
    console.log(property);
  }
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons

  // usando objecto.keys

  console.log(Object.keys(coolestTvShow));

  // Retorna:[ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]


  // Tente criar uma função que exiba as habilidades do objeto student 
  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const listSkills = (student) => {
      const arrayOfSkills = Object.keys(student);
      for (const index in arrayOfSkills) {
          console.log(`${arrayOfSkills[index]}, Nivel: ${student[arrayOfSkills[index]]}`);
      }
  };

  console.log('Estudante 1:');
  listSkills(student1);

  console.log('Estudante 2:');
  listSkills(student2);