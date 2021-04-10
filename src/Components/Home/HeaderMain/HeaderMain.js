import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br></br> Starts Here</h1>
                <p className="text-secondary">We are the world class doctors to serve you a better treatment.We make sure that our every patient get well in 7days.So, why are you waiting? Click the Get Appoinment Button fast and book your Appoinment</p>
                <button className="btn btn-primary">Get Appoinment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;