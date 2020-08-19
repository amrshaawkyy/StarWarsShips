import React from 'react';
import classes from "./Footer.css";
import button from '../../UI/Button/Button';
const footer = () => {
    return (
        <div>
            <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
            <footer>
                <div className="search-text">
                    <div className="container">
                        <div className="row text-center">
                            <div className={classes.form}>
                                <h4>SIGN UP TO OUR New StarWars Ship</h4>
                                <form id="search-form" className="form-search form-horizontal">
                                    <input type="text" className="input-search" placeholder="Email Address" />
                                    <button type="submit" className="btn-search" >SUBMIT</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-top" >
                    <div className="container" style={{ marginTop: '20px' }}>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <a href="https://www.facebook.com/StarWars/"><i className="fa fa-facebook fa-2x"></i>Facebook</a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <a href="https://twitter.com/starwars"><i className="fa fa-twitter fa-2x"></i>Twitter</a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <a href="https://www.flickr.com/photos/tags/starwars/"><i className="fa fa-flickr fa-2x"></i>Flickr</a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <a href="https://www.tumblr.com/tagged/star-wars"><i className="fa fa-tumblr fa-2x"></i>Tumblr</a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <a href="https://github.com/topics/star-wars"><i className="fa fa-github fa-2x"></i>Github</a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 text-center">
                            <a href="https://play.google.com/store/apps/details?id=com.disney.starwarshub_goo&hl=en"><i className="fa fa-google-plus fa-2x"></i>Google</a>
                        </div>
                    </div>
                </div>
                <div className={classes.copyright}>
                    <div className="container">
                        <div className="row text-center">
                            <p>Copyright © 2020 All rights reserved</p>
                        </div>

                    </div>
                </div>
                <a href="/" className={classes.up} >
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </a>
            </footer>
        </div>
    );
}
export default footer;


// {(document.body.scrollTop > '20' || document.documentElement.scrollTop > '20') ? { display: 'block' } : { display: 'none' }}