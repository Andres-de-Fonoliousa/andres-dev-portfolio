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
      lines: ['I design, build and ship', 'complete systems —', 'from schema to deploy.'],
      sub: "I'm Yazan (CoreX) — a full-stack developer working with Laravel, Vue and Python. I've designed and built e-commerce platforms, automation bots and admin dashboards: databases, REST APIs, front-ends, deployments — the whole stack. I own features end-to-end, and I'm ready to do it for your team. Remote, UTC+3.",
      cta1: 'Hire Me',
      cta2: 'View GitHub',
      meta: 'Open to mid-level full-stack roles — remote, immediate start.',
      terminal: [
        { text: '<span class="code-kw">$</span> ls ~/repos', result: '' },
        { name: 'corex-store/', note: 'Laravel • Vue • REST API • multi-tenant platform' },
        { name: 'bot2/', note: 'Python • aiogram • async store bot' },
        { name: '3d-viewer/', note: 'Three.js • MediaPipe • WebGL' },
      ],
    },
    about: {
      label: 'About',
      heading: 'Who I am',
      p1: 'I build complete products, not fragments. CoreS began as one idea and became a full system — this is how it goes together:',
      p3: 'The standard I hold: code that reads clearly, features owned to the last deploy, and communication that keeps everyone oriented.',
      diagram: [
        { name: 'Database', note: 'Schema & migrations' },
        { name: 'REST API', note: 'Laravel backend' },
        { name: 'Redis', note: 'Cache & queues' },
        { name: 'Dashboard', note: 'Vue 3 + Tailwind' },
        { name: 'Deploy', note: 'Ubuntu server' },
        { name: 'Telegram Bot', note: 'Orders & alerts' },
      ],
      chips: ['End-to-end builds', 'REST APIs', 'Async systems', 'Multi-tenancy', 'Self-hosted infra', 'UTC+3 remote'],
    },
    skills: {
      label: 'Stack',
      heading: 'The stack behind complete systems',
      sub: 'Every tool here is part of systems I have designed and built end-to-end — platforms, bots and dashboards. No experiments listed as skills.',
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
      heading1: 'Complete systems,',
      heading2: 'built end-to-end.',
      p1: {
        tag: 'Laravel • Vue • Multi-Tenancy',
        title: 'CoreS — Multi-Tenant E-Commerce Platform',
        desc: "A complete e-commerce platform I designed and built from scratch: Laravel REST API, Redis caching, Vue admin dashboard and Telegram store notifications. It served real customers in production and is now being rebuilt as a multi-tenant SaaS — one codebase, many stores, isolated data.",
        points: [
          'Full design: schema, REST API, dashboard, deployment',
          'Redis caching + queue jobs, self-hosted on Ubuntu',
          'Vue 3 + Tailwind admin dashboard',
          'Multi-tenant architecture — isolated data per store',
          'Served real customers in production',
        ],
        status: 'FULL SOURCE ON GITHUB',
        link: 'Browse the source',
        href: 'https://github.com/Andres-de-Fonoliousa',
      },
      p2: {
        tag: 'Python • Async • Automation',
        title: 'Telegram Store Bot',
        desc: 'An async Telegram store bot built with aiogram: product browsing, cart and orders, OTP-based user linking — wired to a Laravel REST API. The repo is documented and ready to review.',
        points: [
          'aiogram async architecture',
          'Full cart & order management',
          'OTP user linking',
          'Laravel API integration',
        ],
        status: 'FULL SOURCE ON GITHUB',
        link: 'Browse the source',
        href: 'https://github.com/Andres-de-Fonoliousa',
      },
      p3: {
        tag: 'Three.js • MediaPipe • WebGL',
        title: '3D Brawler Viewer',
        desc: 'An interactive 3D card viewer with hand-tracking gestures — proof I move outside my usual stack and build playful, polished front-ends.',
        points: [],
        status: 'OPEN SOURCE',
        link: 'Browse the source',
        href: 'https://github.com/Andres-de-Fonoliousa',
      },
      chat: [
        { who: 'bot', text: 'New order received: <b>#4921</b>' },
        { who: 'bot', text: 'Cart updated — 3 items.' },
        { who: 'user', text: "Show me today's revenue." },
        { who: 'bot', text: 'Daily report generated.', mono: true },
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
      sub: "If your team needs a developer who delivers complete features — design, build, deploy, document — I'm available now. Mid-level Laravel/Vue/Python, remote, UTC+3. Expect an answer within hours.",
      cta1: 'Hire Me',
      cta2: 'View GitHub',
      labels: {
        email: 'Email',
        github: 'GitHub',
        telegram: 'Telegram',
        whatsapp: 'WhatsApp',
        location: 'Location',
      },
      location: 'Remote • UTC+3',
      phone: '0982 749 452',
    },
    faq: {
      label: 'FAQ',
      heading: 'Questions a hiring team might ask',
      items: [
        {
          q: 'Are you really self-taught?',
          a: 'Yes — and I let the work speak. The systems on this page were designed, built and deployed by me end-to-end, without a team or a degree. In software, the only credential that matters is working code.',
        },
        {
          q: 'Where is CoreS now?',
          a: 'CoreS served real customers in production on my own server. Today the platform is open on GitHub — and I am taking it further by rebuilding it as a multi-tenant SaaS. You can read the code and the architecture yourself.',
        },
        {
          q: 'What exactly is the multi-tenant project?',
          a: 'One codebase, many stores: isolated databases, assets and configs per tenant. It is where the architecture gets interesting — the project I walk through in interviews.',
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
          a: "Well — I write code to be read. Reviews improve the work, and I respond with focused changes, not ego. It's how the work gets better.",
        },
      ],
    },
    footer: {
      built: 'Built with Vue, Tailwind, and coffee.',
      github: 'GitHub',
      telegram: 'Telegram',
      email: 'Email',
    },
    marquee: ['Laravel', 'Vue 3', 'Python', 'Tailwind CSS', 'REST APIs', 'Redis', 'MySQL', 'Async bots', 'Ubuntu', 'Docker', 'Git'],
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
      lines: ['أصمّم وأبني وأُسلّم', 'أنظمة متكاملة —', 'من قاعدة البيانات حتى النشر.'],
      sub: 'أنا يزن (CoreX) — مطوّر فول ستاك أعمل بـ لارافيل وفيو وبايثون. صمّمت وبنيت منصات تجارة إلكترونية، بوتات أتمتة، ولوحات تحكم: قواعد البيانات، واجهات REST، الواجهات الأمامية، والنشر — المكدس كاملاً. أملك الميزات من البداية إلى النهاية، وأنا جاهز للقيام بذلك لفريقك. عن بُعد، UTC+3.',
      cta1: 'وظّفني',
      cta2: 'شاهد GitHub',
      meta: 'متاح لوظائف فول ستاك عن بُعد — بدء فوري.',
      terminal: [
        { text: '<span class="code-kw">$</span> ls ~/repos', result: '' },
        { name: 'corex-store/', note: 'لارافيل • فيو • REST API • منصة متعددة المتاجر' },
        { name: 'bot2/', note: 'بايثون • aiogram • بوت متجر غير متزامن' },
        { name: '3d-viewer/', note: 'Three.js • MediaPipe • WebGL' },
      ],
    },
    about: {
      label: 'عنّي',
      heading: 'من أنا',
      p1: 'أبني منتجات كاملة، لا أجزاء متفرقة. بدأ CoreS فكرة واحدة وانتهى نظاماً متكاملاً — وهكذا يتكوّن:',
      p3: 'المعيار الذي ألتزم به: كود يُقرأ بوضوح، ميزات مملوكة حتى آخر نشر، وتواصل يبقي الجميع على علم.',
      diagram: [
        { name: 'قاعدة البيانات', note: 'النظام والهجرات' },
        { name: 'REST API', note: 'خلفية Laravel' },
        { name: 'Redis', note: 'تخزين وتوافيق' },
        { name: 'لوحة التحكم', note: 'Vue 3 + Tailwind' },
        { name: 'النشر', note: 'خادم Ubuntu' },
        { name: 'بوت تيليجرام', note: 'الطلبات والتنبيهات' },
      ],
      chips: ['بناء متكامل', 'REST APIs', 'أنظمة غير متزامنة', 'تعددية المتاجر', 'بنية تحتية ذاتية', 'عن بُعد • UTC+3'],
    },
    skills: {
      label: 'التقنيات',
      heading: 'المكدس الذي بُنيت به أنظمة كاملة',
      sub: 'كل أداة هنا جزء من أنظمة صمّمتها وبنيتها بالكامل — منصات وبوتات ولوحات تحكم. لا تجارب هنا.',
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
      heading1: 'أنظمة متكاملة،',
      heading2: 'مبنية من البداية إلى النهاية.',
      p1: {
        tag: 'لارافيل • فيو • تعددية المتاجر',
        title: 'CoreS — منصة تجارة إلكترونية متعددة المتاجر',
        desc: 'منصة تجارة إلكترونية كاملة صمّمتها وبنيتها من الصفر: واجهة Laravel REST API، تخزين Redis، لوحة تحكم Vue، وإشعارات متجر عبر تيليجرام. خدمت عملاء حقيقيين في الإنتاج، والآن أعيد بناءها كمنصة SaaS متعددة المتاجر — قاعدة كود واحدة، متاجر متعددة، وبيانات معزولة.',
        points: [
          'تصميم كامل: قاعدة البيانات، REST API، لوحة التحكم، النشر',
          'Redis وتخزين مؤقت + وظائف صفوف، مستضافة ذاتياً على Ubuntu',
          'لوحة تحكم Vue 3 + Tailwind',
          'بنية متعددة المتاجر — بيانات معزولة لكل متجر',
          'خدمت عملاء حقيقيين في الإنتاج',
        ],
        status: 'المصدر كاملاً على GitHub',
        link: 'تصفّح المصدر',
        href: 'https://github.com/Andres-de-Fonoliousa',
      },
      p2: {
        tag: 'بايثون • غير متزامن • أتمتة',
        title: 'بوت متجر تيليجرام',
        desc: 'بوت متجر غير متزامن مبني بـ aiogram: تصفح المنتجات، سلة وطلبات، وربط المستخدمين عبر OTP — مربوط بواجهة Laravel REST API. المستودع موثّق وجاهز للمراجعة.',
        points: [
          'بنية aiogram غير متزامنة',
          'إدارة كاملة للسلة والطلبات',
          'ربط المستخدمين عبر OTP',
          'تكامل مع Laravel API',
        ],
        status: 'المصدر كاملاً على GitHub',
        link: 'تصفّح المصدر',
        href: 'https://github.com/Andres-de-Fonoliousa',
      },
      p3: {
        tag: 'Three.js • MediaPipe • WebGL',
        title: 'عارض شخصيات ثلاثي الأبعاد',
        desc: 'تجربة تفاعلية ثلاثية الأبعاد مع تتبع اليدين بالإيماءات — دليل على أنني أتجاوز أدواتي المعتادة وأبني واجهات أمامية ممتعة ومتقنة.',
        points: [],
        status: 'مفتوح المصدر',
        link: 'تصفّح المصدر',
        href: 'https://github.com/Andres-de-Fonoliousa',
      },
      chat: [
        { who: 'bot', text: 'وصل طلب جديد: <b>#4921</b>' },
        { who: 'bot', text: 'تم تحديث السلة — 3 منتجات.' },
        { who: 'user', text: 'اعرض لي إيرادات اليوم.' },
        { who: 'bot', text: 'تم إنشاء التقرير اليومي.', mono: true },
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
      sub: 'إذا كان فريقك يحتاج مطوّراً يسلّم ميزات كاملة — تصميم، بناء، نشر، توثيق — فأنا متاح الآن. لارافيل وفيو وبايثون بمستوى متوسط، عن بُعد، UTC+3. سأرد خلال ساعات.',
      cta1: 'وظّفني',
      cta2: 'شاهد GitHub',
      labels: {
        email: 'البريد الإلكتروني',
        github: 'GitHub',
        telegram: 'تيليجرام',
        whatsapp: 'واتساب',
        location: 'الموقع',
      },
      location: 'عن بُعد • UTC+3',
      phone: '0982 749 452',
    },
    faq: {
      label: 'الأسئلة الشائعة',
      heading: 'أسئلة قد تطرحها جهة توظيف',
      items: [
        {
          q: 'هل تعلّمت ذاتياً فعلاً؟',
          a: 'نعم — وأترك العمل يتحدث. الأنظمة في هذه الصفحة صُممت وبُنيت ونُشرت بالكامل من قبلي، دون فريق أو شهادة. في البرمجيات، الدليل الوحيد المقبول هو كود يعمل.',
        },
        {
          q: 'أين CoreS الآن؟',
          a: 'خدم CoreS عملاء حقيقيين في الإنتاج على خادمي الخاص. اليوم المنصة مفتوحة على GitHub — وأتقدم بها خطوة أبعد عبر إعادة بنائها كمنصة متعددة المتاجر. يمكنك قراءة الكود والبنية بنفسك.',
        },
        {
          q: 'ما هو مشروع تعددية المتاجر بالضبط؟',
          a: 'قاعدة كود واحدة، متاجر متعددة: قواعد بيانات وأصول وإعدادات معزولة لكل متجر. هنا تصبح البنية مثيرة للاهتمام — وهو المشروع الذي أستعرضه في المقابلات.',
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
          a: 'بشكل جيد — أكتب كوداً ليُقرأ. المراجعات تحسّن العمل، وأرد بتغييرات مركزة لا بأنانية. هكذا يصبح العمل أفضل.',
        },
      ],
    },
    footer: {
      built: 'بُني بـ Vue وTailwind... والكثير من القهوة.',
      github: 'GitHub',
      telegram: 'تيليجرام',
      email: 'البريد',
    },
    marquee: [' Laravel', 'Vue 3', 'Python', 'Tailwind CSS', 'REST APIs', 'Redis', 'MySQL', 'بوتات غير متزامنة', 'Ubuntu', 'Docker', 'Git'],
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