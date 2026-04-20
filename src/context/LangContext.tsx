import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'ru' | 'en' | 'kz'

const translations: Record<string, Record<Lang, string>> = {
  // Header
  'nav.journey': { ru: 'Путь в университет', en: 'Admission Journey', kz: 'Түсу жолы' },
  'nav.programs': { ru: 'Программы', en: 'Programs', kz: 'Бағдарламалар' },
  'nav.support': { ru: 'Поддержка', en: 'Support', kz: 'Қолдау' },
  'nav.faq': { ru: 'FAQ', en: 'FAQ', kz: 'Жиі сұрақтар' },
  'nav.contact': { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' },
  'nav.apply': { ru: 'Подать заявку', en: 'Apply Now', kz: 'Өтінім беру' },

  // Hero
  'hero.title1': { ru: 'Ваш путь к международному образованию', en: 'Your Path to International Education', kz: 'Халықаралық білім алу жолыңыз' },
  'hero.title2': { ru: 'начинается здесь', en: 'starts here', kz: 'осы жерден басталады' },
  'hero.subtitle': {
    ru: 'Поступайте в один из ведущих региональных университетов Казахстана и получите качественное образование с полным сопровождением — от заявки и собеседования до адаптации на кампусе.',
    en: 'Apply to one of Kazakhstan’s leading regional universities and receive quality education with full support from application and interview to campus adaptation.',
    kz: 'Қазақстанның жетекші өңірлік университеттерінің біріне түсіп, өтінім мен сұхбаттан бастап кампусқа бейімделуге дейін толық қолдаумен сапалы білім алыңыз.'
  },
  'hero.cta_journey': { ru: 'Узнать путь поступления', en: 'Explore Admission Steps', kz: 'Түсу жолын білу' },
  'hero.cta_programs': { ru: 'Выбрать программу', en: 'Browse Programs', kz: 'Бағдарлама таңдау' },
  'hero.countries': { ru: 'стран мира', en: 'countries', kz: 'ел' },

  // Stats
  'stats.founded': { ru: 'год основания', en: 'year founded', kz: 'құрылған жыл' },
  'stats.students': { ru: 'студентов', en: 'students', kz: 'студент' },
  'stats.faculty': { ru: 'преподавателей', en: 'faculty', kz: 'оқытушы' },
  'stats.buildings': { ru: 'учебных корпусов', en: 'buildings', kz: 'оқу корпусы' },
  'stats.dormitories': { ru: 'общежитий', en: 'dormitories', kz: 'жатақхана' },

  // Highlights / Bento
  'highlights.kicker': { ru: 'Чек-лист абитуриента', en: 'Applicant Checklist', kz: 'Абитуриент чек-листі' },
  'highlights.title': { ru: 'Всё, что нужно знать перед поступлением', en: 'Everything You Need to Know Before Applying', kz: 'Түсу алдында білуіңіз керек нәрсенің бәрі' },
  'highlights.desc': {
    ru: 'Ключевые факты из материалов университета: документы, стоимость, проживание, виза и жизнь в Кызылорде.',
    en: 'Key facts from the university materials: documents, tuition, housing, visa guidance and life in Kyzylorda.',
    kz: 'Университет материалдарындағы негізгі деректер: құжаттар, оқу құны, тұру, виза және Қызылордадағы өмір.'
  },

  'hl.docs.title': { ru: 'Документы для поступления', en: 'Required Documents', kz: 'Түсу үшін құжаттар' },
  'hl.docs.text': {
    ru: 'Паспорт или удостоверение личности, документ об образовании с приложением и нотариальным переводом, 6 фото 3×4. Базовый пакет загружается онлайн через портал.',
    en: 'Passport or ID, education document with transcript and notarized translation, plus 6 passport photos. The core document package is uploaded online through the portal.',
    kz: 'Паспорт немесе жеке куәлік, білімі туралы құжат пен қосымшасы нотариалдық аудармамен, сондай-ақ 3×4 көлеміндегі 6 фото қажет. Негізгі құжаттар портал арқылы онлайн жүктеледі.'
  },

  'hl.visa.title': { ru: 'Оформление визы', en: 'Visa Application', kz: 'Виза рәсімдеу' },
  'hl.visa.text': {
    ru: 'Для иностранных граждан на платной основе ЕНТ не требуется. После рассмотрения заявки международный офис подсказывает дальнейшие шаги по визе и въезду.',
    en: 'International applicants studying on a paid basis do not need the national test. After the application review, the international office guides you through the next visa and arrival steps.',
    kz: 'Ақылы негізде оқуға түсетін шетелдік азаматтарға ҰБТ талап етілмейді. Өтінім қаралғаннан кейін халықаралық бөлім виза мен келу қадамдарын түсіндіреді.'
  },

  'hl.fee.title': { ru: 'Стоимость и гранты', en: 'Tuition and Grants', kz: 'Оқу құны және гранттар' },
  'hl.fee.text': {
    ru: 'По материалам университета стоимость бакалавриата начинается примерно от $1 000 в год. Для отдельных категорий абитуриентов доступны гранты и Foundation-траектории.',
    en: 'According to the university materials, bachelor tuition starts from about $1,000 per year. Grants and foundation pathways are available for selected applicant categories.',
    kz: 'Университет материалдарына сай бакалавриат құны жылына шамамен $1 000-нан басталады. Кейбір талапкерлер санаттары үшін гранттар мен Foundation бағыттары қарастырылған.'
  },

  'hl.flight.title': { ru: 'Перелёт в Кызылорду', en: 'Getting to Kyzylorda', kz: 'Қызылордаға ұшу' },
  'hl.flight.text': {
    ru: 'До Кызылорды удобно добираться внутренними рейсами через крупные города Казахстана. По прибытии университет помогает с первичной навигацией и заселением.',
    en: 'Kyzylorda is conveniently reached by domestic flights via major cities of Kazakhstan. Upon arrival, the university helps with first-day navigation and settling in.',
    kz: 'Қызылордаға Қазақстанның ірі қалалары арқылы ішкі рейстермен ыңғайлы жетуге болады. Келгеннен кейін университет бастапқы бағдарлау мен орналасуға көмектеседі.'
  },

  'hl.dorm.title': { ru: 'Общежитие', en: 'Dormitory', kz: 'Жатақхана' },
  'hl.dorm.text': {
    ru: '6 общежитий и приоритетное размещение для иностранных студентов. В материалах университета ориентир по проживанию указан примерно от 10 000 тг/мес.',
    en: '6 dormitories and priority placement for international students. University materials mention housing from around 10,000 KZT/month.',
    kz: '6 жатақхана және шетелдік студенттер үшін басым орналастыру. Университет материалдарында тұру құны шамамен 10 000 тг/айдан басталатыны көрсетілген.'
  },

  'hl.city.title': { ru: 'Кызылорда — комфортный город для жизни', en: 'Kyzylorda — comfortable city for life', kz: 'Қызылорда — өмір сүруге қолайлы қала' },
  'hl.city.text': {
    ru: 'Более 300 солнечных дней в году, доступная стоимость жизни и сильная культурная среда региона. Рядом Байконур, история Аральского моря и студенческая инфраструктура города.',
    en: 'More than 300 sunny days a year, an affordable cost of living, and a strong regional cultural environment. Nearby are Baikonur, the Aral Sea context, and a student-friendly city infrastructure.',
    kz: 'Жылына 300-ден астам шуақты күн, өмір сүру құнының қолжетімділігі және өңірдің бай мәдени ортасы бар. Жақын маңда Байқоңыр, Арал теңізі тарихы және студентке ыңғайлы қала инфрақұрылымы орналасқан.'
  },

  // Journey
  'journey.kicker': { ru: 'Шаги поступления', en: 'Admission Steps', kz: 'Түсу қадамдары' },
  'journey.title': { ru: 'Полный путь от заявки до учёбы', en: 'Full Journey from Application to Studies', kz: 'Өтінімнен оқуға дейінгі толық жол' },
  'journey.desc': {
    ru: 'Процесс построен по материалам приёмной комиссии: от выбора программы и загрузки документов до собеседования, приезда и адаптации.',
    en: 'This flow follows the admission materials: from choosing a program and uploading documents to the interview, arrival, and adaptation.',
    kz: 'Бұл жол қабылдау комиссиясының материалдарына сүйеніп жасалған: бағдарлама таңдаудан бастап құжат жүктеу, сұхбат, келу және бейімделуге дейін.'
  },

  'j.1': { ru: 'Выбрать программу', en: 'Choose a Program', kz: 'Бағдарлама таңдау' },
  'j.1.desc': {
    ru: 'Сверьте направление обучения, язык программы и базовые требования по выбранному уровню подготовки.',
    en: 'Review the study field, language of instruction, and core requirements for your chosen level.',
    kz: 'Таңдалған дайындық деңгейі бойынша оқу бағытын, тілін және негізгі талаптарды тексеріңіз.'
  },

  'j.2': { ru: 'Заполнить онлайн-заявку', en: 'Complete the Online Application', kz: 'Онлайн өтінімді толтыру' },
  'j.2.desc': {
    ru: 'Зарегистрируйтесь на портале, заполните анкету и укажите контактные данные для связи с приёмной комиссией.',
    en: 'Register on the portal, complete the application form, and provide contact details for the admissions office.',
    kz: 'Порталда тіркеліп, анкетаны толтырыңыз және қабылдау комиссиясымен байланыс үшін деректеріңізді көрсетіңіз.'
  },

  'j.3': { ru: 'Загрузить документы', en: 'Upload Documents', kz: 'Құжаттарды жүктеу' },
  'j.3.desc': {
    ru: 'Загрузите паспорт, документ об образовании, приложение, переводы и фотографии в электронном виде.',
    en: 'Upload your passport, education document, transcript, translations, and photos in digital form.',
    kz: 'Паспортты, білімі туралы құжатты, қосымшаны, аудармаларды және фотоларды электронды түрде жүктеңіз.'
  },

  'j.4': { ru: 'Получить дату собеседования', en: 'Receive the Interview Date', kz: 'Сұхбат күнін алу' },
  'j.4.desc': {
    ru: 'После полной загрузки документов университет сообщает дату и формат собеседования в течение 3 рабочих дней.',
    en: 'After the full document package is uploaded, the university shares the interview date and format within 3 business days.',
    kz: 'Құжаттар толық жүктелгеннен кейін университет 3 жұмыс күні ішінде сұхбаттың күні мен форматын хабарлайды.'
  },

  'j.5': { ru: 'Пройти собеседование', en: 'Pass the Interview', kz: 'Сұхбаттан өту' },
  'j.5.desc': {
    ru: 'Собеседование проходит онлайн или офлайн, а результат публикуется в личном кабинете в течение 3 дней после интервью.',
    en: 'The interview is held online or offline, and the result appears in your account within 3 days after the interview.',
    kz: 'Сұхбат онлайн не офлайн форматта өтеді, ал нәтиже сұхбаттан кейін 3 күн ішінде жеке кабинетте жарияланады.'
  },

  'j.6': { ru: 'Согласовать визу и приезд', en: 'Coordinate Visa and Arrival', kz: 'Виза мен келуді келісу' },
  'j.6.desc': {
    ru: 'После положительного решения международный офис подсказывает дальнейшие шаги по визе, приезду и заселению.',
    en: 'After a positive decision, the international office explains the next steps for visa matters, arrival, and accommodation.',
    kz: 'Оң шешімнен кейін халықаралық бөлім виза, келу және орналасу бойынша келесі қадамдарды түсіндіреді.'
  },

  'j.7': { ru: 'Прибытие и начало учёбы', en: 'Arrival and Start of Studies', kz: 'Келу және оқуды бастау' },
  'j.7.desc': {
    ru: 'После прибытия вы проходите регистрацию, заселение, первичную адаптацию и подключаетесь к учебному процессу.',
    en: 'After arrival, you go through registration, housing placement, initial adaptation, and join the academic process.',
    kz: 'Келгеннен кейін тіркеу, орналасу, бастапқы бейімделу кезеңдерінен өтіп, оқу процесіне қосыласыз.'
  },

  // Programs
  'programs.kicker': { ru: 'Образовательные программы', en: 'Educational Programs', kz: 'Білім беру бағдарламалары' },
  'programs.title': { ru: 'Выберите своё направление', en: 'Choose Your Direction', kz: 'Бағытыңызды таңдаңыз' },
  'programs.desc': {
    ru: 'Бакалавриат, магистратура, докторантура и подготовительные траектории на базе официальных перечней университета.',
    en: 'Bachelor, master, doctoral, and preparatory tracks based on the official university lists.',
    kz: 'Университеттің ресми тізімдері негізіндегі бакалавриат, магистратура, докторантура және дайындық бағыттары.'
  },
  'programs.all': { ru: 'Все программы', en: 'All Programs', kz: 'Барлық бағдарламалар' },
  'programs.popular': { ru: 'ПОПУЛЯРНО', en: 'POPULAR', kz: 'ТАНЫМАЛ' },

  'p.1.title': { ru: 'Бакалавриат', en: "Bachelor's Degree", kz: 'Бакалавриат' },
  'p.1.meta': { ru: '4 года · широкий выбор направлений · Очная форма', en: '4 years · broad range of fields · Full-time', kz: '4 жыл · бағыттардың кең таңдауы · Күндізгі оқу' },
  'p.1.text': {
    ru: 'В официальных перечнях представлены педагогика, языки, IT и AI, экономика, право, инженерные, аграрные и социальные направления.',
    en: 'The official lists include education, languages, IT and AI, economics, law, engineering, agriculture, and social fields.',
    kz: 'Ресми тізімдерде педагогика, тілдер, IT және AI, экономика, құқық, инженерлік, аграрлық және әлеуметтік бағыттар бар.'
  },
  'p.1.spec1': { ru: '🖥 Информационные технологии', en: '🖥 Information Technologies', kz: '🖥 Ақпараттық технологиялар' },
  'p.1.spec2': { ru: '⚙️ Инженерные направления', en: '⚙️ Engineering Programs', kz: '⚙️ Инженерлік бағыттар' },
  'p.1.spec3': { ru: '📊 Экономика и менеджмент', en: '📊 Economics & Management', kz: '📊 Экономика және менеджмент' },

  'p.2.title': { ru: 'Магистратура', en: "Master's Degree", kz: 'Магистратура' },
  'p.2.meta': { ru: '2 года · научно-педагогическая и профильная', en: '2 years · research and professional tracks', kz: '2 жыл · ғылыми-педагогикалық және бейіндік' },
  'p.2.text': {
    ru: 'Научно-педагогическая и профильная магистратура. Возможность продолжить исследовательскую карьеру или углубить профессиональные компетенции.',
    en: 'Research and professional master\'s programs. Opportunity to pursue a research career or deepen professional expertise.',
    kz: 'Ғылыми-педагогикалық және бейіндік магистратура. Зерттеу мансабын жалғастыру немесе кәсіби құзыреттілікті тереңдету мүмкіндігі.'
  },

  'p.3.title': { ru: 'Языковые курсы (подготовительный)', en: 'Language Prep Courses', kz: 'Тілдік дайындық курстары' },
  'p.3.meta': { ru: '1 год · Языковая и академическая база', en: '1 year · Language & academic foundation', kz: '1 жыл · Тілдік және академиялық негіз' },
  'p.3.text': {
    ru: 'Для тех, кто хочет улучшить казахский или русский перед началом основной программы. Адаптация к учебной среде.',
    en: 'For those who want to improve Kazakh or Russian before starting the main program. Academic environment adaptation.',
    kz: 'Негізгі бағдарламаны бастамас бұрын қазақ немесе орыс тілін жетілдіргісі келетіндерге. Оқу ортасына бейімделу.'
  },

  'p.apply': { ru: 'Подать заявку', en: 'Apply Now', kz: 'Өтінім беру' },

  // Support
  'support.kicker': { ru: 'Поддержка студентов', en: 'Student Support', kz: 'Студенттерді қолдау' },
  'support.title': { ru: 'Помогаем на каждом этапе', en: 'We Help at Every Stage', kz: 'Әр кезеңде көмектесеміз' },
  'support.desc': {
    ru: 'Международный офис и университетские службы помогают с визовыми вопросами, проживанием, регистрацией и первыми бытовыми шагами.',
    en: 'The international office and university services help with visa matters, housing, registration, and the first practical steps after arrival.',
    kz: 'Халықаралық бөлім мен университет қызметтері виза, тұру, тіркелу және келгеннен кейінгі алғашқы тұрмыстық қадамдар бойынша көмектеседі.'
  },

  's.1.title': { ru: 'Виза и миграционный учёт', en: 'Visa & Migration Registration', kz: 'Виза және миграциялық есеп' },
  's.1.p1': { ru: 'Консультации по студенческой визе и перечню документов', en: 'Guidance on student visa requirements and documents', kz: 'Студенттік виза талаптары мен құжаттары бойынша кеңес' },
  's.1.p2': { ru: 'Помощь с регистрацией после прибытия', en: 'Help with registration after arrival', kz: 'Келгеннен кейін тіркелуге көмек' },
  's.1.p3': { ru: 'Сопровождение по продлению визы и миграционного статуса', en: 'Support with visa extension and migration status renewal', kz: 'Визаны және көші-қон мәртебесін ұзарту бойынша сүйемелдеу' },
  's.1.p4': { ru: 'Связь с международным офисом по индивидуальным случаям', en: 'Direct contact with the international office for individual cases', kz: 'Жеке жағдайлар бойынша халықаралық бөліммен тікелей байланыс' },

  's.2.title': { ru: 'Жильё и кампус', en: 'Housing & Campus', kz: 'Тұрғын үй және кампус' },
  's.2.p1': { ru: '6 общежитий и приоритетное размещение для иностранных студентов', en: '6 dormitories and priority placement for international students', kz: '6 жатақхана және шетелдік студенттер үшін басым орналастыру' },
  's.2.p2': { ru: 'Столовые, медицинская инфраструктура и учебные пространства на кампусе', en: 'Dining areas, medical infrastructure, and study spaces on campus', kz: 'Кампустегі асханалар, медициналық инфрақұрылым және оқу кеңістіктері' },
  's.2.p3': { ru: 'Помощь с ориентацией по транспорту и городской инфраструктуре', en: 'Guidance on transport routes and city infrastructure', kz: 'Көлік бағыттары мен қала инфрақұрылымы бойынша бағдар беру' },

  's.3.title': { ru: 'Адаптация и кураторы', en: 'Adaptation & Mentors', kz: 'Бейімделу және кураторлар' },
  's.3.p1': { ru: 'Персональный куратор на период адаптации', en: 'Personal mentor during adaptation period', kz: 'Бейімделу кезінде жеке куратор' },
  's.3.p2': { ru: 'Подсказки по бытовым вопросам: связь, сервисы, городская среда', en: 'Practical help with mobile service, daily services, and navigating the city', kz: 'Байланыс, сервистер және қалада бағдарлану бойынша тұрмыстық көмек' },
  's.3.p3': { ru: 'Вовлечение в студенческую среду и международное сообщество университета', en: 'Integration into student life and the university international community', kz: 'Студенттік ортаға және университеттің халықаралық қауымдастығына бейімдеу' },

  // FAQ
  'faq.kicker': { ru: 'Часто задаваемые вопросы', en: 'Frequently Asked Questions', kz: 'Жиі қойылатын сұрақтар' },
  'faq.title': { ru: 'Ответы на главные вопросы', en: 'Answers to Key Questions', kz: 'Негізгі сұрақтарға жауаптар' },
  'faq.subtitle': {
    ru: 'Не нашли ответ? Напишите нам — ответим в течение суток.',
    en: "Didn't find your answer? Write to us — we reply within 24 hours.",
    kz: 'Жауап таппадыңыз ба? Жазыңыз — бір тәулік ішінде жауап береміз.'
  },

  'faq.1.q': { ru: 'Какие документы нужны для поступления?', en: 'What documents are needed for admission?', kz: 'Түсу үшін қандай құжаттар қажет?' },
  'faq.1.a': {
    ru: 'Диплом/аттестат с нотариальным переводом, транскрипт оценок, паспорт (копия), 6 фотографий 3×4, медицинская справка об отсутствии ВИЧ/туберкулёза, сертификат о знании языка (при наличии). Все документы загружаются через платформу.',
    en: 'Diploma/certificate with notarized translation, transcript, passport copy, 6 photos 3×4, medical certificate (HIV/TB-free), language certificate (if available). All documents uploaded via the platform.',
    kz: 'Нотариалдық аудармасымен диплом/аттестат, транскрипт, паспорт көшірмесі, 6 фото 3×4, медициналық анықтама (АИТВ/туберкулезсіз), тіл сертификаты (болса). Барлық құжаттар платформа арқылы жүктеледі.'
  },

  'faq.2.q': { ru: 'Сколько стоит обучение?', en: 'How much does studying cost?', kz: 'Оқу қанша тұрады?' },
  'faq.2.a': {
    ru: 'Стоимость зависит от программы и формы обучения. В ваших новых материалах бакалавриат указан как стартующий примерно от $1 000 в год, а точные суммы университет рекомендует подтверждать при подаче заявки.',
    en: 'Cost depends on the program and study format. Your newer materials mention bachelor studies starting from about $1,000 per year, while exact fees should be confirmed during application.',
    kz: 'Баға бағдарламаға және оқу нысанына байланысты. Жаңа материалдарыңызда бакалавриат шамамен жылына $1 000-нан басталатыны көрсетілген, ал нақты соманы өтінім кезінде университетпен нақтылау ұсынылады.'
  },

  'faq.3.q': { ru: 'Нужно ли знать казахский или русский язык?', en: 'Do I need to know Kazakh or Russian?', kz: 'Қазақша немесе орысша білу керек пе?' },
  'faq.3.a': {
    ru: 'Большинство программ ведётся на казахском и русском. Для тех, кто не владеет языком, есть подготовительные курсы (1 год). После них студент переходит на основную программу. Некоторые программы доступны на английском.',
    en: 'Most programs are taught in Kazakh and Russian. For those without language proficiency, there are preparatory courses (1 year). After that, students move to the main program. Some programs are available in English.',
    kz: 'Бағдарламалардың көпшілігі қазақ және орыс тілдерінде жүргізіледі. Тілді білмейтіндерге дайындық курстары бар (1 жыл). Одан кейін студент негізгі бағдарламаға ауысады. Кейбір бағдарламалар ағылшын тілінде қолжетімді.'
  },

  'faq.4.q': { ru: 'Как получить приглашение от университета?', en: 'How do I get the university invitation letter?', kz: 'Университеттен шақыру хатын қалай алуға болады?' },
  'faq.4.a': {
    ru: 'После положительного решения по заявке университет отправляет дальнейшие инструкции через личный кабинет и контакты, указанные в анкете. Формат визового сопровождения уточняется международным офисом по вашему кейсу.',
    en: 'After a positive application decision, the university sends the next instructions through your account and the contact details from the application. The visa-support format is clarified by the international office for your case.',
    kz: 'Өтінім бойынша оң шешім шыққаннан кейін университет келесі нұсқаулықтарды жеке кабинет пен анкетаңыздағы байланыс арналары арқылы жібереді. Визаға қатысты сүйемелдеу форматын халықаралық бөлім сіздің жағдайыңызға қарай нақтылайды.'
  },

  'faq.5.q': { ru: 'Как оформить студенческую визу?', en: 'How do I get a student visa?', kz: 'Студенттік визаны қалай рәсімдеуге болады?' },
  'faq.5.a': {
    ru: 'Обычно оформление проходит через посольство или консульство Казахстана в вашей стране на основании документов, согласованных после одобрения заявки. Точный пакет и сроки зависят от гражданства, поэтому их нужно дополнительно уточнять у консульства и международного офиса.',
    en: 'Student visa processing usually goes through the Kazakhstan embassy or consulate in your country based on the documents coordinated after your application is approved. The exact document list and timeline depend on citizenship, so they should be confirmed with the consulate and the international office.',
    kz: 'Студенттік виза әдетте өтінім мақұлданғаннан кейін келісілетін құжаттар негізінде өз еліңіздегі Қазақстан елшілігі немесе консулдығы арқылы рәсімделеді. Нақты құжаттар тізімі мен мерзім азаматтыққа байланысты болғандықтан, оларды консулдық пен халықаралық бөлімнен нақтылау қажет.'
  },

  'faq.6.q': { ru: 'Где будут проживать иностранные студенты?', en: 'Where will international students live?', kz: 'Шетелдік студенттер қайда тұрады?' },
  'faq.6.a': {
    ru: 'У университета 6 общежитий, а иностранным студентам предоставляется приоритетное размещение. В материалах университета указан ориентир по проживанию примерно от 10 000 тг в месяц, но точные условия лучше подтверждать при заселении.',
    en: 'The university has 6 dormitories, and international students receive priority placement. University materials mention housing from around 10,000 KZT per month, but exact conditions should be confirmed during placement.',
    kz: 'Университетте 6 жатақхана бар, ал шетелдік студенттерге басым орналастыру қарастырылған. Университет материалдарында тұру құны шамамен айына 10 000 теңгеден басталатыны көрсетілген, бірақ нақты шарттарды орналасу кезінде нақтылаған дұрыс.'
  },

  'faq.7.q': { ru: 'Как добраться до Кызылорды?', en: 'How to get to Kyzylorda?', kz: 'Қызылордаға қалай жетуге болады?' },
  'faq.7.a': {
    ru: 'Обычно студенты добираются до Кызылорды через внутренние авиарейсы из крупных городов Казахстана. После прибытия университет помогает с навигацией, регистрацией и заселением.',
    en: 'Students usually reach Kyzylorda via domestic flights from major cities of Kazakhstan. After arrival, the university helps with navigation, registration, and settling in.',
    kz: 'Студенттер Қызылордаға әдетте Қазақстанның ірі қалаларынан ішкі рейстер арқылы келеді. Келгеннен кейін университет бағдарлау, тіркелу және орналасу бойынша көмектеседі.'
  },

  'faq.8.q': { ru: 'Нужно ли приезжать для подачи документов?', en: 'Do I need to visit in person to apply?', kz: 'Құжат тапсыру үшін өзім келуім керек пе?' },
  'faq.8.a': {
    ru: 'Нет. Всё оформляется онлайн через нашу платформу. Приезжать нужно только после получения визы — для регистрации и зачисления. Оригиналы документов предъявляются при заселении.',
    en: 'No. Everything is processed online through our platform. You only need to arrive in person after receiving your visa — for registration and enrollment. Original documents are presented upon arrival.',
    kz: 'Жоқ. Бәрі платформамыз арқылы онлайн рәсімделеді. Виза алғаннан кейін тіркелу және тіркелу үшін ғана келу керек. Түпнұсқа құжаттар тіркелу кезінде көрсетіледі.'
  },

  // Contacts
  'contacts.kicker': { ru: 'Свяжитесь с нами', en: 'Get in Touch', kz: 'Бізбен байланысыңыз' },
  'contacts.title': { ru: 'Мы всегда на связи', en: "We're Always Here", kz: 'Біз әрқашан байланыстамыз' },
  'contacts.desc': {
    ru: 'Есть вопросы? Напишите на почту, позвоните или найдите нас в соцсетях. Ответим в течение одного рабочего дня.',
    en: 'Have questions? Email us, call, or find us on social media. We respond within one business day.',
    kz: 'Сұрақтарыңыз бар ма? Поштаға жазыңыз, қоңырау шалыңыз немесе бізді әлеуметтік желілерде табыңыз. Бір жұмыс күні ішінде жауап береміз.'
  },
  'contacts.email.label': { ru: 'Электронная почта', en: 'Email', kz: 'Электрондық пошта' },
  'contacts.phone.label': { ru: 'Телефон', en: 'Phone', kz: 'Телефон' },
  'contacts.address.label': { ru: 'Адрес', en: 'Address', kz: 'Мекенжай' },
  'contacts.socials': { ru: 'Мы в соцсетях', en: 'Follow us', kz: 'Бізді бақылаңыз' },

  // Footer
  'footer.desc': { ru: 'Платформа приёма иностранных студентов Университета Коркыт Ата', en: 'International Admissions Platform of Korkyt Ata University', kz: 'Қорқыт Ата университетінің шетелдік студенттерді қабылдау платформасы' },
  'footer.nav': { ru: 'Навигация', en: 'Navigation', kz: 'Навигация' },
  'footer.contacts': { ru: 'Контакты', en: 'Contacts', kz: 'Байланыс' },
  'footer.address': { ru: 'ул. Айтеке би, 29А, Кызылорда, Казахстан', en: '29A Ayteke Bi str., Kyzylorda, Kazakhstan', kz: 'Әйтеке би к., 29А, Қызылорда, Қазақстан' },
  'footer.rights': { ru: '© 2026 Korkyt Ata University. Все права защищены.', en: '© 2026 Korkyt Ata University. All rights reserved.', kz: '© 2026 Қорқыт Ата университеті. Барлық құқықтар қорғалған.' },
}

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LangContext = createContext<LangContextType | undefined>(undefined)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('korkyt-lang') as Lang
    return saved || 'ru'
  })

  const changeLang = (l: Lang) => {
    setLang(l)
    localStorage.setItem('korkyt-lang', l)
  }

  const t = (key: string): string => {
    return translations[key]?.[lang] || key
  }

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
