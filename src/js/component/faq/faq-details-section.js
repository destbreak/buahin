class FAQSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `
        <header>
        <h1>FAQs</h1>
        <h1>Frequently Asked Questions</h1>
        <p>Have Questions? We're Here to Help</p>
        <div class="search">
          <label for="searchInput">
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32.5 16.25C32.5 19.8359 31.3359 23.1484 29.375 25.8359L39.2656 35.7344C40.2422 36.7109 40.2422 38.2969 39.2656 39.2734C38.2891 40.25 36.7031 40.25 35.7266 39.2734L25.8359 29.375C23.1484 31.3438 19.8359 32.5 16.25 32.5C7.27344 32.5 0 25.2266 0 16.25C0 7.27344 7.27344 0 16.25 0C25.2266 0 32.5 7.27344 32.5 16.25ZM16.25 27.5C22.4609 27.5 27.5 22.4609 27.5 16.25C27.5 10.0391 22.4609 5 16.25 5C10.0391 5 5 10.0391 5 16.25C5 22.4609 10.0391 27.5 16.25 27.5Z"
                fill="#929292" />
            </svg>
          </label>
          <input type="text" id="searchInput" placeholder="Type Here" />
        </div>
        </header>
        <div class="wrapper">
        <section class="accordion">
          <h2>What is Fruit Detection</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            harum perferendis? Distinctio quos, eum cumque cupiditate non
            similique quas aliquid dolore odit, nostrum consequuntur
            accusantium corporis, provident est deserunt dolor?
          </p>
        </section>
        <section class="accordion">
          <h2>What is Fruit Detection</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            harum perferendis? Distinctio quos, eum cumque cupiditate non
            similique quas aliquid dolore odit, nostrum consequuntur
            accusantium corporis, provident est deserunt dolor?
          </p>
        </section>
        <section class="accordion">
          <h2>What is Fruit Detection</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
          </svg>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            harum perferendis? Distinctio quos, eum cumque cupiditate non
            similique quas aliquid dolore odit, nostrum consequuntur
            accusantium corporis, provident est deserunt dolor?
          </p>
        </section>
        </div>
        `;
        this.setAttribute('class', 'faqs');
    }
}

customElements.define('faq-details-section', FAQSection);