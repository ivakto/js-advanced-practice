// Write a program that keeps a string inside its context and can execute different commands that modify or print the string on the console.
// append(string) - append the given string at the end of the internal string
// removeStart(n) - remove the first n characters from the string, n is an integer
// removeEnd(n) - remove the last n characters from the string, n is an integer
// print - print the stored string on the console 

function solve () {
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(value) {
        str += value;
    }

    function removeStart(n) {
        str = str.slice(n)
    }

    function removeEnd(n) {
        str = str.slice(0, -n);
    }

    function print() {
        console.log(str);
    }
}

let firstZeroTest = solve();

firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print()