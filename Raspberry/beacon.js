var beacon = advertisement["iBeacon"];
    beacon.rssi = advertisement["rssi"];
    var uuid = beacon.uuid;
    var rssi = beacon.rssi;
    var uuidEntregador = getUuidEntregador()
    console.log(rssi);
    //console.log(typeof rssi);
    if (uuid == uuidEntregador && rssi > -75){
    console.log('True');
    client.publish('sensores/beacondlt', '1');
    }
    else if (uuid == uuidEntregador && rssi < -85){
        console.log('False');
        client.publish('sensores/beacondlt','0');
    }
    };

}

function getUuidEntregador(){
return 'EECD6E96-786E-4757-9522-A431B52B20BA'
}

