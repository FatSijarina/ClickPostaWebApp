import React from "react";
import "./about-us-styles.scss"
import Time from "../../img/aboutUs-assets/clock.png";
import Support from "../../img/aboutUs-assets/support.png";
import Security from "../../img/aboutUs-assets/security.png";
import Price from "../../img/aboutUs-assets/wallet.png";
import Mbledhja from "../../img/aboutUs-assets/logistics.png";
import Klasifikimi from "../../img/aboutUs-assets/delivery.png";
import Shperndarja from "../../img/aboutUs-assets/destination.png";
import img1 from "../../img/aboutUs-assets/img1.jpg";
import AboutUsImage from './about-us-video.jpg';



export default function AboutUs(){
    return(
        
        <div className="main-div">
           

                <div className="cards">
                    <img src={AboutUsImage} className="aboutUsImage"/>
                    <div className="card-outline">
                            <div className="card-inline">
                                <h6>Staf i zgjedhur me pervoje!</h6>
                                <p></p>
                            </div>
                    </div>

                        <div className="card-outline">
                            <div className="card-inline">
                                <h6>Besueshmeri!</h6>
                                <p></p>
                            </div>
                        </div>

                        <div className="card-outline">
                            <div className="card-inline">
                                <h6>Dergesa brenda 24h</h6>
                                <p></p>
                            </div>
                        </div>
                </div>

        

            <div className="section2">
                <h4 className="h4">Pse ClickPosta?</h4>
                <div className="div-section2">
                   <div className="time-support">
                       <h6>Dergesa ne kohe!</h6>
                       <img src={Time} className="img"/>
                       <img src={Support}className="img" />
                       <h6>Support ne cdo moment</h6>
                   </div>
                   <div className="price-security">
                   <h6>Oferta dhe cmime te uleta</h6>
                       <img src={Price} className="img"/>
                       <img src={Security}className="img" />
                       <h6>Siguri e garantuar</h6>
                   </div>
                </div>
            </div>

    
            <div className="section3">
                <h2 style={{color: "white"}}>Si funksionon ClickPosta?</h2>
                <div className="div-funksione">
                    <div className="div-mbledhja">
                        <p>Mbledhja</p>
                        <img src={Mbledhja} className="section3-img"/>
                        <p>Mbledhja e porosive nga <br /> 
                            punetoret tone tek klientet <br />
                            (ne gjithe territorin e Kosoves)
                        </p>
                    </div>
                    <div className="div-klasifikimi">
                        <p>Klasfikimi</p>
                        <img src={Klasifikimi} className="section3-img"/>
                        <p>Grumbullimi dhe klasifikimi i <br /> porosive ne depot perkatese 
                        <br /> per nisje ne adresat e caktuara.
                        </p>
                    </div>
                    <div className="div-shperndarja">
                    <p>Shperndarja</p>
                        <img src={Shperndarja} className="section3-img"/>
                        <p>Nisja e porosive nga punetori <br /> perkates per realizimin e <br /> 
                            dergeses ne adresat e caktuara.
                        </p>
                    </div>
                </div>
            </div>


            <div className="section4">
                <div className="img2">
                    <img src={img1}  />
                    <p>N?? ClickPoste besojm?? fort se proceset e sh??rbimeve tona ofrojn??  <br />zgjidhje p??r individ??t dhe krijojn?? mund??si rritjeje p??r bizneset. <br /> Prandaj kemi b??r?? bashk?? individ?? t?? motivuar dhe profesionist?? <br /> t?? fush??s p??r t`ju ofruar zgjidhje afatgjata dhe besueshm??ri. <br /><br />
                        Ne premtojm?? t?? kujdesemi p??r t?? gjith?? menaxhimin e zinxhirit <br /> t?? furnizimit, p??r t?? b??r?? d??rges??n tuaj t?? sigurt, t?? shpejt?? dhe n?? koh??.</p>
                    
                </div>
                
            </div>

            <div className="contact-aboutus">
                <button className="button-aboutus">Contact us</button>
            </div>

        </div>

)
}