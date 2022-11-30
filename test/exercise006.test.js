import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("Sums numbers contained in the array which are a multiple of either 3 or 5", () => {
        expect(sumMultiples([3, 5, 8, 7])).toBe(8);
        expect(sumMultiples([15])).toBe(15);
        expect(sumMultiples([20, 21, 8, 19, 12, 3, 17])).toBe(56);
        expect(sumMultiples([19, 4, 7, 22])).toBe(0);
    })

    test("Returns 0 upon being passed empty array", () => {
        expect(sumMultiples([])).toBe(0);
    })
});

describe("isValidDNA", () => {
    test("Returns true for strings containing only characters A, C, G and T", () => {
        expect(isValidDNA("ACGT")).toBe(true);
        expect(isValidDNA("AHGTS")).toBe(false);
    })

    test("Search string not case sensitive", () => {
        expect(isValidDNA("agtc")).toBe(true);
        expect(isValidDNA("sldufghldfigh")).toBe(false);
    })

    test("Returns false if passed empty string", () => {
        expect(isValidDNA("")).toBe(false);
    })
});

describe("getComplementaryDNA", () => {
    test("Returns complementary DNA string when passed valid DNA string changing: A->T, T->A, G->C, C->G", () => {
        expect(getComplementaryDNA("ACGT")).toBe("TGCA");
        expect(getComplementaryDNA("ACTGATGGCA")).toBe("TGACTACCGT");
    })
})

describe("isItPrime", () => {
    test("Returns true is passed a prime number, false otherwise", () => {
        expect(isItPrime(29)).toBe(true);
        expect(isItPrime(67)).toBe(true);
        expect(isItPrime(31)).toBe(true);
        expect(isItPrime(100)).toBe(false);
        expect(isItPrime(0)).toBe(false);
    })
})