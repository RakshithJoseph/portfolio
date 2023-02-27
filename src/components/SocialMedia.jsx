import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';
const SocialMedia = () => {
  return (
    <div className='app__social'>

        <div>
            
            <a href="https://www.linkedin.com/in/rakshith-joseph-manaloor-18bb30200/" target="blank">{<BsLinkedin/>}</a>
        </div>
        <div>
        <a href="https://github.com/RakshithJoseph" target="blank">{<BsGithub/>}</a>
        </div>
        <div>
        <a href="https://www.instagram.com/rakshithjoseph/" target="blank">{<BsInstagram/>}</a>
        </div>
    </div>
  )
}

export default SocialMedia