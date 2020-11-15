const checking = {
  personal: {
    regular: {
      header: "regular checking account",
      description:
        "For the customer who wants unlimited check writing privileges, we recommend the Regular Checking Account. This account offers these features",
      info: [
        "Opening deposit minimum is $100",
        "Unlimited check writing privileges",
        "Non-interest bearing account",
        "Debit Card",
        "Monthly maintenance fee of $5 if account balance falls below $500 on any day during that cycle OR if the average daily balance for the entire statement cycle is less than $1000",
      ],
    },
    premium: {
      header: "premium checking account",
      description:
        "This interest bearing account offers unlimited check writing privileges and many other special features",
      info: [
        "Opening deposit just $100",
        "Unlimited check writing privileges",
        "Account earns interest*",
        "Debit Card",
        "Monthly fee of $7.50 if the account balance falls below $1,000 on any day during that cycle",
      ],
    },
    gold: {
      header: "america's community bank gold account",
      description:
        "An exclusive account for our customers over the age of 50 who maintain at least $5000 in America’s Community Bank accounts. You receive a Premium Checking Account and enjoy these special features",
      info: [
        "No monthly maintenance fees, regardless of account balance",
        "Unlimited check writing privileges",
        "Account earns interest*",
        "Special checks provided at no charge",
        "Debit Card",
        "Special rates on CD’s, auto loans and Home Equity Loans",
        "Special discounts on Safe Deposit Boxes, Travelers Checks, Money Orders, etc.",
      ],
    },
    free: {
      header: "free checking",
      description:
        "Things just keep getting better at America’s Community Bank. We’re locally owned and operated, offer friendly hometown service, and now we have a “FREE” checking account we’re sure will suit your needs. See what you think!",
      info: [
        "Opening deposit of just $25.00",
        "Unlimited check writing privileges",
        "Debit Card",
        "No minimum balance requirement",
        "No monthly maintenance fee",
        "Non-interest bearing account",
        "Check images are not returned with your monthly statement, however, under special circumstances you may obtain a copy of a check, subject to the bank’s normal fees",
      ],
    },
    message: "*Call us for current rates",
  },
  business: {
    commercial: {
      header: "commercial checking account",
      description:
        "America’s Community Bank Commercial Checking Account is designed specifically for your active business. This account offers you great value, with many special features",
      info: [
        "Opening deposit of just $100.00",
        "Earnings allowance credit-charges will be reduced by the credit based on an earnings allowance of $.25 for each $100.00 in your account, credit is based on an average collected balance",
        "Monthly maintenance fee just $10.00",
        "Account fees are as follows:$.15 for each check or debit",
        "$.10 for each deposited item",
        "One lock deposit bag per account; additional bags $12.00",
        "Two zipper deposit bags per account; additional bags $3.00",
        "Non-interest bearing account",
        "No ATM access",
      ],
    },
    lowVolume: {
      header: "LOW VOLUME CHECKING",
      description:
        "This America’s Community Bank account is designed for the business with limited check writing needs, yet this account continues to offer many features and benefits",
      info: [
        "Opening deposit of just $100.00",
        "Monthly maintenance fee just $6.00",
        "First 25 checks or debits are free, with a fee of $.20 for each additional check",
        "$.10 for each deposited item",
        "Non-interest bearing account",
        "One lock deposit bag per account; additional bags $12.00",
        "Two zipper deposit bags per account; additional bags $3.00",
        "No ATM access",
      ],
    },
    nonProfit: {
      header: "NON-PROFIT CHECKING ACCOUNT",
      description:
        "An exclusive account for the Non-Profit Business or Association needing an inexpensive checking account. We’re sure you will find this account to be loaded with value!",
      info: [
        "Opening deposit of just $100.00",
        "Monthly maintenance fee of $2.00 when account balance falls below $500.00",
        "First 10 checks or debits are free, with a fee of $.20 for each additional check",
        "Non-interest bearing account",
        "No ATM access",
      ],
    },
    commercialMoneyMarket: {
      header: "COMMERCIAL MONEY MARKET",
      description:
        "Our Commercial Money Market account offers you interest on your balance and access to your money. This account offers a variety of other special features",
      info: [
        "Opening deposit of just $1000.00",
        "Interest is based on the average daily balance and is paid at the end of each month*",
        "Monthly fee of $10.00 if the account balance falls below $1000.00 any day during the cycle",
        "Unlimited deposits",
        "Limited transactions as follows:There can be no more than six (6) pre-authorized automatic or telephone transfers to a third person or to another account of the depositor per month",
        "There will be an excessive withdrawal charge of $5 per item when more than six (6) items are processed during a statement cycle",
      ],
    },
    message:
      "*Interest is calculated by applying the annual interest rate on per annum basis to the daily collected balance. The annual interest rate is a variable rate and can change at any time. The rate applicable to this account depends upon the balance in the account each day.",
  },
};

const savings = {
  personal: {
    regular: {
      header: "Statement Savings Account",
      description:
        "Our regular savings account offers a low initial deposit with several additional features",
      info: [
        "Opening deposit minimum is $100.00",
        "Free Debit Card",
        "Account earns interest*",
        "Nine (9) withdrawals may be made each quarter with no charge. An excessive withdrawal charge of $2.00 per withdrawal will be assessed when withdrawals exceed limits",
      ],
    },

    childrens: {
      header: "Savings Club  for Children",
      description:
        "Starting to save early is a great habit for children. America’s Community Bank has designed a special savings account for children under the age of 18",
      info: [
        "Opening deposit minimum is $5",
        "Account earns interest*",
        "Nine (9) withdrawals may be made each quarter with no charge. An excessive withdrawal charge of $2.00 per withdrawal will be assessed when withdrawals exceed limits",
      ],
    },

    moneyMarket: {
      header: "money market investment account",
      description:
        "Earn a higher rate of interest, yet still have access to your money with our money market account",
      info: [
        "Opening deposit minimum is $1,000",
        "Account earns interest*",
        "Debit Card",
        "There can be no more than six (6) pre-authorized automatic or telephone transfers to a third person or to another account of the depositor per month. There will be an excessive withdrawal charge of $5 per item when more than six (6) items are processed during a statement cycle",
      ],
    },

    cd: {
      header: "certificate of deposit (CD)",
      description:
        "America’s Community Bank offers certificates for the following terms: 3, 6, 12, 18, 24, 30, 48, 60 months. You enjoy these features and benefits with our CDs",
      info: [
        "Opening deposit minimum is $500",
        "Interest rates set at the beginning of the term",
        "Interest begins to accrue on the first day of deposit",
        "Interest can be compounded into the CD, sent to you by check, or deposited into another America’s Community Bank account",
        "Automatic renewal on the maturity date for an identical period of time, at the current interest rate for that term. You have a 10-day grace period, after the maturity date, to withdraw the funds or change the term without penalty",
        "Early withdrawal penalties: 3-11 months - 3 months of accrued interest, earned or not. 12 months or more - 6 months of accrued interest, earned or not",
      ],
    },
  },
};

const loans = {
  header: "Loan Products",
  description:
    "At our Bank, we offer (but not limited to) the following types of loans taking into consideration safety and soundness of the Bank’s operation and quality of the particular loan",
  info: [
    "Residential mortgage loans for 1-4 family dwellings",
    "Home improvement loans",
    "Installment loans for personal and business needs",
    "Automobile loans",
    "Small business loans",
    "Farm loans",
    "Commercial loans",
    "Business and commercial real estate loans",
    "Construction loans",
    "SBA guaranteed loans",
  ],
  message:
    "One of our loan officers would be happy to help you with your loan needs. We invite you to call with questions or to set up an appointment at 816-228-2300.",
};

const services = {
  header: "additional services",
  info: [
    "24 hour ATM",
    "Debit Cards",
    "VISA® Platinum Preferred Credit Card",
    "VISA® Classic Credit Card",
    "Merchant Credit Card Services",
    "Money Orders",
    "Notary Service",
    "Safe Deposit Boxes",
    "Wire Transfers: Incoming/Outgoing",
    "Zippered Deposit Bags",
    "Locking Deposit Bags",
    "Night Depository",
    "ACH Origination (upon approval)",
  ],
  contactMessage: {
    url: "/contact",
    linkText: "Please contact us",
    text: " to find out more about these services.",
  },

  debitCardMessage:
    "If your DEBIT CARD has been lost or stolen after normal banking hours, please contact our Hot Card Center at 866-546-8273. In addition, please Notify the bank as soon as possible during regular business hours.",
};

const onlineBanking = {
  header: "online banking",
  description:
    "America’s Community Bank is always looking for new ways to make banking convenient for our customers. One of those ways is NetBanking, which is our online banking product. NetBanking is a simple and safe way for you to have direct access to your accounts, 24 hours a day, 7 days a week.",
  info: [
    "Access Your Account",
    "Review Account Activity",
    "Check on cleared checks, ATM/Debit Card transactions, deposits.",
    "Transfer money between your accounts with America’s Community Bank",
  ],
  contactMessage:
    "Please contact us at (816) 228-2300 for more information on how to enroll.",
  bankingAgreementLink: "Click here to access our Online Banking Agreement",
  creditCardOffer:
    "Apply today for a VISA® Platinum Preferred or VISA® Classic credit card. NetBanking customers can login, download and complete an application. Or you can pick up an application today or call us at 816-228-2300 and we will mail one to you.",
};

const checks = {
  header: "Order Checks",
  description:
    "Feel free to contact us and we will be happy to assist you with your check order at no extra charge. Or you may place your order directly with",
  link: {
    url: "https://orderpoint.deluxe.com/personal-checks/welcome.htm",
    text: "Deluxe Check Printers",
  },
};
const about = {
  header: "a brief history",
  description:
    "The bank was originally chartered as Bank of Urich in 1888 with its only office located in Urich, Missouri. This office, located in Henry County, was the bank’s only office for about 107 years. Our office was opened in Blue Springs, Jackson County, Missouri in 1997 and is now the home of our main office. In October, 2003 the name of the bank was changed to America’s Community Bank to more effectively promote the products and services offered and to serve the needs of our customers. \nAs a community bank, with local ownership, the focus is to develop relationships and meet the financial needs of the residents and businesses of the Bank's neighboring areas.",
};

const location = {
  header: "Locations / Hours",
  address: "1100 W Main, Blue Springs, MO 64015",
  phone: "(816)-228-2300",
  fax: "(816)-220-0005",

  hours: {
    lobby: {
      weekday: "9:00AM - 5:00PM",
      saturday: "9:00AM - 12:00PM",
    },
    driveUp: {
      weekday: "8:00AM - 5:00PM",
      saturday: "9:00AM - 12:00PM",
    },
    atm: "24-hour atm access",
    holidayMessage: "Holidays may affect the hours posted.",
  },
};

const contact = {
  header: "Contact Us",
  description:
    "Private personal and account information such as Account Numbers, Passwords, PINs or Social Security Numbers should NOT be sent by e-mail.\nIf you have a question about your account or need an immediate response, please call us at 816-228-2300.",
};

const cards = {
  online: {
    image: "anytime",
    header: `anytime access`,
    description: `Fast, easy, and secure access to your accounts using Online Banking. Enjoy the convenience of banking anywhere, at anytime.`,
    link: {
      url: "/onlineBanking",
      text: "explore online banking",
    },
  },
  piggyBank: {
    image: "invest",
    header: `invest in your future`,
    description: `Explore our savings options to find the right account for your individual and family goals.`,
    link: {
      url: "/personal",
      text: "compare personal savings",
    },
  },
  locate: {
    image: "locate",
    header: `locate our branch`,
    description: `We’d love to see you. Stop by our branch and say hello.`,
    link: {
      url: "/location",
      text: "view location",
    },
  },
  checks: {
    image: "checks",
    header: `low on checks?`,
    description: `Reorder your personal or business checks in minutes! Click the link below to get started.
    `,
    link: {
      url: "/checks",
      text: `order checks`,
    },
  },
  contactUs: {
    image: "contact",
    header: `get in touch`,
    description: `Have a question or concern? We’re here to help! Send us a message or give us a call today.`,
    link: {
      url: "/contact",
      text: `contact us`,
    },
  },
  loan: {
    image: "lend",
    header: `ready to lend a hand`,
    description: `We offer a wide variety of loan options to make your dreams reality. Our experienced lenders are ready to help find your perfect fit.`,
    link: {
      url: "/loans",
      text: "loan options",
    },
  },
};

const home = {
  welcome: {
    title: "welcome",
    description:
      "<p>Our new site looks great on desktop, tablet and mobile devices! Take a look around and let us know if you have any questions.</p>",
    button: "contact us",
    route: "/contact",
  },
  loans: {
    title: "loans",
    description:
      "<p>We can help you find a loan that is best for you and your budget.</p>",
    button: "explore loans",
    route: "/loans",
  },
  personal: {
    title: "personal checking",
    description:
      "<p>Checking made simple! Account options tailored to your financial needs.</p>",
    button: "compare accounts",
    route: "/personal",
  },
};

export {
  home,
  checking,
  savings,
  loans,
  services,
  about,
  location,
  contact,
  cards,
  checks,
  onlineBanking,
};
