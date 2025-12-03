const dictators = {
  hitler: {
    nev: "Hitler",
    nem: "ferfi",
    kep: "../kepek/Hitler1.jpg",
    statok: {
      karizma: 9,
      szonoklat: 9,
      propaganda: 10,
      vezetes: 8,
      strategia: 5,
      furgeseg: 4,
      ero: 5,
      empatia: 0,
      intelligencia: 7,
      megbizhatosag: 2
    }
  },
  caesar: {
    nev: "Caesar",
    nem: "ferfi",
    kep: "../kepek/Caesar1.png",
    statok: {
      karizma: 10,
      szonoklat: 9,
      propaganda: 9,
      vezetes: 9,
      strategia: 10,
      furgeseg: 6,
      ero: 7,
      empatia: 4,
      intelligencia: 9,
      megbizhatosag: 6
    }
  },
  mao: {
    nev: "Mao Ce-Tung",
    nem: "ferfi",
    kep: "../kepek/Mao1.jpg",
    statok: {
      karizma: 9,
      szonoklat: 8,
      propaganda: 10,
      vezetes: 8,
      strategia: 7,
      furgeseg: 4,
      ero: 5,
      empatia: 2,
      intelligencia: 8,
      megbizhatosag: 3
    }
  },
  sztalin: {
    nev: "Sztálin",
    nem: "ferfi",
    kep: "../kepek/Sztalin1.jpg",
    statok: {
      karizma: 7,
      szonoklat: 6,
      propaganda: 10,
      vezetes: 9,
      strategia: 8,
      furgeseg: 4,
      ero: 6,
      empatia: 1,
      intelligencia: 8,
      megbizhatosag: 2
    }
  },
  aladeen: {
    nev: "Aladeen",
    nem: "ferfi",
    kep: "../kepek/Aladeen1.jpg",
    statok: {
      karizma: 9,
      szonoklat: 7,
      propaganda: 10,
      vezetes: 6,
      strategia: 3,
      furgeseg: 8,
      ero: 5,
      empatia: 6,
      intelligencia: 4,
      megbizhatosag: 8
    }
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showWinnerPopup(character) {
  const popup = document.getElementById('winnerPopup');
  const content = popup.querySelector('.popup-content');
  document.getElementById('winnerName').textContent = `${character.nev} Nyert!`;
  document.getElementById('winnerImg').src = character.kep;
  popup.style.display = 'flex';
  requestAnimationFrame(() => {
    content.style.transform = 'scale(1)';
    content.style.opacity = '1';
  });
}

function closePopup() {
  const popup = document.getElementById('winnerPopup');
  const content = popup.querySelector('.popup-content');
  content.style.transform = 'scale(0.7)';
  content.style.opacity = '0';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300);
}

async function fight(fighterA, fighterB) {
  const statA = fighterA.statok
  const statB = fighterB.statok
  let healthA = Number(document.getElementById("aHealth").textContent)
  const HA = healthA
  let healthB = Number(document.getElementById("bHealth").textContent)
  const HB = healthB
  let Admg = Number(statA.karizma) - Number(statB.propaganda) + Number(statA.vezetes) + Number(statA.strategia) - Number(statB.furgeseg) + Number(statA.ero) - Number(statA.empatia) + 10;
  let Bdmg = Number(statB.karizma) - Number(statA.propaganda) + Number(statB.vezetes) + Number(statB.strategia) - Number(statA.furgeseg) + Number(statB.ero) - Number(statB.empatia) + 10;
  if (Admg < 0) {
    alert("Értelmetlen harc, a harcosodnak nincs sebzése.")
    return
  }
  if ( Bdmg < 1) {
    alert("Értelmetlen harc, az ellenfelednek nincs sebzése:")
    return
  }
  await wait(500)
  while (healthA >= 0 && healthB >= 0)  {
    healthB -= Admg
    document.getElementById("bHealth").textContent = healthB;
    document.getElementById("bHBfill").style.width = (healthB/HB)*100 + "%";
    document.getElementById("aImg").classList.add('attackA');
    await wait(150)
    document.getElementById("aImg").classList.remove('attackA');
    if (healthB > 0) {
      await wait(500)
    healthA -= Bdmg
    document.getElementById("aHealth").textContent = healthA;
    document.getElementById("aHBfill").style.width = (healthA/HA)*100 + "%";
    document.getElementById("bImg").classList.add('attackB');
    await wait(150)
    document.getElementById("bImg").classList.remove('attackB');
    await wait(500)
    }
  }
  if (healthA < healthB) {
    showWinnerPopup(fighterB)
  }
  else {
    showWinnerPopup(fighterA)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const fighterSelectA = document.getElementById('fighter-a');
  const fighterSelectB = document.getElementById('fighter-b');
  const raw = localStorage.getItem('lastCharacter');
  if (raw) {
  const karakter = JSON.parse(raw);
  console.log('Betöltött karakter:', karakter);
  dictators["sajat"] = karakter;
    if (fighterSelectA && karakter.nev) {
      const opt = document.createElement('option');
      opt.textContent = karakter.nev;
      opt.value = "sajat"
      fighterSelectA.appendChild(opt);
    }
    if (fighterSelectB && karakter.nev) {
      const opt = document.createElement('option');
      opt.value = "sajat";
      opt.textContent = karakter.nev;
      fighterSelectB.appendChild(opt);
    }
  }
  fighterSelectA.addEventListener('change', (event) => {
      const A = event.target.value;
      const aHB = document.getElementById("healthA");
      if (A) {
        const fighterA = dictators[A];
        const aImg = document.getElementById('aImg');
        aImg.src = fighterA.kep;
        aImg.style.opacity = 1;
        aHB.style.opacity = 1;
        document.getElementById("aHBfill").style.width = "100%"
        document.getElementById("aHealth").textContent = fighterA.statok.megbizhatosag*10 +fighterA.statok.szonoklat*5 + fighterA.statok.intelligencia*5 + 100;
      }
      else {
        aImg.src = '';
        aImg.style.opacity = 0;
        aHB.style.opacity = 0;
      }
  });
  fighterSelectB.addEventListener('change', (event) => {
      const B = event.target.value;
      const bHB = document.getElementById("healthB");
      if (B) {
        const fighterB = dictators[B];
        const bImg = document.getElementById('bImg');
        bImg.src = fighterB.kep;
        bImg.style.opacity = 1;
        bHB.style.opacity = 1;
        document.getElementById("bHBfill").style.width = "100%"
        document.getElementById("bHealth").textContent = fighterB.statok.megbizhatosag*10 +fighterB.statok.szonoklat*5 + fighterB.statok.intelligencia*5 + 100;
      }
      else {
        bImg.src = '';
        bImg.style.opacity = 0;
        bHB.style.opacity = 0;
      }
  });
  document.getElementById("fight-button").addEventListener("click", () => {
    document.getElementById("fight-button").disabled = true
    if (fighterSelectA.value && fighterSelectB.value) {
      if (fighterSelectA.value != fighterSelectB.value) {
        document.getElementById('ring').scrollIntoView({ behavior: 'smooth' });
        fight(dictators[fighterSelectA.value], dictators[fighterSelectB.value])
      }
      else {
      alert("Válassz különböző karaktereket!");
      }
    }
    else {
      alert("Válassz karaktereket!");
    }
  })
  document.getElementById("closePopup").addEventListener("click", () => {
    closePopup()
    document.getElementById("fight-button").disabled = false
  })
});