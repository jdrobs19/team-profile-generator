const Manager = require('../lib/Manager');

test('get manager object', () => {
    const manager = new Manager ('Devin', 50, 'test@email.com', 19);

    expect(manager.office).toEqual(expect.any(Number));
})

test('get manager position', () => {
    const manager = new Manager('Devin', 50, 'test@email.com', 19);

    expect(manager.getPosition()).toBe('Manager');
})