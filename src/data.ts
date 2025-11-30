export type Language = 'zh-TW' | 'en';

export interface Content {
  nav: {
    brand: string;
    packages: string;
    portfolio: string;
    addons: string;
    process: string;
    faq: string;
    book: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  process: {
    title: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  packages: {
    title: string;
    items: {
      id: string;
      name: string;
      tagline: string;
      features: string[];
      time: string;
      price: string;
      note: string;
      cta: string;
    }[];
  };
  addons: {
    title: string;
    categories: {
      id: string;
      name: string;
    }[];
    items: {
      category: string;
      name: string;
      desc: string;
      time: string;
      price: string;
    }[];
  };
  highlights: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  faq: {
    title: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  booking: {
    title: string;
    form: {
      name: string;
      phone: string;
      carModel: string;
      service: string;
      date: string;
      note: string;
      submit: string;
    };
    contact: {
      line: string;
      address: string;
      hours: string;
    };
  };
  comparison: {
    title: string;
    features: {
      name: string;
      l1: boolean;
      l2: boolean;
      l3: boolean;
      l4: boolean;
      l5: boolean;
    }[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    instagram: string;
    items: {
      id: number;
      image: string;
      title: string;
    }[];
  };
}

export const content: Record<Language, Content> = {
  'zh-TW': {
    nav: {
      brand: '光感洗車美容',
      packages: '服務方案',
      portfolio: '作品集',
      addons: '單點加購',
      process: '服務流程',
      faq: '常見問題',
      book: '立即預約',
    },
    hero: {
      title: '洗車不只乾淨，更要好看好開。',
      subtitle: '手工洗車、精緻內裝、年度鍍膜，讓每一次出門都像開新車。',
      ctaPrimary: '查看方案與價格',
      ctaSecondary: '立即預約',
    },
    process: {
      title: '服務流程',
      steps: [
        { title: '線上選方案＆填寫資料', desc: '簡單幾步完成預約，節省現場等待時間。' },
        { title: '到店／到府服務', desc: '專業團隊為您服務，細心呵護您的愛車。' },
        { title: '完工檢查與講解', desc: '確認施工細節，並分享後續保養建議。' },
        { title: '貼心提醒', desc: '透過 LINE 或簡訊提醒您下次保養時間。' },
      ],
    },
    packages: {
      title: '精選套裝方案',
      items: [
        {
          id: 'L1',
          name: 'L1｜基礎手工洗車',
          tagline: '第一次來先體驗，讓車回到乾淨舒服的狀態。',
          features: [
            '泡沫手工洗車（車身＋保桿）',
            '輪圈表面清潔與輪胎護膜',
            '前後擋風玻璃外側清潔',
            '簡易內裝吸塵（座椅、腳踏墊）',
            '內側前擋擦拭與防霧',
          ],
          time: '30–40 分鐘',
          price: 'NT$500 起',
          note: '實際價格依車型與車況調整',
          cta: '選擇此方案',
        },
        {
          id: 'L2',
          name: 'L2｜視野升級洗車',
          tagline: '常跑高速公路、雨天通勤首選。',
          features: [
            '包含 L1 全部項目',
            '前擋風玻璃除油膜',
            '前擋風玻璃撥水鍍膜',
          ],
          time: '約 60 分鐘',
          price: 'NT$1,200 起',
          note: '實際價格依車型與車況調整',
          cta: '選擇此方案',
        },
        {
          id: 'L3',
          name: 'L3｜全車玻璃護盾',
          tagline: '全車玻璃都要清楚、乾淨、好刷雨刷。',
          features: [
            '包含 L2 全部項目',
            '全車玻璃除油膜（前後擋＋四門玻璃）',
            '全車玻璃撥水鍍膜（外側）',
          ],
          time: '約 90–120 分鐘',
          price: 'NT$2,400 起',
          note: '實際價格依車型與車況調整',
          cta: '選擇此方案',
        },
        {
          id: 'L4',
          name: 'L4｜內外精緻護理',
          tagline: '想要「小美容」等級，一次整理車內與車外。',
          features: [
            '包含 L3 全部項目',
            '全車內裝精緻吸塵（含縫隙、後車廂表面）',
            '腳踏墊拆洗',
            '中控台、門板、飾板清潔與塑料保養',
            '皮椅基礎清潔與保養（或布椅局部去漬）',
            '車內玻璃清潔',
            '基礎除味（中性香氛）',
          ],
          time: '約 3 小時',
          price: 'NT$3,800 起',
          note: '實際價格依車型與車況調整',
          cta: '選擇此方案',
        },
        {
          id: 'L5',
          name: 'L5｜年度鍍膜旗艦',
          tagline: '想讓車一年都好洗好看，就選這個。',
          features: [
            '包含 L4 全部項目',
            '除鐵粉、除柏油、美容黏土去除漆面附著物',
            '漆面單道機器拋光（修飾輕微太陽紋、恢復光澤）',
            '全車漆面鍍膜',
            '輪圈表面鍍膜',
            '引擎室基礎清潔與塑料護理',
          ],
          time: '需留車一整天',
          price: 'NT$12,000 起',
          note: '實際價格依車型與車況調整',
          cta: '選擇此方案',
        },
      ],
    },
    addons: {
      title: '單點加購項目',
      categories: [
        { id: 'exterior', name: '外觀' },
        { id: 'glass', name: '玻璃' },
        { id: 'interior', name: '內裝' },
        { id: 'other', name: '其他' },
      ],
      items: [
        { category: 'exterior', name: '手工精緻洗車', desc: '細緻泡沫與羊毛手套清洗', time: '30分', price: 'NT$500' },
        { category: 'exterior', name: '漆面打蠟', desc: '增加光澤與保護', time: '40分', price: 'NT$800' },
        { category: 'exterior', name: '漆面輕拋光', desc: '去除細紋與氧化層', time: '60分', price: 'NT$1500' },
        { category: 'exterior', name: '除鐵粉', desc: '去除煞車粉塵與工業落塵', time: '20分', price: 'NT$300' },
        { category: 'exterior', name: '除柏油', desc: '去除路面柏油顆粒', time: '20分', price: 'NT$300' },
        { category: 'exterior', name: '頭燈還原', desc: '改善大燈霧化泛黃', time: '40分', price: 'NT$1000' },
        { category: 'glass', name: '前擋風玻璃除油膜', desc: '去除頑固油膜', time: '20分', price: 'NT$500' },
        { category: 'glass', name: '前擋風玻璃撥水鍍膜', desc: '提升雨天視野', time: '20分', price: 'NT$800' },
        { category: 'glass', name: '全車玻璃除油膜', desc: '全車視野清晰', time: '40分', price: 'NT$1200' },
        { category: 'glass', name: '全車玻璃鍍膜', desc: '全車撥水保護', time: '40分', price: 'NT$2000' },
        { category: 'interior', name: '內裝基礎清潔', desc: '日常吸塵擦拭', time: '20分', price: 'NT$300' },
        { category: 'interior', name: '內裝深層清潔', desc: '細節縫隙與污漬處理', time: '60分', price: 'NT$1500' },
        { category: 'interior', name: '皮椅保養', desc: '滋潤皮革防止龜裂', time: '30分', price: 'NT$500' },
        { category: 'interior', name: '車內臭氧殺菌除味', desc: '消除異味與細菌', time: '20分', price: 'NT$300' },
        { category: 'interior', name: '冷氣風道殺菌清潔', desc: '改善冷氣異味', time: '30分', price: 'NT$600' },
        { category: 'other', name: '引擎室清潔', desc: '去除油泥與灰塵', time: '30分', price: 'NT$500' },
        { category: 'other', name: '輪圈深層清潔＋鍍膜', desc: '抗煞車粉塵', time: '40分', price: 'NT$1000' },
        { category: 'other', name: '寵物毛加強處理', desc: '專業工具去除毛髮', time: '30分', price: 'NT$500' },
      ],
    },
    highlights: {
      title: '為什麼選擇我們',
      items: [
        { title: '透明價格', desc: '價目表完整公開，不硬推額外消費。' },
        { title: '手工精緻', desc: '全程手工施工，細節到門邊、輪圈、玻璃邊。' },
        { title: '嚴選用品', desc: '使用安全中性清潔劑與優質鍍膜產品。' },
        { title: '方便預約', desc: '線上填表／掃描 QR Code 加 LINE 預約。' },
      ],
    },
    faq: {
      title: '常見問題',
      items: [
        { q: '第一次來應該選哪一個方案？', a: '建議選擇 L1 基礎手工洗車體驗我們的服務品質，或 L2 視野升級洗車確保行車安全。' },
        { q: '洗車會花多久時間？', a: '基礎洗車約 30-40 分鐘，精緻護理或鍍膜則需數小時至一天不等。' },
        { q: '如果下雨天還適合做鍍膜嗎？', a: '我們的施工環境在室內，且鍍膜後短時間內淋雨不影響效果，反而能立即體驗撥水性。' },
        { q: '套裝價格會因為車型不同而改變嗎？', a: '是的，價格表為小型車起價，休旅車或大型車會依體積酌收費用。' },
        { q: '可以現場再加購單點項目嗎？', a: '可以，您可以先預約基本方案，現場與技師討論後再決定加購項目。' },
      ],
    },
    booking: {
      title: '立即預約',
      form: {
        name: '姓名',
        phone: '聯絡電話',
        carModel: '車款與年份',
        service: '想要的服務方案',
        date: '希望日期與時段',
        note: '備註',
        submit: '送出預約',
      },
      contact: {
        line: '加入 LINE',
        address: '台北市信義區信義路五段7號',
        hours: '週一至週日 10:00 - 20:00',
      },
    },
    comparison: {
      title: '方案比較',
      features: [
        { name: '泡沫手工洗車', l1: true, l2: true, l3: true, l4: true, l5: true },
        { name: '輪圈清潔', l1: true, l2: true, l3: true, l4: true, l5: true },
        { name: '內裝吸塵', l1: true, l2: true, l3: true, l4: true, l5: true },
        { name: '前擋除油膜', l1: false, l2: true, l3: true, l4: true, l5: true },
        { name: '前擋鍍膜', l1: false, l2: true, l3: true, l4: true, l5: true },
        { name: '全車玻璃除油膜', l1: false, l2: false, l3: true, l4: true, l5: true },
        { name: '全車玻璃鍍膜', l1: false, l2: false, l3: true, l4: true, l5: true },
        { name: '內裝深層清潔', l1: false, l2: false, l3: false, l4: true, l5: true },
        { name: '皮椅保養', l1: false, l2: false, l3: false, l4: true, l5: true },
        { name: '除味殺菌', l1: false, l2: false, l3: false, l4: true, l5: true },
        { name: '除鐵粉/柏油', l1: false, l2: false, l3: false, l4: false, l5: true },
        { name: '機器拋光', l1: false, l2: false, l3: false, l4: false, l5: true },
        { name: '全車鍍膜', l1: false, l2: false, l3: false, l4: false, l5: true },
      ],
    },
    portfolio: {
      title: '作品集',
      subtitle: '追蹤我們的 Instagram 查看更多',
      instagram: '@glow_detail_studio',
      items: [
        { id: 1, image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80', title: 'Porsche 911 鍍膜' },
        { id: 2, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80', title: 'Tesla Model 3 精緻洗車' },
        { id: 3, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80', title: 'BMW M4 拋光' },
        { id: 4, image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80', title: 'Mercedes G-Wagon' },
        { id: 5, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80', title: '內裝深層清潔' },
        { id: 6, image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80', title: '引擎室護理' },
      ],
    },
  },
  'en': {
    nav: {
      brand: 'Glow Detail Studio',
      packages: 'Packages',
      portfolio: 'Portfolio',
      addons: 'Add-ons',
      process: 'Process',
      faq: 'FAQ',
      book: 'Book Now',
    },
    hero: {
      title: 'More than clean – make your car look and feel amazing.',
      subtitle: 'Hand wash, interior detailing, and yearly coating so every drive feels like a new car.',
      ctaPrimary: 'View Packages & Pricing',
      ctaSecondary: 'Book Now',
    },
    process: {
      title: 'How It Works',
      steps: [
        { title: 'Select & Book', desc: 'Choose your package and book online easily.' },
        { title: 'Service Day', desc: 'Visit us or we come to you (flexible options).' },
        { title: 'Inspection', desc: 'Final check and maintenance tips walkthrough.' },
        { title: 'Reminder', desc: 'Get notified via LINE/SMS for your next visit.' },
      ],
    },
    packages: {
      title: 'Service Packages',
      items: [
        {
          id: 'L1',
          name: 'L1｜Basic Hand Wash',
          tagline: 'Perfect for a first visit – brings your car back to a clean and comfy state.',
          features: [
            'Foam Hand Wash (Body + Bumpers)',
            'Wheel Cleaning & Tire Dressing',
            'Exterior Windshield Cleaning',
            'Basic Interior Vacuum (Seats, Mats)',
            'Interior Windshield Wipe & Anti-fog',
          ],
          time: '30–40 mins',
          price: 'From NT$500',
          note: 'Price varies by car size and condition.',
          cta: 'Select',
        },
        {
          id: 'L2',
          name: 'L2｜Vision Plus',
          tagline: 'Ideal for highway and rainy-day drivers.',
          features: [
            'Includes all L1 features',
            'Windshield Oil Film Removal',
            'Windshield Water Repellent Coating',
          ],
          time: 'Approx. 60 mins',
          price: 'From NT$1,200',
          note: 'Price varies by car size and condition.',
          cta: 'Select',
        },
        {
          id: 'L3',
          name: 'L3｜Glass Shield',
          tagline: 'Crystal clear visibility on every window.',
          features: [
            'Includes all L2 features',
            'Full Glass Oil Film Removal',
            'Full Glass Water Repellent Coating',
          ],
          time: '90–120 mins',
          price: 'From NT$2,400',
          note: 'Price varies by car size and condition.',
          cta: 'Select',
        },
        {
          id: 'L4',
          name: 'L4｜Inside & Out Detail',
          tagline: 'A mini full detail inside and out.',
          features: [
            'Includes all L3 features',
            'Detailed Interior Vacuum (Crevices, Trunk)',
            'Floor Mat Deep Clean',
            'Dashboard & Door Panel Clean/Protect',
            'Leather Care / Spot Stain Removal',
            'Interior Glass Cleaning',
            'Odor Neutralization',
          ],
          time: 'Approx. 3 Hours',
          price: 'From NT$3,800',
          note: 'Price varies by car size and condition.',
          cta: 'Select',
        },
        {
          id: 'L5',
          name: 'L5｜Annual Coating Package',
          tagline: 'Year-long gloss and easier washes.',
          features: [
            'Includes all L4 features',
            'Iron/Tar Removal & Clay Bar Treatment',
            'Single-Stage Machine Polish',
            'Full Body Ceramic Coating',
            'Wheel Face Coating',
            'Engine Bay Clean & Dress',
          ],
          time: 'Full Day Required',
          price: 'From NT$12,000',
          note: 'Price varies by car size and condition.',
          cta: 'Select',
        },
      ],
    },
    addons: {
      title: 'A La Carte / Add-ons',
      categories: [
        { id: 'exterior', name: 'Exterior' },
        { id: 'glass', name: 'Glass' },
        { id: 'interior', name: 'Interior' },
        { id: 'other', name: 'Other' },
      ],
      items: [
        { category: 'exterior', name: 'Premium Hand Wash', desc: 'Gentle foam & wool mitt wash', time: '30m', price: 'NT$500' },
        { category: 'exterior', name: 'Wax Application', desc: 'Enhance gloss & protection', time: '40m', price: 'NT$800' },
        { category: 'exterior', name: 'Light Paint Correction', desc: 'Remove swirls & oxidation', time: '60m', price: 'NT$1500' },
        { category: 'exterior', name: 'Iron Remover', desc: 'Remove brake dust & fallout', time: '20m', price: 'NT$300' },
        { category: 'exterior', name: 'Tar Remover', desc: 'Remove road tar', time: '20m', price: 'NT$300' },
        { category: 'exterior', name: 'Headlight Restoration', desc: 'Fix foggy/yellow headlights', time: '40m', price: 'NT$1000' },
        { category: 'glass', name: 'Windshield Oil Film Removal', desc: 'Deep clean for clarity', time: '20m', price: 'NT$500' },
        { category: 'glass', name: 'Windshield Coating', desc: 'Rain repellent', time: '20m', price: 'NT$800' },
        { category: 'glass', name: 'Full Glass Oil Film Removal', desc: 'Deep clean all windows', time: '40m', price: 'NT$1200' },
        { category: 'glass', name: 'Full Glass Coating', desc: 'Repellent for all windows', time: '40m', price: 'NT$2000' },
        { category: 'interior', name: 'Basic Interior Clean', desc: 'Vacuum & wipe down', time: '20m', price: 'NT$300' },
        { category: 'interior', name: 'Deep Interior Detail', desc: 'Deep clean crevices & stains', time: '60m', price: 'NT$1500' },
        { category: 'interior', name: 'Leather Care', desc: 'Condition & protect leather', time: '30m', price: 'NT$500' },
        { category: 'interior', name: 'Ozone Odor Removal', desc: 'Kill bacteria & odors', time: '20m', price: 'NT$300' },
        { category: 'interior', name: 'A/C Vent Sanitizing', desc: 'Clean air vents', time: '30m', price: 'NT$600' },
        { category: 'other', name: 'Engine Bay Cleaning', desc: 'Remove grease & dust', time: '30m', price: 'NT$500' },
        { category: 'other', name: 'Wheel Deep Clean & Coating', desc: 'Protect against brake dust', time: '40m', price: 'NT$1000' },
        { category: 'other', name: 'Pet Hair Removal', desc: 'Specialized removal', time: '30m', price: 'NT$500' },
      ],
    },
    highlights: {
      title: 'Why Choose Us',
      items: [
        { title: 'Transparent Pricing', desc: 'No hidden fees, no hard selling.' },
        { title: 'Handcrafted Quality', desc: 'Meticulous attention to detail.' },
        { title: 'Premium Products', desc: 'Safe, pH-neutral, and high-quality coatings.' },
        { title: 'Easy Booking', desc: 'Book online or via LINE easily.' },
      ],
    },
    faq: {
      title: 'FAQ',
      items: [
        { q: 'Which package should I choose for my first visit?', a: 'We recommend L1 for a basic refresh or L2 for better visibility and protection.' },
        { q: 'How long does it take?', a: 'Basic washes take 30-40 mins, while details and coatings can take several hours to a full day.' },
        { q: 'Is coating okay if it rains?', a: 'Yes! We work indoors, and modern coatings cure quickly to repel water immediately.' },
        { q: 'Do prices vary by car size?', a: 'Yes, listed prices are starting rates for small cars. Larger vehicles may incur a surcharge.' },
        { q: 'Can I add services on arrival?', a: 'Absolutely. You can book a base package and discuss add-ons with our technicians.' },
      ],
    },
    booking: {
      title: 'Book Now',
      form: {
        name: 'Name',
        phone: 'Phone',
        carModel: 'Car Model & Year',
        service: 'Service Package',
        date: 'Preferred Date & Time',
        note: 'Notes',
        submit: 'Submit Booking',
      },
      contact: {
        line: 'Add LINE',
        address: 'No. 7, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei City',
        hours: 'Mon-Sun 10:00 - 20:00',
      },
    },
    comparison: {
      title: 'Compare Packages',
      features: [
        { name: 'Foam Hand Wash', l1: true, l2: true, l3: true, l4: true, l5: true },
        { name: 'Wheel Cleaning', l1: true, l2: true, l3: true, l4: true, l5: true },
        { name: 'Interior Vacuum', l1: true, l2: true, l3: true, l4: true, l5: true },
        { name: 'Windshield Oil Film Removal', l1: false, l2: true, l3: true, l4: true, l5: true },
        { name: 'Windshield Coating', l1: false, l2: true, l3: true, l4: true, l5: true },
        { name: 'Full Glass Oil Film Removal', l1: false, l2: false, l3: true, l4: true, l5: true },
        { name: 'Full Glass Coating', l1: false, l2: false, l3: true, l4: true, l5: true },
        { name: 'Deep Interior Detail', l1: false, l2: false, l3: false, l4: true, l5: true },
        { name: 'Leather Care', l1: false, l2: false, l3: false, l4: true, l5: true },
        { name: 'Odor Removal', l1: false, l2: false, l3: false, l4: true, l5: true },
        { name: 'Iron/Tar Removal', l1: false, l2: false, l3: false, l4: false, l5: true },
        { name: 'Machine Polish', l1: false, l2: false, l3: false, l4: false, l5: true },
        { name: 'Ceramic Coating', l1: false, l2: false, l3: false, l4: false, l5: true },
      ],
    },
    portfolio: {
      title: 'Our Work',
      subtitle: 'Follow us on Instagram for more.',
      instagram: '@glow_detail_studio',
      items: [
        { id: 1, image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80', title: 'Porsche 911 Coating' },
        { id: 2, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80', title: 'Tesla Model 3 Detail' },
        { id: 3, image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80', title: 'BMW M4 Polish' },
        { id: 4, image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=600&q=80', title: 'Mercedes G-Wagon' },
        { id: 5, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80', title: 'Interior Deep Clean' },
        { id: 6, image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80', title: 'Engine Bay Detail' },
      ],
    },
  },
};
