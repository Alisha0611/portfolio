import React from 'react'
import './Home.css'
import me from '../../img/me.png'

const Home = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hey, My name is</h2>
                <h1 className="i-name">Alisha Srivastava</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Programmer</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Learner</div>
                    </div>
                </div>
                <div className="i-brief">
                    A final year B.Tech. student, pursuing my degree in Electronics and Communication Engineering.
                    I have a deep desire to excel and continuously improve in my work. Learn more about my journey below.
                </div>
            </div>
        </div>

        <div className="i-right">
            <img src={me} alt="" className='i-img'/>
        </div>
    </div>
  )
}

export default Home