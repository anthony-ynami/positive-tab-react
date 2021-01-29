import React, { Component } from 'react'

class TimeDate extends Component {

    constructor(props) {
        super(props);
        let day = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        this.state = {
            time: day.toLocaleTimeString(),
            date: day.toLocaleDateString(),
            d: days[day.getDay()],
        };
    }
    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000);

    };
    componentWillUnmount() {
        clearInterval(this.intervalID)
    };
    tick() {
        let day = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        this.setState({
            time: day.toLocaleTimeString(),
            date: day.toLocaleDateString(),
            d: days[day.getDay()],
        })
    }

    render() {
        // function startTime() {
        //     var today = new Date();
        //     var h = today.getHours();
        //     var m = today.getMinutes();
        //     var s = today.getSeconds();
        //     var ampm = "";
        //     m = checkTime(m);
        //     s = checkTime(s);
        //     if (h > 12) {
        //         h = h - 12;
        //         ampm = " PM";
        //     } else if (h === 12) {
        //         h = 12;
        //         ampm = " AM";
        //     } else if (h < 12) {
        //         ampm = " AM";
        //     } else {
        //         ampm = "PM";
        //     };

        //     if (h === 0) {
        //         h = 12;
        //     }

        //     var currentTime = h + ":" + m + ":" + s + ampm;
        //     console.log('time ran!')
        //     return currentTime
        // }

        // // var t = setTimeout(function () {
        // //     startTime()
        // // }, 500);

        // function checkTime(i) {
        //     if (i < 10) {
        //         i = "0" + i
        //     }; // add zero in front of numbers < 10
        //     return i;
        // }

        //date
        // function startDate() {
        //     var d = new Date();
        //     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        //     var currentDate = days[d.getDay()] + " | " + [d.getMonth() + 1] + "/" + d.getDate() + "/" + d.getFullYear();
        //     console.log('date ran!')
        //     return currentDate
        // };



        return (
            <div className="container">
                <div id="date">{this.state.d} | {this.state.date}</div>
                <div id="time">{this.state.time}</div>
            </div>
        )
    }
}


export default TimeDate;