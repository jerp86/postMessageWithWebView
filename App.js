import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends Component {
  render() {
    const html = `
      <html>
      <head>
        <style>
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            background-color: #0069E7;
          }

          button {
            width: 80vw;
            height: 10vh;
            border-radius: 16px;
            background-color: #FFD000;

            font-weight: 700;
            font-size: 300%;
            line-height: 400%;
            color: #002063;
          }
        </style>
      </head>
      <body>
        <script>
          function sendMessage() {
            window.ReactNativeWebView.postMessage("Hello World! I'm the postMessage from the WebView");
          }
          
          function sendObject() {
            const jsonObj = JSON.stringify({
              id: 'firstTest',
              name: 'José Eduardo Rodrigues Pinto',
              email: 'jerp4@hotmail.com',
            });

            window.ReactNativeWebView.postMessage(jsonObj);
          }
        </script>

        <button type="button" onclick="sendMessage()">
          Click hear to send message
        </button>
        <br/>
        <button type="button" onclick="sendObject()">
          Click hear to send object
        </button>
      </body>
      </html>
    `;

    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ html }}
          onMessage={(event) => {
            alert(
              `This message comes from the WebView:\n${event.nativeEvent.data}`
            );
          }}
        />
      </View>
    );
  }
}
