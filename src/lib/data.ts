// All content extracted verbatim from Kuber360.dc.html design file

export const WA_NUMBER = '918742019250';

export const waLinkFor = (service: string, name?: string, city?: string) => {
  const parts = [`Hi! I'm interested in *${service}*`];
  if (name) parts.push(`Name: ${name}`);
  if (city) parts.push(`City: ${city}`);
  parts.push('Please guide me.');
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(parts.join('\n'))}`;
};

export const GENERAL_WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I would like to get a free consultation for financial services.')}`;
export const CALLBACK_WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I would like to request a callback for financial guidance.')}`;

export const HERO_STATS = [
  { value: '5000+', label: 'Happy Clients' },
  { value: '50+', label: 'Banking & NBFC Partners' },
  { value: '100+', label: 'Financial Products' },
  { value: '98%', label: 'Customer Satisfaction' },
];

export const HOME_SERVICES = [
  { icon: '💰', title: 'Loans', desc: 'Personal, Business, Home, LAP, Car, Education & More', href: '/loans' },
  { icon: '💳', title: 'Credit Cards', desc: 'Lifetime Free, Rewards, Premium, Fuel, Travel & More', href: '/credit-cards' },
  { icon: '🛡️', title: 'Insurance', desc: 'Health, Life, Motor, Travel, Fire & More', href: '/insurance' },
  { icon: '📈', title: 'Investments', desc: 'Mutual Funds, SIP, FD, Bonds, NPS, Wealth Management', href: '/investments' },
  { icon: '🧾', title: 'Tax & Compliance', desc: 'ITR Filing, GST, TDS, Udyam, MSME, DSC & More', href: '/tax-gst' },
  { icon: '🧑‍💼', title: 'Financial Advisory', desc: 'Financial Planning, Retirement, Insurance, Investment & More', href: '/why-us' },
  { icon: '🏢', title: 'Business Services', desc: 'Company, LLP, GST, FSSAI, IEC, Trademark & More', href: '/services' },
  { icon: '🏦', title: 'Banking Services', desc: 'Savings, Current, FD, Demat, Net Banking & More', href: '/services' },
  { icon: '🎁', title: 'Value Added Services', desc: 'Free Consultation, Credit Score, EMI Plan, Document Support', href: '/services' },
];

export const WHY_CHOOSE_8 = [
  { icon: '🎯', title: 'Expert Guidance' },
  { icon: '⚡', title: 'Quick Process' },
  { icon: '🔒', title: '100% Secure' },
  { icon: '🧑‍💼', title: 'Dedicated Relationship Manager' },
  { icon: '🏦', title: 'Multiple Banking Partners' },
  { icon: '🚪', title: 'Doorstep Assistance' },
  { icon: '🤝', title: 'Transparent Advice' },
  { icon: '🎧', title: 'Lifetime Customer Support' },
];

export const PROCESS_4 = [
  { num: '01', title: 'Connect with Us', desc: 'Reach out via callback request or consultation.' },
  { num: '02', title: 'Share Your Requirement', desc: 'Tell our experts what you need help with.' },
  { num: '03', title: 'Receive Best Financial Solution', desc: 'Get a personalized recommendation from our team.' },
  { num: '04', title: 'Process Completed', desc: 'We handle the paperwork — you relax.' },
];

export const TESTIMONIALS = [
  { name: 'Ramesh Gupta', city: 'Mumbai', quote: 'Got my personal loan approved in 2 days. Truly hassle-free!' },
  { name: 'Priya Sharma', city: 'Pune', quote: 'Nitesh helped me choose the right term insurance for my family.' },
  { name: 'Amit Verma', city: 'Delhi', quote: 'Best guidance for my SIP investments. Highly recommend Kuber360.' },
];

export const INSIGHTS_3 = [
  { tag: 'Tax Planning', date: 'May 20, 2024', title: 'Budget 2026: Key Highlights & Impact On You', desc: 'Practical, low-risk strategies for building long-term wealth.' },
  { tag: 'Investments', date: 'May 15, 2024', title: 'Why SIP is the Best Way to Build Wealth in 2026', desc: 'Legal ways to reduce your tax outgo and save more.' },
  { tag: 'Loans', date: 'May 10, 2024', title: 'Home Loan Interest Rates – Latest Trends & Tips', desc: 'What lenders look at, and how to negotiate a better rate.' },
];

// About page
export const CORE_VALUES = [
  { icon: '🔎', title: 'Transparency', desc: 'No hidden charges, no fine print — what you see is what you get.' },
  { icon: '🤲', title: 'Integrity', desc: 'We recommend what is right for you, not what pays us more.' },
  { icon: '👥', title: 'Customer First', desc: 'Every decision we make starts with your best interest.' },
  { icon: '🔒', title: 'Trust', desc: 'Built over years of honest advice and reliable service.' },
  { icon: '💡', title: 'Innovation', desc: 'Constantly improving how we simplify financial decisions.' },
  { icon: '🤝', title: 'Long-Term Relationship', desc: 'We stay with you well beyond your first transaction.' },
];

export const INDUSTRIES_SERVED = [
  { icon: '💼', title: 'Salaried Professionals' },
  { icon: '🏢', title: 'Business Owners' },
  { icon: '🏭', title: 'MSME' },
  { icon: '🚀', title: 'Startups' },
  { icon: '🧑‍💻', title: 'Self Employed' },
  { icon: '🏦', title: 'Corporates' },
  { icon: '🎓', title: 'Professionals' },
  { icon: '👨‍👩‍👧', title: 'Families' },
];

export const JOURNEY_STEPS = [
  'Idea Started',
  'Trusted Advisors',
  '5000+ Happy Clients',
  '50+ Banking Partners',
  'Growing Across India',
];

export const EXPERT_ROLES = [
  { icon: '🧑‍💼', title: 'Loan Specialist' },
  { icon: '🛡️', title: 'Insurance Advisor' },
  { icon: '📈', title: 'Investment Consultant' },
];

// Services page
export const SERVICES_CATEGORIES = [
  { icon: '💰', title: 'Loans', items: ['Personal Loan', 'Business Loan', 'Home Loan', 'Loan Against Property', 'MSME Loan', 'Education Loan', 'Car Loan', 'Working Capital Loan'], ctaLabel: 'Explore Loans', href: '/loans' },
  { icon: '💳', title: 'Credit Cards', items: ['Cashback Cards', 'Travel Cards', 'Business Cards', 'Fuel Cards', 'Rewards Cards', 'Premium Cards'], ctaLabel: 'Compare Cards', href: '/credit-cards' },
  { icon: '🛡️', title: 'Insurance', items: ['Health Insurance', 'Term Insurance', 'Motor Insurance', 'Travel Insurance', 'Commercial Insurance', 'Group Insurance'], ctaLabel: 'View Plans', href: '/insurance' },
  { icon: '📈', title: 'Investments', items: ['Mutual Funds', 'SIP', 'FD', 'Bonds', 'NPS', 'Portfolio Planning'], ctaLabel: 'Start Investing', href: '/investments' },
  { icon: '🧾', title: 'Tax & GST', items: ['ITR Filing', 'GST Registration', 'GST Returns', 'Tax Planning', 'MSME Registration', 'DSC'], ctaLabel: 'Book Tax Expert', href: '/tax-gst' },
  { icon: '🏢', title: 'Business Registration', items: ['Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Trademark', 'FSSAI', 'IEC', 'Startup Registration'], ctaLabel: 'Know More', href: '/services' },
  { icon: '🏦', title: 'Banking Services', items: ['Savings Account', 'Current Account', 'Salary Account', 'Demat Account', 'Fixed Deposit'], ctaLabel: 'Explore Banking', href: '/services' },
  { icon: '🧑‍💼', title: 'Financial Advisory', items: ['Financial Planning', 'Debt Planning', 'Retirement Planning', 'Investment Advisory', 'Insurance Advisory'], ctaLabel: 'Get Advice', href: '/why-us' },
  { icon: '📁', title: 'Wealth Management', items: ['Portfolio Review', 'Goal Planning', 'Asset Allocation', 'Family Wealth'], ctaLabel: 'Explore Wealth', href: '/services' },
  { icon: '🏭', title: 'MSME Solutions', items: ['Business Finance', 'Working Capital', 'Cash Credit', 'Overdraft', 'Invoice Finance'], ctaLabel: 'View Solutions', href: '/services' },
  { icon: '🎁', title: 'Value Added Services', items: ['Document Assistance', 'Eligibility Guidance', 'Dedicated RM', 'Doorstep Assistance'], ctaLabel: 'Learn More', href: '/services' },
  { icon: '💻', title: 'Digital Services', items: ['Video Consultation', 'Online Document Collection', 'Secure Processing', 'WhatsApp Updates'], ctaLabel: 'Get Started', href: '/services' },
];

// Loans page
export const LOAN_CATEGORIES = [
  { icon: '💳', title: 'Personal Loan', desc: 'Quick unsecured loans for medical, travel, education or personal needs.', time: '24-48 hrs', ctaLabel: 'View Details' },
  { icon: '🏢', title: 'Business Loan', desc: 'Business expansion, working capital and growth financing.', time: '3-5 days', ctaLabel: 'Explore Loan' },
  { icon: '🏠', title: 'Home Loan', desc: 'Purchase your dream home with expert guidance.', time: '7-10 days', ctaLabel: 'Know More' },
  { icon: '🏡', title: 'Loan Against Property', desc: 'Unlock the value of your residential or commercial property.', time: '5-7 days', ctaLabel: 'Explore LAP' },
  { icon: '🏭', title: 'MSME Loan', desc: 'Funding solutions for Micro, Small and Medium Enterprises.', time: '3-5 days', ctaLabel: 'View MSME Loans' },
  { icon: '📈', title: 'Working Capital Loan', desc: 'Maintain healthy business cash flow.', time: '3-5 days', ctaLabel: 'View Details' },
  { icon: '🎓', title: 'Education Loan', desc: 'Finance higher education in India and abroad.', time: '5-7 days', ctaLabel: 'Know More' },
  { icon: '🚗', title: 'Car Loan', desc: 'Finance new and pre-owned vehicles.', time: '24-48 hrs', ctaLabel: 'Explore' },
  { icon: '👨‍⚕️', title: 'Professional Loan', desc: 'Exclusive funding solutions for Doctors, CAs, Architects and other professionals.', time: '3-5 days', ctaLabel: 'View Options' },
];

export const LOAN_ELIGIBILITY = [
  { icon: '🎂', title: 'Minimum Age', desc: '21 - 60 years at loan maturity' },
  { icon: '💵', title: 'Income Criteria', desc: 'Varies by loan type & lender' },
  { icon: '💼', title: 'Employment Type', desc: 'Salaried or Self-Employed' },
  { icon: '📅', title: 'Business Vintage', desc: 'Min. 2-3 years for business loans' },
  { icon: '📊', title: 'CIBIL Importance', desc: '750+ improves approval odds' },
  { icon: '📄', title: 'Required Documents', desc: 'KYC, income & bank proofs' },
];

export const LOAN_DOCS_SALARIED = ['PAN', 'Aadhaar', 'Salary Slips', 'Bank Statement', 'Photo', 'Address Proof'];
export const LOAN_DOCS_SELF_EMPLOYED = ['PAN', 'Aadhaar', 'GST (if applicable)', 'ITR', 'Bank Statement', 'Business Proof'];

export const LOAN_PROCESS_STEPS = [
  { num: '01', title: 'Share Your Requirement' },
  { num: '02', title: 'Eligibility Assessment' },
  { num: '03', title: 'Best Loan Options' },
  { num: '04', title: 'Documentation' },
  { num: '05', title: 'Processing With Banking Partner' },
  { num: '06', title: 'Loan Disbursement' },
];

export const LOAN_FAQS = [
  { q: 'What types of loans can KUBER360 help with?', a: 'We assist with personal loans, business loans, home loans, LAP, MSME loans, education loans, car loans, professional loans and working capital loans.' },
  { q: 'What is the minimum credit score required?', a: 'Generally 700+ for most loan types. We guide you on improving your score if needed and find lenders suited to your profile.' },
  { q: 'How long does loan approval take?', a: 'Personal and car loans can be approved within 24-48 hours. Home loans and business loans typically take 5-10 business days depending on documentation.' },
  { q: 'Is there any fee for KUBER360\'s services?', a: 'Our consultation and advisory service is completely free. Bank processing fees may apply as per the lender.' },
  { q: 'Can I apply for a loan with low income?', a: 'Yes. Some lenders have flexible income criteria. Our team will find the most suitable lender for your income profile.' },
  { q: 'What documents are required for a personal loan?', a: 'Basic KYC (PAN, Aadhaar), latest salary slips, 3-month bank statement and address proof.' },
];

// Credit Cards page
export const CARD_CATEGORIES = [
  { icon: '💵', title: 'Cashback Cards', desc: 'Save on everyday shopping.', ctaLabel: 'Explore' },
  { icon: '✈️', title: 'Travel Cards', desc: 'Airport lounge, air miles & travel rewards.', ctaLabel: 'View Details' },
  { icon: '⛽', title: 'Fuel Cards', desc: 'Fuel surcharge waiver, reward points & fuel savings.', ctaLabel: 'Compare' },
  { icon: '🛍️', title: 'Shopping Cards', desc: 'Online shopping offers & EMI benefits.', ctaLabel: 'Learn More' },
  { icon: '🎁', title: 'Rewards Cards', desc: 'Earn reward points on every spend.', ctaLabel: 'View Rewards' },
  { icon: '👑', title: 'Premium Cards', desc: 'Luxury lifestyle, golf, airport lounge & concierge.', ctaLabel: 'Explore Premium' },
  { icon: '🏢', title: 'Business Cards', desc: 'Business expenses, corporate spending & expense management.', ctaLabel: 'View Options' },
  { icon: '🆓', title: 'Lifetime Free Cards', desc: 'No annual fee, ever.', ctaLabel: 'Compare Cards' },
];

export const CARD_HELP_STEPS = [
  { num: '01', title: 'Understand Your Requirement' },
  { num: '02', title: 'Compare Multiple Credit Cards' },
  { num: '03', title: 'Documentation Assistance' },
  { num: '04', title: 'Application Through Banking Partner' },
  { num: '05', title: 'Approval Support' },
  { num: '06', title: 'Card Delivered' },
];

export const CARD_COMPARISON_COLS = ['Lifetime Free', 'Rewards / Cashback', 'Premium'];
export const CARD_COMPARISON_ROWS = [
  { label: 'Annual Fee', values: ['Nil', '₹500 - ₹1,000', '₹2,500+'] },
  { label: 'Joining Fee', values: ['Nil', '₹500', '₹5,000+'] },
  { label: 'Cashback', values: ['Up to 5%', '1-2%', 'Lifestyle credits'] },
  { label: 'Reward Points', values: ['Basic', 'Accelerated', 'Premium multiplier'] },
  { label: 'Airport Lounge', values: ['—', 'Domestic', 'Domestic + International'] },
  { label: 'Fuel Benefits', values: ['Surcharge waiver', 'Surcharge waiver + points', '—'] },
  { label: 'Dining Offers', values: ['—', 'Select partners', 'Curated dining privileges'] },
  { label: 'EMI Option', values: ['Yes', 'Yes', 'Yes'] },
  { label: 'International Usage', values: ['Yes', 'Yes', 'Yes, with concierge support'] },
];

export const CARD_BENEFITS = [
  { icon: '🎁', title: 'Earn Rewards' },
  { icon: '🛋️', title: 'Airport Lounge' },
  { icon: '💵', title: 'Cashback' },
  { icon: '🍽️', title: 'Dining Offers' },
  { icon: '⛽', title: 'Fuel Savings' },
  { icon: '🧾', title: 'Easy EMI' },
  { icon: '✈️', title: 'Travel Benefits' },
  { icon: '👑', title: 'Lifestyle Privileges' },
];

export const CARD_ELIGIBILITY = [
  { icon: '🎂', title: 'Minimum Age', desc: '21 - 60 years' },
  { icon: '💵', title: 'Income Requirement', desc: 'Varies by card tier & issuer' },
  { icon: '💼', title: 'Employment Type', desc: 'Salaried or Self-Employed' },
  { icon: '📊', title: 'Credit Score Guidance', desc: 'We help you understand what score suits which card' },
];

export const CARD_DOCS_SALARIED = ['PAN', 'Aadhaar', 'Salary Slip', 'Bank Statement', 'Photo'];
export const CARD_DOCS_SELF_EMPLOYED = ['PAN', 'Aadhaar', 'ITR', 'Business Proof', 'Bank Statement', 'GST (If Applicable)'];

export const CARD_FAQS = [
  { q: 'Which card is best?', a: 'It depends on your spending pattern and lifestyle — our experts compare options and recommend the best fit for you.' },
  { q: 'Can I get a lifetime free card?', a: 'Yes, several of our banking partners offer genuinely lifetime-free cards with no annual charges.' },
  { q: 'What credit score is required?', a: 'Most cards require a score of 700+, but premium cards may need 750+. We guide you either way.' },
  { q: 'How long does approval take?', a: 'Typically 3-7 working days depending on the issuer and documentation.' },
  { q: 'Which documents are required?', a: 'Basic KYC (PAN, Aadhaar), income proof and bank statements — the exact list depends on employment type.' },
  { q: 'Can self-employed customers apply?', a: 'Yes, self-employed individuals can apply with ITR, business proof and bank statements.' },
];

// Insurance page
export const INSURANCE_CATEGORIES = [
  { icon: '⚕️', title: 'Health Insurance', desc: 'Protect yourself and your family against medical expenses.', ctaLabel: 'Explore Plans' },
  { icon: '☂️', title: 'Term Life Insurance', desc: 'Financial security for your loved ones.', ctaLabel: 'View Plans' },
  { icon: '🚗', title: 'Motor Insurance', desc: 'Car and bike insurance with comprehensive coverage.', ctaLabel: 'Compare Plans' },
  { icon: '✈️', title: 'Travel Insurance', desc: 'Domestic and international travel protection.', ctaLabel: 'Learn More' },
  { icon: '🏠', title: 'Home Insurance', desc: 'Protect your home and valuable assets.', ctaLabel: 'Explore' },
  { icon: '🏢', title: 'Commercial Insurance', desc: 'Coverage for shops, offices and businesses.', ctaLabel: 'View Details' },
  { icon: '👥', title: 'Group Insurance', desc: 'Insurance solutions for companies and employees.', ctaLabel: 'Know More' },
  { icon: '🛡️', title: 'Personal Accident Insurance', desc: 'Additional protection against unexpected events.', ctaLabel: 'View Benefits' },
];

export const INSURANCE_HOW_STEPS = [
  { num: '01', title: 'Understand Your Requirement' },
  { num: '02', title: 'Compare Insurance Options' },
  { num: '03', title: 'Select the Best Plan' },
  { num: '04', title: 'Documentation Assistance' },
  { num: '05', title: 'Policy Issuance' },
  { num: '06', title: 'Lifetime Support' },
];

export const INSURANCE_BENEFITS = [
  { icon: '🏥', title: 'Cashless Hospital Network' },
  { icon: '💵', title: 'Affordable Premiums' },
  { icon: '🧾', title: 'Tax Benefits' },
  { icon: '👨‍👩‍👧', title: 'Family Protection' },
  { icon: '⚡', title: 'Quick Claim Assistance' },
  { icon: '🎧', title: '24×7 Support' },
  { icon: '🩺', title: 'Annual Health Check-up' },
  { icon: '🔄', title: 'Lifetime Renewal Options' },
];

export const INSURANCE_DOCS = ['PAN', 'Aadhaar', 'Photo', 'Address Proof', 'Existing Policy (if applicable)', 'Medical Reports (if required)'];

export const INSURANCE_FAQS = [
  { q: 'Which insurance plan is best?', a: 'It depends on your age, income, dependents and health needs — our experts compare plans and recommend what fits you best.' },
  { q: 'How much coverage should I choose?', a: 'A common guideline is 10-15x annual income for life cover; our advisors help calculate the right sum insured for your situation.' },
  { q: 'Is medical check-up compulsory?', a: "It depends on your age, sum insured and health history. Many plans up to a certain cover don't require it." },
  { q: 'How are claims processed?', a: 'Our team assists you end-to-end with documentation and coordination with the insurer for a smooth claims experience.' },
  { q: 'Can I port my insurance?', a: 'Yes, health insurance can be ported to a new insurer without losing waiting period benefits, subject to insurer terms.' },
  { q: 'Can I insure my family together?', a: 'Yes, family floater plans let you cover your entire family under a single policy and sum insured.' },
];

export const INSURANCE_TESTIMONIALS = [
  { name: 'Deepak Malhotra', city: 'Lucknow', quote: 'The team compared 4 health plans for my parents and found one with the best hospital network near us.' },
  { name: 'Sunita Agarwal', city: 'Nagpur', quote: 'Got my family covered under one floater plan with a much better premium than I expected.' },
  { name: 'Vivek Rathi', city: 'Indore', quote: 'KUBER360 helped with my shop insurance and handled all the paperwork — very smooth experience.' },
];

// Investments page
export const INVESTMENT_CATEGORIES = [
  { icon: '📊', title: 'Mutual Funds', desc: 'Diversified investment solutions for long-term wealth creation.', ctaLabel: 'Explore Funds' },
  { icon: '📈', title: 'SIP', desc: 'Start investing monthly with disciplined wealth creation.', ctaLabel: 'View SIP Plans' },
  { icon: '💰', title: 'Fixed Deposits', desc: 'Safe investment options with stable returns.', ctaLabel: 'Compare Options' },
  { icon: '📜', title: 'Bonds', desc: 'Government & Corporate Bonds.', ctaLabel: 'Learn More' },
  { icon: '🏛️', title: 'National Pension System', desc: 'Retirement planning with tax benefits.', ctaLabel: 'Explore NPS' },
  { icon: '🎓', title: 'Child Education Planning', desc: "Secure your child's future through smart investments.", ctaLabel: 'Know More' },
  { icon: '🌅', title: 'Retirement Planning', desc: 'Plan today for a financially independent tomorrow.', ctaLabel: 'Explore Plans' },
  { icon: '📁', title: 'Wealth Management', desc: 'Personalized investment strategies.', ctaLabel: 'Book Consultation' },
];

export const INVESTMENT_PROCESS_STEPS = [
  { num: '01', title: 'Understand Financial Goals' },
  { num: '02', title: 'Risk Profile Assessment' },
  { num: '03', title: 'Investment Recommendation' },
  { num: '04', title: 'Documentation Assistance' },
  { num: '05', title: 'Investment Execution' },
  { num: '06', title: 'Portfolio Review & Ongoing Support' },
];

export const INVESTMENT_SOLUTIONS = [
  { icon: '⏳', title: 'Short Term Investments' },
  { icon: '📈', title: 'Long Term Investments' },
  { icon: '🌅', title: 'Retirement Planning' },
  { icon: '🎓', title: 'Child Future Planning' },
  { icon: '🧾', title: 'Tax Saving Investments' },
  { icon: '🆘', title: 'Emergency Fund Planning' },
  { icon: '💎', title: 'Wealth Creation' },
  { icon: '💵', title: 'Passive Income Planning' },
];

export const INVESTMENT_CALCULATORS = [
  { icon: '📈', title: 'SIP Calculator', desc: 'Estimate the future value of your monthly SIP investments.' },
  { icon: '💰', title: 'FD Calculator', desc: 'Calculate maturity value of your fixed deposit investment.' },
  { icon: '🌅', title: 'Retirement Calculator', desc: 'Plan how much you need to save for a comfortable retirement.' },
  { icon: '🎯', title: 'Goal Planner', desc: 'Map out the investments needed to reach your financial goals.' },
];

export const INVESTMENT_STATS = [
  { value: '5000+', label: 'Happy Clients' },
  { value: '₹50Cr+', label: 'Investments Managed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
];

export const INVESTMENT_FAQS = [
  { q: 'How much should I invest monthly?', a: 'It depends on your income, goals and risk appetite. Our advisors recommend starting with at least 20% of your monthly income.' },
  { q: 'What is SIP and how does it work?', a: 'SIP (Systematic Investment Plan) lets you invest a fixed amount every month in mutual funds. It averages out market volatility over time.' },
  { q: 'Is my investment safe with KUBER360?', a: 'We only recommend regulated, SEBI-registered investment options. All investments are directly held in your name with the fund house or broker.' },
  { q: 'Can I withdraw my investment anytime?', a: 'Most mutual funds and SIPs are liquid. ELSS funds have a 3-year lock-in for tax benefits. We clarify liquidity for each option before investing.' },
  { q: 'What is the minimum investment amount?', a: 'SIPs start from as low as ₹500/month. Our experts guide you based on your capacity and goals.' },
  { q: 'How do I track my investments?', a: 'You receive statements directly from the fund house/broker. Our team is always available to review and guide you on portfolio performance.' },
];

export const INVESTMENT_TESTIMONIALS = [
  { name: 'Arjun Mehta', city: 'Bangalore', quote: 'Started SIP through KUBER360. My portfolio has grown 18% in 2 years. Great guidance!' },
  { name: 'Kavita Reddy', city: 'Hyderabad', quote: 'They helped me plan my retirement corpus in a way no one else had explained before.' },
  { name: 'Suresh Pillai', city: 'Chennai', quote: 'Switched my investments to better-performing funds on their advice. Very happy with the results.' },
];

// Tax & GST page
export const TAX_SERVICES = [
  { icon: '📄', title: 'ITR Filing', desc: 'Accurate and timely income tax return filing for individuals and businesses.', ctaLabel: 'Book Tax Expert' },
  { icon: '🧾', title: 'GST Registration', desc: 'Get your GST number and be GST-compliant in just a few days.', ctaLabel: 'Know More' },
  { icon: '📊', title: 'GST Return Filing', desc: 'Timely and error-free monthly, quarterly and annual GST returns.', ctaLabel: 'Book Now' },
  { icon: '🧮', title: 'TDS Solutions', desc: 'Simplified TDS filing, correction and compliance for businesses.', ctaLabel: 'Know More' },
  { icon: '💡', title: 'Tax Planning', desc: 'Legal strategies to minimize tax liability and maximize savings.', ctaLabel: 'Book Consultation' },
  { icon: '🏭', title: 'MSME / Udyam Registration', desc: 'Get your MSME certificate and unlock government benefits.', ctaLabel: 'Register Now' },
  { icon: '🔐', title: 'Digital Signature (DSC)', desc: 'Obtain Class 2 and Class 3 DSC for e-filing and business needs.', ctaLabel: 'Get DSC' },
  { icon: '🏛️', title: 'Company Registration', desc: 'Proprietorship, LLP, Pvt Ltd and other business structures.', ctaLabel: 'Know More' },
  { icon: '🍽️', title: 'FSSAI Registration', desc: 'Food business license and compliance for restaurants, bakeries, etc.', ctaLabel: 'Apply Now' },
  { icon: '🌐', title: 'Import Export Code (IEC)', desc: 'Get your IEC and start importing or exporting legally.', ctaLabel: 'Apply IEC' },
];

export const TAX_PROCESS_STEPS = [
  { num: '01', title: 'Book a Consultation' },
  { num: '02', title: 'Document Collection' },
  { num: '03', title: 'Expert Review & Preparation' },
  { num: '04', title: 'Filing & Submission' },
  { num: '05', title: 'Confirmation & Support' },
];

export const TAX_WHO_CAN_BENEFIT = [
  'Salaried Individuals', 'Self Employed', 'Freelancers', 'Business Owners',
  'MSMEs', 'Startups', 'NRIs', 'HUFs',
];

export const TAX_DOCS = ['PAN Card', 'Aadhaar Card', 'Form 16 / Salary Slips', 'Bank Statements', 'Investment Proofs', 'Previous ITR (if any)'];

export const TAX_FAQS = [
  { q: 'Who needs to file ITR?', a: 'Any individual with taxable income above the basic exemption limit (₹2.5 lakh for general, ₹3 lakh for senior citizens) must file ITR.' },
  { q: 'What is the last date for ITR filing?', a: 'Usually July 31st for individuals (non-audit cases). Our team ensures timely filing well before the deadline.' },
  { q: 'Can KUBER360 help with GST registration?', a: 'Yes. We handle the entire GST registration process — from application to approval — for businesses of all sizes.' },
  { q: 'Is tax planning legal?', a: 'Absolutely. Tax planning using Section 80C, 80D, HRA, NPS and other provisions is entirely legal and encouraged.' },
  { q: 'What happens if I miss the ITR deadline?', a: 'You can file a belated return with a penalty of ₹5,000 (₹1,000 if income is below ₹5 lakh). We advise filing on time to avoid penalties.' },
];

export const TAX_STATS = [
  { value: '5000+', label: 'Returns Filed' },
  { value: '1000+', label: 'GST Clients' },
  { value: '98%', label: 'Accuracy Rate' },
  { value: '100%', label: 'On-Time Filing' },
];

export const TAX_TESTIMONIALS = [
  { name: 'Rajesh Singhania', city: 'Jaipur', quote: 'Filed my ITR and saved ₹45,000 in taxes with their planning advice. Fantastic service!' },
  { name: 'Meena Patel', city: 'Surat', quote: 'GST registration was done in 3 days. Very professional and quick process.' },
  { name: 'Aakash Trivedi', city: 'Ahmedabad', quote: 'They handle all my business compliance — GST, TDS, ITR. One stop solution!' },
];

// Why Us page
export const WHY_US_CARDS = [
  { icon: '🎯', title: 'Expert Financial Guidance', desc: 'Certified advisors with deep expertise across loans, insurance, investments and tax.' },
  { icon: '🏦', title: 'Multiple Banking Partners', desc: '50+ banks and NBFCs to ensure you get the best rates and terms for your needs.' },
  { icon: '🔒', title: '100% Transparent', desc: 'No hidden charges, no commissions passed to you. What we quote is what you pay.' },
  { icon: '⚡', title: 'Fast Processing', desc: 'Quick turnaround from application to approval — we respect your time.' },
  { icon: '🧑‍💼', title: 'Dedicated Relationship Manager', desc: 'One point of contact for all your financial needs — always available for you.' },
  { icon: '🚪', title: 'Doorstep Service', desc: 'Document collection and guidance at your doorstep across India.' },
  { icon: '🤝', title: 'Long-Term Partnership', desc: 'We stay with you beyond the first transaction — your financial growth is our mission.' },
  { icon: '🎧', title: 'Lifetime Support', desc: 'Post-service support for claims, renewals, statements and any future needs.' },
];

export const VS_COMPARISON = [
  { feature: 'Multiple Options', traditional: 'Limited to one bank', kuber: 'Compare 50+ banks & NBFCs' },
  { feature: 'Expert Advice', traditional: 'Biased towards bank products', kuber: 'Unbiased, goal-based guidance' },
  { feature: 'Processing Time', traditional: 'Slow & bureaucratic', kuber: 'Fast, streamlined process' },
  { feature: 'Cost to You', traditional: 'Processing & hidden fees', kuber: 'Free advisory service' },
  { feature: 'Documentation', traditional: 'Multiple branch visits', kuber: 'Doorstep document pickup' },
  { feature: 'Support After Service', traditional: 'Often unavailable', kuber: 'Lifelong relationship manager' },
];

export const WHY_CUSTOMERS_RETURN = [
  { icon: '🤝', title: 'Trust Built Over Time', desc: 'Years of honest, transparent advice.' },
  { icon: '🎯', title: 'Personalized Solutions', desc: 'Every recommendation is tailored to your goals.' },
  { icon: '⚡', title: 'Proven Results', desc: 'Real approvals, real savings, real growth.' },
  { icon: '🧑‍💼', title: 'One Advisor for Everything', desc: 'Loans, insurance, investments, tax — one team.' },
  { icon: '🔄', title: 'Ongoing Support', desc: 'We check in on your financial health regularly.' },
  { icon: '❤️', title: 'Genuine Care', desc: "We treat your money like it's our own." },
];

// Contact page
export const CONTACT_INFO = [
  { icon: '📍', title: 'Office Address', value: 'Vaishali Nagar, Jaipur, Rajasthan - 302021' },
  { icon: '📞', title: 'Phone Number', value: '+91 87420 19250' },
  { icon: '✉️', title: 'Email', value: 'info@kuber360.in' },
  { icon: '🕒', title: 'Business Hours', value: 'Monday – Saturday\n09:30 AM – 7:00 PM\nSunday: Closed' },
];

export const CONTACT_SERVICE_OPTIONS = [
  'Personal Loan', 'Business Loan', 'Home Loan', 'Credit Cards',
  'Insurance', 'Investments', 'Tax & GST', 'Business Registration', 'Other',
];

export const CONTACT_SERVICES_ICONS = [
  { icon: '💰', title: 'Loans' },
  { icon: '💳', title: 'Credit Cards' },
  { icon: '🛡️', title: 'Insurance' },
  { icon: '📈', title: 'Investments' },
  { icon: '🧾', title: 'Tax & GST' },
  { icon: '🏢', title: 'Business Reg.' },
  { icon: '🏦', title: 'Banking' },
  { icon: '🎧', title: 'Support' },
];

export const HOW_WE_RESPOND_STEPS = [
  { num: '01', title: 'Receive Your Inquiry' },
  { num: '02', title: 'Assign a Dedicated Expert' },
  { num: '03', title: 'Initial Consultation Call' },
  { num: '04', title: 'Detailed Needs Assessment' },
  { num: '05', title: 'Personalized Solution' },
  { num: '06', title: 'Ongoing Support' },
];

export const CONTACT_FAQS = [
  { q: 'How quickly will I get a response?', a: 'Our team typically responds within 30 minutes during business hours (Mon–Sat, 9:30 AM–7:00 PM).' },
  { q: 'Is the consultation really free?', a: 'Yes, 100%. Our advisory and consultation service is completely free of charge.' },
  { q: 'Can I contact you on WhatsApp?', a: 'Absolutely. WhatsApp is our primary channel — you can reach us anytime and get quick responses from our experts.' },
  { q: 'Which cities does KUBER360 serve?', a: 'We primarily serve Jaipur and surrounding areas but assist clients across India through phone, WhatsApp and digital channels.' },
  { q: 'What information should I share when contacting?', a: 'Just your name, the service you need and your city. Our expert will call you and guide you from there.' },
];

// Lead popup service options
export const LEAD_SERVICE_OPTIONS = [
  'Personal Loan', 'Business Loan', 'Home Loan', 'Credit Cards',
  'Insurance', 'Investments', 'Tax & GST', 'Business Registration', 'Other',
];

// Shared Why-Choose items per page
export const WHY_CHOOSE_LOANS = [
  { icon: '✔️', title: 'Multiple Banking Partners' },
  { icon: '✔️', title: 'Expert Loan Guidance' },
  { icon: '✔️', title: 'Transparent Process' },
  { icon: '✔️', title: 'Personalized Assistance' },
  { icon: '✔️', title: 'Dedicated Relationship Manager' },
  { icon: '✔️', title: 'Secure Documentation' },
  { icon: '✔️', title: 'Quick Processing' },
  { icon: '✔️', title: 'End-to-End Support' },
];

export const WHY_CHOOSE_CARDS = [
  { icon: '✔️', title: 'Compare Multiple Cards' },
  { icon: '✔️', title: 'Expert Recommendation' },
  { icon: '✔️', title: 'Multiple Banking Partners' },
  { icon: '✔️', title: 'Transparent Guidance' },
  { icon: '✔️', title: 'Dedicated Relationship Manager' },
  { icon: '✔️', title: 'Complete Documentation Support' },
  { icon: '✔️', title: 'Quick Processing' },
  { icon: '✔️', title: 'Personalized Suggestions' },
];

export const WHY_CHOOSE_INSURANCE = [
  { icon: '✔️', title: 'Compare Multiple Insurance Plans' },
  { icon: '✔️', title: 'Expert Guidance' },
  { icon: '✔️', title: 'Transparent Advice' },
  { icon: '✔️', title: 'Personalized Recommendations' },
  { icon: '✔️', title: 'Quick Documentation' },
  { icon: '✔️', title: 'Dedicated Relationship Manager' },
  { icon: '✔️', title: 'Claim Assistance Support' },
  { icon: '✔️', title: 'Long-Term Customer Support' },
];

export const WHY_CHOOSE_INVESTMENTS = [
  { icon: '✔️', title: 'Personalized Investment Advice' },
  { icon: '✔️', title: 'Goal Based Planning' },
  { icon: '✔️', title: 'Risk Assessment' },
  { icon: '✔️', title: 'Diversified Investment Options' },
  { icon: '✔️', title: 'Long-Term Wealth Creation' },
  { icon: '✔️', title: 'Dedicated Investment Expert' },
  { icon: '✔️', title: 'Transparent Recommendations' },
  { icon: '✔️', title: 'Continuous Portfolio Review' },
];

export const WHY_CHOOSE_TAX = [
  { icon: '✔️', title: 'Expert CA Assistance' },
  { icon: '✔️', title: '100% Accurate Filing' },
  { icon: '✔️', title: 'Maximum Tax Savings' },
  { icon: '✔️', title: 'GST & TDS Compliance' },
  { icon: '✔️', title: 'Business Registration Support' },
  { icon: '✔️', title: 'Dedicated Tax Expert' },
  { icon: '✔️', title: 'Timely Filing Reminders' },
  { icon: '✔️', title: 'End-to-End Document Support' },
];

export const WHY_CHOOSE_SERVICES = [
  { icon: '✔️', title: 'Expert Financial Guidance' },
  { icon: '✔️', title: 'Fast Processing' },
  { icon: '✔️', title: 'Transparent Advice' },
  { icon: '✔️', title: 'Dedicated Relationship Manager' },
  { icon: '✔️', title: 'Multiple Banking Partners' },
  { icon: '✔️', title: 'Secure Documentation' },
  { icon: '✔️', title: 'Personalized Solutions' },
  { icon: '✔️', title: 'End-to-End Support' },
];

export const WHY_CONTACT_KUBER = [
  { icon: '⚡', title: 'Quick Response' },
  { icon: '🎯', title: 'Expert Guidance' },
  { icon: '🔒', title: 'Secure & Confidential' },
  { icon: '💰', title: 'Free Consultation' },
  { icon: '🤝', title: 'No Obligation' },
  { icon: '🎧', title: '24x7 WhatsApp Support' },
];

// Page hero data
export const PAGE_HEROES: Record<string, { title1: string; title2: string; sub: string; crumb: string }> = {
  about: { crumb: 'About Us', title1: 'About', title2: 'KUBER360', sub: 'Empowering Individuals & Businesses With Smart Financial Solutions.' },
  services: { crumb: 'Services', title1: 'Our Financial', title2: 'Services', sub: 'Everything You Need To Build, Protect & Grow Your Financial Future — All Under One Roof.' },
  loans: { crumb: 'Loan Products', title1: 'Find the Right Loan', title2: 'for Every Need', sub: 'From personal goals to business growth, our experts help you choose the right loan with complete guidance and end-to-end assistance.' },
  'credit-cards': { crumb: 'Credit Cards', title1: 'Find the Perfect Credit Card', title2: 'For Your Lifestyle', sub: "Compare India's leading credit cards with expert guidance from KUBER360." },
  insurance: { crumb: 'Insurance', title1: 'Protect What', title2: 'Matters Most', sub: 'Compare insurance plans with expert guidance. Choose the right protection for yourself, your family and your business.' },
  investments: { crumb: 'Investments', title1: 'Grow Your Wealth With', title2: 'Smart Investment Planning', sub: 'Build long-term wealth through expert investment guidance tailored to your financial goals.' },
  'tax-gst': { crumb: 'Tax & GST', title1: 'Smart Tax & GST Solutions', title2: 'For Individuals And Businesses', sub: 'Simplify Income Tax, GST and Business Compliance with expert guidance from KUBER360.' },
  'why-us': { crumb: 'Why KUBER360?', title1: 'Why Thousands', title2: 'Trust KUBER360', sub: "We don't just recommend financial products — we help you make informed financial decisions with expert guidance and personalized support." },
  contact: { crumb: 'Contact Us', title1: "Let's Connect & Build", title2: 'Your Financial Future', sub: 'Whether you need a loan, insurance, investment guidance, tax consultation or business registration support, our financial experts are ready to assist you.' },
};
