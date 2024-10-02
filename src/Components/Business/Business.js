import styles from './Business.module.css'


function BusinessElement({ imgSrc, name, address, 
  city, state, zipCode, rating, reviewCount }) {
  return (
    <div className={styles.BusinessElement}>
      <div className={styles.imageContainer}>
        <img src={imgSrc} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className={styles.BusinessInfomation}>
        <div className={styles.BusinessAddress}>
          <p>{address}</p>
          <p>{city}</p>
          <p>{`${state} ${zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{`${rating} stars`}</h3>
          <p>{`${reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
}

export default BusinessElement;
