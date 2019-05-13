exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        { id: 1, categoryId: 1, question: '2 + 2? ', answer: '4', dateCreated: '', check1: '', check2: '', check3: '' },
        { id: 2, categoryId: 1, question: '9 + 9?', answer: '18', dateCreated: '', check1: '', check2: '', check3: '' },
        { id: 3, categoryId: 1, question: '2 x 2?', answer: '4', dateCreated: '', check1: '', check2: '', check3: '' },
        { id: 4, categoryId: 2, question: 'What branch of Einstein\'s relativity deals with gravity?', answer: 'General Relativity', dateCreated: '', check1: '', check2: '', check3: '' },
        { id: 5, categoryId: 2, question: 'How fast does light travel?', answer: '2.998×10^8 meters per second', dateCreated: '', check1: '', check2: '', check3: ''  },
        { id: 6, categoryId: 2, question: 'Does a scalar have both magnitude and direction?', answer: 'No', dateCreated: '', check1: '', check2: '', check3: '' },
        { id: 7, categoryId: 3, question: 'Which spelling is correct: category or catagory? ', answer: 'Category', dateCreated: '', check1: '', check2: '', check3: ''  },
        { id: 8, categoryId: 3, question: 'Which is correct, alot or a lot?', answer: 'a lot', dateCreated: '', check1: '', check2: '', check3: ''  }
      ])
    })
}
