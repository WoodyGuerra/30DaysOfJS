const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort(function(a, b){return a - b}))
console.log(ages[0])
console.log(ages[ages.length-1])
console.log(ages[Math.floor(ages.length / 2)])
function media(arry)
{
    let count = 0;
    for(let i = 0,n = arry.length;i<n;i++)
    {
        count+=arry[i];
    }
    return count/arry.length;
}
let med = media(ages)
console.log(med)
console.log(ages[ages.length-1]-ages[0])
console.log(`${Math.abs(ages[0]-med)} e ${Math.abs(ages[ages.length-1]-med)}`)

console.log(countries)
console.log(countries.length)
console.log(countries.slice(0,10))
if(countries.length%2 == 0)
{
    console.log(countries[(countries.length/2)-1])
    console.log(countries[(countries.length/2)])
    let firstcountries = countries.slice(0,countries.length/2)
    let segcountries = countries.slice(countries.length/2)
    console.log(firstcountries)
    console.log(segcountries)
}
else
{
    console.log(countries[Math.floor(countries.length/2)])
    let firstcountries = countries.slice(0,Math.ceil(countries.length/2))
    let segcountries = countries.slice(Math.ceil(countries.length/2))
    console.log(Math.ceil(countries.length/2))
    console.log(firstcountries)
    console.log(segcountries)
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.


