// perguntas frequentes 
const perguntas = document.querySelectorAll(".pergunta");

for (let i = 0; i < perguntas.length; i++) {
	perguntas[i].addEventListener("click", () => {
		
		perguntas[i].classList.toggle('pergunta--ativa');
		
		const resposta = perguntas[i].nextElementSibling;
		resposta.classList.toggle('resposta--ativa');
		
		if (resposta.style.maxHeight) {
			resposta.style.maxHeight = null;
		} else {
			resposta.style.maxHeight = resposta.scrollHeight + 'px';
		}
		
	});
}