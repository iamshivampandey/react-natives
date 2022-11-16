import React from "react";
import forEach from './sum.js';

// it("to check number are intezer",() => {
//     const result = sum(2,3);
//     expect(result).toBe(5);
// })
// it("to check number are intezer",() => {
//     const result = sum('2','3');
//     expect(result).toBe(5);
// })

it("to mock forEach",() => {
    const mockCallback = jest.fn(x => 42 + x);
    // console.log(mockCallback.mock)
forEach([0, 1], mockCallback);

expect(mockCallback.mock.calls.length).toBe(2);

expect(mockCallback.mock.calls[0][0]).toBe(0);

expect(mockCallback.mock.calls[1][0]).toBe(1);

expect(mockCallback.mock.results[0].value).toBe(42);
expect(mockCallback.mock.results[1].value).toBe(43);
})