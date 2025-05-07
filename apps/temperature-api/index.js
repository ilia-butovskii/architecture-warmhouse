const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});

app.get('/temperature', (req, res) => {
    let location = req.query.location;

    if (location == "") {
		switch (sensorId) {
		case "1":
			location = "Living Room"
            break;
		case "2":
			location = "Bedroom"
            break;
		case "3":
			location = "Kitchen"
            break;
		default:
			location = "Unknown"
		}
	}

    if (sensorId == "") {
		switch (location) {
		case "Living Room":
			sensorId = "1"
            break;
		case "Bedroom":
			sensorId = "2"
            break;
		case "Kitchen":
			sensorId = "3"
            break;
		default:
			sensorId = "0"
            break;
		}
	}

    const temperature = Math.floor(Math.random() * 100);

    res.json({
        Value: temperature,
        Unit: "°C",
        Timestamp: new Date().toISOString(),
        Location: location,
        SensorID: sensorId,
        SensorType: "temperature",
        Description: "Temperature in " + location
    }).status(200);
});

app.get('/temperature/:id', (req, res) => {
    let sensorId = req.params.id;
    let location = "";
    
    switch (sensorId) {
    case "1":
        location = "Living Room"
        break;
    case "2":
        location = "Bedroom"
        break;
    case "3":
        location = "Kitchen"
        break;
    default:
        location = "Unknown"
    }
    
    const temperature = Math.floor(Math.random() * 100);
        
    res.json({
        value: temperature,
        unit: "°C",
        timestamp: new Date().toISOString(),
        location: location,
        sensor_id: sensorId,
        sensor_type: "temperature",
        status: "active",
        description: "Temperature in " + location
    });
});