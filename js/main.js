let cards = ["๐", "๐", "๐ค", "๐", "๐", "๐", "๐คฉ", "๐"];
cards = cards.concat(cards);// pripoji  za pole jeste jedno to same
console.log(cards);
for (let i = 0; i < cards.length; i++) {
    let r = Math.floor(Math.random() * cards.length);// vygeneruje nรกhodnรฉ ฤรญslo od 0 - 15
    let tmp = cards[i];
    cards[i] = cards[r];
    cards[r] = tmp;
}
console.log(cards);
