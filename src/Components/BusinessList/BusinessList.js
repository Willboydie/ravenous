import BusinessElement from '../Business/Business'
import styles from './BusinessList.module.css'


const BusinessList = ({ businesses }) => {
    return (
      <div className={styles.BusinessList}>
        {businesses.map((business, index) => (
          <BusinessElement key={index} {...business} />
        ))}
      </div>
    );
  };


export default BusinessList;