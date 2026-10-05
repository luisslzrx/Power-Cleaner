<template>
  <div class="product-grid-container font-sans">
    <div class="grid-layout">
      <!-- Left (Large) Card -->
      <RouterLink to="/maquila-tu-producto" class="card card-left">
        <img :src="leftProduct.imageUrl" :alt="leftProduct.title" class="card-image" />
        <div class="card-overlay">
          <div class="tag-badge">{{ leftProduct.tag }}</div>
          <h2 class="product-title" v-html="leftProduct.titleHTML"></h2>
          <span class="cta-btn">{{ leftProduct.btnText }}</span>
        </div>
      </RouterLink>

      <!-- Right (Stacked) Cards -->
      <div class="card-stack-right">
        <!-- Top Card -->
        <RouterLink to="/tienda" class="card card-stacked card-stacked-top">
          <img :src="topRightProduct.imageUrl" :alt="topRightProduct.title" class="card-image" />
          <div class="card-overlay">
            <div class="tag-badge">{{ topRightProduct.tag }}</div>
            <h3 class="product-title-small" v-html="topRightProduct.titleHTML"></h3>
            <span class="cta-btn">{{ topRightProduct.btnText }}</span>
          </div>
        </RouterLink>

        <!-- Bottom Card -->
        <RouterLink to="/surtimos-tu-negocio" class="card card-stacked card-stacked-bottom">
          <img
            :src="bottomRightProduct.imageUrl"
            :alt="bottomRightProduct.title"
            class="card-image"
          />
          <div class="card-overlay">
            <div class="tag-badge">{{ bottomRightProduct.tag }}</div>
            <h3 class="product-title-small" v-html="bottomRightProduct.titleHTML"></h3>
            <span class="cta-btn">{{ bottomRightProduct.btnText }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import maquilaImg from '@/assets/images/maquila.webp'
import businessImg from '@/assets/images/negocio.webp'
import productsImg from '@/assets/images/paquete.webp'

const leftProduct = {
  title: 'Maquila tu producto',
  titleHTML: 'Maquila tu<br>producto',
  tag: 'Marca Propia',
  btnText: 'Cotizar Maquila',
  imageUrl: maquilaImg,
}

const topRightProduct = {
  title: 'Conoce nuestros paquetes de emprendedor',
  titleHTML: 'Paquetes de<br>Emprendedor',
  tag: 'Emprende',
  btnText: 'Ver Paquetes',
  imageUrl: productsImg,
}

const bottomRightProduct = {
  title: '¿Tienes un negocio? ¡Podemos surtirlo!',
  titleHTML: '¿Tienes un negocio?<br>¡Surtimos tu local!',
  tag: 'Negocios',
  btnText: 'Surtir mi Local',
  imageUrl: businessImg,
}
</script>

<style scoped>
/* Grid and Overall Layout */
.product-grid-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
}

.grid-layout {
  display: flex;
  gap: 1.5rem;
}

/* Common Card Styles */
.card {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background-color: #fff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  text-decoration: none;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(10, 35, 66, 0.12);
}

.card-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 1;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover .card-image {
  transform: scale(1.04);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(10, 35, 66, 0.9) 10%,
    rgba(10, 35, 66, 0.4) 60%,
    rgba(10, 35, 66, 0.15) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 3rem 2.5rem;
}

/* Common Text Styles */
.tag-badge {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.product-title {
  color: #fff;
  font-size: 2.25rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.15;
}

.product-title-small {
  color: #fff;
  font-size: 1.45rem;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 1.25rem;
  line-height: 1.25;
}

.cta-btn {
  font-size: 0.72rem;
  font-weight: 700;
  border: none;
  padding: 11px 24px;
  border-radius: 0.5rem;
  cursor: pointer;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.2s ease;
  display: inline-block;
  text-align: center;
  background-color: #c1121f;
  color: #fff;
}

.cta-btn:hover {
  background-color: #a80f1a;
}

/* Specifics for the Left (Large) Card */
.card-left {
  flex: 1.2; /* Takes slightly more space than the right column */
  min-height: 500px; /* To maintain a vertical profile */
}

/* Specifics for the Right Column and its Stacked Cards */
.card-stack-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card-stacked {
  height: calc(50% - 0.75rem); /* Half of the total height minus half of the gap */
}

.card-stacked .card-overlay {
  padding: 1.75rem 2rem;
}

/* Responsiveness (For phones) */
@media (max-width: 768px) {
  .product-grid-container {
    padding: 12px;
  }

  .grid-layout {
    flex-direction: column;
    gap: 1.25rem;
  }

  .card-left {
    min-height: 380px;
  }

  .card-stacked {
    min-height: 250px;
    height: auto;
  }

  .card-overlay {
    padding: 2rem 1.5rem;
  }

  .product-title {
    font-size: 1.75rem;
  }

  .product-title-small {
    font-size: 1.3rem;
  }

  .card-stacked-top,
  .card-stacked-bottom {
    flex: none;
    height: auto;
  }
}
</style>
