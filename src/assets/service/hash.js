let actual = new Date();
let PUBLIC_KEY = "VBNfgfTYrt5666FGHFG6FGH65GHFGHF656g";
let PRIVATE_KEY = "DGDFGDbnbnTRTEfg67hgyTYRTY56gfhdR6";
let utcTimeStamp =  actual.toISOString();

let Signature = PRIVATE_KEY+','+PUBLIC_KEY +','+ utcTimeStamp;

async function sha256(message) {

    const msgBuffer = new TextEncoder('utf-8').encode(message);

    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    
    return hashHex;
}

let firma = sha256(Signature);

console.log(firma);