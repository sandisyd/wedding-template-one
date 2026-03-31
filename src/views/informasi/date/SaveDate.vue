<template>
  <div class="save-date">
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col">
          <p class="title-counting">counting down</p>
          <h1 class="title-date">save the date</h1>
          <div class="row pt-5 pb-5" style="justify-content: center; align-items: center">
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
                <path
                  d="M0 6 L60 6"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div class="row" style="padding-bottom: 35px">
            <div class="col">
              <span class="sub-date">Minggu, 25 Agustus 2026</span>
            </div>
          </div>
          <div class="countdown" style="justify-content: center; align-items: baseline">
            <div class="item-col">
              <div class="box-daily">{{ days }}</div>
              <div class="sub-daily">Hari</div>
            </div>
            <div class="separator-col">
              <span style="font-size: 2rem; font-weight: 600">:</span>
            </div>
            <div class="item-col">
              <div class="box-daily">{{ hours }}</div>
              <div class="sub-daily">Jam</div>
            </div>
            <div class="separator-col">
              <span style="font-size: 2rem; font-weight: 600">:</span>
            </div>
            <div class="item-col">
              <div class="box-daily">
                {{ minutes }}
              </div>
              <div class="sub-daily">Menit</div>
            </div>
            <div class="separator-col">
              <span style="font-size: 2rem; font-weight: 600">:</span>
            </div>
            <div class="item-col">
              <div class="box-daily">
                {{ seconds }}
              </div>
              <div class="sub-daily">Detik</div>
            </div>
          </div>
          <div class="btn-save mt-5">
            <button class="btn" style="background-color: #a3b18a; color: white">
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

onMounted(() => {
  const targetDate = new Date('2026-08-25T00:00:00').getTime()

  setInterval(() => {
    const now = new Date().getTime()

    const distance = targetDate - now
    const format = (n) => String(n).padStart(2, '0')

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours.value = format(Math.floor((distance / (1000 * 60 * 60)) % 24))
    minutes.value = format(Math.floor((distance / (1000 * 60)) % 60))
    seconds.value = format(Math.floor((distance / 1000) % 60))
  }, 1000)
})
</script>
