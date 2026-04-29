<template>
  <div class="cs-root">
    <div class="cs-blue-band"></div>
    <div class="cs-bubble cs-b1"></div>
    <div class="cs-bubble cs-b2"></div>
    <div class="cs-bubble cs-b3"></div>

    <div class="cs-content">

      <div class="cs-logo-pill">
        <div class="cs-logo-dot"></div>
        <div class="cs-logo-text">Power<span style="color:#fff; opacity:0.6">|</span> Cleaner</div>
      </div>

      <div class="cs-eyebrow">✦ Algo grande está llegando</div>
      <h1 class="cs-headline">
        Próximamente
        <em>limpieza total.</em>
      </h1>
      <p class="cs-sub">
        Estamos preparando algo poderoso para ti. Nuestra tienda online estará lista muy pronto con los mejores productos de limpieza del mercado.
      </p>

      <div class="cs-countdown">
        <div class="cs-count-block">
          <div class="cs-count-num" id="cd-days">24</div>
          <div class="cs-count-label">Días</div>
        </div>
        <div class="cs-count-sep">:</div>
        <div class="cs-count-block">
          <div class="cs-count-num" id="cd-hours">08</div>
          <div class="cs-count-label">Horas</div>
        </div>
        <div class="cs-count-sep">:</div>
        <div class="cs-count-block">
          <div class="cs-count-num" id="cd-mins">45</div>
          <div class="cs-count-label">Minutos</div>
        </div>
        <div class="cs-count-sep">:</div>
        <div class="cs-count-block">
          <div class="cs-count-num" id="cd-secs">12</div>
          <div class="cs-count-label">Segundos</div>
        </div>
      </div>

      <div class="cs-socials">
        <div class="cs-social">f</div>
        <div class="cs-social">in</div>
        <div class="cs-social">@</div>
        <div class="cs-social">▶</div>
      </div>

    </div>

    <div class="cs-tagline">El poder de la limpieza — powercleaner.mx</div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  mounted() {
    // Establecer fecha de lanzamiento: 29 de abril de 2026 + 50 días = 18 de junio de 2026
    const launch = new Date('2026-04-29T00:00:00');
    launch.setDate(launch.getDate() + 50);

    function tick() {
      const now = new Date();
      const diff = launch - now;
      
      if (diff <= 0) {
        // Cuando llegue la fecha, mostrar ceros
        document.getElementById('cd-days').textContent = '00';
        document.getElementById('cd-hours').textContent = '00';
        document.getElementById('cd-mins').textContent = '00';
        document.getElementById('cd-secs').textContent = '00';
        return;
      }
      
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      
      document.getElementById('cd-days').textContent = String(d).padStart(2,'0');
      document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
      document.getElementById('cd-mins').textContent = String(m).padStart(2,'0');
      document.getElementById('cd-secs').textContent = String(s).padStart(2,'0');
    }
    
    tick();
    setInterval(tick, 1000);
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&family=Montserrat:wght@400;600;700;800&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { height: 100%; margin: 0; padding: 0; overflow-x: hidden; }

  .cs-root {
    font-family: 'Montserrat', sans-serif;
    background: #D30E1C;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  .cs-blue-band {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 220px;
    background: #047CBD;
    clip-path: ellipse(75% 100% at 50% 100%);
  }

  .cs-bubble { position: absolute; border-radius: 50%; }
  .cs-b1 { width: 320px; height: 320px; top: -80px; right: -80px; background: rgba(255,255,255,0.07); }
  .cs-b2 { width: 180px; height: 180px; bottom: 60px; left: -50px; background: rgba(255,255,255,0.06); }
  .cs-b3 { width: 80px; height: 80px; top: 60px; left: 100px; background: rgba(255,255,255,0.05); }

  .cs-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cs-logo-pill {
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50px;
    padding: 8px 24px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 36px;
  }
  .cs-logo-dot { width: 10px; height: 10px; border-radius: 50%; background: #fff; }
  .cs-logo-text {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 18px;
    color: #fff;
  }
  .cs-logo-text span { color: #047CBD; }

  .cs-eyebrow {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.65);
    margin-bottom: 14px;
  }

  .cs-headline {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 62px;
    color: #fff;
    line-height: 1.0;
    letter-spacing: -2px;
    margin-bottom: 8px;
  }
  .cs-headline em {
    font-style: normal;
    color: #047CBD;
    display: block;
    -webkit-text-stroke: 2px #fff;
    text-shadow: 0 0 0 #047CBD;
    background: #fff;
    -webkit-background-clip: text;
    background-clip: text;
    color: #047CBD;
  }

  .cs-sub {
    font-size: 15px;
    color: rgba(255,255,255,0.75);
    line-height: 1.7;
    max-width: 400px;
    margin: 16px 0 44px;
  }

  .cs-countdown {
    display: flex;
    gap: 14px;
    margin-bottom: 60px;
    align-items: flex-end;
  }
  .cs-count-block { display: flex; flex-direction: column; align-items: center; }
  .cs-count-num {
    background: #fff;
    border-radius: 14px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 36px;
    color: #D30E1C;
    letter-spacing: -1px;
  }
  .cs-count-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.55);
    margin-top: 8px;
  }
  .cs-count-sep {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    font-size: 34px;
    color: rgba(255,255,255,0.4);
    margin-bottom: 20px;
  }


  .cs-socials { 
    display: flex; 
    gap: 10px; 
    margin-top: 20px;
  }
  .cs-social {
    width: 38px; height: 38px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.25);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.6);
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  .cs-tagline {
    position: absolute;
    bottom: 18px;
    font-size: 11px;
    color: rgba(255,255,255,0.3);
    letter-spacing: 1px;
    text-transform: uppercase;
    z-index: 2;
  }

  /* Responsive para Tablets */
  @media (max-width: 768px) {
    .cs-headline {
      font-size: 48px;
    }
    
    .cs-sub {
      font-size: 14px;
      max-width: 350px;
    }
    
    .cs-countdown {
      gap: 10px;
      margin-bottom: 40px;
    }
    
    .cs-count-num {
      width: 70px;
      height: 70px;
      font-size: 30px;
    }
    
    .cs-count-sep {
      font-size: 28px;
    }
    
    .cs-socials {
      gap: 8px;
      margin-top: 15px;
    }
    
    .cs-social {
      width: 35px;
      height: 35px;
      font-size: 11px;
    }
  }

  /* Responsive para Celulares */
  @media (max-width: 480px) {
    .cs-root {
      padding: 15px;
    }
    
    .cs-logo-pill {
      margin-bottom: 25px;
      padding: 6px 18px;
    }
    
    .cs-logo-text {
      font-size: 16px;
    }
    
    .cs-eyebrow {
      font-size: 10px;
      margin-bottom: 12px;
    }
    
    .cs-headline {
      font-size: 36px;
      letter-spacing: -1px;
    }
    
    .cs-sub {
      font-size: 13px;
      max-width: 300px;
      margin: 12px 0 30px;
    }
    
    .cs-countdown {
      gap: 8px;
      margin-bottom: 30px;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .cs-count-block {
      margin-bottom: 5px;
    }
    
    .cs-count-num {
      width: 60px;
      height: 60px;
      font-size: 24px;
    }
    
    .cs-count-label {
      font-size: 9px;
      margin-top: 6px;
    }
    
    .cs-count-sep {
      font-size: 22px;
      margin-bottom: 15px;
    }
    
    .cs-socials {
      gap: 6px;
      margin-top: 10px;
    }
    
    .cs-social {
      width: 32px;
      height: 32px;
      font-size: 10px;
    }
    
    .cs-tagline {
      font-size: 9px;
      bottom: 15px;
    }
  }

  /* Para pantallas muy pequeñas */
  @media (max-width: 320px) {
    .cs-headline {
      font-size: 28px;
    }
    
    .cs-count-num {
      width: 50px;
      height: 50px;
      font-size: 20px;
    }
    
    .cs-count-sep {
      font-size: 18px;
    }
  }
</style>