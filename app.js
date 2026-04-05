/* حقيقة القومية العربية — ARAB NATIONALISM: REALITY & MYTH — app.js v1.0 */
/* Based on "Haqiqat al-Qawmiyah al-Arabiyah wa Usturah al-Ba'th al-Arabi" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'حقيقة القومية العربية',
    splashSub: 'الهوية والوحدة في ميزان الإسلام',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحجرات ٤٩: ١٣',
    tabHome: 'الرئيسية', tabTraits: 'المحاور', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'محاور الكتاب',
    traitsDesc: '٢٠ محوراً من كتاب الشيخ الغزالي — كل محور بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر معلوماتك عن القومية والهوية — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي المعرفية',
    progressDesc: 'تقدمك وإنجازاتك في فهم القومية والإسلام',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الوحدة والأخوّة',
    dailyLabel: '✨ محور اليوم',
    searchPlaceholder: 'ابحث في المحاور...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ محوراً من كتاب حقيقة القومية العربية',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Arab Nationalism: Reality & Myth',
    splashSub: 'Identity and unity in the light of Islam',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hujurat 49:13',
    tabHome: 'Home', tabTraits: 'Topics', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Book Topics',
    traitsDesc: '20 key topics from Sheikh al-Ghazali — each with a verse, hadith, and practical reflection',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of nationalism and identity — 4 choices per question',
    progressTitle: 'My Knowledge Journey',
    progressDesc: 'Your progress and achievements in understanding nationalism and Islam',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Unity & Brotherhood',
    dailyLabel: "✨ Today's Topic",
    searchPlaceholder: 'Search topics...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Reflect Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 key topics from Arab Nationalism: Reality & Myth',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Le Nationalisme Arabe : Realite et Mythe',
    splashSub: "L'identite et l'unite a la lumiere de l'Islam",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hujurat 49:13',
    tabHome: 'Accueil', tabTraits: 'Themes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Themes du Livre',
    traitsDesc: '20 themes cles du livre du Sheikh al-Ghazali — chacun avec un verset, un hadith et une reflexion pratique',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez vos connaissances sur le nationalisme et l\'identite — 4 choix par question',
    progressTitle: 'Mon Parcours',
    progressDesc: 'Vos progres et realisations dans la comprehension du nationalisme et de l\'Islam',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour l\'Unite et la Fraternite',
    dailyLabel: '✨ Theme du Jour',
    searchPlaceholder: 'Rechercher les themes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Reflechissez',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 themes cles du livre Le Nationalisme Arabe',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 TOPIC CARDS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🪞',
    ar:{title:'أزمة الهوية',desc:'يرفض الغزالي في "حقيقة القومية": يعاني العالم العربي من أزمة هوية عميقة بين الانتماء للإسلام والانتماء للقومية. الغزالي يرى أن الأمة فقدت بوصلتها حين استبدلت رابطة الإيمان برابطة العرق والدم.',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُمْ مِنْ ذَكَرٍ وَأُنْثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ١٣',hadith:'ليس منّا من دعا إلى عصبية — رواه أبو داود',action:'اسأل نفسك: هل هويتي مبنية على إيماني أم على عرقي؟ الإسلام يجمعنا جميعاً',young:'أنت مسلم أولاً! لا فرق بين عربي وغيره إلا بالتقوى والإيمان 🪞'},
    en:{title:'Identity Crisis',desc:'Al-Ghazali rejects in "The Truth of Nationalism": The Arab world suffers from a deep identity crisis between belonging to Islam and belonging to nationalism. Al-Ghazali argues the Ummah lost its compass when it replaced the bond of faith with the bond of race and blood.',verse:'O humanity, We created you from male and female and made you peoples and tribes that you may know one another',verseRef:'Al-Hujurat 13',hadith:'He is not one of us who calls to tribalism — Abu Dawud',action:'Ask yourself: is my identity built on my faith or my ethnicity? Islam unites us all',young:'You are a Muslim first! There is no difference between Arab and non-Arab except in faith 🪞'},
    fr:{title:'La Crise d\'Identite',desc:'Le monde arabe souffre d\'une profonde crise d\'identite entre l\'appartenance a l\'Islam et l\'appartenance au nationalisme. Al-Ghazali estime que la Oumma a perdu sa boussole quand elle a remplace le lien de la foi par celui de la race.',verse:'O humanite, Nous vous avons crees d\'un male et d\'une femelle et avons fait de vous des peuples et des tribus pour que vous vous connaissiez',verseRef:'Al-Hujurat 13',hadith:'N\'est pas des notres celui qui appelle au tribalisme — Abu Dawud',action:'Demandez-vous : mon identite est-elle fondee sur ma foi ou mon ethnie ? L\'Islam nous unit tous',young:'Tu es musulman d\'abord ! Il n\'y a pas de difference entre Arabe et non-Arabe sauf dans la foi 🪞'}
  },
  {
    id:2, emoji:'⚔️',
    ar:{title:'الإسلام والقومية',desc:'يرفض الغزالي في "حقيقة القومية": القومية فكرة تجعل الانتماء للعرق فوق كل رابطة. الإسلام يرفض هذا المنطق لأن رابطة الإيمان أقوى من رابطة الدم. المسلمون أمة واحدة بصرف النظر عن ألوانهم ولغاتهم.',verse:'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ',verseRef:'الحجرات ١٠',hadith:'المسلم أخو المسلم لا يظلمه ولا يخذله — رواه مسلم',action:'تعامل مع كل مسلم على أنه أخوك بغض النظر عن جنسيته أو لونه',young:'كل المسلمين إخوة! لا يهم من أي بلد أنت — الإيمان يجمعنا ⚔️'},
    en:{title:'Islam vs Nationalism',desc:'Al-Ghazali rejects in "The Truth of Nationalism": Nationalism makes ethnic belonging superior to all other bonds. Islam rejects this logic because the bond of faith is stronger than the bond of blood. Muslims are one nation regardless of their colors and languages.',verse:'The believers are but brothers',verseRef:'Al-Hujurat 10',hadith:'A Muslim is the brother of a Muslim; he does not wrong him or abandon him — Muslim',action:'Treat every Muslim as your brother regardless of their nationality or color',young:'All Muslims are brothers and sisters! It does not matter which country you are from — faith unites us ⚔️'},
    fr:{title:'L\'Islam contre le Nationalisme',desc:'Le nationalisme place l\'appartenance ethnique au-dessus de tout autre lien. L\'Islam rejette cette logique car le lien de la foi est plus fort que celui du sang. Les musulmans sont une seule nation.',verse:'Les croyants ne sont que des freres',verseRef:'Al-Hujurat 10',hadith:'Le musulman est le frere du musulman ; il ne lui fait pas de tort et ne l\'abandonne pas — Muslim',action:'Traitez chaque musulman comme votre frere quelle que soit sa nationalite ou sa couleur',young:'Tous les musulmans sont freres et soeurs ! Peu importe de quel pays tu viens — la foi nous unit ⚔️'}
  },
  {
    id:3, emoji:'🔍',
    ar:{title:'نقد البعث',desc:'يرفض الغزالي في "حقيقة القومية": حزب البعث رفع شعارات الوحدة والحرية لكنه في الواقع أنتج الاستبداد والتفرقة. الغزالي يكشف أن البعث استخدم القومية غطاءً لحكم الفرد وقمع الشعوب.',verse:'وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ',verseRef:'البقرة ١١',hadith:'كلكم راعٍ وكلكم مسؤول عن رعيته — متفق عليه',action:'احذر من الشعارات البراقة التي تخفي وراءها ظلماً — قيّم الأفعال لا الأقوال',young:'لا تصدق كل شعار جميل! انظر للأفعال وليس الكلام فقط 🔍'},
    en:{title:'Critique of Ba\'athism',desc:'The Ba\'ath party raised slogans of unity and freedom but in reality produced tyranny and division. Al-Ghazali reveals that Ba\'athism used nationalism as a cover for one-man rule and oppression of peoples.',verse:'And when it is said to them: Do not cause corruption on earth, they say: We are only reformers',verseRef:'Al-Baqarah 11',hadith:'Each of you is a shepherd and each is responsible for their flock — Agreed upon',action:'Beware of shiny slogans that hide injustice — judge actions, not words',young:'Do not believe every nice slogan! Look at actions, not just words 🔍'},
    fr:{title:'Critique du Baathisme',desc:'Al-Ghazali rejette dans "La Vérité du Nationalisme": Le parti Baath a brandi des slogans d\'unite et de liberte mais a en realite produit la tyrannie et la division. Al-Ghazali revele que le baathisme a utilise le nationalisme comme couverture pour le pouvoir d\'un seul homme.',verse:'Et quand on leur dit : Ne semez pas la corruption sur terre, ils disent : Nous ne sommes que des reformateurs',verseRef:'Al-Baqarah 11',hadith:'Chacun de vous est un berger et chacun est responsable de son troupeau — Unanimement reconnu',action:'Mefiez-vous des slogans brillants qui cachent l\'injustice — jugez les actes, pas les paroles',young:'Ne crois pas chaque beau slogan ! Regarde les actions, pas seulement les mots 🔍'}
  },
  {
    id:4, emoji:'🕌',
    ar:{title:'الوحدة بالإيمان',desc:'يرفض الغزالي في "حقيقة القومية": الوحدة الحقيقية بين المسلمين لا تقوم على العرق أو اللغة بل على الإيمان بالله. التاريخ يثبت أن المسلمين حين اجتمعوا على الدين بنوا حضارة عظيمة تسع الجميع.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ١٠٣',hadith:'مثل المؤمنين في توادهم كمثل الجسد الواحد — متفق عليه',action:'ابنِ جسوراً مع إخوانك المسلمين من كل الجنسيات — الإيمان يوحّدنا',young:'الإيمان يجمعنا مثل الحبل القوي! كلنا أمة واحدة 🕌'},
    en:{title:'Unity Through Faith',desc:'Al-Ghazali rejects in "The Truth of Nationalism": True unity among Muslims is not based on race or language but on faith in God. History proves that when Muslims united through religion they built a great civilization that embraced everyone.',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Al Imran 103',hadith:'The believers in their mutual love are like one body — Agreed upon',action:'Build bridges with your Muslim brothers from all nationalities — faith unites us',young:'Faith brings us together like a strong rope! We are all one Ummah 🕌'},
    fr:{title:'L\'Unite par la Foi',desc:'La vraie unite entre musulmans ne repose pas sur la race ou la langue mais sur la foi en Dieu. L\'histoire prouve que lorsque les musulmans se sont unis par la religion, ils ont bati une grande civilisation.',verse:'Et accrochez-vous tous ensemble a la corde d\'Allah et ne vous divisez pas',verseRef:'Al Imran 103',hadith:'Les croyants dans leur amour mutuel sont comme un seul corps — Unanimement reconnu',action:'Construisez des ponts avec vos freres musulmans de toutes nationalites — la foi nous unit',young:'La foi nous rassemble comme une corde solide ! Nous sommes tous une seule Oumma 🕌'}
  },
  {
    id:5, emoji:'🏴',
    ar:{title:'الجذور الاستعمارية',desc:'يرفض الغزالي في "حقيقة القومية": القومية العربية لم تنشأ من فراغ بل زرعها الاستعمار لتفريق المسلمين. الغزالي يبين أن الغرب شجّع القومية ليحل العرق محل الدين ويضعف الأمة من الداخل.',verse:'وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ مِلَّتَهُمْ',verseRef:'البقرة ١٢٠',hadith:'لا تزال طائفة من أمتي ظاهرين على الحق — رواه مسلم',action:'ادرس تاريخ بلادك بعين نقدية — افهم كيف استُخدمت القومية لتفريقنا',young:'تعلّم التاريخ الحقيقي! بعض الأفكار جاءت لتفرّقنا وليس لتجمعنا 🏴'},
    en:{title:'Colonial Roots',desc:'Al-Ghazali rejects in "The Truth of Nationalism": Arab nationalism did not arise from a vacuum — it was planted by colonialism to divide Muslims. Al-Ghazali shows how the West encouraged nationalism to replace religion with race and weaken the Ummah from within.',verse:'And the Jews and Christians will never be pleased with you until you follow their way',verseRef:'Al-Baqarah 120',hadith:'A group of my Ummah will always remain victorious on truth — Muslim',action:'Study the history of your country with a critical eye — understand how nationalism was used to divide us',young:'Learn real history! Some ideas came to divide us, not to unite us 🏴'},
    fr:{title:'Les Racines Coloniales',desc:'Al-Ghazali rejette dans "La Vérité du Nationalisme": Le nationalisme arabe n\'est pas ne du neant — il a ete plante par le colonialisme pour diviser les musulmans. Al-Ghazali montre comment l\'Occident a encourage le nationalisme pour remplacer la religion par la race.',verse:'Et les Juifs et les Chretiens ne seront jamais satisfaits de toi jusqu\'a ce que tu suives leur voie',verseRef:'Al-Baqarah 120',hadith:'Un groupe de ma Oumma restera toujours victorieux sur la verite — Muslim',action:'Etudiez l\'histoire de votre pays avec un oeil critique — comprenez comment le nationalisme a ete utilise pour nous diviser',young:'Apprends la vraie histoire ! Certaines idees sont venues pour nous diviser, pas pour nous unir 🏴'}
  },
  {
    id:6, emoji:'🗣️',
    ar:{title:'اللغة والعرق',desc:'يرفض الغزالي في "حقيقة القومية": اللغة العربية نعمة عظيمة لكنها ليست معياراً للأفضلية. الإسلام لا يفرق بين الناس بلغاتهم بل بتقواهم. بلال الحبشي وسلمان الفارسي وصهيب الرومي كلهم صحابة أجلاء.',verse:'وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ',verseRef:'الروم ٢٢',hadith:'لا فضل لعربي على أعجمي إلا بالتقوى — رواه أحمد',action:'تعلم لغة جديدة وتعرف على ثقافات إسلامية مختلفة — التنوع ثروة',young:'اللغات كثيرة والدين واحد! تعلّم عن ثقافات المسلمين المختلفة 🗣️'},
    en:{title:'Language vs Ethnicity',desc:'Al-Ghazali rejects in "The Truth of Nationalism": The Arabic language is a great blessing but it is not a standard of superiority. Islam does not differentiate between people by their languages but by their piety. Bilal, Salman, and Suhayb were all honored companions.',verse:'And of His signs is the creation of the heavens and earth and the diversity of your languages and colors',verseRef:'Ar-Rum 22',hadith:'No Arab has superiority over a non-Arab except by piety — Ahmad',action:'Learn a new language and discover different Islamic cultures — diversity is wealth',young:'Languages are many but the religion is one! Learn about the diverse cultures of Muslims 🗣️'},
    fr:{title:'Langue contre Ethnie',desc:'Al-Ghazali rejette dans "La Vérité du Nationalisme": La langue arabe est une grande benediction mais elle n\'est pas un critere de superiorite. L\'Islam ne differencie pas les gens par leurs langues mais par leur piete. Bilal, Salman et Suhayb etaient tous d\'honores compagnons.',verse:'Et parmi Ses signes la creation des cieux et de la terre et la diversite de vos langues et couleurs',verseRef:'Ar-Rum 22',hadith:'Aucun Arabe n\'a de superiorite sur un non-Arabe sauf par la piete — Ahmad',action:'Apprenez une nouvelle langue et decouvrez differentes cultures islamiques — la diversite est une richesse',young:'Les langues sont nombreuses mais la religion est une ! Decouvre les differentes cultures des musulmans 🗣️'}
  },
  {
    id:7, emoji:'🏛️',
    ar:{title:'سقوط الخلافة',desc:'سقوط الخلافة العثمانية كان نقطة تحول كبرى. الغزالي يرى أن القوى الغربية ساهمت في تفكيكها باستخدام القومية سلاحاً. فقد المسلمون مظلة جامعة فتشرذموا.',verse:'وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ',verseRef:'الأنفال ٤٦',hadith:'يد الله مع الجماعة — رواه الترمذي',action:'اقرأ عن تاريخ سقوط الخلافة وأسبابه — تعلّم الدروس من الماضي',young:'حين تفرّق المسلمون ضعفوا! الوحدة قوة والتفرقة ضعف 🏛️'},
    en:{title:'Ottoman Dissolution',desc:'Al-Ghazali rejects in "The Truth of Nationalism": The fall of the Ottoman Caliphate was a major turning point. Al-Ghazali argues that Western powers contributed to its dismantling using nationalism as a weapon. Muslims lost their unifying umbrella and became fragmented.',verse:'And do not dispute lest you lose courage and your strength departs',verseRef:'Al-Anfal 46',hadith:'The hand of Allah is with the community — Tirmidhi',action:'Read about the history of the Caliphate\'s fall and its causes — learn lessons from the past',young:'When Muslims became divided they became weak! Unity is strength and division is weakness 🏛️'},
    fr:{title:'La Dissolution Ottomane',desc:'Al-Ghazali rejette dans "La Vérité du Nationalisme": La chute du califat ottoman fut un tournant majeur. Al-Ghazali soutient que les puissances occidentales ont contribue a son demantelement en utilisant le nationalisme comme arme. Les musulmans ont perdu leur parapluie unificateur.',verse:'Et ne vous disputez pas sinon vous perdrez courage et votre force partira',verseRef:'Al-Anfal 46',hadith:'La main d\'Allah est avec la communaute — Tirmidhi',action:'Lisez l\'histoire de la chute du califat et ses causes — tirez des lecons du passe',young:'Quand les musulmans se sont divises, ils se sont affaiblis ! L\'unite est force et la division est faiblesse 🏛️'}
  },
  {
    id:8, emoji:'🗺️',
    ar:{title:'الحدود المصطنعة',desc:'حدود الدول العربية رسمها المستعمرون وفق مصالحهم لا وفق إرادة الشعوب. اتفاقية سايكس بيكو مزقت الأمة إلى دويلات ضعيفة يسهل السيطرة عليها.',verse:'إِنَّ هَذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاعْبُدُونِ',verseRef:'الأنبياء ٩٢',hadith:'المؤمن للمؤمن كالبنيان يشد بعضه بعضاً — متفق عليه',action:'فكّر كيف يمكن للمسلمين التعاون رغم الحدود — التكامل الاقتصادي والثقافي ممكن',young:'الحدود على الخريطة لا تمنعنا من أن نكون إخوة! التعاون ممكن دائماً 🗺️'},
    en:{title:'Artificial Borders',desc:'The borders of Arab states were drawn by colonizers according to their interests, not the will of the people. The Sykes-Picot agreement tore the Ummah into weak statelets easy to control.',verse:'Indeed this Ummah of yours is one Ummah and I am your Lord so worship Me',verseRef:'Al-Anbiya 92',hadith:'A believer to another believer is like a building whose parts support each other — Agreed upon',action:'Think about how Muslims can cooperate despite borders — economic and cultural integration is possible',young:'Borders on a map do not stop us from being brothers! Cooperation is always possible 🗺️'},
    fr:{title:'Les Frontieres Artificielles',desc:'Al-Ghazali rejette dans "La Vérité du Nationalisme": Les frontieres des Etats arabes ont ete tracees par les colonisateurs selon leurs interets, pas la volonte des peuples. L\'accord Sykes-Picot a dechire la Oumma en petits Etats faibles faciles a controler.',verse:'Certes cette Oumma qui est la votre est une Oumma unique et Je suis votre Seigneur alors adorez-Moi',verseRef:'Al-Anbiya 92',hadith:'Le croyant pour le croyant est comme un edifice dont les parties se soutiennent — Unanimement reconnu',action:'Reflechissez a comment les musulmans peuvent cooperer malgre les frontieres — l\'integration economique et culturelle est possible',young:'Les frontieres sur la carte ne nous empechent pas d\'etre freres ! La cooperation est toujours possible 🗺️'}
  },
  {
    id:9, emoji:'⚠️',
    ar:{title:'فشل العلمانية',desc:'العلمانية التي فُرضت على العالم العربي فشلت في تحقيق النهضة الموعودة. الغزالي يبين أن فصل الدين عن الحياة أنتج فراغاً روحياً وأخلاقياً ملأته الفوضى.',verse:'وَمَنْ أَعْرَضَ عَنْ ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنْكًا',verseRef:'طه ١٢٤',hadith:'تركت فيكم ما إن تمسكتم به لن تضلوا: كتاب الله وسنتي — رواه مالك',action:'اربط حياتك اليومية بقيم الإسلام — الدين ليس مجرد عبادات بل منهج حياة',young:'الإسلام يعلمنا كل شيء! ليس فقط الصلاة بل كيف نعيش حياة جميلة ⚠️'},
    en:{title:'Secularism\'s Failure',desc:'The secularism imposed on the Arab world failed to achieve the promised renaissance. Al-Ghazali shows that separating religion from life created a spiritual and moral vacuum filled by chaos.',verse:'And whoever turns away from My remembrance will have a miserable life',verseRef:'Taha 124',hadith:'I have left among you that which if you hold to you will never go astray: the Book of Allah and my Sunnah — Malik',action:'Connect your daily life to Islamic values — religion is not just worship but a way of life',young:'Islam teaches us everything! Not just prayer but how to live a beautiful life ⚠️'},
    fr:{title:'L\'Echec de la Laicite',desc:'La laicite imposee au monde arabe a echoue a realiser la renaissance promise. Al-Ghazali montre que separer la religion de la vie a cree un vide spirituel et moral rempli par le chaos.',verse:'Et quiconque se detourne de Mon rappel aura une vie miserable',verseRef:'Taha 124',hadith:'Je vous ai laisse ce qui si vous vous y accrochez vous ne vous egarerez jamais : le Livre d\'Allah et ma Sunnah — Malik',action:'Reliez votre vie quotidienne aux valeurs islamiques — la religion n\'est pas que le culte mais un mode de vie',young:'L\'Islam nous enseigne tout ! Pas seulement la priere mais comment vivre une belle vie ⚠️'}
  },
  {
    id:10, emoji:'🤝',
    ar:{title:'الأخوّة الإسلامية',desc:'الأخوة الإسلامية تتجاوز الحدود والأعراق. حين آخى النبي ﷺ بين المهاجرين والأنصار ضرب أروع مثال للوحدة المبنية على الإيمان لا على النسب.',verse:'وَأَلَّفَ بَيْنَ قُلُوبِهِمْ لَوْ أَنْفَقْتَ مَا فِي الْأَرْضِ جَمِيعًا مَا أَلَّفْتَ بَيْنَ قُلُوبِهِمْ',verseRef:'الأنفال ٦٣',hadith:'لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه — متفق عليه',action:'تواصل اليوم مع مسلم من بلد آخر — ابنِ صداقة تتخطى الحدود',young:'كن صديقاً لكل المسلمين! الإيمان يجعلنا أسرة واحدة كبيرة 🤝'},
    en:{title:'Islamic Brotherhood',desc:'Islamic brotherhood transcends borders and races. When the Prophet (PBUH) established brotherhood between the Muhajirun and Ansar he set the finest example of unity built on faith, not lineage.',verse:'And He united their hearts — if you had spent all that is on earth you could not have united their hearts',verseRef:'Al-Anfal 63',hadith:'None of you truly believes until he loves for his brother what he loves for himself — Agreed upon',action:'Connect today with a Muslim from another country — build a friendship that crosses borders',young:'Be friends with all Muslims! Faith makes us one big family 🤝'},
    fr:{title:'La Fraternite Islamique',desc:'Al-Ghazali rejette dans "La Vérité du Nationalisme": La fraternite islamique transcende les frontieres et les races. Quand le Prophete (PSL) a etabli la fraternite entre les Muhajirun et les Ansar il a donne le plus bel exemple d\'unite fondee sur la foi.',verse:'Et Il a uni leurs coeurs — si tu avais depense tout ce qui est sur terre tu n\'aurais pas pu unir leurs coeurs',verseRef:'Al-Anfal 63',hadith:'Aucun de vous ne croit veritablement jusqu\'a ce qu\'il aime pour son frere ce qu\'il aime pour lui-meme — Unanimement reconnu',action:'Connectez-vous aujourd\'hui avec un musulman d\'un autre pays — construisez une amitie qui depasse les frontieres',young:'Sois ami avec tous les musulmans ! La foi fait de nous une grande famille 🤝'}
  },
  {
    id:11, emoji:'🌈',
    ar:{title:'التنوع في الوحدة',desc:'الإسلام لا يلغي التنوع بل يحتضنه. اختلاف الألوان واللغات آية من آيات الله. الوحدة الإسلامية تحترم الخصوصيات الثقافية وتجمعها تحت مظلة الإيمان.',verse:'وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَاكُمْ',verseRef:'الحجرات ١٣',hadith:'الناس سواسية كأسنان المشط — رواه أحمد',action:'تعرّف على عادات وثقافات مسلمين من بلدان مختلفة — التنوع يثري حياتنا',young:'الألوان المختلفة تجعل قوس القزح جميلاً! تنوّعنا يجعل أمتنا أجمل 🌈'},
    en:{title:'Diversity in Unity',desc:'Islam does not abolish diversity but embraces it. The difference in colors and languages is a sign of God. Islamic unity respects cultural particularities and gathers them under the umbrella of faith.',verse:'And We made you peoples and tribes that you may know one another — indeed the noblest among you is the most pious',verseRef:'Al-Hujurat 13',hadith:'People are equal like the teeth of a comb — Ahmad',action:'Learn about the customs and cultures of Muslims from different countries — diversity enriches our lives',young:'Different colors make the rainbow beautiful! Our diversity makes our Ummah more beautiful 🌈'},
    fr:{title:'La Diversite dans l\'Unite',desc:'L\'Islam n\'abolit pas la diversite mais l\'embrasse. La difference de couleurs et de langues est un signe de Dieu. L\'unite islamique respecte les particularites culturelles et les rassemble sous la foi.',verse:'Et Nous avons fait de vous des peuples et des tribus pour que vous vous connaissiez — le plus noble d\'entre vous est le plus pieux',verseRef:'Al-Hujurat 13',hadith:'Les gens sont egaux comme les dents d\'un peigne — Ahmad',action:'Decouvrez les coutumes et cultures de musulmans de differents pays — la diversite enrichit nos vies',young:'Les differentes couleurs rendent l\'arc-en-ciel beau ! Notre diversite rend notre Oumma plus belle 🌈'}
  },
  {
    id:12, emoji:'🇵🇸',
    ar:{title:'قضية فلسطين',desc:'فلسطين قضية إسلامية قبل أن تكون قومية. الغزالي يؤكد أن اختزالها في إطار قومي عربي أضرّ بها لأنه أقصى مليار مسلم غير عربي عن نصرتها.',verse:'سُبْحَانَ الَّذِي أَسْرَى بِعَبْدِهِ لَيْلًا مِنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى',verseRef:'الإسراء ١',hadith:'لا تُشَدُّ الرحال إلا إلى ثلاثة مساجد — متفق عليه',action:'ادعم قضية فلسطين بالدعاء والتوعية — إنها قضية كل مسلم',young:'المسجد الأقصى لكل المسلمين! كل مسلم في العالم يهتم بفلسطين 🇵🇸'},
    en:{title:'The Palestine Question',desc:'Palestine is an Islamic cause before being a nationalist one. Al-Ghazali emphasizes that reducing it to an Arab nationalist framework harmed it because it excluded a billion non-Arab Muslims from supporting it.',verse:'Glory be to Him who took His servant by night from the Sacred Mosque to the Farthest Mosque',verseRef:'Al-Isra 1',hadith:'Do not set out on a journey except to three mosques — Agreed upon',action:'Support the Palestinian cause through prayer and awareness — it is the cause of every Muslim',young:'Al-Aqsa Mosque belongs to all Muslims! Every Muslim in the world cares about Palestine 🇵🇸'},
    fr:{title:'La Question de Palestine',desc:'La Palestine est une cause islamique avant d\'etre nationaliste. Al-Ghazali souligne que la reduire a un cadre nationaliste arabe lui a nui en excluant un milliard de musulmans non arabes de la soutenir.',verse:'Gloire a Celui qui a fait voyager Son serviteur de nuit de la Mosquee Sacree a la Mosquee la plus Eloignee',verseRef:'Al-Isra 1',hadith:'Ne voyagez que vers trois mosquees — Unanimement reconnu',action:'Soutenez la cause palestinienne par la priere et la sensibilisation — c\'est la cause de chaque musulman',young:'La mosquee Al-Aqsa appartient a tous les musulmans ! Chaque musulman dans le monde se soucie de la Palestine 🇵🇸'}
  },
  {
    id:13, emoji:'📡',
    ar:{title:'الغزو الثقافي',desc:'الغزو الثقافي أخطر من الغزو العسكري لأنه يغير العقول. الغزالي يحذر من تبني قيم غربية عمياء دون تمحيص، ويدعو لبناء ثقافة إسلامية أصيلة ومنفتحة.',verse:'وَلَا تَتَّبِعُوا أَهْوَاءَ قَوْمٍ قَدْ ضَلُّوا مِنْ قَبْلُ',verseRef:'المائدة ٧٧',hadith:'لتتبعن سنن من كان قبلكم شبراً بشبر — متفق عليه',action:'كن واعياً بما تستهلكه ثقافياً — اختر ما يتوافق مع قيمك الإسلامية',young:'لا تقلّد كل شيء تراه! اختر الأشياء الجيدة التي تتوافق مع دينك 📡'},
    en:{title:'Cultural Imperialism',desc:'Cultural invasion is more dangerous than military invasion because it changes minds. Al-Ghazali warns against blindly adopting Western values and calls for building an authentic yet open Islamic culture.',verse:'And do not follow the desires of a people who went astray before',verseRef:'Al-Ma\'idah 77',hadith:'You will follow the ways of those before you, step by step — Agreed upon',action:'Be aware of what you consume culturally — choose what aligns with your Islamic values',young:'Do not copy everything you see! Choose the good things that align with your faith 📡'},
    fr:{title:'L\'Imperialisme Culturel',desc:'L\'invasion culturelle est plus dangereuse que l\'invasion militaire car elle change les esprits. Al-Ghazali met en garde contre l\'adoption aveugle des valeurs occidentales et appelle a construire une culture islamique authentique.',verse:'Et ne suivez pas les desirs d\'un peuple qui s\'est egare avant',verseRef:'Al-Ma\'idah 77',hadith:'Vous suivrez les voies de ceux qui vous ont precedes, pas a pas — Unanimement reconnu',action:'Soyez conscient de ce que vous consommez culturellement — choisissez ce qui est conforme a vos valeurs islamiques',young:'Ne copie pas tout ce que tu vois ! Choisis les bonnes choses qui sont conformes a ta foi 📡'}
  },
  {
    id:14, emoji:'🔄',
    ar:{title:'القومية الجديدة',desc:'ظهرت أشكال جديدة من القومية تحت مسميات مختلفة. الغزالي يحذر من أي فكرة تجعل الانتماء العرقي أو الوطني فوق الانتماء الإسلامي مهما كان اسمها.',verse:'أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا',verseRef:'المائدة ٥٠',hadith:'دعوها فإنها منتنة — متفق عليه (عن العصبية)',action:'راجع أفكارك: هل تقدّم انتماءك الوطني على انتمائك الإسلامي؟',young:'كن فخوراً ببلدك لكن تذكر أن إسلامك أهم! الدين أولاً 🔄'},
    en:{title:'Neo-Nationalism',desc:'New forms of nationalism have appeared under different names. Al-Ghazali warns against any idea that places ethnic or national belonging above Islamic belonging regardless of its name.',verse:'Is it the judgment of ignorance they seek? And who is better than Allah in judgment?',verseRef:'Al-Ma\'idah 50',hadith:'Leave it, for it is foul — Agreed upon (about tribalism)',action:'Review your ideas: do you place your national belonging above your Islamic belonging?',young:'Be proud of your country but remember that your Islam is more important! Faith comes first 🔄'},
    fr:{title:'Le Neo-Nationalisme',desc:'De nouvelles formes de nationalisme sont apparues sous differents noms. Al-Ghazali met en garde contre toute idee qui place l\'appartenance ethnique ou nationale au-dessus de l\'appartenance islamique.',verse:'Est-ce le jugement de l\'ignorance qu\'ils cherchent ? Et qui est meilleur qu\'Allah en jugement ?',verseRef:'Al-Ma\'idah 50',hadith:'Laissez-la car elle est nauseabonde — Unanimement reconnu (a propos du tribalisme)',action:'Revoyez vos idees : placez-vous votre appartenance nationale au-dessus de votre appartenance islamique ?',young:'Sois fier de ton pays mais rappelle-toi que ton Islam est plus important ! La foi d\'abord 🔄'}
  },
  {
    id:15, emoji:'📚',
    ar:{title:'إصلاح التعليم',desc:'المناهج التعليمية في العالم العربي تعزز القومية على حساب الهوية الإسلامية. الغزالي يدعو لإصلاح التعليم ليبني جيلاً يعرف دينه ويفخر بحضارته الإسلامية.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'اقرأ كتاباً عن التاريخ الإسلامي هذا الأسبوع — وسّع معرفتك بحضارتك',young:'تعلّم عن تاريخ المسلمين العظيم! العلماء المسلمون غيّروا العالم 📚'},
    en:{title:'Education Reform',desc:'Educational curricula in the Arab world promote nationalism at the expense of Islamic identity. Al-Ghazali calls for reforming education to build a generation that knows its religion and takes pride in Islamic civilization.',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 1',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Read a book about Islamic history this week — expand your knowledge of your civilization',young:'Learn about the great history of Muslims! Muslim scholars changed the world 📚'},
    fr:{title:'La Reforme Educative',desc:'Les programmes educatifs dans le monde arabe promeuvent le nationalisme aux depens de l\'identite islamique. Al-Ghazali appelle a reformer l\'education pour construire une generation qui connait sa religion.',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq 1',hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:'Lisez un livre sur l\'histoire islamique cette semaine — elargissez votre connaissance de votre civilisation',young:'Apprends la grande histoire des musulmans ! Les savants musulmans ont change le monde 📚'}
  },
  {
    id:16, emoji:'📺',
    ar:{title:'تأثير الإعلام',desc:'الإعلام يلعب دوراً خطيراً في تشكيل الوعي. الغزالي يحذر من إعلام يروّج للقومية والتفرقة، ويدعو لإعلام إسلامي واعٍ يبني الوحدة ويحارب الجهل.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'الحجرات ٦',hadith:'كفى بالمرء كذباً أن يحدث بكل ما سمع — رواه مسلم',action:'تحقق من الأخبار قبل مشاركتها — لا تنشر ما يفرّق بين المسلمين',young:'لا تصدق كل ما تسمعه! تأكد من الأخبار قبل أن تخبر الآخرين 📺'},
    en:{title:'Media Influence',desc:'Media plays a dangerous role in shaping awareness. Al-Ghazali warns against media that promotes nationalism and division, and calls for conscious Islamic media that builds unity and fights ignorance.',verse:'O you who believe, if a wicked person comes to you with news, verify it',verseRef:'Al-Hujurat 6',hadith:'It is enough of a lie for a person to narrate everything they hear — Muslim',action:'Verify news before sharing it — do not spread what divides Muslims',young:'Do not believe everything you hear! Check the news before telling others 📺'},
    fr:{title:'L\'Influence des Medias',desc:'Les medias jouent un role dangereux dans la formation de la conscience. Al-Ghazali met en garde contre les medias qui promeuvent le nationalisme et la division, et appelle a des medias islamiques conscients.',verse:'O vous qui croyez, si un pervers vous apporte une nouvelle, verifiez-la',verseRef:'Al-Hujurat 6',hadith:'Il suffit comme mensonge pour une personne de raconter tout ce qu\'elle entend — Muslim',action:'Verifiez les nouvelles avant de les partager — ne repandez pas ce qui divise les musulmans',young:'Ne crois pas tout ce que tu entends ! Verifie les nouvelles avant d\'en parler aux autres 📺'}
  },
  {
    id:17, emoji:'🧑‍🎓',
    ar:{title:'هوية الشباب',desc:'الشباب المسلم يواجه تحديات الهوية بين ثقافة العولمة والانتماء الإسلامي. الغزالي يدعو الشباب لاكتشاف هويتهم الحقيقية في الإسلام لا في القومية أو التقليد الأعمى.',verse:'أَمْ حَسِبْتُمْ أَنْ تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُمْ مَثَلُ الَّذِينَ خَلَوْا مِنْ قَبْلِكُمْ',verseRef:'البقرة ٢١٤',hadith:'اغتنم خمساً قبل خمس: شبابك قبل هرمك — رواه الحاكم',action:'حدد قيمك الإسلامية واكتبها — اجعلها مرجعك في كل قرار',young:'اعرف من أنت! أنت مسلم وهذا أعظم هوية في العالم 🧑‍🎓'},
    en:{title:'Youth Identity',desc:'Muslim youth face identity challenges between globalization culture and Islamic belonging. Al-Ghazali calls on youth to discover their true identity in Islam, not in nationalism or blind imitation.',verse:'Or do you think you will enter Paradise without being tested as those before you were tested?',verseRef:'Al-Baqarah 214',hadith:'Take advantage of five before five: your youth before your old age — Al-Hakim',action:'Define your Islamic values and write them down — make them your reference in every decision',young:'Know who you are! You are a Muslim and that is the greatest identity in the world 🧑‍🎓'},
    fr:{title:'L\'Identite des Jeunes',desc:'Les jeunes musulmans font face a des defis identitaires entre la culture de la mondialisation et l\'appartenance islamique. Al-Ghazali appelle les jeunes a decouvrir leur vraie identite dans l\'Islam.',verse:'Ou pensez-vous entrer au Paradis sans etre eprouves comme ceux avant vous ?',verseRef:'Al-Baqarah 214',hadith:'Profitez de cinq avant cinq : votre jeunesse avant votre vieillesse — Al-Hakim',action:'Definissez vos valeurs islamiques et ecrivez-les — faites-en votre reference dans chaque decision',young:'Sache qui tu es ! Tu es musulman et c\'est la plus grande identite au monde 🧑‍🎓'}
  },
  {
    id:18, emoji:'📜',
    ar:{title:'دروس التاريخ',desc:'التاريخ يعلمنا أن كل مشروع قومي بعيد عن الإسلام مآله الفشل. من القومية المصرية إلى البعث إلى الناصرية، كلها تجارب انتهت بالخيبة لأنها أقصت الإسلام.',verse:'أَفَلَمْ يَسِيرُوا فِي الْأَرْضِ فَيَنْظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِنْ قَبْلِهِمْ',verseRef:'محمد ١٠',hadith:'لا يلدغ المؤمن من جحر واحد مرتين — متفق عليه',action:'اقرأ عن تجارب الأمم السابقة — التاريخ أعظم معلم لمن أراد أن يتعلم',young:'التاريخ مليء بالدروس! تعلّم من أخطاء الماضي لتبني مستقبلاً أفضل 📜'},
    en:{title:'Historical Lessons',desc:'History teaches us that every nationalist project far from Islam is doomed to fail. From Egyptian nationalism to Ba\'athism to Nasserism, all ended in disappointment because they excluded Islam.',verse:'Have they not traveled through the earth and seen the fate of those before them?',verseRef:'Muhammad 10',hadith:'A believer is not stung from the same hole twice — Agreed upon',action:'Read about the experiences of past nations — history is the greatest teacher for those willing to learn',young:'History is full of lessons! Learn from past mistakes to build a better future 📜'},
    fr:{title:'Les Lecons de l\'Histoire',desc:'L\'histoire nous enseigne que tout projet nationaliste eloigne de l\'Islam est voue a l\'echec. Du nationalisme egyptien au baathisme au nasserisme, tous ont fini par la deception car ils ont exclu l\'Islam.',verse:'N\'ont-ils pas voyage sur terre pour voir le sort de ceux avant eux ?',verseRef:'Muhammad 10',hadith:'Le croyant n\'est pas pique deux fois du meme trou — Unanimement reconnu',action:'Lisez les experiences des nations passees — l\'histoire est le plus grand professeur pour qui veut apprendre',young:'L\'histoire est pleine de lecons ! Apprends des erreurs du passe pour construire un meilleur avenir 📜'}
  },
  {
    id:19, emoji:'🌅',
    ar:{title:'رؤية المستقبل',desc:'المستقبل للإسلام لا للقومية. الغزالي يرسم رؤية لأمة تجمعها العقيدة وتحترم تنوعها وتتعاون على البر والتقوى. النهضة الحقيقية تبدأ من العودة إلى الله.',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ',verseRef:'الرعد ١١',hadith:'بشّروا ولا تنفّروا، ويسّروا ولا تعسّروا — متفق عليه',action:'ساهم في بناء مستقبل أفضل — ابدأ بإصلاح نفسك ثم محيطك',young:'المستقبل مشرق! ابدأ بنفسك وكن التغيير الذي تريد أن تراه 🌅'},
    en:{title:'Future Vision',desc:'The future belongs to Islam, not nationalism. Al-Ghazali envisions an Ummah united by creed, respectful of its diversity, and cooperating in goodness and piety. True renaissance starts with returning to God.',verse:'Indeed Allah will not change the condition of a people until they change what is within themselves',verseRef:'Ar-Ra\'d 11',hadith:'Give glad tidings and do not repel; make things easy and do not make them difficult — Agreed upon',action:'Contribute to building a better future — start by reforming yourself then your surroundings',young:'The future is bright! Start with yourself and be the change you want to see 🌅'},
    fr:{title:'La Vision du Futur',desc:'L\'avenir appartient a l\'Islam, pas au nationalisme. Al-Ghazali envisage une Oumma unie par la croyance, respectueuse de sa diversite et cooperant dans le bien et la piete. La vraie renaissance commence par le retour a Dieu.',verse:'Allah ne change pas la condition d\'un peuple tant qu\'ils ne changent pas ce qui est en eux-memes',verseRef:'Ar-Ra\'d 11',hadith:'Annoncez la bonne nouvelle et ne repoussez pas ; facilitez et ne rendez pas les choses difficiles — Unanimement reconnu',action:'Contribuez a construire un meilleur avenir — commencez par vous reformer vous-meme puis votre entourage',young:'L\'avenir est brillant ! Commence par toi-meme et sois le changement que tu veux voir 🌅'}
  },
  {
    id:20, emoji:'🛤️',
    ar:{title:'خطوات عملية',desc:'الوحدة الإسلامية لا تتحقق بالأماني بل بالعمل. الغزالي يقترح خطوات عملية: إصلاح التعليم، بناء مؤسسات مشتركة، تعزيز التبادل الثقافي، والعودة للقرآن والسنة منهجاً للحياة.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ',verseRef:'المائدة ٢',hadith:'خير الناس أنفعهم للناس — رواه الطبراني',action:'اختر خطوة عملية واحدة اليوم: تعلّم، تواصل، تعاون مع إخوانك المسلمين',young:'ابدأ اليوم بخطوة صغيرة! تعلّم، ساعد، وتعاون مع الآخرين 🛤️'},
    en:{title:'Practical Steps',desc:'Islamic unity is not achieved by wishes but by action. Al-Ghazali proposes practical steps: reforming education, building shared institutions, enhancing cultural exchange, and returning to the Quran and Sunnah as a way of life.',verse:'And cooperate in righteousness and piety and do not cooperate in sin and aggression',verseRef:'Al-Ma\'idah 2',hadith:'The best of people are those most beneficial to people — Tabarani',action:'Choose one practical step today: learn, connect, cooperate with your fellow Muslims',young:'Start today with a small step! Learn, help, and cooperate with others 🛤️'},
    fr:{title:'Les Etapes Pratiques',desc:'L\'unite islamique ne se realise pas par des voeux mais par l\'action. Al-Ghazali propose des etapes pratiques : reformer l\'education, construire des institutions communes, renforcer l\'echange culturel et revenir au Coran et a la Sunnah.',verse:'Et entraidez-vous dans la droiture et la piete et ne vous entraidez pas dans le peche et l\'agression',verseRef:'Al-Ma\'idah 2',hadith:'Les meilleurs des gens sont ceux qui sont les plus utiles aux gens — Tabarani',action:'Choisissez une etape pratique aujourd\'hui : apprenez, connectez-vous, cooperez avec vos freres musulmans',young:'Commence aujourd\'hui par un petit pas ! Apprends, aide et coopere avec les autres 🛤️'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما الرابطة التي يعتبرها الإسلام أقوى من رابطة الدم والعرق؟',opts:['رابطة اللغة','رابطة الإيمان','رابطة الأرض','رابطة التجارة'],correct:1,hint:'هذه الرابطة تجمع المسلمين من كل الأعراق',quran:'الحجرات ١٠'},
    en:{q:'What bond does Islam consider stronger than blood and race?',opts:['Language bond','Bond of faith','Land bond','Trade bond'],correct:1,hint:'This bond unites Muslims of all races',quran:'Al-Hujurat 10'},
    fr:{q:'Quel lien l\'Islam considere-t-il plus fort que le sang et la race ?',opts:['Le lien de la langue','Le lien de la foi','Le lien de la terre','Le lien du commerce'],correct:1,hint:'Ce lien unit les musulmans de toutes les races',quran:'Al-Hujurat 10'}
  },
  {
    ar:{q:'أكمل الآية: "وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ ..."',opts:['لتتنافسوا','لتتحاربوا','لتعارفوا','لتتفاخروا'],correct:2,hint:'الهدف من التنوع هو التعارف لا التفاخر',quran:'الحجرات ١٣'},
    en:{q:'Complete the verse: "And We made you peoples and tribes that you may..."',opts:['Compete','Fight','Know one another','Boast'],correct:2,hint:'The purpose of diversity is acquaintance not boasting',quran:'Al-Hujurat 13'},
    fr:{q:'Completez le verset : « Et Nous avons fait de vous des peuples et des tribus pour que vous... »',opts:['Concouriez','Combattiez','Vous connaissiez','Vous vantiez'],correct:2,hint:'Le but de la diversite est la connaissance mutuelle pas la vantardise',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'ما الاتفاقية التي قسمت العالم العربي بعد سقوط الخلافة؟',opts:['اتفاقية جنيف','اتفاقية فرساي','اتفاقية سايكس بيكو','اتفاقية كامب ديفيد'],correct:2,hint:'سميت باسم دبلوماسيين بريطاني وفرنسي',quran:'الأنفال ٤٦'},
    en:{q:'Which agreement divided the Arab world after the fall of the Caliphate?',opts:['Geneva Convention','Treaty of Versailles','Sykes-Picot Agreement','Camp David Accords'],correct:2,hint:'Named after a British and a French diplomat',quran:'Al-Anfal 46'},
    fr:{q:'Quel accord a divise le monde arabe apres la chute du califat ?',opts:['Convention de Geneve','Traite de Versailles','Accord Sykes-Picot','Accords de Camp David'],correct:2,hint:'Nomme d\'apres un diplomate britannique et un francais',quran:'Al-Anfal 46'}
  },
  {
    ar:{q:'ما الحديث الذي يرفض العصبية القبلية؟',opts:['المسلم أخو المسلم','ليس منا من دعا إلى عصبية','خيركم خيركم لأهله','الدين النصيحة'],correct:1,hint:'هذا الحديث يتبرأ من دعاة العصبية',quran:'الحجرات ١٣'},
    en:{q:'Which hadith rejects tribal fanaticism?',opts:['A Muslim is brother of a Muslim','He is not one of us who calls to tribalism','The best of you is the best to his family','Religion is sincere advice'],correct:1,hint:'This hadith disowns those who call for tribalism',quran:'Al-Hujurat 13'},
    fr:{q:'Quel hadith rejette le fanatisme tribal ?',opts:['Le musulman est frere du musulman','N\'est pas des notres celui qui appelle au tribalisme','Le meilleur d\'entre vous est le meilleur envers sa famille','La religion c\'est le bon conseil'],correct:1,hint:'Ce hadith desavoue ceux qui appellent au tribalisme',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'أكمل الحديث: "لا فضل لعربي على أعجمي إلا ب..."',opts:['العلم','المال','التقوى','النسب'],correct:2,hint:'هذا المعيار الوحيد للتفاضل في الإسلام',quran:'الحجرات ١٣'},
    en:{q:'Complete the hadith: "No Arab has superiority over a non-Arab except by..."',opts:['Knowledge','Wealth','Piety','Lineage'],correct:2,hint:'This is the only criterion for superiority in Islam',quran:'Al-Hujurat 13'},
    fr:{q:'Completez le hadith : « Aucun Arabe n\'a de superiorite sur un non-Arabe sauf par... »',opts:['Le savoir','La richesse','La piete','La lignee'],correct:2,hint:'C\'est le seul critere de superiorite en Islam',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'من هو مؤلف كتاب "حقيقة القومية العربية"؟',opts:['سيد قطب','محمد الغزالي','يوسف القرضاوي','حسن البنا'],correct:1,hint:'عالم مصري لُقب بأديب الدعوة',quran:'الحجرات ١٣'},
    en:{q:'Who is the author of "The Reality of Arab Nationalism"?',opts:['Sayyid Qutb','Mohammed al-Ghazali','Yusuf al-Qaradawi','Hassan al-Banna'],correct:1,hint:'An Egyptian scholar nicknamed "The Literary Preacher"',quran:'Al-Hujurat 13'},
    fr:{q:'Qui est l\'auteur de « La Realite du Nationalisme Arabe » ?',opts:['Sayyid Qutb','Mohammed al-Ghazali','Yusuf al-Qaradawi','Hassan al-Banna'],correct:1,hint:'Un savant egyptien surnomme « Le Litteraire de la Predication »',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'في أي سورة وردت آية "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا"؟',opts:['البقرة','آل عمران','النساء','المائدة'],correct:1,hint:'هذه السورة الثالثة في القرآن',quran:'آل عمران ١٠٣'},
    en:{q:'In which surah does "And hold firmly to the rope of Allah all together" appear?',opts:['Al-Baqarah','Al Imran','An-Nisa','Al-Ma\'idah'],correct:1,hint:'This is the third surah in the Quran',quran:'Al Imran 103'},
    fr:{q:'Dans quelle sourate apparait « Accrochez-vous tous a la corde d\'Allah » ?',opts:['Al-Baqarah','Al Imran','An-Nisa','Al-Ma\'idah'],correct:1,hint:'C\'est la troisieme sourate du Coran',quran:'Al Imran 103'}
  },
  {
    ar:{q:'ما أول سورة نزلت في القرآن تأمر بالعلم؟',opts:['الفاتحة','البقرة','العلق','الإسراء'],correct:2,hint:'أول كلمة نزلت كانت "اقرأ"',quran:'العلق ١'},
    en:{q:'What is the first surah revealed commanding knowledge?',opts:['Al-Fatiha','Al-Baqarah','Al-Alaq','Al-Isra'],correct:2,hint:'The first word revealed was "Read"',quran:'Al-Alaq 1'},
    fr:{q:'Quelle est la premiere sourate revelee ordonnant le savoir ?',opts:['Al-Fatiha','Al-Baqarah','Al-Alaq','Al-Isra'],correct:2,hint:'Le premier mot revele etait « Lis »',quran:'Al-Alaq 1'}
  },
  {
    ar:{q:'أي صحابي يُعتبر مثالاً على أن الإسلام يتجاوز العرق؟',opts:['أبو بكر الصديق','عمر بن الخطاب','بلال بن رباح','عثمان بن عفان'],correct:2,hint:'هذا الصحابي من الحبشة وكان مؤذن الرسول ﷺ',quran:'الحجرات ١٣'},
    en:{q:'Which companion is an example that Islam transcends race?',opts:['Abu Bakr','Umar ibn al-Khattab','Bilal ibn Rabah','Uthman ibn Affan'],correct:2,hint:'This companion was from Abyssinia and was the Prophet\'s muezzin',quran:'Al-Hujurat 13'},
    fr:{q:'Quel compagnon est un exemple que l\'Islam transcende la race ?',opts:['Abu Bakr','Umar ibn al-Khattab','Bilal ibn Rabah','Uthman ibn Affan'],correct:2,hint:'Ce compagnon etait d\'Abyssinie et etait le muezzin du Prophete',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'ما الآية التي تدعو للتحقق من الأخبار؟',opts:['آية الكرسي','آية التثبت في الحجرات','آية النور','آية الأمانة'],correct:1,hint:'هذه الآية في سورة الحجرات وتأمر بالتبين عند نقل الخبر',quran:'الحجرات ٦'},
    en:{q:'Which verse calls for verifying news?',opts:['Ayat al-Kursi','The verification verse in Al-Hujurat','The verse of light','The verse of trust'],correct:1,hint:'This verse is in Surah Al-Hujurat and commands verification when hearing news',quran:'Al-Hujurat 6'},
    fr:{q:'Quel verset appelle a verifier les nouvelles ?',opts:['Ayat al-Kursi','Le verset de verification dans Al-Hujurat','Le verset de la lumiere','Le verset de la confiance'],correct:1,hint:'Ce verset est dans la sourate Al-Hujurat et ordonne la verification des nouvelles',quran:'Al-Hujurat 6'}
  },
  {
    ar:{q:'ما معنى "إن هذه أمتكم أمة واحدة"؟',opts:['المسلمون أمة واحدة','العرب أمة واحدة','البشر أمة واحدة','المؤمنون والكافرون سواء'],correct:0,hint:'الآية تتحدث عن وحدة أمة الإسلام',quran:'الأنبياء ٩٢'},
    en:{q:'What does "Indeed this Ummah of yours is one Ummah" mean?',opts:['Muslims are one nation','Arabs are one nation','Humans are one nation','Believers and disbelievers are equal'],correct:0,hint:'The verse speaks about the unity of the Muslim Ummah',quran:'Al-Anbiya 92'},
    fr:{q:'Que signifie « Certes cette Oumma est une Oumma unique » ?',opts:['Les musulmans sont une seule nation','Les Arabes sont une seule nation','Les humains sont une seule nation','Croyants et mecreants sont egaux'],correct:0,hint:'Le verset parle de l\'unite de la Oumma musulmane',quran:'Al-Anbiya 92'}
  },
  {
    ar:{q:'أكمل الآية: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا..."',opts:['في أرضهم','بأنفسهم','في أموالهم','بأولادهم'],correct:1,hint:'التغيير يبدأ من الداخل',quran:'الرعد ١١'},
    en:{q:'Complete: "Allah will not change the condition of a people until they change what is..."',opts:['In their land','Within themselves','In their wealth','With their children'],correct:1,hint:'Change starts from within',quran:'Ar-Ra\'d 11'},
    fr:{q:'Completez : « Allah ne change pas la condition d\'un peuple tant qu\'ils ne changent pas ce qui est... »',opts:['Dans leur terre','En eux-memes','Dans leurs richesses','Avec leurs enfants'],correct:1,hint:'Le changement commence de l\'interieur',quran:'Ar-Ra\'d 11'}
  },
  {
    ar:{q:'ما الذي يعتبره الغزالي أخطر من الغزو العسكري؟',opts:['الغزو الاقتصادي','الغزو الثقافي','الغزو التكنولوجي','الغزو الزراعي'],correct:1,hint:'هذا النوع يغير العقول والأفكار',quran:'المائدة ٧٧'},
    en:{q:'What does al-Ghazali consider more dangerous than military invasion?',opts:['Economic invasion','Cultural invasion','Technological invasion','Agricultural invasion'],correct:1,hint:'This type changes minds and ideas',quran:'Al-Ma\'idah 77'},
    fr:{q:'Qu\'est-ce qu\'al-Ghazali considere plus dangereux que l\'invasion militaire ?',opts:['L\'invasion economique','L\'invasion culturelle','L\'invasion technologique','L\'invasion agricole'],correct:1,hint:'Ce type change les esprits et les idees',quran:'Al-Ma\'idah 77'}
  },
  {
    ar:{q:'ماذا فعل النبي ﷺ ليوحّد بين المهاجرين والأنصار؟',opts:['بنى سوقاً مشتركاً','آخى بينهم','أعطاهم أموالاً','فرض عليهم ضريبة'],correct:1,hint:'جعل كل مهاجري أخاً لأنصاري',quran:'الأنفال ٦٣'},
    en:{q:'What did the Prophet (PBUH) do to unite the Muhajirun and Ansar?',opts:['Built a shared market','Established brotherhood','Gave them money','Imposed a tax'],correct:1,hint:'He paired each Muhajir with an Ansari as brothers',quran:'Al-Anfal 63'},
    fr:{q:'Qu\'a fait le Prophete (PSL) pour unir les Muhajirun et les Ansar ?',opts:['Construit un marche commun','Etabli la fraternite','Leur a donne de l\'argent','Impose une taxe'],correct:1,hint:'Il a apparie chaque Muhajir avec un Ansari comme freres',quran:'Al-Anfal 63'}
  },
  {
    ar:{q:'أكمل الآية: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى وَلَا تَعَاوَنُوا عَلَى..."',opts:['الشر والعدوان','الإثم والعدوان','الكفر والفسوق','الظلم والبغي'],correct:1,hint:'هذه الآية في سورة المائدة',quran:'المائدة ٢'},
    en:{q:'Complete: "Cooperate in righteousness and piety and do not cooperate in..."',opts:['Evil and aggression','Sin and aggression','Disbelief and wickedness','Oppression and transgression'],correct:1,hint:'This verse is in Surah Al-Ma\'idah',quran:'Al-Ma\'idah 2'},
    fr:{q:'Completez : « Entraidez-vous dans la droiture et la piete et ne vous entraidez pas dans... »',opts:['Le mal et l\'agression','Le peche et l\'agression','La mecreance et la perversite','L\'oppression et la transgression'],correct:1,hint:'Ce verset est dans la sourate Al-Ma\'idah',quran:'Al-Ma\'idah 2'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء الوحدة',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ',tr:'من دعاء النبي ﷺ'},
    en:{label:'Dua for Unity',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ',tr:'O Allah, unite our hearts and reconcile between us and guide us to the paths of peace'},
    fr:{label:'Dua pour l\'Unite',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ',tr:'O Allah, unis nos coeurs et reconcilie-nous et guide-nous vers les chemins de la paix'} },
  { ar:{label:'دعاء الأخوّة',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'الحشر ١٠'},
    en:{label:'Dua for Brotherhood',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'Our Lord, forgive us and our brothers who preceded us in faith and do not place in our hearts any resentment — Al-Hashr 10'},
    fr:{label:'Dua pour la Fraternite',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'Notre Seigneur, pardonne-nous ainsi qu\'a nos freres qui nous ont precedes dans la foi — Al-Hashr 10'} },
  { ar:{label:'دعاء النصر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Victory',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and plant firmly our feet and grant us victory — Al-Baqarah 250'},
    fr:{label:'Dua pour la Victoire',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience et affermis nos pas et accorde-nous la victoire — Al-Baqarah 250'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely on Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui — At-Tawbah 129'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الهداية',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'من دعاء السلف'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'O Allah, show us the truth as truth and grant us to follow it, and show us falsehood as falsehood and grant us to avoid it'},
    fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ',tr:'O Allah, montre-nous la verite comme verite et accorde-nous de la suivre, et montre-nous le faux comme faux et accorde-nous de l\'eviter'} },
  { ar:{label:'دعاء حسن الخلق',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'رواه مسلم'},
    en:{label:'Dua for Good Character',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide me to the best of character, none can guide to it except You — Muslim'},
    fr:{label:'Dua pour le Bon Caractere',text:'اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الأَخْلاقِ لا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ',tr:'O Allah, guide-moi vers le meilleur caractere, nul ne peut y guider sauf Toi — Muslim'} },
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, do not let our hearts deviate after You have guided us and grant us mercy — Al Imran 8'},
    fr:{label:'Dua pour la Fermete',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne fais pas devier nos coeurs apres nous avoir guides et accorde-nous une misericorde — Al Imran 8'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'qawmiyah-xp';
const BADGES_KEY = 'qawmiyah-badges';
const READ_KEY = 'qawmiyah-read';
const STREAK_KEY = 'qawmiyah-streak';
const MODE_KEY = 'qawmiyah-mode';
const QUIZ_BEST_KEY = 'qawmiyah-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabTraits'); if(_e) _e.textContent=t.tabTraits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('traitsTitle'); if(_e) _e.textContent=t.traitsTitle; }
  { const _e=document.getElementById('traitsDesc'); if(_e) _e.textContent=t.traitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  // Render sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  (document.getElementById('homeGrid')||{}).innerHTML= TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = document.getElementById('traitsContainer');
  if (!container) return;
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  if (!result) return;
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  if (!feedback) return;
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  if (!feedback) return;
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  if (!feedback) return;
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  if (!result) return;
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'محور مقروء':lang==='fr'?'Themes lus':'Topics Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (!panel) return;
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«حقيقة القومية العربية وأسطورة البعث العربي» كتاب يتناول قضية الهوية والقومية في العالم العربي. يبيّن الشيخ الغزالي كيف أن القومية العربية كانت مشروعاً استعمارياً لتفريق المسلمين، وأن الوحدة الحقيقية لا تقوم إلا على أساس الإسلام.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "حقيقة القومية العربية" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود ومسند أحمد'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal and fighting rigidity.',
      bookTitle: 'About the Book',
      bookDesc: '"The Reality of Arab Nationalism and the Myth of Arab Ba\'athism" examines the question of identity and nationalism in the Arab world. Sheikh al-Ghazali demonstrates how Arab nationalism was a colonial project to divide Muslims, and that true unity can only be based on Islam.',
      sourcesTitle: 'Sources',
      sources: ['"The Reality of Arab Nationalism" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi, Abu Dawud, and Musnad Ahmad'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« La Realite du Nationalisme Arabe et le Mythe du Baath Arabe » examine la question de l\'identite et du nationalisme dans le monde arabe. Le Sheikh al-Ghazali demontre comment le nationalisme arabe etait un projet colonial pour diviser les musulmans.',
      sourcesTitle: 'Sources',
      sources: ['"La Realite du Nationalisme Arabe" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi, Abu Dawud et Musnad Ahmad'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "حقيقة القومية العربية" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ محور، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/haqiqat-al-qawmiyah'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Reality of Arab Nationalism" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 topics, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/haqiqat-al-qawmiyah'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"La Realite du Nationalisme Arabe" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 themes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/haqiqat-al-qawmiyah'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ محوراً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالوحدة','⭐ أكمل ٢٠ محوراً لتصبح خبيراً'],
    en: ['📖 Read a new topic every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for unity','⭐ Complete all 20 topics to become an Expert'],
    fr: ['📖 Lisez un nouveau theme chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour l\'unite','⭐ Completez les 20 themes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  if (!ticker) return;
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (!features) return;
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  if (!counter) return;
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (!splash) return;
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp) return;
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp) return;
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel) return;
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  const m = document.getElementById('toastMsg');
  if (!m) return;
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set age mode class
  document.body.classList.toggle('young-mode', ageMode === 'young');
  // Update streak
  updateStreak();
  // Init
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
