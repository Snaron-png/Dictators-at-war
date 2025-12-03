function convertToRelative(filePath) {
  const index = filePath.indexOf("/kepek/");
  const relativePart = filePath.substring(index);   
  return `..${relativePart}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Kép kiválasztás
  const images = document.querySelectorAll('.img-choser img');
  let selectedImageSrc = document.querySelector('.img-choser img.selected')?.src;

  images.forEach(img => {
    img.addEventListener('click', () => {
      images.forEach(i => i.classList.remove('selected'));
      img.classList.add('selected');
      selectedImageSrc = convertToRelative(img.src);
    });
  });
  // 2. Sliderek élő frissítése
  const sliders = document.querySelectorAll('.stat-item input[type="range"]');
  sliders.forEach(slider => {
    const valueDisplay = slider.parentElement.querySelector('.stat-value');
    slider.addEventListener('input', () => {
      valueDisplay.textContent = slider.value; // Frissíti a kijelzőt
    });
  });
  // 3. Radio gombok (nem)
  const radioInputs = document.querySelectorAll("input[name='nem']");
  let gender = null;

  radioInputs.forEach(r => {
    r.addEventListener('change', () => {
      if (r.checked) {
        gender = r.value;
      }
    });
  });
  // 4. Mentés gomb esemény
  document.getElementById('save').addEventListener('click', () => {
    localStorage.clear();
    const charName = document.getElementById('char-name').value;
    if (charName) {
      const charDesc = document.getElementById('char-desc').value;
      
      const stats = {};
      sliders.forEach(slider => {
      stats[slider.name] = slider.value;
      });

      const karakterAdatok = {
      nev: charName,
      nem: gender,
      leiras: charDesc,
      kep: selectedImageSrc,
      statok: stats
      };   
      console.log('Mentett adatok:', karakterAdatok);
      alert('Karakter adatai elmentve! Vissza a főoldalra.');
      
      localStorage.setItem('lastCharacter', JSON.stringify(karakterAdatok));
      window.location.href = '../html/Fooldal.html';
    }
    else {
      alert("Adj nevet a karakterednek, vagy lépj vissza a főoldalra!")
    }
  });
});