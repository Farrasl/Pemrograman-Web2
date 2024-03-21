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
    <section class="Prestasi" id="Prestasi">
        <h2 class="heading">Prestasi</h2>
        <div class="Prestasi-content">
            <div class="Prestasi-item">
                <img src="frontend/Image/gambar2.jpeg" alt="">
                <h2>Juara 2 Porseni TIF 4</h2>
                <h3>MLBB</h3>
            </div>
        </div>
    </section>
  
  </template>
  
  <script>
  export default {
    name:'prestasi',
  
  };
  </script>
  
  <style>
  
  </style>