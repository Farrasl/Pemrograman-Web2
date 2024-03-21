<template>
    <header class="header">
        <nav class="navigation">
            <router-link to="/biodata">Biodata</router-link>
            <router-link to="/prestasi">Prestasi</router-link>
            <router-link to="/galeri">Galeri</router-link>
            <router-link to="/portofolio">Portofolio</router-link>
        </nav>
        <router-link to="/" class="btn-talk"> . . .</router-link>
    </header>
    <section class="Galeri" id="Portofolio">
        <h2 class="heading">Galeri</h2>
        <div class="galeri">
            <div class="galeri-item">
                <img src="frontend/Image/gambar1.jpeg" alt="Gambar 1">               
            </div>
            <div class="galeri-item">
                <img src="frontend/Image/gambar2.jpeg" alt="Gambar 2">             
            </div>
            <div class="galeri-item">
                <img src="frontend/Image/gambar3.jpeg" alt="Gambar 2">             
            </div>
        </div>
    </section>
  
  </template>
  
  <script>
  export default {
    name:'galeri',
  
  };
  </script>
  
  <style>
  
  </style>