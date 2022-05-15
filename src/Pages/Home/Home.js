import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import DocAppointment from './DocAppointment';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DocAppointment></DocAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;