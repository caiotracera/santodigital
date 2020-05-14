const phrases = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui distinctio quas facere ex esse provident.', ' Quidem temporibus libero ipsa sapiente iusto iusto harum aut itaque incidunt.', 'Libero ipsa sapiente porro iusto harum aut itaque incidunt impedit iusto harum aut recusandae rem?', 'Repellat quae, sed non saepe aliquam nisi voluptate recusandae rem reiciendis iusto ducimus repudiandae facere.']

const phrase = document.querySelector('#changing-phrase').textContent

setInterval(() => {
  document.getElementById("changing-phrase").innerHTML=phrases[Math.floor(Math.random() * phrases.length)];
}, 5000)