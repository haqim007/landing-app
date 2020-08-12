import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CustomArrow from "components/Slider/CustomArrow";


export default class Testimonial extends Component {
   state = {
    testimonial: []
  }

  componentDidMount() {
    axios
      .get(`https://wknd-take-home-challenge-api.herokuapp.com/testimonial`)
      .then((res) => {
        const testimonial = res.data;
        this.setState({ testimonial });
      });
  }
  render() {
    const settings = {
      className: "slider variable-width",
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      centerMode: true,
      variableWidth: true,
      style: { width: 621 },
      centerPadding:50,
      slidesPerRow:2,
      rows: 1,
      prevArrow: <CustomArrow className="slick-arrow slick-prev" onClick={() => this.slider.slickPrev()} />,
      nextArrow: <CustomArrow className="slick-arrow slick-nextn" onClick={() => this.slider.slickNext()}/>,
      mobileFirst: true,
      responsive:[{
          breakpoint: 300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
          }
        }]
    };
    return (
      <div className="row">
        <div className="testimonial">
          <div className="col-4 offset-4 testi-title"> Testimonial </div>
          <div className="col-12">
            <Slider {...settings}>
              {this.state.testimonial.map((elem, id) => {
                return (
                  <div style={{ width: "247px" }} key={id}>
                    <Card className="card-2">
                      <CardBody title={elem.by}>{elem.testimony}</CardBody>
                    </Card>
                  </div>
                );
              })}
              {this.state.testimonial.map((elem, id) => {
                return (
                  <div style={{ width: "247px" }} key={id}>
                    <Card className="card-2">
                      <CardBody title={elem.by}>{elem.testimony}</CardBody>
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}