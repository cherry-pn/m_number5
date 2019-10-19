import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class Stopwatch extends Component {
    state = {
        status: false,
        ms: 0,
        minutes: 0,
        seconds: 0
    };
    handleStart = (e) => {
        e.preventDefault();
        this.setState({status: true})
        if (this.state.status) {
            this.timer = setInterval(() => {
                const { ms, seconds, minutes } = this.state;
                if (ms > 0) {
                    this.setState(({ ms }) => ({
                        ms: ms - 1
                    }));
                } else {
                    if (seconds > 0) {
                        this.setState(({ seconds }) => ({
                            seconds: seconds - 1,
                            ms: 59
                        }));
                    }
                    else {
                        if (minutes === 0) {
                            clearInterval(this.timer)
                        } else {
                            this.setState(({ minutes }) => ({
                                minutes: minutes - 1,
                                seconds: 59
                            }));
                        }
                    }
                }
            }, 16.6666666667);
        }
    };

    handleStop = (e) => {
        e.preventDefault();
        this.setState({status: false});
        clearInterval(this.timer)
    }
    handleReset = () => {
        clearInterval(this.timer);
        this.setState({ minutes: 0, seconds: 0, ms: 0, status: false });
    };
    render() {
        const divStyle = {
            border: '2px solid black', marginLeft: '30%', marginRight: '30%', backgroundColor: 'antiquewhite'
        }
        const inputStyle = {
            padding: '1%', width: '40%', marginBottom: '3%', marginTop: '3%', margin: '2%',
            fontSize: '30px', border: '2px solid black', border: 'none', backgroundColor: 'transparent', borderBottom: '2px solid black'
        }
        const btnStyle = {
            padding: '1%', margin: '1%', borderRadius: '15px', width: '100px', fontSize: '20px'
        }
        const { status, ms, minutes, seconds } = this.state;
        return (
            <div style={divStyle}>
                <h1 style={{ textAlign: 'center' }}>{minutes} : {seconds} : {ms}</h1>
                <center>
                    <Button style={btnStyle} variant="info" onClick={e => this.handleStart(e)}>Start</Button>
                    <Button style={btnStyle} variant="info" onClick={e => this.handleStop(e)}>Stop</Button>
                    <Button style={btnStyle} variant="danger" onClick={this.handleReset}>Reset</Button>
                    <div><input style={inputStyle} type="number" placeholder="Input here...." onChange={e => this.setState({ minutes: e.target.value })} /></div>
                </center>

            </div>
        );
    }
}

export default Stopwatch;