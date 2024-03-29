/*

    Seguindo o andamento dos exercícios, neste código
    permanece as mesmas inicializações anteriores, com
    a function adicionar() - criada para denotar todos
    as idades que foram adicionadas.

    Para representar as idades acima e abaixo de 18,
    cria-se um forEach(), para executar um determinado
    comando seguindo uma estrutura condicional composta.

*/

let array = []

function adicionar() {

    let txtidades = document.querySelector('#txtidades')
    let res = document.querySelector('#res')

    if (txtidades.value.length == 0) {
        
        alert('[ERRO]')

    } else {

        let idades = Number(txtidades.value)
        array.push(idades)

        res.innerHTML = ''

        array.forEach(idade => {
    
            if (idade < 18) {
        
                res.innerHTML += `<br>${idade} anos = Menor de Idade`
        
            } else {
        
                res.innerHTML += `<br>${idade} anos = Maior de Idade`
        
            }
        
        })

        if (array.length > 10) {

            alert('[ERRO]')

            res.innerHTML = ''

        }

        txtidades.focus()
        txtidades.value = ''

    }

}
