import {sayHelloWorld} from './index';

test('sayHelloWorld should return "hello world"', () => {
    expect(sayHelloWorld()).toEqual('hello world');
});
