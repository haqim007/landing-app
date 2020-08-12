import React, { Component } from 'react'
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import axios from "axios";
import ArrowsImg from "assets/images/oval-icon@2x.png";

export default class HelpTips extends Component {
                 state = {
                   helpTips: [],
                 };

                 componentDidMount() {
                   axios
                     .get(`https://wknd-take-home-challenge-api.herokuapp.com/help-tips`)
                     .then((res) => {
                       const helpTips = res.data;
                       this.setState({ helpTips });
                     });
                 }
                 render() {
                   return (
                     <div className="row content-box-div help-tips">
                       <div className="col-md-6 offset-2 content-box-title">
                         Help & Tips
                       </div>
                       <div className="col-md-10" style={{ marginTop: 30 }}>
                         <div className="row">
                           {this.state.helpTips.map((elm, id) => {
                               return (
                                 <div className="col-md-4 col-sm-12 ht-div" key={id}>
                                   <Card
                                     style={{
                                       backgroundImage: `url(${elm.image})`,
                                       backgroundNoRepeat: "no-repeat",
                                       backgroundPosition: "100%",
                                       height: "176px",
                                       backgroundSize: "cover",
                                       
                                     }}
                                   >
                                     <CardBody className="ht-body-div"></CardBody>
                                     <div className="card-footer ht-text-div">
                                       <div className="row">
                                         <div className="ht-text col-9">
                                           {elm.title}
                                         </div>
                                         <img
                                           src={ArrowsImg}
                                           className="col-3 arrow-icon"
                                           alt={elm.slug}
                                           style={{ float: "right" }}
                                         />
                                       </div>
                                     </div>
                                   </Card>
                                 </div>
                               );
                           })}
                           
                         </div>
                       </div>
                     </div>
                   );
                 }
               }
