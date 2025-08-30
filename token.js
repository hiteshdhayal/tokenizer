import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

const query= 'hello';

const encoded = enc.encode(query);
const decoded = enc.decode(encoded);

console.log('Encoded:', encoded);
console.log('Decoded:', decoded);
