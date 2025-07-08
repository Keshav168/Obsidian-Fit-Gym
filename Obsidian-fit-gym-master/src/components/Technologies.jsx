import {Link,Outlet} from 'react-router-dom';

 import React from "react";
import "./Technologies.css";

function Technologies() {
  return (
    <div className="categories-page">
      <h1 className="categories-heading text-center">Explore Our Gym Categories</h1>

      <div className="categories-container">
        {/* Category 1: Weight Training */}
        <div className="category-card">
          <img
            src=" https://th.bing.com/th?id=OIP.xpNuefwduB9BwkF5HSGhKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
            alt="Weight Training"
            className="category-image"
          />
          <div className="category-info">
            <h2 className="category-title">Weight Training</h2>
            <p className="category-description">
              Build strength and muscle with our weight training programs. Whether you're a beginner or advanced, we have the right plan for you!
            </p>
            <button className="category-btn"><a href="https://www.healthline.com/health/fitness-exercise-weight-training" target="_blank">Learn More</a></button>
          </div>
        </div>

        {/* Category 2: Cardio */}
        <div className="category-card">
          <img
            src="https://th.bing.com/th?q=Cardio+Exercise+Equipment+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.4&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
            alt="Cardio"
            className="category-image"
          />
          <div className="category-info">
            <h2 className="category-title">Cardio</h2>
            <p className="category-description">
              Boost your heart health and endurance with a variety of cardio exercises, from treadmill workouts to cycling classes.
            </p>
            <button className="category-btn"><a href="https://www.healthline.com/health/fitness-exercise/cardio-exercises-list#_noHeaderPrefixedContent" target='_blank'>Learn More</a></button>
          </div>
        </div>

        {/* Category 3: Yoga */}
        <div className="category-card">
          <img
            src="https://th.bing.com/th/id/OIP.RYyHq2rtlwQtkGXps1IIAAHaFY?w=278&h=202&c=7&r=0&o=5&dpr=1.4&pid=1.7"
            alt="Yoga"
            className="category-image"
          />
          <div className="category-info">
            <h2 className="category-title">Yoga</h2>
            <p className="category-description">
              Relax, improve flexibility, and enhance mindfulness with our yoga sessions for all skill levels.
            </p>
            <button className="category-btn"><a href="https://www.yogapedia.com/definition/4/yoga" target='_blank'>Learn More</a></button>
          </div>
        </div>

        {/* Category 4: HIIT */}
        <div className="category-card">
          <img
            src=" https://th.bing.com/th/id/OIP.fKCVAtq308lEVMd9Urp1pQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
            alt="HIIT"
            className="category-image"
          />
          <div className="category-info">
            <h2 className="category-title">HIIT</h2>
            <p className="category-description">
              Push your limits with high-intensity interval training to burn calories fast and improve endurance.
            </p>
            <button className="category-btn"><a href="https://www.healthline.com/health/best-hiit-exercises" target='_blank'>Learn More</a></button>
          </div>
        </div>

        {/* Category 5: Pilates */}
        <div className="category-card">
          <img
            src="https://th.bing.com/th/id/OIP.G7zKegIw7phOZScyzJW-mAHaHa?w=169&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
            alt="Pilates"
            className="category-image"
          />
          <div className="category-info">
            <h2 className="category-title">Pilates</h2>
            <p className="category-description">
              Strengthen your core and improve posture with our dynamic Pilates routines.
            </p>
            <button className="category-btn"><a href="https://www.healthline.com/health/fitness/pilates-exercises" target='_blank'>Learn More</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}

 


export default Technologies