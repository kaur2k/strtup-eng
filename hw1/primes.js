#!/usr/bin/env node

function listPrimes( nPrimes ) {
    var primes = [];
    for( var n = 2;  nPrimes > 0;  n++ ) {
        if( isPrime(n) ) {
            primes.push( n );
            --nPrimes;
        }
    }
    return primes;
}

function isPrime( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i === 0 )
            return false;
    }
    return true;
}

//Now you can run it in Node:

var fs = require('fs');
fs.writeFileSync( 'test.txt', listPrimes(100) );

//or directly in the browser console:

listPrimes( 100 );
