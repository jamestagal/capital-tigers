<script>
  import { is_crossorigin } from "svelte/internal";
</script>

<section class="section-full bg-gray-dark content-inner">
  <div class="wrapper">
    <div class="center-line">
      <a href="." class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-home"></i>
        <div class="details">
          <span class="title">Saturday - March 9</span>
          <span>Opening Round</span>
        </div>
        <div class="bottom">
          <picture class="cs-icon">
            <img
              loading="lazy"
              decoding="async"
              src="media/images/icons/rich.png"
              alt="test icon"
              width="72"
              height="72"
              aria-hidden="true"
            />
          </picture>
          <div class="match-scheduled"> <span class="match-scheduled__timezone"> <span class="match-scheduled__timezone--zone">(GMT+11)</span> </span> <time class="match-scheduled__time js-datetime" data-date="1709961600000"> 4:20<span class="match-scheduled__time-ampm">PM</span> </time> <div class="match-scheduled__location"> <span class="match-scheduled__venue" >Heritage Bank Stadium, </span> <span class="match-scheduled__state"> QLD</span>  </div> </div>
          <picture class="cs-icon">
            <img
              loading="lazy"
              decoding="async"
              src="media/images/icons/rich.png"
              alt="test icon"
              width="72"
              height="72"
              aria-hidden="true"
            />
          </picture>
        </div>
        <div class="bottom btm-link">
          <a href="https://www.richmondfc.com.au/matches/5897" target="_blank"
            >Read more</a
          >
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-star"></i>
        <div class="details">
          <span class="title">Round 1</span>
          <span>Thursday - March 14</span>
        </div>
        <p>
          Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui
          veroes praesentium maiores, sint eos vero sapiente voluptas debitis
          dicta dolore.
        </p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- Someone famous</i>
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-rocket"></i>
        <div class="details">
          <span class="title">Title of Section 3</span>
          <span>3rd Jan 2021</span>
        </div>
        <p>
          Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui
          veroes praesentium maiores, sint eos vero sapiente voluptas debitis
          dicta dolore.
        </p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- Someone famous</i>
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-globe"></i>
        <div class="details">
          <span class="title">Title of Section 4</span>
          <span>4th Jan 2021</span>
        </div>
        <p>
          Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui
          veroes praesentium maiores, sint eos vero sapiente voluptas debitis
          dicta dolore.
        </p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- Someone famous</i>
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
        <i class="icon fas fa-paper-plane"></i>
        <div class="details">
          <span class="title">Title of Section 5</span>
          <span>5th Jan 2021</span>
        </div>
        <p>
          Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui
          veroes praesentium maiores, sint eos vero sapiente voluptas debitis
          dicta dolore.
        </p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- Someone famous</i>
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <i class="icon fas fa-map-marker-alt"></i>
        <div class="details">
          <span class="title">Title of Section 6</span>
          <span>6th Jan 2021</span>
        </div>
        <p>
          Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui
          veroes praesentium maiores, sint eos vero sapiente voluptas debitis
          dicta dolore.
        </p>
        <div class="bottom">
          <a href="#">Read more</a>
          <i>- Someone famous</i>
        </div>
      </section>
    </div>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  ::selection {
    color: #fff;
    background: #ff7979;
  }
  .wrapper {
    max-width: 1080px;
    margin: 50px auto;
    padding: 0 20px;
    position: relative;
  }
  .wrapper .center-line {
    position: absolute;
    height: 100%;
    width: 4px;
    background: #fff;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
  }
  .wrapper .row {
    display: flex;
  }
  .wrapper .row-1 {
    justify-content: flex-start;
  }
  .wrapper .row-2 {
    justify-content: flex-end;
  }
  .wrapper .row section {
    background: #fff;
    border-radius: 5px;
    width: calc(50% - 40px);
    padding: 20px;
    position: relative;
  }
  .wrapper .row section::before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: #fff;
    top: 28px;
    z-index: 1;
    transform: rotate(45deg);
  }
  .row-1 section::before {
    right: -7px;
  }
  .row-2 section::before {
    left: -7px;
  }
  .row section .icon,
  .center-line .scroll-icon {
    position: absolute;
    background: #1d1d1d;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffc300;
    font-size: 17px;
    box-shadow:
      0 0 0 4px #fff,
      inset 0 2px 0 rgba(0, 0, 0, 0.08),
      0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
  .center-line .scroll-icon {
    bottom: 0px;
    left: 50%;
    font-size: 25px;
    transform: translateX(-50%);
  }
  .row-1 section .icon {
    top: 15px;
    right: -60px;
  }
  .row-2 section .icon {
    top: 15px;
    left: -60px;
  }
  .row section .details {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .row section .bottom {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .row section .details .title {
    font-size: 22px;
    font-weight: 600;
  }
  .row section p {
    margin: 10px 0 17px 0;
  }
  .row section .bottom a {
    text-decoration: none;
    background: #ffc300;
    color: #1d1d1d;
    padding: 7px 15px;
    border-radius: 5px;
    /* font-size: 17px; */
    font-weight: 400;
    transition: all 0.3s ease;
  }
  .row section .bottom a:hover {
    transform: scale(0.97);
  }
  @media (max-width: 790px) {
    .wrapper .center-line {
      left: 40px;
    }
    .wrapper .row {
      margin: 30px 0 3px 60px;
    }
    .wrapper .row section {
      width: 100%;
    }
    .row-1 section::before {
      left: -7px;
    }
    .row-1 section .icon {
      left: -60px;
    }
  }
  @media (max-width: 440px) {
    .wrapper .center-line,
    .row section::before,
    .row section .icon {
      display: none;
    }
    .wrapper .row {
      margin: 10px 0;
    }
  }
  .match-scheduled {
    flex: 0 1 12.4rem;
    margin: 0.8rem 0 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .match-scheduled__timezone {
    font-size: .8rem;
    line-height: .8rem;
    color: #595959;
}
.match-scheduled__location {
    display: flex;
    justify-content: center;
    align-items: center;
}
.match-scheduled__time {
    font-size: 2.1rem;
    line-height: 1.9rem;
    color: #1a1a1a;
    display: inline-flex;
    font-weight: 500;
    margin: 0;
    padding: 0.4rem 0 0.1rem;
    align-items: flex-start;
}
.match-scheduled__venue {
    line-height: 1.14;
    letter-spacing: -.03rem;
    color: #1a1a1a;
    display: inline-flex;
    font-weight: bold;
}
.match-scheduled__state {
    font-weight: 400;
    color: #595959;
    margin-left: 0.2rem;
}
.match-scheduled__time-ampm {
    color: #595959;
    font-weight: 300;
    text-transform: uppercase;
    margin-left: 0.4rem;
}
.bottom {
    margin: 10px 0 17px 0;
}
.btm-link {
    margin: 10px 0 0 0;
}
</style>
