import React from 'react';
import { useState } from 'react';

const WeekendGetaways = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const destinations = [
    {
      id: 1,
      title: "Jaipur Heritage Tour",
      location: "Jaipur, Rajasthan",
      price: 8999,
      duration: "2 days",
      image: "https://girisadanhomestay.com/wp-content/uploads/2024/07/Hawa-Mahal-Jaipur.webp",
      category: "Heritage",
      rating: 4.9,
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar"]
    },
    {
      id: 2,
      title: "Desert Camp Experience",
      location: "Jaisalmer, Rajasthan",
      price: 7499,
      duration: "2 days",
      image: "https://www.merzougaluxurydesertcamps.com/images/galerie/marwane_sibia_mg_8671_copie.jpg",
      category: "Adventure",
      rating: 4.7,
      highlights: ["Sand dunes safari", "Cultural performance", "Camel ride", "Overnight in luxury tents"]
    },
    {
      id: 3,
      title: "Udaipur Romantic Escape",
      location: "Udaipur, Rajasthan",
      price: 10999,
      duration: "3 days",
      image: "https://media.dpauls.com/drive-server/images/packages/india/udaipur/city-palace-and-pichola-lake-udaipur-rajasthan-india.jpg",
      category: "Luxury",
      rating: 4.8,
      highlights: ["Lake Pichola cruise", "City Palace visit", "Jag Mandir dinner", "Sajjangarh sunset"]
    },
    {
      id: 4,
      title: "Ranthambore Wildlife Safari",
      location: "Sawai Madhopur, Rajasthan",
      price: 9999,
      duration: "2 days",
      image: "https://www.ranthamborenationalpark.in/images/center-safri-booking-ranthm.jpg",
      category: "Wildlife",
      rating: 4.6,
      highlights: ["Jungle safari", "Ranthambore Fort", "Bird watching", "Nature walks"]
    },
    {
      id: 5,
      title: "Pushkar Spiritual Retreat",
      location: "Pushkar, Rajasthan",
      price: 5999,
      duration: "2 days",
      image: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/09/Pushkar-Temples-Cover-Photo-840x425.jpg",
      category: "Spiritual",
      rating: 4.5,
      highlights: ["Pushkar Lake", "Brahma Temple", "Camel fair (seasonal)", "Evening aarti"]
    },
    {
      id: 6,
      title: "Mount Abu Hill Station",
      location: "Mount Abu, Rajasthan",
      price: 8499,
      duration: "2 days",
      image: "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/Toad%20Rock%20View%20Point.jpg",
      category: "Nature",
      rating: 4.4,
      highlights: ["Nakki Lake", "Dilwara Temples", "Sunset Point", "Wildlife sanctuary"]
    }
  ];

  const filters = ['All', 'Heritage', 'Adventure', 'Luxury', 'Wildlife', 'Spiritual', 'Nature'];

  const filteredDestinations = activeFilter === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-amber-700 overflow-hidden">
        <img 
          src="https://www.rajasthanbhumitours.com/image/banner/Rajasthan-bhumi-tour-banner.jpg" 
          alt="Rajasthan weekend getaway"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Rajasthan Weekend Getaways</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Experience the royal heritage, vibrant culture, and breathtaking landscapes of Rajasthan in just a weekend.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">Discover Rajasthan's Magic</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From the pink city of Jaipur to the golden sands of Jaisalmer, our weekend getaways offer the perfect escape to experience Rajasthan's royal heritage, vibrant culture, and stunning landscapes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white text-gray-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map(destination => (
            <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-amber-100">
              <div className="relative h-48">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm flex items-center">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-medium">{destination.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{destination.title}</h3>
                  <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                    {destination.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {destination.location}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-amber-700 mb-2">Highlights:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {destination.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-500">Starting from</span>
                    <span className="text-2xl font-bold text-gray-900 block">₹{destination.price.toLocaleString()}</span>
                  </div>
                  <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Jaipur Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://5.imimg.com/data5/SELLER/Default/2024/9/451134410/TQ/RH/YG/9648754/2-days-jaipur-package-tour.jpg" 
                alt="Jaipur heritage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">Special Jaipur Weekend Package</h2>
              <p className="text-lg text-gray-700 mb-6">
                Experience the Pink City like never before with our exclusive Jaipur weekend itinerary, covering all major heritage sites with royal treatment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Private guided tour of Amber Fort with elephant ride</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Heritage walk through the old city including Hawa Mahal</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Royal dining experience at a heritage haveli</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Stay at a 4-star heritage property</span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-500">Special price</span>
                  <span className="text-2xl font-bold text-amber-700 block">₹12,999</span>
                </div>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium">
                  Explore Jaipur Package
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
<div className="mt-16 relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-700 via-amber-600 to-amber-500 p-8 md:p-12 text-center text-white shadow-lg">
  {/* Decorative Rajasthani elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white rounded-full"></div>
    <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-white rounded-full"></div>
    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-8 h-8 border-2 border-white rotate-45"></div>
    <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2 w-8 h-8 border-2 border-white rotate-45"></div>
  </div>
  
  {/* Rajasthani motif border */}
  <div className="absolute top-0 left-0 right-0 h-2 bg-white opacity-20"></div>
  <div className="absolute bottom-0 left-0 right-0 h-2 bg-white opacity-20"></div>
  
  <div className="relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif tracking-wide">
      <span className="inline-block transform rotate-1">✨</span> Craft Your Royal Rajasthan Escape <span className="inline-block transform -rotate-1">✨</span>
    </h2>
    
    <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
      Let our <span className="font-semibold">Darbari</span> travel planners design a <span className="italic">maharaja-worthy</span> weekend just for you
    </p>
    
    <button className="px-8 py-4 bg-white text-amber-700 font-bold rounded-lg hover:bg-amber-50 transition-all transform hover:scale-105 shadow-md hover:shadow-xl flex items-center mx-auto group">
      <span>Design My Royal Retreat</span>
      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </button>
    
    <div className="mt-6 text-amber-200 text-sm flex justify-center items-center">
      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
      </svg>
      <span>Authentic experiences curated by Rajasthan locals</span>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default WeekendGetaways;