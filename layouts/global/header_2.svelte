<script>
  export let user;
</script>

<!-- header -->
<header class="site-header header-style-7 dark mo-left">
  <!-- top bar -->
  <div class="top-bar">
    <div class="container">
      <div class="row justify-content-between">
        <div class="dez-topbar-left">
          <ul class="social-line text-center pull-right">
            <li>
              <a href="."
                ><i class="fa fa-phone"></i> <span>+149 75 23 222 35</span>
              </a>
            </li>
            <li>
              <a href="."
                ><i class="fa fa-clock-o"></i> <span>renovate@mail.com</span></a
              >
            </li>
            <li>
              <a href="."
                ><i class="fa fa-envelope-o"></i>
                <span>Mon - Fri: 08.00 - 17.00</span></a
              >
            </li>
          </ul>
        </div>
        <div class="dez-topbar-right">
          <ul class="social-line text-center pull-right">
            <li><a href="." on:click|preventDefault={$user.login()}>Login</a></li>
            <li><a href="." class="fa fa-facebook"></a></li>
            <li><a href="." class="fa fa-twitter"></a></li>
            <li><a href="." class="fa fa-linkedin"></a></li>
            <li><a href="." class="fa fa-google-plus"></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- top bar END-->

  <!-- main header -->
  <div class="sticky-header main-bar-wraper navbar-expand-lg">
    <div class="main-bar clearfix">
      <div class="container clearfix">
        <!-- website logo -->
        <div class="logo-header mostion">
          <a href="."
            ><img src="media/images/logo.png" width="193" height="89" alt="" /></a
          >
        </div>
        <!-- nav toggle button -->
        <button
          class="navbar-toggler collapsed navicon justify-content-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <!-- extra nav -->
        <div class="extra-nav">
          <div class="extra-cell">
            <button id="quik-search-btn" type="button" class="site-button"
              ><i class="fa fa-search"></i></button
            >
          </div>
        </div>
        <!-- Quik search -->
        <div class="dez-quik-search bg-primary">
          <form action="#">
            <input
              name="search"
              value=""
              type="text"
              class="form-control"
              placeholder="Type to search"
            />
            <span id="quik-search-remove"><i class="fa fa-remove"></i></span>
          </form>
        </div>
        <!-- main nav -->
        <div
          class="header-nav navbar-collapse collapse nav-dark justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class=" nav navbar-nav">
            <li class="active">
              <a href=".">Home<i class="fa fa-chevron-down"></i></a>
              <ul class="sub-menu">
                <li><a href="about">About</a></li>
                <li><a href="fixture/2024">2024 Fixture</a></li>
                <li><a href="shop">Shop</a></li>
                <li><a href="index-4.html">Home 4</a></li>
              </ul>
            </li>
            <li>
              <a href=".">Features<i class="fa fa-chevron-down"></i></a>
              <ul class="sub-menu">
                <li>
                  <a href="."
                    >Header Style Light<i class="fa fa-chevron-down"></i></a
                  >
                  <ul class="sub-menu">
                    <li><a href="header-style-1.html">Header 1</a></li>
                    <li><a href="header-style-2.html">Header 2</a></li>
                    <li><a href="header-style-3.html">Header 3</a></li>
                    <li><a href="header-style-4.html">Header 4</a></li>
                    <li><a href="header-style-5.html">Header 5</a></li>
                    <li><a href="header-style-6.html">Header 6</a></li>
                  </ul>
                </li>
                <li>
                  <a href="."
                    >Header Style Dark<i class="fa fa-chevron-down"></i></a
                  >
                  <ul class="sub-menu">
                    <li><a href="header-style-1-dark.html">Header 1</a></li>
                    <li><a href="header-style-2-dark.html">Header 2</a></li>
                    <li><a href="header-style-3-dark.html">Header 3</a></li>
                    <li><a href="header-style-4-dark.html">Header 4</a></li>
                    <li><a href="header-style-5-dark.html">Header 5</a></li>
                    <li><a href="header-style-6-dark.html">Header 6</a></li>
                  </ul>
                </li>
                <li>
                  <a href=".">Footer<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="footer-1.html">Footer 1 </a></li>
                    <li><a href="footer-2.html">Footer 2</a></li>
                    <li><a href="footer-3.html">Footer 3</a></li>
                    <li><a href="footer-4.html">Footer 4</a></li>
                    <li><a href="footer-5.html">Footer 5</a></li>
                    <li><a href="footer-6.html">Footer 6</a></li>
                    <li><a href="footer-7.html">Footer 7</a></li>
                    <li><a href="footer-8.html">Footer 8</a></li>
                    <li><a href="footer-9.html">Footer 9</a></li>
                    <li><a href="footer-10.html">Footer 10</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href=".">Pages<i class="fa fa-chevron-down"></i></a>
              <ul class="sub-menu">
                <li>
                  <a href=".">About us<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="about-1.html">About us 1</a></li>
                    <li><a href="about-2.html">About us 2</a></li>
                  </ul>
                </li>
                <li>
                  <a href=".">FAQ<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="faq-1.html">FAQ 1</a></li>
                    <li><a href="faq-2.html">FAQ 2</a></li>
                  </ul>
                </li>
                <li>
                  <a href=".">Services<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="services-1.html">Services 1</a></li>
                    <li><a href="services-2.html">Services 2</a></li>
                    <li><a href="services-3.html">Services 3</a></li>
                  </ul>
                </li>
                <li><a href="career.html">Career</a></li>
                <li><a href="who-we-are.html">Who we are</a></li>
                <li><a href="help.html">Help Desk</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li>
                  <a href=".">Portfolio<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="portfolio-1.html">Portfolio 1</a></li>
                    <li><a href="portfolio-2.html">Portfolio 2</a></li>
                    <li><a href="portfolio-3.html">Portfolio 3</a></li>
                    <li>
                      <a href="portfolio-details.html">portfolio-details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=".">Gallery<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li>
                      <a href="full-page-gallery-dark.html"
                        >Gallery Full Page Style 1</a
                      >
                    </li>
                    <li>
                      <a href="full-page-gallery-light.html"
                        >Gallery Full Page Style 2</a
                      >
                    </li>
                    <li><a href="gallery-grid-2.html">Galley Grid 2</a></li>
                    <li><a href="gallery-grid-3.html">Galley Grid 3</a></li>
                    <li><a href="gallery-grid-4.html">Galley Grid 4</a></li>
                  </ul>
                </li>
                <li>
                  <a href=".">Error<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="error-403.html">Error 403</a></li>
                    <li><a href="error-404.html">Error 404</a></li>
                    <li><a href="error-405.html">Error 405</a></li>
                  </ul>
                </li>
                <li>
                  <a href=".">Coming Soon<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="coming-soon-1.html">Coming Soon 1</a></li>
                    <li><a href="coming-soon-2.html">Coming Soon 2</a></li>
                  </ul>
                </li>
                <li>
                  <a href=".">Login Page<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu">
                    <li><a href="login-1.html">Login 1</a></li>
                    <li><a href="login-2.html">Login 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href=".">Shop<i class="fa fa-chevron-down"></i></a>
              <ul class="sub-menu">
                <li><a href="product.html">Product</a></li>
                <li><a href="product-details.html">Product details</a></li>
              </ul>
            </li>
            <li>
              <a href=".">Blog<i class="fa fa-chevron-down"></i></a>
              <ul class="sub-menu">
                <li>
                  <a href=".">Default<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu right">
                    <li><a href="blog-half-img.html">Half image</a></li>
                    <li>
                      <a href="blog-half-img-sidebar.html">Half image sidebar</a
                      >
                    </li>
                    <li>
                      <a href="blog-half-img-left-sidebar.html"
                        >Half image sidebar left</a
                      >
                    </li>
                    <li><a href="blog-large-img.html">Large image</a></li>
                    <li>
                      <a href="blog-large-img-sidebar.html"
                        >Large image sidebar</a
                      >
                    </li>
                    <li>
                      <a href="blog-large-img-left-sidebar.html"
                        >Large image sidebar left</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=".">Grid<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu right">
                    <li><a href="blog-grid-2.html">Grid 2</a></li>
                    <li>
                      <a href="blog-grid-2-sidebar.html">Grid 2 sidebar</a>
                    </li>
                    <li>
                      <a href="blog-grid-2-sidebar-left.html"
                        >Grid 2 sidebar left</a
                      >
                    </li>
                    <li><a href="blog-grid-3.html">Grid 3</a></li>
                    <li>
                      <a href="blog-grid-3-sidebar.html">Grid 3 sidebar</a>
                    </li>
                    <li>
                      <a href="blog-grid-3-sidebar-left.html"
                        >Grid 3 sidebar left</a
                      >
                    </li>
                    <li><a href="blog-grid-4.html">Grid 4</a></li>
                  </ul>
                </li>
                <li>
                  <a href=".">Single<i class="fa fa-chevron-down"></i></a>
                  <ul class="sub-menu right">
                    <li><a href="blog-single.html">Single</a></li>
                    <li>
                      <a href="blog-single-sidebar.html">Single sidebar</a>
                    </li>
                    <li>
                      <a href="blog-single-left-sidebar.html"
                        >Single sidebar right</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="."
                    >Full Page Blog<i class="fa fa-chevron-down"></i></a
                  >
                  <ul class="sub-menu right">
                    <li>
                      <a href="blog-full-grid-dark-style-1.html">Dark Style 1</a
                      >
                    </li>
                    <li>
                      <a href="blog-full-grid-dark-style-2.html">Dark Style 2</a
                      >
                    </li>
                    <li>
                      <a href="blog-full-grid-dark-style-3.html">Dark Style 3</a
                      >
                    </li>
                    <li>
                      <a href="blog-full-grid-light-style-1.html"
                        >Light Style 1</a
                      >
                    </li>
                    <li>
                      <a href="blog-full-grid-light-style-2.html"
                        >Light Style 2</a
                      >
                    </li>
                    <li>
                      <a href="blog-full-grid-light-style-3.html"
                        >Light Style 3</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="has-mega-menu">
              <a href=".">Shortcodes<i class="fa fa-chevron-down"></i></a>
              <ul class="mega-menu">
                <li>
                  <a href=".">Shortcodes</a>
                  <ul>
                    <li><a href="shortcode-buttons.html">Buttons</a></li>
                    <li>
                      <a href="shortcode-icon-box-styles.html"
                        >Icon box styles</a
                      >
                    </li>
                    <li>
                      <a href="shortcode-pricing-table.html">Pricing table</a>
                    </li>
                    <li><a href="shortcode-toggles.html">Toggles</a></li>
                    <li><a href="shortcode-team.html">Team</a></li>
                  </ul>
                </li>
                <li>
                  <a href=".">Shortcodes</a>
                  <ul>
                    <li>
                      <a href="shortcode-carousel-sliders.html"
                        >Carousel sliders</a
                      >
                    </li>
                    <li>
                      <a href="shortcode-image-box-content.html"
                        >Image box content</a
                      >
                    </li>
                    <li><a href="shortcode-tabs.html">Tabs</a></li>
                    <li><a href="shortcode-counters.html">Counters</a></li>
                    <li>
                      <a href="shortcode-light-box.html"
                        >Light Gallery <span class="new-page">New</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=".">Shortcodes</a>
                  <ul>
                    <li><a href="shortcode-accordians.html">Accordians</a></li>
                    <li><a href="shortcode-dividers.html">Dividers</a></li>
                    <li>
                      <a href="shortcode-images-effects.html">Images effects</a>
                    </li>
                    <li>
                      <a href="shortcode-testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="shortcode-magnific-popup.html"
                        >Magnific Gallery <span class="new-page">New</span></a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a href=".">Shortcodes</a>
                  <ul>
                    <li><a href="shortcode-alert-box.html">Alert box</a></li>
                    <li><a href="shortcode-icon-box.html">Icon-box</a></li>
                    <li><a href="shortcode-list-group.html">List group</a></li>
                    <li>
                      <a href="shortcode-title-separators.html"
                        >title-separators</a
                      >
                    </li>
                    <li><a href="shortcode-all-widgets.html">Widgets</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href=".">Contact us <i class="fa fa-chevron-down"></i></a>
              <ul class="sub-menu right">
                <li><a href="contact.html">Contact us 1</a></li>
                <li><a href="contact-2.html">Contact us 2</a></li>
                <li><a href="contact-3.html">Contact us 3</a></li>
                <li><a href="contact-4.html">Contact us 4</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- main header END -->
</header>
<!-- header END -->
