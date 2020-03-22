module.exports = function toReadable (number) {
    let letter = {
        0: 'zero ',
        1: 'one ',
        2: 'two ',
        3: 'three ',
        4: 'four ',
        5: 'five ',
        6: 'six ',
        7: 'seven ',
        8: 'eight ',
        9: 'nine ',
        10: 'ten ',
        11: 'eleven ',
        12: 'twelve ',
        13: 'thirteen ',
        14: 'fourteen ',
        15: 'fifteen ',
        16:  'sixteen ',
        17: 'seventeen ',
        18: 'eighteen ',
        19: 'nineteen ',
        20: 'twenty ',
        30: 'thirty ',
        40: 'forty ',
        50: 'fifty ',
        60: 'sixty ',
        70: 'seventy ',
        80: 'eighty ',
        90: 'ninety ',
    }
    let a=String(number);
    let b=a.length;
    let key;
    if (b==1) {
        key=number;
        return letter[key].trim();
    }
    else {
        if (b==2) {
             for (let a in letter) {
                 if (a==number){
                     return letter[a].trim();
                 }
                }
                for (let a in letter) {
                     let word = letter[(Math.floor(number/10))*10]+letter[(number%10)];
                     return word.trim();}
                 }
             
        
        else { 
            let wordTwo;
            let num=number%100;
            if(num>=10){
            for (let b in letter){
                if (b==num){
                    wordTwo=letter[b];
                    break;
                }
                else {
                    wordTwo = letter[(Math.floor(num/10))*10]+ letter[(number%10)];
            
                }
            }
            let word= letter[Math.floor(number/100)]+'hundred '+ wordTwo;
            return word.trim();

        }
        else{
            if((number%10)==0){
                let word= letter[Math.floor(number/100)]+'hundred ';
                return word.trim();
            }
            else{
            let word= letter[Math.floor(number/100)]+'hundred '+ letter[(number%10)];
            return word.trim();}
        }
        }
    }
 }
