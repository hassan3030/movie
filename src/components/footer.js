import React from 'react'

const Footer = () => {
  return (
    <div  className="outer-footer">
      <footer className="footer" id='footer'>
        <p className="footer-title">Copyrights @ <span> Hassan Hamdi</span></p>
        <div className="social-icons"> 
            <a href="https://www.facebook.com/hassanHamdiashour/" target='_blank'><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/hassan-hamdia/" target='_blank'><i className="fab fa-linkedin"></i></a>
            <a href="hassanhh1996eng@gmail.com" target='_blank' ><i className="fab fa-google"></i></a>
            <a href=" https://github.com/hassan3030" target='_blank' ><i className="fab fa-github"></i></a>
        </div>
    </footer>
    </div>
  )
}

export default Footer
