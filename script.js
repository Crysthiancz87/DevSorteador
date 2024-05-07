
function generateNumber(){

    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    if (min >= max) {
        alert('Erro: O valor mínimo não pode ser maior que o valor máximo.')
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)
    }
    }
