import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Ev Bitkisi Mağazası</h1>
          <p>Evinizi və iş yerinizi canlı, sağlam bitkilərlə gözəlləşdirin. Biz böyük seçimdə otaq bitkiləri, kaktuslar və sukkulent bitkilər təklif edirik.</p>
          <p>Bütün bitkilərimiz ətraf mühitə uyğun yetişdirilir və evinizdə gözəl və sağlam böyüməsi üçün tam qarantiya ilə təmin olunur.</p>
          <Link to="/products" className="get-started-btn">İndi Başla</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;