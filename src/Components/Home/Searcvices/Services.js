import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../SearviceDetail/ServiceDetail';

const serviceData = [
    {
        nameIs: 'Flouoride Treatment',
        img: fluoride
    },
    {
        nameIs: 'Cavity Filling',
        img: cavity
    },
    {
        nameIs: 'Teeth Whitening',
        img: whitening
    },
]

const Services = () => {
    return (
        <section className="services-container mt-5 mb-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3A4256' }}>Services We Provide</h2>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;