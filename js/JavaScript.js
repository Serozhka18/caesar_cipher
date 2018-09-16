class Caesar {
        constructor(message) {
        this.message = message;
        this.alphabet=[
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ];
        this.shift = Math.floor((Math.random() * 10)+1);
    }

    getAlphabet() {
        return this.alphabet;
    }

    setAlphabet(alphabet) {
        this.alphabet = alphabet;
    }

    getShift() {
        return this.shift;
    }

    setShift(shift) {
        this.shift = shift;
    }

    getMessage() {
        return this.message
    }

    setMessage(message) {
        this.message = message;
    }

    encrypt() {
        var buff = '';
        for (var i = 0; i < this.message.length; i++) {
            var isUppercase = false;
            if (this.message[i] === this.message[i].toUpperCase())
                isUppercase = true;
            var index = this.alphabet.indexOf(this.message[i].toUpperCase());
            var letter = '';
            if (index < 0) {
                letter = this.message[i];
            } else {
                if (this.alphabet.length-1 >= (index + this.shift)) {
                    if (isUppercase)
                        letter = this.alphabet[(index + this.shift)];
                    else
                        letter = this.alphabet[(index + this.shift)].toLowerCase();
                } else {
                    if (isUppercase)
                        letter = this.alphabet[((index + this.shift) - this.alphabet.length)];
                    else
                        letter = this.alphabet[((index + this.shift) - this.alphabet.length)].toLowerCase();
                }
            }
            buff+=letter;
        }
        this.setMessage(buff);
        return this;
    }

    decrypt() {
        var buff = '';
        for (var i = 0; i < this.message.length; i++) {
            var isUppercase = false;
            if (this.message[i] === this.message[i].toUpperCase())
                isUppercase = true;
            var index = this.alphabet.indexOf(this.message[i].toUpperCase());
            var letter = '';
            if (index < 0) {
                letter = this.message[i];
            } else {
                if ((index - this.shift) >= 0) {
                    if (isUppercase)
                        letter = this.alphabet[(index - this.shift)];
                    else
                        letter = this.alphabet[(index - this.shift)].toLowerCase();
                } else {
                    if (isUppercase)
                        letter = this.alphabet[(this.alphabet.length + (index - this.shift))];
                    else
                        letter = this.alphabet[(this.alphabet.length + (index - this.shift))].toLowerCase();
                }
            }
            buff+=letter;
        }
        this.setMessage(buff);
        return this;
    }
}



let CaesarCipher = new Caesar('');
function config() {
    let message = document.getElementById('message').value;
    let shift = document.getElementById('shift').value;
    CaesarCipher.setMessage(message);
    CaesarCipher.setShift(parseInt(shift));
}
function encrypt() {
    document.getElementById('cipher').value = CaesarCipher.encrypt().getMessage();
}

function decrypt() {
    alert(CaesarCipher.decrypt().getMessage());
}

