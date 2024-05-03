function buscarEndereco() {
    const cep = document.getElementById('cep').value;

    if (cep.length !== 8) {
        alert('Por favor, digite um CEP válido.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if(data.erro) {
                alert('CEP não encontrado');
            } else {
                document.getElementById('rua').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }
        }).catch(error => {
            console.error('Ocorreu um erro:', error);
            alert('Ocorreu um erro ao buscar o CEP.');
        })
}