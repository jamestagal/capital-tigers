<!-- Slider -->
<section id="hero-81">
    <div class="cs-container">
        <h1 class="cs-title">Capital Tigers</h1>
        <p class="cs-text">
          Canberra's Official Richmond Supporters Group
        </p>
        <!-- <a href="." class="cs-button-solid">Request Appointment</a> -->
    </div>
      <!-- Background Image -->
      <picture class="cs-background">
        <source
          media="(max-width: 600px)"
          srcset="media/images/hero/heroBanner01.webp"
        />
        <source
          media="(min-width: 601px)"
          srcset="media/images/hero/heroBanner01.webp"
        />
        <img
          loading="lazy"
          decoding="async"
          src="media/images/hero/heroBanner01.webp"
          alt="media/images/hero/heroBanner01.webp"
          width="1920"
          height="880"
          aria-hidden="true"
        />
      </picture>
</section>

<!-- Slider END -->

<style>
/*-- -------------------------- -->
<---           Hero             -->
<--- -------------------------- -*/
/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
  #hero-81 {
    /* Centers button */
    text-align: center;
    /* 144px - 300px - leaving extra space for the navigation */
    padding: clamp(9rem, 25.95vw, 18.75rem) 1rem 0;
    /* 130px - 450px */
    padding-bottom: clamp(12.125rem, 30.95vw, 28.125rem);
    position: relative;
    z-index: 1;
    /* Prevents white rectangle pseudos from overlapping the sections below */
    overflow: hidden;
  }

  /* #hero-81:before {
    /* Left side of the triangle 
    content: "";
    width: 31.25rem;
    /* make really long so it covers the whole screen all the way to desktop 
    height: 250rem;
    background: #fff;
    opacity: 1;
    transform: rotate(-67deg);
    transform-origin: center;
    position: absolute;
    display: block;
    bottom: -139.6875rem;
    /* this makes the right edge sit at the 50% line at all times *
    right: 50%;
    z-index: 0;
  }
  #hero-81:after {
    /* Right side of the triangle *
    content: "";
    width: 31.25rem;
    height: 250rem;
    background: #fff;
    opacity: 1;
    transform: rotate(67deg);
    transform-origin: center;
    position: absolute;
    display: block;
    bottom: -139.6875rem;
    /* this makes the left edge sit at the 50% line at all times 
    left: 50%;
    z-index: 0;
  } */
  #hero-81 .cs-background {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
  }
  #hero-81 .cs-background:before {
    /* Overlay */
    content: "";
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: 1;
    /* prevents the cursor from interacting with it */
    pointer-events: none;
  }
  #hero-81 .cs-background img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  #hero-81 .cs-container {
    width: 100%;
    max-width: 67.5rem;
    margin: auto;
    margin-top: -250px;
  }
  #hero-81 .cs-title {
    /* 39px - 61px */
    font-size: clamp(2.4375rem, 6.4vw, 3.8125rem);
    font-weight: 700;
    line-height: 1.2em;
    text-align: center;
    max-width: 51.8125rem;
    /* 16px - 24px */
    margin: 0 auto clamp(1rem, 4vw, 1.5rem);
    color: #fff;
    position: relative;
  }
  #hero-81 .cs-title:after {
    /* Divider Line */
    content: "";
    /* 60px - 100px */
    width: clamp(3.75rem, 9.5vw, 6.25rem);
    /* 4px - 8px */
    height: clamp(0.25rem, 0.8vw, 0.5rem);
    /* 16px - 24px */
    margin: clamp(1rem, 4vw, 1.5rem) auto clamp(1rem, 4vw, 1.5rem);
    background: var(--primary);
    opacity: 1;
    position: relative;
    display: block;
  }
  #hero-81 .cs-text {
    /* 16px - 25px */
    font-size: clamp(1rem, 1.95vw, 1.5625rem);
    line-height: 1.5em;
    text-align: center;
    width: 100%;
    /* 464px - 800px */
    max-width: clamp(29rem, 60vw, 50rem);
    margin: 0 auto;
    /* 40px - 48px */
    margin-bottom: clamp(2.5rem, 4vw, 3rem);
    color: #fff;
  }
}
/* Desktop - 1300px (To make image background parallax) 
@media only screen and (min-width: 81.25rem) {
  #hero-81 {
    background: url('media/images/hero/heroBanner01.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* makes the parallax effect 
    background-attachment: fixed;
  }
  #hero-81 .cs-background img {
    display: none;
  }
}
*/
</style>
