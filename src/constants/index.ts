export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  procedure: string[];
  faqs: FAQItem[];
  priceRange: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experience: string;
  specialization: string[];
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  text: string;
  avatarText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinic' | 'treatment' | 'technology';
  imageUrl: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  beforeUrl: string;
  afterUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export const CLINIC_INFO = {
  name: "Absolute Dental Clinic",
  tagline: "Gurugram's premium dental destination",
  phone: "+91 78348 83434",
  phoneRaw: "+917834883434",
  email: "help@absolutedental.co.in",
  address: "Ground Floor, 43, Jacaranda Marg, Near BSNL Office, DLF Phase 2, Sector 25, Gurugram, Haryana 122002",
  gmapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3506.1837841199347!2d77.0914113763022!3d28.473100075751917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19385bf5c621%3A0xe10fc5c1fe527f37!2sAbsolute%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1721087000000!5m2!1sen!2sin",
  openingHours: [
    { days: "Monday - Saturday", hours: "10:00 AM - 7:30 PM" },
    { days: "Sunday", hours: "Closed" }
  ],
  socials: {
    facebook: "https://facebook.com/absolutedental",
    instagram: "https://instagram.com/absolutedental",
    linkedin: "https://linkedin.com/company/absolutedental",
    youtube: "https://youtube.com/absolutedental"
  }
};

export const SERVICES: Service[] = [
  {
    id: "implants",
    title: "Dental Implants",
    slug: "dental-implants",
    iconName: "Anchor",
    shortDescription: "Permanent, natural-looking tooth replacement with titanium implants and lifetime durability.",
    fullDescription: "Dental implants are the gold standard for replacing missing teeth. Consisting of a biocompatible titanium post placed into the jawbone and capped with a custom zirconia crown, they look, feel, and function exactly like natural teeth. Whether you need to replace a single tooth, multiple teeth, or undergo full-arch restoration, our implants offer lifetime durability and preserve your jawbone structure.",
    benefits: [
      "Permanent solution with 98%+ success rate",
      "Restores full chewing and speaking ability",
      "Prevents bone loss and preserves facial structure",
      "No support required from adjacent teeth (unlike dental bridges)"
    ],
    procedure: [
      "Initial Consultation & 3D CBCT Scan: Assess bone density and design treatment plan.",
      "Implant Placement: Biocompatible titanium post is surgically placed in the jawbone under local anesthesia.",
      "Osseointegration: 3-4 months wait for the bone to fuse securely with the implant.",
      "Abutment & Crown Fitting: A custom zirconia crown is fabricated and attached to the implant post."
    ],
    faqs: [
      {
        question: "Is the dental implant procedure painful?",
        answer: "The procedure is performed under local anesthesia, so you will feel no pain during surgery. Any mild post-procedure discomfort can be managed easily with standard pain relievers."
      },
      {
        question: "How long do dental implants last?",
        answer: "The titanium implant post fuses with the bone and is designed to last a lifetime. The custom crown on top may require replacement after 15-20 years due to normal wear."
      }
    ],
    priceRange: "₹25,000 - ₹50,000"
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    slug: "root-canal",
    iconName: "Activity",
    shortDescription: "Pain-free single-sitting root canals using rotary endodontics and modern anaesthesia.",
    fullDescription: "Root Canal Treatment (RCT) is a clinical procedure designed to save a severely infected or decayed tooth by cleaning the infected pulp, disinfecting the canals, and sealing them. Using advanced rotary endodontics and microscopic magnification, our clinic delivers highly precise, pain-free root canals in a single visit, helping you find immediate relief from dental pain.",
    benefits: [
      "Immediate relief from severe toothache and sensitivity",
      "Saves your natural tooth from extraction",
      "Single-sitting treatment for maximum convenience",
      "Highly precise cleaning with digital rotary tools"
    ],
    procedure: [
      "Diagnosis: Dental X-ray to determine the depth of infection.",
      "Access & Disinfection: The tooth is numbed, and infected pulp tissue is gently removed.",
      "Canal Cleaning: Root canals are shaped and disinfected using rotary files.",
      "Sealing: Canals are filled with gutta-percha and the tooth is sealed with a composite restoration.",
      "Crown Placement: A dental crown is fitted to restore the tooth's structure and strength."
    ],
    faqs: [
      {
        question: "Is a root canal painful?",
        answer: "Contrary to popular belief, root canal treatment does not cause pain; it relieves it. Modern local anesthesia ensures that the procedure is as comfortable as a routine filling."
      },
      {
        question: "Why do I need a crown after a root canal?",
        answer: "A tooth becomes brittle after its blood and nerve supply are removed during a root canal. A crown is essential to reinforce the tooth structure and prevent fractures under chewing forces."
      }
    ],
    priceRange: "₹4,500 - ₹8,500"
  },
  {
    id: "smile-design",
    title: "Smile Designing",
    slug: "smile-designing",
    iconName: "Sparkles",
    shortDescription: "Custom digital smile makeovers with veneers and ceramic restorations.",
    fullDescription: "Digital Smile Design (DSD) is an advanced cosmetic treatment that allows us to plan and create your dream smile. Combining digital dentistry, facial analysis, and high-quality ceramic restorations like veneers, we correct tooth alignment, color, shape, and size to complement your facial features perfectly.",
    benefits: [
      "Fully customized cosmetic solution based on facial symmetry",
      "Digital preview of your results before the treatment starts",
      "Corrects chips, gaps, stains, and minor misalignment",
      "Boosts confidence with natural-looking, glowing results"
    ],
    procedure: [
      "Digital Scanning & Photography: Capture high-definition facial profiles and intraoral scans.",
      "Smile Mock-up: Generate a 3D digital simulation of your new smile for approval.",
      "Tooth Preparation: Conservative shaping of the enamel (usually less than 0.5mm).",
      "Veneer Fabrication & Bonding: Custom porcelain or composite veneers are bonded securely to your teeth."
    ],
    faqs: [
      {
        question: "How long does a Smile Makeover take?",
        answer: "Usually, a custom Smile Design using porcelain veneers requires 2-3 visits over a period of 7-10 days to complete fabrication and final bonding."
      },
      {
        question: "Are porcelain veneers permanent?",
        answer: "Porcelain veneers are highly durable and stain-resistant. With good oral hygiene and regular checkups, they can easily last 10 to 15 years."
      }
    ],
    priceRange: "₹8,000 - ₹15,000 per tooth"
  },
  {
    id: "aligners",
    title: "Invisible Aligners",
    slug: "invisible-aligners",
    iconName: "WandSparkles",
    shortDescription: "Clear, removable aligners for discreet teeth straightening at any age.",
    fullDescription: "Clear aligners are a modern, comfortable alternative to traditional metal braces. Made of transparent, medical-grade thermoplastic material, they are virtually invisible and fit snugly over your teeth. Aligners apply gentle, controlled force to guide your teeth into alignment. Best of all, they are removable, allowing you to eat, brush, and floss normally.",
    benefits: [
      "Virtually invisible - align your teeth discreetly",
      "Removable for eating, drinking, and oral hygiene",
      "No food restrictions or painful wire tightenings",
      "Fewer clinic visits compared to traditional braces"
    ],
    procedure: [
      "3D Digital Scan: A comfortable scan of your mouth replaces messy impressions.",
      "Treatment Planning: We generate a step-by-step movement plan showing your future smile.",
      "Custom Aligner Sets: You receive custom aligners, to be swapped every 10-14 days.",
      "Retention: Retainers are provided to maintain your new teeth alignment."
    ],
    faqs: [
      {
        question: "How many hours a day do I need to wear aligners?",
        answer: "For optimal results, aligners must be worn for 20 to 22 hours daily. You should only remove them when eating, drinking anything other than water, brushing, and flossing."
      },
      {
        question: "Is aligner treatment suitable for adults?",
        answer: "Absolutely. Invisible aligners are highly popular among adults and working professionals who prefer a subtle, orthodontic solution."
      }
    ],
    priceRange: "₹60,000 - ₹1,50,000"
  },
  {
    id: "braces",
    title: "Braces Treatment",
    slug: "braces-treatment",
    iconName: "TextAlignJustify",
    shortDescription: "Metal, ceramic and self-ligating braces by specialist orthodontists.",
    fullDescription: "Orthodontic braces are highly effective for correcting moderate to severe crowding, spacing, and bite issues in patients of all ages. We offer a full range of orthodontic solutions, including traditional metal brackets, aesthetic tooth-colored ceramic braces, and modern self-ligating braces that reduce friction and shorten treatment duration.",
    benefits: [
      "Corrects complex alignment and severe bite issues",
      "Improves long-term jaw joint health and oral hygiene",
      "Options range from cost-effective metal to aesthetic ceramic",
      "Specialist-driven orthodontic care for kids and adults"
    ],
    procedure: [
      "Clinical Examination & Cephalometric X-rays: Complete facial and bite analysis.",
      "Braces Bonding: Brackets are safely bonded to the teeth and connected via archwires.",
      "Monthly Adjustments: Tightening and wire adjustments to guide tooth movement.",
      "Debonding & Retainers: Removal of brackets followed by placement of retainers."
    ],
    faqs: [
      {
        question: "How long does braces treatment take?",
        answer: "The active treatment phase typically ranges from 12 to 24 months, depending on the complexity of the bite correction and individual biological responses."
      },
      {
        question: "Do ceramic braces stain?",
        answer: "The ceramic brackets themselves do not stain. However, the clear elastic bands holding the wire can dislodge or discolor from dark foods (turmeric, coffee) but are replaced at each monthly visit."
      }
    ],
    priceRange: "₹35,000 - ₹75,000"
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    iconName: "Sun",
    shortDescription: "In-clinic Zoom whitening for instant, lasting brightness - up to 8 shades lighter.",
    fullDescription: "Professional Teeth Whitening is a quick, safe, and highly effective cosmetic procedure designed to remove deep stains and discoloration from your enamel. Using the advanced Philips Zoom system in-clinic, we activate a professional-grade bleaching gel with a specialized light to brighten your smile up to 8 shades in just one hour.",
    benefits: [
      "Instant results in a single, 60-minute visit",
      "Up to 8 shades lighter teeth with Zoom technology",
      "Safe formulation with minimal sensitivity",
      "Custom take-home kits for maintaining brightness"
    ],
    procedure: [
      "Preparation: Clean teeth and record the initial shade.",
      "Gingival Protection: Apply a protective barrier to guard gums and lips.",
      "Gel Application: Apply professional-grade hydrogen peroxide whitening gel.",
      "Light Activation: Laser/UV light exposure to accelerate stain breakdown (3 cycles of 15 min).",
      "Fluoride Treatment: Apply desensitizing fluoride gel to protect enamel."
    ],
    faqs: [
      {
        question: "Does teeth whitening damage the enamel?",
        answer: "No. Professional, dentist-supervised whitening uses tested concentrations that safely penetrate surface stains without compromising enamel integrity."
      },
      {
        question: "How long do whitening results last?",
        answer: "Whitening results typically last between 1 to 2 years, depending on your lifestyle (diet, smoking, coffee/tea consumption) and oral hygiene habits."
      }
    ],
    priceRange: "₹8,000 - ₹15,000"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    iconName: "Gem",
    shortDescription: "Veneers, bonding and contouring for a flawless camera-ready smile.",
    fullDescription: "Cosmetic dentistry focuses on enhancing the aesthetics of your smile. We provide a full range of subtle modifications to dramatically improve your teeth. Our services include dental bonding to patch small chips, enamel contouring to smooth rough tooth edges, and tooth-colored composite restorations to replace unsightly metallic fillings.",
    benefits: [
      "Restores minor imperfections like chips, cracks, and wear",
      "Enamel contouring delivers immediate smoothing results",
      "Highly affordable cosmetic enhancements in a single visit",
      "Natural-looking materials that blend seamlessly"
    ],
    procedure: [
      "Examination: Locate enamel defects or old fillings.",
      "Material Choice: Match composite shade to neighboring teeth.",
      "Bonding/Contouring: Layer composite material, shape with precision, and cure with UV light.",
      "Polishing: Smooth out restorations to match the natural shine of your teeth."
    ],
    faqs: [
      {
        question: "What is dental bonding?",
        answer: "Dental bonding is a procedure where a composite resin material (tooth-colored plastic) is applied and hardened with a special light to repair a chipped or decayed tooth."
      },
      {
        question: "Is dental bonding reversible?",
        answer: "Yes, dental bonding does not require significant removal of natural enamel, making it a conservative and reversible option compared to veneers or crowns."
      }
    ],
    priceRange: "₹2,500 - ₹6,000 per tooth"
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    iconName: "Baby",
    shortDescription: "Gentle, child-friendly dental care in a fear-free environment.",
    fullDescription: "Our pediatric services are designed to protect your child's primary teeth, monitor jaw development, and build positive, lifelong oral health habits. We offer routine cleanings, preventive fluoride applications, dental sealants to prevent cavities in deep grooves, and gentle tooth extractions, all delivered in a friendly, anxiety-free setting.",
    benefits: [
      "Specialized, gentle dental care designed for infants and children",
      "Preventive sealants and fluoride to stop decay before it starts",
      "Interactive, fun environment to eliminate dental fear",
      "Monitoring jaw growth to catch orthodontic issues early"
    ],
    procedure: [
      "Friendly Meet-and-Greet: Acclimatize the child to the dental chair and tools.",
      "Gentle Examination & Cleaning: Clean teeth and check for development milestones.",
      "Preventive Sealants: Painless application of thin coating on chewing surfaces of molars.",
      "Fluoride Treatment: Quick application of flavored fluoride varnish."
    ],
    faqs: [
      {
        question: "When should my child visit the dentist for the first time?",
        answer: "We recommend scheduling your child's first dental visit by their first birthday, or within six months after their first primary tooth erupts."
      },
      {
        question: "What are dental sealants?",
        answer: "Sealants are thin, protective plastic coatings applied to the chewing surfaces of the back teeth (molars) to seal out food particles and cavity-causing bacteria."
      }
    ],
    priceRange: "₹1,500 - ₹4,000"
  },
  {
    id: "crowns",
    title: "Crowns & Bridges",
    slug: "crowns-and-bridges",
    iconName: "Crown",
    shortDescription: "Premium zirconia and E-max crowns crafted for strength and aesthetics.",
    fullDescription: "Crowns and bridges are fixed prosthetic restorations used to rebuild damaged, fractured, or missing teeth. A dental crown caps a single damaged tooth to restore its strength, while a bridge spans the space left by one or more missing teeth, supported by adjacent healthy teeth. We offer premium metal-free zirconia and E-max ceramic restorations for durability and aesthetics.",
    benefits: [
      "Restores structural strength and function to broken teeth",
      "Metal-free ceramic options look identical to natural enamel",
      "Prevents neighboring teeth from shifting out of position",
      "Bridges provide a stable, fixed tooth replacement option"
    ],
    procedure: [
      "Tooth Preparation: Trim the damaged tooth to make space for the crown.",
      "Digital Scan: Take high-definition scans to map the shape and bite.",
      "Temporary Crown: Fit a temporary tooth while the permanent crown is fabricated.",
      "Cementation: The custom zirconia/E-max crown is permanently bonded with adhesive cement."
    ],
    faqs: [
      {
        question: "What is the difference between a crown and a bridge?",
        answer: "A crown is a custom cap that covers a single tooth. A bridge is a restoration that replaces one or more missing teeth by anchoring to the adjacent natural teeth on either side."
      },
      {
        question: "How long do zirconia crowns last?",
        answer: "Zirconia is exceptionally strong and bio-compatible. With appropriate hygiene and checkups, zirconia crowns can easily last 15-20 years or more."
      }
    ],
    priceRange: "₹6,000 - ₹18,000 per unit"
  },
  {
    id: "rehab",
    title: "Full Mouth Rehabilitation",
    slug: "full-mouth-rehabilitation",
    iconName: "Stethoscope",
    shortDescription: "Complete oral reconstruction combining implants, crowns and aesthetic dentistry.",
    fullDescription: "Full Mouth Rehabilitation is a comprehensive restorative treatment designed for patients with extensive dental issues, such as missing teeth, worn dentition from grinding, advanced decay, or bite collapse. Combining implants, bridges, crowns, and cosmetic dentistry, we rebuild your entire smile to restore full function, comfort, and aesthetics.",
    benefits: [
      "Reconstructs your entire oral system for complete function",
      "Restores appropriate bite height and relieves jaw joint pain (TMJ)",
      "Combines aesthetics and implantology for a complete transformation",
      "Improves nutritional intake and overall physical well-being"
    ],
    procedure: [
      "Comprehensive TMJ & Diagnostic Phase: Complete records, scans, and bite registration.",
      "Treatment Simulation: Build a physical mock-up of the proposed bite and aesthetics.",
      "Phase-wise Restoration: Execute extractions, place implants, and fit temporary crowns.",
      "Final Restoration: Fit permanent zirconia crowns, bridges, or implant-supported dentures."
    ],
    faqs: [
      {
        question: "Who needs Full Mouth Rehabilitation?",
        answer: "This is recommended for patients with multiple missing teeth, severe wear throughout the mouth, chronic jaw pain related to bite, or advanced decay affecting almost all teeth."
      },
      {
        question: "How long does full mouth reconstruction take?",
        answer: "Due to the complex nature of rebuilding the bite, the process is completed in phases and can take anywhere from 3 to 9 months."
      }
    ],
    priceRange: "₹2,00,000 - ₹5,00,000"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "rahul",
    name: "Dr. Rahul",
    role: "Clinical Director & Chief Implantologist",
    credentials: "BDS, MDS (Prosthodontics & Implantology)",
    experience: "15+ Years",
    specialization: ["Dental Implants", "Full Mouth Rehabilitation", "Aesthetic Dentistry"],
    bio: "With over 15 years of clinical excellence and a passion for aesthetic and restorative dentistry, Dr. Rahul has transformed thousands of smiles across Gurugram. He specializes in computer-guided implant surgeries and advanced prosthodontics, providing patients with highly precise, customized care.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "priya",
    name: "Dr. Priya Sharma",
    role: "Senior Endodontist & Root Canal Specialist",
    credentials: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experience: "10+ Years",
    specialization: ["Microscopic Root Canals", "Rotary Endodontics", "Aesthetic Restorations"],
    bio: "Dr. Priya Sharma is a certified senior endodontist specializing in pain-free, single-sitting root canals. She utilizes modern dental operating microscopes to achieve extreme precision, ensuring maximum comfort and preservation of natural tooth structures.",
    imageUrl: "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "amit",
    name: "Dr. Amit Verma",
    role: "Consultant Orthodontist & Dentofacial Orthopedics",
    credentials: "BDS, MDS (Orthodontics)",
    experience: "12+ Years",
    specialization: ["Invisible Aligners", "Self-Ligating Braces", "Adult Orthodontics"],
    bio: "Dr. Amit Verma is a certified invisible aligner specialist. He focuses on modern orthodontic techniques for children, teens, and adults, helping them achieve straight teeth and healthy bites with aesthetic, comfortable, and fast orthodontic solutions.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "neha",
    name: "Dr. Neha Gupta",
    role: "Pediatric Dentist (Pedodontist)",
    credentials: "BDS, MDS (Pedodontics & Preventive Dentistry)",
    experience: "8+ Years",
    specialization: ["Child Dentistry", "Preventive Sealants & Cavity Control", "Dental Care under Sedation"],
    bio: "Dr. Neha Gupta is a pediatric specialist who brings a gentle and playful approach to kids' dental care. She specializes in managing dental anxiety in children, preventive cavity control, and pediatric dental restorations, ensuring a fun and fear-free experience.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Priya Sharma",
    treatment: "Smile Makeover",
    rating: 5,
    text: "Got my smile makeover done by Dr. Rahul, and the results are amazing. I feel so much more confident now! The digital preview helped me understand exactly how it would look beforehand. The entire team was professional and the clinic is spotless.",
    avatarText: "PS"
  },
  {
    id: "review-2",
    name: "Vikram Aditya",
    treatment: "Dental Implants",
    rating: 5,
    text: "I was extremely anxious about getting an implant, but Dr. Rahul made it completely pain-free and comfortable. The technology used is top-notch. It's been six months now, and the implant feels exactly like my natural tooth. Highly recommend this clinic!",
    avatarText: "VA"
  },
  {
    id: "review-3",
    name: "Sneha Reddy",
    treatment: "Invisible Aligners",
    rating: 5,
    text: "Extremely happy with my clear aligners treatment here. It was completely discreet and comfortable, and my teeth are now perfectly straight. Dr. Amit Verma explained the process in detail and the virtual setups were spot on.",
    avatarText: "SR"
  },
  {
    id: "review-4",
    name: "Rohit Malhotra",
    treatment: "Root Canal Treatment",
    rating: 5,
    text: "Had a severe toothache and visited the clinic for a root canal. Dr. Priya performed a single-sitting RCT, and I felt absolutely no pain during or after the procedure. The microscopic RCT equipment and her gentle technique are incredible.",
    avatarText: "RM"
  },
  {
    id: "review-5",
    name: "Manpreet Singh",
    treatment: "Full Mouth Rehab",
    rating: 5,
    text: "Dr. Rahul rebuilt my entire teeth structure which was worn out due to years of grinding. The treatment was phased out over four months, and now I can chew comfortably and my jaw pain is completely gone. Incredible clinical expertise!",
    avatarText: "MS"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer emergency dental appointments?",
    answer: "Yes, we prioritize same-day appointments for dental emergencies, including severe toothaches, broken restorations, facial swelling, or dental trauma. Please call us directly."
  },
  {
    question: "Are dental treatments painful?",
    answer: "We employ advanced pain-free dentistry techniques, including micro-fine local anesthesia and modern endodontic rotary files. Most patients experience no discomfort during procedures."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend scheduling a routine checkup and professional cleaning every six months to prevent cavities, monitor gum health, and catch potential issues early."
  },
  {
    question: "What safety and sterilization protocols do you follow?",
    answer: "We follow strict hospital-grade sterilization guidelines. This includes using Class B autoclaves, disposable single-use instrument kits, surface chemical disinfection, and HEPA air filtration."
  },
  {
    question: "What payment options and treatment plans do you offer?",
    answer: "We provide detailed written estimates upfront with no hidden costs. We accept credit cards, UPI, net banking, and offer monthly installment options (EMI) for extensive treatments."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Clinic Reception",
    category: "clinic",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-2",
    title: "Advanced Operatory Room",
    category: "clinic",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-3",
    title: "Microscopic Dental Equipment",
    category: "technology",
    imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-4",
    title: "Computer-Guided Implant Setup",
    category: "technology",
    imageUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-5",
    title: "Smile Design Veneers",
    category: "treatment",
    imageUrl: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "gal-6",
    title: "Clear Aligner Scanning",
    category: "treatment",
    imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Full Smile Makeover with Ceramic Veneers",
    beforeUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop", // Placeholder tooth image
    afterUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" // Placeholder tooth image
  },
  {
    id: "ba-2",
    title: "Full Smile Makeover with Metal Braces",
    beforeUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop", // Placeholder tooth image
    afterUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" // Placeholder tooth image
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "5 Tips to Keep Your Gums Healthy and Prevent Disease",
    slug: "tips-keep-gums-healthy",
    excerpt: "Gum health is just as important as healthy teeth. Read our dentist-approved tips to prevent gingivitis and maintain a fresh, clean mouth.",
    content: `
      Gum health is often overlooked, yet it is a critical component of overall oral hygiene and general wellness. Gum disease, or periodontal disease, can cause issues ranging from simple swelling and bleeding to tooth loss and systemic issues like heart conditions. Fortunately, maintaining healthy gums is highly straightforward with the right daily habits.

      Here are 5 dentist-approved tips to ensure your gums remain firm, pink, and healthy:

      1. Brush Correctly (and Don't Skip the Gumline)
      Use a soft-bristled brush. Hold it at a 45-degree angle pointing toward your gum line. Gently move the brush back and forth in short, circular strokes. Brushing too hard can damage the gums, causing them to recede.

      2. Floss Daily
      Brushing only cleans about 60% of tooth surfaces. Plaque and food debris trapped between teeth can only be removed by flossing. Flossing daily prevents plaque buildup along the gumline, which is the primary cause of gingivitis.

      3. Rinse with Therapeutic Mouthwash
      Antiseptic mouthwashes help kill bacteria that cause plaque and gum disease. Look for ADA-approved alcohol-free rinses that contain active ingredients like chlorhexidine or essential oils.

      4. Stay Hydrated and Eat a Balanced Diet
      Water washes away food residue and maintains high saliva flow, which naturally fights mouth bacteria. Incorporate vitamins C and D (citrus fruits, leafy greens, dairy) to strengthen your gum tissues.

      5. Schedule Dental Cleanings Every Six Months
      Even with excellent home care, tartar will build up over time. Only a dental hygienist or dentist can safely remove tartar using ultrasonic scalers. Regular professional cleanings are your best defense against gum disease.
    `,
    date: "July 12, 2026",
    author: "Dr. Rahul",
    readTime: "5 min read",
    category: "Oral Hygiene",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "post-2",
    title: "Why Choose Clear Aligners Over Metal Braces?",
    slug: "why-choose-clear-aligners",
    excerpt: "Discover the cosmetic and clinical advantages of invisible aligners, and why they have become the preferred orthodontic choice for adults.",
    content: `
      Orthodontic treatment has evolved dramatically over the last few decades. The days when metal brackets and wires were the only options to correct crooked teeth are gone. Today, invisible clear aligners offer a highly effective, comfortable, and aesthetically superior alternative.

      If you are considering orthodontic correction, here are the key reasons why clear aligners could be the ideal choice for you:

      1. Near Invisibility
      The most prominent benefit of clear aligners is their appearance. Made from clear medical-grade polymer, aligners fit snugly over your teeth and are virtually unnoticeable during conversations, making them highly popular for working professionals.

      2. Complete Removability
      Traditional braces are bonded to your teeth for 1-2 years. Aligners can be popped out whenever you eat, drink, brush, or floss. This means zero food restrictions (you can eat popcorn, apples, and nuts without worry) and superior oral hygiene.

      3. Enhanced Comfort
      Metal braces can cause painful irritation to your lips, cheeks, and tongue due to sharp brackets. Clear aligners have smooth, rounded edges that do not scratch soft tissues, and they apply gentler forces.

      4. Fewer Clinic Visits
      With metal braces, you must visit your orthodontist every 4 weeks to adjust wires. Clear aligners are supplied in sets, and you swap them at home every 10 to 14 days, needing only occasional checkups every 6-8 weeks to monitor progress.

      At Absolute Dental Clinic, we utilize custom-engineered aligner systems to ensure rapid, highly predictable results for your smile. Contact us today to schedule your 3D scan!
    `,
    date: "June 28, 2026",
    author: "Dr. Amit Verma",
    readTime: "4 min read",
    category: "Orthodontics",
    imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "post-3",
    title: "Understanding Dental Implants: Procedures, Recovery, and Costs",
    slug: "understanding-dental-implants",
    excerpt: "Learn what to expect during a dental implant procedure, the recovery timeline, and why it is the best investment for missing teeth.",
    content: `
      Replacing missing teeth is vital not only for your smile's aesthetics but also for your oral function and jawbone integrity. A dental implant is the closest replica of a natural tooth available in modern dentistry. Here is your complete guide to understanding what to expect during the implant journey.

      1. What is a Dental Implant?
      An implant consists of three parts:
      - The Post: A small titanium cylinder surgically placed inside the jawbone, acting as a tooth root.
      - The Abutment: A connector screw placed on the post.
      - The Crown: The custom tooth restoration (zirconia or porcelain) fitted to the abutment.

      2. The Step-by-Step Procedure
      - Diagnostics: A 3D CBCT scan measures bone structure and maps safe placement pathways.
      - Surgical Placement: The implant is placed under local anesthesia. The procedure takes under an hour per implant.
      - Osseointegration: Over the next 3-4 months, the implant post fuses with your jawbone, forming a rock-solid anchor.
      - Custom Crown: Once fused, an abutment is attached, and a custom crown is cemented or screwed in.

      3. Recovering from Implant Surgery
      Post-operative recovery is surprisingly mild. Most patients report that getting an implant involves less discomfort than a tooth extraction. Mild swelling and soreness can last 3-5 days and are managed easily with prescribed anti-inflammatory medications.

      4. The Lifetime Cost and Investment Value
      While implants require a higher upfront cost than dental bridges or dentures, they are the most cost-effective long-term choice. Bridges damage adjacent healthy teeth, and dentures require frequent adjustments and replacements. Implants require no special maintenance, preserve your jawbone, and are built to last a lifetime.

      Schedule a consultation with Dr. Rahul to find out if you have sufficient bone density for a guided implant procedure.
    `,
    date: "June 15, 2026",
    author: "Dr. Rahul",
    readTime: "6 min read",
    category: "Implantology",
    imageUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=800&auto=format&fit=crop"
  }
];
