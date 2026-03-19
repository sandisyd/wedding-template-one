<template>
  <div class="love-story">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <p class="title-story">our journey</p>
          <h1 class="title-love">love story</h1>
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
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ul class="timeline">
            <li
              v-for="(i, index) in timelineData"
              :key="index"
              :class="index % 2 === 0 ? 'timeline-left' : 'timeline-right'"
            >
              <div class="timeline-image"></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <span>{{ i.years }}</span>
                  <h3>{{ i.title }}</h3>
                </div>
                <div class="timeline-body">
                  <p>
                    {{ i.description }}
                  </p>
                </div>
              </div>
            </li>
            <!-- <li class="timeline-inverted">
              <div
                class="timeline-image"
                style="background-image: url('https://picsum.photos/200/301/')"
              ></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <span>Pertama Bertemu</span>
                  <span>30 Juni 2020</span>
                </div>
                <div class="timeline-body">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, nam blanditiis
                    magnam ad reiciendis et?
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div
                class="timeline-image"
                style="background-image: url('https://picsum.photos/200/302/')"
              ></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3>Pertama Bertemu</h3>
                  <span>30 Juni 2020</span>
                </div>
                <div class="timeline-body">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, nam blanditiis
                    magnam ad reiciendis et?
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div
                class="timeline-image"
                style="background-image: url('https://picsum.photos/200/303/')"
              ></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h3>Pertama Bertemu</h3>
                  <span>30 Juni 2020</span>
                </div>
                <div class="timeline-body">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, nam blanditiis
                    magnam ad reiciendis et?
                  </p>
                </div>
              </div>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const timelineData = [
  {
    years: '2017',
    title: 'Pertama Bertemu',
    description:
      'Kami pertama kali bertemu di acara reuni kampus. Saat itu, ada sesuatu yang berbeda ketika mata kami saling bertemu.',
  },
  {
    years: '2019',
    title: 'Mulai Dekat',
    description:
      'Setelah sering berkomunikasi, kami mulai menyadari bahwa ada perasaan yang lebih dari sekedar pertemanan biasa.',
  },
  {
    years: '2023',
    title: 'Resmi Berpacaran',
    description:
      'Di hari yang indah itu, akhirnya kami memutuskan untuk memulai hubungan yang lebih serius bersama-sama.',
  },
  {
    years: '2024',
    title: 'Lamaran',
    description:
      'Dengan doa dan restu keluarga, akhirnya pinangan diterima. Kami siap untuk melangkah ke jenjang yang lebih serius.',
  },
  {
    years: '2026',
    title: 'Menikah',
    description:
      'InsyaAllah, kami akan menyatukan cinta dalam ikatan suci pernikahan yang diberkahi Allah SWT.',
  },
]
</script>
