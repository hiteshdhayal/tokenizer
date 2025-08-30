import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

const userQuery='hello world';

const encodedQuery = enc.encode(userQuery);
// console.log(encodedQuery);

            function encodeMessage() {
            // Get the input message from player1-input
            const input = document.getElementById('player1-input').value;
            // Encode the message using base64
            const encoded = enc.encode(input);
            // Display the encoded message in output1 textarea
            document.getElementById('output1').value = encoded;
            // Update score (simple length-based score)
            const score = input.length * 10;
            document.getElementById('output1').placeholder = `Encoded tokens appear here... (Score: ${score})`;
        }

        function decodeMessage() {
            // Get the encoded message from player2-input
            const input = document.getElementById('player2-input').value;
            try {
                // Decode the message using base64
                const decoded = enc.decode(input);
                // Display the decoded message in output2 textarea
                document.getElementById('output2').value = decoded;
                // Update high score (fixed at 9999 for valid decode)
                document.getElementById('output2').placeholder = `Decoded message revealed... (High Score: 9999)`;
            } catch (e) {
                // Handle invalid base64 input
                document.getElementById('output2').value = 'Invalid tokens!';
                document.getElementById('output2').placeholder = `Decoded message revealed... (High Score: 0)`;
            }
        }
