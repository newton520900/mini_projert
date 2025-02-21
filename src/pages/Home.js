import React from 'react';
import { HiTruck, HiBadgeCheck, HiCreditCard } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="container mx-auto text-center mt-12 px-6">
      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white p-14 rounded-3xl shadow-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-extrabold tracking-wider drop-shadow-lg leading-tight">
          Final Shop
        </h1>
        <p className="text-lg mt-4 mb-8 opacity-90">Your premium shopping experience</p>
        <a
          href="/products"
          className="mt-6 inline-block bg-gradient-to-r from-teal-400 to-teal-600 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg transform transition duration-300 hover:bg-teal-700 hover:scale-110 hover:shadow-2xl"
        >
          Get Started
        </a>

      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl transform transition duration-300 hover:scale-105 hover:bg-opacity-30"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <feature.icon size={60} className="text-pink-500 mb-5 mx-auto drop-shadow-md" />
            <h5 className="text-2xl font-semibold text-gray-100">{feature.title}</h5>
            <p className="text-gray-200 mt-3">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    icon: HiTruck,
    title: 'Fast Delivery',
    description: 'Super quick and secure delivery for every order.',
  },
  {
    icon: HiBadgeCheck,
    title: 'Premium Quality',
    description: 'Only the best products from trusted brands.',
  },
  {
    icon: HiCreditCard,
    title: 'Secure Payment',
    description: '100% safe and encrypted transactions.',
  },
];

export default Home;
