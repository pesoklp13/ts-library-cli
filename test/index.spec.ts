import {sayHelloWorld} from '../src';

test('sayHelloWorld should return "hello world"', () => {
    expect(sayHelloWorld()).toEqual('hello world');
});
