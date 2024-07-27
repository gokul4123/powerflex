import React from 'react'
import './Programs.css'
import program_1 from '../../assets/main5.jpg'
import program_2 from '../../assets/main2.jpg'
import ua from '../../assets/ua.png'
import drink from '../../assets/drink.png'
import main_1 from '../../assets/img1.png'
import main_6 from '../../assets/main6.jpg'

function Programs() {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={main_1} alt="" />
            <p>Lift</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={ua} alt="" />
            <p>Level Up</p>
        </div>

      </div>
      <div className="program">
        <img src={main_6} alt="" />
        <div className="caption">
            <img src={drink} alt="" />
            <p>Progress</p>
        </div>
      </div>
    </div>
  );
}

export default Programs
