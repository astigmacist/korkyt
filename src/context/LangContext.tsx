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
  'hero.badge': { ru: 'Приём иностранных студентов — 2025/26', en: 'International Admissions — 2025/26', kz: 'Шетелдік студенттерді қабылдау — 2025/26' },
  'hero.title1': { ru: 'Поступите в Казахстан —', en: 'Study in Kazakhstan —', kz: 'Қазақстанда оқыңыз —' },
  'hero.title2': { ru: 'с нами легко', en: 'we make it easy', kz: 'бізбен оңай' },
  'hero.subtitle': {
    ru: 'Университет Коркыт Ата в Кызылорде. Государственный диплом, бюджетные места для иностранцев, полное сопровождение от подачи документов до выпуска.',
    en: 'Korkyt Ata University in Kyzylorda. State-recognized diploma, budget places for international students, full support from application to graduation.',
    kz: 'Қызылордадағы Қорқыт Ата атындағы университет. Мемлекеттік диплом, шетелдіктерге арналған бюджет орындары, өтінімнен бітіруге дейін толық сүйемелдеу.'
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
    ru: 'Собрали ключевые шаги — от подготовки документов до приезда в Кызылорду',
    en: 'We gathered the key steps — from preparing documents to arriving in Kyzylorda',
    kz: 'Құжаттарды дайындаудан Қызылордаға келуге дейін негізгі қадамдарды жинадық'
  },

  'hl.docs.title': { ru: 'Документы для поступления', en: 'Required Documents', kz: 'Түсу үшін құжаттар' },
  'hl.docs.text': {
    ru: 'Диплом/аттестат + нотариальный перевод, транскрипт оценок, паспорт (копия), 6 фотографий 3×4, медицинская справка, сертификат по языку (при наличии). Все документы загружаются онлайн — приезжать не нужно.',
    en: 'Diploma/certificate + notarized translation, transcript, passport copy, 6 photos 3×4, medical certificate, language certificate (if available). All documents uploaded online — no need to visit in person.',
    kz: 'Диплом/аттестат + нотариалдық аударма, транскрипт, паспорт көшірмесі, 6 фото 3×4, медициналық анықтама, тіл сертификаты (болса). Барлық құжаттар онлайн жүктеледі — адамды барудың қажеті жоқ.'
  },

  'hl.visa.title': { ru: 'Оформление визы', en: 'Visa Application', kz: 'Виза рәсімдеу' },
  'hl.visa.text': {
    ru: 'После зачисления университет выдаёт официальное приглашение. С ним вы оформляете студенческую визу в посольстве РК в вашей стране. Срок оформления — до 30 дней.',
    en: 'After enrollment, the university issues an official invitation letter. Use it to apply for a student visa at the Kazakh embassy in your country. Processing time: up to 30 days.',
    kz: 'Тіркелгеннен кейін университет ресми шақыру хатын береді. Оны өз еліңіздегі ҚР елшілігінде студенттік виза алу үшін пайдаланасыз. Рәсімдеу мерзімі — 30 күнге дейін.'
  },

  'hl.fee.title': { ru: 'Государственная пошлина', en: 'State Fee', kz: 'Мемлекеттік баж' },
  'hl.fee.text': {
    ru: '8 МРП ≈ 29 000 тг (≈ $65). Оплачивается при оформлении приглашения.',
    en: '8 MRP ≈ 29,000 KZT (≈ $65). Paid when processing the university invitation.',
    kz: '8 АЕК ≈ 29 000 тг (≈ $65). Шақыру хатын рәсімдеу кезінде төленеді.'
  },

  'hl.flight.title': { ru: 'Перелёт в Кызылорду', en: 'Getting to Kyzylorda', kz: 'Қызылордаға ұшу' },
  'hl.flight.text': {
    ru: 'Прямые рейсы из Алматы и Астаны. Аэропорт Кызылорды в 15 минутах от кампуса. Встреча в аэропорту организуется университетом.',
    en: 'Direct flights from Almaty and Astana. Kyzylorda airport is 15 min from campus. The university organizes airport pickup.',
    kz: 'Алматы мен Астанадан тікелей рейстер. Қызылорда аэропорты кампустан 15 минут. Университет аэропортта қарсы алады.'
  },

  'hl.dorm.title': { ru: 'Общежитие', en: 'Dormitory', kz: 'Жатақхана' },
  'hl.dorm.text': {
    ru: '5 общежитий на кампусе. Гарантировано место для иностранных студентов от ~8 000 тг/мес.',
    en: '5 dormitories on campus. Guaranteed place for international students from ~8,000 KZT/month.',
    kz: 'Кампуста 5 жатақхана. Шетелдік студенттерге ~8 000 тг/ай бастап орын кепілдендіріледі.'
  },

  'hl.city.title': { ru: 'Кызылорда — комфортный город для жизни', en: 'Kyzylorda — comfortable city for life', kz: 'Қызылорда — тűрмыспен қолайлы қала' },
  'hl.city.text': {
    ru: 'Население 400 000 человек, мягкий климат, низкая стоимость жизни, богатая культура. Студенческий город со множеством кафе, парков и транспортной доступностью.',
    en: 'Population 400,000, mild climate, low cost of living, rich culture. A student-friendly city with cafes, parks and easy transport access.',
    kz: '400 000 тұрғын, жайлы климат, тұрмыс қымбаттылығы аз, бай мәдениет. Кафе, саябақтар мен қолайлы көліктері бар студенттік қала.'
  },

  // Journey
  'journey.kicker': { ru: 'Шаги поступления', en: 'Admission Steps', kz: 'Түсу қадамдары' },
  'journey.title': { ru: 'Полный путь от заявки до учёбы', en: 'Full Journey from Application to Studies', kz: 'Өтінімнен оқуға дейінгі толық жол' },
  'journey.desc': {
    ru: 'Прозрачный процесс — вы всегда знаете, что делать на каждом этапе',
    en: 'A transparent process — you always know what to do at each stage',
    kz: 'Ашық процесс — әр кезеңде не істеу керектігін әрқашан білесіз'
  },

  'j.1': { ru: 'Выбрать программу', en: 'Choose a Program', kz: 'Бағдарлама таңдау' },
  'j.1.desc': {
    ru: 'Изучите каталог программ, требования и проходные баллы на нашем сайте.',
    en: 'Review the program catalog, requirements and entry scores on our website.',
    kz: 'Сайтымыздан бағдарламалар каталогын, талаптарды және кіру балдарын қараңыз.'
  },

  'j.2': { ru: 'Создать профиль абитуриента', en: 'Create Applicant Profile', kz: 'Абитуриент профилін жасау' },
  'j.2.desc': {
    ru: 'Зарегистрируйтесь на платформе и заполните анкету. Это займёт 15–20 минут.',
    en: 'Register on the platform and fill in your profile. This takes 15–20 minutes.',
    kz: 'Платформада тіркеліп, анкетаны толтырыңыз. Бұл 15–20 минут алады.'
  },

  'j.3': { ru: 'Загрузить документы', en: 'Upload Documents', kz: 'Құжаттарды жүктеу' },
  'j.3.desc': {
    ru: 'Диплом, транскрипт, паспорт, медсправка — всё в цифровом формате, без МФЦ.',
    en: 'Diploma, transcript, passport, medical cert — everything digital, no in-person visit.',
    kz: 'Диплом, транскрипт, паспорт, медициналық анықтама — бәрі цифрлы, МФЦ жоқ.'
  },

  'j.4': { ru: 'Рассмотрение заявки', en: 'Application Review', kz: 'Өтінімді қарау' },
  'j.4.desc': {
    ru: 'Комиссия рассматривает заявку до 10 рабочих дней. Статус видно в личном кабинете.',
    en: 'The committee reviews your application within 10 working days. Track status in your account.',
    kz: 'Комиссия өтінімді 10 жұмыс күні ішінде қарайды. Мәртебені жеке кабинетте бақылаңыз.'
  },

  'j.5': { ru: 'Получить приглашение', en: 'Receive Invitation Letter', kz: 'Шақыру хатын алу' },
  'j.5.desc': {
    ru: 'После одобрения университет выдаёт официальное приглашение для оформления визы.',
    en: 'After approval, the university issues an official invitation letter for your visa.',
    kz: 'Мақұлданғаннан кейін университет визаға арналған ресми шақыру хатын береді.'
  },

  'j.6': { ru: 'Оформить визу и прилететь', en: 'Get Visa & Arrive', kz: 'Виза алу және келу' },
  'j.6.desc': {
    ru: 'Оформите визу в посольстве РК, купите билет. Встреча в аэропорту организована.',
    en: 'Apply for a visa at the Kazakh embassy, book your flight. Airport pickup is organized.',
    kz: 'ҚР елшілігінде виза алыңыз, билет сатып алыңыз. Аэропортта қарсы алу ұйымдастырылған.'
  },

  'j.7': { ru: 'Зачисление и начало учёбы', en: 'Enrollment & Start Studying', kz: 'Тіркелу және оқуды бастау' },
  'j.7.desc': {
    ru: 'Регистрация по месту жительства, получение студенческого билета, начало семестра.',
    en: 'Residence registration, student ID, start of semester — we guide you through everything.',
    kz: 'Тұрғылықты жер бойынша тіркеу, студенттік билет алу, семестр басталуы — бәрінде жетелейміз.'
  },

  // Programs
  'programs.kicker': { ru: 'Образовательные программы', en: 'Educational Programs', kz: 'Білім беру бағдарламалары' },
  'programs.title': { ru: 'Выберите своё направление', en: 'Choose Your Direction', kz: 'Бағытыңызды таңдаңыз' },
  'programs.desc': {
    ru: 'Государственный диплом казахстанского образца. Бюджетные и платные места для иностранных студентов.',
    en: 'State-recognized Kazakh diploma. Budget and paid places for international students.',
    kz: 'Мемлекеттік үлгідегі диплом. Шетелдік студенттерге бюджет және ақылы орындар.'
  },
  'programs.all': { ru: 'Все программы', en: 'All Programs', kz: 'Барлық бағдарламалар' },
  'programs.popular': { ru: 'ПОПУЛЯРНО', en: 'POPULAR', kz: 'ТАНЫМАЛ' },

  'p.1.title': { ru: 'Бакалавриат', en: "Bachelor's Degree", kz: 'Бакалавриат' },
  'p.1.meta': { ru: '4 года · 70+ специальностей · Очно', en: '4 years · 70+ specialties · Full-time', kz: '4 жыл · 70+ мамандық · Күндізгі' },
  'p.1.text': {
    ru: 'Широкий выбор: инженерия, IT, педагогика, медицина, экономика, гуманитарные науки. Диплом признаётся в странах СНГ и за рубежом.',
    en: 'Wide selection: engineering, IT, education, medicine, economics, humanities. Diploma recognized in CIS countries and abroad.',
    kz: 'Кең таңдау: инженерлік, IT, педагогика, медицина, экономика, гуманитарлық ғылымдар. Диплом ТМД елдерінде және шетелде танылады.'
  },
  'p.1.spec1': { ru: '🖥 Информационные технологии', en: '🖥 Information Technologies', kz: '🖥 Ақпараттық технологиялар' },
  'p.1.spec2': { ru: '⚙️ Инженерные направления', en: '⚙️ Engineering Programs', kz: '⚙️ Инженерлік бағыттар' },
  'p.1.spec3': { ru: '📊 Экономика и менеджмент', en: '📊 Economics & Management', kz: '📊 Экономика және менеджмент' },

  'p.2.title': { ru: 'Магистратура', en: "Master's Degree", kz: 'Магистратура' },
  'p.2.meta': { ru: '2 года · Очная и заочная', en: '2 years · Full-time & Part-time', kz: '2 жыл · Күндізгі және сырттай' },
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
    ru: 'После зачисления начинается самое важное — адаптация. Мы сопровождаем с первого дня до выпуска.',
    en: 'After enrollment, the most important stage begins — adaptation. We support you from day one to graduation.',
    kz: 'Тіркелгеннен кейін ең маңызды кезең басталады — бейімделу. Біз сізді бірінші күннен бітіруге дейін сүйемелдейміз.'
  },

  's.1.title': { ru: 'Виза и миграционный учёт', en: 'Visa & Migration Registration', kz: 'Виза және миграциялық есеп' },
  's.1.p1': { ru: 'Помощь с оформлением студенческой визы', en: 'Assistance with student visa application', kz: 'Студенттік виза рәсімдеуге көмек' },
  's.1.p2': { ru: 'Регистрация по месту пребывания (5 рабочих дней)', en: 'Residence registration (5 working days)', kz: 'Тұрғылықты жер бойынша тіркеу (5 жұмыс күні)' },
  's.1.p3': { ru: 'Продление визы и миграционного статуса', en: 'Visa and migration status renewal', kz: 'Виза және миграциялық мәртебені ұзарту' },
  's.1.p4': { ru: 'Помощь с получением ИИН', en: 'Support with obtaining IIN (tax ID)', kz: 'ЖСН алуға жәрдем' },

  's.2.title': { ru: 'Жильё и кампус', en: 'Housing & Campus', kz: 'Тұрғын үй және кампус' },
  's.2.p1': { ru: '5 общежитий, место гарантировано иностранцам', en: '5 dormitories, place guaranteed for internationals', kz: '5 жатақхана, шетелдіктерге орын кепілдендіріледі' },
  's.2.p2': { ru: 'Столовые, медпункт, спортзалы на кампусе', en: 'Canteens, medical center, gyms on campus', kz: 'Асхана, медпункт, спортзалдар кампуста' },
  's.2.p3': { ru: 'Транспорт от кампуса до центра города', en: 'Transport from campus to city center', kz: 'Кампустан қала орталығына дейін көлік' },

  's.3.title': { ru: 'Адаптация и кураторы', en: 'Adaptation & Mentors', kz: 'Бейімделу және кураторлар' },
  's.3.p1': { ru: 'Персональный куратор на период адаптации', en: 'Personal mentor during adaptation period', kz: 'Бейімделу кезінде жеке куратор' },
  's.3.p2': { ru: 'Помощь с банковским счетом и SIM-картой', en: 'Help with bank account and SIM card', kz: 'Банк шоты және SIM карта алуға жәрдем' },
  's.3.p3': { ru: 'Студенческий клуб иностранных студентов', en: 'International student club', kz: 'Шетелдік студенттер клубы' },

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
    ru: 'Стоимость зависит от программы и формы обучения. Бакалавриат: от 450 000 до 900 000 тг в год ($1 000–2 000). Для иностранных студентов доступны бюджетные места по квоте Министерства образования. Уточняйте актуальные данные при подаче заявки.',
    en: 'Cost depends on program and form. Bachelor\'s: from 450,000 to 900,000 KZT/year ($1,000–2,000). Budget places are available for international students through Ministry of Education quota. Check current rates when applying.',
    kz: 'Баға бағдарламаға және оқу нысанына байланысты. Бакалавриат: жылына 450 000–900 000 тг ($1 000–2 000). Шетелдік студенттерге Білім министрлігінің квотасы бойынша бюджет орындары бар. Өтінім берген кезде ағымдағы деректерді нақтылаңыз.'
  },

  'faq.3.q': { ru: 'Нужно ли знать казахский или русский язык?', en: 'Do I need to know Kazakh or Russian?', kz: 'Қазақша немесе орысша білу керек пе?' },
  'faq.3.a': {
    ru: 'Большинство программ ведётся на казахском и русском. Для тех, кто не владеет языком, есть подготовительные курсы (1 год). После них студент переходит на основную программу. Некоторые программы доступны на английском.',
    en: 'Most programs are taught in Kazakh and Russian. For those without language proficiency, there are preparatory courses (1 year). After that, students move to the main program. Some programs are available in English.',
    kz: 'Бағдарламалардың көпшілігі қазақ және орыс тілдерінде жүргізіледі. Тілді білмейтіндерге дайындық курстары бар (1 жыл). Одан кейін студент негізгі бағдарламаға ауысады. Кейбір бағдарламалар ағылшын тілінде қолжетімді.'
  },

  'faq.4.q': { ru: 'Как получить приглашение от университета?', en: 'How do I get the university invitation letter?', kz: 'Университеттен шақыру хатын қалай алуға болады?' },
  'faq.4.a': {
    ru: 'После одобрения вашей заявки комиссией, университет автоматически оформляет приглашение. Документ отправляется вам в личный кабинет и по электронной почте. Государственная пошлина за оформление — 8 МРП (≈ 29 000 тг).',
    en: 'After your application is approved by the committee, the university automatically prepares the invitation letter. The document is sent to your personal account and email. The state fee for processing is 8 MRP (≈ 29,000 KZT).',
    kz: 'Комиссия өтінімді мақұлдағаннан кейін университет автоматты түрде шақыру хатын дайындайды. Құжат жеке кабинетіңізге және электрондық поштаңызға жіберіледі. Рәсімдеу үшін мемлекеттік баж — 8 АЕК (≈ 29 000 тг).'
  },

  'faq.5.q': { ru: 'Как оформить студенческую визу?', en: 'How do I get a student visa?', kz: 'Студенттік визаны қалай рәсімдеуге болады?' },
  'faq.5.a': {
    ru: 'Имея на руках приглашение от университета, обратитесь в посольство или консульство РК в вашей стране. Предоставьте: приглашение, паспорт, фото, медсправку. Срок рассмотрения — до 30 рабочих дней. Виза выдаётся на 1 год с возможностью продления.',
    en: 'With the university invitation in hand, visit the Kazakhstan embassy or consulate in your country. Provide: invitation, passport, photo, medical certificate. Processing: up to 30 working days. Visa is issued for 1 year, renewable.',
    kz: 'Университеттің шақыру хаты бар болса, өз еліңіздегі ҚР елшілігіне немесе консулдығына барыңыз. Ұсыныңыз: шақыру, паспорт, фото, медициналық анықтама. Қарау мерзімі — 30 жұмыс күніне дейін. Виза 1 жылға беріледі, ұзартылуы мүмкін.'
  },

  'faq.6.q': { ru: 'Где будут проживать иностранные студенты?', en: 'Where will international students live?', kz: 'Шетелдік студенттер қайда тұрады?' },
  'faq.6.a': {
    ru: 'На кампусе 5 современных общежитий. Для иностранных студентов место гарантировано. Стоимость: от 8 000 тг/месяц (~$18). В общежитиях есть Wi-Fi, кухни, прачечные, охрана 24/7.',
    en: 'The campus has 5 modern dormitories. Places are guaranteed for international students. Cost: from 8,000 KZT/month (~$18). Dormitories have Wi-Fi, kitchens, laundry, 24/7 security.',
    kz: 'Кампуста 5 заманауи жатақхана бар. Шетелдік студенттерге орын кепілдендіріледі. Бағасы: айына 8 000 тг-дан (~$18). Жатақханаларда Wi-Fi, ас үй, кір жуатын бөлме, 24/7 қауіпсіздік бар.'
  },

  'faq.7.q': { ru: 'Как добраться до Кызылорды?', en: 'How to get to Kyzylorda?', kz: 'Қызылордаға қалай жетуге болады?' },
  'faq.7.a': {
    ru: 'Прямые авиарейсы из Алматы (1.5 ч), Астаны (2 ч). Международный аэропорт Кызылорды в 15 минутах от кампуса. Университет организует трансфер из аэропорта при предварительном уведомлении.',
    en: 'Direct flights from Almaty (1.5h), Astana (2h). Kyzylorda International Airport is 15 minutes from campus. The university organizes airport transfer with prior notice.',
    kz: 'Алматыдан тікелей ұшу (1.5 сағ), Астанадан (2 сағ). Қызылорданың халықаралық аэропорты кампустан 15 минутта. Университет алдын ала хабар берілген жағдайда аэропорттан трансфер ұйымдастырады.'
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
