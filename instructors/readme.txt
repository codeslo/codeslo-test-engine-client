HOW TO CREATE CHALLENGES

SUMMARY: To create a challenge just add a directory for your challenge, copy/paste test.js, add your specs, and add a file where the student solves the challenge. Details below.

1. Inside the challenge directory, locate the correct week and date for your challenge
2. Inside the correct Week/Day directory, create a new directory called [your challenge name]
3. Every challenge needs its own directory!
4. Every challenge directory needs three files: the challenge file, the spec file, and test.js
5. copy / paste test.js from the sample test folder. Do not modify this code.
6. Inside your new challenge directory, create a new file called [challenge name].challenge.js. Note: you MUST affix the .challenge to your challenge name or the test will not find the file.
7. You must add a module.exports to your .challenge file, see example below.
8. The .challenge file is for student code
9. Create a test file for your challenge. This should be called [challenge name].spec.js
10. In your specs file, you'll need to require your test file. See spec example
11. Write your specs in the test file
12. Run your challenge by opening your challenge directory in the command line and typing "node test"
13. Results will be sent to the test server automatically

SAMPLE CHALLENGE FILE

function myChallenge(a,b){
    // student code here
}

module.exports = myChallenge;

END CHALLENGE SAMPLE

SAMPLE TEST FILE

const myChallenge = require('./myChallenge.challenge');

describe('myChallenge functionality',()=>{

    it('is a function',()=>{
        expect(typeof(myChallenge)).toBe('function');
    });

    it('returns sum of a and b',()=>{
        expect(myChallenge(1,2)).toEqual(3);
    });
});

END TEST SAMPLE