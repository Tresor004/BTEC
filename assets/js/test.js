// test.js

// Insertion du HTML et CSS
const lockScreen = document.createElement('div');
lockScreen.innerHTML = `
  <style>
    #lockOverlay {
      position: fixed;
      top: 0; 
      left: 0;
      width: 100vw;
      height: 100vh;
      background: black;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 9999;
    }

    .lockGif {
      width: 150px;
      height: 150px;
      margin-bottom: 20px;
    }

    .lockMessage {
      color: white;
      font-size: 24px;
      margin-top: 20px;
      text-align: center;
    }

    #hiddenPasswordInput {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
    }
  </style>
  <div id="lockOverlay">
    <img class="lockGif" src="assets/images/cadenas.gif" alt="Cadenas animé">
    <div class="lockMessage">VOTRE SITE EST BLOQUÉ<br>Recontactez le développeur</div>
    <input type="password" id="hiddenPasswordInput" autocomplete="off">
  </div>
`;
document.body.appendChild(lockScreen);

const overlay = document.getElementById('lockOverlay');
const passwordInput = document.getElementById('hiddenPasswordInput');

// Date de blocage : aujourd'hui à 16h20
const lockDate = new Date();
lockDate.setHours(16, 20, 0, 0); // 16h20 aujourd'hui

// Vérifie si la période de déverrouillage temporaire est active
function isTemporarilyUnlocked() {
  const unlockTime = localStorage.getItem('tempUnlockUntil');
  return unlockTime && new Date().getTime() < parseInt(unlockTime);
}

// Fonction de blocage
const theLockCheck = () => {
  const now = new Date();
  const lockTimeReached = now >= lockDate;

  if (lockTimeReached && !isTemporarilyUnlocked()) {
    overlay.style.display = 'flex';
    passwordInput.focus();
  } else {
    overlay.style.display = 'none';
  }
}

// Vérifie toutes les secondes si la date/heure de blocage est atteinte
setInterval(theLockCheck, 1000);

// Déverrouillage temporaire pour 15 minutes
passwordInput.addEventListener('input', function () {
  if (this.value.toLowerCase() === 'ababa') {
    const unlockUntil = new Date().getTime() + 15 * 60 * 1000; // 15 minutes
    localStorage.setItem('tempUnlockUntil', unlockUntil);
    overlay.style.display = 'none';
    this.value = '';
  }
});

// Vérification initiale
theLockCheck();
passwordInput.focus();
