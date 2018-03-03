//Class jumble
class Jumble {
    createPassword(nameEntered, dateEntered) {
        String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };

        let name = nameEntered.replaceAll(' ', '').toLowerCase().trim().split(/(?!$)/);
        let dob = dateEntered.replaceAll('/', '').trim().split(/(?!$)/);
    
        let currentArray = name.concat(dob);
        return this.shuffle(currentArray).toString().replaceAll(',', '');
    }
    
    //Fisher Yates Shuffle Algorithm
    shuffle(arr) {
        let currentIndex = arr.length
        , temporaryValue
        , randomIndex
        ;
    
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex = currentIndex - 1;
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
      return arr;
    }
}

module.exports = Jumble;

