import React, { Component } from 'react';

class PacketLatency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packetLatency: null
        };
    }

    componentDidMount() {
        let socket = new WebSocket("ws://localhost:55455");
        socket.onmessage = function(event) {
            this.setState({ packetLatency: event.data-Date.now()});
          };
    }

    render() {
        return (
            <span className="PacketLatency">
                {this.state.packetLatency}
            </span>
        );
    }
}

export default PacketLatency;
