
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "Device Monitoring Service",
    "version": "1.0.0",
    "description": "Internal Kafka API for monitoring devices"
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
    "deviceMonitoring": {
      "description": "Channel for monitoring devices",
      "address": "device-monitoring",
      "messages": {
        "DeviceTelemetry": {
          "payload": {
            "type": "object",
            "properties": {
              "deviceId": {
                "type": "string",
                "description": "The ID of the device",
                "x-parser-schema-id": "<anonymous-schema-2>"
              },
              "type": {
                "type": "string",
                "description": "The type of telemetry",
                "x-parser-schema-id": "<anonymous-schema-3>"
              },
              "value": {
                "type": "string",
                "description": "The value of the telemetry",
                "x-parser-schema-id": "<anonymous-schema-4>"
              },
              "timestamp": {
                "type": "string",
                "description": "The timestamp of the telemetry",
                "x-parser-schema-id": "<anonymous-schema-5>"
              }
            },
            "required": [
              "deviceId",
              "type",
              "value",
              "timestamp"
            ],
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "x-parser-unique-object-id": "DeviceTelemetry",
          "x-parser-message-name": "DeviceTelemetry"
        }
      },
      "x-parser-unique-object-id": "deviceMonitoring"
    }
  },
  "operations": {
    "sendDeviceTelemetry": {
      "description": "Send a device telemetry update",
      "action": "send",
      "channel": "$ref:$.channels.deviceMonitoring",
      "x-parser-unique-object-id": "sendDeviceTelemetry"
    }
  },
  "components": {
    "messages": {
      "DeviceTelemetry": "$ref:$.channels.deviceMonitoring.messages.DeviceTelemetry"
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
  