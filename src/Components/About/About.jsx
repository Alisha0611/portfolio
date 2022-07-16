import React from 'react'
import './About.css'

const About = () => {
  return (
    
    <div id='About' className='a'>
        <h1 className="about-heading">About <span className =' primary'>me</span></h1>
        <div className="about">
        <div className="about-right">
            <p className="about-info ">
            <span className='primary hey-font'>Hey there!</span>
            <p>I'm currently a final year student pursuing my Bachelor's degree in Electronics and Communication 
                Engineering from JSS Academy of Technical Education, Noida. I'm a Designer and a Front End 
                Developer who enjoys taking complex problems and turning them
                into simple and beautiful designs. When I'm not coding or pushing pixles, you'll rather 
                find me dancing. </p>
            </p>
            <div className="about-edu-wrapper">
                <h2 className="about-edu ">Education</h2>
                <div className="edu vl">
                    <div className="edu-i">
                        <p className="edu-primary "><div className="circleNew"> </div> 2019 - Present</p>
                        <h3 className="edu-info">JSS Academy Of Technical Education, Noida</h3>
                        <p>B.TEch in Electronics and Communication Engineering</p>
                        <p>CGPA - 8.6</p>
                    </div>
                    <div className="edu-i">
                        <p className="edu-primary "><div className="circleNew"> </div> 2018 - 2019</p>
                        <h3 className="edu-info">CSRL Vidushi Super 30, Noida</h3>
                        <p>JEE Preparation</p>
                        <p>Percentile - 89.54</p>
                    </div>
                    <div className="edu-i">
                        <p className="edu-primary "><div className="circleNew"> </div> 2017 - 2018</p>
                        <h3 className="edu-info">Dr. Virendra Swaroop Memorial Public School, Kanpur</h3>
                        <p>XII - 80.75%</p>
                    </div>
                    <div className="edu-i">
                        <p className="edu-primary "><div className="circleNew"> </div> 2015 - 2016</p>
                        <h3 className="edu-info">Dr. Virendra Swaroop Memorial Public School, Kanpur</h3>
                        <p>X - 90.2%</p>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default About