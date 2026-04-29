<template>
  <div class="coming-soon-container">
    <div class="content">
      <h1 class="title">Próximamente</h1>
      <p class="subtitle">Estamos trabajando en algo increíble para ti</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.coming-soon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-family: Arial, sans-serif;
}

.content {
  text-align: center;
  padding: 2rem;
}

.title {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 300;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  margin: 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
}
</style>
