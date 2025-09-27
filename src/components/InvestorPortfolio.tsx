import React from 'react';
import { ArrowLeft, Users, TrendingUp, Award, Globe, Building, Calendar, ExternalLink } from 'lucide-react';

interface InvestorPortfolioProps {
  onBack: () => void;
}

const investors = [
  {
    id: 1,
    name: "TechVenture Capital",
    logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    type: "Lead Investor",
    investment: "₹2.5 Crores",
    stage: "Series A",
    date: "March 2024",
    description: "Leading EdTech venture capital firm focused on innovative learning technologies across India.",
    website: "techventure.com",
    portfolio: ["Byju's", "Unacademy", "Vedantu"],
    focus: ["EdTech", "AI/ML", "VR/AR"]
  },
  {
    id: 2,
    name: "Karnataka Innovation Fund",
    logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    type: "Strategic Investor",
    investment: "₹1.8 Crores",
    stage: "Series A",
    date: "March 2024",
    description: "Government-backed fund supporting innovative startups in Karnataka with focus on education and technology.",
    website: "kif.gov.in",
    portfolio: ["Multiple EdTech Startups", "Healthcare Tech", "AgriTech"],
    focus: ["Education", "Healthcare", "Agriculture"]
  },
  {
    id: 3,
    name: "EduGrowth Partners",
    logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    type: "Co-Investor",
    investment: "₹1.2 Crores",
    stage: "Series A",
    date: "April 2024",
    description: "Specialized education sector investors with deep expertise in K-12 learning solutions.",
    website: "edugrowth.in",
    portfolio: ["TopperLearning", "Meritnation", "Embibe"],
    focus: ["K-12 Education", "Test Prep", "Skill Development"]
  },
  {
    id: 4,
    name: "Future Learning Ventures",
    logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    type: "Angel Investor",
    investment: "₹75 Lakhs",
    stage: "Seed",
    date: "January 2024",
    description: "Early-stage investor focused on transformative educational technologies and immersive learning experiences.",
    website: "futurelearning.vc",
    portfolio: ["AR/VR Startups", "AI Education", "Language Learning"],
    focus: ["Immersive Tech", "AI Education", "Language Learning"]
  }
];

const milestones = [
  {
    date: "January 2024",
    title: "Seed Funding Completed",
    amount: "₹75 Lakhs",
    description: "Successfully raised seed funding from Future Learning Ventures"
  },
  {
    date: "March 2024",
    title: "Series A Round",
    amount: "₹4.3 Crores",
    description: "Completed Series A funding led by TechVenture Capital"
  },
  {
    date: "April 2024",
    title: "Strategic Partnership",
    amount: "₹1.2 Crores",
    description: "Additional investment from EduGrowth Partners with strategic partnership"
  },
  {
    date: "June 2024",
    title: "Expansion Phase",
    amount: "₹6 Crores Total",
    description: "Total funding raised to support expansion across Karnataka"
  }
];

export default function InvestorPortfolio({ onBack }: InvestorPortfolioProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Investor Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our trusted investors who believe in transforming education through technology
            </p>
          </div>
        </div>
      </div>

      {/* Funding Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">₹6 Crores</h3>
            <p className="text-gray-600">Total Funding Raised</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4</h3>
            <p className="text-gray-600">Strategic Investors</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Series A</h3>
            <p className="text-gray-600">Current Stage</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4</h3>
            <p className="text-gray-600">Locations Planned</p>
          </div>
        </div>

        {/* Investors Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Investors</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {investors.map((investor) => (
              <div key={investor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={investor.logo}
                        alt={investor.name}
                        className="w-16 h-16 rounded-lg object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{investor.name}</h3>
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {investor.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">{investor.investment}</p>
                      <p className="text-sm text-gray-500">{investor.stage}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{investor.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Portfolio Companies</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {investor.portfolio.map((company, index) => (
                          <li key={index} className="flex items-center">
                            <Building className="w-3 h-3 mr-2" />
                            {company}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Focus Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {investor.focus.map((area, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {investor.date}
                    </div>
                    <a
                      href={`https://${investor.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Funding Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Funding Timeline</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-6"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                    <span className="text-lg font-bold text-green-600">{milestone.amount}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{milestone.date}</p>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Opportunity */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for Strategic Partners</h2>
          <p className="text-lg mb-6 opacity-90">
            Join us in revolutionizing education across Karnataka. We're seeking strategic investors 
            for our Series B round to accelerate expansion and technology development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Investment Deck
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Investor Relations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}