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
    <section class="Portofolio" id="Portofolio">
        <h2 class="heading">Portofolio</h2>
        <div class="portofolio">
            <div class="portofolio-item">
                <a href="frontend/Image/OracleCertificate.pdf" target= "-blank"><img src="frontend/Image/Oracleimg.jpg" alt="Projek 1"> </a>    
                <h2>Sertifikat Oracle Academy</h2>
                <h3>Database Foundations</h3>           
            </div>
            <div class="portofolio-item">
                <a href="frontend/Image/OracleCertificate2.pdf" target= "-blank"><img src="frontend/Image/Oracleimg.jpg" alt="Projek 2"> </a>        
                <h2>Sertifikat Oracle Academy</h2>
                <h3>Database Programming with SQL</h3>                
            </div>
            <div class="portofolio-item2">
                <a href="https://github.com/Farrasl/Pemrograman-Bergerak" target= "-blank"><img src="frontend/Image/Projek1.jpeg" alt="Projek 1"> </a>     
                <h2>Projek Aplikasi Menghitung Luas dan Keliling Persegi Panjang</h2>
            </div>
            <div class="portofolio-item3">
                <a href="https://github.com/Farrasl/Pemrograman-Mahir" target= "-blank"><img src="frontend/Image/Projek2.png" alt="Projek 2"> </a>      
                <h2>Projek Management File</h2>
         
            </div>
        </div>
    </section>
  
  </template>
  
  <script>
  export default {
    name:'portofolio',
  
  };
  </script>
  
  <style>
  
  </style>