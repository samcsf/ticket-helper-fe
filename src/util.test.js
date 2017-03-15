import {parser,formatDate,fixLenNum} from './util';

test('Fix len return',()=>{
    expect(fixLenNum(2,2)).toBe('02');
});

test('Format today with -',()=>{
    expect(formatDate(new Date(),'@yyyy-@mm-@dd')).toBe('2017-03-16');
});

test('parse',()=>{
    expect(parser('adf@yyyyder@Mmfsfgsf@dD')).toBe(3);
});
test('parse2',()=>{
    expect(parser('adf@yyyder@Mmf@ksfgsf@dD')).toBe(2);
});