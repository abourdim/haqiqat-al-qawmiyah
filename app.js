/* حقيقة القومية العربية — ARAB NATIONALISM: TRUTH & MYTH — app.js */
/* Based on "Haqiqat al-Qawmiyah al-Arabiyah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'حقيقة القومية العربية',
    splashSub: 'وأسطورة البعث العربي',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الحجرات ٤٩: ١٣',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabCritique: 'النقد',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات المعرفة',
    cardsDesc: '٢٠ بطاقة حول الهوية العربية والإسلام والقومية',
    critiqueTitle: 'نقد فكر البعث',
    critiqueDesc: 'كيف انحرف الفكر القومي عن جذوره الإسلامية',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من الكتاب — تتبّع تقدمك يومياً',
    quizTitle: 'اختبر معلوماتك',
    quizDesc: 'ما مدى فهمك للعلاقة بين الإسلام والعروبة؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الوحدة والأخوة',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في البطاقات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    keyIdea: '💡 الفكرة الرئيسية',
    islamicView: '☪️ المنظور الإسلامي',
    evidence: '📖 الدليل',
    splashFeatures: [
      '٢٠ بطاقة معرفية حول القومية والإسلام',
      'نقد فكر البعث العربي',
      'عادات يومية لتعزيز الهوية الإسلامية',
      'اختبار ذاتي + أدعية يومية'
    ],
  },
  en: {
    appTitle: 'Arab Nationalism: Truth & Myth',
    splashSub: 'The myth of Ba\'athism exposed',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Hujurat 49:13',
    tabHome: 'Home', tabCards: 'Cards', tabCritique: 'Critique',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Knowledge Cards',
    cardsDesc: '20 cards on Arab identity, Islam, and nationalism',
    critiqueTitle: 'Critique of Ba\'athism',
    critiqueDesc: 'How nationalist ideology deviated from its Islamic roots',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the book — track your daily progress',
    quizTitle: 'Test Your Knowledge',
    quizDesc: 'How well do you understand the relationship between Islam and Arabism?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Unity & Brotherhood',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search cards...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    keyIdea: '💡 Key Idea',
    islamicView: '☪️ Islamic Perspective',
    evidence: '📖 Evidence',
    splashFeatures: [
      '20 knowledge cards on nationalism & Islam',
      'Critique of Ba\'athist ideology',
      'Daily habits for Islamic identity',
      'Self-quiz + daily duas'
    ],
  },
  fr: {
    appTitle: 'Le Nationalisme Arabe : Verite et Mythe',
    splashSub: 'Le mythe du baathisme expose',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Hujurat 49:13',
    tabHome: 'Accueil', tabCards: 'Cartes', tabCritique: 'Critique',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Savoir',
    cardsDesc: '20 cartes sur l\'identite arabe, l\'Islam et le nationalisme',
    critiqueTitle: 'Critique du Baathisme',
    critiqueDesc: 'Comment l\'ideologie nationaliste a devie de ses racines islamiques',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirees du livre — suivez vos progres',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Comprenez-vous la relation entre l\'Islam et l\'arabisme ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour l\'Unite et la Fraternite',
    resetBtn: 'Reinitialiser',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Pensee du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les cartes...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    keyIdea: '💡 Idee Cle',
    islamicView: '☪️ Perspective Islamique',
    evidence: '📖 Preuve',
    splashFeatures: [
      '20 cartes de savoir sur le nationalisme et l\'Islam',
      'Critique de l\'ideologie baathiste',
      'Habitudes quotidiennes pour l\'identite islamique',
      'Quiz + duas quotidiennes'
    ],
  }
};

// ═══════════════ CARDS DATA (20 knowledge cards) ═══════════════
const CARDS = [
  {id:1, emoji:'🌍',
    ar:{title:'العروبة والإسلام',desc:'العروبة لا تنفصل عن الإسلام. اللغة العربية هي لغة القرآن، والعرب حملوا رسالة الإسلام للعالم. لكن العروبة بدون إسلام فارغة من مضمونها الحضاري.',idea:'الإسلام هو الذي أعطى العروبة معناها الحقيقي',islamic:'قال تعالى: "إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ"',evidence:'سورة يوسف ١٢: ٢'},
    en:{title:'Arabism and Islam',desc:'Arabism cannot be separated from Islam. Arabic is the language of the Quran, and Arabs carried Islam\'s message to the world. But Arabism without Islam is empty of civilizational substance.',idea:'Islam is what gave Arabism its true meaning',islamic:'Allah says: "Indeed, We have sent it down as an Arabic Quran that you might understand"',evidence:'Surah Yusuf 12:2'},
    fr:{title:'Arabisme et Islam',desc:'L\'arabisme ne peut etre separe de l\'Islam. L\'arabe est la langue du Coran, et les Arabes ont porte le message de l\'Islam au monde. Mais l\'arabisme sans Islam est vide de substance civilisationnelle.',idea:'C\'est l\'Islam qui a donne a l\'arabisme son vrai sens',islamic:'Allah dit : "Nous l\'avons fait descendre en un Coran arabe afin que vous raisonniez"',evidence:'Sourate Youssouf 12:2'}},
  {id:2, emoji:'⚖️',
    ar:{title:'المساواة في الإسلام',desc:'الإسلام لا يفرّق بين عربي وأعجمي إلا بالتقوى. القومية التي تضع العرب فوق غيرهم تناقض جوهر الإسلام.',idea:'لا فضل لعربي على أعجمي إلا بالتقوى',islamic:'قال النبي ﷺ: "لا فضل لعربي على أعجمي ولا لأبيض على أسود إلا بالتقوى"',evidence:'رواه أحمد'},
    en:{title:'Equality in Islam',desc:'Islam makes no distinction between Arab and non-Arab except through piety. Nationalism that elevates Arabs above others contradicts the essence of Islam.',idea:'No Arab has superiority over a non-Arab except through piety',islamic:'The Prophet (peace be upon him) said: "No Arab has superiority over a non-Arab, nor white over black, except through piety"',evidence:'Narrated by Ahmad'},
    fr:{title:'Egalite en Islam',desc:'L\'Islam ne fait aucune distinction entre Arabe et non-Arabe sauf par la piete. Le nationalisme qui eleve les Arabes au-dessus des autres contredit l\'essence de l\'Islam.',idea:'Aucun Arabe n\'a de superiorite sur un non-Arabe sauf par la piete',islamic:'Le Prophete (paix sur lui) a dit : "Aucun Arabe n\'a de superiorite sur un non-Arabe, ni un blanc sur un noir, sauf par la piete"',evidence:'Rapporte par Ahmad'}},
  {id:3, emoji:'🏛️',
    ar:{title:'أسطورة البعث',desc:'حزب البعث العربي وعد بالوحدة والحرية والاشتراكية، لكنه حقق الاستبداد والتفرقة والفقر. فكره العلماني فصل الأمة عن هويتها الإسلامية.',idea:'البعث وعد بالنهضة لكنه جلب الخراب',islamic:'قال تعالى: "وَمَنْ أَعْرَضَ عَن ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنكًا"',evidence:'سورة طه ٢٠: ١٢٤'},
    en:{title:'The Myth of Ba\'athism',desc:'The Ba\'ath Party promised unity, freedom, and socialism, but delivered tyranny, division, and poverty. Its secular ideology separated the Ummah from its Islamic identity.',idea:'Ba\'athism promised renaissance but brought ruin',islamic:'Allah says: "Whoever turns away from My remembrance will have a miserable life"',evidence:'Surah Ta-Ha 20:124'},
    fr:{title:'Le Mythe du Baathisme',desc:'Le parti Baath a promis unite, liberte et socialisme, mais a livre tyrannie, division et pauvrete. Son ideologie laique a separe l\'Oumma de son identite islamique.',idea:'Le baathisme a promis une renaissance mais a apporte la ruine',islamic:'Allah dit : "Quiconque se detourne de Mon rappel aura une vie miserable"',evidence:'Sourate Ta-Ha 20:124'}},
  {id:4, emoji:'🤝',
    ar:{title:'الأخوة الإسلامية فوق القومية',desc:'الرابطة الإسلامية أقوى وأوسع من الرابطة القومية. بلال الحبشي وسلمان الفارسي وصهيب الرومي كانوا إخوة للعرب في الإسلام.',idea:'الأخوة في الدين أعمق من الأخوة في العرق',islamic:'قال تعالى: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ"',evidence:'سورة الحجرات ٤٩: ١٠'},
    en:{title:'Islamic Brotherhood Above Nationalism',desc:'The Islamic bond is stronger and wider than the nationalist bond. Bilal the Ethiopian, Salman the Persian, and Suhaib the Roman were brothers to Arabs in Islam.',idea:'Brotherhood in faith runs deeper than brotherhood in race',islamic:'Allah says: "The believers are but brothers"',evidence:'Surah Al-Hujurat 49:10'},
    fr:{title:'Fraternite Islamique au-dessus du Nationalisme',desc:'Le lien islamique est plus fort et plus large que le lien nationaliste. Bilal l\'Ethiopien, Salman le Perse et Suhaib le Romain etaient freres des Arabes en Islam.',idea:'La fraternite dans la foi est plus profonde que celle de la race',islamic:'Allah dit : "Les croyants ne sont que des freres"',evidence:'Sourate Al-Hujurat 49:10'}},
  {id:5, emoji:'📜',
    ar:{title:'العرب قبل الإسلام',desc:'قبل الإسلام كان العرب قبائل متناحرة بلا حضارة موحدة. الإسلام هو الذي وحّدهم وصنع منهم أمة قادت العالم.',idea:'الإسلام هو الذي صنع مجد العرب لا العكس',islamic:'قال عمر: "نحن قوم أعزنا الله بالإسلام فمهما ابتغينا العزة بغيره أذلنا الله"',evidence:'رواه الحاكم'},
    en:{title:'Arabs Before Islam',desc:'Before Islam, Arabs were warring tribes without a unified civilization. Islam united them and made them a nation that led the world.',idea:'Islam created Arab glory, not the other way around',islamic:'Umar said: "We are a people whom Allah honored through Islam. Whenever we seek honor through other than it, Allah will disgrace us"',evidence:'Narrated by al-Hakim'},
    fr:{title:'Les Arabes avant l\'Islam',desc:'Avant l\'Islam, les Arabes etaient des tribus en guerre sans civilisation unifiee. L\'Islam les a unis et en a fait une nation qui a dirige le monde.',idea:'L\'Islam a cree la gloire arabe, pas l\'inverse',islamic:'Omar a dit : "Nous sommes un peuple qu\'Allah a honore par l\'Islam. Chaque fois que nous cherchons l\'honneur autrement, Allah nous humilie"',evidence:'Rapporte par al-Hakim'}},
  {id:6, emoji:'🌐',
    ar:{title:'القومية فكرة غربية',desc:'القومية العربية مستوردة من أوروبا. الغرب شجّع القومية لتفريق المسلمين بعد سقوط الخلافة.',idea:'القومية سلاح استعماري لتفتيت الأمة',islamic:'قال تعالى: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا"',evidence:'سورة آل عمران ٣: ١٠٣'},
    en:{title:'Nationalism is a Western Import',desc:'Arab nationalism was imported from Europe. The West encouraged nationalism to divide Muslims after the fall of the Caliphate.',idea:'Nationalism is a colonial weapon to fragment the Ummah',islamic:'Allah says: "Hold firmly to the rope of Allah all together and do not become divided"',evidence:'Surah Ali Imran 3:103'},
    fr:{title:'Le Nationalisme est une Importation Occidentale',desc:'Le nationalisme arabe a ete importe d\'Europe. L\'Occident a encourage le nationalisme pour diviser les musulmans apres la chute du Califat.',idea:'Le nationalisme est une arme coloniale pour fragmenter l\'Oumma',islamic:'Allah dit : "Cramponnez-vous tous ensemble au cable d\'Allah et ne soyez pas divises"',evidence:'Sourate Ali Imrane 3:103'}},
  {id:7, emoji:'🗣️',
    ar:{title:'اللغة العربية رابطة دينية',desc:'العربية ليست مجرد لغة عرقية بل هي لغة القرآن والعبادة. غير العرب يتعلمونها حباً في الدين لا في العرق.',idea:'العربية تجمع المسلمين لا العرب فقط',islamic:'قال النبي ﷺ: "ليست العربية بأحدكم من أب ولا أم وإنما هي اللسان"',evidence:'رواه البيهقي'},
    en:{title:'Arabic: A Religious Bond',desc:'Arabic is not merely an ethnic language but the language of the Quran and worship. Non-Arabs learn it out of love for the religion, not for ethnicity.',idea:'Arabic unites Muslims, not just Arabs',islamic:'The Prophet (peace be upon him) said: "Being Arab is not through father or mother but through the tongue"',evidence:'Narrated by al-Bayhaqi'},
    fr:{title:'L\'Arabe : Un Lien Religieux',desc:'L\'arabe n\'est pas simplement une langue ethnique mais la langue du Coran et du culte. Les non-Arabes l\'apprennent par amour de la religion, pas de l\'ethnie.',idea:'L\'arabe unit les musulmans, pas seulement les Arabes',islamic:'Le Prophete (paix sur lui) a dit : "Etre Arabe ne vient pas du pere ou de la mere mais de la langue"',evidence:'Rapporte par al-Bayhaqi'}},
  {id:8, emoji:'💔',
    ar:{title:'القومية تفرّق المسلمين',desc:'عندما تبنّى العرب القومية، فقدوا تركيا وإيران وباكستان وإندونيسيا. القومية حوّلت حلفاء إلى غرباء.',idea:'القومية أضاعت أكثر مما كسبت',islamic:'قال تعالى: "وَلَا تَكُونُوا كَالَّذِينَ تَفَرَّقُوا وَاخْتَلَفُوا مِن بَعْدِ مَا جَاءَهُمُ الْبَيِّنَاتُ"',evidence:'سورة آل عمران ٣: ١٠٥'},
    en:{title:'Nationalism Divides Muslims',desc:'When Arabs adopted nationalism, they lost Turkey, Iran, Pakistan, and Indonesia as allies. Nationalism turned allies into strangers.',idea:'Nationalism lost more than it gained',islamic:'Allah says: "Do not be like those who became divided and differed after clear proofs came to them"',evidence:'Surah Ali Imran 3:105'},
    fr:{title:'Le Nationalisme Divise les Musulmans',desc:'Quand les Arabes ont adopte le nationalisme, ils ont perdu la Turquie, l\'Iran, le Pakistan et l\'Indonesie comme allies. Le nationalisme a transforme des allies en etrangers.',idea:'Le nationalisme a perdu plus qu\'il n\'a gagne',islamic:'Allah dit : "Ne soyez pas comme ceux qui se sont divises et ont diverge apres que les preuves claires leur soient venues"',evidence:'Sourate Ali Imrane 3:105'}},
  {id:9, emoji:'⚔️',
    ar:{title:'العصبية الجاهلية',desc:'النعرة القومية هي نفسها العصبية التي حاربها الإسلام. "أبالجاهلية تدعون وأنا بين أظهركم؟"',idea:'القومية المتعصبة هي جاهلية معاصرة',islamic:'قال النبي ﷺ: "دعوها فإنها منتنة"',evidence:'متفق عليه'},
    en:{title:'Pre-Islamic Tribalism',desc:'Nationalist fervor is the same tribalism that Islam fought against. "Are you calling to the ways of ignorance while I am among you?"',idea:'Extreme nationalism is modern-day tribalism',islamic:'The Prophet (peace be upon him) said: "Leave it, for it is rotten"',evidence:'Agreed upon (Bukhari & Muslim)'},
    fr:{title:'Le Tribalisme Pre-Islamique',desc:'La ferveur nationaliste est le meme tribalisme que l\'Islam a combattu. "Appelez-vous a la jahiliyya alors que je suis parmi vous ?"',idea:'Le nationalisme extreme est un tribalisme moderne',islamic:'Le Prophete (paix sur lui) a dit : "Laissez cela, car c\'est une chose pourrie"',evidence:'Unanimement reconnu (Bukhari et Muslim)'}},
  {id:10, emoji:'🏗️',
    ar:{title:'الوحدة على أساس الإسلام',desc:'الوحدة العربية الحقيقية لا تتحقق إلا على أساس الإسلام. كل محاولات الوحدة العلمانية فشلت فشلاً ذريعاً.',idea:'الإسلام هو الأساس الوحيد للوحدة الحقيقية',islamic:'قال تعالى: "وَأَنَّ هَٰذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ وَلَا تَتَّبِعُوا السُّبُلَ فَتَفَرَّقَ بِكُمْ"',evidence:'سورة الأنعام ٦: ١٥٣'},
    en:{title:'Unity on Islamic Foundations',desc:'True Arab unity can only be achieved on the foundation of Islam. All attempts at secular unity have failed miserably.',idea:'Islam is the only foundation for true unity',islamic:'Allah says: "This is My straight path, so follow it and do not follow other paths, for they will separate you from His way"',evidence:'Surah Al-An\'am 6:153'},
    fr:{title:'Unite sur les Fondations Islamiques',desc:'La vraie unite arabe ne peut etre realisee que sur la base de l\'Islam. Toutes les tentatives d\'unite laique ont echoue lamentablement.',idea:'L\'Islam est le seul fondement de la vraie unite',islamic:'Allah dit : "Voici Mon chemin droit, suivez-le et ne suivez pas les sentiers qui vous ecarteront de Sa voie"',evidence:'Sourate Al-An\'am 6:153'}},
  {id:11, emoji:'📚',
    ar:{title:'التاريخ يشهد',desc:'أعظم إنجازات العرب كانت تحت راية الإسلام: الفتوحات، العلوم، الحضارة. عندما تخلّوا عن الإسلام تراجعوا.',idea:'مجد العرب مرتبط بالتزامهم بالإسلام',islamic:'قال تعالى: "كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ"',evidence:'سورة آل عمران ٣: ١١٠'},
    en:{title:'History Testifies',desc:'The greatest achievements of Arabs were under the banner of Islam: conquests, sciences, civilization. When they abandoned Islam, they declined.',idea:'Arab glory is tied to their commitment to Islam',islamic:'Allah says: "You are the best nation produced for mankind. You enjoin what is right and forbid what is wrong"',evidence:'Surah Ali Imran 3:110'},
    fr:{title:'L\'Histoire Temoigne',desc:'Les plus grandes realisations des Arabes furent sous la banniere de l\'Islam : conquetes, sciences, civilisation. Quand ils ont abandonne l\'Islam, ils ont decline.',idea:'La gloire arabe est liee a leur engagement envers l\'Islam',islamic:'Allah dit : "Vous etes la meilleure communaute suscitee pour les hommes. Vous ordonnez le convenable et interdisez le blamable"',evidence:'Sourate Ali Imrane 3:110'}},
  {id:12, emoji:'🕌',
    ar:{title:'الخلافة جمعت الشعوب',desc:'الخلافة الإسلامية وحّدت العرب والفرس والترك والأمازيغ تحت راية واحدة. القومية فرّقت ما جمعه الإسلام.',idea:'الخلافة نموذج ناجح للوحدة فوق القومية',islamic:'قال النبي ﷺ: "المسلم أخو المسلم لا يظلمه ولا يسلمه"',evidence:'متفق عليه'},
    en:{title:'The Caliphate United Peoples',desc:'The Islamic Caliphate united Arabs, Persians, Turks, and Berbers under one banner. Nationalism divided what Islam had gathered.',idea:'The Caliphate was a successful model of supra-national unity',islamic:'The Prophet (peace be upon him) said: "A Muslim is the brother of a Muslim — he does not oppress him nor forsake him"',evidence:'Agreed upon (Bukhari & Muslim)'},
    fr:{title:'Le Califat a Uni les Peuples',desc:'Le Califat islamique a uni Arabes, Perses, Turcs et Berberes sous une seule banniere. Le nationalisme a divise ce que l\'Islam avait rassemble.',idea:'Le Califat etait un modele reussi d\'unite supranationale',islamic:'Le Prophete (paix sur lui) a dit : "Le musulman est le frere du musulman, il ne l\'opprime pas et ne l\'abandonne pas"',evidence:'Unanimement reconnu (Bukhari et Muslim)'}},
  {id:13, emoji:'🧭',
    ar:{title:'الهوية الحقيقية',desc:'هوية المسلم الأولى هي إسلامه لا عرقه. يمكن أن يفخر بعروبته لكن لا يجعلها فوق دينه.',idea:'الإسلام أولاً ثم الانتماءات الأخرى',islamic:'قال تعالى: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا"',evidence:'سورة الحجرات ٤٩: ١٣'},
    en:{title:'True Identity',desc:'A Muslim\'s primary identity is their Islam, not their ethnicity. One can take pride in being Arab, but must not place it above their religion.',idea:'Islam first, then other affiliations',islamic:'Allah says: "O mankind, We created you from male and female and made you peoples and tribes that you may know one another"',evidence:'Surah Al-Hujurat 49:13'},
    fr:{title:'La Vraie Identite',desc:'L\'identite premiere d\'un musulman est son Islam, pas son ethnie. On peut etre fier d\'etre Arabe, mais ne doit pas le placer au-dessus de sa religion.',idea:'L\'Islam d\'abord, puis les autres appartenances',islamic:'Allah dit : "O hommes, Nous vous avons crees d\'un male et d\'une femelle et avons fait de vous des peuples et des tribus pour que vous vous entreconnaissiez"',evidence:'Sourate Al-Hujurat 49:13'}},
  {id:14, emoji:'🔥',
    ar:{title:'البعث والاستبداد',desc:'الأنظمة البعثية في العراق وسوريا أقامت حكماً استبدادياً باسم القومية. قمعت الحريات وسجنت العلماء.',idea:'القومية العلمانية تؤدي حتماً إلى الاستبداد',islamic:'قال النبي ﷺ: "إن الله ليزع بالسلطان ما لا يزع بالقرآن" — لكن السلطان الظالم يفسد أكثر مما يصلح',evidence:'أثر عثمان رضي الله عنه'},
    en:{title:'Ba\'athism and Tyranny',desc:'Ba\'athist regimes in Iraq and Syria established tyrannical rule in the name of nationalism. They suppressed freedoms and imprisoned scholars.',idea:'Secular nationalism inevitably leads to tyranny',islamic:'The Prophet (peace be upon him) said: "Allah restrains through authority what He does not restrain through the Quran" — but unjust authority corrupts more than it fixes',evidence:'Saying of Uthman (may Allah be pleased with him)'},
    fr:{title:'Baathisme et Tyrannie',desc:'Les regimes baathistes en Irak et en Syrie ont etabli un pouvoir tyrannique au nom du nationalisme. Ils ont reprime les libertes et emprisonne les savants.',idea:'Le nationalisme laique mene inevitablement a la tyrannie',islamic:'Le Prophete (paix sur lui) a dit : "Allah retient par l\'autorite ce qu\'Il ne retient pas par le Coran" — mais l\'autorite injuste corrompt plus qu\'elle ne repare',evidence:'Parole de Outhman (qu\'Allah l\'agree)'}},
  {id:15, emoji:'🌱',
    ar:{title:'البديل الإسلامي',desc:'البديل عن القومية ليس التخلي عن الهوية العربية بل وضعها في إطارها الصحيح — خادمة للإسلام لا بديلة عنه.',idea:'العروبة في خدمة الإسلام لا في مواجهته',islamic:'قال تعالى: "وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ"',evidence:'سورة البقرة ٢: ١٤٣'},
    en:{title:'The Islamic Alternative',desc:'The alternative to nationalism is not abandoning Arab identity but placing it in its proper framework — serving Islam, not replacing it.',idea:'Arabism in service of Islam, not in opposition to it',islamic:'Allah says: "And thus We have made you a just community that you will be witnesses over the people"',evidence:'Surah Al-Baqarah 2:143'},
    fr:{title:'L\'Alternative Islamique',desc:'L\'alternative au nationalisme n\'est pas d\'abandonner l\'identite arabe mais de la placer dans son cadre adequat — au service de l\'Islam, pas en remplacement.',idea:'L\'arabisme au service de l\'Islam, pas contre lui',islamic:'Allah dit : "Ainsi Nous avons fait de vous une communaute juste pour que vous soyez temoins envers les gens"',evidence:'Sourate Al-Baqara 2:143'}},
  {id:16, emoji:'🎓',
    ar:{title:'العلم قبل الشعارات',desc:'الأمة تنهض بالعلم والعمل لا بالشعارات الجوفاء. القومية اكتفت بالخطابات وأهملت بناء الإنسان.',idea:'البناء الحقيقي يبدأ بالتعليم والتربية',islamic:'قال تعالى: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ"',evidence:'سورة الزمر ٣٩: ٩'},
    en:{title:'Knowledge Before Slogans',desc:'A nation rises through knowledge and action, not hollow slogans. Nationalism relied on speeches and neglected building people.',idea:'True building starts with education and moral cultivation',islamic:'Allah says: "Say: Are those who know equal to those who do not know?"',evidence:'Surah Az-Zumar 39:9'},
    fr:{title:'Le Savoir avant les Slogans',desc:'Une nation se leve par le savoir et l\'action, pas par des slogans creux. Le nationalisme s\'est contente de discours et a neglige la construction de l\'humain.',idea:'La vraie construction commence par l\'education et la culture morale',islamic:'Allah dit : "Dis : Sont-ils egaux ceux qui savent et ceux qui ne savent pas ?"',evidence:'Sourate Az-Zoumar 39:9'}},
  {id:17, emoji:'🕊️',
    ar:{title:'السلام لا العنف',desc:'القومية المتطرفة أنتجت حروباً بين المسلمين. الإسلام يدعو للسلام والحوار والتعايش.',idea:'الإسلام يبني جسور السلام بين الشعوب',islamic:'قال تعالى: "وَإِن جَنَحُوا لِلسَّلْمِ فَاجْنَحْ لَهَا وَتَوَكَّلْ عَلَى اللَّهِ"',evidence:'سورة الأنفال ٨: ٦١'},
    en:{title:'Peace, Not Violence',desc:'Extreme nationalism produced wars between Muslims. Islam calls for peace, dialogue, and coexistence.',idea:'Islam builds bridges of peace between peoples',islamic:'Allah says: "If they incline to peace, then incline to it and rely upon Allah"',evidence:'Surah Al-Anfal 8:61'},
    fr:{title:'La Paix, Pas la Violence',desc:'Le nationalisme extreme a produit des guerres entre musulmans. L\'Islam appelle a la paix, au dialogue et a la coexistence.',idea:'L\'Islam construit des ponts de paix entre les peuples',islamic:'Allah dit : "S\'ils inclinent a la paix, incline aussi vers elle et place ta confiance en Allah"',evidence:'Sourate Al-Anfal 8:61'}},
  {id:18, emoji:'🧩',
    ar:{title:'التنوع في الوحدة',desc:'الإسلام يحتضن التنوع العرقي واللغوي ويجعله آية من آيات الله، لا سبباً للتفرقة والتنافر.',idea:'التنوع ثراء لا تهديد',islamic:'قال تعالى: "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ"',evidence:'سورة الروم ٣٠: ٢٢'},
    en:{title:'Diversity in Unity',desc:'Islam embraces ethnic and linguistic diversity and considers it a sign of Allah, not a cause for division and discord.',idea:'Diversity is richness, not a threat',islamic:'Allah says: "And of His signs is the creation of the heavens and the earth and the diversity of your languages and your colors"',evidence:'Surah Ar-Rum 30:22'},
    fr:{title:'Diversite dans l\'Unite',desc:'L\'Islam embrasse la diversite ethnique et linguistique et la considere comme un signe d\'Allah, pas une cause de division.',idea:'La diversite est une richesse, pas une menace',islamic:'Allah dit : "Et parmi Ses signes, la creation des cieux et de la terre et la diversite de vos langues et de vos couleurs"',evidence:'Sourate Ar-Roum 30:22'}},
  {id:19, emoji:'💪',
    ar:{title:'القوة في الإيمان',desc:'قوة الأمة الحقيقية في إيمانها بالله لا في عصبيتها القومية. الإيمان يصنع المعجزات والقومية تصنع الأوهام.',idea:'الإيمان مصدر القوة الحقيقية',islamic:'قال تعالى: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ"',evidence:'سورة آل عمران ٣: ١٣٩'},
    en:{title:'Strength Through Faith',desc:'The true strength of the Ummah lies in its faith in Allah, not in nationalist sentiment. Faith creates miracles while nationalism creates illusions.',idea:'Faith is the source of true strength',islamic:'Allah says: "Do not weaken and do not grieve, and you will be superior if you are believers"',evidence:'Surah Ali Imran 3:139'},
    fr:{title:'La Force par la Foi',desc:'La vraie force de l\'Oumma reside dans sa foi en Allah, pas dans le sentiment nationaliste. La foi cree des miracles tandis que le nationalisme cree des illusions.',idea:'La foi est la source de la vraie force',islamic:'Allah dit : "Ne faiblissez pas et ne soyez pas tristes alors que vous etes les superieurs si vous etes croyants"',evidence:'Sourate Ali Imrane 3:139'}},
  {id:20, emoji:'🌟',
    ar:{title:'نحو نهضة إسلامية',desc:'الحل ليس في العودة للقومية ولا في تقليد الغرب، بل في العودة للإسلام الصحيح الذي يجمع بين الأصالة والمعاصرة.',idea:'النهضة الحقيقية تبدأ بالعودة للإسلام',islamic:'قال تعالى: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ"',evidence:'سورة الرعد ١٣: ١١'},
    en:{title:'Toward an Islamic Renaissance',desc:'The solution is neither returning to nationalism nor imitating the West, but returning to authentic Islam that combines tradition and modernity.',idea:'True renaissance begins with returning to Islam',islamic:'Allah says: "Indeed, Allah will not change the condition of a people until they change what is in themselves"',evidence:'Surah Ar-Ra\'d 13:11'},
    fr:{title:'Vers une Renaissance Islamique',desc:'La solution n\'est ni le retour au nationalisme ni l\'imitation de l\'Occident, mais le retour a l\'Islam authentique qui allie tradition et modernite.',idea:'La vraie renaissance commence par le retour a l\'Islam',islamic:'Allah dit : "Allah ne change pas l\'etat d\'un peuple tant qu\'ils ne changent pas ce qui est en eux-memes"',evidence:'Sourate Ar-Ra\'d 13:11'}}
];

// ═══════════════ CRITIQUE DATA ═══════════════
const CRITIQUE_DATA = [
  {emoji:'🚫',
    ar:{title:'فصل الدين عن الدولة',problem:'البعث تبنّى العلمانية وفصل الدين عن الحياة العامة',solution:'الإسلام نظام شامل للحياة — لا يقبل التجزئة',verse:'أَفَتُؤْمِنُونَ بِبَعْضِ الْكِتَابِ وَتَكْفُرُونَ بِبَعْضٍ',verseRef:'البقرة ٢: ٨٥'},
    en:{title:'Separation of Religion and State',problem:'Ba\'athism adopted secularism and separated religion from public life',solution:'Islam is a comprehensive system for life — it cannot be fragmented',verse:'Do you believe in part of the Scripture and disbelieve in part?',verseRef:'Al-Baqarah 2:85'},
    fr:{title:'Separation de la Religion et de l\'Etat',problem:'Le baathisme a adopte la laicite et separe la religion de la vie publique',solution:'L\'Islam est un systeme global pour la vie — il ne peut etre fragmente',verse:'Croyez-vous en une partie du Livre et rejetez-vous le reste ?',verseRef:'Al-Baqara 2:85'}},
  {emoji:'👑',
    ar:{title:'عبادة الزعيم',problem:'القومية خلقت عبادة الفرد والزعيم الأوحد',solution:'الإسلام يحرّم تقديس البشر — العبادة لله وحده',verse:'إِنِ الْحُكْمُ إِلَّا لِلَّهِ',verseRef:'يوسف ١٢: ٤٠'},
    en:{title:'Cult of Personality',problem:'Nationalism created personality cults and strongman worship',solution:'Islam prohibits the deification of humans — worship is for Allah alone',verse:'Judgment is only for Allah',verseRef:'Yusuf 12:40'},
    fr:{title:'Culte de la Personnalite',problem:'Le nationalisme a cree des cultes de personnalite et l\'adoration du leader',solution:'L\'Islam interdit la deification des humains — l\'adoration est pour Allah seul',verse:'Le jugement n\'appartient qu\'a Allah',verseRef:'Youssouf 12:40'}},
  {emoji:'🔗',
    ar:{title:'تبعية فكرية',problem:'القومية العربية استعارت أفكارها من القومية الأوروبية دون نقد',solution:'الإسلام يدعو للاستقلال الفكري والاعتماد على الوحي',verse:'وَلَن تَرْضَىٰ عَنكَ الْيَهُودُ وَلَا النَّصَارَىٰ حَتَّىٰ تَتَّبِعَ مِلَّتَهُمْ',verseRef:'البقرة ٢: ١٢٠'},
    en:{title:'Intellectual Dependency',problem:'Arab nationalism borrowed its ideas from European nationalism uncritically',solution:'Islam calls for intellectual independence based on revelation',verse:'Never will the Jews or Christians be satisfied with you until you follow their way',verseRef:'Al-Baqarah 2:120'},
    fr:{title:'Dependance Intellectuelle',problem:'Le nationalisme arabe a emprunte ses idees au nationalisme europeen sans critique',solution:'L\'Islam appelle a l\'independance intellectuelle basee sur la revelation',verse:'Ni les Juifs ni les Chretiens ne seront satisfaits de toi tant que tu ne suivras pas leur voie',verseRef:'Al-Baqara 2:120'}},
  {emoji:'💸',
    ar:{title:'وعود كاذبة',problem:'البعث وعد بالرخاء الاقتصادي لكنه أنتج فقراً وفساداً',solution:'الاقتصاد الإسلامي قائم على العدل والزكاة ومحاربة الاحتكار',verse:'كَيْ لَا يَكُونَ دُولَةً بَيْنَ الْأَغْنِيَاءِ مِنكُمْ',verseRef:'الحشر ٥٩: ٧'},
    en:{title:'False Promises',problem:'Ba\'athism promised economic prosperity but produced poverty and corruption',solution:'Islamic economics is based on justice, zakat, and fighting monopoly',verse:'So that it does not become a perpetual distribution among the rich',verseRef:'Al-Hashr 59:7'},
    fr:{title:'Fausses Promesses',problem:'Le baathisme a promis la prosperite economique mais a produit pauvrete et corruption',solution:'L\'economie islamique est basee sur la justice, la zakat et la lutte contre le monopole',verse:'Pour que cela ne circule pas uniquement entre les riches parmi vous',verseRef:'Al-Hashr 59:7'}},
  {emoji:'📰',
    ar:{title:'تزوير التاريخ',problem:'القومية حاولت كتابة تاريخ عربي بدون إسلام — وهذا تزوير',solution:'التاريخ العربي الحقيقي لا ينفصل عن الإسلام',verse:'تِلْكَ أُمَّةٌ قَدْ خَلَتْ لَهَا مَا كَسَبَتْ وَلَكُم مَّا كَسَبْتُمْ',verseRef:'البقرة ٢: ١٣٤'},
    en:{title:'Falsifying History',problem:'Nationalism tried to write an Arab history without Islam — this is falsification',solution:'True Arab history is inseparable from Islam',verse:'That was a nation which has passed. They will have what they earned and you will have what you earn',verseRef:'Al-Baqarah 2:134'},
    fr:{title:'Falsification de l\'Histoire',problem:'Le nationalisme a essaye d\'ecrire une histoire arabe sans Islam — c\'est une falsification',solution:'La vraie histoire arabe est inseparable de l\'Islam',verse:'Voila une communaute qui a vecu. A elle ce qu\'elle a acquis et a vous ce que vous avez acquis',verseRef:'Al-Baqara 2:134'}},
  {emoji:'🔒',
    ar:{title:'قمع المعارضة',problem:'الأنظمة القومية قمعت كل صوت معارض باسم الوحدة الوطنية',solution:'الإسلام يكفل الشورى وحرية النصيحة والأمر بالمعروف',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'الشورى ٤٢: ٣٨'},
    en:{title:'Suppression of Dissent',problem:'Nationalist regimes suppressed all opposition in the name of national unity',solution:'Islam guarantees consultation, freedom of advice, and commanding good',verse:'And their affairs are conducted through consultation among themselves',verseRef:'Ash-Shura 42:38'},
    fr:{title:'Repression de la Dissidence',problem:'Les regimes nationalistes ont reprime toute opposition au nom de l\'unite nationale',solution:'L\'Islam garantit la consultation, la liberte de conseil et l\'ordre du bien',verse:'Et leurs affaires se traitent par consultation entre eux',verseRef:'Ash-Shura 42:38'}},
  {emoji:'🏳️',
    ar:{title:'تمزيق الأمة',problem:'القومية قسّمت الأمة الواحدة إلى دويلات متناحرة',solution:'الإسلام يدعو للوحدة: أمة واحدة من دون الناس',verse:'إِنَّ هَٰذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاعْبُدُونِ',verseRef:'الأنبياء ٢١: ٩٢'},
    en:{title:'Tearing the Ummah Apart',problem:'Nationalism divided the one Ummah into rival mini-states',solution:'Islam calls for unity: one nation under God',verse:'Indeed this, your religion, is one religion, and I am your Lord, so worship Me',verseRef:'Al-Anbiya 21:92'},
    fr:{title:'Dechirement de l\'Oumma',problem:'Le nationalisme a divise l\'Oumma unique en mini-etats rivaux',solution:'L\'Islam appelle a l\'unite: une nation sous Dieu',verse:'Certes, votre religion est une religion unique et Je suis votre Seigneur, adorez-Moi',verseRef:'Al-Anbiya 21:92'}},
  {emoji:'🎓',
    ar:{title:'تغريب التعليم',problem:'الأنظمة القومية فرضت مناهج تعليمية غربية تُبعد الشباب عن هويتهم',solution:'التعليم الإسلامي يجمع بين العلم الدنيوي والقيم الإيمانية',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ٩٦: ١'},
    en:{title:'Westernizing Education',problem:'Nationalist regimes imposed Western curricula that alienated youth from their identity',solution:'Islamic education combines worldly knowledge with faith-based values',verse:'Read in the name of your Lord who created',verseRef:'Al-Alaq 96:1'},
    fr:{title:'Occidentalisation de l\'Education',problem:'Les regimes nationalistes ont impose des programmes occidentaux eloignant les jeunes de leur identite',solution:'L\'education islamique combine savoir mondain et valeurs de foi',verse:'Lis au nom de ton Seigneur qui a cree',verseRef:'Al-Alaq 96:1'}},
  {emoji:'📺',
    ar:{title:'احتكار الإعلام',problem:'القومية احتكرت الإعلام لنشر دعاية الحزب الواحد',solution:'الإسلام يؤمن بحرية القول والأمر بالمعروف والنهي عن المنكر',verse:'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ',verseRef:'آل عمران ٣: ١١٠'},
    en:{title:'Media Monopoly',problem:'Nationalism monopolized media to spread single-party propaganda',solution:'Islam believes in freedom of speech and commanding good',verse:'You are the best nation produced for mankind, commanding what is right',verseRef:'Aal Imran 3:110'},
    fr:{title:'Monopole des Medias',problem:'Le nationalisme a monopolise les medias pour diffuser la propagande du parti unique',solution:'L\'Islam croit en la liberte d\'expression et l\'injonction du bien',verse:'Vous etes la meilleure communaute suscitee pour les gens, ordonnant le bien',verseRef:'Aal Imran 3:110'}},
  {emoji:'🌍',
    ar:{title:'العزلة عن العالم الإسلامي',problem:'القومية عزلت العرب عن إخوانهم في تركيا وإيران وأفريقيا وآسيا',solution:'الأمة الإسلامية واحدة بغض النظر عن الأعراق والجغرافيا',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ٣: ١٠٣'},
    en:{title:'Isolation from the Muslim World',problem:'Nationalism isolated Arabs from their brothers in Turkey, Iran, Africa and Asia',solution:'The Muslim Ummah is one regardless of ethnicity and geography',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Aal Imran 3:103'},
    fr:{title:'Isolement du Monde Musulman',problem:'Le nationalisme a isole les Arabes de leurs freres en Turquie, Iran, Afrique et Asie',solution:'La Oumma est une quelle que soit l\'ethnie et la geographie',verse:'Et cramponnez-vous ensemble au cable d\'Allah et ne soyez pas divises',verseRef:'Aal Imran 3:103'}},
  {emoji:'⚖️',
    ar:{title:'غياب العدالة الاجتماعية',problem:'الأنظمة القومية أنشأت طبقية جديدة: حزبيون ومهمّشون',solution:'الإسلام يساوي بين الناس: لا فضل لعربي على أعجمي إلا بالتقوى',verse:'إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ',verseRef:'الحجرات ٤٩: ١٣'},
    en:{title:'Absence of Social Justice',problem:'Nationalist regimes created new class divisions: party members vs marginalized',solution:'Islam equalizes people: no superiority except through piety',verse:'Indeed, the most noble of you in the sight of Allah is the most righteous',verseRef:'Al-Hujurat 49:13'},
    fr:{title:'Absence de Justice Sociale',problem:'Les regimes nationalistes ont cree de nouvelles divisions de classe',solution:'L\'Islam egalise les gens: pas de superiorite sauf par la piete',verse:'Le plus noble d\'entre vous aupres d\'Allah est le plus pieux',verseRef:'Al-Hujurat 49:13'}},
  {emoji:'🔮',
    ar:{title:'رؤية المستقبل',problem:'القومية لم تقدم رؤية مستقبلية واضحة سوى شعارات جوفاء',solution:'الإسلام يقدم مشروعاً حضارياً شاملاً للدنيا والآخرة',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',verseRef:'القصص ٢٨: ٧٧'},
    en:{title:'Vision for the Future',problem:'Nationalism offered no clear future vision beyond hollow slogans',solution:'Islam presents a comprehensive civilizational project for this life and the next',verse:'Seek the home of the Hereafter with what Allah has given you, but do not forget your share of this world',verseRef:'Al-Qasas 28:77'},
    fr:{title:'Vision pour l\'Avenir',problem:'Le nationalisme n\'a offert aucune vision claire au-dela de slogans creux',solution:'L\'Islam presente un projet civilisationnel complet pour cette vie et l\'au-dela',verse:'Recherche la demeure de l\'Au-dela avec ce qu\'Allah t\'a donne, mais n\'oublie pas ta part de ce monde',verseRef:'Al-Qasas 28:77'}}
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'📖',ar:{label:'قرأت صفحة من كتاب إسلامي',source:'العلم قبل الشعارات'},en:{label:'Read a page from an Islamic book',source:'Knowledge before slogans'},fr:{label:'Lu une page d\'un livre islamique',source:'Le savoir avant les slogans'}},
  {emoji:'🤝',ar:{label:'تواصلت مع مسلم من ثقافة مختلفة',source:'الأخوة فوق القومية'},en:{label:'Connected with a Muslim from a different culture',source:'Brotherhood above nationalism'},fr:{label:'Communique avec un musulman d\'une autre culture',source:'Fraternite au-dessus du nationalisme'}},
  {emoji:'🤲',ar:{label:'دعوت للوحدة بين المسلمين',source:'الوحدة على أساس الإسلام'},en:{label:'Prayed for Muslim unity',source:'Unity on Islamic foundations'},fr:{label:'Prie pour l\'unite des musulmans',source:'Unite sur les fondations islamiques'}},
  {emoji:'🌍',ar:{label:'تعلمت شيئاً عن ثقافة إسلامية أخرى',source:'التنوع في الوحدة'},en:{label:'Learned about another Islamic culture',source:'Diversity in unity'},fr:{label:'Appris sur une autre culture islamique',source:'Diversite dans l\'unite'}},
  {emoji:'🕌',ar:{label:'صليت الصلوات الخمس في وقتها',source:'العمل قبل الشعارات'},en:{label:'Prayed the five daily prayers on time',source:'Action before slogans'},fr:{label:'Prie les cinq prieres a l\'heure',source:'L\'action avant les slogans'}},
  {emoji:'📚',ar:{label:'ذكّرت نفسي بأن هويتي الأولى إسلامية',source:'الهوية الحقيقية'},en:{label:'Reminded myself that my primary identity is Islamic',source:'True identity'},fr:{label:'Rappele que mon identite premiere est islamique',source:'La vraie identite'}},
  {emoji:'🕊️',ar:{label:'عملت على نشر السلام والتسامح',source:'السلام لا العنف'},en:{label:'Worked to spread peace and tolerance',source:'Peace, not violence'},fr:{label:'Travaille a repandre la paix et la tolerance',source:'La paix, pas la violence'}},
  {emoji:'💪',ar:{label:'قاومت فكرة عصبية أو عنصرية',source:'العصبية الجاهلية'},en:{label:'Resisted a tribalist or racist thought',source:'Pre-Islamic tribalism'},fr:{label:'Resiste a une pensee tribaliste ou raciste',source:'Le tribalisme pre-islamique'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل تؤمن بأن الإسلام هو أساس وحدة المسلمين؟',en:'Do you believe Islam is the foundation of Muslim unity?',fr:'Croyez-vous que l\'Islam est le fondement de l\'unite musulmane ?'},
  {ar:'هل تشعر أحياناً بتعصب لعرقك على حساب دينك؟',en:'Do you sometimes feel ethnic pride over your religious identity?',fr:'Ressentez-vous parfois une fierte ethnique au detriment de votre identite religieuse ?'},
  {ar:'هل تعتبر المسلم غير العربي أخاً لك بنفس الدرجة؟',en:'Do you consider a non-Arab Muslim your brother equally?',fr:'Considerez-vous un musulman non-arabe comme votre frere egalement ?'},
  {ar:'هل تعرف لماذا فشلت محاولات الوحدة العلمانية؟',en:'Do you know why secular unity attempts failed?',fr:'Savez-vous pourquoi les tentatives d\'unite laique ont echoue ?'},
  {ar:'هل تقرأ عن تاريخ الإسلام وإنجازاته؟',en:'Do you read about Islamic history and achievements?',fr:'Lisez-vous sur l\'histoire de l\'Islam et ses realisations ?'},
  {ar:'هل تؤمن بأن التنوع العرقي نعمة من الله؟',en:'Do you believe ethnic diversity is a blessing from Allah?',fr:'Croyez-vous que la diversite ethnique est une benediction d\'Allah ?'},
  {ar:'هل تدعو إلى الحوار والسلام بين المسلمين؟',en:'Do you advocate for dialogue and peace among Muslims?',fr:'Plaidez-vous pour le dialogue et la paix entre musulmans ?'},
  {ar:'هل تفرّق في معاملتك بين المسلمين بسبب جنسياتهم؟',en:'Do you treat Muslims differently based on their nationality?',fr:'Traitez-vous les musulmans differemment selon leur nationalite ?'},
  {ar:'هل تعرف الفرق بين الانتماء الثقافي والتعصب القومي؟',en:'Do you know the difference between cultural belonging and ethnic fanaticism?',fr:'Connaissez-vous la difference entre appartenance culturelle et fanatisme ethnique ?'},
  {ar:'هل تؤمن بأن اللغة العربية رابط ثقافي لا عرقي؟',en:'Do you believe Arabic is a cultural bond, not an ethnic one?',fr:'Croyez-vous que l\'arabe est un lien culturel, pas ethnique ?'},
  {ar:'هل تعلم أن الصحابة كانوا من أعراق مختلفة؟',en:'Do you know the Companions came from diverse ethnicities?',fr:'Savez-vous que les Compagnons venaient de differentes ethnies ?'},
  {ar:'هل تسعى لبناء جسور مع المسلمين من ثقافات أخرى؟',en:'Do you seek to build bridges with Muslims from other cultures?',fr:'Cherchez-vous a construire des ponts avec les musulmans d\'autres cultures ?'},
  {ar:'هل تفهم لماذا رفض الإسلام العصبية القبلية؟',en:'Do you understand why Islam rejected tribal fanaticism?',fr:'Comprenez-vous pourquoi l\'Islam a rejete le fanatisme tribal ?'},
  {ar:'هل تعتقد أن الأمة الإسلامية تحتاج وحدة سياسية أم ثقافية أولاً؟',en:'Do you think the Muslim Ummah needs political or cultural unity first?',fr:'Pensez-vous que la Oumma a besoin d\'unite politique ou culturelle d\'abord ?'},
  {ar:'هل تستطيع التمييز بين حب الوطن والتعصب الأعمى؟',en:'Can you distinguish between patriotism and blind nationalism?',fr:'Pouvez-vous distinguer entre patriotisme et nationalisme aveugle ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء الوحدة',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'O Allah, unite our hearts and reconcile between us'},en:{label:'Dua for Unity',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'O Allah, unite our hearts and reconcile between us'},fr:{label:'Dua pour l\'Unite',text:'اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا',tr:'O Allah, unis nos coeurs et reconcilie-nous'}},
  {ar:{label:'دعاء الأخوة',text:'اللَّهُمَّ اجْعَلْنَا إِخْوَانًا مُتَحَابِّينَ فِي اللَّهِ',tr:'O Allah, make us brothers who love each other for Your sake'},en:{label:'Dua for Brotherhood',text:'اللَّهُمَّ اجْعَلْنَا إِخْوَانًا مُتَحَابِّينَ فِي اللَّهِ',tr:'O Allah, make us brothers who love each other for Your sake'},fr:{label:'Dua pour la Fraternite',text:'اللَّهُمَّ اجْعَلْنَا إِخْوَانًا مُتَحَابِّينَ فِي اللَّهِ',tr:'O Allah, fais de nous des freres qui s\'aiment pour Toi'}},
  {ar:{label:'دعاء الهداية',text:'رَبَّنَا اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'Our Lord, guide us to the straight path'},en:{label:'Dua for Guidance',text:'رَبَّنَا اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'Our Lord, guide us to the straight path'},fr:{label:'Dua pour la Guidance',text:'رَبَّنَا اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',tr:'Notre Seigneur, guide-nous vers le droit chemin'}},
  {ar:{label:'دعاء نصرة الأمة',text:'اللَّهُمَّ انْصُرِ الْإِسْلَامَ وَالْمُسْلِمِينَ وَوَحِّدْ صُفُوفَهُمْ',tr:'O Allah, grant victory to Islam and Muslims and unite their ranks'},en:{label:'Dua for the Ummah',text:'اللَّهُمَّ انْصُرِ الْإِسْلَامَ وَالْمُسْلِمِينَ وَوَحِّدْ صُفُوفَهُمْ',tr:'O Allah, grant victory to Islam and Muslims and unite their ranks'},fr:{label:'Dua pour l\'Oumma',text:'اللَّهُمَّ انْصُرِ الْإِسْلَامَ وَالْمُسْلِمِينَ وَوَحِّدْ صُفُوفَهُمْ',tr:'O Allah, accorde la victoire a l\'Islam et aux musulmans et unis leurs rangs'}},
  {ar:{label:'دعاء العلم النافع',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Allah, I ask You for beneficial knowledge and accepted deeds'},en:{label:'Dua for Beneficial Knowledge',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Allah, I ask You for beneficial knowledge and accepted deeds'},fr:{label:'Dua pour le Savoir Benefique',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Allah, je Te demande un savoir benefique et des actes acceptes'}},
  {ar:{label:'دعاء التوفيق',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'My Lord, expand my chest and ease my affair'},en:{label:'Dua for Success',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'My Lord, expand my chest and ease my affair'},fr:{label:'Dua pour la Reussite',text:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',tr:'Mon Seigneur, ouvre-moi ma poitrine et facilite mon affaire'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('hq-lang') || 'ar';
let theme = localStorage.getItem('hq-theme') || 'steel';
const themes = ['steel','night','iron'];
const themeIcons = ['🏛️','🌙','⚔️'];
const themeNames = {steel:'Steel / فولاذي',night:'Night / ليلي',iron:'Iron / حديدي'};
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderCritique();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('hq-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabCritique', t.tabCritique);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('critiqueTitle', t.critiqueTitle); set('critiqueDesc', t.critiqueDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderCritique(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('hq-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    {icon:'🃏',tab:'cards',title:t.tabCards,desc:lang==='ar'?'٢٠ بطاقة معرفية':lang==='fr'?'20 cartes de savoir':'20 knowledge cards'},
    {icon:'⚖️',tab:'critique',title:t.tabCritique,desc:lang==='ar'?'نقد الفكر القومي':lang==='fr'?'Critique du nationalisme':'Critique of nationalism'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر نفسك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.idea}</span>
          </div>
          <div class="comparison-box">
            <div class="comparison-side ghazali-side">
              <div class="comp-label">${t.islamicView}</div>
              <div class="comp-text">${d.islamic}</div>
            </div>
          </div>
          <div class="verse-box">
            <div class="verse-ref">${d.evidence}</div>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('cardsContainer').innerHTML = searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.idea}\n\n— حقيقة القومية العربية`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: CRITIQUE ═══════════════
function renderCritique() {
  const t = T[lang];
  document.getElementById('critiqueContainer').innerHTML = CRITIQUE_DATA.map(a => {
    const d = a[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${a.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${lang==='ar'?'🚫 المشكلة':lang==='fr'?'🚫 Le Probleme':'🚫 The Problem'}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${lang==='ar'?'☪️ الحل الإسلامي':lang==='fr'?'☪️ La Solution Islamique':'☪️ The Islamic Solution'}</span>
        ${d.solution}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('hq-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('hq-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  document.getElementById('habitsContainer').innerHTML = HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('hq-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('hq-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}

function resetHabits() {
  localStorage.setItem('hq-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length;
  const total = HABITS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  const txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('hq-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) { streakData.count++; }
    else if (prevState.date !== new Date().toDateString()) { streakData.count = prevState.done.length === HABITS.length ? 1 : 0; }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('hq-streak', JSON.stringify(streakData));
}

function getStreak() {
  return JSON.parse(localStorage.getItem('hq-streak') || '{"count":0}').count;
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#37474F','#546E7A','#78909C','#B0BEC5','#E8A040','#66BB6A','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10});
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  container.innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang==='ar'?'أجب على جميع الأسئلة':lang==='fr'?'Repondez a toutes les questions':'Answer all questions');
    return;
  }
  const invertedQs = [1, 7];
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => {
    score += invertedQs.includes(parseInt(qi)) ? (2 - v) : v;
  });
  const max = QUIZ.length * 2;
  const pct = Math.round(score / max * 100);
  let emoji, title, desc;
  if (pct >= 75) {
    emoji='🌟'; title=lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc=lang==='ar'?'فهمك للعلاقة بين الإسلام والعروبة ممتاز. واصل التعلم!':lang==='fr'?'Votre comprehension de la relation Islam-arabisme est excellente !':'Your understanding of the Islam-Arabism relationship is excellent!';
  } else if (pct >= 50) {
    emoji='🏛️'; title=lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc=lang==='ar'?'لديك فهم جيد لكن هناك مجال للتعمق أكثر.':lang==='fr'?'Vous avez une bonne comprehension mais il y a place pour approfondir.':'You have good understanding but there\'s room to go deeper.';
  } else {
    emoji='📚'; title=lang==='ar'?'تحتاج مراجعة':lang==='fr'?'A revoir':'Needs Review';
    desc=lang==='ar'?'راجع البطاقات المعرفية وتعمق في الموضوع.':lang==='fr'?'Revoyez les cartes et approfondissez le sujet.':'Review the knowledge cards and study the topic more deeply.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦',
      authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. عُرف بدفاعه عن الإسلام ضد التيارات العلمانية والقومية المتطرفة.',
      bookTitle:'عن الكتاب',
      bookDesc:'"حقيقة القومية العربية وأسطورة البعث العربي" يكشف فيه الشيخ الغزالي زيف الادعاءات القومية التي حاولت فصل العروبة عن الإسلام. يوضح أن مجد العرب الحقيقي جاء من الإسلام، وأن القومية العلمانية أضرّت بالأمة أكثر مما نفعتها.',
      sourcesTitle:'المصادر',
      sources:['كتاب "حقيقة القومية العربية" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','مصادر تاريخية إسلامية'],
      contact:'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996',
      authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Known for defending Islam against secular and extreme nationalist currents.',
      bookTitle:'About the Book',
      bookDesc:'"The Truth About Arab Nationalism and the Myth of Arab Ba\'athism" exposes the false claims of nationalism that tried to separate Arabism from Islam. It shows that Arab glory came from Islam, and that secular nationalism harmed the Ummah more than it helped.',
      sourcesTitle:'Sources',
      sources:['"The Truth About Arab Nationalism" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Islamic historical sources'],
      contact:'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996',
      authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Connu pour sa defense de l\'Islam contre les courants laiques et nationalistes extremes.',
      bookTitle:'A Propos du Livre',
      bookDesc:'"La Verite sur le Nationalisme Arabe et le Mythe du Baathisme" expose les fausses pretentions du nationalisme qui a tente de separer l\'arabisme de l\'Islam. Il montre que la gloire arabe vient de l\'Islam et que le nationalisme laique a nui a l\'Oumma plus qu\'il ne l\'a aidee.',
      sourcesTitle:'Sources',
      sources:['"La Verite sur le Nationalisme Arabe" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sources historiques islamiques'],
      contact:'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "حقيقة القومية العربية" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ بطاقة معرفية، ٦ نقاط نقدية، تتبع العادات، اختبار ذاتي.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم للتنقل. Escape لإغلاق اللوحات.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"The Truth About Arab Nationalism" by Sheikh al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages, 3 themes, 20 knowledge cards, 6 critique points, habit tracker, quiz.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys to navigate. Escape to close panels.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"La Verite sur le Nationalisme Arabe" par Sheikh al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 cartes, 6 points critiques, suivi habitudes, quiz.'},
      {title:'⌨️ Raccourcis',body:'Fleches pour naviguer. Echap pour fermer les panneaux.'},
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}
