import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Crown, 
  Waves, 
  Dumbbell, 
  Utensils, 
  ShieldCheck, 
  Wifi, 
  Car, 
  Sparkles, 
  Users, 
  Plane, 
  Phone, 
  MapPin, 
  PhoneCall,
  CheckCircle,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-forest/95 shadow-xl py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-gold">MAGHAZ</span> 
          <span className="text-white font-light">ROYAL</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white/80 hover:text-gold transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#booking" className="bg-gold hover:bg-gold-dark text-white px-6 py-2.5 rounded font-bold text-xs tracking-widest transition-all">
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-forest border-t border-white/10 p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-gold text-sm uppercase tracking-widest py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="bg-gold text-white text-center py-3 rounded font-bold uppercase tracking-widest text-xs">
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <header className="relative h-screen flex items-center justify-center text-center text-white hero-gradient px-6 overflow-hidden">
    <div className="relative z-10 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6 text-gold">
          <Crown size={64} strokeWidth={1} />
        </div>
        <h1 className="font-serif text-5xl md:text-8xl mb-6 font-bold leading-tight">
          Refined Luxury in <br/><span className="text-gold italic font-medium">Tamale</span>
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Experience the crown jewel of Northern Ghana hospitality. <br className="hidden md:block"/>
          Elegance, privacy, and tradition in the heart of Kanvili.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="#rooms" className="w-full sm:w-auto bg-gold hover:bg-gold-dark px-12 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            VIEW SUITES
          </a>
          <a href="#gallery" className="w-full sm:w-auto border border-white hover:bg-white hover:text-forest px-12 py-4 rounded-full font-bold transition-all">
            DISCOVER THE STORY
          </a>
        </div>
      </motion.div>
    </div>
  </header>
);

const BookingStrip = () => (
  <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-6 items-end"
    >
      <div className="space-y-1.5">
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Arrival Date</label>
        <input type="date" className="w-full p-2.5 border rounded-lg border-gray-100 focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm" />
      </div>
      <div className="space-y-1.5">
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Departure Date</label>
        <input type="date" className="w-full p-2.5 border rounded-lg border-gray-100 focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm" />
      </div>
      <div className="space-y-1.5">
        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Guests</label>
        <select className="w-full p-2.5 border rounded-lg border-gray-100 focus:outline-none focus:ring-2 focus:ring-gold/30 text-sm">
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3+ Guests</option>
        </select>
      </div>
      <button className="bg-forest text-gold font-bold py-3.5 rounded-xl hover:bg-black transition-colors tracking-widest text-xs">
        CHECK AVAILABILITY
      </button>
    </motion.div>
  </div>
);

const About = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs italic mb-4 block">Our Story</span>
      <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-8 text-forest">A Legacy of <br/>Northern Comfort</h2>
      <p className="text-gray-600 leading-relaxed mb-8 text-lg">
        Located in the prestigious Kanvili neighborhood of Tamale, Maghaz Royal Hotel offers an unmatched blend of traditional Ghanaian warmth and contemporary luxury. 
      </p>
      <p className="text-gray-600 leading-relaxed mb-10">
        We cater to the discerning traveler who values privacy, security, and world-class service. From our crystal-clear pool to our royal dining hall, every detail is crafted for your rest.
      </p>
      <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-10">
        <div><h4 className="text-4xl font-bold text-forest">50+</h4><p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Suites</p></div>
        <div><h4 className="text-4xl font-bold text-forest">5★</h4><p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Rating</p></div>
        <div><h4 className="text-4xl font-bold text-forest">24/7</h4><p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">Service</p></div>
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" alt="Hotel Interior" className="w-full h-full object-cover" />
      </div>
      <div className="absolute -bottom-10 -left-10 bg-forest text-gold-light p-10 rounded-2xl hidden md:block shadow-2xl border border-white/5">
        <p className="font-serif text-3xl mb-1 italic">"The Best in Tamale"</p>
        <p className="text-xs uppercase tracking-widest font-bold opacity-60">- Travel Ghana Weekly</p>
      </div>
    </motion.div>
  </section>
);

const Amenities = () => {
  const ams = [
    { icon: <Waves size={32} />, name: 'Crystal Pool' },
    { icon: <Dumbbell size={32} />, name: 'Fitness Gym' },
    { icon: <Utensils size={32} />, name: 'Fine Dining' },
    { icon: <ShieldCheck size={32} />, name: '24/7 Security' },
    { icon: <Wifi size={32} />, name: 'High-Speed WiFi' },
    { icon: <Car size={32} />, name: 'Secure Parking' },
    { icon: <Sparkles size={32} />, name: 'Luxury Spa' },
    { icon: <Users size={32} />, name: 'Conferences' },
    { icon: <Plane size={32} />, name: 'Airport Pick-up' },
  ];

  return (
    <section id="amenities" className="py-24 bg-forest text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">World-Class Facilities</h2>
          <div className="h-0.5 w-24 bg-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {ams.map((am, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-10 bg-white/5 rounded-3xl hover:bg-white/10 transition-all border border-white/5 hover:border-gold/30 group"
            >
              <div className="text-gold group-hover:scale-110 transition-transform mb-6">
                {am.icon}
              </div>
              <h3 className="text-lg font-medium tracking-wide">{am.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Rooms = () => {
  const suites = [
    {
      name: "Standard Room",
      desc: "Queen bed, City view, Mini-bar, Smart TV",
      price: "450",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Deluxe Suite",
      desc: "King bed, Private Balcony, Lounge area, Breakfast",
      price: "750",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      name: "Royal Penthouse",
      desc: "Panoramic view, Jacuzzi, Private dining, Personal butler",
      price: "1,500",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="rooms" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Accommodation</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest">Suites & Sanctuaries</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {suites.map((room, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${room.featured ? 'ring-2 ring-gold relative' : ''}`}
          >
            {room.featured && <div className="absolute top-6 left-6 z-10 bg-gold text-white text-[10px] px-4 py-1.5 rounded-full uppercase font-black tracking-widest shadow-lg">Our Best Value</div>}
            <div className="h-72 overflow-hidden">
              <img src={room.img} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-3 text-forest">{room.name}</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{room.desc}</p>
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pricing</span>
                  <span className="text-2xl font-bold text-forest">GH₵ {room.price} <span className="text-xs font-normal opacity-40">/ night</span></span>
                </div>
                <a href="#booking" className="text-gold hover:text-gold-dark font-black tracking-widest text-xs flex items-center gap-1 group/btn">
                  BOOK <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Dining = () => (
  <section id="dining" className="py-24 bg-gray-100 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
      <div className="lg:w-1/2 relative">
        <motion.div
           initial={{ opacity: 0, rotate: -3 }}
           whileInView={{ opacity: 1, rotate: 0 }}
           viewport={{ once: true }}
           className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto"
        >
          <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Dining" />
        </motion.div>
        <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 hidden xl:block">
           <div className="bg-gold p-8 rounded-2xl shadow-2xl text-white transform rotate-3">
              <p className="font-serif text-2xl italic">"Authentic Jollof"</p>
           </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block italic">Royal Cuisine</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-8 text-forest">A Taste of Tamale</h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          From the fresh catch of the Volta to the spices of the North, our chefs create royalty on every plate. Enjoy traditional favorites in a setting of gold and greenery.
        </p>
        <div className="space-y-8">
          {[
            { name: "Spicy Tilapia & Banku", desc: "Fresh river catch, oak-grilled to perfection", price: "85" },
            { name: "Maghaz Royal Jollof", desc: "Secret spice blend with grilled local poultry", price: "65" },
            { name: "Continental Breakfast", desc: "House pastries, organic eggs, fresh garden juices", price: "50" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-between items-end border-b border-gray-300 pb-4 group"
            >
              <div>
                <h4 className="font-bold text-xl text-forest group-hover:text-gold transition-colors">{item.name}</h4>
                <p className="text-sm text-gray-500 mt-1 italic tracking-wide">{item.desc}</p>
              </div>
              <span className="text-gold font-bold text-lg">GH₵ {item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="booking" className="py-24 px-6 bg-white relative">
      <div className="max-w-5xl mx-auto bg-forest shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        <div className="lg:w-[40%] bg-white/5 p-12 lg:p-16 text-white border-r border-white/5">
          <h3 className="font-serif text-4xl font-bold mb-8 text-gold">Reserve Your Table or Stay</h3>
          <p className="text-sm text-gold-light/60 mb-12 leading-relaxed">
            Our concierge is ready to prepare your royal welcome. For instant assistance, please reach out via phone.
          </p>
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-full text-gold group-hover:bg-gold group-hover:text-forest transition-all">
                <Phone size={20} />
              </div>
              <a href="tel:0502055555" className="text-lg font-medium hover:text-gold transition-colors tracking-tight font-serif italic text-white/90">050 205 5555</a>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 rounded-full text-gold group-hover:bg-gold group-hover:text-forest transition-all">
                <MapPin size={20} />
              </div>
              <span className="text-white/80 text-sm tracking-widest font-bold uppercase">Kanvili, Tamale</span>
            </div>
          </div>
        </div>

        <div className="p-12 lg:p-16 lg:w-[60%] bg-white">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="font-serif text-3xl font-bold text-forest">Request Received</h3>
              <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">We will call you shortly to confirm the details of your stay.</p>
              <button onClick={() => setSubmitted(false)} className="text-gold font-black uppercase tracking-[0.2em] text-[10px] hover:text-forest transition-colors">Submit Another</button>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Full Name</label>
                  <input required type="text" className="w-full border-b-2 border-gray-100 py-2 focus:border-gold focus:outline-none transition-all placeholder:text-gray-200" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Email Address</label>
                  <input required type="email" className="w-full border-b-2 border-gray-100 py-2 focus:border-gold focus:outline-none transition-all placeholder:text-gray-200" placeholder="hello@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Phone Number</label>
                  <input required type="tel" className="w-full border-b-2 border-gray-100 py-2 focus:border-gold focus:outline-none transition-all placeholder:text-gray-200" placeholder="050 000 0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Room Selection</label>
                  <select className="w-full border-b-2 border-gray-100 py-2 focus:border-gold focus:outline-none transition-all bg-transparent">
                    <option>Standard Room</option>
                    <option>Deluxe Suite</option>
                    <option>Royal Penthouse</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Special Requests</label>
                <textarea rows={2} className="w-full border-b-2 border-gray-100 py-2 focus:border-gold focus:outline-none transition-all resize-none placeholder:text-gray-200" placeholder="Dietary needs, airport pick-up details..."></textarea>
              </div>
              <button type="submit" className="w-full bg-forest text-gold py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all shadow-xl hover:shadow-forest/20">
                SEND RESERVATION REQUEST
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-forest text-white pt-32 pb-12 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
      <div className="space-y-6">
        <div className="text-3xl font-bold tracking-tighter">
          <span className="text-gold">MAGHAZ</span> 
          <span className="text-white font-light">ROYAL</span>
        </div>
        <p className="text-gold-light/40 text-sm leading-loose max-w-xs font-medium">
          The ultimate sanctuary in Northern Ghana. Defined by luxury, protected by excellence, and warmed by tradition.
        </p>
      </div>
      
      <div>
        <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-gold-light/60">Quick Links</h4>
        <ul className="text-sm space-y-4 font-medium">
          <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-gold transition-colors">Our History</a></li>
          <li><a href="#rooms" className="hover:text-gold transition-colors">Private Suites</a></li>
          <li><a href="#dining" className="hover:text-gold transition-colors">Dining Hall</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-gold-light/60">Concierge</h4>
        <ul className="text-sm space-y-5 font-medium">
          <li className="flex items-center gap-3">
            <PhoneCall size={16} className="text-gold" /> 
            <a href="tel:0502055555" className="hover:text-gold transition-colors">050 205 5555</a>
          </li>
          <li className="flex items-center gap-3">
            <PhoneCall size={16} className="text-gold" /> 
            <a href="tel:0544668786" className="hover:text-gold transition-colors">054 466 8786</a>
          </li>
          <li className="flex items-center gap-3">
            <PhoneCall size={16} className="text-gold" /> 
            <a href="tel:0203537777" className="hover:text-gold transition-colors">020 353 7777</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-gold-light/60">The Location</h4>
        <p className="text-sm leading-loose text-white/70 font-medium">
          Plot AB/22 Kanvili Estates<br/>
          Tamale, Northern Region<br/>
          Ghana, West Africa
        </p>
        <p className="text-[10px] mt-6 text-gold font-black uppercase tracking-widest">Always Open 24/7</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 flex flex-col md:row justify-between items-center gap-6">
      <p className="text-[11px] text-white/30 uppercase tracking-[0.3em] font-medium">&copy; 2026 Maghaz Royal Hotel. Excellence in Northern Ghana.</p>
      <div className="flex gap-8 text-[11px] uppercase tracking-widest font-black text-white/40">
        <a href="#" className="hover:text-gold">Privacy</a>
        <a href="#" className="hover:text-gold">Terms</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="antialiased selection:bg-gold/30">
      <Navbar />
      <main>
        <Hero />
        <BookingStrip />
        <About />
        <Amenities />
        <Rooms />
        <Dining />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
