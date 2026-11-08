export type Locale = "en" | "vi";

const etudes = [
  {
    name: "Preludio",
    videoId: "lwtLTHrZfUw",
    description:
      "As the title suggests, a dazzling short fanfare covering all piano registers energetically sets up the grand scale of what is to come in the cycle.",
  },
  { name: "In A minor", videoId: "hbUyl9C9_Xs", description: "" },
  { name: "Paysage", videoId: "8bTl_pBfbqQ", description: "" },
  { name: "Mazeppa", videoId: "LRpkNYTMaSw", description: "" },
  { name: "Feux follets", videoId: "Ku9MaQvVl7Q", description: "" },
  { name: "Vision", videoId: "YikMH-Sj0vU", description: "" },
  { name: "Eroica", videoId: "ZU77yLjGCgM", description: "" },
  { name: "Wilde Jagd", videoId: "o_ZhOiH0awo", description: "" },
  { name: "Ricordanza", videoId: "pHgT24sjLmM", description: "" },
  { name: "In F minor", videoId: "SgD-BqNo9tY", description: "" },
  { name: "Harmonies du soir", videoId: "5_JJleHmY1c", description: "" },
  { name: "Chasse-neige", videoId: "Pb_D3fiHjNQ", description: "" },
];

export const songs = etudes.map((etude, index) => {
  const number = index + 1;
  const padded = String(number).padStart(2, "0");
  return {
    id: `etude-${number}`,
    title: `Etude No.${number} – ${etude.name}`,
    number,
    name: etude.name,
    videoId: etude.videoId,
    image: `/images/etudes/etude-${padded}.jpg`,
    description: etude.description,
  };
});

export const works = [
  {
    slug: "annees-de-pelerinage",
    title: "Franz Liszt: Années de pèlerinage – Suisse (Volume 1)",
    image: "/images/etude-1.png",
    images: ["/images/etude-3.png", "/images/etude-2.png", "/images/etude-1.png"],
    summary:
      "A musical journey through Switzerland’s stunning landscapes and inner emotions. Lưu Hồng Quang offers this classic work with a warm, heartfelt touch—making Liszt’s vision both accessible and moving.",
    tracks: [
      {
        title: "Chapelle de Guillaume Tell",
        image: "/images/etude-1.png",
        description:
          "A contemplative and spiritual work that evokes the serene atmosphere of a chapel dedicated to the legendary William Tell, setting a devotional and reflective tone.",
      },
      {
        title: "Au lac de Wallenstadt",
        image: "/images/etude-2.png",
        description:
          "A lyrical piece that paints a vivid picture of a tranquil Swiss lake. Its flowing melodies capture the calm and reflective beauty of nature.",
      },
      {
        title: "Vallée d'Obermann",
        image: "/images/etude-1.png",
        description:
          "The most introspective and dramatic movement, depicting the mysterious depths of Obermann Valley and the quest for transcendence.",
      },
    ],
  },
  {
    slug: "transcendental-etudes",
    title: "Liszt’s 12 Transcendental Studies",
    image: "/images/etude-3.png",
    images: ["/images/etude-3.png", "/images/etude-2.png", "/images/etude-1.png"],
    summary:
      "Acclaimed pianist Lưu Hồng Quang has mesmerized audiences worldwide with his technical brilliance and heartfelt expression for over two decades.",
    tracks: songs.map((song) => ({
      title: song.title,
      image: song.image,
      description: song.description,
    })),
  },
  {
    slug: "vision",
    title: "Franz Liszt: Années de pèlerinage – Suisse (Volume 1)",
    image: "/images/etude-4.png",
    images: ["/images/etude-3.png", "/images/etude-2.png", "/images/etude-4.png"],
    summary:
      "A further chapter in the pilgrimage cycle, shaped by landscape, memory, and prayer.",
    tracks: [],
  },
  {
    slug: "recital-hanoi",
    title: "Franz Liszt: Années de pèlerinage – Suisse (Volume 1)",
    image: "/images/etude-2.png",
    images: ["/images/etude-3.png", "/images/etude-2.png", "/images/etude-1.png"],
    summary: "Live recital highlights from Hanoi and beyond.",
    tracks: [],
  },
  {
    slug: "recital-sydney",
    title: "Franz Liszt: Années de pèlerinage – Suisse (Volume 1)",
    image: "/images/etude-1.png",
    images: ["/images/etude-3.png", "/images/etude-2.png", "/images/etude-1.png"],
    summary: "Sydney performances that blend Eastern and Western traditions.",
    tracks: [],
  },
  {
    slug: "recital-tokyo",
    title: "Franz Liszt: Années de pèlerinage – Suisse (Volume 1)",
    image: "/images/etude-4.png",
    images: ["/images/etude-3.png", "/images/etude-2.png", "/images/etude-4.png"],
    summary: "A Tokyo program built around Liszt’s most personal landscapes.",
    tracks: [],
  },
];

export const awardHighlights = [
  { name: "Sydney Eisteddfod", count: "3 times", image: "/images/award-sydney.png" },
  { name: "Val Tidone Competition", count: "2 times", image: "/images/award-val-tidone.svg" },
  { name: "Lev Vlassenko Competition", count: "2 times", image: "/images/award-lev.png" },
  { name: "Chopin Piano Competition", count: "2 times", image: "/images/award-chopin-1.svg" },
  { name: "Citta Di Oleggio", count: "1 time", image: "/images/award-oleggio.png" },
  { name: "Recitals Australia", count: "1 time", image: "/images/award-recitals.png" },
  { name: "Hanoi Piano Competition", count: "1 time", image: "/images/award-hanoi.png" },
  { name: "Euregio Piano Award", count: "1 time", image: "/images/award-euregio.png" },
];

export const awards = [
  { year: "2006", title: "Val Tidone International Piano Competition", place: "Italy", status: "3rd Prize" },
  { year: "2006", title: "International Chopin Piano Competition", place: "Asia (Tokyo, 4th edition)", status: "Special Prize" },
  { year: "2006", title: "Ten Outstanding National Young Faces", place: "", status: "Winner" },
  { year: "2008", title: "Val Tidone International Piano Competition", place: "Italy", status: "2nd Prize" },
  { year: "2006", title: "Recital Award – Australia", place: "", status: "1st Prize" },
  { year: "2009", title: "Chopin Competition – Sydney", place: "", status: "1st Prize" },
  { year: "2010", title: "First International Piano Competition in Hanoi, Vietnam", place: "", status: "3rd Prize" },
  { year: "2010", title: "19th-Century Piano Competition – Sydney", place: "", status: "1st Prize" },
  { year: "2010", title: "20th and 21st Century Piano Competition – Australia", place: "", status: "3rd Prize" },
  { year: "2010", title: "Russian Piano Competition – Australia", place: "", status: "3rd Prize" },
];

export const milestones = [
  {
    year: "1990 – Early Beginnings",
    body: "Born in Hanoi, Vietnam, Lưu Hồng Quang entered the world surrounded by a rich cultural heritage. Even as a child, the vibrant sounds of his homeland's music laid the foundation for a lifelong passion.",
  },
  {
    year: "1996 – Early 2000s: The Spark of Genius",
    body: "At age six, he began formal piano studies at the Vietnam National Academy of Music under Professor Trần Thu Hà, discovering how the piano could speak directly to the soul.",
  },
  {
    year: "2007 – Early 2010s: Rising to International Prominence",
    body: "Earning a full scholarship to study in Australia, Quang refined his technique and won prestigious competitions, captivating audiences with his blend of technical mastery and heartfelt expression.",
  },
  {
    year: "2011: A Pivotal Journey to Japan",
    body: "In 2011, he ventured to Japan to study with the legendary Đặng Thái Sơn. This transformative experience deepened his technical skills and enriched his musical interpretation.",
  },
  {
    year: "2013: A Landmark Performance",
    body: "A celebrated duet with Đặng Thái Sơn at the renowned Hanoi Opera House in 2013 marked a turning point, uniting generations and traditions.",
  },
  {
    year: "Present: Inspiring the Future",
    body: "Today, Lưu Hồng Quang continues to mesmerize audiences worldwide while nurturing new talent as a teacher—bridging Eastern heritage with Western refinement in every note.",
  },
];

export const collaborations = [
  { year: "2009", orchestra: "Vietnam National Symphony Orchestra", conductor: "Hidemi Suzuki", event: "Performance at Hanoi Opera House" },
  { year: "2010", orchestra: "Vietnam National Symphony Orchestra", conductor: "Honna Tetsuji", event: "200th birthday of Chopin" },
  { year: "2017", orchestra: "Vietnam National Symphony Orchestra", conductor: "Mark Kadin", event: "Pyotr Ilych Tchaikovsky" },
  { year: "2019", orchestra: "Vietnam National Symphony Orchestra", conductor: "Honna Tetsuji", event: "Brahms Piano Concertos" },
  { year: "2012", orchestra: "Vietnam National Academy of Music Orchestra", conductor: "Christian Schumann", event: "Tokyo Opera City Concert Hall" },
];

export const testimonials = [
  {
    quote:
      "His level of pianistic professionalism is high and I am impressed by his degree of artistry, Mr Luu demonstrate great musical creativity and control on stage, and possesses an enticing stage presence",
    name: "Pianist Đặng Thái Sơn",
    role: "",
    image: "/images/portrait-dang.png",
  },
  {
    quote: "Quang is an outstanding young musician and he has great talent as a performer",
    name: "Natasha Vlassenko",
    role: "Senior Lecturer, Queensland Conservatorium",
    image: "/images/portrait-natasha.png",
  },
  {
    quote: "Quang displays a level of excellence way beyond his years",
    name: "Paul Carasco",
    role: "Co-founder, Master Performers",
    image: "/images/portrait-paul.png",
  },
  {
    quote:
      "Quang is a very talented and hard-working student, not only does he have exceptional skills and application to the piano but he is also an intelligent and honest student whose good character should be commended",
    name: "Prof. Kyunghee Lee",
    role: "Australian Conservatorium of Music",
    image: "/images/portrait-kyunghee.png",
  },
  {
    quote:
      "His performance was so incredibly successful that the audience could not stop applauding. With this superb performance, he has established himself as a first rate pianist",
    name: "Prof. Suguru Agata",
    role: "Conductor",
    image: "/images/portrait-generic.png",
  },
  {
    quote: "Gifted pianist, finest musician, warm person, great artist and it’s only the beginning",
    name: "Carlos Cuesta Lopez",
    role: "Conductor",
    image: "/images/portrait-generic.png",
  },
  {
    quote: "The gentleman has a unique talent as a pianist",
    name: "Ian Hanger",
    role: "Chairman, Lev Vlassenko Australia",
    image: "/images/portrait-generic.png",
  },
];

export const liveEvents = [
  {
    title: "Evolution - Maesto Piano Series No.3",
    date: "October 10th, 2025",
    time: "08:00 PM",
    place: "New York, NY",
    image: "/images/etude-3.png",
    upcoming: true,
  },
  {
    title: "LUNA ETÉREA",
    date: "October 10th, 2025",
    time: "08:00 PM",
    place: "VCCA, B1–R3, Vincom Mega Mall Royal City, 72A Nguyễn Trãi, Thanh Xuân, Hà Nội",
    image: "/images/etude-3.png",
    upcoming: true,
  },
  {
    title: "Back In Bloom",
    date: "October 10th, 2025",
    time: "08:00 PM",
    place: "New York, NY",
    image: "/images/etude-3.png",
    upcoming: true,
  },
  {
    title: "Evolution - Maesto Piano Series No.3",
    date: "October 10th, 2025",
    time: "08:00 PM",
    place: "New York, NY",
    image: "/images/etude-3.png",
    upcoming: false,
  },
];

export const masterclasses = [
  {
    title: "Master Class",
    date: "October 24th, 2024",
    time: "08:00 PM",
    place: "Văn phòng khoa Piano - Giao hưởng, tầng 3 - nhà D, Số 7 phố Hai Bà Trưng",
    image: "/images/masterclass.png",
  },
  {
    title: "Piano Workshop | Liszt’s 12 Transcendental Studies",
    date: "October 24th, 2024",
    time: "08:00 PM",
    place: "Phòng 1B Nhà A1, Học viện Âm nhạc Quốc gia Việt Nam, 77 Hào Nam.",
    image: "/images/workshop.png",
  },
];

export const articles = [
  {
    slug: "am-vang-bat-diet",
    title: "Âm vang bất diệt khi âm nhạc kể chuyện lịch sử",
    date: "15/12/2022",
    image: "/images/news-hero.png",
    thumb: "/images/etude-1.png",
    body: [
      "“Hà Nội – Điện Biên Phủ trên không” là một ký ức không thể quên trong hoài niệm của những người ở lại. Nó lưu lại cho thế hệ sau về một trang sử vàng của dân tộc, qua đó nhắc nhở thế hệ trẻ cần nhớ rằng: hòa bình và độc lập có được ngày hôm nay đã được đánh đổi bằng rất nhiều xương máu của những thế hệ cha anh đi trước.",
      "Với tâm huyết kết nối sợi dây lịch sử ấy, nghệ sĩ Lưu Hồng Quang sẽ truyền tải đến công chúng yêu nhạc, đặc biệt là thế hệ trẻ Việt Nam thông điệp lịch sử về lòng tự hào dân tộc qua 12 bản Transcendental studies của Franz Liszt.",
    ],
    bodyImage: "/images/news-body.png",
    more: [
      "Nhắc đến Franz Liszt - nhà soạn nhạc nổi tiếng người Hungary, người ta biết đến ông như một nghệ sĩ tài hoa hiếm có. Những tác phẩm của ông nói chung và các bản etude nói riêng thì ngoài tính học thuật cao, chúng luôn chứa đựng thách thức về khả năng thị tấu và trình diễn.",
      "Nghệ sĩ Lưu Hồng Quang sẽ hóa thân vào Liszt để lướt trên hằng hà sa số những nốt nhạc với tốc độ của một cơn cuồng phong kì vĩ. Người nghe sẽ được tiếng đàn của nghệ sĩ Lưu Hồng Quang dẫn dắt qua những cung bậc cảm xúc khác nhau.",
    ],
  },
  {
    slug: "liszt-in-hanoi",
    title: "Âm vang bất diệt khi âm nhạc kể chuyện lịch sử",
    date: "15/12/2022",
    image: "/images/etude-1.png",
    thumb: "/images/etude-1.png",
    body: [],
    more: [],
  },
  {
    slug: "behind-the-etudes",
    title: "Âm vang bất diệt khi âm nhạc kể chuyện lịch sử",
    date: "15/12/2022",
    image: "/images/etude-2.png",
    thumb: "/images/etude-2.png",
    body: [],
    more: [],
  },
  {
    slug: "masterclass-notes",
    title: "Âm vang bất diệt khi âm nhạc kể chuyện lịch sử",
    date: "15/12/2022",
    image: "/images/etude-4.png",
    thumb: "/images/etude-4.png",
    body: [],
    more: [],
  },
];

export const copy = {
  en: {
    intro: "Intro",
    about: "About",
    works: "Works",
    blog: "Blog",
    news: "News",
    events: "Events",
    contact: "Contact",
    meet: "Meet the artist",
    homeTitle: "Liszt's 12",
    homeTitle2: "Transcendental Etudes",
    awards: "Awards",
    biography: "Biography",
    testimonials: "Testimonials",
    collaborations: "Collaborations",
    liveEvents: "Live Events",
    masterclasses: "Masterclasses",
    upcoming: "Upcoming",
    past: "Past Event",
    viewDetails: "View details",
    backToWorks: "Back to Works",
    backToNews: "Back to News",
    recommended: "Recommended for you",
    send: "Send",
    follow: "Follow Me On",
    name: "Name",
    email: "Email",
    phone: "Phone Number",
    message: "Your Message (optional)",
    namePh: "Enter your name",
    emailPh: "Enter your email",
    phonePh: "Enter your phone number",
    messagePh: "Enter your message",
    sent: "Thank you. Your message is ready to send.",
    year: "Year",
    orchestra: "Orchestra / Ensemble",
    conductor: "Conductor",
    event: "Event",
    status: "Status",
    skipVideo: "Skip video",
    upcomingEvent: "Upcoming Event",
    closePlayer: "Close",
    aboutLead:
      "Lưu Hồng Quang has mesmerized audiences worldwide with his technical brilliance and heartfelt expression for over two decades. Known for seamlessly blending Eastern and Western musical traditions, he has performed with renowned orchestras in Vietnam, Australia, and beyond. With numerous accolades to his name, Lưu Hồng Quang continues to inspire music lovers and redefine the classical music experience.",
  },
  vi: {
    intro: "Trang chủ",
    about: "Giới thiệu",
    works: "Tác phẩm",
    blog: "Blog",
    news: "Tin tức",
    events: "Sự kiện",
    contact: "Liên hệ",
    meet: "Gặp nghệ sĩ",
    homeTitle: "12 Etude Siêu Việt",
    homeTitle2: "của Liszt",
    awards: "Giải thưởng",
    biography: "Tiểu sử",
    testimonials: "Nhận xét",
    collaborations: "Hợp tác",
    liveEvents: "Biểu diễn",
    masterclasses: "Masterclass",
    upcoming: "Sắp diễn ra",
    past: "Đã diễn ra",
    viewDetails: "Xem chi tiết",
    backToWorks: "Về tác phẩm",
    backToNews: "Về tin tức",
    recommended: "Gợi ý cho bạn",
    send: "Gửi",
    follow: "Theo dõi",
    name: "Họ tên",
    email: "Email",
    phone: "Số điện thoại",
    message: "Lời nhắn (không bắt buộc)",
    namePh: "Nhập họ tên",
    emailPh: "Nhập email",
    phonePh: "Nhập số điện thoại",
    messagePh: "Nhập lời nhắn",
    sent: "Cảm ơn bạn. Tin nhắn đã sẵn sàng để gửi.",
    year: "Năm",
    orchestra: "Dàn nhạc",
    conductor: "Nhạc trưởng",
    event: "Sự kiện",
    status: "Kết quả",
    skipVideo: "Bỏ qua video",
    upcomingEvent: "Sự kiện sắp tới",
    closePlayer: "Đóng",
    aboutLead:
      "Lưu Hồng Quang đã chinh phục khán giả khắp thế giới bằng kỹ thuật điêu luyện và sự biểu cảm chân thành trong hơn hai thập kỷ. Ông kết hợp truyền thống Đông – Tây, biểu diễn cùng nhiều dàn nhạc tại Việt Nam, Úc và nhiều nơi khác.",
  },
} as const;

export const menuItems = [
  { href: "/", key: "intro" as const },
  { href: "/about", key: "about" as const },
  { href: "/works", key: "works" as const },
  { href: "/blog", key: "blog" as const },
  { href: "/events", key: "events" as const },
  { href: "/contact", key: "contact" as const },
];

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com", icon: "/images/social-facebook.svg" },
  { name: "Instagram", href: "https://www.instagram.com", icon: "/images/social-instagram.svg" },
  { name: "YouTube", href: "https://www.youtube.com", icon: "/images/social-youtube.svg" },
  { name: "Spotify", href: "https://open.spotify.com", icon: "/images/social-spotify.svg" },
];
