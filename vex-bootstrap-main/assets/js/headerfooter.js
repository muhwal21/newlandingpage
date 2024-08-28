// Header
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  <!-- ======= Top Bar ======= -->
  <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex justify-content-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope"></i> <a href="mailto:admin@dialogika.co">admin@dialogika.co</a>
        <i class="bi bi-phone"></i> +62 851 6299 2597
      </div>
      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="https://link.dialogika.co/twitter" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://link.dialogika.co/facebook" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://link.dialogika.co/instagram" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://link.dialogika.co/linkedin" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
      </div>
    </div>
  </div>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

       <a href="../index.html" class="logo me-auto"><img src="assets/img/logo.webp" alt="" class="img-fluid"></a>

       <nav id="navbar" class="navbar order-last order-lg-0">
        <ul class="navbar-desktop-list">
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li class="dropdown"><a href="#"><span>Program</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><span>Online</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="../program/basic-play.html">Basic Play <span class="badge rounded-pill text-bg-success">Best Buy</span></a></li>
                  <li><a href="../program/basic-plus.html">Basic Plus</a></li>
                  <li><a href="../program/basic-private.html">Basic Private</a></li>
                  <li><hr/></li>
                  <li><a href="../program/kids-play.html">Kids Play</a></li>
                  <li><a href="../program/kids-plus.html">Kids Plus<span class="badge rounded-pill text-bg-success">Best Buy</span></a></li>
                  <li><a href="../program/kids-private.html">Kids Private</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Offline</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="../program/first-class.html">First Class <span class="badge rounded-pill text-bg-success">Best Buy</span></a></li>
                  <li><a href="../program/first-kids.html">First Kids</a></li>
                  <li><hr/></li>
                  <li><a href="../program/first-private.html">First Private</a></li>
                </ul>
              </li>
              <li><hr/></li>
              <li class="dropdown"><a href="#"><span>Area</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="../program/index-jogja.html">Yogyakarta</a></li>
                  <li><a href="../program/index-tangsel.html">Bintaro</a></li>
                  <li><a href="../program/index-surabaya.html" onclick="return false;">
                    <span>Surabaya</span>
                    <span class="badge rounded-pill text-bg-secondary">Coming Soon</span></a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
            <li class="dropdown"><a href="#"><span>Corporate</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="../corporate/basic-public.html">Basic Public Speaking</a></li>
                  <li><a href="../corporate/high-impact.html">High Impact Presentation</a></li>
                  <li><hr/></li>
                  <li><a href="../corporate/daily-briefing.html">Daily Briefing</a></li>
                  <li><a href="../corporate/sales-pitch.html">Sales Pitch</a></li>
                  <li><a href="../corporate/handling-complain.html">Handling Complain</a></li>
                  <li><a href="../corporate/hospitality.html">Hospitality</a></li>
                  <li><a href="../corporate/host-live.html">Host Live</a></li>
                </ul>
            </li>
          <li class="dropdown"><a href="#"><span>Intern</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><a href="../intern/client-manager.html">
                    <span>Client Manager</span>
                    <span class="badge bg-success">Best</span></a>
                </li>
                <li><a href="../intern/video-editing.html">Video Editor</a></li>
                <li><hr/></li>
                <li><a href="../intern/deal-maker.html">
                    <span>Deal Maker</span>
                    <span class="badge bg-success">Best</span>
                </a></li>
                <li><a href="../intern/digital-marketing.html">Digital Marketing</a>
                <li><hr/></li>
                <li><a href="../intern/model-talent.html">
                    <span>Model Talent</span>
                    <span class="badge bg-success">Best</span>
                </a></li>
                <li><a href="../intern/content-writing.html">Content Writing</a></li>
                <li><a href="../intern/design-specialist.html">Design Specialist</a></li>
                <li><a href="../intern/html-writing.html">HTML Writing</a></li>
                
                </li>
                <li><hr/></li>
                <li><a href="../intern/people-development.html">People Development</a></li>
                <li><a href="../intern/recruiter-specialist.html">
                    <span>Recruiter Specialist</span>
                    <span class="badge bg-success">Best</span>
                </a></li>
              </ul>
          </li>
          <li><a class="nav-link scrollto" href="../event/">Event</a></li>
          <li><a class="nav-link scrollto" href="../service/">Services</a></li>
          <li><a class="nav-link scrollto" href="../shop/">Shop</a></li>
          <li><a class="nav-link scrollto" href="../blog/">Blog</a></li>
        </ul>
        <i class="bi bi-list d-block d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"></i>
       </nav><!-- .navbar -->

      <a href="../promo/" class="appointment-btn">Promo <span class="d-none d-md-inline">Class</span></a>

    </div>
  </header><!-- End Header -->

  <!-- ======= Mobile Nav ======= -->
  <nav class="navbar-canvas fixed-top">
    <div class="container-fluid">
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <a href="../index.html">
            <img src="assets/img/logo.webp" class="offcanvas-title" id="offcanvasNavbarLabel"/>
          </a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body">
          <a href="#hero"><div class="card"><div class="card-body">Home</div></div></a>
          <div class="card">
            <a href="#program-collapse" data-bs-toggle="collapse">
              <div class="card-body d-flex justify-content-between">
                <span>Program</span>
                <i class='bx bxs-chevron-down bx-tada'></i>
              </div>
            </a>
            <div class="collapse" id="program-collapse">
              <a href="#program-online" data-bs-toggle="collapse">
                <div class="card">
                  <div class="card-body d-flex justify-content-between">
                    <span>Online</span>
                    <i class='bx bxs-chevron-down bx-tada'></i>
                  </div>
                    <div class="collapse" id="program-online">
                      <a href="../program/basic-play.html"><div class="card card-body">Basic Play</div></a>
                      <a href="../program/basic-plus.html">
                        <div class="card card-body">
                            <div class="justify-content-between d-flex">
                                <span>Basic Plus</span>
                                <span class="badge bg-warning rounded-pill text-dark">Best Buy</span>
                            </div>
                        </div>
                      </a>
                      <a href="../program/basic-private.html"><div class="card card-body">Basic Private</div></a>
                      <hr/>
                      <a href="../program/kids-play.html"><div class="card card-body">Kids Play</div></a>
                      <a href="../program/kids-plus.html"><div class="card card-body">
                        <div class="justify-content-between d-flex">
                          <span>Kids Plus </span>
                          <span class="badge bg-info rounded-pill">New</span>
                        </div>
                      </div></a>
                      <a href="../program/kids-plus.html"><div class="card card-body">Kids Private</div></a>
                    </div>
                </div>
              </a>
              <a href="#program-offline" data-bs-toggle="collapse">
                <div class="card">
                  <div class="card-body d-flex justify-content-between">
                    <span>Offline</span>
                    <i class='bx bxs-chevron-down bx-tada'></i>
                  </div>
                    <div class="collapse" id="program-offline">
                      <a href="../program/first-class.html">
                        <div class="card card-body">
                            <div class="justify-content-between d-flex">
                                <span>First Class</span>
                                <span class="badge bg-warning rounded-pill text-dark">Best Buy</span>
                            </div>
                        </div>
                      </a>
                      <a href="../program/first-kids.html"><div class="card card-body">
                        <div class="justify-content-between d-flex">
                          <span>First Kids </span>
                          <span class="badge bg-info rounded-pill">New</span>
                        </div>
                      </div></a>
                      <hr/>
                      <a href="../program/first-private.html"><div class="card card-body">First Private</div></a>
                    </div>
                </div>
              </a>
            </div>
          </div>
            <div class="card">
              <a href="#training-collapse" data-bs-toggle="collapse">
                <div class="card-body d-flex justify-content-between">
                  <span>Corporate</span><i class='bx bxs-chevron-down bx-tada'></i>
                </div>
              </a>
              <div class="collapse" id="training-collapse">
                <a href="../corporate/basic-public.html"><div class="card card-body">Basic Public Speaking</div></a>
                <a href="../corporate/high-impact.html"><div class="card card-body">High Impact Presentation</div></a>
                <hr/>
                <a href="../corporate/daily-briefing.html"><div class="card card-body">Daily Briefing</div></a>
                <a href="../corporate/sales-pitch.html"><div class="card card-body">Sales Pitch</div></a>
                <a href="../corporate/handling-complain.html"><div class="card card-body">Handling Complain</div></a>
                <a href="../corporate/hospitality.html"><div class="card card-body">Hospitality</div></a>
                <a href="../corporate/host-live.html"><div class="card card-body">Host Live</div></a>
              </div>
            </div>
                <div class="card">
                  <a href="#position-collapse" data-bs-toggle="collapse">
                    <div class="card-body d-flex justify-content-between">
                      <span>Intern</span><i class='bx bxs-chevron-down bx-tada'></i>
                    </div>
                  </a>
                  <div class="collapse" id="position-collapse">
                    <a href="../intern/client-manager.html"><div class="card card-body">
                      <div class="d-flex justify-content-between">
                          <span>Client Manager</span>
                          <span class="badge bg-warning rounded-pill">Best</span>
                      </div>
                    </div></a>
                    <a href="../intern/video-editing.html"><div class="card card-body">Video Editor</div></a>
                    <hr/>
                    <a href="../intern/deal-maker.html"><div class="card card-body">
                      <div class="d-flex justify-content-between">
                          <span>Deal Maker</span>
                          <span class="badge bg-warning rounded-pill">Best</span>
                      </div>
                    </div></a>
                    <a href="../intern/digital-marketing.html"><div class="card card-body">Digital Marketing</div></a>
                    <hr/>
                    <a href="../intern/model-talent.html"><div class="card card-body">
                      <div class="d-flex justify-content-between">
                          <span>Model Talent</span>
                          <span class="badge bg-warning rounded-pill">Best</span>
                      </div>
                    </div></a>
                    <a href="../intern/content-writing.html"><div class="card card-body">Content Writing</div></a>
                    <a href="../intern/design-specialist.html"><div class="card card-body">Design Specialist</div></a>
                    <a href="../intern/html-writing.html"><div class="card card-body">HTML Writing</div></a>
                    <hr/>
                    <a href="../intern/people-development.html"><div class="card card-body">People Development</div></a>
                    <a href="../intern/recruiter-specialist.html"><div class="card card-body">
                        <span>Recruiter Specialist</span>
                    </div></a>

                  </div>
                </div>
          <a href="../event/"><div class="card card-body">
            <div class="justify-content-between d-flex">
              <span>Event </span>
              <!-- <span class="badge bg-info rounded-pill">New</span> -->
            </div>
          </div></a>
          <a href="../service/" onclick="return false;"><div class="card card-body">
            <div class="justify-content-between d-flex">
              <span>Service </span>
              <span class="badge bg-warning rounded-pill">Coming Soon</span>
            </div>
          </div></a>
          <a href="../shop/" onclick="return false;"><div class="card card-body">
            <div class="justify-content-between d-flex">
              <span>Shop </span>
              <span class="badge bg-warning rounded-pill">Coming Soon</span>
            </div>
          </div></a>
          <a href="../blog/"><div class="card card-body">Blog</div></a>
        </div>
      </div>
    </div>
  </nav><!-- End Mobile Nav -->

    `;
  }
}

//Footer
class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
  
  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row justify-content-between">

          <div class="col-lg-3 col-md-6 footer-contact">
            <h3><img src="assets/img/white-logo.webp" class="footer-logo" alt="Kelas Public Speaking Jogja" /></h3>
            <p>
              Wadah pengembangan diri membangun aura positif sekaligus meningkatkan kualitas skill, karir hingga level
              kehidupan Anda.
            </p><br>
            <p>Kami memberikan pelatihan Kelas Public Speaking karena dengan menguasai Public Speaking, mental,
              perilaku, penampilan hingga sikap Anda terbentuk.</p><br>
            <h4 class="d-flex justify-content-between">Contact Us<i class='bx bx-chevron-down d-md-none'></i></h4>
            <div class="social-link d-flex mt-3">
              <a href="https://link.dialogika.co/wasap-2597-dialogika-co"
                class="text-light d-flex align-items-center justify-content-center"><i class="bx bxl-whatsapp"></i></a>
              <a href="mailto:hello@dialogika.co" class="d-flex align-items-center justify-content-center"><i
                  class="bi bi-envelope-at-fill"></i></a>
            </div>
            <hr />
            <p>Punya pertanyaan mengenai Dialogika?</p>
            <br>
            <p>
              <strong>Phone:</strong> +62 851-6299-2597<br>
              <strong>Email:</strong> hello@dialogika.co<br>
            </p>
            <br><br>
            <h4 class="d-flex justify-content-between">Follow Us<i class='bx bx-chevron-down d-md-none'></i></h4>
            <div class="social-link d-flex mt-3">
              <a href="https://link.dialogika.co/twitter" class="d-flex align-items-center justify-content-center"><i
                  class="bi bi-twitter"></i></a>
              <a href="https://link.dialogika.co/facebook" class="d-flex align-items-center justify-content-center"><i
                  class="bi bi-facebook"></i></a>
              <a href="https://link.dialogika.co/instagram" class="d-flex align-items-center justify-content-center"><i
                  class="bi bi-instagram"></i></a>
              <a href="https://link.dialogika.co/linkedin" class="d-flex align-items-center justify-content-center"><i
                  class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links accordion">

            <div class="">
              <a href="#footer-best-program" class="d-flex justify-content-between " data-bs-toggle="collapse" id="footer-accordion">
                <h4>Online Program</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-best-program" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/basic-plus.html">
                    Basic Plus
                    <span class="badge rounded-pill text-bg-info">Best Selling</span>
                  </a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/kids-plus.html">Kids Plus</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/basic-private.html">Basic Private</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/kids-private.html">Kids Private</a>
                </li>
              </ul>
            </div><br>

            <div class="">
              <a href="#footer-corporate-program" class="d-flex justify-content-between" data-bs-toggle="collapse" id="footer-accordion">
                <h4>Offline Program</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-corporate-program">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/index-jogja.html">
                    Yogyakarta
                    <span class="badge rounded-pill text-bg-info">Best Selling</span>
                  </a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../corporate/index.html">Corporate</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/index-tangsel.html">
                    Bintaro
                    <span class="badge rounded-pill text-bg-warning">Private Only</span>
                  </a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/first-class.html">Surabaya <span class="badge rounded-pill text-bg-warning">Coming Soon</span></a>
                </li>
              </ul>
            </div><br>

            <div class="">
              <a href="#footer-private-program" class="d-flex justify-content-between" data-bs-toggle="collapse" id="footer-accordion">
                <h4>Kids Program</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-private-program" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/kids-plus.html">Online Class</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../program/first-kids.html">Offline Class</a>
                </li>
              </ul>
            </div><br>


            <div class="">
              <a href="#footer-career-info" class="d-flex justify-content-between" data-bs-toggle="collapse" id="footer-accordion">
                <h4>Recruitment</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-career-info" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../mentor/registration.html">Mentor</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../intern/index.html">Internship</a>
                </li>
              </ul>
              <br>
            </div>

            <div class="">
              <a href="#footer-useful-link" class="d-flex justify-content-between" data-bs-toggle="collapse" id="footer-accordion">
                <h4>Useful Link</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-useful-link" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../blog/index.html">Blog Dialogika</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../mentor/index.html">Mentor Dialogika</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <div class="">
              <a href="#footer-about-dialogika" class="d-flex justify-content-between" data-bs-toggle="collapse"
                id="footer-accordion">
                <h4>About Dialogika</h4><i class='bx bx-chevron-down d-md-none'></i>
              </a>
              <ul class="accordion-collapse collapse show" id="footer-about-dialogika" data-bs-parent=".footer-links">
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/">About Us</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/faq.html">Frequent Asked Question</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/help.html">Help Center</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/privacy.html">Privacy Policy</a>
                </li>
                <li><i class="bx bx-chevron-right"></i>
                  <a href="../about/terms.html">Terms & Agreements</a>
                </li>
              </ul><br/>
            </div>
            <div class="">
              <div class="footer-recent-post align-items-center">
                <h4>Instagram Post <i class='bx bx-chevron-down d-md-none'></i></h4>
                <ul>
                  <li class="clearfix">
                    <img src="assets/img/ig/1.jpg" alt="" class="rounded ig-post float-left" style="margin-right: 10px;width: 70px;height: 70px; border-radius: 10px;">
                    <div class="post float-left">
                      <a target="__blank" href="https://www.instagram.com/p/Claa6CPISTB/">Gambaran kelas praktek public speaking secara offline</a>
                      <div class="date"><i class="bx bx-calendar" aria-hidden="true"></i> Nov 26, 2022</div>
                    </div>
                  </li>
                  <hr/>
                  <li class="clearfix">
                    <img src="assets/img/ig/2.jpg" alt="" class="rounded ig-post float-left" style="margin-right: 10px;width: 70px;height: 70px; border-radius: 10px;">
                    <div class="post float-left">
                      <a target="__blank" href="https://www.instagram.com/p/CyXfjtkrJe7/">Tips-tips agar di notice dosen didalam kelas dan latihan membangun persona.</a>
                      <div class="date"><i class="bx bx-calendar" aria-hidden="true"></i> Oct 14, 2023</div>
                    </div>
                  </li>
                  <hr/>
                  <li class="clearfix">
                    <img src="assets/img/ig/3.jpg" alt="" class="rounded ig-post float-left" style="margin-right: 10px;width: 70px;height: 70px; border-radius: 10px;">
                    <div class="post float-left">
                      <a target="__blank" href="https://www.instagram.com/p/CzAf73qr2mj/">5 tips jitu atasi otak yang ngeblank saat berbicara di depan umum</a>
                      <div class="date"><i class="bx bx-calendar" aria-hidden="true"></i> Oct 30, 2023</div>
                    </div>
                  </li>
                  <hr/>
                  <li class="clearfix">
                    <img src="assets/img/ig/4.jpg" alt="" class="rounded ig-post float-left" style="margin-right: 10px;width: 70px;height: 70px; border-radius: 10px;">
                    <div class="post float-left">
                      <a target="__blank" href="blog-details.html">5 trik untuk para newbie agar viral di depan umum. (Cocok untuk konten creator)</a>
                      <div class="date"><i class="bx bx-calendar" aria-hidden="true"></i> Nov 2, 2023</div>
                    </div>
                  </li>
                </ul>
              </div> <!-- /.footer-recent-post -->
            </div>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4 class="d-flex justify-content-between">Join Whatsapp Group Community<i
                class='bx bx-chevron-down d-md-none'></i></h4>
            <p>Secara Berkala Kami Akan Bagi-Bagi Tips & Trik Gratis, Dan Info Promo Lainnya</p>
            <form action="javascript:void" role="form" id="subcriptions" method="post">
              <input type="tel" name="Surel" placeholder="Nomor Whatsapp"><input type="submit" value="Connect Now" onclick="Subcription()">
            </form>
            <br><br>
            <h4 class="d-flex justify-content-between">Payment Method<i class='bx bx-chevron-down d-md-none'></i></h4>
            <p><i class="bx bx-chevron-down"></i> Bank Transfer</p>
            <img src="assets/img/bank.webp" />
            <br><br>
            <p><i class="bx bx-chevron-down"></i> E-Wallet</p>
            <img src="assets/img/wallet.webp" />

            <ul class="list-group border-warning" style="background: transparent;">
              <li class="list-group-item">
                <b>Telah Terdaftar Oleh</b><br>
                <img src="assets/img/ham.webp" class="" /><br>
                <strong>Nomor:</strong> AHU-0118640.AH.01.11.TAHUN 2022<br>
                <strong>Registrasi: </strong>4022062334106037<br />
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>Dialogika</span></strong> | PT. Dialogika Persona Indonesia
        </div>

      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://link.dialogika.co/twitter" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://link.dialogika.co/facebook" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="https://link.dialogika.co/instagram" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://link.dialogika.co/wasap-2597-dialogika-co" class="google-plus"><i
            class="bx bxl-whatsapp"></i></a>
        <a href="https://link.dialogika.co/linkedin" class="linkedin"><i class="bx bxl-linkedin"></i></i></a>
      </div>
    </div>
  </footer><!-- End Footer -->

    `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
