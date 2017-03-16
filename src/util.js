/**
 * fixLenNum(number,len)
 * 
 * Return fixed length number fill with zero
 * @param {number} number 
 * @param {number} len 
 */
export const fixLenNum = (number,len)=>{
    if (isNaN(parseInt(number,10))||isNaN(parseInt(len,10)))
        throw new TypeError('Number&Len should be both numeric!');
    let filler = 10 ** len;
    let result = filler+number+'';
    return result.slice(1);
}

/**
 * formatDate(date,format)
 * 
 * Input: new Date(1993,0,22),'@yyyy-@mm-@dd'
 *        new Date(1993,0,22),'@yyyy/@mm/@dd'
 * Output: '1993-01-22'
 *         '1993/01/22'
 *  
 * @param {Date} date 
 * @param {String} format 
 */
export const formatDate = (date,format) =>{
    let yyyy = date.getFullYear();
    //Month of Date start from 0 to 11
    let mm = date.getMonth()+1; 
    let dd = date.getDate();

    //define the pattern
    let yp = /@yyyy/ig;
    let mp = /@mm/ig;
    let dp = /@dd/ig;

    //replace
    let result = format.replace(yp,yyyy);
    result = result.replace(mp,fixLenNum(mm,2));
    result = result.replace(dp,fixLenNum(dd,2));

    return result;
}

export const addDay = (date,factor)=>{
    let sec = 1000;
    let min = 60 * sec;
    let hour = 60 * min;
    let day = 24 * hour;

    return new Date(date.getTime()+factor*day);
}