const botaomodal = document.querySelector ('#botaomodal');
const modalbg = document.querySelector ('.modal-background')
const modal = document.querySelector ('.modal');
const bfechar = document.querySelector ('.botao-fechar');


botaomodal.addEventListener('click', () => {
    modal.classList.add('is-active');
}),

modalbg.addEventListener('click', () => {
    modal.classList.remove('is-active');
}); 

bfechar.addEventListener('click', () => {
    modal.classList.remove('is-active');
});