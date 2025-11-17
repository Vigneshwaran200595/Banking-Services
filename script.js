// BIND MENU CLICKS AGAIN AFTER TAB SWITCH
function bindSideMenuClicks() {
  document.querySelectorAll(".v2-menu-item").forEach(item => {
    item.addEventListener("click", function () {

      // Remove active
      document.querySelectorAll(".v2-menu-item").forEach(i => i.classList.remove("active"));
      this.classList.add("active");

      let contentName = this.getAttribute("data-content");
      loadContent(contentName);
    });
  });
}

// TAB SWITCHING
document.querySelectorAll(".v2-tab").forEach(tab => {
  tab.addEventListener("click", function () {

    document.querySelectorAll(".v2-tab").forEach(t => t.classList.remove("active"));
    this.classList.add("active");

    let type = this.getAttribute("data-tab");

    if (type === "business") {
      document.querySelector(".businessMenu").style.display = "block";
      document.querySelector(".individualMenu").style.display = "none";
    } else {
      document.querySelector(".businessMenu").style.display = "none";
      document.querySelector(".individualMenu").style.display = "block";
    }

    bindSideMenuClicks();
  });
});

// CONTENT DATA
function loadContent(type) {

  const contents = {
    savings: {
      title: "Invest in Your Future, Start Saving.",
      subtitle: "Savings Accounts",
      desc: "Open a business savings account with flexible deposit options, higher interest rates, and seamless fund accessibility.",
      stat1: "3.2k",
      stat1Label: "Active Accounts",
      stat2: "$2b",
      stat2Label: "Total Savings"
    },
    loans: {
      title: "Grow Your Business with Quick Loans",
      subtitle: "Business Loans",
      desc: "Get fast business loans at competitive rates with flexible repayment options.",
      stat1: "1.1k",
      stat1Label: "Approved Loans",
      stat2: "$900m",
      stat2Label: "Loans Distributed"
    },
    creditcards: {
      title: "Smart Business Credit Cards",
      subtitle: "Corporate Cards",
      desc: "No-fee credit cards with cashback, travel rewards, and simplified expense tracking.",
      stat1: "5k",
      stat1Label: "Active Cards",
      stat2: "$50m",
      stat2Label: "Monthly Spend"
    },
    advisory: {
      title: "Expert Advisory for Smart Decisions",
      subtitle: "Advisory Services",
      desc: "Professional financial advisory on taxation, compliance, and investments.",
      stat1: "750+",
      stat1Label: "Businesses Guided",
      stat2: "$400m",
      stat2Label: "Assets Managed"
    },
    insurance: {
      title: "Cover Your Business Against Risks",
      subtitle: "Insurance Products",
      desc: "Comprehensive business insurance covering property, employees, and risk.",
      stat1: "2.1k",
      stat1Label: "Policies Issued",
      stat2: "$1.2b",
      stat2Label: "Coverage Value"
    },
    accounts: {
      title: "Business Banking Simplified",
      subtitle: "Banking Products",
      desc: "Digital banking solutions to manage payments, salaries, and vendors.",
      stat1: "4.4k",
      stat1Label: "Active Accounts",
      stat2: "$3.1b",
      stat2Label: "Monthly Volume"
    },

    // INDIVIDUAL CONTENT
    personalSavings: {
      title: "Save Smart, Live Better",
      subtitle: "Personal Savings",
      desc: "Flexible personal savings with attractive interest rates.",
      stat1: "12k",
      stat1Label: "Customers",
      stat2: "$5b",
      stat2Label: "Total Savings"
    },
    homeLoans: {
      title: "Your Dream Home Awaits",
      subtitle: "Home Loans",
      desc: "Affordable home loans with low interest rates.",
      stat1: "2.3k",
      stat1Label: "Homes Financed",
      stat2: "$800m",
      stat2Label: "Loan Value"
    },
    debitCards: {
      title: "Freedom to Spend Anywhere",
      subtitle: "Debit Cards",
      desc: "Globally accepted debit cards with cashback and rewards.",
      stat1: "15k",
      stat1Label: "Active Cards",
      stat2: "$50m",
      stat2Label: "Monthly Spend"
    },
    investments: {
      title: "Grow Wealth with Smarter Investments",
      subtitle: "Investment Plans",
      desc: "Mutual funds, SIPs, and long-term wealth plans.",
      stat1: "9.2k",
      stat1Label: "Investors",
      stat2: "$2.4b",
      stat2Label: "Assets"
    },
    lifeInsurance: {
      title: "Secure Your Family’s Future",
      subtitle: "Life Insurance",
      desc: "Choose from term insurance and life protection plans.",
      stat1: "6.1k",
      stat1Label: "Policies Issued",
      stat2: "$900m",
      stat2Label: "Coverage"
    },
    pensionPlans: {
      title: "Retire Peacefully with Guaranteed Income",
      subtitle: "Pension Plans",
      desc: "Long-term retirement income & pension protection schemes.",
      stat1: "3.8k",
      stat1Label: "Retirement Accounts",
      stat2: "$1.3b",
      stat2Label: "Pension Assets"
    }
  };

  const c = contents[type];

  document.getElementById("dynamicContent").innerHTML = `
    <div class="v2-content-block">

      <div class="v2-content-header">
        <div class="v2-icon-box"><i class="fas fa-piggy-bank"></i></div>
        <div>
          <span class="v2-subtitle">${c.subtitle}</span>
          <h2 class="v2-title">${c.title}</h2>
        </div>
      </div>

      <p class="v2-description">${c.desc}</p>

      <div class="v2-stats">
        <div class="v2-stat-box">
          <h3>${c.stat1}</h3>
          <span>${c.stat1Label}</span>
        </div>

        <div class="v2-stat-box">
          <h3>${c.stat2}</h3>
          <span>${c.stat2Label}</span>
        </div>
      </div>

      <a href="404.html">
    <button class="v2-btn">Explore Options</button>
</a>


    </div>
  `;
}

// INITIAL BIND 
bindSideMenuClicks();


// ================================
// LOAN CONFIG DATA
// ================================
const loanTypes = {
  home: {
    title: "Stackly Online Home Loan Calculator",
    desc: "Calculate EMIs for home buying, construction or renovation.",
    min: 500000,
    max: 25000000,
    default: 2500000,
    minYears: 5,
    maxYears: 30,
    rate: 8.5
  },
  vehicle: {
    title: "Stackly Online Vehicle Loan Calculator",
    desc: "Calculate EMIs for new & used car or bike loans.",
    min: 100000,
    max: 2500000,
    default: 800000,
    minYears: 1,
    maxYears: 7,
    rate: 9.2
  },
  personal: {
    title: "Stackly Online Personal Loan Calculator",
    desc: "Estimate EMIs for your personal financial needs.",
    min: 50000,
    max: 2000000,
    default: 300000,
    minYears: 1,
    maxYears: 5,
    rate: 11.5
  },
  education: {
    title: "Stackly Online Education Loan Calculator",
    desc: "Plan EMIs for higher education in India & abroad.",
    min: 100000,
    max: 3000000,
    default: 1000000,
    minYears: 3,
    maxYears: 15,
    rate: 10
  },
  mortgage: {
    title: "Stackly Online Mortgage Loan Calculator",
    desc: "Calculate EMIs for mortgage & property loans.",
    min: 500000,
    max: 50000000,
    default: 5000000,
    minYears: 5,
    maxYears: 30,
    rate: 9
  }
};

// Format INR
function rupee(x) {
  return "₹" + Number(x).toLocaleString("en-IN");
}

// EMI formula
function calculateEMI() {
  let P = parseFloat(document.getElementById("loanAmount").value);
  let years = parseFloat(document.getElementById("loanYears").value);
  let rate = parseFloat(document.getElementById("loanRate").value);

  let r = rate / 12 / 100;
  let n = years * 12;

  let emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  let totalPayment = emi * n;
  let interest = totalPayment - P;

  document.getElementById("emiValue").innerText = rupee(emi.toFixed(0));
  document.getElementById("interestAmount").innerText = rupee(interest.toFixed(0));
  document.getElementById("totalPayment").innerText = rupee(totalPayment.toFixed(0));
}

// On Loan Tab Click
document.querySelectorAll(".loan-tab").forEach(tab => {
  tab.addEventListener("click", function () {

    document.querySelectorAll(".loan-tab").forEach(t => t.classList.remove("active"));
    this.classList.add("active");

    let type = this.getAttribute("data-type");
    let data = loanTypes[type];

    // Update title + description
    document.getElementById("loanMainHeading").innerText = data.title;
    document.getElementById("loanDescription").innerText = data.desc;

    // Update Loan Sliders
    document.getElementById("loanAmount").min = data.min;
    document.getElementById("loanAmount").max = data.max;
    document.getElementById("loanAmount").value = data.default;

    document.getElementById("loanYears").min = data.minYears;
    document.getElementById("loanYears").max = data.maxYears;
    document.getElementById("loanYears").value = data.minYears;

    document.getElementById("loanRate").value = data.rate;

    // Update Range Labels
    document.getElementById("loanMinLbl").innerText = rupee(data.min);
    document.getElementById("loanMaxLbl").innerText = rupee(data.max);
    document.getElementById("loanYearMinLbl").innerText = data.minYears + " Years";
    document.getElementById("loanYearMaxLbl").innerText = data.maxYears + " Years";

    // Recalculate EMI
    calculateEMI();
  });
});

// Recalculate EMI when slider changes
document.querySelectorAll("input[type='range']").forEach(input => {
  input.addEventListener("input", calculateEMI);
});

// Initial calculation
calculateEMI();


const tabs = document.querySelectorAll(".cc-tab");
const card = document.querySelector(".cc-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // Remove active from tabs
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Remove old color classes
    card.classList.remove("rewards", "cashback", "travel");

    // Detect card type clicked
    if (tab.innerText.includes("Rewards")) {
      card.classList.add("rewards");
    } else if (tab.innerText.includes("Cashback")) {
      card.classList.add("cashback");
    } else if (tab.innerText.includes("Travel")) {
      card.classList.add("travel");
    }

    // Add zoom animation
    card.classList.add("zoom-effect");
    setTimeout(() => card.classList.remove("zoom-effect"), 400);
  });
});


