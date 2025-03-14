document.getElementsByTagName('h1')[0].style.color = 'violet';

document.querySelector('button').addEventListener('click', () => {
    // alert('Hi, I have been clicked!!;')

    let name = prompt('What is your name?');

    alert('Hi ' + name + ' , nice to meet you!!')
})