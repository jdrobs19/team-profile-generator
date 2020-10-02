const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer ('Carson', 8, 'test@email.com', 'fake-git');

    expect(engineer.github).toEqual(expect.any(String));
})

test('get Engineer position', () => {
    const engineer = new Engineer ('Carson', 8, 'test@email.com', 'fake-git');

    expect(engineer.getPosition()).toBe('Engineer');
})

test('get github username', () => {
    const engineer = new Engineer ('Carson', 8, 'test@email.com', 'fake-git');

    expect(engineer.returnGithub()).toEqual(engineer.github);
})