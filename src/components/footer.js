import React from 'react';
import styles from './styles.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="row">
        <div className="col-md-12">
          <div className="p-3 mt-4 text-center bg-dark text-light">
            Developed By: <span className="text-warning font-weight-normal">
                 Benarji Shyam
            </span>
            , Using <i className="fab fa-react" /> React JS
            integrated with covid-19 data API
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;