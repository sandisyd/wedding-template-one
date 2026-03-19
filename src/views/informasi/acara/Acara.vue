<template>
  <div class="acara">
    <!-- <div v-if="showAnimation" class="container-flower">
      <span v-for="i in 20" :key="i" class="flower"> 🌸</span>
    </div> -->
    <div class="row" style="margin: 0px">
      <div class="col">
        <span class="acara-title">the wedding of</span>
        <div
          class="row pt-5 pb-5"
          style="justify-content: center; align-items: center; margin-right: 0px"
        >
          <div class="col-3 pe-0" style="text-align: end">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" style="color: #a3b18a">
              <path d="M0 6 L60 6" stroke="currentColor" stroke-width="3" />
            </svg>
          </div>
          <div class="col-2" style="width: 42px">
            <span
              ><img src="../../../assets/img/icon-park-solid_like.svg" alt="love" srcset=""
            /></span>
          </div>
          <div class="col-3 ps-0" style="text-align: start">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" style="color: #a3b18a">
              <path d="M0 6 L60 6" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="row" style="justify-content: center">
          <p class="acara-pembuka">Bismillahirrahmanirrahim</p>
          <p class="acara-salam">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
          <p class="acara-isi">
            Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah,
            perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan di antara putra-putri
            kami.
          </p>
        </div>
        <h1 class="groom-one">Ahmad</h1>
        <div
          class="row"
          style="justify-content: center; align-items: center; padding-bottom: 1.75rem"
        >
          <div class="col-3 pe-0" style="text-align: end">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" style="color: #a3b18a">
              <path d="M0 6 L60 6" stroke="currentColor" stroke-width="3" />
            </svg>
          </div>
          <div class="col-2" style="width: 42px">
            <span class="connect-sub">&</span>
          </div>
          <div class="col-3 ps-0" style="text-align: start">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" style="color: #a3b18a">
              <path d="M0 6 L60 6" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <h1 class="bride-one">Sari</h1>
        <div
          class="row pb-5"
          style="justify-content: center; align-items: center; margin-right: 0px"
        >
          <div class="col-3 pe-0" style="text-align: end">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" style="color: #a3b18a">
              <path d="M0 6 L60 6" stroke="currentColor" stroke-width="3" />
            </svg>
          </div>
          <div class="col-2" style="width: 42px">
            <span
              ><img src="../../../assets/img/icon-park-solid_like.svg" alt="love" srcset=""
            /></span>
          </div>
          <div class="col-3 ps-0" style="text-align: start">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" style="color: #a3b18a">
              <path d="M0 6 L60 6" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <span class="date-one">Minggu, 25 Agustus 2026</span>
      </div>
    </div>
  </div>
  <Pengantin />
  <JadwalAcara />
  <LoveStory />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Pengantin from '../pengantin/Pengantin.vue'
import JadwalAcara from './Jadwal_Acara.vue'
import LoveStory from '../story/LoveStory.vue'

// const showAnimation = ref(true)

// onMounted(() => {
//   const flowers = document.querySelectorAll('.flower')

//   flowers.forEach((flower) => {
//     const randomLeft = Math.random() * 100
//     const randomDuration = 5 + Math.random() * 5
//     const randomDelay = Math.random() * 5

//     flower.style.left = `${randomLeft}` + 'vw'
//     flower.style.animationDuration = randomDuration + 's'
//     flower.style.animationDelay = randomDelay + 's'
//   })
// })
</script>
