<template>
  <div class="page-container">
    <iframe src="http://127.0.0.1:5500/index.html"></iframe>
  </div>
</template>

<style>
.page-container {
  background: linear-gradient(to right, #7E3D00, #ffd1a7, #7E3D00);
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  height: 100vh;
}

.page-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>