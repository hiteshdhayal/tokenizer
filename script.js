// import { Tiktoken } from "js-tiktoken/lite";
// import o200k_base from "js-tiktoken/ranks/o200k_base";

// const enc = new Tiktoken(o200k_base);

// function encodeMessage() {
//     // Get the input message from player1-input
//     const input = document.getElementById('player1-input').value.trim();
    
//     if (!input) {
//         document.getElementById('output1').value = '';
//         document.getElementById('score1').textContent = 'Score: 0 (Enter a message to encode)';
//         return;
//     }

//     // Encode the message using Tiktoken
//     const encoded = enc.encode(input);
//     // Display the encoded message as a comma-separated string
//     document.getElementById('output1').value = encoded.join(', ');
//     // Update score (simple length-based score)
//     const score = input.length * 10;
//     document.getElementById('score1').textContent = `Score: ${score}`;
// }

// function decodeMessage() {
//     // Get the encoded message from player2-input
//     const input = document.getElementById('player2-input').value.trim();
    
//     if (!input) {
//         document.getElementById('output2').value = '';
//         document.getElementById('score2').textContent = 'High Score: 0 (Enter tokens to decode)';
//         return;
//     }

//     try {
//         // Parse the input as a comma-separated list of token IDs
//         const tokenArray = input.split(',').map(token => parseInt(token.trim()));
        
//         // Validate that all tokens are valid numbers
//         if (tokenArray.some(isNaN)) {
//             throw new Error('Invalid token format');
//         }

//         // Decode the message using Tiktoken
//         const decoded = enc.decode(tokenArray);
//         // Display the decoded message
//         document.getElementById('output2').value = decoded;
//         // Update high score (fixed at 9999 for valid decode)
//         document.getElementById('score2').textContent = 'High Score: 9999';
//     } catch (e) {
//         // Handle invalid input
//         document.getElementById('output2').value = 'Invalid tokens!';
//         document.getElementById('score2').textContent = `High Score: 0 (${e.message})`;
//     }
// }

 import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

    window.encodeMessage = function() {
        const input = document.getElementById('player1-input').value.trim();
        if (!input) return;
        const encoded = enc.encode(input);
        document.getElementById('output1').value = encoded.join(', ');
    };

    window.decodeMessage = function() {
        const input = document.getElementById('player2-input').value.trim();
        if (!input) return;
        try {
            const tokenArray = input.split(',').map(x => parseInt(x.trim()));
            const decoded = enc.decode(tokenArray);
            document.getElementById('output2').value = decoded;
        } catch (e) {
            document.getElementById('output2').value = "Invalid tokens!";
        }
    };