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
    letter: "W",
    category: "Visual Investigation",
    titleEn: "Ukraine-Russia War",
    titleZh: "俄乌战争",
    descEn:
      "An investigative documentary exploring grassroots journalism in the digital age. Visual storytelling meets data-driven research.",
    descZh: "一部探索数字时代草根新闻业的调查纪录片。视觉叙事与数据驱动研究的结合。",
    dateEn: "February 2022",
    dateZh: "2022年2月",
    creditsEn: "Directed & Edited — Solo",
    creditsZh: "导演 & 剪辑 — 独立完成",
    image: "https://images.pexels.com/photos/11734710/pexels-photo-11734710.jpeg",
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
    slug: "six-finger-boy-ai",
    type: "work",
    letter: "冲突",
    category: "Conflict",
    titleEn: "Lab | This 'Six-Fingered Boy' — Do LLMs Know It's AI-Made?",
    titleZh: "俄乌冲突一周年，\u201C双方\u201D伤亡几何？",
    descEn: "Testing whether large language models can identify AI-generated images with visible artifacts.",
    descZh: "测试大语言模型能否识别带有可见瑕疵的AI生成图像。",
    dateEn: "February 24, 2023",
    dateZh: "2023年2月24日",
    creditsEn: "Russia, Ukraine",
    creditsZh: "俄乌-2022",
    image:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/480511258_1599950867297837_4184516365853765251_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=gcXnnZytZ5IQ7kNvwGLqT0o&_nc_oc=Adkd8c7Eqhk-8ztIUpeTqnAuf7-icnye_J8ofirgVb-irkxhw5bvaPoOjaVcVwlwNOQ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=rpsHPinFjgdd6Rar2qEaeA&_nc_ss=8&oh=00_Afw-_cgC5xKMUhDmKsZvt2URm8CRU1iSP5jsVLVstAE6HQ&oe=69BA2EF4",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_22049169",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "savor",
    type: "work",
    letter: "S",
    category: "International Communication",
    titleEn: "'Great Translation'",
    titleZh: "大翻译运动",
    descEn:
      "Open-source intelligence research project tracking supply chain transparency across Southeast Asian markets.",
    descZh: "追踪东南亚市场供应链透明度的开源情报研究项目。",
    dateEn: "April 2022",
    dateZh: "2022年4月",
    creditsEn: "Research Lead — w/ Global Voices",
    creditsZh: "研究负责人 — 与 Global Voices 合作",
    image: "https://www.globaltimes.cn/Portals/0/attachment/2022/2022-03-31/9609162e-0363-4561-98cb-8233c52f0fae.jpeg",
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
    category: "Media Literacy",
    titleEn: "清华大学媒体工作坊",
    titleZh: "Media Workshop × Tsinghua",
    descEn:
      "Editorial content series for luxury beauty brand launch. Photography direction, copywriting, and digital campaign.",
    descZh: "奢侈美妆品牌上市的编辑内容系列。摄影指导、文案撰写和数字营销。",
    dateEn: "September 2025",
    dateZh: "2025年9月",
    creditsEn: "Editor & Content Director",
    creditsZh: "编辑 & 内容总监",
    image: "https://imgpai.thepaper.cn/newpai/image/20251103/9d9668be-6af5-4366-8d15-0d12628cd33c.jpg",
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
    category: "Visual Storytelling",
    titleEn: "Epstein Files",
    titleZh: "爱泼斯坦文件",
    descEn:
      "Short documentary on the forgotten history of Shanghai's airship era. Premiered at Shanghai International Film Festival.",
    descZh: "关于上海飞艇时代被遗忘历史的短纪录片。在上海国际电影节首映。",
    dateEn: "June 2025",
    dateZh: "2025年6月",
    creditsEn: "Director & Writer",
    creditsZh: "导演 & 编剧",
    image:
      "https://media.wired.com/photos/69404e98ccaf9f64c5d1c4b0/3:2/w_2240,c_limit/sec-epstein-doc-dump-2225859618.jpg",
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
    category: "AI",
    titleEn: "Understanding the Limitations of AIGC Detectors",
    titleZh: "一文读懂AI生成内容检测器的能力与局限",
    descEn: "Why AI detectors are not trustworthy?",
    descZh: "为什么AI检测器不可信？",
    dateEn: "March 10, 2026",
    dateZh: "2026年11月20日",
    image: blogCoverDefault,
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
      "《纽约时报》在2月底发布了一篇AI测试文章，对市面上10多款主流的AI检测工具识别AI生成图像和音视频的能力进行了测试。文章指出，尽管AI进步神速，但目前你还不能指望依靠AI检测工具来判断图像的真伪。",
      "这一结论与我们去年年底的观察基本一致：尽管学术界提出了许多检测方法，也不断有新论文发表，但在现实应用中，没有任何一款工具是完美的。",
      "一些工具的检测结果相对准确，并具备对多模态内容（图像、视频、音频）的识别能力，例如Gemini Pro和AI or Not。Sensity和Hive Detect的表现也算得上差强人意。但一些主流商业大模型，例如Claude和ChatGPT，在判断图像真伪方面的表现反而未达预期。",
      "这其中最令人费解的是Claude的表现——考虑到这是一款如此强调伦理的模型。但创造它的人好像完全没有考虑要让模型分辨得清真假这件事。这款模型在代码方面的能力表现出色，但AI的表现再次证明，模型的能力有不同的维度。在为数不多的8类真假图片测试中，Claude仅通过了“真实拍摄的图片（非AI生成）”这一项，其余的内容，不是判断错误，就表示无法检测。",
      "Claude在1月更新了它的constitution，强调要保持诚实并造福用户。我好奇，他们是否会将AI的核假能力作为指标纳入“诚实”的范畴。",
      "Gemini的表现要比Claude强得多。眼下一个更值得思考的问题是：为什么同样是AI模型，有些工具在识别AI生成内容方面的表现明显优于另一些？",
      "要回答这个问题，需要先理解这些AI检测工具是如何工作的。",
      "目前，大多数AI检测工具采用的是空域分析结合频域分析（frequency domain analysis）的技术路径。其核心思路是：真实图像与AI生成图像在频谱结构上存在差异。通过提取这些频谱特征，并训练一个二分类模型，就可以对图像进行真假判断。",
      "不同工具之间的性能差异，主要来自三个方面。",
      "首先是训练时使用的生成模型不同。有些检测工具基于GAN生成图像训练，有些基于Diffusion模型，还有些基于VAE模型。不同生成模型产生的图像特征不同，因此检测器学习到的判别特征也会不同。",
      "其次是机器学习过程中挖掘的图像的的特征类型不同。有些模型只依赖视觉特征，譬如噪点、伪影、边界混合、全局纹理一致性等。有些模型则会加入频率信息，通过频谱特征提高识别能力。还有一些方法会先对待检测图像进行重建，通过分析重建图与原图之间的差异，来捕捉生成模型的固有属性，从而获得更好的泛化能力。",
      "再者需要考虑的就是训练数据。比起早期AI模型批量生成的图像，那些使用经过对抗生成的、更难辨别的图像进行训练的模型会有更强的鲁棒性。",
      "这三个维度的差异，构成了不同工具识别能力差异的基础。如果一款工具在模型训练时覆盖的生成模型足够广、提取的特征足够有效、训练数据足够复杂，那么整体识别能力自然会更强。",
      "但频域分析本身存在一个天然缺陷：跨模型泛化能力较弱。",
      "例如，一款基于GAN-1模型训练的检测工具，在面对由Diffusion模型或升级后的GAN-2模型生成的图像时，识别准确率可能会显著下降。而现实情况是，用于生成AI图像的模型正在不断进化，新产品、新算法层出不穷。",
      "这意味着，面对海量、不断变化的AI生成图像，没有任何检测工具能够保证100%的准确率。同样的逻辑也适用于其他模态，例如文本和视频——依赖类似二分类思路的检测工具，也不可能做到完全准确。",
      "这时，有人提出了另一种思路：既然模型的学习能力无法泛化，那我们可不可以将问题简单化，在AI生成内容中嵌入永久标记，让检测系统只需寻找这些标记即可判断来源。",
      "Gemini Pro就是这么做的。该模型的母公司google本身就开发了大量文生图像模型，比如Veo, 并在其中嵌入了名为SynthID的水印技术。通过探查这些水印，Gemni Pro就能精准狙击由Google AI生成的图像。Google还将SynthID扩展到了更多内容类型，包括文本、音频和视频。",
      "这种方法有明显的局限性，那就是它只对Google自己的模型有效。其他生成式AI平台，例如Midjourney或Sora，并不会使用SynthID，因此Gemini无法检测这些来源的内容。",
      "但换个思路，如果能够建立统一的标准——例如所有AI公司都在生成内容中嵌入类似水印，或者建立类似互联网TCP/IP那样的通用协议，这个问题也能解决。",
      "事实上，科技公司已经在尝试这样做。Google在2024年加入了内容溯源与真实性联盟（C2PA）。这个联盟提出了一套开放技术标准，用于记录数字内容的来源与编辑历史。Meta、OpenAI、Adobe等公司都是该联盟成员。",
      "但这种方案仍然面临两个现实问题。首先你无法强制所有创造文生图像模型的公司都遵循同一标准，因为AI产业是全球性的，即便通过立法推动，也很难做到全面统一。",
      "其次，水印本身可以被移除或篡改。虽然当前的水印技术可以抵抗裁剪、缩放或滤镜处理，但对于具备技术能力的人来说，水印仍然可能被破解。",
      "为了应对这些问题，C2PA的成员正在开发更严格的内容溯源技术，以加强对篡改行为的防护。但无论如何，现阶段，水印还不能成为万能解决方案。",
      "就当下的AIGC技术进展而言，除了频域分析和水印技术之外，图像本身及其场外信息仍然是重要的判断依据，而且有时甚至比算法更直接。",
      "这些信息包括图像的内容是否符合解剖学和物理学规律，是否符合地理与社会背景，图像的来源与传播路径是否有AI痕迹、文件命名方式和元数据等是否能透露出AIGC模型的信息等等。这些也是专业事实核查员长期使用的技术路径。",
      "Gemini 3 Pro能够具备较为准确的图像识别能力，或许和它借鉴了这些技术路径有关。比如它可以注意到细微的AI视觉痕迹，诸如不符合物理规律的物体、异常光滑的“AI皮肤”等。同时，它还可以识别生成式AI常见的文件命名方式、可见水印，甚至一些AI应用添加的图标标记。",
      "尽管如此，我还是认为，无论AI检测工具如何发展，人类都不应该把判断真伪的最终决定权完全交给机器。",
      "因为工具无法做到100%准确，也就不可能100%可信。倘若人们全然依赖工具的判断，那不仅会导致独立思考能力的丧失，还可能制造冤假错案、导致信任危机。",
      "这并非杞人忧天。Reddit上曾出现过一个案例：有人花了几个小时撰写奖学金申请文，满怀希望提交后，却被系统标记为“AI生成”。没有证据，也没有解释，只有一个冷冰冰的自动标签——“你的内容不是真的”。",
      "类似的情况可能出现在所有内容创作领域。人们可能因为“写得太好”或“风格太明显”，而被怀疑使用AI。与此同时，生成式AI却可能凭借效率优势迅速占领内容生产领域。写作、绘画、编程、影视、音乐、视觉设计，都可能被AI深度介入。",
      "使用AI辅助创作本身并没有问题，但问题在于：我们能够接受到什么程度？我们是否愿意生活在一个信息来源模糊、所有内容都只有“90%概率是AI生成”的世界？",
      "至少，人类应当拥有识别内容创作者的能力，避免信息生产被少数技术主体垄断。但关键问题仍然是：How？",
      "这或许不仅仅是AI检测工具需要解决的问题，而是整个时代留给人类社会的一道难题。",
    ],
  },
  {
    slug: "gemini-vs-chatgpt-video",
    type: "blog",
    letter: "S",
    category: "AI",
    titleEn: "Lab | Gemini vs ChatGPT: Who Can Tell 12 Videos Apart?",
    titleZh: "明查·实验室｜Gemini对阵\u201CChatGPT,\u201D，谁能辨认出12段视频真假？",
    descEn: "Testing AI models' ability to distinguish real videos from AI-generated ones.",
    descZh: "测试AI模型辨别真实视频与AI生成视频的能力。",
    dateEn: "November 20, 2025",
    dateZh: "2025年11月20日",
    image:
      "https://images.unsplash.com/photo-1738107450281-45c52f7d06d0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_31983671",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "six-finger-boy-ai",
    type: "blog",
    letter: "S",
    category: "AI",
    titleEn: "Lab | This 'Six-Fingered Boy' — Do LLMs Know It's AI-Made?",
    titleZh: "明查·实验室｜这个\u201C六指小男孩\u201D，大模型知道TA是AI造的吗？",
    descEn: "Testing whether large language models can identify AI-generated images with visible artifacts.",
    descZh: "测试大语言模型能否识别带有可见瑕疵的AI生成图像。",
    dateEn: "November 19, 2025",
    dateZh: "2025年11月19日",
    image:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/480511258_1599950867297837_4184516365853765251_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=gcXnnZytZ5IQ7kNvwGLqT0o&_nc_oc=Adkd8c7Eqhk-8ztIUpeTqnAuf7-icnye_J8ofirgVb-irkxhw5bvaPoOjaVcVwlwNOQ&_nc_zt=23&_nc_ht=scontent-lax3-2.xx&_nc_gid=rpsHPinFjgdd6Rar2qEaeA&_nc_ss=8&oh=00_Afw-_cgC5xKMUhDmKsZvt2URm8CRU1iSP5jsVLVstAE6HQ&oe=69BA2EF4",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_31983647",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "ai-fact-checker-models",
    type: "blog",
    letter: "A",
    category: "AI",
    titleEn: "Lab | 'AI Fact-Checkers' Online: Which of Four Models Is Most Reliable?",
    titleZh: "明查·实验室｜\u201CAI核查员\u201D上线，四大模型谁最靠谱？",
    descEn: "Comparing four mainstream AI models in their ability to assist fact-checking work.",
    descZh: "比较四大主流AI模型辅助事实核查工作的能力。",
    dateEn: "November 18, 2025",
    dateZh: "2025年11月18日",
    image:
      "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/sites/www.builtin.com/files/2023-02/chatgtp-artificial-intelligence-what-is-chatgpt_0.png",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_31966879",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "ai-images-israel-iran",
    type: "blog",
    letter: "I",
    category: "AI",
    titleEn: "AI Images Flood Israel-Iran Conflict: War Imagery Hard to Distinguish",
    titleZh: "明查｜AI图像席卷以伊冲突，真假难辨的战争影像应接不暇",
    descEn: "Investigating the proliferation of AI-generated images in the Israel-Iran conflict.",
    descZh: "调查以伊冲突中AI生成图像的泛滥。",
    dateEn: "July 1, 2025",
    dateZh: "2025年7月1日",
    image: "https://pbs.twimg.com/media/GtW71t5XMAA4pxz?format=jpg&name=medium",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_31067780",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "satellite-imagery-realtime",
    type: "blog",
    letter: "S",
    category: "Map",
    titleEn: "Toolbox | What Does the World Look Like Right Now? Satellite Imagery Offers Clues",
    titleZh: "明查·工具箱｜此时此刻的世界是何模样？实时卫星图像可窥得一二",
    descEn: "How to use real-time satellite imagery for open-source investigation and verification.",
    descZh: "如何利用实时卫星图像进行开源调查与核实。",
    dateEn: "October 5, 2024",
    dateZh: "2024年10月5日",
    image:
      "https://cdn.sanity.io/images/hvd5n54p/production/e30c2db4665b74dd29b2f45e97b2ebb46588a7bf-1920x1440.jpg?w=1200&fm=webp",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_28876586",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "destroyed-building-proof",
    type: "blog",
    letter: "D",
    category: "Map",
    titleEn: "Toolbox | A Destroyed Building — How to Prove It Once Existed?",
    titleZh: "明查·工具箱｜一栋被炸毁的大楼，如何证明这世界ta来过？",
    descEn: "Using archival tools and techniques to document structures destroyed in conflict.",
    descZh: "利用档案工具和技术记录在冲突中被摧毁的建筑。",
    dateEn: "October 4, 2024",
    dateZh: "2024年10月4日",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi3m2OOMA2TzPVxDImfS8TBwDPGfmuE5rVAqnYpOBOIEcTyCZYoa9rDPTnA09tMQo65aJTUYYV8gcNMrRoho8nzTaAbK9wZWBroP911Y-W_p8M6YwKfwG0Ub5ik4rRmCt7jiSNX/s400/historical_imagery_googleplex_1948.JPG",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_28876571",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "geolocation-investigation",
    type: "blog",
    letter: "G",
    category: "Geolocation",
    titleEn: "Toolbox | Solving Cases with Just One Photo? Learn Geolocation",
    titleZh: "明查·工具箱｜破案全凭一张图？学会地理定位，被骗没那么容易",
    descEn: "A guide to geolocation techniques for verifying images and claims.",
    descZh: "利用地理定位技术核实图像和说法的指南。",
    dateEn: "October 3, 2024",
    dateZh: "2024年10月3日",
    image:
      "https://eliteextra.com/wp-content/uploads/2022/10/going-beyond-multi-stop-gps-empowering-your-drivers-with-the-best-routing-software-around-980x551.jpg",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_28876499",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "dns-website-verification",
    type: "blog",
    letter: "D",
    category: "Web",
    titleEn: "Toolbox | Is Your News Source Reliable? Check Its DNS",
    titleZh: "明查·工具箱｜你获取信息的网站靠谱吗？看下DNS信息吧",
    descEn: "How DNS information can help verify the credibility of news websites.",
    descZh: "DNS信息如何帮助核实新闻网站的可信度。",
    dateEn: "May 2, 2024",
    dateZh: "2024年5月2日",
    image: "https://kinsta.com/wp-content/uploads/2018/05/what-is-dns.png",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_27224988",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "chatgpt-fake-tool",
    type: "blog",
    letter: "C",
    category: "AI",
    titleEn: "The Most Powerful Fake Tool in History? How Fact-Checkers View ChatGPT",
    titleZh: "聚焦｜史上最强造假工具？核查从业者如何看待ChatGPT",
    descEn: "Fact-checking professionals' perspectives on the risks and potentials of ChatGPT.",
    descZh: "事实核查从业者对ChatGPT的风险与潜力的看法。",
    dateEn: "February 15, 2023",
    dateZh: "2023年2月15日",
    image: "https://pbs.twimg.com/media/Fn1ELNoXEAMjFBc?format=jpg&name=medium",
    externalLink: "https://m.thepaper.cn/newsDetail_forward_21921265",
    contentEn: [],
    contentZh: [],
  },
  {
    slug: "queen-funeral-flight-tracking",
    type: "blog",
    letter: "Q",
    category: "Flight Tracking",
    titleEn: "Toolbox | 5 Million Watched the Queen's Coffin Flight — How?",
    titleZh: "明查·工具箱｜500万人围观英女王灵柩专机，怎么做到的？",
    descEn: "How flight tracking technology enabled millions to follow the Queen's final journey.",
    descZh: "航班追踪技术如何让数百万人追踪了女王的最后旅程。",
    dateEn: "January 24, 2023",
    dateZh: "2023年1月24日",
    image:
      "https://preview.redd.it/i-guess-all-flights-are-back-and-can-just-totally-avoid-v0-0fxvcugrfcng1.png?width=1080&crop=smart&auto=webp&s=a51e2bd17e3c288adb7dbb20a97497e4617f3de6",
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
