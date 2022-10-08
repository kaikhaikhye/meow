import { Component } from "react";
import './Form.css';
import { useNavigate } from 'react-router-dom';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            name: "React",
            iteration: 0,
            sendText: "Choose Yes bobo",
            arr: ["die", "say yes", "yes", "i spent a billion hours on this", "mean", "why can't you just love me, will i ever be enough?", "gave u the stars and moon but all u wanted was space", "meow", "how could we ever just be friends", "i love u pls don't reject me", "i will leak ur 2020 tiktoks if u dont accept me", "ok im done"]
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    formSubmit(event) {
        event.preventDefault();
        if (this.state.selectedOption === "YES") {
            this.props.navigate('/accepted')
        } else if (this.state.selectedOption === "NO") {

            this.setState((state) => {
                return { iteration: state.iteration + 1 };
            });

            if (this.state.iteration === 12) {
                window.open("https://youtu.be/UQcOFGosD8Q?t=43")
                this.setState(() => {
                    return { sendText: "</3" };
                });

            }
        }
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>

                <label>
                    YES
                    <input
                        className="checkbox"
                        type="radio"
                        value="YES"
                        checked={this.state.selectedOption === "YES"}
                        onChange={this.onValueChange}
                    />
                </label>
                <label>
                    NO
                    <input
                        className="checkbox"
                        type="radio"
                        value="NO"
                        checked={this.state.selectedOption === "NO"}
                        onChange={this.onValueChange}
                    />
                </label>
                <button className={this.state.selectedOption ? "send" : "unselectedSend"} type="submit">
                    {
                        this.state.selectedOption === "NO" ? this.state.sendText : "SEND"
                    }
                </button>
                {
                    this.state.iteration === 0 || this.state.iteration > 12 ? "" : <div id="speech-bubble">
                        <div id="bub-part-a"></div>
                        <div id="bub-part-b"></div>
                        <div id="bub-part-c"></div>
                        <div id="speech-txt">
                            {this.state.arr[this.state.iteration -1]}
                        </div>
                        <div id="bub-part-c"></div>
                        <div id="bub-part-b"></div>
                        <div id="bub-part-a"></div>

                        <div id="speech-arrow">
                            <div id="arrow-w"></div>
                            <div id="arrow-x"></div>
                            <div id="arrow-y"></div>
                            <div id="arrow-z"></div>
                        </div>
                    </div>
                }

            </form>


        );
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Form {...props} navigate={navigate} />
}

export default WithNavigate