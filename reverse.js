const sentence = "I am learning web dev.";

for (const letter of sentence){
    console.log(letter);
}

let reverse = ''
for (const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}

// reverse string using for loop 

for (i=0;i<sentence.length;i++){
    console.log(i);
    console.log(sentence[i]);

}

const reversed = sentence.split('').reverse().join();
console.log(reversed);


