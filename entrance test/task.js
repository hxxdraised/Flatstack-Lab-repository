class SequenceGen {
    constructor(start_line = '1') {
        this.line = start_line
    }

    nextLine() {
        var newLine = ""
        var c = 1
        for (let i = 1; i <= this.line.length; i++) {
            if ((this.line[i - 1] !== this.line[i])) {
                newLine += c.toString() + this.line[i - 1]
                c = 1
            }
            else {
                c++
            }
        }
        this.line = newLine
        return newLine
    }
}

sequence_len = 10
start_line = "hello"
generator = new SequenceGen(start_line)
console.log(start_line)
for (let i = 0; i < sequence_len; i++) {
    console.log(generator.nextLine())
}
