import React, { useState, useEffect } from 'react';

const TravelBlogVlog = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [expandedPost, setExpandedPost] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    // Sample data focused on Rajasthan cities
    const content = {
        personal: [
            {
                id: 1,
                title: "Jaipur's Hidden Blue Pottery Workshops",
                excerpt: "Discovering ancient craft techniques in Sanganer...",
                content: "Beyond Jaipur's famous palaces, the blue pottery workshops of Sanganer reveal a living craft tradition. I spent days learning from 5th-generation artisans who mix quartz stone powder with gum to create their distinctive cobalt blue designs. The most fascinating part? Watching them fire pieces in traditional kilns at exactly 800°C - a temperature judged by eye alone after decades of experience.",
                date: "March 15, 2023",
                readTime: "4 min read",
                tags: ["Jaipur", "Handicrafts", "Cultural"],
                image: "https://virasatexperiences.com/wp-content/uploads/2024/09/close-up-hands-working-pottery-1.jpg",
                city: "Jaipur"
            },
            {
                id: 2,
                title: "Jodhpur's Secret Stepwells",
                excerpt: "Exploring the forgotten baoris of the Blue City...",
                content: "While everyone photographs the mighty Mehrangarh Fort, Jodhpur's ancient stepwells tell a quieter story. The Toorji Ka Jhalra, recently restored, showcases intricate carvings of elephants and deities. Locals still gather here in evenings, continuing a centuries-old tradition. Pro tip: Visit at golden hour when the blue walls make the water shimmer magically.",
                date: "April 5, 2023",
                readTime: "5 min read",
                tags: ["Jodhpur", "Architecture", "Hidden Gems"],
                image: "https://thetravelingminstrelandherbooks.com/wp-content/uploads/2024/07/448249980_10160300603054607_1285355723292006928_n.jpeg?w=1024",
                city: "Jodhpur"
            },
            {
                id: 3,
                title: "Udaipur's Sunset Boat Secrets",
                excerpt: "Beyond the usual Lake Pichola cruise...",
                content: "Every visitor takes the standard boat ride to Jag Mandir, but I discovered smaller, licensed fishermen who offer sunset trips in their traditional wooden boats. For ₹500, we glided past ghats where women beat laundry, saw kingfishers dive, and watched the City Palace turn gold - all without the crowds. The best view? From the water-facing room at Ambrai Ghat's restaurant afterward.",
                date: "October 12, 2023",
                readTime: "6 min read",
                tags: ["Udaipur", "Lake", "Sunset"],
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/72/30/7e/caption.jpg?w=500&h=400&s=1",
                city: "Udaipur"
            },
            {
                id: 4,
                title: "Jaisalmer Desert Homestay Experience",
                excerpt: "Living with a Rajasthani family near the dunes...",
                content: "Forty kilometers from Jaisalmer, I stayed with a family in their mud-and-mirror home near the Thar Desert. Days began with milky bajra porridge, followed by camel treks to isolated dunes. Nights meant storytelling under stars while rotis baked in clay ovens. The unexpected highlight? Learning traditional folk songs about desert wildlife from the grandmother.",
                date: "February 8, 2023",
                readTime: "7 min read",
                tags: ["Jaisalmer", "Desert", "Homestay"],
                image: "https://gos3.ibcdn.com/fa6e01da5f3a11edbdb10a58a9feac02.jpg",
                city: "Jaisalmer"
            }
        ],
        guest: [
            {
                id: 1,
                title: "Sawai Madhopur's Tiger Tracking",
                author: "Rajesh Patil",
                authorBio: "Wildlife photographer",
                excerpt: "Three days waiting for the perfect tiger shot...",
                content: "At Ranthambore's Zone 3, I learned tiger tracking requires infinite patience. Our guide decoded pugmarks and alarm calls from langurs. On the third morning, we found T-19 (Noor) teaching her cubs to hunt. The key? Arriving at sunrise when tigers are most active, and staying silent - the crunch of a single biscuit packet can scare them away.",
                date: "May 20, 2023",
                readTime: "8 min read",
                tags: ["Sawai Madhopur", "Ranthambore", "Wildlife"],
                image: "https://cdn-ilbnpdj.nitrocdn.com/MeekTNkgmPXxtLqaLXstkafDxhAIDsDq/assets/images/optimized/rev-bc293ef/yowydh.infiniteuploads.cloud/2023/12/BK717239-transformed.jpeg",
                city: "Sawai Madhopur"
            },
            {
                id: 2,
                title: "Jaipur's Literary Cafés",
                author: "Priya Mehta",
                authorBio: "Book blogger",
                excerpt: "Where readers and writers gather in the Pink City...",
                content: "Jaipur's café scene hides literary gems. Jawahar Kala Kendra's café hosts poetry slams every full moon. The hidden bookstore at Hotel Diggi Palace serves chai with first editions. My favorite? Bar Palladio's midnight book swaps, where travelers leave novels with handwritten notes in the margins - I found a 1972 copy of 'A Passage to India' with fascinating annotations!",
                date: "July 15, 2023",
                readTime: "5 min read",
                tags: ["Jaipur", "Cafés", "Literature"],
                image: "https://www.holidify.com/images/cmsuploads/compressed/windviewcafe_20180327144957.jpg",
                city: "Jaipur"
            },
            {
                id: 3,
                title: "Jodhpur's Clock Tower Market Secrets",
                author: "Amit Sharma",
                authorBio: "Food historian",
                excerpt: "A food lover's guide to Sardar Market...",
                content: "Beyond the usual spice stalls, Sardar Market hides culinary treasures. The 100-year-old lassi stall uses milk from a single herd of Gir cows. Look for the unmarked shop selling bajra khichda with ker sangri - a desert delicacy. Must-try: Makhaniya Lassi at Shri Mishrilal Hotel, served in clay kulhads since 1952. Arrive by 4PM before they sell out!",
                date: "September 3, 2023",
                readTime: "6 min read",
                tags: ["Jodhpur", "Food", "Market"],
                image: "https://www.tourmyindia.com/images/clock-tower3.jpg",
                city: "Jodhpur"
            },
            {
                id: 4,
                title: "Udaipur's Miniature Painting Masters",
                author: "Elena Petrov",
                authorBio: "Art conservator",
                excerpt: "Learning the 400-year-old Mewar technique...",
                content: "In a tiny studio near Jagdish Temple, I trained with National Award winner Shyamji Sharma. Authentic miniature painting uses squirrel-hair brushes, gold leaf, and pigments from lapis lazuli and malachite. The most challenging part? Painting eyelashes - a single stroke must convey emotion. My month-long apprenticeship resulted in a 3-inch Radha-Krishna that took 68 hours!",
                date: "November 12, 2023",
                readTime: "7 min read",
                tags: ["Udaipur", "Art", "Miniature"],
                image: "https://shop.gaatha.com/image/catalog/products_2019/DG18-8.jpg",
                city: "Udaipur"
            }
        ],
        videos: [
            {
                id: 1,
                title: "Jaipur's Secret Rooftop Views",
                description: "5 lesser-known spots to see the Pink City from above",
                youtubeId: "gPlkDBVXNtY",
                duration: "9:32",
                views: "156K",
                date: "3 weeks ago",
                tags: ["Jaipur", "Views", "Hidden"],
                city: "Jaipur"
            },
            {
                id: 2,
                title: "Jodhpur's Blue Alleyways",
                description: "Walking tour through the real Blue City neighborhoods",
                youtubeId: "dQw4w9WgXcQ",
                duration: "14:18",
                views: "223K",
                date: "1 month ago",
                tags: ["Jodhpur", "Walking", "Culture"],
                city: "Jodhpur"
            },
            {
                id: 3,
                title: "Udaipur's Tribal Village Visit",
                description: "Day with the Bhil tribe near Udaipur",
                youtubeId: "dQw4w9WgXcQ",
                duration: "18:45",
                views: "189K",
                date: "2 months ago",
                tags: ["Udaipur", "Tribal", "Experience"],
                city: "Udaipur"
            },
            {
                id: 4,
                title: "Jaisalmer Desert Festival",
                description: "Full experience of the 3-day cultural extravaganza",
                youtubeId: "dQw4w9WgXcQ",
                duration: "22:10",
                views: "312K",
                date: "4 months ago",
                tags: ["Jaisalmer", "Festival", "Desert"],
                city: "Jaisalmer"
            }
        ]
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleExpand = (id) => {
        setExpandedPost(expandedPost === id ? null : id);
    };

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setModalContent(null), 300);
    };

    // Filter by city
    const [selectedCity, setSelectedCity] = useState('All');
    const cities = ['All', 'Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer', 'Sawai Madhopur'];

    const filteredContent = {
        personal: selectedCity === 'All'
            ? content.personal
            : content.personal.filter(post => post.city === selectedCity),
        guest: selectedCity === 'All'
            ? content.guest
            : content.guest.filter(post => post.city === selectedCity),
        videos: selectedCity === 'All'
            ? content.videos
            : content.videos.filter(video => video.city === selectedCity)
    };

    return (
        <div className="min-h-screen py-8 px-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slower"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-200 rounded-full filter blur-3xl opacity-20 animate-pulse-medium"></div>
            </div>

            <div className="w-[90%] mx-auto">
                {/* SEO-Optimized Heading */}
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-amber-600">
                        Rajasthan Travel Stories
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover authentic experiences in Jaipur, Jodhpur, Udaipur, Jaisalmer & Sawai Madhopur
                    </p>
                </div>

                {/* City Filter - Glass Effect */}
                <div className={`mb-8 overflow-x-auto transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex w-max mx-auto rounded-xl shadow-lg bg-white/70 backdrop-blur-md p-1.5 border border-white/30">
                        {cities.map(city => (
                            <button
                                key={city}
                                onClick={() => setSelectedCity(city)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg mx-1 whitespace-nowrap transition-all duration-300 ${selectedCity === city
                                    ? 'bg-gradient-to-r from-cyan-500 to-amber-500 text-white shadow-md'
                                    : 'bg-transparent text-gray-700 hover:bg-white/50'}`}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation Tabs - Glass Effect */}
                <div className={`flex justify-center mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex overflow-x-auto rounded-xl shadow-lg bg-white/70 backdrop-blur-md p-1.5 border border-white/30">
                        <button
                            className={`px-6 py-3 font-medium text-sm md:text-base rounded-lg transition-all duration-300 ${activeTab === 'personal'
                                ? 'bg-gradient-to-r from-cyan-500 to-amber-500 text-white shadow-md'
                                : 'bg-transparent text-gray-700 hover:bg-white/50'}`}
                            onClick={() => setActiveTab('personal')}
                        >
                            Personal Journals
                        </button>
                        <button
                            className={`px-6 py-3 font-medium text-sm md:text-base rounded-lg transition-all duration-300 ${activeTab === 'guest'
                                ? 'bg-gradient-to-r from-cyan-500 to-amber-500 text-white shadow-md'
                                : 'bg-transparent text-gray-700 hover:bg-white/50'}`}
                            onClick={() => setActiveTab('guest')}
                        >
                            Guest Stories
                        </button>
                        <button
                            className={`px-6 py-3 font-medium text-sm md:text-base rounded-lg transition-all duration-300 ${activeTab === 'videos'
                                ? 'bg-gradient-to-r from-cyan-500 to-amber-500 text-white shadow-md'
                                : 'bg-transparent text-gray-700 hover:bg-white/50'}`}
                            onClick={() => setActiveTab('videos')}
                        >
                            Travel Vlogs
                        </button>
                    </div>
                </div>

                {/* Content Area - Glass Cards */}
                <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Personal Experiences */}
                    {activeTab === 'personal' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredContent.personal.length > 0 ? (
                                filteredContent.personal.map((post, index) => (
                                    <div
                                        key={post.id}
                                        className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer border border-white/30"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        onClick={() => openModal(post)}
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-amber-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                                                {post.city}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
                                                <span>{post.date}</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <h2 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">{post.title}</h2>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {post.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="bg-white/80 text-gray-800 text-xs px-2 py-1 rounded-full border border-white shadow-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                                {post.tags.length > 2 && (
                                                    <span className="bg-white/80 text-gray-800 text-xs px-2 py-1 rounded-full border border-white shadow-sm">
                                                        +{post.tags.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-cyan-600 text-sm font-medium flex items-center group/btn">
                                                Read Full Story
                                                <svg className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
                                    <p className="text-gray-500">No personal journals found for {selectedCity}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Guest Posts */}
                    {activeTab === 'guest' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredContent.guest.length > 0 ? (
                                filteredContent.guest.map((post, index) => (
                                    <div
                                        key={post.id}
                                        className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group cursor-pointer border border-white/30"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        onClick={() => openModal(post)}
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-amber-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                                                {post.city}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex justify-between items-center mb-3 text-xs text-gray-500">
                                                <span>{post.date}</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <h2 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">{post.title}</h2>
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-amber-500 mr-2 flex items-center justify-center text-white text-xs font-medium shadow-md">
                                                    {post.author.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">{post.author}</p>
                                                    <p className="text-xs text-gray-500">{post.authorBio}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {post.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="bg-white/80 text-gray-800 text-xs px-2 py-1 rounded-full border border-white shadow-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                                {post.tags.length > 2 && (
                                                    <span className="bg-white/80 text-gray-800 text-xs px-2 py-1 rounded-full border border-white shadow-sm">
                                                        +{post.tags.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-cyan-600 text-sm font-medium flex items-center group/btn">
                                                Read Full Story
                                                <svg className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
                                    <p className="text-gray-500">No guest stories found for {selectedCity}</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Video Content */}
                    {activeTab === 'videos' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredContent.videos.length > 0 ? (
                                filteredContent.videos.map((video, index) => (
                                    <div
                                        key={video.id}
                                        className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group border border-white/30"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="relative pt-[56.25%] overflow-hidden rounded-t-2xl">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                                                className="absolute top-0 left-0 w-full h-full group-hover:scale-105 transition-transform duration-500"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                title={video.title}
                                                loading="lazy"
                                            ></iframe>
                                            <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-amber-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                                                {video.city}
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">{video.title}</h3>
                                            <div className="flex justify-between text-xs text-gray-500 mb-3">
                                                <span>{video.views} views</span>
                                                <span>{video.duration}</span>
                                            </div>
                                            <p className="text-gray-600 text-xs mb-3 line-clamp-2">{video.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {video.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="bg-white/80 text-gray-800 text-xs px-2 py-1 rounded-full border border-white shadow-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                                {video.tags.length > 2 && (
                                                    <span className="bg-white/80 text-gray-800 text-xs px-2 py-1 rounded-full border border-white shadow-sm">
                                                        +{video.tags.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
                                    <p className="text-gray-500">No videos found for {selectedCity}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>


            </div>

            {/* Modal for detailed content */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/30">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
                        >
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {modalContent && (
                            <div className="p-6">
                                <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                                    <img
                                        src={modalContent.image}
                                        alt={modalContent.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-amber-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
                                        {modalContent.city}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>

                                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                                    <span>{modalContent.date}</span>
                                    <span>{modalContent.readTime}</span>
                                </div>

                                <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>

                                {modalContent.author && (
                                    <div className="flex items-center mb-6">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-amber-500 mr-3 flex items-center justify-center text-white font-medium shadow-md">
                                            {modalContent.author.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{modalContent.author}</p>
                                            <p className="text-xs text-gray-500">{modalContent.authorBio}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="prose max-w-none mb-6">
                                    <p className="text-gray-700 leading-relaxed">
                                        {modalContent.content}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {modalContent.tags.map(tag => (
                                        <span key={tag} className="bg-white/80 text-gray-800 text-xs px-3 py-1.5 rounded-full border border-white shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={closeModal}
                                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-amber-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    Close Story
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 0.5; }
                }
                @keyframes pulse-slower {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.4; }
                }
                @keyframes pulse-medium {
                    0%, 100% { opacity: 0.15; }
                    50% { opacity: 0.25; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s infinite;
                }
                .animate-pulse-slower {
                    animation: pulse-slower 8s infinite;
                }
                .animate-pulse-medium {
                    animation: pulse-medium 7s infinite;
                }
            `}</style>
        </div>
    );
};

export default TravelBlogVlog;