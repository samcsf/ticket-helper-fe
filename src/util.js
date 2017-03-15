/**
 * Input: new Date(1993,0,22),'@yyyy-@mm-@dd'
 *        new Date(1993,0,22),'@yyyy/@mm/@dd'
 * Output: '1993-01-22'
 *         '1993/01/22'
 *  
 * @param {Date} date {String} format 
 */

export const fixLenNum = (number,len)=>{
    if (isNaN(parseInt(number,10))||isNaN(parseInt(len,10)))
        throw new TypeError('Number&Len should be both numeric!');
    let filler = 10 ** len;
    let result = filler+number+'';
    return result.slice(1);
}

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

export const parser = format =>{
    const TOKEN_LIST = ['yyyy','mm','dd'];
    const ESCAPE = '@';
    const icc = ignoreCaseCmp; //shorthand

    let charList = format.split('');
    let captureList = [];
    let temp = '';
    let token = '';
    let isEsc = false;
    charList.map(c=>{
        if(!isEsc&&icc(c,ESCAPE)){
            isEsc = true;
            return;
        }

        if(isEsc){
            //capture the next letter 
            token += c;
            //check with tokens

            let matchIdx = fetchItemFromBegin(token,TOKEN_LIST,icc);
            // no match
            if(matchIdx===undefined){
               temp += (ESCAPE+token);
               token = '';
               isEsc = false;
               //next item
               return;    
            }else{
                // exact
                if(fetchItem(token,TOKEN_LIST,icc)!==undefined){
                    captureList.push(token);
                    token = '';
                    isEsc = false;
                    return;
                }else return;
            }
        }else
            temp += c;
    });

    console.log(temp);
    console.log(captureList);
    
    return captureList.length;
}

function ignoreCaseCmp(a,b){
    return (a.toLocaleLowerCase() === b.toLocaleLowerCase());
}

//below functions need enhancement 
function fetchItemFromBegin(keyword,array,cmpFunc){
    let cmp = (a,b)=>a===b;
    if (typeof cmpFunc === 'function')
        cmp = cmpFunc;
    for (let item of array){
        if(cmp(keyword,item.substr(0,item.length>keyword.length?keyword.length:item.length)))
            return array.indexOf(item);
    }
} 

function fetchItem(keyword,array,cmpFunc){
    let cmp = (a,b)=>a===b;
    if (typeof cmpFunc === 'function')
        cmp = cmpFunc;
    for (let item of array){
        if(cmp(keyword,item))
            return array.indexOf(item);
    }
}


