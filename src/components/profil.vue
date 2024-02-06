<template>


  <div class="leftHand">
    <button type="button" class="button"><router-link to="/"><img src="./pics/zuruck.png" class="icon"></router-link></button>
    <br>
    <br>
    <br>
    <button type="button" class="button"><img src="./pics/feuerwehrhelm.png" class="icon"></button>
    <br>
    <br>
    <br>
    <button type="button" class="button"><img src="./pics/gasmaske.png" class="icon"></button>
  </div>

  <div class="middle">
    <Header Text="Nutzerverwaltung"></Header>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <button type="button" class="button"><img src="./pics/aufhanger.png" class="icon"></button>
    <br>
    <br>
    <br>
    <button type="button" class="button"><img src="./pics/clock.png" class="icon"></button>
  </div>

  <div class="rightHand">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <button type="button" class="button"><router-link to="/profil/kalender"><img src="./pics/kalender.png" class="icon"></router-link></button>
    <br>
    <br>
    <br>
    <button type="button" class="button"><img src="./pics/punkte.png" class="icon"></button>
  </div>
  
</template>

<script>
import Header from './features/Header.vue';
import Kalender from './views/benutzer/BenutzerKalender.vue';

export default {
  components: {
    Header,
    Kalender
  }
}
</script>

<style scoped>

body {
  margin: 0; /* Setzt den Körperrand auf 0, um den standardmäßigen Body-Rand zu entfernen */
}

.leftHand{
  position: absolute;
  left: 1px; /* Hier kannst du den gewünschten Abstand zum linken Rand einstellen */
  top: 5%; /* Optional: Hier kannst du den gewünschten Abstand zum oberen Rand einstellen */
  padding: 10px;
}
.middle{
position: absolute; 
  right: 34%;/* Hier kannst du den gewünschten Abstand zum linken Rand einstellen */
  top: 5%; /* Optional: Hier kannst du den gewünschten Abstand zum oberen Rand einstellen */
  padding: 10px;
}

.rightHand{
  position: absolute;
  right: 1px; /* Hier kannst du den gewünschten Abstand zum linken Rand einstellen */
  top: 5%; /* Optional: Hier kannst du den gewünschten Abstand zum oberen Rand einstellen */
  padding: 10px;
}

.icon {
  max-width: 65%;
  height: auto;
}

.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  min-width: 350px;
  min-height: 100px;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  }

button::before {
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
</style>
