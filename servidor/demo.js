// Called after form input is processed
function startConnect() {
    // Generate a random client ID
    document.getElementById("status3").innerHTML = '<span>Encomenda: ' + 'Aguardando' + '</span><br/>';
    clientID = "clientID-" + parseInt(Math.random() * 100);

    // Fetch the hostname/IP address and port number from the form
    host = 'test.mosquitto.org';
    port = '8080';

    // Print output for the user in the messages div
    document.getElementById("messages").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
    document.getElementById("messages").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';

    // Initialize new Paho client connection
    client = new Paho.MQTT.Client(host, Number(port), clientID);

    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // Connect the client, if successful, call onConnect function
    client.connect({ 
        onSuccess: onConnect,
    });
}

// Called when the client connects
function onConnect() {
    // Fetch the MQTT topic from the form
    topic = 'sensores/#';

    // Print output for the user in the messages div
    //document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';

    // Subscribe to the requested topic
    client.subscribe(topic);
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
    //document.getElementById("messages").innerHTML += '<span>ERROR: Connection lost</span><br/>';
    if (responseObject.errorCode !== 0) {
        //document.getElementById("messages").innerHTML += '<span>ERROR: ' + + responseObject.errorMessage + '</span><br/>';
    }
}

// Called when a message arrives
function onMessageArrived(message) {
    //console.log("onMessageArrived: " + message.payloadString);
    var tempHum = message.payloadString.split(':');
    if(message.payloadString == '1'){
        status = "Aberto";
        document.getElementById("status").innerHTML = '<span>Status: ' + status + '</span><br/>';
    }
    else if(message.payloadString == '0'){
        status = "Fechado";
        document.getElementById("status").innerHTML = '<span>Status: ' + status + '</span><br/>';
    }
    
    if (tempHum[0] == 'Temperature'){
        document.getElementById("status1").innerHTML = '<span>Temperature: ' + tempHum[1] + '</span><br/>';
    }
    if (tempHum[0] == 'humidity'){
        document.getElementById("status2").innerHTML = '<span>Humidade: ' + tempHum[1] + '</span><br/>';
    }
    var count = 0;
    if (message.payloadString == 'vazio'){
        if(count > 5){
            document.getElementById("status3").innerHTML = '<span>Encomenda: ' + 'Aguardando' + '</span><br/>';
        }
        count ++;
    }
    else if(message.payloadString == 'cheio'){
        document.getElementById("status3").innerHTML = '<span>Encomenda: ' + 'Recebido' + '</span><br/>';
        count = 0;
    }
    
}

// Called when the disconnection button is pressed
function startDisconnect() {
    client.disconnect();
    document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';
}