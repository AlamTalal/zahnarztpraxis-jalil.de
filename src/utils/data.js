import { Caries, Hygiene, Implant, Veneers, Dentures, Prosthesis, ToothRemoval, ChildrenCare } from '@/svg';


export const address = ['Großer Wall 6', '33378 Rheda-Wiedenbrück'];

export const contacts = ['info@zahnarztpraxis-jalil.de', '05242 44006', '05242 44007'];

export const galleryImages = ['/assets/img/gallery/G1.jpg', 
                              '/assets/img/gallery/G2.jpg', 
                              '/assets/img/gallery/G3.jpg', 
                              '/assets/img/gallery/G4.jpg', 
                              '/assets/img/gallery/G5.jpg', 
                              '/assets/img/gallery/G6.jpg', 
                              '/assets/img/gallery/G7.jpg'];

export const socials = [
  '#', // instagram
  '#', // facebook
  '#', // tiktok
]

export const heroSlides = [
  {id: 0, image: '/assets/img/hero/H1.jpg', caption: 'Text from slide number 1 Fuck u Nour'},
  {id: 1, image: '/assets/img/hero/H2.jpg', caption: ''},
  {id: 2, image: '/assets/img/hero/H3.jpg', caption: 'Text from slide number 3 Fuck u Nour'},
];

export const treatments = [
  {
    id: 0,
    title: 'Prophylaxe',
    content: 'Unser Konzept zur Förderung lebenslanger Zahngesundheit beruht auf präventiven Maßnahmen. Ihre tägliche häusliche Zahnpflege wird durch unsere Vorsorgeuntersuchungen unterstützt.\nWir legen insbesondere Wert auf Ihre individuelle Mundhygiene und beraten Sie gerne dahingehend. Des Weiteren legen wir Ihnen unsere professionelle Zahnreinigung ans Herz, damit wir uns gemeinsam wirksam gegen Karies und Parodontitis einsetzen.',
    media: Hygiene,
    sizes: [100, 50],
  }, {
    id: 1,
    title: 'Endodontologie / Zahnerhalt',
    content: 'Der Erhalt Ihrer Zähne steht selbstverständlich im Mittelpunkt unserer Praxis.\nUnser Ziel ist es, Ihre Zähne so lange wie möglich in einem guten Zustand zu bewahren. Somit sind wir täglich von schonenden und minimalinvasiven Therapien überzeugt.\nFür den Fall größerer Schäden an einem Ihrer Zähne, setzen wir auf eine Wurzelkanalbehandlung, welche die letzte Möglichkeit ist, um Ihren eigenen Zahn zu erhalten. Mit Hilfe moderner Instrumente und Geräte, können auch komplizierte Wurzelkanäle erfolgreich behandelt werden.',
    media: Caries,
    sizes: [100, 50],
  }, {
    id: 2,
    title: 'Zahnersatz',
    content: 'Unter Zahnersatz (ZE) versteht man das Ersetzen fehlender Zähne durch zahntechnisch hergestellte Werkstücke. Hierbei unterscheidet man "festsitzenden" von "herausnehmbaren" Zahnersatz. Teilweise wird auch der Ersatz verloren gegangener Zahnsubstanz durch Kronen oder Teilkronen als Zahnersatz bezeichnet.',
    media: Dentures,
    sizes: [100, 50],
  }, {
    id: 3,
    title: 'Implantate',
    content: 'Zahnimplantate sind künstliche Wurzeln, die nach dem Verlust von Zähnen in den Kieferknochen eingesetzt werden können. Diese Behandlungs-Methode wird seit ca. 37 Jahren von Zahnärzten in der Praxis angewandt.\nDer überwiegende Teil der Implantate besteht heutzutage aus Reintitan mit modifizierten Oberflächen, welche die Einheilung (Osseointegration) in den Kieferknochen verbessern.\nDie Implantate können dann nach einer Einheilphase mit Kronen, Brücken oder Prothesen versorgt werden.',
    media: Implant,
    sizes: [100, 50],
  }, {
    id: 4,
    title: 'Funktion und CMD',
    content: 'Mittels spezieller Funktionsdiagnostik und Schienentherapien behandeln wir gezielt Probleme im Bereich des Kiefergelenks und der Muskulatur im Kieferbereich. Bei komplexeren Fällen, kooperieren wir eng mit Physiotherapeuten und Orthopäden, um eine umfassende Behandlung zu gewährleisten und eventuelle Symptome zu lindern.',
    media: Prosthesis,
    sizes: [100, 50],
  }, {
    id: 5,
    title: 'Kinderzahnheilkunde',
    content: 'Auch bei den Kleinsten legen wir Wert auf eine frühzeitige Prävention, indem wir Ihren Kindern spielerisch erläutern, was es bedeutet, eine gesunde Mundhygiene in den Alltag zu integrieren.\nSomit haben gelmäßige Zahnarztbesuche, zahngesunde Ernährung und Fluoridbehandlungen höchste Priorität, um die Zahngesundheit Ihrer Kinder zu fördern.',
    media: ChildrenCare,
    sizes: [100, 50],
  }, {
    id: 6,
    title: 'Parodontologie',
    content: 'Selbstverständlich liegt unser Fokus nicht nur auf der Behandlung der Zähne, sondern auch in der Paradontologie. Ein gesundes Zahnfleisch und ein intakter Zahnhalteapparat bilden nicht nur die Grundlage für den langfristigen Erhalt Ihrer Zähne, sondern tragen auch wesentlich zu Ihrer allgemeinen Gesundheit bei.',
    media: ToothRemoval,
    sizes: [100, 50],
  }, {
    id: 7,
    title: 'Asthetik und Veneer',
    content: 'Durch den Einsatz moderner und schonender Techniken haben wir die Möglichkeit, Fehlstellungen, Anomalien und Verfärbungen nach Ihren Wünschen zu korrigieren. Dabei ist es uns besonders wichtig, die natürliche und individuelle Ästhetik Ihrer Zähne zu bewahren.',
    media: Veneers,
    sizes: [100, 50],
  }
]

export const staff = [
  {
    id: 0,
    name: 'Dr. Nour A.Jalil',
    position: 'Zahnarzt',
    image: '/assets/img/staff/S01.jpg',
  }, {
    id: 1,
    name: 'Dr. Horst Langhanke',
    position: 'Zahnarzt',
    image: '/assets/img/staff/S10.jpg',
  }, {
    id: 2,
    name: 'Claudia Reball',
    position: 'Praxismanagerin',
    image: '/assets/img/staff/S06.jpg',
  }, {
    id: 3,
    name: 'Gabriele krane',
    position: 'Hauptassistentin-ZFA',
    image: '/assets/img/staff/S20.jpg',
  }, {
    id: 4,
    name: 'Veronika Schwab',
    position: 'Prophylaxeassistetin-ZMP',
    image: '/assets/img/staff/S19.jpg',
  }, {
    id: 5,
    name: 'Nadine Lutz',
    position: 'Prophylaxeassistetin-ZMP',
    image: '/assets/img/staff/S18.jpg',
  }, {
    id: 6,
    name: 'Karina Regehr',
    position: 'Zahmedizinische Fachangestellte',
    image: '/assets/img/staff/S17.jpg',
  }, {
    id: 7,
    name: 'Larissa Ahrens',
    position: 'Patientenempfang / Rezeption',
    image: '/assets/img/staff/S13.webp',
  }, {
    id: 8,
    name: 'Maria Leven',
    position: 'Auszubildende (ZFA)',
    image: '/assets/img/staff/S03.jpg',
  }, {
    id: 9,
    name: 'Cengül Ibraimova',
    position: 'Auszubildende (ZFA)',
    image: '/assets/img/staff/S16.jpg',
  }, {
    id: 10,
    name: 'Roberta Badoi',
    position: 'Auszubildende (ZFA)',
    image: '/assets/img/staff/S15.jpg',
  }, {
    id: 11,
    name: 'Ragheda Issa',
    position: 'Auszubildende (ZFA)',
    image: '/assets/img/staff/S04.jpg',
  }, 
];

export const welcomeSection_1 = {
  image: '/assets/img/welcome1.jpg', 
  title: 'Herzlich Wilkommen!', 
  content : [
    {text: 'Schön, dass Sie zu uns gefunden haben!', size: 'M'}, 
    {text: '', size: 'S'}, 
    {text: 'Die Zahnarztpraxis Jalil und Kollegen bietet sowohl jahrelange Erfahrung, als auch modernste Technologie, mit welcher wir das gesamte Spektrum der Zahnmedizin abdecken.', size: 'S'}, 
    {text: 'Dabei liegt es uns besonders am Herzen Ihren Besuch bei uns so angenehm wie möglich zu gestalten.', size: 'S'}, 
    {text: '', size: 'S'}, 
    {text: 'Das gesamte Praxisteam freut sich auf Ihren Besuch!', size: 'M'}, 
  ]
};

export const welcomeSection_2 = {
  image: '/assets/img/welcome2.jpg', 
  title: 'Wir suchen Verstärkung', 
  content : [
    {text: 'Liebe Patientinnen,', size: 'M'}, 
    {text: '', size: 'S'}, 
    {text: 'Mit zunehmender Patientinnenzahl wächst auch unser Team. wir suchen für die Behandlungsassistenz und für die Prophylaxeassisitenz  Unterstützung (Vollzeit oder Teilzeit).', size: 'S'}, 
    {text: 'auch ein Ausbildungsplatz steht jährlich zur Verfügung.', size: 'S'}, 
    {text: 'Bei Interesse können Sie Ihre Bewerbung einfach an ' + contacts[0] + ' schicken oder Sie kommen einfach direkt persönlich vorbei.', size: 'S'}, 
    {text: '', size: 'S'}, 
    {text: 'Wir freuen uns auf Sie!', size: 'M'}, 
  ]
};
