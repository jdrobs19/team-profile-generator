const Employee = require('../lib/Employee');

test('creates object for employee', () => {
    const employee = new Employee ('Jordan', 5, 'test@email.com');

    expect(employee.name).toBe('Jordan');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('employee name', () => {
    const employee = new Employee ('Jordan', 5, 'test@email.com');

    expect(employee.getName()).toBe(employee.name);
})

test('employee id', () => {
    const employee = new Employee ('Jordan', 5, 'test@email.com');

    expect(employee.getId()).toBe(employee.id);
})

test('employee email', () => {
    const employee = new Employee ('Jordan', 5, 'test@email.com');

    expect(employee.getEmail()).toBe(employee.email);
})

test('employee position', () => {
    const employee = new Employee ('Jordan', 5, 'test@email.com');

    expect(employee.getRole()).toEqual(expect.any(String));
})