const phrases = ['Lorem ipsum dolor sit recusandae rem saepe aliquam.', ' Quidem temporibus iusto harum aut itaque incidunt.', 'Libero ipsa sapiente porro impedit iusto harum aut recusandae rem?', 'Repellat quae, sed non saepe aliquam nisi voluptate recusandae rem reiciendis iusto ducimus repudiandae facere.']

const phrase = document.querySelector('#changing-phrase').textContent

setInterval(() => {
  document.getElementById("changing-phrase").innerHTML=phrases[Math.floor(Math.random() * phrases.length)];
}, 5000)