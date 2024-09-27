document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', function() {
        let proximoPasso = this.getAttribute('data-proximo');
        
        // Remove classe ativo de todos os passos
        document.querySelectorAll('.passo').forEach(passo => {
            passo.classList.remove('ativo');
        });
        
        // Adiciona classe ativo no próximo passo
        document.getElementById('passo-' + proximoPasso).classList.add('ativo');
    });
});
