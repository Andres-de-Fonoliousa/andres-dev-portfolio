import { ref, computed } from 'vue'

export const messages = {
  en: {
    nav: {
      about: 'ABOUT',
      work: 'WORK',
      stack: 'STACK',
      faq: 'FAQ',
      contact: 'CONTACT',
    },
    hero: {
      eyebrow: 'Full-Stack Developer • Laravel • Vue • Python',
      lines: ['I learn fast.', 'I ship faster.'],
      sub: "I'm Yazan (CoreX) — a self-taught full-stack developer building production systems with Laravel, Vue and Python. My e-commerce platform runs live in production, my Telegram bots work 24/7, and I'm ready to own features end-to-end for your team. Mid-level, remote, UTC+3.",
      cta1: 'Hire Me',
      cta2: 'View GitHub',
      meta: 'Open to mid-level full-stack roles — remote, immediate start.',
      terminal: [
        { text: '<span class="code-kw">$</span> php artisan serve --port=80' },
        { text: '<span class="code-kw">$</span> python3 bot2/main.py', ok: true },
        { result: 'LIVE', text: 'corexgaming.duckdns.org — store serving customers' },
        { result: 'OK', text: 'Telegram store bot running' },
      ],
    },
    about: {
      label: 'About',
      heading: 'How I got here',
      p1: "I didn't start with a computer science degree — I started with a problem I wanted to solve, and learned by shipping. What began as a side project became CoreS: a real e-commerce platform with a REST API, Redis caching and a Telegram store bot — deployed on my own Ubuntu server and serving real customers today.",
      p2: 'Since then I keep building: async Telegram bots, a Three.js + MediaPipe 3D viewer, and now I am architecting CoreS into a multi-tenant platform — isolated databases per tenant on a shared codebase.',
      p3: 'What I bring beyond code: clean, readable work; honest async communication; and ownership of features from the first line to the last deploy.',
      chips: ['Production', 'REST APIs', 'Async bots', 'Multi-tenancy', 'Ubuntu', 'Remote-ready'],
    },
    skills: {
      label: 'Stack',
      heading: 'Tools I use in production',
      sub: 'Every tool here runs in production right now — in CoreS or my bots. No experiments. No hobbies marketed as skills.',
      proficiency: 'Proficiency',
      techs: [
        { name: 'Laravel', pct: 95 },
        { name: 'Vue 3', pct: 92 },
        { name: 'Tailwind CSS', pct: 90 },
        { name: 'Python', pct: 85 },
        { name: 'MySQL/PostgreSQL', pct: 85 },
        { name: 'Redis', pct: 78 },
        { name: 'Docker', pct: 72 },
        { name: 'Git/GitHub', pct: 95 },
      ],
    },
    work: {
      label: 'Projects',
      heading1: 'Real projects,',
      heading2: 'running in production.',
      p1: {
        tag: 'Laravel • Vue • Multi-Tenancy',
        title: 'CoreS — E-Commerce Platform',
        desc: 'Started as a complete single storefront — live in production on my own Ubuntu server with real customers. Now being rebuilt into a multi-tenant SaaS: one codebase, many stores, isolated data for each tenant.',
        points: [
          'Live in production — visit the store directly',
          'REST API + Redis caching, deployed on Ubuntu',
          'Vue 3 + Tailwind admin dashboard',
          'Multi-tenant architecture in progress',
        ],
        status: 'LIVE IN PRODUCTION • MULTI-TENANCY IN PROGRESS',
        link: 'Visit the live store',
        href: 'https://corexgaming.duckdns.org',
      },
      p2: {
        tag: 'Python • Async • Automation',
        title: 'Telegram Store Bot',
        desc: 'An async bot that runs a full storefront inside Telegram: browsing, cart, orders — with OTP-based user linking and direct integration with the Laravel REST API.',
        points: [
          'aiogram async architecture',
          'Full cart & order management',
          'OTP user linking',
          'Laravel API integration',
        ],
        status: 'OPERATIONAL • RUNNING 24/7',
        link: '',
        href: '#',
      },
      p3: {
        tag: 'Three.js • MediaPipe • WebGL',
        title: '3D Brawler Viewer',
        desc: 'An interactive 3D card viewer with hand-tracking gestures — a project that shows I can step outside my usual stack and build something playful.',
        points: [],
        status: 'PERSONAL PROJECT',
        link: '',
        href: '#',
      },
      chat: [
        { who: 'bot', text: 'New order received: <b>#4921</b>' },
        { who: 'bot', text: 'Inventory updated automatically.' },
        { who: 'user', text: "Show me today's revenue." },
        { who: 'bot', text: '$4,231 • 23 orders • 2 refunds', mono: true },
      ],
    },
    why: {
      label: 'As a teammate',
      heading: 'What you get when I join',
      cards: [
        {
          title: 'Ship first, improve after',
          body: 'I build the smallest working version, deploy it, then iterate. Running software beats perfect architecture on a whiteboard.',
        },
        {
          title: 'Code that reads well',
          body: 'Clean structure, meaningful names, comments that explain the why. The next developer to touch my code is always my user.',
        },
        {
          title: 'Honest, on-time updates',
          body: 'Status in writing, on schedule, no guesswork. If there is a problem, you hear about it early — not after the deadline.',
        },
        {
          title: 'Feature ownership',
          body: 'From schema to deployment, I own features end-to-end — including the unglamorous parts like testing and docs.',
        },
      ],
    },
    contact: {
      heading: "Let's build something real",
      sub: "If your team needs a full-stack developer who takes ownership and ships — I'm available now. Mid-level Laravel/Vue/Python. I reply in hours, not days.",
      cta1: 'Hire Me',
      cta2: 'View GitHub',
      labels: {
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        location: 'Location',
      },
      location: 'Remote • UTC+3',
    },
    faq: {
      label: 'FAQ',
      heading: 'Questions a hiring team might ask',
      items: [
        {
          q: 'Are you really self-taught?',
          a: 'Completely. No bootcamp, no degree — I learned by building and shipping. CoreS (a live e-commerce platform) and my Telegram bots are results you can verify yourself.',
        },
        {
          q: 'Is CoreS actually live in production?',
          a: 'Yes. It runs on my own Ubuntu server with a real domain. Open the link in the projects section — products, orders and Telegram notifications are all real.',
        },
        {
          q: 'What exactly is the multi-tenant project?',
          a: "I am evolving CoreS from a single storefront into a platform: one codebase, many stores, isolated databases and configs per tenant. It's where I do my deepest architecture work.",
        },
        {
          q: 'Would you fit an async remote team?',
          a: 'Very well. I write everything down, keep work visible, and communicate through Slack, issues and Loom. I am in UTC+3 — overlapping with teams across Europe, the Middle East and Asia.',
        },
        {
          q: 'What level of role are you looking for?',
          a: 'Mid-level full-stack, Laravel/Vue/Python. I can own features and small projects independently, and I am honest about what I am still learning.',
        },
        {
          q: 'How do you handle code reviews and feedback?',
          a: "Well — I write code to be read. Reviews improve the work, and I respond with focused changes, not ego. It's how I've grown fastest.",
        },
      ],
    },
    footer: {
      built: 'Built with Vue, Tailwind, and coffee.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
  },

  ar: {
    nav: {
      about: 'عنّي',
      work: 'الأعمال',
      stack: 'التقنيات',
      faq: 'أسئلة',
      contact: 'تواصل',
    },
    hero: {
      eyebrow: 'مطوّر فول ستاك • لارافيل • فيو • بايثون',
      lines: ['أتعلّم بسرعة.', 'أُسلّم أسرع.'],
      sub: 'أنا يزن (CoreX) — مطوّر فول ستاك تعلّم ذاتياً، أبني أنظمة إنتاجية بـ لارافيل وفيو وبايثون. منصة التجارة الإلكترونية الخاصة بي تعمل الآن في الإنتاج، وبوتات تيليجرام تشتغل على مدار الساعة، وأنا مستعد لامتلاك الميزات من البداية إلى النهاية ضمن فريقك. خبرة متوسطة، عن بُعد، UTC+3.',
      cta1: 'وظّفني',
      cta2: 'شاهد GitHub',
      meta: 'متاح لوظائف فول ستاك عن بُعد — بدء فوري.',
      terminal: [
        { text: '<span class="code-kw">$</span> php artisan serve --port=80' },
        { text: '<span class="code-kw">$</span> python3 bot2/main.py', ok: true },
        { result: 'يعمل', text: 'corexgaming.duckdns.org — المتجر يخدم عملاء حقيقيين' },
        { result: 'تم', text: 'بوت متجر تيليجرام يعمل الآن' },
      ],
    },
    about: {
      label: 'عنّي',
      heading: 'كيف وصلت إلى هنا',
      p1: 'لم أبدأ بشهادة في علوم الحاسوب — بدأت بمشكلة أردت حلها، وتعلّمت من خلال الإطلاق الفعلي. ما بدأ كمشروع جانبي أصبح CoreS: منصة تجارة إلكترونية حقيقية بواجهة REST API وتخزين مؤقت Redis وبوت تيليجرام للمتجر — منشورة على خادمي الخاص وتخدم عملاء حقيقيين اليوم.',
      p2: 'ومنذ ذلك الحين واصلت البناء: بوتات تيليجرام غير متزامنة، عارض ثلاثي الأبعاد بـ Three.js وMediaPipe، والآن أعيد هندسة CoreS لتصبح منصة متعددة المستأجرين — قواعد بيانات معزولة لكل متجر في قاعدة كود واحدة.',
      p3: 'ما أضيفه بعد الكود: عمل نظيف قابل للقراءة، تواصل صادق غير متزامن، وامتلاك كامل للميزات من أول سطر حتى آخر عملية نشر.',
      chips: ['إنتاج حقيقي', 'REST APIs', 'بوتات غير متزامنة', 'تعددية المتاجر', 'Ubuntu', 'جاهز للعمل عن بُعد'],
    },
    skills: {
      label: 'التقنيات',
      heading: 'أدوات أستخدمها في الإنتاج',
      sub: 'كل أداة هنا تعمل في الإنتاج الآن — في CoreS أو البوتات. لا تجارب، ولا هوايات تُسوَّق كمهارات.',
      proficiency: 'درجة الإتقان',
      techs: [
        { name: 'Laravel', pct: 95 },
        { name: 'Vue 3', pct: 92 },
        { name: 'Tailwind CSS', pct: 90 },
        { name: 'Python', pct: 85 },
        { name: 'MySQL/PostgreSQL', pct: 85 },
        { name: 'Redis', pct: 78 },
        { name: 'Docker', pct: 72 },
        { name: 'Git/GitHub', pct: 95 },
      ],
    },
    work: {
      label: 'مشاريع',
      heading1: 'مشاريع حقيقية،',
      heading2: 'تشتغل الآن في الإنتاج.',
      p1: {
        tag: 'لارافيل • فيو • تعددية المتاجر',
        title: 'CoreS — منصة تجارة إلكترونية',
        desc: 'بدأت متجراً واحداً مكتملاً — يعمل في الإنتاج على خادمي الخاص بعملاء حقيقيين. والآن أعيد بناءه ليصبح منصة SaaS متعددة المتاجر: قاعدة كود واحدة، متاجر متعددة، وبيانات معزولة لكل متجر.',
        points: [
          'حيّ في الإنتاج — زُر المتجر مباشرة',
          'REST API + Redis، منشور على Ubuntu',
          'لوحة تحكم Vue 3 + Tailwind',
          'بنية تعددية المتاجر قيد التنفيذ',
        ],
        status: 'في الإنتاج • تعددية المتاجر قيد التنفيذ',
        link: 'زُر المتجر الحي',
        href: 'https://corexgaming.duckdns.org',
      },
      p2: {
        tag: 'بايثون • غير متزامن • أتمتة',
        title: 'بوت متجر تيليجرام',
        desc: 'بوت غير متزامن يدير متجراً كاملاً داخل تيليجرام: تصفح، سلة، طلبات — مع ربط المستخدمين عبر OTP وتكامل مباشر مع واجهة لارافيل.',
        points: [
          'بنية aiogram غير متزامنة',
          'إدارة كاملة للسلة والطلبات',
          'ربط المستخدمين عبر OTP',
          'تكامل مع Laravel API',
        ],
        status: 'يعمل الآن • على مدار الساعة',
        link: '',
        href: '#',
      },
      p3: {
        tag: 'Three.js • MediaPipe • WebGL',
        title: 'عارض شخصيات ثلاثي الأبعاد',
        desc: 'تجربة تفاعلية ثلاثية الأبعاد مع تتبع اليدين عبر MediaPipe — مشروع يثبت أنني أتجاوز أدواتي المعتادة وأبني واجهات ممتعة.',
        points: [],
        status: 'مشروع شخصي',
        link: '',
        href: '#',
      },
      chat: [
        { who: 'bot', text: 'وصل طلب جديد: <b>#4921</b>' },
        { who: 'bot', text: 'تم تحديث المخزون تلقائياً.' },
        { who: 'user', text: 'اعرض لي إيرادات اليوم.' },
        { who: 'bot', text: '$4,231 • 23 طلباً • استردادان', mono: true },
      ],
    },
    why: {
      label: 'كزميل فريق',
      heading: 'ماذا تحصل عليه عندما أنضم إليكم',
      cards: [
        {
          title: 'أُسلّم أولاً، أحسّن لاحقاً',
          body: 'أبني أصغر نسخة تعمل، أنشرها، ثم أطوّرها. البرنامج الذي يعمل يسبق البنية المثالية على الورق.',
        },
        {
          title: 'كود يُقرأ بسهولة',
          body: 'بنية نظيفة، أسماء ذات معنى، وتعليقات تشرح «لماذا» لا «ماذا». الزميل الذي يقرأ كودي بعدي هو مستخدمي الأول.',
        },
        {
          title: 'تحديثات صادقة وفي وقتها',
          body: 'الحالة مكتوبة وفي موعدها، بلا تخمين. إن وُجدت مشكلة، تسمع عنها مبكراً — لا بعد فوات الموعد.',
        },
        {
          title: 'ملكية كاملة للميزات',
          body: 'من مخطط قاعدة البيانات حتى النشر: أملك الميزة بالكامل، بما فيه الأجزاء غير الممتعة كالاختبار والتوثيق.',
        },
      ],
    },
    contact: {
      heading: 'لنبنِ شيئاً حقيقياً',
      sub: 'إذا كان فريقك يحتاج مطوّر فول ستاك يمتلك الميزات ويُسلّم — أنا متاح الآن. لارافيل وفيو وبايثون بمستوى متوسط. أردّ خلال ساعات، لا أيام.',
      cta1: 'وظّفني',
      cta2: 'شاهد GitHub',
      labels: {
        email: 'البريد الإلكتروني',
        github: 'GitHub',
        linkedin: 'لينكدإن',
        location: 'الموقع',
      },
      location: 'عن بُعد • UTC+3',
    },
    faq: {
      label: 'الأسئلة الشائعة',
      heading: 'أسئلة قد تطرحها جهة توظيف',
      items: [
        {
          q: 'هل تعلّمت ذاتياً فعلاً؟',
          a: 'بالتأكيد. لا شهادة ولا معسكر تدريبي — تعلّمت بالبناء والإطلاق الفعلي. CoreS (منصة التجارة الإلكترونية الحية) وبوتات تيليجرام هي نتائج يمكنك التحقق منها بنفسك.',
        },
        {
          q: 'هل CoreS يعمل فعلاً في الإنتاج؟',
          a: 'نعم. يعمل على خادم Ubuntu خاص بي بنطاق حقيقي. افتح الرابط في قسم المشاريع — المنتجات والطلبات وإشعارات تيليجرام كلها حقيقية.',
        },
        {
          q: 'ما هو مشروع تعددية المتاجر بالضبط؟',
          a: 'أعيد بناء CoreS من متجر واحد إلى منصة: قاعدة كود واحدة، متاجر متعددة، وقواعد بيانات وإعدادات معزولة لكل متجر. هو المشروع الذي أقوم فيه بأعمق عمل معمارية.',
        },
        {
          q: 'هل تناسب فريقاً عن بُعد يعمل بشكل غير متزامن؟',
          a: 'جداً. أكتب كل شيء، وأبقي العمل مرئياً، وأتواصل عبر Slack والبريد وGitHub. توقيتي UTC+3 يتداخل مع فرق أوروبا والشرق الأوسط وآسيا.',
        },
        {
          q: 'أي مستوى من الوظائف تبحث عنه؟',
          a: 'فول ستاك بمستوى متوسط: Laravel/Vue/Python. أستطيع امتلاك الميزات والمشاريع الصغيرة بشكل مستقل، وأنا صريح فيما ما زلت أتعلمه.',
        },
        {
          q: 'كيف تتعامل مع مراجعة الكود والملاحظات؟',
          a: 'بشكل جيد — أكتب كوداً ليُقرأ. المراجعات تحسّن العمل، وأرد بتغييرات مركزة لا بأنانية. هكذا نميتُ بأسرع ما يمكن.',
        },
      ],
    },
    footer: {
      built: 'بُني بـ Vue وTailwind... والكثير من القهوة.',
      github: 'GitHub',
      linkedin: 'لينكدإن',
      email: 'البريد',
    },
  },
}

const stored = (() => {
  try {
    return localStorage.getItem('lang')
  } catch {
    return null
  }
})()

export const lang = ref(stored === 'ar' ? 'ar' : 'en')

function apply() {
  document.documentElement.lang = lang.value
  document.documentElement.dir = lang.value === 'ar' ? 'rtl' : 'ltr'
}
apply()

export function setLang(next) {
  lang.value = next
  try {
    localStorage.setItem('lang', next)
  } catch {}
  apply()
}

export function useI18n(namespace) {
  return computed(() => messages[lang.value][namespace])
}