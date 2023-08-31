console.log('For 0-9')
for(let i = 0;i < 10;i++)
{
    console.log(i)
}
console.log('While 0-9')
let i = 0;
while(i < 10)
{
    console.log(i)
    i++;
}
console.log('Do While 0-9')
i = 0;
do
{
    console.log(i)
    i++
}while(i < 10)

console.log('For 9-0')
for(let i = 9;i >= 0;i--)
{
    console.log(i)
}
console.log('While 9-0')
i = 9;
while(i >= 0)
{
    console.log(i)
    i--;
}
console.log('Do While 9-0')
i = 9;
do
{
    console.log(i)
    i--;
}while(i >= 0);


console.log('For n')
for(let i = 0,n = 10;i < n;i++)
{    
    console.log(i)
}


for(let i = 1; i < 8;i++)
{
    console.log('#'.repeat(i))
}

for(let i = 0;i < 11;i++)
{
    console.log(`${i} x ${i} = ${i*i}`)
}


for(let i = 0;i < 11;i++)
{
    if(i==0)
    {
        console.log('i    i^2   i^3')
    }
    console.log(`${i}    ${i**2}     ${i**3}`)
}

console.log('Pares 0-100')
for(let i = 0;i < 101;i++)
{
    if(i % 2 == 0)
    {
        console.log(i)
    }
}

console.log('Impares 0-100')
for(let i = 0;i < 101;i++)
{
    if(i % 2 == 1)
    {
        console.log(i)
    }
}

console.log('Primos 0-100')
numPrimos(100);
function numPrimos(n)
{
    for(let i = 2; i <= n; i++)
    {
        if(primo(i)) 
        {
            console.log(i);
        }
    }
}
function primo(num)
{
    for(let i =2; i < num;i++)
    {
        if(num % i === 0)
        {
            return false;
        }
    }
    return true;
}

let sum = 0
for(let i = 0;i <= 100;i++)
{
    sum += i;
}
console.log(`A soma de 0-100 é: ${sum}`)

let sumpar = 0, sumimp = 0
for(let i = 0;i < 101;i++)
{
    if(i % 2 == 0)
    {
        sumpar += i;
    }
    else
    {
        sumimp += i;
    }
}
console.log(`A soma dos pares é: ${sumpar} A soma dos impares é: ${sumimp}`)


console.log((sumpar.toString() + ',' + sumimp.toString()).split(','))

let arr =[]
for(let i = 0;i < 5;i++)
{
    arr[i] = Math.floor(Math.random() * 10)
}
console.log(arr)


let ar =[]
for(let i = 0;i < 5;i++)
{
    let tmp = 0

    while(tmp == 0)
    {
        tmp = Math.floor(Math.random() * 10) 
        if(ar.includes(tmp))
        {
            tmp = 0
        }
        else
        {
            ar[i] = tmp
        }
    }
}
console.log(ar)

  
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars)