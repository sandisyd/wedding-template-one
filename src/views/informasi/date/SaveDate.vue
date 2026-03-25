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
          <div class="row" style="justify-content: center; align-items: baseline">
            <div class="col-2" style="width: 7%; padding: 0">
              <div class="box-hari"><p>120</p></div>
              <div class="sub-hari">Hari</div>
            </div>
            <div class="col-1" style="width: 3%">
              <span style="font-size: 2rem; font-weight: 600">:</span>
            </div>
            <div class="col-2" style="width: 7%; padding: 0">
              <div class="box-jam"><p>10</p></div>
              <div class="sub-jam">Jam</div>
            </div>
            <div class="col-1" style="width: 3%">
              <span style="font-size: 2rem; font-weight: 600">:</span>
            </div>
            <div class="col-2" style="width: 7%; padding: 0">
              <div class="box-menit"><p>20</p></div>
              <div class="sub-menit">Menit</div>
            </div>
            <div class="col-1" style="width: 3%">
              <span style="font-size: 2rem; font-weight: 600">:</span>
            </div>
            <div class="col-2" style="width: 7%; padding: 0">
              <div class="box-detik"><p>10</p></div>
              <div class="sub-detik">Detik</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
