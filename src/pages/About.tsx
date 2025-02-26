import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 prose max-w-none">
          <p>
            Welcome to Free Animal Identifier, your educational resource for AI-powered wildlife identification.
            We're passionate about helping people learn about the fascinating world of animals through
            technology, while promoting understanding and appreciation of these remarkable creatures.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to make wildlife education accessible to everyone by providing a free, easy-to-use
            identification tool. We aim to foster appreciation for these remarkable creatures while helping
            people understand their crucial roles in our ecosystems. Our tool is designed for educational
            purposes only, helping nature enthusiasts, students, and curious minds learn about different
            animal species.
          </p>

          <h2>Why Choose Our Tool?</h2>
          <ul>
            <li>Advanced AI animal recognition technology</li>
            <li>Detailed species information</li>
            <li>Educational insights about wildlife</li>
            <li>Habitat and behavior details</li>
            <li>Conservation information</li>
            <li>Completely free to use</li>
            <li>No registration required</li>
            <li>Privacy-focused approach</li>
            <li>Regular updates to improve accuracy</li>
          </ul>

          <h2>Support Our Project</h2>
          <p>
            We're committed to keeping this animal identification tool free and accessible to everyone.
            If you find our educational tool useful, consider supporting us by buying us a coffee.
            Your support helps us maintain and improve the service, ensuring it remains available to all
            nature enthusiasts who want to learn about the incredible world of wildlife.
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://roihacks.gumroad.com/l/dselxe?utm_campaign=donation-home-page&utm_medium=website&utm_source=animal-identifier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors text-lg font-semibold"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}