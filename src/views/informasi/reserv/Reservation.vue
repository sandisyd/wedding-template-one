<template>
  <div class="reservation">
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col">
          <p class="title-reserv">Konfirmasi Kehadiran</p>
          <h1 class="confirm-title">Reservation</h1>
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
          <div class="row" style="justify-content: center">
            <p style="width: 470px">
              Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk
              memberikan doa restu kepada kedua mempelai.
            </p>
          </div>
          <div class="row" style="justify-content: center">
            <form action="#" style="width: 585px; text-align: start">
              <div class="mb-4">
                <label for="name" class="form-label">Nama</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Masukkan Nama Anda"
                  style="border: 1px solid #a3b18a; padding-top: 12px; padding-bottom: 12px"
                />
              </div>
              <div class="mb-4">
                <label for="konfirm" class="form-label">Konfirmasi Kehadiran</label>
                <div class="row">
                  <div class="col">
                    <div class="option-hadir">
                      <a href="#">Hadir</a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="option-tidak">
                      <a href="#">Tidak Hadir</a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="option-ragu">
                      <a href="#">Masih Ragu</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label for="tamu" class="form-label">Jumlah Tamu</label>
                <input
                  type="text"
                  class="form-control text-center"
                  id="tamu"
                  placeholder="0"
                  value="0"
                  style="
                    border: 1px solid #a3b18a;
                    padding-top: 12px;
                    padding-bottom: 12px;
                    width: 50px;
                  "
                />
              </div>
              <div class="mb-4">
                <label for="ucapan" class="form-label">Ucapan & Doa</label>
                <textarea
                  class="form-control"
                  id="ucapan"
                  rows="3"
                  placeholder="Tulis ucapan dan doa untuk mempelai"
                  style="border: 1px solid #a3b18a; padding: 12px"
                ></textarea>
              </div>
              <button type="submit" class="btn" style="background-color: #a3b18a; color: white">
                Kirim Konfirmasi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
