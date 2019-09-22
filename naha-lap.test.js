const MahaLap = require("./maha-lap");
describe("Test Maha-Lap", () => {
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("จันทร์");
        expect(result).toEqual(2);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("อังคาร");
        expect(result).toEqual(3);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("พุธ");
        expect(result).toEqual(4);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("พฤหัส");
        expect(result).toEqual(5);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("ศุกร์");
        expect(result).toEqual(6);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("เสาร์");
        expect(result).toEqual(7);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("อาทิตย์");
        expect(result).toEqual(1);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("สงกรานต์");
        expect(result).toEqual(13);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
        expect(result).toEqual(31);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("คริสมาสต์");
        expect(result).toEqual(25);
    });
    test("Test Tamnai with day", () => {
        const result = MahaLap.tamnaiWithDay("วันลูก");
        expect(result).toEqual("วันผิด");
    });

    test("Test Tamnai with story", () => {
        const result = MahaLap.tamnaiWithStory("งูกับแมว");
        expect(result).toEqual(36);
    });
    test("Test Tamnai with story", () => {
        const result = MahaLap.tamnaiWithStory("cat and dog");
        expect(result).toEqual(66);
    });

    test("Test Tamnai with time กลางวัน random = 0.98 return 0.98", () => {
        global.Math.random = jest.fn(() => 0.98); // mock
        const result = MahaLap.tamnaiWithTime("กลางวัน");
        expect(result).toEqual(0.98);
    });
    test("Test Tamnai with time กลางวัน random = 0.4 return 0.5", () => {
        global.Math.random = jest.fn(() => 0.4);
        const result = MahaLap.tamnaiWithTime("กลางวัน");
        expect(result).toEqual(0.5);
    });
    test("Test Tamnai with time กลางคืน random = 0.5 return 0.5", () => {
        global.Math.random = jest.fn(() => 0.5);
        const result = MahaLap.tamnaiWithTime("กลางคืน");
        expect(result).toEqual(0.5);
    });

});