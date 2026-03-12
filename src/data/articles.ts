import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

export interface Article {
  slug: string;
  type: "work" | "blog";
  letter: string;
  category: string;
  titleEn: string;
  titleZh: string;
  descEn: string;
  descZh: string;
  dateEn: string;
  dateZh: string;
  creditsEn?: string;
  creditsZh?: string;
  image?: string;
  externalLink?: string;
  // ============================================================
  // 📝 ARTICLE CONTENT — Edit here to change article body text
  // Each paragraph is one array element. Supports EN and ZH.
  // ============================================================
  contentEn: string[];
  contentZh: string[];
}

// ============================================================
// 🔧 WORK PROJECTS — Edit titles, descriptions, and content below
// ============================================================
export const workArticles: Article[] = [
  {
    slug: "freshman",
    type: "work",
    letter: "F",
    category: "Visual Investigation",
    titleEn: "Freshman",
    titleZh: "新人",
    descEn:
      "An investigative documentary exploring grassroots journalism in the digital age. Visual storytelling meets data-driven research.",
    descZh: "一部探索数字时代草根新闻业的调查纪录片。视觉叙事与数据驱动研究的结合。",
    dateEn: "January 2026",
    dateZh: "2026年1月",
    creditsEn: "Directed & Edited — Solo",
    creditsZh: "导演 & 剪辑 — 独立完成",
    image: work1,
    contentEn: [
      "Freshman is an investigative documentary that traces the evolution of grassroots journalism in the digital era. Through interviews with independent reporters, data analysts, and citizen journalists across three continents, the film examines how open-source tools and social media platforms have fundamentally altered the landscape of news gathering.",
      "The project began as a personal inquiry into the disconnect between institutional media narratives and on-the-ground realities. Over eighteen months of production, it expanded into a broader meditation on truth, verification, and the democratization of information.",
      "Premiered at the Shanghai International Documentary Festival, the film has since been screened at twelve festivals worldwide and was selected for the IDFA Forum's emerging voices program.",
    ],
    contentZh: [
      "《新人》是一部追溯数字时代草根新闻业演变的调查纪录片。通过对三大洲独立记者、数据分析师和公民记者的采访，影片审视了开源工具和社交媒体平台如何从根本上改变了新闻采集的格局。",
      "该项目最初源于对机构媒体叙事与实地现实之间脱节的个人探究。在十八个月的制作过程中，它扩展为对真相、核实和信息民主化的更广泛思考。",
      "影片在上海国际纪录片电影节首映，此后已在全球十二个电影节放映，并入选 IDFA 论坛新声音计划。",
    ],
  },
  {
    slug: "savor",
    type: "work",
    letter: "S",
    category: "OSINT",
    titleEn: "Savor",
    titleZh: "品味",
    descEn:
      "Open-source intelligence research project tracking supply chain transparency across Southeast Asian markets.",
    descZh: "追踪东南亚市场供应链透明度的开源情报研究项目。",
    dateEn: "March 2026",
    dateZh: "2026年3月",
    creditsEn: "Research Lead — w/ Global Voices",
    creditsZh: "研究负责人 — 与 Global Voices 合作",
    image: work2,
    contentEn: [
      "Savor is a long-form open-source intelligence project investigating supply chain opacity in Southeast Asian food markets. Using satellite imagery analysis, shipping data cross-referencing, and social media monitoring, the research mapped previously undocumented networks of food distribution across five countries.",
      "The methodology combined traditional investigative techniques with cutting-edge OSINT tools, including geolocation verification, corporate registry analysis, and automated data scraping from public trade databases.",
      "Published in collaboration with Global Voices, the findings contributed to policy discussions at the ASEAN Economic Forum and were cited in three subsequent academic papers on supply chain transparency.",
    ],
    contentZh: [
      "《品味》是一个长篇开源情报项目，调查东南亚食品市场的供应链不透明性。通过卫星图像分析、航运数据交叉引用和社交媒体监控，该研究绘制了五个国家此前未记录的食品分销网络。",
      "该方法论将传统调查技术与前沿 OSINT 工具相结合，包括地理定位验证、企业注册分析和从公共贸易数据库自动抓取数据。",
      "与 Global Voices 合作发布的调查结果为东盟经济论坛的政策讨论做出了贡献，并被三篇后续供应链透明度学术论文引用。",
    ],
  },
  {
    slug: "zoox",
    type: "work",
    letter: "Z",
    category: "International Communication",
    titleEn: "Zoox",
    titleZh: "驭象",
    descEn:
      "Cross-cultural brand communication strategy for an autonomous vehicle startup entering the Chinese market.",
    descZh: "为进入中国市场的自动驾驶初创企业制定跨文化品牌传播策略。",
    dateEn: "November 2025",
    dateZh: "2025年11月",
    creditsEn: "Strategist — w/ Monks",
    creditsZh: "策略师 — 与 Monks 合作",
    image: work3,
    contentEn: [
      "Zoox was a cross-cultural brand communication project developed for an autonomous vehicle startup seeking to establish presence in the Chinese market. The challenge was to translate complex technological concepts into culturally resonant narratives.",
      "Working with Monks, the strategy encompassed brand naming, visual identity adaptation, key opinion leader partnerships, and a phased digital campaign across WeChat, Weibo, and Douyin. The approach prioritized cultural authenticity over direct translation.",
      "The campaign achieved significant engagement metrics and established a framework for technology brands navigating the nuances of Chinese digital ecosystems.",
    ],
    contentZh: [
      "《驭象》是为一家寻求进入中国市场的自动驾驶初创企业开发的跨文化品牌传播项目。挑战在于将复杂的技术概念转化为具有文化共鸣的叙事。",
      "与 Monks 合作，策略涵盖品牌命名、视觉识别适配、关键意见领袖合作以及跨微信、微博和抖音的分阶段数字营销活动。该方法优先考虑文化真实性而非直接翻译。",
      "该活动取得了显著的互动指标，并为科技品牌驾驭中国数字生态系统的细微差异建立了框架。",
    ],
  },
  {
    slug: "balmain-beauty",
    type: "work",
    letter: "B",
    category: "Content & Branding",
    titleEn: "Balmain Beauty",
    titleZh: "巴尔曼美妆",
    descEn:
      "Editorial content series for luxury beauty brand launch. Photography direction, copywriting, and digital campaign.",
    descZh: "奢侈美妆品牌上市的编辑内容系列。摄影指导、文案撰写和数字营销。",
    dateEn: "September 2025",
    dateZh: "2025年9月",
    creditsEn: "Editor & Content Director",
    creditsZh: "编辑 & 内容总监",
    image: work4,
    contentEn: [
      "Balmain Beauty was a comprehensive editorial content project for the luxury brand's beauty line launch in the Asia-Pacific market. The work spanned photography direction, copywriting, and the conception of a multi-platform digital campaign.",
      "The editorial approach drew from high fashion photography traditions while incorporating elements of documentary realism — a deliberate tension that reflected the brand's positioning between heritage luxury and contemporary accessibility.",
      "The campaign launched across six markets simultaneously, with localized content variations that maintained brand coherence while respecting regional aesthetic sensibilities.",
    ],
    contentZh: [
      "《巴尔曼美妆》是为该奢侈品牌美妆线在亚太市场上市而制作的综合编辑内容项目。工作涵盖摄影指导、文案撰写以及多平台数字营销活动的构思。",
      "编辑方法借鉴了高级时装摄影传统，同时融入了纪实现实主义元素——这种刻意的张力反映了品牌在传统奢华与当代可及性之间的定位。",
      "该活动同时在六个市场推出，本地化内容变体在保持品牌一致性的同时尊重了区域审美偏好。",
    ],
  },
  {
    slug: "the-blimp",
    type: "work",
    letter: "T",
    category: "Documentary",
    titleEn: "The Blimp",
    titleZh: "飞艇",
    descEn:
      "Short documentary on the forgotten history of Shanghai's airship era. Premiered at Shanghai International Film Festival.",
    descZh: "关于上海飞艇时代被遗忘历史的短纪录片。在上海国际电影节首映。",
    dateEn: "June 2025",
    dateZh: "2025年6月",
    creditsEn: "Director & Writer",
    creditsZh: "导演 & 编剧",
    image: work5,
    contentEn: [
      "The Blimp is a short documentary that unearths the forgotten chapter of Shanghai's brief airship era in the 1930s. Through archival footage, historical photographs, and interviews with aviation historians, the film reconstructs a period when dirigibles briefly dotted the Shanghai skyline.",
      "The narrative weaves together personal stories of the engineers and pilots involved with broader themes of technological ambition, colonial enterprise, and the fragility of progress in pre-war China.",
      "The film premiered at the Shanghai International Film Festival and was subsequently acquired for broadcast by CGTN Documentary Channel.",
    ],
    contentZh: [
      "《飞艇》是一部短纪录片，挖掘了上海1930年代短暂飞艇时代的被遗忘篇章。通过档案影像、历史照片和对航空历史学家的采访，影片重建了飞艇一度点缀上海天际线的时期。",
      "叙事将工程师和飞行员的个人故事与技术抱负、殖民事业以及战前中国进步脆弱性的更广泛主题交织在一起。",
      "影片在上海国际电影节首映，随后被 CGTN 纪录频道购买播出。",
    ],
  },
  {
    slug: "apple-music-replay",
    type: "work",
    letter: "A",
    category: "Digital Experience",
    titleEn: "Apple Music Replay",
    titleZh: "Apple Music 回忆",
    descEn: "Interactive data visualization of personal listening habits. Generative design meets music analytics.",
    descZh: "个人聆听习惯的交互式数据可视化。生成设计与音乐分析的结合。",
    dateEn: "April 2025",
    dateZh: "2025年4月",
    creditsEn: "Design & Development — Solo",
    creditsZh: "设计 & 开发 — 独立完成",
    image: work1,
    contentEn: [
      "Apple Music Replay is an interactive data visualization project that transforms personal listening data into generative visual compositions. Each listener's musical habits produce a unique visual fingerprint — a living artwork that evolves with their taste.",
      "The technical implementation combined D3.js data visualization with WebGL-powered generative graphics, creating real-time visual responses to musical attributes like tempo, key, and energy.",
      "The project was featured on Awwwards and nominated for a CSS Design Award, demonstrating how personal data can become a medium for artistic expression.",
    ],
    contentZh: [
      "Apple Music Replay 是一个交互式数据可视化项目，将个人聆听数据转化为生成式视觉作品。每位听众的音乐习惯产生独特的视觉指纹——一件随品味演变的活的艺术品。",
      "技术实现结合了 D3.js 数据可视化和 WebGL 驱动的生成图形，创建对节奏、调性和能量等音乐属性的实时视觉响应。",
      "该项目被 Awwwards 推荐并获得 CSS Design Award 提名，展示了个人数据如何成为艺术表达的媒介。",
    ],
  },
  {
    slug: "beyond-the-limits",
    type: "work",
    letter: "B",
    category: "Visual Research",
    titleEn: "Beyond the Limits",
    titleZh: "超越极限",
    descEn: "A visual research project on the boundaries of AI-generated imagery in journalistic contexts.",
    descZh: "关于人工智能生成图像在新闻语境中边界的视觉研究项目。",
    dateEn: "February 2025",
    dateZh: "2025年2月",
    creditsEn: "Researcher — w/ Reuters Institute",
    creditsZh: "研究员 — 与路透社研究所合作",
    image: work2,
    contentEn: [
      "Beyond the Limits is a visual research project conducted in collaboration with the Reuters Institute, examining the ethical and practical boundaries of AI-generated imagery in journalistic contexts.",
      "The research analyzed over 500 cases where AI-generated or AI-manipulated images appeared in news contexts, developing a taxonomy of manipulation types and proposing verification frameworks for newsrooms.",
      "The findings were published as a Reuters Institute report and presented at the Global Editors Network summit, contributing to ongoing industry discussions about authenticity in visual journalism.",
    ],
    contentZh: [
      "《超越极限》是与路透社研究所合作进行的视觉研究项目，审视人工智能生成图像在新闻语境中的伦理和实际边界。",
      "该研究分析了500多个人工智能生成或操纵图像出现在新闻语境中的案例，建立了操纵类型分类法并为新闻编辑室提出了验证框架。",
      "调查结果以路透社研究所报告形式发布，并在全球编辑网络峰会上展示，为视觉新闻真实性的持续行业讨论做出了贡献。",
    ],
  },
  {
    slug: "elektra-virtual-museum",
    type: "work",
    letter: "E",
    category: "Virtual Exhibition",
    titleEn: "Elektra Virtual Museum",
    titleZh: "伊莱克特拉虚拟博物馆",
    descEn: "Curation and editorial design for a virtual museum exploring electronic music history and visual culture.",
    descZh: "为探索电子音乐历史和视觉文化的虚拟博物馆进行策展和编辑设计。",
    dateEn: "December 2024",
    dateZh: "2024年12月",
    creditsEn: "Curator & Editor",
    creditsZh: "策展人 & 编辑",
    image: work3,
    contentEn: [
      "Elektra Virtual Museum is a curatorial and editorial design project for an immersive online exhibition exploring the intertwined histories of electronic music and visual culture from the 1960s to the present.",
      "The virtual space was designed as a non-linear narrative environment where visitors could explore thematic rooms dedicated to specific movements, artists, and technological breakthroughs that shaped electronic music's visual identity.",
      "The project received the Digital Culture Award from the European Commission and has been visited by over 200,000 users since launch.",
    ],
    contentZh: [
      "伊莱克特拉虚拟博物馆是一个策展和编辑设计项目，为沉浸式在线展览探索从1960年代至今电子音乐和视觉文化的交织历史。",
      "虚拟空间被设计为非线性叙事环境，访客可以探索专门展示特定运动、艺术家和塑造电子音乐视觉身份的技术突破的主题展厅。",
      "该项目获得了欧盟委员会数字文化奖，自推出以来已有超过20万用户访问。",
    ],
  },
];

// ============================================================
// 🔧 BLOG POSTS — Edit titles, descriptions, and content below
// ============================================================
export const blogArticles: Article[] = [
  {
    slug: "architecture-of-osint",
    type: "blog",
    letter: "O",
    category: "OSINT",
    titleEn: "The Architecture of Open-Source Intelligence",
    titleZh: "开源情报的架构",
    descEn: "How digital forensics and open data reshape investigative journalism in an age of information overload.",
    descZh: "数字取证和开放数据如何在信息过载时代重塑调查新闻。",
    dateEn: "March 2026",
    dateZh: "2026年3月",
    contentEn: [
      "Open-source intelligence has undergone a remarkable transformation in the past decade. What began as a niche practice among security analysts and hobbyist investigators has evolved into one of the most powerful tools in modern journalism's arsenal.",
      "The proliferation of publicly available satellite imagery, social media data, corporate registries, and government databases has created an unprecedented landscape for investigative work. Tools like Google Earth, Sentinel Hub, and various social media analysis platforms have democratized access to information that was once the exclusive domain of intelligence agencies.",
      "Yet this democratization brings its own challenges. The sheer volume of available data creates noise that can overwhelm even experienced analysts. The key skill is no longer access to information — it's the ability to filter, cross-reference, and verify across multiple sources.",
      "The methodology of OSINT investigation follows a structured approach: identify the question, map available data sources, collect and preserve evidence, analyze patterns, and verify findings through independent corroboration. Each step requires both technical proficiency and critical thinking.",
      "As we look ahead, the integration of AI tools into OSINT workflows promises to accelerate analysis while raising important questions about automation bias and the role of human judgment in investigative work.",
    ],
    contentZh: [
      "《纽约时报》在2月底发布了一篇AI测试文章，对市面上10多款主流的AI检测工具识别AI生成图像和音视频的能力进行了测试。文章指出，尽管AI进步神速，但目前你还不能指望依靠AI检测工具来判断图像的真伪。",
      "这一结论与我们去年年底的观察基本一致：尽管学术界提出了许多检测方法，也不断有新论文发表，但在现实应用中，没有任何一款工具是完美的。",
      "一些工具的检测结果相对准确，并具备对多模态内容（图像、视频、音频）的识别能力，例如Gemini Pro和AI or Not。Sensity和Hive Detect的表现也算得上差强人意。但一些主流商业大模型，例如Claude和ChatGPT，在判断图像真伪方面的表现反而未达预期。",
      "这其中最令人费解的是Claude的表现——考虑到这是一款如此强调伦理的模型。但创造它的人好像完全没有考虑要让模型分辨得清真假这件事。我知道这款模型在代码方面的能力表现出色，但AI的表现再次证明，模型的能力有不同的维度。在为数不多的8类真假图片测试中，Claude仅通过了“真实拍摄的图片（非AI生成）”这一项，其余的内容，不是判断错误，就表示无法检测。",
      "Claude在1月更新了它的constitution，强调要保持诚实并造福用户。我好奇，他们是否会将AI的核假能力作为指标纳入“诚实”的范畴。",
    ],
  },
  {
    slug: "cinematic-typography",
    type: "blog",
    letter: "V",
    category: "Visual Culture",
    titleEn: "Notes on Cinematic Typography",
    titleZh: "关于电影排版的笔记",
    descEn:
      "Exploring the intersection of film title design, editorial layout, and contemporary visual identity systems.",
    descZh: "探索电影片名设计、编辑版式与当代视觉识别系统的交汇点。",
    dateEn: "February 2026",
    dateZh: "2026年2月",
    contentEn: [
      "The title sequence exists in a liminal space — neither fully part of the film nor entirely separate from it. It is a threshold, a moment of anticipation where typography becomes cinema and letterforms take on the weight of narrative.",
      "From Saul Bass's revolutionary work on Vertigo and Anatomy of a Murder to the digital experimentation of contemporary designers, film typography has served as a laboratory for pushing the boundaries of what letters can do.",
      "The best title sequences understand that typography is not merely informational — it is atmospheric. The choice of typeface, its animation, its relationship to the frame, all contribute to the viewer's emotional preparation for the story ahead.",
      "In the age of streaming, where audiences routinely skip intros, the art of the title sequence faces new challenges. Yet this constraint has paradoxically inspired some of the most innovative work in the field, as designers seek to create sequences too compelling to skip.",
    ],
    contentZh: [
      "片头序列存在于一个阈限空间——既不完全属于电影的一部分，也不完全独立于电影之外。它是一个门槛，一个期待的时刻，排版在这里变成电影，字形承载了叙事的重量。",
      "从索尔·巴斯在《迷魂记》和《桃色案件》上的革命性作品，到当代设计师的数字实验，电影排版一直是推动字母表达边界的实验室。",
      "最好的片头序列理解排版不仅仅是信息性的——它是氛围性的。字体的选择、动画、与画面的关系，都有助于观众对即将到来的故事的情感准备。",
      "在流媒体时代，观众经常跳过片头，片头序列的艺术面临新的挑战。然而，这种限制矛盾地激发了该领域一些最具创新性的作品，设计师们努力创造令人无法跳过的序列。",
    ],
  },
  {
    slug: "lost-in-translation",
    type: "blog",
    letter: "L",
    category: "Language & Literature",
    titleEn: "Lost in Translation, Found in Context",
    titleZh: "迷失在翻译中，在语境中被发现",
    descEn: "On the untranslatable and the poetics of cross-cultural communication. A personal essay.",
    descZh: "关于不可翻译性和跨文化交流的诗学。一篇个人随笔。",
    dateEn: "January 2026",
    dateZh: "2026年1月",
    contentEn: [
      "There are words that refuse to cross borders. The Japanese 木漏れ日 (komorebi) — sunlight filtering through leaves — has no single English equivalent. The Portuguese saudade carries a weight of longing that 'nostalgia' only approximates. These linguistic gaps are not failures of language but revelations of cultural perception.",
      "Translation, at its best, is not a mechanical transfer of meaning but an act of creative interpretation. The translator must inhabit two worlds simultaneously, feeling the texture of each language while building bridges between them.",
      "In my own work navigating between Chinese and English, I've come to see translation less as a problem to be solved and more as a space to be explored. The gaps between languages are where the most interesting cultural insights emerge.",
      "The rise of machine translation has not diminished the need for human translators — it has clarified their essential role. AI can transfer denotation with increasing accuracy, but connotation, cultural resonance, and poetic intention remain fundamentally human domains.",
    ],
    contentZh: [
      "有些词拒绝跨越国界。日语的「木漏れ日」——阳光透过树叶洒落——在英语中没有单一的对应词。葡萄牙语的 saudade 承载着一种「怀旧」只能近似表达的渴望。这些语言缺口不是语言的失败，而是文化感知的揭示。",
      "翻译在最好的时候不是意义的机械转移，而是一种创造性解读的行为。译者必须同时栖居在两个世界，感受每种语言的质地，同时在它们之间架设桥梁。",
      "在我自己在中文和英文之间穿梭的工作中，我逐渐将翻译视为一个需要探索的空间，而非一个需要解决的问题。语言之间的缺口正是最有趣的文化洞察浮现之处。",
      "机器翻译的兴起并没有减少对人工翻译的需求——它澄清了他们的本质角色。AI 可以以越来越高的准确性转移所指意义，但内涵意义、文化共鸣和诗意意图仍然是根本性的人类领域。",
    ],
  },
  {
    slug: "data-as-narrative",
    type: "blog",
    letter: "D",
    category: "Digital Experience",
    titleEn: "Data as Narrative",
    titleZh: "数据即叙事",
    descEn:
      "When information design becomes storytelling — reflections on building visual systems for complex datasets.",
    descZh: "当信息设计变成叙事——关于为复杂数据集构建视觉系统的反思。",
    dateEn: "December 2025",
    dateZh: "2025年12月",
    contentEn: [
      "Every dataset tells a story, but not every visualization reveals it. The challenge of data narrative is not merely technical — it's editorial. What do you include? What do you leave out? Where do you direct the viewer's attention?",
      "The most compelling data visualizations share qualities with great journalism: they have a clear point of view, they respect their audience's intelligence, and they reveal something that wasn't obvious before.",
      "In my practice, I've found that the most effective approach starts not with the data but with the question. What does the audience need to understand? What decision does this information support? Only then does the appropriate visual form emerge.",
    ],
    contentZh: [
      "每个数据集都讲述一个故事，但不是每个可视化都能揭示它。数据叙事的挑战不仅仅是技术性的——它是编辑性的。你包含什么？你省略什么？你将观众的注意力引向哪里？",
      "最引人注目的数据可视化与优秀的新闻报道有共同的品质：它们有清晰的观点，尊重受众的智慧，并揭示之前不明显的东西。",
      "在我的实践中，我发现最有效的方法不是从数据开始，而是从问题开始。受众需要理解什么？这些信息支持什么决策？只有这样，适当的视觉形式才会浮现。",
    ],
  },
  {
    slug: "manufacturing-clarity",
    type: "blog",
    letter: "M",
    category: "Media & Society",
    titleEn: "Manufacturing Clarity",
    titleZh: "制造清晰",
    descEn: "A critical look at how media platforms engineer understanding — and misunderstanding — at scale.",
    descZh: "批判性审视媒体平台如何大规模地制造理解——和误解。",
    dateEn: "November 2025",
    dateZh: "2025年11月",
    contentEn: [
      "In an age of algorithmic curation, clarity itself has become a manufactured product. Social media platforms don't just distribute information — they shape how we understand it, through framing, sequencing, and the subtle architecture of attention.",
      "The paradox of modern media is that we have more access to information than ever before, yet feel less certain about what is true. This is not accidental — it is a structural feature of platforms designed to maximize engagement rather than understanding.",
      "The antidote is not more information but better frameworks for evaluating it. Media literacy, source verification, and critical thinking are no longer optional skills — they are essential tools for navigating contemporary reality.",
    ],
    contentZh: [
      "在算法策展的时代，清晰本身已成为一种制造的产品。社交媒体平台不仅分发信息——它们通过框架、排序和注意力的微妙架构来塑造我们理解信息的方式。",
      "现代媒体的悖论是，我们比以往任何时候都能获得更多信息，却对什么是真实的感到更不确定。这不是偶然的——这是旨在最大化参与度而非理解力的平台的结构性特征。",
      "解药不是更多信息，而是更好的评估框架。媒体素养、来源验证和批判性思维不再是可选技能——它们是驾驭当代现实的基本工具。",
    ],
  },
  {
    slug: "shanghai-frequencies",
    type: "blog",
    letter: "S",
    category: "Shanghai",
    titleEn: "Shanghai Frequencies",
    titleZh: "上海频率",
    descEn: "Field notes on the sonic and visual textures of a city in constant transformation.",
    descZh: "关于一座不断变化的城市的声音与视觉质地的田野笔记。",
    dateEn: "October 2025",
    dateZh: "2025年10月",
    contentEn: [
      "Shanghai speaks in frequencies. The low hum of construction that never ceases. The staccato rhythm of mahjong tiles in lane houses. The digital chime of Alipay transactions echoing through convenience stores at 3 AM.",
      "This city resists documentation even as it demands it. Every photograph is already obsolete by the time it's taken — the building behind you might be gone next month, replaced by something taller, shinier, more aligned with whatever vision is currently ascendant.",
      "To live in Shanghai is to develop a tolerance for impermanence. The city teaches you that nostalgia is a luxury and adaptation is a survival skill. What remains constant is the energy — that particular Shanghai frequency that vibrates through everything.",
    ],
    contentZh: [
      "上海用频率说话。永不停歇的建筑低鸣。弄堂里麻将牌的断奏节拍。凌晨三点便利店里支付宝交易的数字铃声回响。",
      "这座城市在要求被记录的同时又拒绝被记录。每张照片在拍摄的那一刻就已经过时——你身后的建筑下个月可能就消失了，被更高、更亮、更符合当前主流愿景的东西取代。",
      "生活在上海就是培养对无常的容忍。这座城市教你怀旧是一种奢侈，适应是一种生存技能。唯一不变的是能量——那种贯穿一切的独特上海频率。",
    ],
  },
];

// ============================================================
// 🔧 FEATURED WORK (Homepage) — Edit items below
// These reference workArticles by slug for linking
// ============================================================
export const featuredWorkSlugs = ["freshman", "savor", "beyond-the-limits", "balmain-beauty", "the-blimp"];

export function getArticleBySlug(slug: string): Article | undefined {
  return [...workArticles, ...blogArticles].find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return [...workArticles, ...blogArticles];
}
