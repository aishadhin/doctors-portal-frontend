import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../src/assets/icons/clock.svg';
import marker from '../../../src/assets/icons/marker.svg';
import phone from '../../../src/assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='p-12 grid grid-cols-1 md:grid-cols-3 gap-4'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle ="Opening Hours" cardDescription ="Lorem Ipsum is simply dummy text of the pri" img={clock}></InfoCard>
            <InfoCard bgClass="bg-[#3A4256]" cardTitle ="Visit our location" cardDescription ="Brooklyn, NY 10036, United States" img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle ="Contact us now" cardDescription ="+000 123 456789" img={phone}></InfoCard>
        </div>
    );
};

export default Info;