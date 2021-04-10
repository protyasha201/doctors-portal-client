import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} />
            <h5 className="mt-3 mb-3">{service.nameIs}</h5>
            <p className="text-secondary">We Show Better Dental Result. You can find any kind of result like dental and dental .come and visit us.</p>
        </div>
    );
};

export default ServiceDetail;