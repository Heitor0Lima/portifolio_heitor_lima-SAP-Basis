// Função de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Obtém o elemento de destino
        const target = document.querySelector(this.getAttribute("href"));
        
        // Rola suavemente para o elemento
        target.scrollIntoView({
            behavior: "smooth",
            block: "start" // Alinha o topo do elemento no topo da janela
        });
    });
});
