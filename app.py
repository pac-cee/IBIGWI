from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

# Configure static folder for images, CSS, and JS
app.static_folder = 'static'

@app.route('/')
def home():
    services = [
        {
            'image': 'images/advertsing.jpg',
            'title': 'Advertising',
            'description': 'Strategic, impactful advertising campaigns that engage and convert your audience.'
        },
        {
            'image': 'images/event-management.jpg', 
            'title': 'Event Management',
            'description': 'Comprehensive event planning and management, from concept to completion.'
        },
        {
            'image': 'images/conncerts.jpg',
            'title': 'Concerts',
            'description': 'Delivering high-energy, memorable concert experiences for artists and fans alike.'
        },
        {
            'image': 'images/wedding-planning copy.jpg',
            'title': 'Wedding Planning', 
            'description': 'Bespoke wedding planning that turns your dream day into a reality.'
        },
        {
            'image': 'images/meetings.jpg',
            'title': 'Professional Meetings',
            'description': 'Expert coordination of corporate meetings, ensuring smooth and productive outcomes.'
        },
        {
            'image': 'images/parties.jpg',
            'title': 'Parties',
            'description': 'Unforgettable parties designed with flair and executed with precision.'
        },
        {
            'image': 'images/publicrelation.jpg',
            'title': 'Public Relations',
            'description': 'Enhancing your brand\'s image with expert PR strategies that build credibility and trust.'
        },
        {
            'image': 'images/catering-services.jpg',
            'title': 'Catering Services',
            'description': 'Delicious, customized catering options that perfectly complement your event.'
        },
        {
            'image': 'images/decoranddesign copy.jpg',
            'title': 'Decor and Design',
            'description': 'Stylish, creative decor solutions that transform spaces and create lasting impressions.'
        },
        {
            'image': 'images/securityservices.jpg',
            'title': 'Security Services',
            'description': 'Professional security solutions to ensure the safety and success of your event.'
        }
    ]

    contact_info = {
        'phone': '+250789610326',
        'email': 'agappenzabakiza@gmail.com',
        'address': 'Kigali, Remera, RWANDA',
        'instagram': '@ibigwiprotocolagency'
    }

    return render_template('index.html', 
                         services=services,
                         contact_info=contact_info,
                         year=2024)

if __name__ == '__main__':
    app.run(debug=True)
