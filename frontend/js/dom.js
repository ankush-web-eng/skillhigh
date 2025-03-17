// document.getElementsByTagName('p')[0].innerHTML = 'hi everyone';

// document.getElementsByClassName('main')[0].style.display = 'flex'
// document.getElementsByClassName('main')[0].style.gap = '10px';

// document.getElementById('skillhigh').innerHTML = 'YouTube';
// document.getElementById('skillhigh').href = 'https://youtube.com';
// document.getElementById('skillhigh').target = '_blank';

document.querySelector('button').style.color = 'blue';
document.querySelectorAll('button')[1].style.color = 'red';

// callback functions : will be executed only after an event / a task has been completed

document.querySelector('button').addEventListener('mouseover', function() {
    alert('The button has been clicked!!');
})

// everything you do manually