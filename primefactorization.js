(function() {
    'user strict';
    var list = [];

    /**
 	* Represents a formula for determining if a number is prime or not.
 	* @param {int} n - number to check if prime.
 	*/
    function isPrime(n) {
        if (n === 1) {
            return false;
        } else if (n === 2) {
            return true;
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return false;
                }
            }
            return true;
        }
    };

    /**
 	* Method used for getting all the prime factors of a given number.
 	* @param {int} num - Number to get prime factors for.
 	*/
    function getPrimeFactors(num) {
        if (isPrime(num)) {
            list.push(num);
            return;
        }

        var i = 2;
        while (i < num / 2) {
            if (num % i == 0) {
                if (isPrime(i)) {
                    getPrimeFactors(num / i);
                    list.push(i);
                    return;
                }
            }
            i++;
        }
        return;
    };



    if (process.argv.length !== 3) {
        console.error('Please provide a number to calculate primes for. Usage: node primefactorization.js _number_');
        return;
    }

    getPrimeFactors(process.argv[2]);
    console.log(list);
})();
