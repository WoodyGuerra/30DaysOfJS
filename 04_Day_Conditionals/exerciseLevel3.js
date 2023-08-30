let mes = prompt('Digite o mês: ').toLowerCase()
switch(mes)
{
    case 'janeiro':
    case 'março':
    case 'maio':
    case 'julho':
    case 'agosto':
    case 'outubro':
    case 'dezembro':
        console.log(mes + ' tem 31 dias')
    break
    case 'abril':
    case 'junho':
    case 'setembro':
    case 'novembro':
        console.log(mes + ' tem 30 dias')
    break
    case 'fevereiro':
        console.log(mes + ' tem 28 dias')
    break
    default:
        console.log('Invalido! Digite o nome do mês por extenso ex:("janeiro")')
}