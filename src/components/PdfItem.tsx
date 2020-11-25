import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

type Props = {
  file: any;
  onLoad: () => void;
};

function PdfItem({ file, onLoad }: Props) {

  return (
    <View
      style={{
        backgroundColor: "transparent",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <WebView
        source={{
          uri: file.uri,
        }}
        onLoad={onLoad}
      />
    </View>
  );
}

export default PdfItem;
