"use client"


// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Note: In an actual implementation, you would need to install @hookform/resolvers
// This is just for demonstration

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form validation schema
  const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Invalid email address' }),
    company: z.string().min(2, { message: 'Company name is required' }),
    productCategory: z.string().min(1, { message: 'Please select a product category' }),
  });
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });
  
  const onSubmit = (data) => {
    console.log(data);
    setFormSubmitted(true);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f8f3] to-[#e2e4db]">
      <Head>
        <title>GlobalSource Connect | Direct Access to Chinese Suppliers</title>
        <meta name="description" content="Connect directly with verified Chinese suppliers across multiple product categories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-[#1a1f3d] text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="h-8 w-8 bg-[#f5a742] rounded-full"></div>
            <span className="text-xl font-bold">GlobalSource Connect</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex space-x-6"
          >
            <a href="#how-it-works" className="hover:text-[#f5a742] transition-colors">How It Works</a>
            <a href="#categories" className="hover:text-[#f5a742] transition-colors">Categories</a>
            <a href="#pricing" className="hover:text-[#f5a742] transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-[#f5a742] transition-colors">Contact</a>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="bg-[#e15d6e] px-4 py-2 rounded-md hover:bg-[#c04c5d] transition-colors"
          >
            Sign Up
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1f3d] mb-6">
              Direct Access to <span className="text-[#e15d6e]">Chinese Suppliers</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Connect with verified manufacturers and suppliers across China. Get contact information for suppliers in your product category with just a nominal fee.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a href="#get-started" className="bg-[#f5a742] text-white px-8 py-3 rounded-md font-medium text-lg shadow-lg hover:bg-[#e09632] transition-colors">
                Get Started
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="md:w-1/2 relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ perspective: '1000px' }}>
              <motion.div 
                initial={{ rotateY: -15, rotateX: 10 }}
                animate={{ rotateY: 0, rotateX: 0 }}
                transition={{ delay: 0.7, duration: 1, type: 'spring' }}
                className="bg-[#a8b7d0] p-6 rounded-xl relative z-10"
              >
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-[#1a1f3d]">Electronics Supplier Directory</h3>
                      <p className="text-sm text-gray-600">Updated April 2025</p>
                    </div>
                    <div className="h-12 w-12 bg-[#e15d6e] rounded-full flex items-center justify-center text-white font-bold">
                      PDF
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-100 p-3 rounded-md flex justify-between">
                        <div>
                          <p className="font-medium">Shenzhen Tech Co. #{item}</p>
                          <p className="text-sm text-gray-600">Consumer Electronics</p>
                        </div>
                        <div className="text-[#f5a742]">Contact Info</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 3D effect elements */}
                <div className="absolute -bottom-3 -right-3 bg-[#1a1f3d] w-full h-full rounded-xl -z-10"></div>
              </motion.div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
              className="absolute -top-10 -right-5 bg-[#f5a742] h-20 w-20 rounded-full opacity-20"
            />
            <motion.div 
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-10 -left-5 bg-[#e15d6e] h-16 w-16 rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1f3d]">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process connects you with verified suppliers in just three simple steps
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Select Your Category",
                description: "Choose from over 50 product categories ranging from electronics to textiles.",
                color: "#f5a742"
              },
              {
                icon: "💳",
                title: "Pay Nominal Fee",
                description: "Access our curated supplier database with a simple one-time payment per category.",
                color: "#e15d6e"
              },
              {
                icon: "📋",
                title: "Receive Supplier Contacts",
                description: "Get a comprehensive sheet with verified supplier contact information.",
                color: "#a8b7d0"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 h-1 w-full" 
                  style={{ backgroundColor: step.color }}
                ></div>
                <div 
                  className="h-16 w-16 rounded-full flex items-center justify-center text-2xl mb-4" 
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1a1f3d]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-gradient-to-br from-[#1a1f3d] to-[#2a305d] text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We offer supplier information across these major manufacturing categories
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Electronics", icon: "🔌" },
              { name: "Fashion", icon: "👕" },
              { name: "Home Goods", icon: "🏠" },
              { name: "Auto Parts", icon: "🚗" },
              { name: "Industrial", icon: "⚙️" },
              { name: "Medical", icon: "⚕️" },
              { name: "Toys", icon: "🧸" },
              { name: "Furniture", icon: "🪑" },
              { name: "Cosmetics", icon: "💄" },
              { name: "Sporting Goods", icon: "⚽" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                className="bg-[#2d345f] rounded-lg p-4 text-center cursor-pointer transition-all duration-300"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-medium">{category.name}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-10"
          >
            <p className="text-gray-300">And many more categories available</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1f3d]">Simple Pricing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Affordable access to our verified supplier database
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {[
              {
                title: "Basic Access",
                price: "$49",
                features: [
                  "Access to 1 product category",
                  "Contact details for 20+ suppliers",
                  "Basic supplier information",
                  "30-day access to updates"
                ],
                color: "#a8b7d0",
                popular: false
              },
              {
                title: "Business",
                price: "$129",
                features: [
                  "Access to 3 product categories",
                  "Contact details for 50+ suppliers per category",
                  "Detailed supplier profiles",
                  "90-day access to updates",
                  "Email support"
                ],
                color: "#e15d6e",
                popular: true
              },
              {
                title: "Enterprise",
                price: "$299",
                features: [
                  "Access to all product categories",
                  "Unlimited supplier contacts",
                  "Premium supplier profiles with ratings",
                  "1-year access to updates",
                  "Priority support",
                  "Custom supplier matching"
                ],
                color: "#f5a742",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className={`bg-white rounded-xl overflow-hidden shadow-lg border flex flex-col ${
                  plan.popular ? 'md:scale-110 relative z-10' : ''
                }`}
                style={{ borderColor: plan.popular ? plan.color : '#e5e7eb' }}
              >
                {plan.popular && (
                  <div className="bg-[#e15d6e] text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-2 text-[#1a1f3d]">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                    <span className="text-gray-500"> / one-time</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: plan.color }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-md font-medium transition-colors"
                    style={{ 
                      backgroundColor: plan.popular ? plan.color : 'white',
                      color: plan.popular ? 'white' : plan.color,
                      border: `2px solid ${plan.color}`
                    }}
                  >
                    Choose Plan
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="get-started" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1f3d]">Get Started</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll help you connect with the right suppliers
              </p>
            </motion.div>
            
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1f3d] mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest. Our team will contact you shortly with information about suppliers in your selected category.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="bg-[#a8b7d0] text-white px-6 py-2 rounded-md hover:bg-[#97a6be] transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#f5a742] focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="John Smith"
                          {...register('name')}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#f5a742] focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="john@company.com"
                          {...register('email')}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#f5a742] focus:outline-none transition-colors ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Your Company Inc."
                          {...register('company')}
                        />
                        {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                        <select
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#f5a742] focus:outline-none transition-colors bg-white ${errors.productCategory ? 'border-red-500' : 'border-gray-300'}`}
                          {...register('productCategory')}
                        >
                          <option value="">Select a category</option>
                          <option value="electronics">Electronics</option>
                          <option value="fashion">Fashion & Apparel</option>
                          <option value="homegoods">Home Goods</option>
                          <option value="autoparts">Auto Parts</option>
                          <option value="industrial">Industrial Equipment</option>
                        </select>
                        {errors.productCategory && <p className="mt-1 text-sm text-red-500">{errors.productCategory.message}</p>}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#f5a742] to-[#e15d6e] text-white py-3 rounded-md font-medium shadow-md hover:from-[#e09632] hover:to-[#c04c5d] transition-all"
                      >
                        Get Supplier Information
                      </motion.button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-[#1a1f3d]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Businesses that have successfully connected with suppliers through our platform
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Wilson",
                company: "Tech Imports Ltd",
                quote: "Within a week of receiving the supplier contacts, we had established relationships with three manufacturers that met our quality standards.",
                image: "/api/placeholder/64/64"
              },
              {
                name: "Michael Chen",
                company: "Global Furnishings",
                quote: "The supplier database saved us months of research and thousands in potential travel costs to source factories in China.",
                image: "/api/placeholder/64/64"
              },
              {
                name: "Jessica Brown",
                company: "FashionFirst",
                quote: "As a small business, finding reliable suppliers was challenging until we used this service. Now we have direct access to manufacturers we trust.",
                image: "/api/placeholder/64/64"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className="bg-[#2d345f] rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1f3d]">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our supplier connection service
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How verified are the suppliers?",
                answer: "All suppliers in our database have undergone a verification process that includes business license verification, manufacturing capability assessment, and historical performance review."
              },
              {
                question: "What information do I receive about each supplier?",
                answer: "You'll receive company names, contact details (email, phone, and WeChat), product categories, minimum order quantities, manufacturing capabilities, and location information."
              },
              {
                question: "How often is the supplier information updated?",
                answer: "Our database is updated quarterly to ensure all contact information remains current and to add new verified suppliers."
              },
              {
                question: "Can I request suppliers for specific products not in your categories?",
                answer: "Yes, we offer custom sourcing services for specific product requirements that may not fit into our standard categories. Please contact our support team for more information."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="mb-4"
              >
                <details className="bg-white p-6 rounded-lg shadow-md group">
                  <summary className="flex justify-between items-center cursor-pointer font-medium text-[#1a1f3d]">
                    {faq.question}
                    <svg className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1f3d] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-8 w-8 bg-[#f5a742] rounded-full"></div>
                <span className="text-xl font-bold">GlobalSource Connect</span>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted connection to verified Chinese suppliers and manufacturers.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a 
                    key={social}
                    href={`#${social}`}
                    className="bg-[#2d345f] h-8 w-8 rounded-full flex items-center justify-center hover:bg-[#e15d6e] transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "About Us", href: "#about" },
                  { name: "How It Works", href: "#how-it-works" },
                  { name: "Categories", href: "#categories" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "Contact Us", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-[#f5a742] transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Categories */}
            <div>
              <h4 className="font-bold text-lg mb-4">Top Categories</h4>
              <ul className="space-y-2">
                {[
                  "Electronics",
                  "Fashion & Apparel",
                  "Home Goods",
                  "Industrial Equipment",
                  "Auto Parts"
                ].map((category) => (
                  <li key={category}>
                    <a href="#categories" className="text-gray-300 hover:text-[#f5a742] transition-colors">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-3 text-[#e15d6e] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">
                    123 Business Avenue, Suite 500<br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-3 text-[#e15d6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@globalsource.com" className="text-gray-300 hover:text-[#f5a742] transition-colors">
                    info@globalsource.com
                  </a>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-3 text-[#e15d6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-[#f5a742] transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#2d345f] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GlobalSource Connect. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-400 text-sm hover:text-[#f5a742] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 text-sm hover:text-[#f5a742] transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 text-sm hover:text-[#f5a742] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}