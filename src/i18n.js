import { ref, computed } from 'vue'

export const messages = {
  en: {
    nav: {
      work: 'WORK',
      stack: 'STACK',
      hire: 'HIRE',
      faq: 'FAQ',
      contact: 'CONTACT',
    },
    hero: {
      eyebrow: 'Full-Stack Developer • Laravel • Vue • Python',
      lines: [
        'I build what other developers',
        'quote 3 months for.',
        'In a week',
      ],
      sub: 'Laravel • Vue • Tailwind • Python. I specialize in high-leverage builds: e-commerce platforms, automation bots, and internal tools that move business numbers. No bloated agencies. No junior handoffs. Just senior-level code, shipped fast.',
      cta1: 'Start a Project',
      cta2: 'View My GitHub',
      meta: 'Currently open for freelance sprints & remote full-time roles.',
      success: '[SUCCESS] Build completed in 6 days, 4 hours.',
    },
    gap: {
      label: 'The Problem',
      heading: 'Why most developer relationships fail',
      cards: [
        {
          title: 'Over-Engineering',
          body: 'They\u2019ll spend two weeks on a \u201Cscalable architecture\u201D for an MVP that needs to validate in 48 hours. Perfectionism disguised as professionalism.',
        },
        {
          title: 'The Disappearing Act',
          body: 'You get a Slack message at 2 AM, then radio silence for three days while your deadline burns. Communication is not a feature\u2014it\u2019s the foundation.',
        },
        {
          title: 'No Business Leverage',
          body: 'Code that doesn\u2019t directly impact revenue, retention, or efficiency is just expensive art. Every line I write has a business case.',
        },
      ],
    },
    work: {
      label: 'Selected Work',
      heading1: 'Production-grade systems,',
      heading2: 'not tutorial projects.',
      p1: {
        tag: 'Laravel • Vue • Multi-Tenancy',
        title: 'Multi-Tenant E-Commerce Platform',
        desc: 'A single Laravel codebase powering unlimited storefronts. Each tenant gets isolated databases, assets, and configurations\u2014perfect for SaaS e-commerce or franchise models.',
        points: [
          'Laravel Tenancy for database isolation',
          'Vue 3 + Tailwind admin dashboard',
          'Python automation for inventory sync',
          'Shared codebase, infinite scale',
        ],
        status: 'CORE COMPLETE • MULTI-TENANCY 80% • POLISHING FOR RELEASE',
        link: 'View Architecture',
      },
      p2: {
        tag: 'Python • Async • Automation',
        title: 'Telegram Bot Ecosystem',
        desc: 'Python-based automation bots that replace manual workflows. 24/7 operation, zero UI overhead, direct integration with Laravel backends via webhooks.',
        points: [
          'aiogram async architecture',
          'Webhook integration with Laravel API',
          'Automated order & inventory alerts',
          'Custom command handlers for analytics',
        ],
        status: 'OPERATIONAL • GITHUB POLISH IN PROGRESS',
        link: 'See Bot Commands',
      },
      p3: {
        tag: 'Process • Not A Project',
        title: 'The 7-Day Sprint',
        desc: "I don't have 20 half-finished side projects. I have 2 production-grade systems and the ability to build your third in 7 days. The secret is ruthless scope discipline and a stack I know like muscle memory.",
        quote: "This only works because I don't do meetings. I do decisions.",
      },
      sprint: [
        { day: 'Day 1', label: 'Scope' },
        { day: 'Day 2', label: 'Backend' },
        { day: 'Day 3', label: 'Backend' },
        { day: 'Day 4', label: 'Frontend' },
        { day: 'Day 5', label: 'Frontend' },
        { day: 'Day 6', label: 'Integration' },
        { day: 'Day 7', label: 'Ship' },
      ],
      chat: [
        { who: 'bot', text: 'New order received: <b>#4921</b>' },
        { who: 'bot', text: 'Inventory updated automatically.' },
        { who: 'user', text: "Show me today's revenue." },
        { who: 'bot', text: '$4,231 • 23 orders • 2 refunds', mono: true },
      ],
    },
    stack: {
      label: 'Technology',
      heading: 'Stack I know like muscle memory',
      sub: 'I don\u2019t experiment on your dime. Every tool here has shipped production code. The result? No surprises, no \u201CI\u2019ll figure it out,\u201D just predictable delivery.',
      proficiency: 'Proficiency',
      techs: [
        { name: 'Laravel', pct: 95 },
        { name: 'Vue 3', pct: 92 },
        { name: 'Tailwind CSS', pct: 90 },
        { name: 'Python', pct: 85 },
        { name: 'MySQL/PostgreSQL', pct: 85 },
        { name: 'Redis', pct: 75 },
        { name: 'Docker', pct: 75 },
        { name: 'Git/GitHub', pct: 95 },
      ],
    },
    for: {
      label: 'Engagement Models',
      heading: 'Two ways to work together',
      project: {
        title: 'Hire Me for a Project',
        body: 'You need an MVP that actually launches, not a prototype that collects dust. Your current dev has been "almost done" for 3 months. You want a Laravel/Vue system built right the first time.',
        bullets: [
          '7-day sprint delivery',
          'Fixed scope, fixed timeline',
          'Full source code + documentation',
          'Post-launch support available',
        ],
        cta: 'Start a Project',
      },
      fulltime: {
        title: 'Hire Me Full-Time',
        body: "You're a startup that needs a senior full-stack dev who owns features end-to-end. Your team needs someone who can prototype in days, not sprints. You value developers who understand business leverage.",
        bullets: [
          'Senior Laravel + Vue expertise',
          'End-to-end feature ownership',
          'Remote, async-friendly',
          'Available for immediate start',
        ],
        cta: "Let's Talk",
      },
    },
    contact: {
      heading: 'Ready to ship in 7 days?',
      sub: "Tell me what you're building. I'll tell you if I can ship it in a week. No pitch decks. No discovery calls that could've been emails. Just decisions.",
      cta1: 'Start a Project Sprint',
      cta2: 'Hire Me Full-Time',
      labels: {
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        location: 'Location',
      },
    },
    faq: {
      label: 'FAQ',
      heading: 'Questions you might have',
      items: [
        {
          q: "Why aren't your projects publicly hosted?",
          a: "I'm currently polishing the GitHub repos with proper READMEs, architecture docs, and screenshots. The code is production-grade\u2014the presentation is catching up. If you're a serious client or recruiter, I'll send you private access today.",
        },
        {
          q: 'Can you really build anything in a week?',
          a: 'No. I can build anything with clear scope and business leverage in a week. A Twitter clone? No. A custom e-commerce dashboard with Laravel + Vue? Yes. A Telegram bot that automates your workflow? Yes. The secret is ruthless scope discipline.',
        },
        {
          q: 'Do you work with agencies or only direct clients?',
          a: 'Both. I white-label for agencies who need Laravel/Vue firepower, and I work directly with founders who need speed.',
        },
        {
          q: "What's your rate or salary expectation?",
          a: "Project rates depend on scope\u2014week sprints start at a competitive fixed price. For full-time remote roles, I'm aligned with senior Laravel developer rates in my region. Let's talk specifics.",
        },
        {
          q: 'What happens after the 7-day sprint?',
          a: "You get the working product, full source code, a README that doesn't suck, and 30 days of bug-fix support. Need more features? We plan Sprint 2.",
        },
        {
          q: 'Do you do meetings?',
          a: "One kickoff call to lock scope. One handoff call to demo the build. Everything else is async\u2014Slack, Loom, or GitHub issues. I don't do daily standups that could've been a sentence.",
        },
      ],
    },
    footer: {
      built: 'Built with Vue, Tailwind, and caffeine.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
  },

  ar: {
    nav: {
      work: 'الأعمال',
      stack: 'التقنيات',
      hire: 'وظّفني',
      faq: 'أسئلة',
      contact: 'تواصل',
    },
    hero: {
      eyebrow: 'مطوّر فول ستاك • لارافيل • فيو • بايثون',
      lines: [
        'أنظمة يحتاج بناؤها عند غيري',
        'ثلاثة أشهر كاملة.',
        'أسلّمها في أسبوع واحد',
      ],
      sub: 'لارافيل • فيو • تيلويند • بايثون. أبني ما يحرّك أرقام عملك: منصات تجارة إلكترونية، بوتات أتمتة، وأدوات داخلية توفّر الوقت والمال. بلا وكالات منتفخة، بلا تجارب على حسابك — كود بمستوى محترف، يُسلَّم في وقته.',
      cta1: 'ابدأ مشروعك',
      cta2: 'شاهد GitHub',
      meta: 'متاح الآن لمشاريع الأسبوع ووظائف عن بُعد بدوام كامل.',
      success: '[تمّت العملية] اكتمل البناء خلال 6 أيام و4 ساعات.',
    },
    gap: {
      label: 'المشكلة',
      heading: 'لماذا تفشل معظم المشاريع مع المطوّرين؟',
      cards: [
        {
          title: 'هندسة بلا هدف',
          body: 'أسبوعان كاملان في «بنية قابلة للتوسّع» لمنتج يحتاج التحقق خلال 48 ساعة. كمالية تتنكّر بزي الاحترافية — وتدفع أنت ثمن الوقت.',
        },
        {
          title: 'الاختفاء عند الحاجة',
          body: 'رسالة في الثانية فجراً، ثم صمتٌ مطبق ثلاثة أيام بينما يحترق موعدك النهائي. التواصل ليس ميزة إضافية — إنه أساس أي تعامل.',
        },
        {
          title: 'كود لا يبيع',
          body: 'الكود الذي لا يزيد إيراداتك ولا يقلّل تكاليفك مجرد فنّ باهظ الثمن. كل سطر أكتبه له حسابٌ في ميزانيتك.',
        },
      ],
    },
    work: {
      label: 'أعمال مختارة',
      heading1: 'أنظمة بجودة الإنتاج،',
      heading2: 'لا مشاريع تجارب.',
      p1: {
        tag: 'لارافيل • فيو • تعددية المتاجر',
        title: 'منصة تجارة إلكترونية متعددة المتاجر',
        desc: 'قاعدة كود واحدة تدير عدداً غير محدود من المتاجر، لكلٍّ منها قاعدته وملفاته وإعداداته المعزولة. مثالية لمنصات SaaS أو سلاسل الامتياز التجاري.',
        points: [
          'عزل كامل للبيانات لكل متجر (Laravel Tenancy)',
          'لوحة تحكم حديثة بـ Vue 3 + Tailwind',
          'مزامنة مخزون تلقائية عبر بايثون',
          'كود واحد يتوسّع بلا حدود',
        ],
        status: 'النواة مكتملة • التعددية 80% • مرحلة الصقل قبل الإطلاق',
        link: 'استعرض البنية',
      },
      p2: {
        tag: 'بايثون • غير متزامن • أتمتة',
        title: 'منظومة بوتات تيليجرام',
        desc: 'بوتات تعمل على مدار الساعة تؤتمت أعمالك اليدوية: طلبات، مخزون، تقارير — بلا واجهات معقدة، واندماج مباشر مع أنظمة لارافيل عبر Webhooks.',
        points: [
          'بنية غير متزامنة (aiogram)',
          'اندماج كامل مع Laravel API',
          'تنبيهات فورية للطلبات والمخزون',
          'أوامر تحليلات جاهزة',
        ],
        status: 'يعمل الآن • تحسين مستودع GitHub قيد التنفيذ',
        link: 'جرّب أوامر البوت',
      },
      p3: {
        tag: 'منهجية • ليست مشروعاً',
        title: 'نظام الأسبوع (7 أيام)',
        desc: 'ليس عندي 20 مشروعاً نصف منجز. عندي نظامان بجودة إنتاجية — وقدرة على بناء نظامك الثالث خلال 7 أيام. السر؟ نطاق صارم، ومكدّس تقني أتقنه تماماً.',
        quote: 'أنجح في هذا لأنني لا أعقد اجتماعات... أنا أتّخذ قرارات.',
      },
      sprint: [
        { day: 'اليوم 1', label: 'النطاق' },
        { day: 'اليوم 2', label: 'الخلفية' },
        { day: 'اليوم 3', label: 'الخلفية' },
        { day: 'اليوم 4', label: 'الواجهة' },
        { day: 'اليوم 5', label: 'الواجهة' },
        { day: 'اليوم 6', label: 'التكامل' },
        { day: 'اليوم 7', label: 'التسليم' },
      ],
      chat: [
        { who: 'bot', text: 'وصل طلب جديد: <b>#4921</b>' },
        { who: 'bot', text: 'تم تحديث المخزون تلقائياً.' },
        { who: 'user', text: 'اعرض لي إيرادات اليوم.' },
        { who: 'bot', text: '$4,231 • 23 طلباً • استردادان', mono: true },
      ],
    },
    stack: {
      label: 'التقنيات',
      heading: 'مكدّس تقني أتقنه تماماً',
      sub: 'لا أجرّب على حساب عميل. كل أداة هنا شحنت مشاريع حقيقية. النتيجة؟ لا مفاجآت، ولا «سأكتشف لاحقاً» — فقط تسليم في موعده كما وُعد.',
      proficiency: 'درجة الإتقان',
      techs: [
        { name: 'Laravel', pct: 95 },
        { name: 'Vue 3', pct: 92 },
        { name: 'Tailwind CSS', pct: 90 },
        { name: 'Python', pct: 85 },
        { name: 'MySQL/PostgreSQL', pct: 85 },
        { name: 'Redis', pct: 75 },
        { name: 'Docker', pct: 75 },
        { name: 'Git/GitHub', pct: 95 },
      ],
    },
    for: {
      label: 'نماذج التعاون',
      heading: 'طريقتان للعمل معاً',
      project: {
        title: 'وظّفني لمشروع محدد',
        body: 'لديك فكرة تحتاج إطلاقاً فعلياً، لا نموذجاً يجمع الغبار؟ مطوّرك الحالي «قارب على الانتهاء» منذ ثلاثة أشهر؟ سأبني لك نظام Laravel/Vue صحيحاً من أول مرة.',
        bullets: [
          'تسليم خلال 7 أيام فقط',
          'نطاق ثابت وتكلفة ثابتة',
          'كود مصدري كامل + توثيق',
          'دعم مجاني بعد الإطلاق',
        ],
        cta: 'ابدأ مشروعك',
      },
      fulltime: {
        title: 'وظّفني بدوام كامل',
        body: 'شركة ناشئة تحتاج مطوّراً يملك الميزات من أول سطر إلى آخر سطر؟ فريقك يحتاج نتائج خلال أيام، لا خلال سبرنات؟ أنا مطوّر يفهم لغة الأرقام.',
        bullets: [
          'خبرة متقدمة في Laravel + Vue',
          'ملكية كاملة للميزات',
          'عن بُعد • غير متزامن',
          'متاح للبدء فوراً',
        ],
        cta: 'لنتحدّث',
      },
    },
    contact: {
      heading: 'جاهز للتسليم خلال 7 أيام؟',
      sub: 'أخبرني بما تريد بناءه، وأخبرك فوراً إن كان بإمكاني تسليمه خلال أسبوع. لا عروض طويلة، ولا اجتماعات كان يمكن أن تكون رسالة — فقط خطط عمل وقرارات.',
      cta1: 'ابدأ مشروعك',
      cta2: 'وظّفني بدوام كامل',
      labels: {
        email: 'البريد الإلكتروني',
        github: 'GitHub',
        linkedin: 'لينكدإن',
        location: 'الموقع',
      },
    },
    faq: {
      label: 'الأسئلة الشائعة',
      heading: 'أسئلة قد تخطر ببالك',
      items: [
        {
          q: 'لماذا مشاريعك غير منشورة علناً؟',
          a: 'أنا الآن أجهّز المستودعات للعرض العام: توثيق، بنية، لقطات شاشة. الكود بجودة إنتاجية فعلاً — المتبقّي هو العرض التقديمي. عميل جاد أو مسؤول توظيف؟ سأرسل لك وصولاً خاصاً اليوم.',
        },
        {
          q: 'هل تستطيع فعلاً بناء أي شيء في أسبوع؟',
          a: 'لا. أستطيع بناء أي شيء بحدود واضحة وقيمة تجارية حقيقية في أسبوع. نسخة تويتر؟ لا. لوحة تجارة إلكترونية بـ Laravel + Vue؟ نعم. بوت يؤتمت عملك؟ نعم. الفرق هو انضباط صارم في النطاق.',
        },
        {
          q: 'هل تعمل مع وكالات أم عملاء مباشرين؟',
          a: 'مع الاثنين. أعمل بعلامة بيضاء للوكالات التي تحتاج قوة Laravel/Vue، ومباشرةً مع المؤسسين الذين يحتاجون سرعة.',
        },
        {
          q: 'ما هي أسعارك أو توقعات راتبك؟',
          a: 'أسعار المشاريع حسب النطاق — أسبوع العمل يبدأ بسعر ثابت تنافسي. للوظائف عن بُعد بدوام كامل، أنا ضمن المستوى المعتاد لمطوّري لارافيل المحترفين في المنطقة. لنناقش التفاصيل.',
        },
        {
          q: 'ماذا يحدث بعد أسبوع العمل؟',
          a: 'تستلم منتجاً يعمل، الكود المصدري كاملاً، توثيقاً لا يخجل منه صاحبه، و30 يوماً من دعم إصلاح الأخطاء. تريد مزيداً من الميزات؟ نبدأ سباقاً جديداً.',
        },
        {
          q: 'هل تعقد اجتماعات؟',
          a: 'اجتماع واحد للانطلاق، واجتماع واحد للتسليم. كل ما عداه رسائل ولقطات مسجلة وGitHub. لا اجتماعات يومية كان يمكن أن تكون جملة واحدة.',
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
