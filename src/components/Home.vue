<template>
  <div class="mainBody">
  <router-link to="/services"><div class="top box left">Full Service <br /> of Information Services</div></router-link>
  <router-link to="/services"><div class="top box right">Remote/Share Revenue Release <br />  of Information Services</div></router-link>
  <router-link to="/services"><div class="bottom box left">Paper Chart <br />  Storage Services</div></router-link>
  <router-link to="/services"><div class="bottom box right">FREE Release of Information Services <br />  for Closed Hospitals/Clinics</div></router-link>
</div>
</template>

<script>

export default {
  name: "home"
};
</script>

<style scoped>
.box {
  border: 1px solid grey;
  background-color: #464646;
  color: white;
  height: 150px;
  width: 40%;
  display: inline-block;
  margin: 10px;
  padding-top: 100px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
}
top {
  margin-top: 20px;
}
</style>
