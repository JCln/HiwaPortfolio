(function () {
  const STORAGE_KEY = 'siteLang';
  const defaultLang = 'fa';
  const translations = window.__SITE_TRANSLATIONS__ || {
    fa: {
      "nav.home": "خانه",
      "nav.about": "درباره",
      "nav.projects": "نمونه کار",
      "nav.certificates": "مجوزها/ مدارک",
      "nav.contact": "تماس با ما",
      "hero.title": "هیوا مدرن بمانید",
      "hero.subtitle": "ما با توسعه، پشتیبانی و مشاوره نرم افزار به شما کمک می کنیم",
      "hero.cta": "برای دریافت مشاوره رایگان!",
      "hero.cta.sub": "با ما تماس بگیرید و یا ایمیل ارسال فرمایید",
      "hero.form.email": "ایمیل شما *",
      "hero.form.submit": "ثبت درخواست مشاوره",
      "hero.form.select.company": "شرکت یا سازمان هستیم",
      "hero.form.select.personal": "پروژه شخصی میخواهم",
      "hero.form.select.consult": "درخواست مشاوره دارم",
      "services.title": "اصلی‌ترین خدمات ما",
      "services.heading": "اصلی‌ترین خدمات ما",
      "services.all": "تمام خدمات",
      "services.card1.title": "توسعه نرم افزار",
      "services.card1.text": "ما راه حل های کامل فناوری اطلاعات را برای کار شما ارائه می دهیم",
      "services.card1.cta": "نمایش پروژه ها",
      "services.card2.title": "امنیت داده ها",
      "services.card2.text": "آنالیز و مدیریت اطلاعات بزرگ و گزارش و برطرف کردن مشکلات پیش آمده",
      "services.card3.title": "مشاوره فناوری اطلاعات",
      "services.card4.title": "یادگیری ماشین هوش مصنوعی",
      "services.card4.text": "هوش مصنوعی و یادگیری ماشین را در زندگی روشن کنید. افزایش کیفیت و کارایی",
      "services.page.title": "آشنایی با خدمات ما",
      "services.page.subtitle": "ما راه حل های کامل فناوری اطلاعات را برای کار شما ارائه می دهیم",
      "services.page.feature1": "ساعات کاری",
      "services.page.feature2": "مدیریت کوپن",
      "services.page.feature3": "مدیریت محصولات",
      "services.page.feature4": "سیستم پشتیبانی",
      "services.page.feature5": "اشتراک عضویت",
      "services.page.feature6": "فاکتور و حمل و نقل",
      "projects.page.title": "پروژه های",
      "projects.page.title2": "تکمیل شده",
      "projects.page.subtitle": "ما یک تیم با تجربه توسعه و پشتیبانی هستیم.",
      "projects.filter.all": "همه",
      "projects.filter.consultation": "مشاوره فناوری اطلاعات",
      "projects.filter.security": "امنیت اطلاعات",
      "projects.filter.website": "توسعه وب سایت",
      "projects.filter.design": "طراحی UI/UX",
      "projects.filter.cloud": "خدمات ابری",
      "projects.filter.development": "توسعه",
      "pricing.title": "قیمت",
      "pricing.text": "با مشاوره تیم ما، پروژه خود را شروع کنید. سعی خواهیم کرد تمام جنبه های کار شما را بررسی و بهترین پیشنهاد را ارائه دهیم.",
      "pricing.contact": "ارتباط",
      "pricing.contact.extra": "با ما!",
      "pricing.contact.cta": "برای اطلاعات بیشتر تماس بگیرید",
      "pricing.plan1.title": "استاندارد",
      "pricing.plan1.subtitle": "فروشگاهی پایه",
      "pricing.plan1.amount": "50 میلیون تومان",
      "pricing.plan1.duration": "سالانه",
      "pricing.plan1.cta": "به این طرح نیاز دارید؟",
      "pricing.plan2.title": "فروشگاهی",
      "pricing.plan2.amount": "80 میلیون تومان",
      "pricing.plan2.duration": "سالانه",
      "pricing.plan2.cta": "به این طرح نیاز دارید؟",
      "pricing.blog.title": "مجله هیوا",
      "blog.all": "همه مقاله‌ها",
      "banner.title": "ایده‌ی شما ارزش اجرا دارد؛ با راهکارهای درست، رشد واقعی را تجربه کنید",
      "banner.subtitle": "از طراحی برند و تجربه کاربری تا اجرای استراتژی دیجیتال، تیم هیوا به‌صورت هدفمند و قابل‌اجرا همراه شماست.",
      "banner.consult": "مشاوره رایگان",
      "banner.portfolio": "نمونه‌کارها",
      "about.title1": "درباره شرکت ما",
      "about.main.title": "با ما",
      "about.main.highlight": "مدرن شوید",
      "about.system.title": "آبان - سامانه خدمات آبفا",
      "about.system.heading": "آبان",
      "about.system.highlight": "برای شرکت های آبفا",
      "about.system.text": "سامانه آبان به منظور قرائت کنتورهای آب طراحی و پیاده سازی شده است. داشبورد مدیریتی، واسط کاربری مدرن، گزارش های متنوع و مکانمند بودن تنها بخشی از امکانات این سیستم است.",
      "about.contact": "ارتباط با ما",
      "contact.title": "با ما در تماس",
      "contact.title2": "باشید",
      "contact.subtitle": "توسعه، پشتیبانی و مشاوره نرم افزار",
      "contact.required": "فیلد های ستاره دار الزامی هستند",
      "contact.name": "نام *",
      "contact.email": "ایمیل *",
      "contact.phone": "شماره تماس (اختیاری)",
      "contact.website": "وب سایت شما (اختیاری)",
      "contact.message": "در چه زمینه ای نیاز به همفکری دارید؟ *",
      "contact.submit": "ثبت درخواست",
      "contact.success": "پیام شما با موفقیت ارسال شد.",
      "contact.location": "ایران - اصفهان",
      "contact.email.address": "info@hiwapardaz.ir",
      "contact.phone.display": "031-32121764",
      "footer.brand": "هیوا پرداز اطلس - مدرن بمانید",
      "footer.info": "اطلاعات",
      "footer.location": "اصفهان ، ایران",
      "footer.phone": "031-32121764",
      "footer.email": "infohivaatlas@gmail.com",
      "footer.links": "لینک های مفید",
      "footer.home": "خانه",
      "footer.about": "درباره ما",
      "footer.projects": "پروژه ها",
      "footer.certificates": "مجوزها/ مدارک",
      "footer.contact": "ارتباط با ما",
      "footer.services": "خدمات",
      "footer.services.it": "مشاوره فناوری اطلاعات",
      "footer.services.dev": "توسعه",
      "footer.services.ai": "یادگیری ماشین هوش مصنوعی",
      "footer.services.security": "امنیت داده ها",
      "footer.services.cloud": "خدمات ابری",
      "footer.language": "زبان",
      "footer.copyright": "هیوا پرداز اطلس",
      "about.feature.security": "مقابله با تهدیدات سایبری و نگهداری امن از داده ها",
      "about.feature.support": "پشتیبانی گسترده ی روش های ارتباطی",
      "about.feature.monitoring": "پایش افراد و داده ها",
      "about.feature.process": "فرایند محور",
      "about.feature.dynamic": "تنظیمات پویا",
      "about.feature.inspection": "گزارش های بازرسی و پیمایش آحاد، کاربری ها، اصناف، موبایل و...",
      "about.mobile.title": "اپلیکیشن همراه آبفا",
      "about.mobile.heading": "همراه آبفا",
      "about.mobile.highlight": "برای شرکت های آبفا",
      "about.mobile.text": "اطلاعات بصری و آماری از نحوه مصرف آب، میزان مصرف بهینه آب، نحوه پرداخت، میزان خوش حسابی و ... کسب اطلاع نمایید",
      "about.mobile.feature1": "استعلام قبض آب و پرداخت دسته جمعی قبوض",
      "about.mobile.feature2": "در صورت مشاهده مصرف بی‌رویه آب از جمله شستشوی معابر، نشت کولر، پرسازی استخری، شستشوی فرش و از همه مهم‌تر انشعاب غیر مجاز و نصب پمپ مستقیم برروی شبکه اطلاع‌رسانی نمایید",
      "about.mobile.feature3": "ثبت حادثه در کوتاه‌ترین زمان",
      "about.team.title": "کار گروهی",
      "about.team.heading": "تیم",
      "about.team.heading2": "ما",
      "about.culture.title": "فلسفه ما",
      "about.culture.heading": "فرهنگ",
      "about.culture.heading2": "ما را کشف کنید",
      "about.culture.subtitle": "20 شرکت ما را انتخاب کرده‌اند",
      "certificates.title": "مجوزها",
      "certificates.heading": "مجوزها و مدارک",
      "certificates.feature.title": "افتا، امنیت فضای تولید و تبادل اطلاعات",
      "certificates.feature.item1": "گواهی ارزیابی امنیتی محصول",
      "certificates.feature.item2": "مجوز فعالیت سازمان نظام صنفی رایانه‌ای گشور",
      "certificates.feature.download": "دانلود سند هدف امنیتی محصول افتا",
      "certificates.feature.download.name": "سند هدف امنیتی - شرکت هیوا پرداز اطلس",
      "projects.card.security.title": "امنیت",
      "projects.card.security.tagline": "امنیت اطلاعات و نرم افزار",
      "projects.card.security.text": "دریافت مدرک امنیت فضای تبادل اطلاعات برای محصول، تضمین کننده حفظ امنیت محصولات شما",
      "projects.card.assessment.title": "طراحی، توسعه و پشتیبانی",
      "projects.card.assessment.tagline": "نرم افزار ارزیابی",
      "projects.card.assessment.text": "جهت امکان سنجی موقعیت جغرافیایی برای ماموران ارزیابی.",
      "projects.card.read.title": "طراحی، توسعه و پشتیبانی",
      "projects.card.read.tagline": "نرم افزار قرائت کنتور",
      "projects.card.read.text": "نرم افزار قرائت، برای قرائت کنتور های آب",
      "projects.card.web.title": "طراحی، توسعه و پشتیبانی",
      "projects.card.web.tagline": "وب سایت سامانه جامع قرائت",
      "projects.card.web.text": "داشبورد مدیریتی، واسط کاربری مدرن، گزارش های متنوع و مکانمند بودن تنها بخشی از امکانات این سیستم است",
      "projects.card.hamrah.title": "طراحی، توسعه و پشتیبانی",
      "projects.card.hamrah.tagline": "همراه آبفا",
      "projects.card.hamrah.text": "داشبورد مدیریتی، واسط کاربری مدرن، گزارش های متنوع و مکانمند بودن تنها بخشی از امکانات این سیستم است",
      "projects.card.landing.title": "صفحه فرود کریفتوسی",
      "projects.card.landing.tagline": "توسعه وب سایت، طراحی UI/UX",
      "projects.card.landing.text": "برای حذف نقاط دردناک گردش کار، پیاده‌سازی فناوری و برنامه جدید، به ذهن برتر ما اعتماد کنید.",
      "projects.card.okpay.title": "کیف پول الکترونیکی Okpay بهینه",
      "projects.card.okpay.tagline": "آنالیز سئو",
      "projects.card.okpay.text": "برای حذف نقاط دردناک گردش کار، پیاده‌سازی فناوری و برنامه جدید، به ذهن برتر ما اعتماد کنید.",
      "thankyou.note": "از تماس شما سپاسگزاریم. تیم ما در کوتاه‌ترین زمان ممکن با شما تماس خواهد گرفت.",
      "common.back_home": "بازگشت به صفحه اصلی"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.certificates": "Certificates",
      "nav.contact": "Contact",
      "hero.title": "Modernize with Hiwa",
      "hero.subtitle": "We help you with software development, support, and consulting",
      "hero.cta": "For a free consultation!",
      "hero.cta.sub": "Contact us or send us an email",
      "hero.form.email": "Your email *",
      "hero.form.submit": "Submit consultation request",
      "hero.form.select.company": "We are a company or organization",
      "hero.form.select.personal": "I need a personal project",
      "hero.form.select.consult": "I need consultation",
      "services.title": "Our Main Services",
      "services.heading": "Our Main Services",
      "services.all": "All services",
      "services.card1.title": "Software Development",
      "services.card1.text": "We provide complete IT solutions tailored to your business",
      "services.card1.cta": "View projects",
      "services.card2.title": "Data Security",
      "services.card2.text": "Big data analysis, reporting, and resolving issues proactively",
      "services.card3.title": "IT Consulting",
      "services.card4.title": "Machine Learning & AI",
      "services.card4.text": "Bring AI and machine learning into your business to improve quality and efficiency",
      "services.page.title": "About our services",
      "services.page.subtitle": "We provide complete IT solutions tailored to your business.",
      "services.page.feature1": "Working hours",
      "services.page.feature2": "Coupon management",
      "services.page.feature3": "Product management",
      "services.page.feature4": "Support system",
      "services.page.feature5": "Membership subscription",
      "services.page.feature6": "Invoice and shipping",
      "projects.page.title": "Completed",
      "projects.page.title2": "projects",
      "projects.page.subtitle": "We are a team with experience in development and support.",
      "projects.filter.all": "All",
      "projects.filter.consultation": "IT consulting",
      "projects.filter.security": "Information security",
      "projects.filter.website": "Website development",
      "projects.filter.design": "UI/UX design",
      "projects.filter.cloud": "Cloud services",
      "projects.filter.development": "Development",
      "pricing.title": "Pricing",
      "pricing.text": "Start your project with our team’s guidance. We’ll review every aspect of your work and provide the best recommendation.",
      "pricing.contact": "Contact",
      "pricing.contact.extra": "with us!",
      "pricing.contact.cta": "Contact us for more information",
      "pricing.plan1.title": "Standard",
      "pricing.plan1.subtitle": "Basic e-commerce",
      "pricing.plan1.amount": "50 million toman",
      "pricing.plan1.duration": "Annual",
      "pricing.plan1.cta": "Need this plan?",
      "pricing.plan2.title": "E-commerce",
      "pricing.plan2.amount": "80 million toman",
      "pricing.plan2.duration": "Annual",
      "pricing.plan2.cta": "Need this plan?",
      "pricing.blog.title": "Hiwa Journal",
      "blog.all": "All articles",
      "banner.title": "Your idea deserves execution; with the right solutions, you’ll experience real growth",
      "banner.subtitle": "From brand design and UX to digital strategy execution, the Hiwa team is with you in a focused and practical way.",
      "banner.consult": "Free consultation",
      "banner.portfolio": "Portfolio",
      "about.title1": "About our company",
      "about.main.title": "Stay",
      "about.main.highlight": "modern with us",
      "about.system.title": "Aban - Water Utility Services System",
      "about.system.heading": "Aban",
      "about.system.highlight": "for water companies",
      "about.system.text": "The Aban system was designed and implemented for reading water meters. The admin dashboard, modern interface, diverse reports, and geolocation are just some of its capabilities.",
      "about.contact": "Contact us",
      "about.feature.security": "Fight cyber threats and keep data secure",
      "about.feature.support": "Extensive support for communication channels",
      "about.feature.monitoring": "Monitoring people and data",
      "about.feature.process": "Process-driven",
      "about.feature.dynamic": "Dynamic settings",
      "about.feature.inspection": "Inspection and navigation reports for users, guilds, mobile and more",
      "about.mobile.title": "Aban mobile app",
      "about.mobile.heading": "Aban",
      "about.mobile.highlight": "for water companies",
      "about.mobile.text": "Visual and statistical information about water consumption, optimized usage, payments, credit status and more.",
      "about.mobile.feature1": "Water bill inquiry and group payment",
      "about.mobile.feature2": "Notify about unnecessary water use such as street washing, cooler leakage, swimming pool refilling, carpet cleaning, unauthorized branches, and direct pump installation on the network",
      "about.mobile.feature3": "Report incidents in the shortest time",
      "about.team.title": "Teamwork",
      "about.team.heading": "Team",
      "about.team.heading2": "Us",
      "about.culture.title": "Our philosophy",
      "about.culture.heading": "Culture",
      "about.culture.heading2": "Discover our culture",
      "about.culture.subtitle": "20 companies chose us",
      "certificates.title": "Certificates",
      "certificates.heading": "Certificates and documents",
      "certificates.feature.title": "Afata, secure production and information exchange",
      "certificates.feature.item1": "Product security assessment certificate",
      "certificates.feature.item2": "License to operate from the Computer Guild of Iran",
      "certificates.feature.download": "Download Afata product security objective document",
      "certificates.feature.download.name": "Hiwa Pardaz Atlas security objective document",
      "projects.card.security.title": "Security",
      "projects.card.security.tagline": "Information security and software",
      "projects.card.security.text": "Receive a secure exchange environment certificate for the product, ensuring the security of your products.",
      "projects.card.assessment.title": "Design, development and support",
      "projects.card.assessment.tagline": "Assessment software",
      "projects.card.assessment.text": "For geolocation feasibility checks for evaluation officers.",
      "projects.card.read.title": "Design, development and support",
      "projects.card.read.tagline": "Water meter reading software",
      "projects.card.read.text": "Meter reading software for water meter reading.",
      "projects.card.web.title": "Design, development and support",
      "projects.card.web.tagline": "Comprehensive reading system website",
      "projects.card.web.text": "Admin dashboard, modern interface, various reports, and geolocation are just some of the benefits of this system.",
      "projects.card.hamrah.title": "Design, development and support",
      "projects.card.hamrah.tagline": "Hamrah Abfa",
      "projects.card.hamrah.text": "Admin dashboard, modern interface, various reports, and geolocation are just some of the benefits of this system.",
      "projects.card.landing.title": "Criftosi landing page",
      "projects.card.landing.tagline": "Website development, UI/UX design",
      "projects.card.landing.text": "Trust our smart minds to eliminate workflow pain points and implement new technology and programs.",
      "projects.card.okpay.title": "Optimized Okpay electronic wallet",
      "projects.card.okpay.tagline": "SEO analysis",
      "projects.card.okpay.text": "Trust our smart minds to eliminate workflow pain points and implement new technology and programs.",
      "contact.title": "Contact us",
      "contact.title2": "",
      "contact.subtitle": "Software development, support, and consulting",
      "contact.required": "Required fields are marked with an asterisk",
      "contact.name": "Name *",
      "contact.email": "Email *",
      "contact.phone": "Phone number (optional)",
      "contact.website": "Your website (optional)",
      "contact.message": "In what area do you need collaboration? *",
      "contact.submit": "Submit request",
      "contact.success": "Your message was sent successfully.",
      "contact.location": "Iran - Isfahan",
      "contact.email.address": "info@hiwapardaz.ir",
      "contact.phone.display": "+98 31 32121764",
      "footer.brand": "Hiwa Pardaz Atlas - Stay modern",
      "footer.info": "Information",
      "footer.location": "Isfahan, Iran",
      "footer.phone": "031-32121764",
      "footer.email": "infohivaatlas@gmail.com",
      "footer.links": "Useful links",
      "footer.home": "Home",
      "footer.about": "About us",
      "footer.projects": "Projects",
      "footer.certificates": "Certificates",
      "footer.contact": "Contact us",
      "footer.services": "Services",
      "footer.services.it": "IT Consulting",
      "footer.services.dev": "Development",
      "footer.services.ai": "Machine Learning & AI",
      "footer.services.security": "Data Security",
      "footer.services.cloud": "Cloud Services",
      "footer.language": "Language",
      "footer.copyright": "Hiwa Pardaz Atlas",
      "thankyou.note": "Thank you for contacting us. Our team will get back to you as soon as possible.",
      "common.back_home": "Back to homepage"
    }
  };

  function showLanguageNotice(lang) {
    let toast = document.getElementById('lang-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'lang-toast';
      toast.style.position = 'fixed';
      toast.style.right = '20px';
      toast.style.bottom = '20px';
      toast.style.zIndex = '99999';
      toast.style.background = '#1f417d';
      toast.style.color = '#fff';
      toast.style.padding = '10px 16px';
      toast.style.borderRadius = '999px';
      toast.style.fontSize = '13px';
      toast.style.boxShadow = '0 12px 28px rgba(32, 64, 118, 0.18)';
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.25s ease';
      document.body.appendChild(toast);
    }

    const label = lang === 'en' ? 'Language changed to English' : 'زبان به فارسی تغییر کرد';
    toast.textContent = label;
    toast.style.opacity = '1';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
      toast.style.opacity = '0';
    }, 1800);
  }

  function getCurrentLang() {
    const savedLang = localStorage.getItem(STORAGE_KEY);
    return savedLang && (savedLang === 'en' || savedLang === 'fa') ? savedLang : defaultLang;
  }

  function applyTranslations(lang) {
    const langMap = translations[lang] || translations[defaultLang] || {};
    document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.dataset.i18n;
      const value = langMap[key];
      if (value === undefined) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value || '';
      } else {
        el.textContent = value || '';
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.dataset.i18nPlaceholder;
      const value = langMap[key];
      if (value === undefined) return;
      el.placeholder = value || '';
    });

    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const languageButton = document.querySelector('[data-language-toggle]');
    if (languageButton) {
      languageButton.setAttribute('aria-label', lang === 'en' ? 'English' : 'فارسی');
    }
  }

  function setLanguage(nextLang) {
    if (!nextLang) return;
    localStorage.setItem(STORAGE_KEY, nextLang);
    applyTranslations(nextLang);
    showLanguageNotice(nextLang);
    document.dispatchEvent(new CustomEvent('lang:updated', { detail: { lang: nextLang } }));
  }

  function bindLanguageSwitchers() {
    document.addEventListener('click', function (event) {
      const trigger = event.target.closest('[data-lang]');
      if (!trigger) return;
      event.preventDefault();
      setLanguage(trigger.dataset.lang);
    });
  }

  function initI18n() {
    const lang = getCurrentLang();
    applyTranslations(lang);
    bindLanguageSwitchers();
  }

  window.addEventListener('storage', function (event) {
    if (event.key === STORAGE_KEY && event.newValue) {
      applyTranslations(event.newValue);
      showLanguageNotice(event.newValue);
    }
  });

  document.addEventListener('lang:updated', function (event) {
    applyTranslations(event.detail.lang);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
  document.addEventListener('includesLoaded', initI18n);
})();
