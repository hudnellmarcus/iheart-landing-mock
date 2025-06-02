// "use client";
// import React, { useState } from "react";
// import {
//   Play,
//   Radio,
//   Headphones,
//   List,
//   Newspaper,
//   Menu,
//   X,
//   Search,
// } from "lucide-react";
// import Link from "next/link";

// const IHeartLanding = () => {
//   const [selectedLocation, setSelectedLocation] = useState(
//     "West Palm Beach, FL"
//   );
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

//   const liveRadioStations = [
//     {
//       name: "WiLD 95.5",
//       subtitle: "The Palm Beaches' #1 Hit Music Station",
//       logo: "95.5",
//       color: "bg-blue-500",
//     },
//     {
//       name: "98.7 The Gator",
//       subtitle: "The Palm Beaches' Classic Rock",
//       logo: "98.7",
//       color: "bg-red-600",
//     },
//     {
//       name: "Big 105.9",
//       subtitle: "Miami's Greatest Hits",
//       logo: "105.9",
//       color: "bg-red-500",
//     },
//     {
//       name: "Y100 @100.7FM",
//       subtitle: "Miami's #1 Hit Music Station",
//       logo: "100.7",
//       color: "bg-cyan-500",
//     },
//   ];

//   const artists = [
//     { name: "Sabrina Carpenter", image: "SC" },
//     { name: "Morgan Wallen", image: "MW" },
//     { name: "Kendrick Lamar", image: "KL" },
//     { name: "Jelly Roll", image: "JR" },
//   ];

//   const podcasts = [
//     { name: "Boysober", color: "bg-gradient-to-br from-red-500 to-blue-600" },
//     {
//       name: "A Twist of History",
//       color: "bg-gradient-to-br from-teal-400 to-cyan-600",
//     },
//     {
//       name: "Aubrey O'Day",
//       color: "bg-gradient-to-br from-yellow-600 to-gray-900",
//     },
//     {
//       name: "What Happened to Holly Bobo?",
//       color: "bg-gradient-to-br from-gray-600 to-gray-800",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Shop Button */}
//       <Link href="/shop">
//         <div className="fixed flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 md:bottom-12 md:right-12 bottom-6 right-6 bg-iheart-red/80 px-4 py-1 rounded-full shadow-lg z-50 border border-gray-200">
//           <img
//             src="/shopping-cart-icon.svg"
//             alt="Shop"
//             className="md:w-12 md:h-12 w-8 h-8"
//           />
//           <span className="text-sm text-white font-bold">Shop</span>
//         </div>
//       </Link>
//       {/* Header */}
//       <header className="bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center flex-shrink-0">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-iheart-red rounded-full flex items-center justify-center">
//                   <Radio className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold text-gray-900">iHeart</span>
//                 <span className="hidden sm:inline bg-iheart-red text-white text-xs px-2 py-1 rounded-full">
//                   Upgrade
//                 </span>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex space-x-6 xl:space-x-8">
//               <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//                 For You
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//                 Your Library
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//                 Live Radio
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//                 Podcasts
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//                 Artist Radio
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//                 Playlists
//               </a>
//               <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
//                 News
//               </a>
//             </nav>

//             {/* Desktop Search & Profile */}
//             <div className="hidden md:flex items-center space-x-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="w-48 lg:w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
//                 />
//               </div>
//               <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//             </div>

//             {/* Mobile Controls */}
//             <div className="flex md:hidden items-center space-x-2">
//               <button
//                 onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//                 className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//               >
//                 <Search className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
//               >
//                 {mobileMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Search Bar */}
//           {mobileSearchOpen && (
//             <div className="md:hidden py-3 border-t border-gray-200">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
//                 autoFocus
//               />
//             </div>
//           )}

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden border-t border-gray-200">
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   For You
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   Your Library
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   Live Radio
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   Podcasts
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   Artist Radio
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   Playlists
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
//                 >
//                   News
//                 </a>
//                 <div className="border-t border-gray-200 mt-2 pt-2">
//                   <span className="inline-block mx-3 my-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
//                     Upgrade
//                   </span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 overflow-hidden">
//         <div className="absolute inset-0 bg-gray-200"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             <div className="text-black text-center lg:text-left">
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
//                 All your favorite music, radio and podcasts, all free.
//               </h1>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <button className="bg-iheart-red hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors">
//                   Get Started
//                 </button>
//                 <button className="border border-black text-black hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors">
//                   Get the App
//                 </button>
//               </div>
//             </div>

//             <div className="relative mt-8 lg:mt-0">
//               <div className="relative">
//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg relative overflow-hidden w-full h-48 sm:h-64 object-cover"
//                 >
//                   <source
//                     src="https://web-static.pages.iheart.com/welcome/web_home_video_loop.mp4"
//                     type="video/mp4"
//                   />
//                   {/* Fallback gradient if video fails to load */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"></div>
//                 </video>

//                 {/* Keep your play button overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
//                     <Play className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 ml-1" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-10">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
//           <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
//             <Radio className="w-8 h-8 sm:w-12 sm:h-12 text-red-600 mx-auto mb-2 sm:mb-4" />
//             <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
//               Live Radio
//             </h3>
//           </div>
//           <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
//             <Headphones className="w-8 h-8 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-2 sm:mb-4" />
//             <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
//               Podcasts
//             </h3>
//           </div>
//           <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
//             <List className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-2 sm:mb-4" />
//             <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
//               Playlists
//             </h3>
//           </div>
//           <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
//             <Newspaper className="w-8 h-8 sm:w-12 sm:h-12 text-orange-600 mx-auto mb-2 sm:mb-4" />
//             <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
//               News
//             </h3>
//           </div>
//         </div>
//       </section>

//       {/* Live Radio Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//               Live Radio
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base">
//               The best live stations from around the country, any time, any
//               place.
//             </p>
//           </div>
//           <select
//             value={selectedLocation}
//             onChange={(e) => setSelectedLocation(e.target.value)}
//             className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base w-full sm:w-auto"
//           >
//             <option>West Palm Beach, FL</option>
//             <option>Miami, FL</option>
//             <option>New York, NY</option>
//             <option>Los Angeles, CA</option>
//           </select>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//           {liveRadioStations.map((station, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//             >
//               <div
//                 className={`h-24 sm:h-32 ${station.color} flex items-center justify-center`}
//               >
//                 <div className="text-white text-xl sm:text-2xl font-bold">
//                   {station.logo}
//                 </div>
//               </div>
//               <div className="p-3 sm:p-4">
//                 <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
//                   {station.name}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-600">
//                   {station.subtitle}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Artist Radio Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//               Artist Radio
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base">
//               Custom radio stations based off your favorite artists and bands.
//             </p>
//           </div>
//           <button className="text-red-600 hover:text-red-700 font-semibold text-sm sm:text-base self-start sm:self-auto">
//             View More Artists →
//           </button>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
//           {artists.map((artist, index) => (
//             <div key={index} className="text-center">
//               <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-lg sm:text-2xl font-bold text-white">
//                 {artist.image}
//               </div>
//               <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
//                 {artist.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Podcasts Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//               Podcasts
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base">
//               Popular and exclusive podcasts in a variety of genres and topics.
//             </p>
//           </div>
//           <button className="text-red-600 hover:text-red-700 font-semibold text-sm sm:text-base self-start sm:self-auto">
//             View More Podcasts →
//           </button>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//           {podcasts.map((podcast, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
//             >
//               <div
//                 className={`h-36 sm:h-48 ${podcast.color} flex items-center justify-center`}
//               >
//                 <div className="text-white text-lg sm:text-xl font-bold text-center px-4">
//                   {podcast.name}
//                 </div>
//               </div>
//               <div className="p-3 sm:p-4">
//                 <h3 className="font-bold text-gray-900 text-sm sm:text-base">
//                   {podcast.name}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* App Download Section */}
//       <section className="bg-gray-200 py-12 sm:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             <div className="text-center lg:text-left">
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//                 Bring iHeart with you anywhere
//               </h2>
//               <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
//                 The free iHeart app is available on over 200 platforms,
//                 including Web, iOS, Android, Alexa, automobiles and more.
//               </p>

//               <div className="space-y-3 sm:space-y-4 flex flex-col items-center lg:items-start">
//                 <button className="flex items-center space-x-3 bg-black text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-fit">
//                   <div className="text-left">
//                     <div className="text-xs">Download on the</div>
//                     <div className="font-semibold text-sm sm:text-base">
//                       App Store
//                     </div>
//                   </div>
//                 </button>

//                 <button className="flex items-center space-x-3 bg-black text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-fit">
//                   <div className="text-left">
//                     <div className="text-xs">Download on</div>
//                     <div className="font-semibold text-sm sm:text-base">
//                       Google Play
//                     </div>
//                   </div>
//                 </button>
//               </div>

//               <button className="text-red-600 hover:text-red-700 font-semibold mt-4 block text-sm sm:text-base">
//                 View All Apps →
//               </button>
//             </div>

//             <div className="flex justify-center mt-8 lg:mt-0">
//               <div className="relative">
//                 {/* Device mockups */}
//                 <div className="flex space-x-2 sm:space-x-4 items-center justify-center">
//                   <div className="w-12 h-20 sm:w-16 sm:h-28 bg-gray-300 rounded-lg flex items-center justify-center">
//                     <Radio className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
//                   </div>
//                   <div className="w-16 h-24 sm:w-24 sm:h-36 bg-gray-300 rounded-lg flex items-center justify-center">
//                     <Radio className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
//                   </div>
//                   <div className="w-20 h-16 sm:w-32 sm:h-24 bg-gray-300 rounded flex items-center justify-center">
//                     <Radio className="w-6 h-6 sm:w-10 sm:h-10 text-red-600" />
//                   </div>
//                   <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-300 rounded-full flex items-center justify-center">
//                     <Radio className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default IHeartLanding;
import Footer from "@/components/Footer";
import LandingPageInput from "@/components/LandingPageInput";
import ChatLayout from "@/components/ChatLayout";

export default function Home() {
  return (
    <ChatLayout>
      <div className="flex flex-col mt-12 justify-start md:mt-0 items-center md:justify-center flex-1">
        <LandingPageInput />
      </div>
      <div className="flex">
        <Footer />
      </div>
      </ChatLayout>
  );
}
