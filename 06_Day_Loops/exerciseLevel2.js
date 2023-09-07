let chs = "0123456789qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM"
let n = 10, ran = ''
for(let i = 0; i < n;i++)
{
    ran += chs[Math.floor(Math.random()*chs.length)]
}
console.log(ran)

let charhex = '0123456789abcdef'
let hex = '#'
for(let i = 0; i < 6;i++)
{
    hex += charhex[Math.floor(Math.random()*charhex.length)]
}
console.log(hex)

console.log(`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`)

function randomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let ncoun = countries.toString().toUpperCase().split(',')
console.log(ncoun)
let nclen = [] 
for (const x of ncoun)
{
    console.log(x)
    nclen.push(x.length)
}
console.log(nclen)

let arar = []
for(let i = 0,n = countries.length;i < n;i++)
{
    arar.push((countries[i] + ',' + ncoun[i].slice(0,3) + ',' + nclen[i]).split(','))
}
console.log(arar)

