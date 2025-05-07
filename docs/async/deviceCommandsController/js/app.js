
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Device Commands Controller",
    "version": "1.0.0",
    "description": "Internal Kafka API for sending commands to devices"
  },
  "servers": {
    "production": {
      "host": "kafka.warmhouse.com:9092",
      "protocol": "kafka",
      "description": "Production Kafka server"
    }
  },
  "defaultContentType": "application/json",
  "channels": {
    "deviceCommands": {
      "description": "Channel for sending commands to devices",
      "address": "device-commands",
      "messages": {
        "deviceCommand": {
          "payload": {
            "type": "object",
            "properties": {
              "deviceId": {
                "type": "string",
                "description": "The ID of the device to send the command to",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "command": {
                "type": "string",
                "description": "The command to send to the device",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "value": {
                "type": "string",
                "description": "Optional command value",
                "x-parser-schema-id": "<anonymous-schema-4>"
              }
            },
            "required": [
              "deviceId",
              "command"
            ],
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-unique-object-id": "deviceCommand",
          "x-parser-message-name": "DeviceCommand"
        }
      },
      "x-parser-unique-object-id": "deviceCommands"
    }
  },
  "operations": {
    "sendDeviceCommand": {
      "description": "Send a command to a device",
      "action": "send",
      "channel": "$ref:$.channels.deviceCommands",
      "x-parser-unique-object-id": "sendDeviceCommand"
    }
  },
  "components": {
    "messages": {
      "DeviceCommand": "$ref:$.channels.deviceCommands.messages.deviceCommand"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  