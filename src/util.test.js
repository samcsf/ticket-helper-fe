import {addDay,formatDate,fixLenNum} from './util';

test('Fix len return',()=>{
    expect(fixLenNum(2,2)).toBe('02');
});

test('Format today with -',()=>{
    expect(formatDate(new Date(),'@yyyy-@mm-@dd')).toBe('2017-03-16');
});

test('Add day',()=>{
    expect(addDay(new Date(),1).getDate()).toBe(17);
});