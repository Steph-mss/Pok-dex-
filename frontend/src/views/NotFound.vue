<template>
  <div class="notfound">
    <div class="error-code">404</div>
    <img class="team-rocket" src="@/assets/team-rocket.png" alt="Team Rocket" />
    <p class="message">The rocket team <span>has won this time.</span></p>
    <button class="return-btn" @click="$router.push('/')">Return</button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.notfound {
  background: #e53935;
  height: 100vh; 
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* 404 en fond, énorme */
.error-code {
  font-family: "Karla", sans-serif;
  font-weight: 700;
  font-size: 700px;
  line-height: 100%;
  letter-spacing: 4px;
  color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  z-index: 1;

  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
}

/* Image centrée par dessus le 404 */
.team-rocket {
  position: relative;
  z-index: 2;
  max-width: 44%;
  height: auto;
  top: -3%;
  left: -12px;
}

/* Texte en dessous */
.message {
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
  letter-spacing: 7px;
  z-index: 2;
  margin-bottom: 1.5rem;
  position: relative;
  bottom: 3%;
}
.message span {
  font-weight: 900;
  color: #000;
}

/* Bouton */
.return-btn {
  padding: 0.5rem 3rem;
  font-size: clamp(1rem, 2vw, 1.2rem);
  background: #facc15;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 6px 0 #c9a009;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  z-index: 2;
}
.return-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 0 #c9a009;
}
.return-btn:active {
  transform: translateY(3px);
  box-shadow: 0 3px 0 #c9a009;
}
</style>
