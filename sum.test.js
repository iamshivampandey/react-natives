import React from "react";
import sum from './sum.js';

it("to check number are intezer",() => {
    const result = sum(2,3);
    expect(result).toBe(5);
})
it("to check number are intezer",() => {
    const result = sum('2','3');
    expect(result).toBe(5);
})
