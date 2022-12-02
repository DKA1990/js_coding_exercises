import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {
    test("When passed a num, function returns the sum of each individual digit eg. 123 returns 6", () => {
        expect(sumDigits(476)).toBe(17);
    });
});

describe("createRange", () => {
    test("Given a start, end and an optional step (all integers), returns an array with elements from start to end (inclusive) with increments of 1 or step if given.", () => {
        expect(createRange(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
        expect(createRange(3,20,2)).toEqual([3,5,7,9,11,13,15,17,19]);
    });
});

describe("getScreentimeAlertList", () => {
    test("Given an array of objects in the format shown below and a date in the format 'YYYY-MM-DD', returns the username of users who had a cumulative usage of all apps over 100.", () => {
        const arr = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                            ]
               },
               {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                             { date: "2019-05-02", usage: { mapMyRun: 21, whatsApp: 29, facebook: 59, safari: 10}},
                             { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
               }
        ];
        expect(getScreentimeAlertList(arr,"2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(arr,"2019-05-02")).toEqual(["beth_1234", "sam_j_1989"]);
        expect(getScreentimeAlertList(arr,"2020-05-04")).toEqual([]);
    });
});

describe("hexToRGB", () => {
    test("Accepts standard hex colour code in the format #RRGGBB (eg #FF1133), converts each set of two hex characters (eg FF, 11, 33) into their decimal equivalent and outputs a string in the format rgb(x,y,z) (eg 'rgb(255,17,51)')", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });
});

describe("findWinner", () => {
    test("Given an array of arrays (size 3x3) with valid elements being 'X', '0' and null, function checks whether there is a winner for tic tac toe. Returns 'X', '0' or null depending on winner.", () => {
        const arr1 = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ];
        const arr2 = [
            ["0", "0", "X"],
            ["X", "0", null],
            ["X", null, "0"]
        ];
        const arr3 = [
            ["X", "0", "X"],
            ["0", "0", "X"],
            ["X", "X", "0"]
        ];
        expect(findWinner(arr1)).toBe("X");
        expect(findWinner(arr2)).toBe("0");
        expect(findWinner(arr3)).toBe(null);
    });
});