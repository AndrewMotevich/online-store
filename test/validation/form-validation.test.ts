import { Modal } from "../../src/components/modal";

const modal = new Modal();

describe('Validtion functions:', () => {
    test('check name input', () => {
        expect(modal.checkName('  sdsd     sd')).toBe(false);
        expect(modal.checkName('alhaerad')).toBe(false);
        expect(modal.checkName('timothy pop')).toBe(true);
        expect(modal.checkName('     ')).toBe(false);
    });
    test('check phone input', () => {
        expect(modal.checkPhone('12213123123131')).toBe(false);
        expect(modal.checkPhone('+77777')).toBe(false);
        expect(modal.checkPhone('+7777777788999')).toBe(true);
    });
    test('check address input', () => {
        expect(modal.checkAddress('sadasd asdas    ')).toBe(false);
        expect(modal.checkAddress('asda asdas asdas')).toBe(false);
        expect(modal.checkAddress('asdasd asdasda asdasd')).toBe(true);
    });
    test('check email input', () => {
        expect(modal.checkEmail('    ')).toBe(false);
        expect(modal.checkEmail('asdad@.com')).toBe(false);
        expect(modal.checkEmail('asdasd@a.c')).toBe(true);
    });
    test('check card number input', () => {
        expect(modal.checkCardNumber('                     ')).toBe(false);
        expect(modal.checkCardNumber('12311asdasdasd1')).toBe(false);
        expect(modal.checkCardNumber('121231231231231')).toBe(false);
        expect(modal.checkCardNumber('12123123123123123')).toBe(true);
    });
    test('check card month input', () => {
        expect(modal.checkCardMonth('sa')).toBe(false);
        expect(modal.checkCardMonth('13')).toBe(false);
        expect(modal.checkCardMonth('00')).toBe(false);
        expect(modal.checkCardMonth('-11')).toBe(false);
        expect(modal.checkCardMonth('06')).toBe(true);
    });
    test('check card year input', () => {
        expect(modal.checkCardYear('aas')).toBe(false);
        expect(modal.checkCardYear('-22')).toBe(false);
        expect(modal.checkCardYear('100')).toBe(false);
        expect(modal.checkCardYear('24')).toBe(true);
    });
    test('check card cvv input', () => {
        expect(modal.checkCardCVV('aas')).toBe(false);
        expect(modal.checkCardCVV('-222')).toBe(false);
        expect(modal.checkCardCVV('1003')).toBe(false);
        expect(modal.checkCardCVV('243')).toBe(true);
    });
});
