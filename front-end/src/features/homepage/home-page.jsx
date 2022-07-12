import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home-page.scss';
import Van from '../../img/home-page-assets/Group 82.svg';
import Workers from '../../img/home-page-assets/workers.jpg';
import KosovoMap from '../../img/home-page-assets/Group 83.svg';
import axios from 'axios';

export default function Ballina() {

    return (
        <div className="base-container"> 

          <div className="main-div-ballina">       
          <h1 className="ballina-title" style={{color:"white"}}>Dergesa te realizuara me vetem nje click</h1>
          <Link to="../../Register">
          <button type="submit" className="button-register-ballina">Regjistrohu</button>
          </Link>
          </div>

          <div className="section2-ballina">
            <img src={Van} className="img-section2-ballina" />
            <img src={Workers} className="workers-ballina" />
            <p className="content-ballina">Ashtu sic ju krenoheni per udheheqjen e tregut tuaj, ne krenohemi qe udheheqim
              tregon tone. Klientet tane globale jane gjigandet e tregtise elektronike, <br />
              shitesit me pakice, bankat sipermarresit dhe SME-te. Te bashkohesh me familjen ClickPosta 
              do te thote qe ne bejme te gjithe punen, qe nga momenti kur <br /> klienti juaj ben porosine e tij
              deri tek buzeqeshjet e lumtura qe marrin dorezimin ne dere. 
              <b>Eshte e thjeshte. Perqendrohuni ne ate qe beni me mire. Ne <br /> kujdesemi per per pjesen tjeter</b>
            </p>
            <Link to="../../AboutUs" className="link-aboutUs">Lexo me shume rreth nesh</Link>
            

            <img src={KosovoMap} className="kosovo-map-ballina" />
            
          </div>

        </div>    
    )
}