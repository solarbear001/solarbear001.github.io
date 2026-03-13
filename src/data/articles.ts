import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import blogCoverDefault from "@/assets/blog-cover-default.png";
import blogFeaturedInline1 from "@/assets/blog-featured-inline-1.jpg";
import blogFeaturedInline2 from "@/assets/blog-featured-inline-2.jpg";

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
  inlineImages?: string[];
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
// 🔧 BLOG POSTS — External links to thepaper.cn articles
// Sorted by publish date (newest first)
// ============================================================
export const blogArticles: Article[] = [
  {
    slug: "gemini-vs-chatgpt-video",
    type: "blog",
    letter: "G",
    category: "AIGC Lab",
    titleEn: "Lab | Gemini vs ChatGPT: Who Can Tell 12 Videos Apart?",
    titleZh: "明查·实验室｜Gemini对阵ChatGPT，谁能辨认出12段视频真假？",
    descEn: "Testing AI models' ability to distinguish real videos from AI-generated ones.",
    descZh: "测试AI模型辨别真实视频与AI生成视频的能力。",
    dateEn: "November 20, 2025",
    dateZh: "2025年11月20日",
    image: blogCoverDefault,
    creditsEn: "Fact-checkers: Zheng Shujing, Du Xinyue · Poster design: Bai Lang",
    creditsZh: "明查员 郑淑婧 杜新月 海报设计 白浪",
    inlineImages: [blogFeaturedInline1, blogFeaturedInline2],
    contentEn: [
      "**[Editor's Note]**",
      "The emergence of generative AI has brought humanity into a world where machine-generated content and human-original content are deeply intertwined.",
      "AIGC models like Sora and Midjourney have demonstrated humanity's imagination toward Artificial General Intelligence (AGI), but have also flooded public spaces with fake imagery at unprecedented speed. Meanwhile, human identification capabilities lag far behind the pace of fabrication.",
      "Against this backdrop, 'using AI to identify AI' seems a viable approach: How does artificial intelligence define the boundaries of 'reality'? Can large models assist fact-checkers and readers in verification work?",
      "To this end, 'The Paper Fact Check' launched a challenge, putting popular models like ChatGPT, Gemini, DeepSeek, and Doubao on the experimental bench.",
      "**Background**",
      "In February 2024, a Sora-generated video of 'cherry blossoms in snow' went viral online. The cherry blossom details were remarkably realistic, yet Google's Gemini 1.5 instantly identified it as AI-generated content.",
      "This case provided inspiration: perhaps we can rely on AI itself to identify AI videos.",
      "Based on this idea, we searched for large language models that can directly read video files. However, commercially available models with video parsing capabilities remain very limited. After screening, we ultimately chose Gemini 2.5 Pro and ChatGPT-5 for testing.",
      "We prepared 12 videos for each model: 3 generated by different text-to-video models, 3 containing deepfake elements, 3 using computer-generated imagery (CGI), and 3 of real footage. For each video, we asked the same question: Is this video real footage, or was it produced through post-production? Does its content match what's claimed online?",
      "Through these questions, we wanted to explore not only the models' ability to identify fakes, but also what perspectives and logic they employ when drawing the line between 'real' and 'fictional.'",
      "**Fact Check**",
      "**The Line Between Real and Fictional**",
      "In fact-checking, a 'real' video typically means it's a live recording of the physical world we inhabit. Any imagery generated through computer technology, even if it contains highly realistic elements, is essentially fictional in nature.",
      "On this point, large models and fact-checkers share the same understanding. When we fed ChatGPT a video of 'a game simulating a Russian fighter landing on an aircraft carrier,' the model told us 'this video is computer-generated imagery (CGI) or post-production composite, not real-world footage.' When identifying footage of the 'January 2024 Noto Peninsula earthquake in Ishikawa Prefecture, Japan,' the model stated, 'this video is real footage. No signs of AI generation, deepfake, or significant post-production compositing were found.'",
      "In testing, regarding the dimension of 'whether computer-generated imagery was used,' Gemini 2.5 Pro's performance was remarkable. It not only accurately identified nearly all 12 videos but could also distinguish between different computer technologies like AIGC and CGI. However, when identifying deepfake videos—such as 'American singer Taylor Swift speaking Chinese in an interview'—Gemini could detect that the video had been edited and that the audio was unusual, but couldn't explicitly identify the anomaly as originating from deepfake technology.",
      "In comparison, ChatGPT's performance was somewhat inferior, making relatively accurate judgments on only 7 of 12 videos and misidentifying all deepfake videos as 'real footage.' Additionally, ChatGPT doesn't deliberately distinguish between AI-generated and CGI content.",
      "**Thinking Like AI**",
      "Gemini isn't perfect, but it got all 12 questions right. How did it do it?",
      "Comparing Gemini and ChatGPT horizontally, one can observe that the two adopt vastly different analytical paths when facing the same video authenticity questions. If we personify the models, ChatGPT is like a lab technician, constantly citing technical terms like video resolution, frame rate, total frames, average image sharpness, noise levels, and edge density. Gemini, on the other hand, is like an experienced detective—examining visual details, cross-referencing video content with external sources, tracking technology timelines, and assessing production difficulty.",
      "For instance, when analyzing a Sora 2-generated video of 'Japanese citizens rallying for PM Sanae Takaichi,' ChatGPT concluded the video was 'post-production composited or AI-generated' based on technical dimensions like 'smooth image edges,' 'synthetic lighting characteristics,' 'overly stable inter-frame continuity,' and 'lack of real sensor noise structure.' Gemini, however, 'saw' that the video was 'entirely AI-generated' from clearly visible watermarks (and searched to understand their meaning), garbled text, and slightly unnatural human movements.",
      "ChatGPT's technical analysis approach has its advantages—it can discover abnormal details invisible to the human eye. However, ChatGPT's analytical method is difficult for ordinary people to replicate in daily life.",
      "Gemini's higher accuracy in judging video authenticity may precisely be because it abandoned blind faith in technical metrics and used more flexible, diverse judgment paths—paths that happen to coincide with how fact-checkers assess video authenticity daily.",
      "We summarized Gemini's analytical approach into 8 points for reference:",
      "1. Assess video quality: Are there issues with excessively low or inconsistent image quality?",
      "2. Observe details in key frames: Do foreground and background contradict each other? Is lighting natural? Are there common AI-generated video artifacts like garbled text?",
      "3. Examine dynamic continuity: During camera movement, does parallax between foreground and background follow physical world rules? Are there 'teleportation-style' camera movements?",
      "4. Audio detection: Does the sound harmonize with video content? Are there audio-visual sync issues or mismatches between voice and lip movements?",
      "5. Consider the real-world plausibility of events depicted. Does the technology shown exist in reality? Can objects in the video be found in real life? Does the scenario follow real-world logic?",
      "6. Reverse-search key frames, confirm when the video appeared, and check if social conditions at that time match the video's content.",
      "7. Consider production difficulty: Would it be harder or easier to achieve the same footage and camera work using AI or CGI compared to real filming?",
      "8. Search external sources to see if reports or other video materials can corroborate the tested video's content.",
      "**Afterword**",
      "On Gemini's interface, there's a conspicuous 'Show thinking' button decorated with a blue star. Admittedly, large models are black boxes—we cannot know whether their 'thinking' is true cognition or mere imitation. But even before the 'singularity moment' arrives, such 'thinking' is not without meaning.",
      "Two and a half years have passed, and models' ability to identify fakes has grown significantly, though still accompanied by hallucinations. In this sense, artificial intelligence may not just be an amplifier of information risks—it could also become a gatekeeper of information order. Whether detecting forged images, identifying generated videos, or tracing information sources, the intervention of models may give humanity more tools to combat misinformation. In the future, the real challenge may not be making machines think like humans, but letting them help humans see reality more clearly.",
    ],
    contentZh: [
      "**【编者按】**",
      "生成式人工智能的出现，将人类带入一个机器生成内容与人类原创内容深度交织的世界。",
      "以 Sora、Midjourney为代表的AIGC模型，展示了人类通向通用人工智能（AGI）的想象力，也让虚假影像以前所未有的速度涌入公共空间。而人类的识别速度却远远落后于造假的节奏。",
      "在此背景下，\u201C以AI辨AI\u201D似乎成为一种可行的思路：人工智能如何定义\u201C真实\u201D的边界？大模型能否辅助核查员和读者完成核查工作？",
      "为此，\u201C澎湃明查\u201D发起挑战，将ChatGPT、Gemini、DeepSeek、豆包等热门模型请上了实验台。",
      "**背景**",
      "2024年2月，一段由 Sora 生成的\u201C樱花雪景\u201D视频在网络上引发热议。视频中樱花飘落的细节可谓逼真，却被谷歌的智能模型 Gemini 1.5瞬间识破为AI作品。",
      "这个案例带来了启示：我们或许可以依靠AI本身来识别AI视频。",
      "基于这一思路，我们尝试搜寻能够直接读取视频文件的大语言模型。但现阶段，面向公众开放且具备视频解析能力的商业模型仍十分有限——包括国产大模型\u201C豆包\u201D、马斯克团队研发的Grok在内的众多大语言模型都暂未支持视频检测或网页端上传视频功能。经过筛选，我们最终选择了 Gemini 2.5 Pro 和 ChatGPT-5 进行测试。",
      "我们为两款模型各准备了12段视频：其中3段由不同的文生视频模型生成，3段含有深伪（deepfake）元素，3段使用计算机生成图像（CGI），另有3段为真实拍摄素材。针对每段视频，我们向模型提出相同的问题：这段视频是真实拍摄的，还是经过后期制作的？它所展示的内容是否与网传说法一致？",
      "借此提问，我们不仅想探究大模型的识假、辨假能力，更想了解，大模型在划定\u201C真实\u201D与\u201C虚构\u201D的边界时，会采用何种视角与逻辑。",
      "**明查**",
      "**真实与虚构的界线**",
      "在事实核查中，一段真实的视频，往往意味着它是对我们所处的物理世界的实景记录。而凡是经由计算机技术生成的影像，即便包含高度拟真乃至还原现实的元素，本质上仍属于虚构。",
      "在这一点上，大模型与核查员的认知是一致的。当我们将一段\u201C游戏模拟俄战机着陆航母\u201D的画面投喂给ChatGpt时，模型会告诉我们\u201C该视频为电脑生成影像（CGI）或后期合成制作的影像，不属于真实世界实景拍摄\u201D。而在识别\u201C2024年1月日本石川县能登半岛地震画面\u201D时，模型则表示，\u201C该视频属于真实拍摄。没有发现AI生成、深度伪造或重大后期合成制作的迹象。\u201D",
      "在测试中，仅就\u201C是否使用计算机生成图像\u201D这一维度而言，Gemini 2.5 pro的表现令人惊叹。它不仅几乎准确识别了全部12段视频，且对于使用了不同计算机技术，如AIGC或CGI的画面，也能进行区分。但在识别深伪视频，如\u201C美国女歌手泰勒·斯威夫特说中文接受访谈\u201D的画面时，Gemini虽能察觉到视频经过编辑，其音频部分有异样，却无法明确指出异常源自深伪技术。",
      "相较之下，ChatGPT 的表现略显逊色，仅对12段视频中的7段作出相对准确的判断，并将所有深伪视频误判为了\u201C真实拍摄的录像\u201D。此外，ChatGPT 在技术辨识上不会着意对AI生成的内容和CGI内容进行区分。",
      "**像AI一样思考**",
      "Gemini不完美，但它答对了12道题。它是怎么做到的？",
      "将Gemini与ChatGPT进行横向比较，可以观察到，二者在面对相同的视频真伪判断问题时，采用的分析路径存在巨大差异——如果赋予模型以个性，那么，ChatGPT就像是一位端坐在实验室中的检测人员，动辄提视频分辨率、帧率、总帧数、平均图像锐度、噪声水平和边缘密度等技术名词。而Gemini则像是一名富有经验的侦探，一会儿考察画面本身的细节，一会儿核对视频内容与外部资料能否交叉验证，同时留心技术的传播时间线，评估视频制作的难度。",
      "例如，在对一段由Sora 2制作\u201C日本民众声援日本首相高市早苗\u201D的文生视频进行分析时，ChatGPT根据\u201C图像边缘平滑\u201D\u201C光照和阴影分布呈\u2018合成光\u2019特征\u201D\u201C帧间连续性过于稳定\u201D\u201C画面缺乏真实传感器噪点结构\u201D等技术维度，得出了视频\u201C经过后期合成或AI生成制作\u201D的结论。而Gemini则从视频中清晰可见的水印（并搜索了解了该水印的含义）、画面上乱码的文字和人物轻微扭动的非自然细节中\u201C看\u201D出了视频\u201C完全是由AI生成的\u201D。",
      "ChatGPT的技术分析路径有其优势，能够发现人们使用肉眼难以察觉的异常细节。但ChatGPT的分析方式在日常生活中难以被普通人借鉴。",
      "而Gemini能够以更高的准确度对视频的真实性做出判断，也许恰恰是因为放弃了对技术的迷信，而使用了更为灵活、多元的判断路径，而这样的路径又与事实核查员日常判断视频真伪的思路不谋而合。",
      "我们对Gemini分析思路进行了总结，概括为以下8点，供大家参阅：",
      "1. 评估视频的质量：是否存在画面质量过低或质量参差不齐的情况？",
      "2. 观察关键帧中的细节：画面中的前景与背景是否矛盾？光影是否自然？是否存在文字乱码等常见的AI生成视频的细节？",
      "3. 考察视频的动态连续性：在镜头移动过程中，视频画面中的远景和近景的视角变化（即视差）是否符合物理世界的规律？是否存在\u201C瞬间移动\u201D式的运镜？",
      "4. 音频检测：视频中的声音与视频的内容是否和谐？是否存在音画不同步或声音与说话者口型无法对应的情况？",
      "5. 考虑视频中描述的事件在现实世界中发生的可能性。现实中是否存在视频中展示的技术？在现实生活中能否找到视频中展示的物体？视频展现的场景是否符合现实逻辑？",
      "6. 反搜视频关键帧，确认视频出现的时间，考察当时的社会状况是否与视频展示画面的内容相符。",
      "7. 考虑视频制作的难度：相较于拍摄，使用AI或CGI来表现相同的画面、运镜会更难还是更容易？",
      "8. 搜索外部资料，查看是否有报道或其它视频资料可以佐证被检测视频的内容。",
      "**后记**",
      "在与Gemini对话的界面上，有个用蓝色星标修饰的\u201C显示思考\u201D的按钮格外显眼。固然，大模型是个黑箱，我们无从探知它的\u201C思考\u201D究竟是一种模仿还是其他。但即便在\u201C奇点时刻\u201D尚未到来之前，这样的\u201C思考\u201D也并非没有意义。",
      "两年半过去，模型的识假辨假的能力有了显著增长，尽管仍然伴随着幻觉。从这个意义上说，人工智能也许并不只是传播风险的放大器，它也有可能成为信息秩序的守门人。无论是检测伪造图像、识别生成视频，还是追溯信息源头，模型的介入或许将使人类拥有更多与虚假信息抗衡的工具。未来，真正的挑战或许不在于让机器像人一样思考，而在于让它帮助人类更清晰地看见现实本身。",
    ],
  },
  {
    slug: "six-finger-boy-ai",
    type: "blog",
    letter: "S",
    category: "AIGC Lab",
    titleEn: "Lab | This 'Six-Fingered Boy' — Do LLMs Know It's AI-Made?",
    titleZh: "明查·实验室｜这个\u201C六指小男孩\u201D，大模型知道TA是AI造的吗？",
    descEn: "Testing whether large language models can identify AI-generated images with visible artifacts.",
    descZh: "测试大语言模型能否识别带有可见瑕疵的AI生成图像。",
    dateEn: "November 19, 2025",
    dateZh: "2025年11月19日",
    image: blogCoverDefault,
    externalLink: "https://m.thepaper.cn/newsDetail_forward_31983647",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "ai-fact-checker-models",
    type: "blog",
    letter: "A",
    category: "AIGC Lab",
    titleEn: "Lab | 'AI Fact-Checkers' Online: Which of Four Models Is Most Reliable?",
    titleZh: "明查·实验室｜\u201CAI核查员\u201D上线，四大模型谁最靠谱？",
    descEn: "Comparing four mainstream AI models in their ability to assist fact-checking work.",
    descZh: "比较四大主流AI模型辅助事实核查工作的能力。",
    dateEn: "November 18, 2025",
    dateZh: "2025年11月18日",
    image: blogCoverDefault,
    externalLink: "https://m.thepaper.cn/newsDetail_forward_31966879",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "ai-images-israel-iran",
    type: "blog",
    letter: "I",
    category: "Fact Check",
    titleEn: "AI Images Flood Israel-Iran Conflict: War Imagery Hard to Distinguish",
    titleZh: "明查｜AI图像席卷以伊冲突，真假难辨的战争影像应接不暇",
    descEn: "Investigating the proliferation of AI-generated images in the Israel-Iran conflict.",
    descZh: "调查以伊冲突中AI生成图像的泛滥。",
    dateEn: "July 1, 2025",
    dateZh: "2025年7月1日",
    image: blogCoverDefault,
    externalLink: "https://m.thepaper.cn/newsDetail_forward_31067780",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "satellite-imagery-realtime",
    type: "blog",
    letter: "S",
    category: "OSINT Toolbox",
    titleEn: "Toolbox | What Does the World Look Like Right Now? Satellite Imagery Offers Clues",
    titleZh: "明查·工具箱｜此时此刻的世界是何模样？实时卫星图像可窥得一二",
    descEn: "How to use real-time satellite imagery for open-source investigation and verification.",
    descZh: "如何利用实时卫星图像进行开源调查与核实。",
    dateEn: "October 5, 2024",
    dateZh: "2024年10月5日",
    image: blogCoverDefault,
    externalLink: "https://m.thepaper.cn/newsDetail_forward_28876586",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "destroyed-building-proof",
    type: "blog",
    letter: "D",
    category: "OSINT Toolbox",
    titleEn: "Toolbox | A Destroyed Building — How to Prove It Once Existed?",
    titleZh: "明查·工具箱｜一栋被炸毁的大楼，如何证明这世界ta来过？",
    descEn: "Using archival tools and techniques to document structures destroyed in conflict.",
    descZh: "利用档案工具和技术记录在冲突中被摧毁的建筑。",
    dateEn: "October 4, 2024",
    dateZh: "2024年10月4日",
    image: blogCoverDefault,
    externalLink: "https://m.thepaper.cn/newsDetail_forward_28876571",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "geolocation-investigation",
    type: "blog",
    letter: "G",
    category: "OSINT Toolbox",
    titleEn: "Toolbox | Solving Cases with Just One Photo? Learn Geolocation",
    titleZh: "明查·工具箱｜破案全凭一张图？学会地理定位，被骗没那么容易",
    descEn: "A guide to geolocation techniques for verifying images and claims.",
    descZh: "利用地理定位技术核实图像和说法的指南。",
    dateEn: "October 3, 2024",
    dateZh: "2024年10月3日",
    image: blogCoverDefault,
    externalLink: "https://m.thepaper.cn/newsDetail_forward_28876499",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "dns-website-verification",
    type: "blog",
    letter: "D",
    category: "OSINT Toolbox",
    titleEn: "Toolbox | Is Your News Source Reliable? Check Its DNS",
    titleZh: "明查·工具箱｜你获取信息的网站靠谱吗？看下DNS信息吧",
    descEn: "How DNS information can help verify the credibility of news websites.",
    descZh: "DNS信息如何帮助核实新闻网站的可信度。",
    dateEn: "May 2, 2024",
    dateZh: "2024年5月2日",
    image: blogCoverDefault,
    externalLink: "https://m.thepaper.cn/newsDetail_forward_27224988",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "chatgpt-fake-tool",
    type: "blog",
    letter: "C",
    category: "Fact Check",
    titleEn: "The Most Powerful Fake Tool in History? How Fact-Checkers View ChatGPT",
    titleZh: "聚焦｜史上最强造假工具？核查从业者如何看待ChatGPT",
    descEn: "Fact-checking professionals' perspectives on the risks and potentials of ChatGPT.",
    descZh: "事实核查从业者对ChatGPT的风险与潜力的看法。",
    dateEn: "February 15, 2023",
    dateZh: "2023年2月15日",
    image: blogCoverDefault,
    externalLink: "https://m.thepaper.cn/newsDetail_forward_21921265",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "queen-funeral-flight-tracking",
    type: "blog",
    letter: "Q",
    category: "OSINT Toolbox",
    titleEn: "Toolbox | 5 Million Watched the Queen's Coffin Flight — How?",
    titleZh: "明查·工具箱｜500万人围观英女王灵柩专机，怎么做到的？",
    descEn: "How flight tracking technology enabled millions to follow the Queen's final journey.",
    descZh: "航班追踪技术如何让数百万人追踪了女王的最后旅程。",
    dateEn: "January 24, 2023",
    dateZh: "2023年1月24日",
    image: blogCoverDefault,
    externalLink: "https://m.thepaper.cn/newsDetail_forward_21677912",
    contentEn: [],
    contentZh: [],
  },
];

// ============================================================
// 🔧 FEATURED WORK (Homepage) — Edit items below
// These reference workArticles by slug for linking
// ============================================================
export const featuredWorkSlugs = ["freshman", "savor", "beyond-the-limits", "balmain-beauty", "the-blimp"];

// ============================================================
// 🖼️ INLINE IMAGES — Used for inline images in article body
// ============================================================
import blogInline1 from "@/assets/blog-inline-1.jpg";
import blogInline2 from "@/assets/blog-inline-2.jpg";
import blogInline3 from "@/assets/blog-inline-3.jpg";
import blogInline4 from "@/assets/blog-inline-4.jpg";

export const inlineImages = [blogInline1, blogInline2, blogInline3, blogInline4];

// Helper to find article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return [...workArticles, ...blogArticles].find((a) => a.slug === slug);
};
