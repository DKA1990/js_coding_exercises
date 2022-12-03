import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("Sums numbers contained in the array which are a multiple of either 3 or 5", () => {
        expect(sumMultiples([3, 5, 8, 7])).toBe(8);
        expect(sumMultiples([15])).toBe(15);
        expect(sumMultiples([20, 21, 8, 19, 12, 3, 17])).toBe(56);
        expect(sumMultiples([19, 4, 7, 22])).toBe(0);
    });

    test("Returns 0 upon being passed empty array", () => {
        expect(sumMultiples([])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("Returns true for strings containing only characters A, C, G and T", () => {
        expect(isValidDNA("ACGT")).toBe(true);
        expect(isValidDNA("AHGTS")).toBe(false);
    });

    test("Search string not case sensitive", () => {
        expect(isValidDNA("agtc")).toBe(true);
        expect(isValidDNA("sldufghldfigh")).toBe(false);
    });

    test("Returns false if passed empty string", () => {
        expect(isValidDNA("")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("Returns complementary DNA string when passed valid DNA string changing: A->T, T->A, G->C, C->G", () => {
        expect(getComplementaryDNA("ACGT")).toBe("TGCA");
        expect(getComplementaryDNA("ACTGATGGCA")).toBe("TGACTACCGT");
    });

    test("Returns false when passed invalid DNA string", () => {
        expect(getComplementaryDNA("FDTJHRTFH")).toBe(false);
    });
});

describe("isItPrime", () => {
    test("Returns true is passed a prime number, false otherwise", () => {
        expect(isItPrime(29)).toBe(true);
        expect(isItPrime(67)).toBe(true);
        expect(isItPrime(31)).toBe(true);
        expect(isItPrime(100)).toBe(false);
        expect(isItPrime(0)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("This function should receive a number and return an array of n arrays, each filled with n items. The parameter fill should be used as the filler of the arrays", () => {
        expect(createMatrix(3, "Blargh")).toEqual(
            [["Blargh", "Blargh", "Blargh"], 
             ["Blargh", "Blargh", "Blargh"], 
             ["Blargh", "Blargh", "Blargh"]]);
        expect(createMatrix(2, 4)).toEqual(
            [[4, 4],
             [4, 4]]);
    });

    test("Return empty array if passed 0", () => {
        expect(createMatrix(0, 90)).toEqual([]);
    });
});

describe("areWeCovered", () => {
    test("Function is passed an array of objects in format [{name: 'Dan', rota: ['Monday', ...]}, {name: ..., rota: ...}, ...]. Returns true if >= 3 people are on the rota for any given day 'day', passed as the second argument.", () => {
        const arr = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Boris", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] }, 
            { name: "Dan", rota: ["Wednesday"] }
        ];
        expect(areWeCovered(arr, "Wednesday")).toBe(true);
        expect(areWeCovered(arr, "Tuesday")).toBe(true);
        expect(areWeCovered(arr, "Friday")).toBe(false);
    });
});