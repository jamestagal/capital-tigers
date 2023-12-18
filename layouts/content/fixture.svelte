<script>
  export let cards;

 function formatDate(date){
  const Date = new Date();
  const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${Months[date.getMonth]}, ${Date[date.getDate()]}`;
 }
</script>

<section class="section-full bg-gray-dark content-inner">
  <div class="wrapper">
    <div class="center-line">
      <a href="." class="scroll-icon"><i class="fas fa-caret-up"></i></a>
    </div>
    {#each cards as card, i}
      <div class="row row-{i%2==0 ? 1 : 2}">
        <section>
          <i class="icon">{i}</i>
          {#if i%2==0}
          <div class="details">
            <span class="title">{card.day}</span>{card.date}
            <span class="match-list__group-round">{card.title}</span>
          </div>
          {:else}
          <div class="details">
            <span class="match-list__group-round">{card.title}</span>{card.date}
            <span class="title">{card.day}</span>
          </div>
          {/if}
          <div class="bottom">
            <picture class="cs-icon">
              <img
                loading="lazy"
                decoding="async"
                src="{card.team1Logo.url}"
                alt="{card.team1Logo.alt}"
                width="115"
                height="115"
                aria-hidden="true"
              />
            </picture>
            <div class="match-scheduled"> <span class="match-scheduled__timezone"> <span class="match-scheduled__timezone--zone">{card.timeZone}</span> </span> <time class="match-scheduled__time js-datetime" data-date="1709961600000"> {card.time}<span class="match-scheduled__time-ampm">{card.am_pm}</span> </time> <div class="match-scheduled__location"> <span class="match-scheduled__venue" >{card.venue} </span> <span class="match-scheduled__state"> {card.state}</span>  </div> </div>
            <picture class="cs-icon">
              <img
                loading="lazy"
                decoding="async"
                src="{card.team2Logo.url}"
                alt="{card.team2Logo.alt}"
                width="115"
                height="115"
                aria-hidden="true"
              />
            </picture>
          </div>
          <div class="bottom btm-link">
            <a href="{card.link.url}" target="_blank"
              >{card.link.title}</a
            >
          </div>
        </section>
      </div>
    {/each}
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  ::selection {
    color: #fff;
    background: #ff7979;
  }
  i {
    font-style: normal;
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
.match-list__group-round {
    height: 1.6rem;
    border-radius: 1.2rem;
    border: 1px solid rgba(26,26,26,.1);
    background-color: #f8f8f8;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    color: #000;
    padding: 0 1.2rem;
    text-transform: uppercase;
}
.match-list__group-date--day {
    font-weight: 700;
}
.bottom {
    margin: 10px 0 17px 0;
}
.btm-link {
    margin: 10px 0 0 0;
}
</style>

