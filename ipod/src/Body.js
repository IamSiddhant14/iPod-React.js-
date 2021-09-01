import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryHalf,faWifi, faPlay, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
// import Clock from 'react-live-clock';
// import moment from 'moment';
// import 'moment-timezone';
 
// let timezone = moment.tz.guess();

const Body = (props) => {
    return (
        <div className="bodyop">
            <div className="screen">
                <div className="flex">
                    <div className="wrapper">
                        <div className="ul">
                            <div class="vertical-menu">
                                <a href="#" class="active">Home</a>
                                <a href="#">Songs</a>
                                <a href="#">Albums</a>
                                <a href="#">Artist</a>
                                <a href="#">Playlist</a>
                            </div>
                        </div>

                        <div className="co" >
                            {/* <img src="https://images.unsplash.com/photo-1500568375449-5c89dbc6f812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"/> */}
                            <img src="https://source.unsplash.com/150x280/?nature,water" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="rollover-sq">
                <div className="circle">
                    <div className="up">
                        <a href="">MENU</a>
                    </div>
                    <div className="middle">
                        <div className="fast">
                            <FontAwesomeIcon icon={faBackward} />
                        </div>

                        <div className="insideCircle">
                            <span style={style.circle}></span>
                        </div>

                        <div className="fast">
                            <FontAwesomeIcon icon={faForward} />
                        </div>

                    </div>
                    <div className="lower">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                </div>
            </div>
        </div>




    )
}

const style = {
    circle: {
        height: 60,
        width: 60,
        backgroundColor: "#8A8A8C",
        borderRadius: 50,
        display: "inline-block"
    }
}

export default Body;