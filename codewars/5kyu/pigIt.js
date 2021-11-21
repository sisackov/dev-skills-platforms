function pigIt(str) {
    let words = str.split(' ');
    const regexp = /^[a-zA-Z]+$/;
    return words
        .map((word) => word.length === 1 && !word.match(regexp) ? word : word.slice(1) + word[0] + 'ay')
        .join(' ');
}

console.log(pigIt('Pig latin is cool'));//'igPay atinlay siay oolcay'
console.log(pigIt('O emporatay o oresmay !'));//'Oay emporatay oay oresmay !'