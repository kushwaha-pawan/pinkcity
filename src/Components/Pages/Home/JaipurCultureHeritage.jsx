import { useState, useEffect } from 'react';
import { FiCalendar, FiImage, FiMusic, FiBook, FiUsers, FiShoppingBag, FiFilm, FiX, FiMapPin, FiClock, FiArrowRight, FiHeart, FiShoppingCart, FiPhone, FiMail } from 'react-icons/fi';

const JaipurCultureHeritage = () => {
    const [activeTab, setActiveTab] = useState('festivals');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Festivals data
    const festivals = [
        {
            id: 1,
            title: 'Teej Festival',
            description: 'Celebrating monsoon with processions, swings, and traditional dances. Women dress in green attire and decorate swings with flowers.',
            image: '/images/JaipurCultureHeritage/teejfestival.jpg',
            date: 'July-August',
            location: 'City Palace & across Jaipur',
            highlights: ['Women dressed in green', 'Swing decorations', 'Traditional songs', 'Processions', 'Special sweets']
        },
        {
            id: 2,
            title: 'Gangaur',
            description: 'A festival dedicated to Goddess Gauri, marked by colorful processions and rituals performed by women for marital bliss.',
            image: '/images/JaipurCultureHeritage/gangaur.jpg',
            date: 'March-April',
            location: 'Throughout Jaipur',
            highlights: ['Women carrying pots on heads', 'Colorful processions', 'Traditional rituals', 'Idol immersion']
        },
        {
            id: 3,
            title: 'Diwali in Jaipur',
            description: 'The Pink City lights up spectacularly during the festival of lights with markets decorated and palaces illuminated.',
            image: '/images/JaipurCultureHeritage/diwali.jpg',
            date: 'October-November',
            location: 'Throughout Jaipur',
            highlights: ['City illumination', 'Fireworks', 'Family gatherings', 'Sweet exchanges', 'Market decorations']
        },
        {
            id: 4,
            title: 'Jaipur Literature Festival',
            description: 'The world\'s largest free literary festival attracting authors, thinkers and readers from across the globe.',
            image: '/images/JaipurCultureHeritage/literature.jpg',
            date: 'January',
            location: 'Diggi Palace',
            highlights: ['Author discussions', 'Book launches', 'Cultural performances', 'Workshops', 'Panel discussions']
        },
        {
            id: 5,
            title: 'Kite Festival',
            description: 'Makar Sankranti is celebrated with kite flying competitions across the city skies.',
            image: '/images/JaipurCultureHeritage/Kite_Festival.png',
            date: 'January 14',
            location: 'Rooftops across Jaipur',
            highlights: ['Kite flying competitions', 'Traditional sweets', 'Family gatherings', 'Colorful kites']
        },
        {
            id: 6,
            title: 'Elephant Festival',
            description: 'A unique celebration where decorated elephants participate in processions and games.',
            image: '/images/JaipurCultureHeritage/Elephant_Festival.png',
            date: 'March-April',
            location: 'Chaugan Stadium',
            highlights: ['Decorated elephants', 'Elephant polo', 'Cultural performances', 'Traditional games']
        },
    ];

    // Traditions data
    const traditions = [
        {
            id: 1,
            title: 'Rajasthani Hospitality',
            description: 'Atithi Devo Bhava - The guest is treated as God in Rajasthani culture. Visitors are welcomed with great respect and offered the best of everything.',
            icon: <FiUsers className="w-6 h-6" />,
            details: 'Traditional welcome with garlands, tilak, and aarti. Guests are served traditional food in silver utensils.'
        },
        {
            id: 2,
            title: 'Marriage Rituals',
            description: 'Elaborate ceremonies spanning several days with unique customs like Pithi Dastoor, Mehndi, and Pagelagni.',
            icon: <FiHeart className="w-6 h-6" />,
            details: 'Multi-day celebrations with specific rituals each day, vibrant attire, and traditional music and dance.'
        },
        {
            id: 3,
            title: 'Puppet Shows',
            description: 'Traditional Kathputli performances telling folk tales and legends through string puppets.',
            icon: <FiFilm className="w-6 h-6" />,
            details: 'Colorful puppets made from wood and cloth, accompanied by traditional folk music and storytelling.'
        },
        {
            id: 4,
            title: 'Religious Practices',
            description: 'Daily rituals and temple visits are an integral part of life, with special prayers on festivals.',
            icon: <FiBook className="w-6 h-6" />,
            details: 'Morning prayers, temple visits, fasting on specific days, and elaborate rituals during festivals.'
        },
        {
            id: 5,
            title: 'Culinary Traditions',
            description: 'Food is served in specific sequences and certain dishes are prepared for special occasions.',
            icon: <FiShoppingBag className="w-6 h-6" />,
            details: 'Traditional thali system, special dishes for festivals, and specific cooking methods passed through generations.'
        },
    ];

    // Arts data
    const arts = [
        {
            id: 1,
            title: 'Blue Pottery',
            description: 'Turquoise ceramic art with Persian influences, made from quartz and raw materials.',
            image: '/images/JaipurCultureHeritage/bluepottery.png',
            details: 'Unique to Jaipur, this art form does not use clay. Items are decorated with animal and bird motifs.'
        },
        {
            id: 2,
            title: 'Bandhani & Leheriya',
            description: 'Traditional tie-dye and wave-pattern textiles in vibrant colors.',
            image: '/images/JaipurCultureHeritage/Bandhani.png',
            details: 'Bandhani involves tying small points on fabric before dyeing. Leheriya creates wave patterns through resist-dyeing technique.'
        },
        {
            id: 3,
            title: 'Miniature Paintings',
            description: 'Intricate hand-painted artworks with natural colors depicting royal scenes and mythology.',
            image: '/images/JaipurCultureHeritage/Miniature_Paintings.png',
            details: 'Uses natural pigments, gold leaf, and fine brushes. Often depicts scenes from Krishna Leela and royal court life.'
        },
        {
            id: 4,
            title: 'Block Printing',
            description: 'Hand-block printed textiles using wooden blocks with intricate designs.',
            image: '/images/JaipurCultureHeritage/Block_Printing.png',
            details: 'Traditional patterns include floral, geometric, and animal motifs. Natural dyes like indigo and madder are used.'
        },
        {
            id: 5,
            title: 'Metal Crafts',
            description: 'Intricate brass, copper and silverware with traditional engravings.',
            image: '/images/JaipurCultureHeritage/Metal_Crafts.png',
            details: 'Includes utensils, decorative items, and jewelry with traditional motifs and fine craftsmanship.'
        },
        {
            id: 6,
            title: 'Stone Carving',
            description: 'Intricate carvings on marble and sandstone depicting deities and traditional patterns.',
            image: '/images/JaipurCultureHeritage/Stone_Carving.png',
            details: 'Traditional craft creating sculptures, decorative items, and architectural elements with hand tools.'
        },
    ];

    // Clothing data
    const clothing = [
        {
            id: 1,
            title: 'Traditional Attire for Women',
            description: 'Colorful ghagras, odhnis, and kanchlis with mirror work and embroidery.',
            image: '/images/JaipurCultureHeritage/Traditional_Attire_for_Women.png',
            details: 'Ghagras (long skirts), cholis (blouses), and odhnis (dupattas) with gota patti, mirror work, and embroidery.'
        },
        {
            id: 2,
            title: 'Traditional Attire for Men',
            description: 'Dhotis, pagris (turbans), and angarkhas in vibrant colors and fabrics.',
            image: '/images/JaipurCultureHeritage/Traditional_Attire_for_Men.jpg',
            details: 'Dhotis, pagdis (turbans), angarkhas (long coats), and jootis (footwear) in traditional styles and fabrics.'
        },
        {
            id: 3,
            title: 'Jewelry',
            description: 'Kundan, meenakari, and thewa jewelry with precious stones and intricate designs.',
            image: '/images/JaipurCultureHeritage/Jewelry.jpg',
            details: 'Traditional necklaces, earrings, bangles, and maang tikkas using Kundan, Meenakari, and Thewa techniques.'
        },
        {
            id: 4,
            title: 'Footwear',
            description: 'Traditional jootis with embroidery and mojris with curved fronts.',
            image: '/images/JaipurCultureHeritage/Footwear.jpg',
            details: 'Handcrafted leather footwear with embroidery, beads, and traditional designs for both men and women.'
        },
    ];

    // Music data
    const music = [
        {
            id: 1,
            title: 'Folk Music',
            description: 'Traditional songs celebrating seasons, festivals, and daily life with instruments like sarangi and dholak.',
            image: '/images/JaipurCultureHeritage/Folk_Music.jpg',
            details: 'Includes Maand, Panihari, and other folk genres performed at gatherings and festivals.'
        },
        {
            id: 2,
            title: 'Folk Dances',
            description: 'Ghoomar, Kalbelia, and Kathputli dances with vibrant costumes and rhythmic movements.',
            image: '/images/JaipurCultureHeritage/Folk_Dances.jpg',
            details: 'Ghoomar involves circular movements, Kalbelia has snake-like motions, and Kathputli is puppet dance.'
        },
        {
            id: 3,
            title: 'Traditional Instruments',
            description: 'Ravanahatha, sarangi, algoza, and nagada used in folk performances.',
            image: '/images/JaipurCultureHeritage/Traditional_Instruments.jpg',
            details: 'String, wind, and percussion instruments handmade by traditional craftsmen with unique sounds.'
        },
        {
            id: 4,
            title: 'Classical Music',
            description: 'Dhrupad and Hindustani classical music traditions with royal patronage history.',
            image: '/images/JaipurCultureHeritage/Classical_Music.jpg',
            details: 'Traditional ragas and compositions performed in temples, palaces, and cultural events.'
        },
    ];

    // Stories data
    const stories = [
        {
            id: 1,
            title: 'The Founding of Jaipur',
            description: 'Maharaja Sawai Jai Singh II\'s vision of a planned city based on Vastu Shastra principles.',
            image: '/images/JaipurCultureHeritage/The_Founding_of_Jaipur.jpg',
            details: 'Founded in 1727, Jaipur was one of the first planned cities of India, designed by architect Vidyadhar Bhattacharya.'
        },
        {
            id: 2,
            title: 'The Pink City',
            description: 'The story behind Jaipur\'s distinctive pink color that adorns its buildings.',
            image: '/images/JaipurCultureHeritage/The_Pink_City.jpg',
            details: 'Painted pink in 1876 to welcome Prince Albert, the color symbolizes hospitality and has been maintained since.'
        },
        {
            id: 3,
            title: 'Royal Legends',
            description: 'Stories of valor, romance, and diplomacy from Jaipur\'s royal history.',
            image: '/images/JaipurCultureHeritage/Royal_Legends.jpg',
            details: 'Tales of Maharajas and their unique contributions to art, architecture, and culture of Rajasthan.'
        },
        {
            id: 4,
            title: 'Local Folktales',
            description: 'Myths and legends passed down through generations about Jaipur\'s landmarks.',
            image: '/images/JaipurCultureHeritage/Local_Folktales.jpg',
            details: 'Folk stories about Nahargarh Fort, Jal Mahal, and other iconic structures with supernatural elements.'
        },
    ];

    // Gallery data
    const gallery = [
        {
            id: 1,
            title: 'Hawa Mahal – The Palace of Winds',
            image: '/images/TopAttractions/hawamahal.jpg',
        },
        {
            id: 2,
            title: 'Jodhpur’s Vibrant Street Markets',
            image: '/images/JaipurCultureHeritage/Jodhpur_Vibrant_Street_Markets.jpg',
        },
        {
            id: 3,
            title: 'Desert Festival of Jaisalmer',
            image: '/images/JaipurCultureHeritage/Desert_Festival_ofJaisalmer.jpg',
        },
        {
            id: 4,
            title: 'Kathputli – Traditional Rajasthani Puppetry',
            image: '/images/JaipurCultureHeritage/Kathputli_Traditional_Rajasthani_Puppetry.jpg',
        }
        ,
        {
            id: 5,
            title: 'Traditional Rajasthani Cuisine',
            image: '/images/JaipurCultureHeritage/Traditional_Rajasthani_Cuisine.jpg',
        },
        {
            id: 6,
            title: 'Amber Fort – Royal Legacy',
            image: '/images/JaipurCultureHeritage/Amber_Fort_Royal_Legacy.jpg',
        },
        {
            id: 7,
            title: 'Kalbelia – The Snake Dance',
            image: '/images/JaipurCultureHeritage/Kalbelia_The_Snake_Dance.jpg',
        },
        {
            id: 8,
            title: 'Chittorgarh Fort – The Pride of Valor',
            image: '/images/JaipurCultureHeritage/Chittorgarh_FortThe_Pride_of_Valor.jpg',
        }
        ,
    ];

    const openEventModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Tab names and icons for navigation
    const tabs = [
        { id: 'festivals', name: 'Festivals', icon: <FiCalendar className="mr-2" /> },
        { id: 'traditions', name: 'Traditions', icon: <FiBook className="mr-2" /> },
        { id: 'arts', name: 'Art & Craft', icon: <FiShoppingBag className="mr-2" /> },
        { id: 'clothing', name: 'Clothing', icon: <FiUsers className="mr-2" /> },
        { id: 'music', name: 'Music & Dance', icon: <FiMusic className="mr-2" /> },
        { id: 'stories', name: 'Local Stories', icon: <FiBook className="mr-2" /> },
        { id: 'gallery', name: 'Gallery', icon: <FiImage className="mr-2" /> },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-red-100">
            {/* Navigation Tabs */}
            <div className="container mx-auto px-4 py-8">
                <div className="rounded-xl p-2 flex overflow-x-auto mb-8 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 shadow-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center px-5 py-3 rounded-lg mx-1 whitespace-nowrap transition-all duration-300 ease-out ${activeTab === tab.id
                                ? 'bg-white text-rose-700 shadow-lg transform scale-105 font-bold ring-2 ring-amber-300'
                                : 'text-white bg-transparent hover:bg-white/20 hover:shadow-md hover:scale-105'
                                }`}
                        >
                            <span className={`transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : ''}`}>
                                {tab.icon}
                            </span>
                            <span className="ml-2">{tab.name}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className=" rounded-xl shadow-lg p-6 bg-gradient-to-br from-cyan-200 to-pink-200">
                    {/* Festivals Tab */}
                    {activeTab === 'festivals' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Traditional Festivals of Jaipur</h2>
                            <p className="text-gray-800 mb-8">Experience the vibrant celebrations that define Jaipur's cultural calendar</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {festivals.map((festival) => (
                                    <div
                                        key={festival.id}
                                        className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                                        onClick={() => openEventModal(ffestival)}
                                    >
                                        <div className="h-56 overflow-hidden">
                                            <img
                                                src={festival.image}
                                                alt={festival.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                        </div>
                                        <div className="absolute inset-0 p-5 flex flex-col justify-end">
                                            <div>
                                                <h3 className="text-white text-xl font-bold group-hover:text-amber-300 transition-colors">{festival.title}</h3>
                                                <p className="text-amber-200 mt-1">{festival.date}</p>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-amber-500 text-white text-sm font-medium px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform">
                                            Cultural
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Traditions Tab */}
                    {activeTab === 'traditions' && (
                        <div className="animate-fadeIn ">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Customs & Traditions</h2>
                            <p className="text-gray-600 mb-8">The cultural practices that have shaped Jaipur's identity</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {traditions.map((tradition) => (
                                    <div key={tradition.id} className="bg-gradient-to-br from-cyan-300 to-pink-200 p-6 rounded-xl border border-red-400 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                        <div className="text-amber-600 mx-auto mb-4 bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center transition-transform duration-300 hover:rotate-12">
                                            {tradition.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-amber-800 mb-2">{tradition.title}</h3>
                                        <p className="text-gray-700 mb-3">{tradition.description}</p>
                                        <p className="text-sm text-amber-700">{tradition.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Arts Tab */}
                    {activeTab === 'arts' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Art & Craft of Jaipur</h2>
                            <p className="text-gray-600 mb-8">The exquisite handicrafts that Jaipur is famous for</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {arts.map((art) => (
                                    <div key={art.id} className="bg-gradient-to-br from-cyan-300 to-pink-300 rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={art.image}
                                                alt={art.title}
                                                className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-bold text-amber-800 mb-2">{art.title}</h3>
                                            <p className="text-gray-700 text-sm mb-3">{art.description}</p>
                                            <p className="text-xs text-amber-700 mb-4">{art.details}</p>
                                            <button className="text-amber-600 font-semibold text-sm flex items-center hover:text-amber-700 transition-colors group">
                                                View Craft Tutorial <FiArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-gradient-to-br from-cyan-300 to-pink-100 p-8 rounded-xl border border-amber-200">
                                <h3 className="text-2xl font-bold text-amber-800 mb-4">Local Artisan Spotlight</h3>
                                <div className="flex flex-col md:flex-row gap-6 ">
                                    <div className="w-full md:w-1/3">
                                        <img
                                            src="/images/JaipurCultureHeritage/Artisan_at_work.jpg"
                                            alt="Artisan at work"
                                            className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h4 className="text-xl font-bold text-amber-800 mb-2">Meet Rajesh Sharma</h4>
                                        <p className="text-gray-700 mb-4">
                                            Fifth-generation miniature painter from Jaipur, keeping the traditional art form alive.
                                            His family has been serving the royal courts since the 18th century.
                                        </p>
                                        <button className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-2 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                                            Read Full Interview
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Clothing Tab */}
                    {activeTab === 'clothing' && (
                        <div className="animate-fadeIn b">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Traditional Clothing of Jaipur</h2>
                            <p className="text-gray-600 mb-8">Vibrant textiles and adornments that reflect Rajasthani culture</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {clothing.map((item) => (
                                    <div key={item.id} className="bg-gradient-to-br from-cyan-300 to-pink-300 rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-bold text-amber-800 mb-2">{item.title}</h3>
                                            <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                                            <p className="text-xs text-amber-700 mb-4">{item.details}</p>
                                            <button className="text-amber-600 font-semibold text-sm flex items-center hover:text-amber-700 transition-colors group">
                                                Explore Collection <FiArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-gradient-to-br from-cyan-300 to-pink-300 p-8 rounded-xl border border-amber-200">
                                <h3 className="text-2xl font-bold text-amber-800 mb-4">Textile Heritage of Jaipur</h3>
                                <p className="text-gray-800 mb-6">
                                    Jaipur has been a center for textile production for centuries, known for its block printing,
                                    tie-dye techniques, and intricate embroidery. The city's markets are filled with vibrant fabrics
                                    that showcase the skill of local artisans who have preserved these traditional methods.
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-2 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                                        Visit Textile Museums
                                    </button>
                                    <button className="border border-amber-600 text-amber-600 px-6 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300">
                                        Shopping Guide
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Music Tab */}
                    {activeTab === 'music' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Music & Dance of Rajasthan</h2>
                            <p className="text-gray-600 mb-8">Rhythmic expressions that capture the spirit of the desert</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {music.map((item) => (
                                    <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-bold text-amber-800 mb-2">{item.title}</h3>
                                            <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                                            <p className="text-xs text-amber-700 mb-4">{item.details}</p>
                                            <button className="text-amber-600 font-semibold text-sm flex items-center hover:text-amber-700 transition-colors group">
                                                Watch Performance <FiArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-10 rounded-2xl border border-amber-300 shadow-xl bg-gradient-to-br from-[#FFF3C7] via-[#FFD1DC] to-[#FDE8E4]">
                                <h3 className="text-3xl font-extrabold text-amber-900 mb-5 tracking-tight drop-shadow-sm">
                                    ✨ Experience Live Performances
                                </h3>

                                <p className="text-gray-800 text-lg leading-relaxed mb-8">
                                    Jaipur offers numerous opportunities to immerse yourself in traditional music and dance. From cultural centers to heritage hotels,
                                    enjoy mesmerizing performances of <strong>Ghoomar</strong>, <strong>Kalbelia</strong>, and other vibrant folk arts preserved for generations.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                                        🎟️ <span>Book Cultural Show</span>
                                    </button>

                                    <button className="flex items-center justify-center gap-2 border-2 border-amber-600 text-amber-700 px-6 py-3 rounded-xl hover:bg-amber-100 hover:text-amber-900 transition-all duration-300">
                                        📅 <span>Performance Schedule</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    )}

                    {/* Stories Tab */}
                    {activeTab === 'stories' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Local Stories & Legends</h2>
                            <p className="text-gray-600 mb-8">Fascinating tales from Jaipur's history and folklore</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {stories.map((story) => (
                                    <div key={story.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <div className="h-64 overflow-hidden">
                                            <img
                                                src={story.image}
                                                alt={story.title}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-xl font-bold text-amber-800 mb-2">{story.title}</h3>
                                            <p className="text-gray-700 text-sm mb-3">{story.description}</p>
                                            <p className="text-xs text-amber-700 mb-4">{story.details}</p>
                                            <button className="text-amber-600 font-semibold text-sm flex items-center hover:text-amber-700 transition-colors group">
                                                Read Full Story <FiArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-gradient-to-br from-cyan-300 via-rose-300 to-pink-400 p-10 rounded-2xl border border-amber-300 shadow-lg">
                                <h3 className="text-3xl font-extrabold text-amber-900 mb-5 drop-shadow-sm">
                                    Oral Tradition of Rajasthan
                                </h3>
                                <p className="text-gray-900 text-lg mb-8 leading-relaxed">
                                    Rajasthan has a rich tradition of oral storytelling, with bards and minstrels passing down
                                    histories, legends, and folktales through generations. These stories often feature heroic deeds,
                                    romantic tales, and moral lessons that reflect the values and culture of the region.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-gradient-to-r from-amber-600 to-rose-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                                        🎤 Storytelling Events
                                    </button>
                                    <button className="border-2 border-amber-600 text-amber-700 px-6 py-3 rounded-xl hover:bg-amber-100 hover:text-amber-900 transition-all duration-300">
                                        📚 Folklore Books
                                    </button>
                                </div>
                            </div>

                        </div>
                    )}

                    {/* Gallery Tab */}
                    {activeTab === 'gallery' && (
                        <div className="animate-fadeIn">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Visual Journey Through Jaipur</h2>
                            <p className="text-gray-600 mb-8">A collection of images capturing the essence of Jaipur's culture</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {gallery.map((item) => (
                                    <div key={item.id} className="relative group overflow-hidden rounded-lg cursor-pointer h-48 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <h3 className="text-white font-semibold">{item.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-10 rounded-2xl border border-amber-300 shadow-xl text-center bg-gradient-to-br from-[#FDE68A] via-[#FB7185] to-[#FBCFE8]">
                                <h3 className="text-3xl font-extrabold text-amber-900 mb-5 tracking-tight drop-shadow-sm">
                                    🌸 Experience Jaipur's Culture Firsthand
                                </h3>

                                <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                                    The best way to appreciate Jaipur's rich cultural heritage is to visit and experience it for yourself.
                                    From vibrant festivals to traditional crafts, the city offers a sensory feast that photographs can only begin to capture.
                                </p>

                                <button className="bg-white text-rose-600 font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
                                    🧭 Plan Your Visit to Jaipur
                                </button>
                            </div>

                        </div>
                    )}
                </div>
            </div>

            {/* Event Detail Modal */}
            {showModal && selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fadeIn">
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
                        <div className="relative">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={selectedEvent.image}
                                    alt={selectedEvent.title}
                                    className="w-full h-full object-cover rounded-t-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg text-gray-700 hover:text-rose-600 transition-colors transform hover:rotate-90 duration-300"
                            >
                                <FiX className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedEvent.title}</h3>
                            <p className="text-gray-600 mb-6">{selectedEvent.description}</p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center">
                                    <FiCalendar className="text-amber-600 mr-2" />
                                    <div>
                                        <p className="text-sm text-gray-500">Date</p>
                                        <p className="font-medium">{selectedEvent.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FiMapPin className="text-amber-600 mr-2" />
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="font-medium">{selectedEvent.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-bold text-gray-800 mb-3">Festival Highlights:</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {selectedEvent.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center">
                                            <div className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-pulse"></div>
                                            <span className="text-gray-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold py-3 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center">
                                <FiCalendar className="mr-2" />
                                Add to Calendar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Add some custom styles for animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default JaipurCultureHeritage;