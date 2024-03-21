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
  <section class="Biodata" id="Biodata">
        <h2 class="heading">Biodata <span>Saya</span></h2>
        <div class="Biodata-gambar">
            <img src="frontend/Image/gambar1.jpeg" alt="">
            <span class="circle-spin"></span>
        </div>

        <div class="Biodata-content">
            <div class="Biodata-item"> 
                <h2>Informasi Pribadi </h2>
                <ul>
                    <li><strong>Nama:</strong> Farras Lathief</li>
                    <li><strong>Usia:</strong> 19 tahun</li>
                    <li><strong>Alamat:</strong> Jl Swakarya gg Emas no 13 </li>
                    <li><strong>Email:</strong> farraslathief@gmail.com</li>
                    <li><strong>Telepon:</strong> 081267572201</li>
                </ul>            
            </div>
            <div class="Biodata-item">
                <h2>Pendidikan</h2>
                <ul>
                    <li><strong>SMA</strong>, SMA IT Imam Syafii 2 Pekanbaru, 2019 - 2022</li>
                    <li><strong>Teknik Informatika</strong>, UIN Sultan Syarif Kasim Riau, 2022 - sekarang</li>
                </ul>           
             </div>
            <div class="Biodata-item">
                <h2>Hobi</h2>
                <ul>
                    <li><strong>Ngoding</strong> </li>
                    <li><strong>Olahraga</strong> </li>
                    <li><strong>Main Game</strong></li>
                </ul>
            </div>
        </div>        
    </section>  

</template>

<script>
export default {
  name:'biodata',

};
</script>

<style>

</style>