const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Cassidy', 10, 'test@email.com', 'USU');

    expect(intern.school).toEqual(expect.any(String));
})

test('get school', () => {
    const intern = new Intern('Cassidy', 10, 'test@email.com', 'USU');

    expect(intern.getSchool()).toEqual(intern.school);
})

test('get intern position', () =>{
    const intern = new Intern('Cassidy', 10, 'test@email.com', 'USU');

    expect(intern.getPosition()).toBe('Intern');
})