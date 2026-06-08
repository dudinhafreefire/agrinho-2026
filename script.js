// Quiz simples
document.getElementById("quizButton").addEventListener("click", function() {
    let answer = prompt("Qual prática ajuda a preservar o solo?\n1. Desmatamento\n2. Agricultura regenerativa\n3. Uso excessivo de fertilizantes");
    if(answer === "2") {
        alert("Correto! Agricultura regenerativa conserva o solo e aumenta a produtividade.");
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }
});

// Formulário simples
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada! Obrigado pelo contato.");
    this.reset();
});
