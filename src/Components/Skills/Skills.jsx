import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id='Skills' className='s'>
        <h1 className="s-head">Skills <span className='primary'>&</span> Interests</h1>
        <div className="s-skill">
            <div className="s-set">
                <h2 className="s-heading">Languages</h2>
                <div className="s-list">
                    <label>C++</label>
                </div>
                <div className="s-list">
                    <label>Python</label>
                    <i className='fab fa-python s-icon'></i>
                </div>
                <div className="s-list">
                    <label>Javascript</label>
                    <i className='fab fa-js s-icon'></i>
                </div>
            </div>

            <div className="s-set">
                <h2 className="s-heading">Frontend</h2>
                <div className="s-list">
                    <label>HTML</label>
                    <i className='fab fa-html5 s-icon'></i>
                </div>
                <div className="s-list">
                    <label>CSS</label>
                    <i className='fab fa-css3-alt s-icon'></i>
                </div>
                <div className="s-list">
                    <label>React</label>
                    <i className='fab fa-react s-icon'></i>
                </div>
            </div>

            <div className="s-set">
                <h2 className="s-heading">Designing</h2>
                <div className="s-list">
                    <label>Photoshop</label>
                    <i className='fab fa-photoshop s-icon'></i>
                </div>
                <div className="s-list">
                    <label>Figma</label>
                    <i className='fab fa-figma s-icon'></i>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Skills