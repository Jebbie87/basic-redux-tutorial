// Define a function listPeople which is given an array containing objects defining people's names and ages.

// Return: a string formatted as a list of names and age groups separated by commas except for the last two names, which should be separated by an ampersand.

// The age group is broken down such that:
// - For ages under 16 they are considered a 'kid'
// - For ages between 16 and 59 (inclusive) they are considered an 'adult'
// - For anything higher they are considered a 'senior'

// For example:

function listPeople(people) {
  let sentence = ''
  people.forEach(function(person, index) {
    let test = ', '
    if (index === 0) {
      test = ''
    } else if (index === people.length - 1) {
      test = ' & '
    }
    if (person.age < 16) {
      sentence += `${test}${person.name} the kid`
    } else if (person.age >= 16 && person.age <= 59) {
      sentence += `${test}${person.name} the adult`
    } else {
      sentence += `${test}${person.name} the senior`
    }
  })
  // return sentence
  console.log(sentence)
}

  listPeople([
    {
      name: 'Bart',
      age : 62
    },
    {
      name: 'Lisa',
      age : 61
    },
    {
      name: 'Maggie',
      age : 61
    }
  ]);

// Returns:

//   Bart the kid, Lisa the adult & Maggie the senior