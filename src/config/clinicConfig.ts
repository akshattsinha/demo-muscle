export const clinicConfig = {
  name: "Muscle Algorithm Clinic",
  rating: "5.0",
  reviewsCount: "180+",
  phone: "+91 92573 50214",
  phoneRaw: "+919257350214",
  address: "Naruka Mansion, Plot No. 4, New Sanganer Rd, near HDFC Bank, opp. Rajat Path, Ganpatpura, Mansarovar, Jaipur, Rajasthan 302020",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Muscle+Algorithm+Clinic+Mansarovar+Jaipur",
  googleMapsEmbed: "https://maps.google.com/maps?q=Muscle%20Algorithm%20Clinic,%20New%20Sanganer%20Rd,%20Mansarovar,%20Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed",
  businessHours: [
    { days: "Monday - Saturday", hours: "8:00 AM - 8:00 PM" },
    { days: "Sunday", hours: "9:00 AM - 1:00 PM" }
  ],
  whatsappTemplates: {
    consultation: "Hi, I would like to book a consultation at Muscle Algorithm Clinic.",
    fit90: "Hi, I'm interested in joining the FIT90 Program.",
    general: "Hi, I have a query regarding Muscle Algorithm Clinic's services."
  },
  whatsappLink: (template: "consultation" | "fit90" | "general") => {
    const texts = {
      consultation: "Hi, I would like to book a consultation at Muscle Algorithm Clinic.",
      fit90: "Hi, I'm interested in joining the FIT90 Program.",
      general: "Hi, I have a query regarding Muscle Algorithm Clinic's services."
    };
    return `https://wa.me/919257350214?text=${encodeURIComponent(texts[template])}`;
  },
  specialists: [
    { id: "physio", name: "Physiotherapist", doctors: ["Dr. Akshat Sinha (PT)", "Dr. R. K. Naruka (PT)"] },
    { id: "nutrition", name: "Nutritionist", doctors: ["Coach Sameer Sharma", "Dietician Neha Vyas"] },
    { id: "fitness", name: "Fitness Coach", doctors: ["Trainer Kabir Dev", "Coach Vikram Rathore"] }
  ],
  timeSlots: {
    morning: ["08:00 AM - 09:00 AM", "09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"],
    afternoon: ["12:00 PM - 01:00 PM", "02:00 PM - 03:00 PM", "03:00 PM - 04:00 PM", "04:00 PM - 05:00 PM"],
    evening: ["05:00 PM - 06:00 PM", "06:00 PM - 07:00 PM", "07:00 PM - 08:00 PM"]
  },
  services: [
    {
      id: "home-visit",
      title: "Home Visit Physio",
      icon: "Home",
      description: "Get professional, clinical-grade physiotherapy treatment in the safety and comfort of your home. Perfect for post-surgery rehab, elderly care, and acute pain management.",
      details: "Our licensed physiotherapists bring advanced therapeutic equipment right to your home, performing complete examinations and customized recovery protocols without the stress of travel."
    },
    {
      id: "site-rehab",
      title: "Physio Rehabilitation (On Site)",
      icon: "Building",
      description: "State-of-the-art clinic facilities equipped for advanced orthopedic, sports, neurological rehabilitation, and chiropractic adjustments.",
      details: "Utilizing advanced diagnostic software, electrotherapy, laser treatment, manual therapy, and target exercise modules to correct alignment and cure pain permanently."
    },
    {
      id: "online-consult",
      title: "Online Consultation",
      icon: "Video",
      description: "Interactive virtual video consultations offering personalized movement screen checks, pain analysis, self-massage drills, and exercise progression.",
      details: "Convenient global care for busy schedules. Includes digital PDF recovery roadmaps and regular WhatsApp video follow-ups."
    },
    {
      id: "nutrition",
      title: "Nutritional Guidance",
      icon: "Apple",
      description: "Science-backed nutrition plans aligned with clinical conditions (diabetes, thyroid, PCOS), weight-management targets, and muscle gain algorithms.",
      details: "Continuous weekly feedback, caloric trackers, non-restrictive diet sheets tailored to individual regional choices, and performance fueling algorithms."
    }
  ],
  educationReels: [
    {
      id: "reel-1",
      title: "Fix Hunchback Posture in 3 Easy Steps",
      description: "Correct your cervical thoracic curve caused by desk work. Simple daily thoracic extensions.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder redirect
      category: "physiotherapy",
      duration: "59s"
    },
    {
      id: "reel-2",
      title: "Is Knee Pain Caused by Tight Quads?",
      description: "Test your quad elasticity at home and learn the foam rolling technique for knee relief.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "physiotherapy",
      duration: "45s"
    },
    {
      id: "reel-3",
      title: "What to Eat Before a Workout?",
      description: "Optimize muscle glycogen synthesis with simple carbohydrates 45 mins before your gym session.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "nutrition",
      duration: "50s"
    },
    {
      id: "reel-4",
      title: "3 Exercises to Bulletproof Your Back",
      description: "Incorporate deadbugs, bird-dogs, and glute bridges into your warmups to prevent low back fatigue.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "fitness",
      duration: "60s"
    }
  ]
};
