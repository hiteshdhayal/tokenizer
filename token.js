import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";

const enc = new Tiktoken(o200k_base);

const userQuery='hello , coudhary sahab here'

const token = enc.encode(userQuery);
// this encodes the given text into tokens 
 console.log({token});

const input=  [
    24912, 1366,  274,
     3053,   71,  815,
    18820,  378, 2105
  ];
  // this will decode tokens into text
  const decoder= enc.decode(input);

  console.log({decoder});
  