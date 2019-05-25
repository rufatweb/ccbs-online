<template>
  <ul class="topnav">
  <li class="logo"><a href="#home"><img class="logo" width="50" height="50"  src="../assets/logo.jpg" /></a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#services">Services</a></li>
</ul>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {margin: 0;}

ul.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #FFF;
}

ul.topnav li:not(.logo) {
  float: right;
  margin-right: 60px;
  margin-top: 15px;
}

ul.topnav li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  font-size: 20px;
  text-decoration: none;
}

ul.topnav li:not(.logo) a:hover {background-color: #000000; color: #FFF}

ul.topnav li.logo a:hover {border: 1px solid black; padding: 15px;}

ul.topnav li.logo {float: left; margin-left: 30px;}

@media screen and (max-width: 600px) {
  ul.topnav li.logo,
  ul.topnav li {float: none;}
}

</style>
