import React from "react";
import "./style.scss";
import InstaLogo from "../../img/footer-assets/instagram-logo.svg"
import FBLogo from "../../img/footer-assets/facebook-logo.svg"
import TwitterLogo from "../../img/footer-assets/twitter-logo.svg"

export default function Footer() {

        return (
            
            <footer className="footer">
                <div className="container">
                    <div className="images">
                        <img src={InstaLogo} alt="instagram logo" />
                        <img src={FBLogo} alt="facebook-logo" />
                        <img src={TwitterLogo} alt="twitter-logo" />
                    </div>
                    <div className="text">
                        <p>Info</p>
                        <p>Marketing</p>
                        <p>Support</p>
                    </div>
                    <div className="text2">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                    <p className="copyright-text">©2022 ClickPosta</p>
                    
                </div>
            </footer>

        )

    }
