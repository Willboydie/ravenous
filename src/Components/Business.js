import React from 'react';

class Business {
    constructor(imageSrc, name, address, city, state, 
        zipcode, rating, reviewCount) {
            this_.imageSrc = imageSrc;
            this._name = name;
            this._address = address;
            this._city = city;
            this._state = state;
            this._zipcode = zipcode;
            this._rating = rating;
            this._reviewCount = reviewCount;
        };
    
        get imageSrc() {
            return this._image;
        };

        get name() {
            return this._name;
        };

        get address() {
            return this._address;
        };

        get city() {
            return this._city;
        };

        get state() {
            return this._state;
        };

        get zipcode() {
            return this._zipcode;
        };

        get rating() {
            return this._rating;
        };

        get reviewCount() {
            return this._reviewCount;
        };
};

const BusinessElement = () => {
    return (
      <div>
        <div>
          <img src={business.imageSrc} alt="" />
        </div>
        <h2>{business.name}</h2>
        <div>
          <div>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipCode}`}</p>
          </div>
          <div>
            <h3>{business.category.toUpperCase()}</h3>
            <h3>{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  };


export default BusinessElement;