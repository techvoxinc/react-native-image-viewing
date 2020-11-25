# react-native-image-viewing

> React Native modal component for viewing images as a sliding gallery.

[![npm version](https://badge.fury.io/js/react-native-image-viewing.svg)](https://badge.fury.io/js/react-native-image-viewing)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

- 🔥Pinch zoom for both iOS and Android
- 🔥Double tap to zoom for both iOS and Android
- 🔥Supports swipe-to-close animation
- 🔥Custom header and footer components
- 🔥Uses VirtualizedList to optimize image loading and rendering

Try with Expo: https://expo.io/@antonkalinin/react-native-image-viewing

<p align="center">
  <img src="https://github.com/jobtoday/react-native-image-viewing/blob/master/demo.gif?raw=true" height="480" />
</p>

## Installation

```bash
yarn add react-native-image-viewing
```

or

```bash
npm install --save react-native-image-viewing
```

## Usage
Data structure:


| key               | value                                                                                         |  Required |
| ------------------------ | --------------------------------------------------------------------------------------------------- |  -------- |
| `uri`                 | Image URI                                                                          |  true     |
| `filename`             | Name of file with extension. Name will be shown in share feature                                                                   |  true     |
| `mimetype`             | Required for iOS devices to show documents in `WebView`                                                                   |  false     |
| `preview`             | Preview image of document. Required only for Android devices for files which mimetype is other than `image`             |  false     |

```jsx
import ImageView from "react-native-image-viewing";

const images = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    filename:"photo.jpeg",
  },
  {
    uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    preview:"https://process.filestackapi.com/ARchbQXoQ5mRaOh6Yn4cqz/output=f:jpg/resize=width:670,height:700,fit:crop/https://cdn.filestackcontent.com/HysTdvZsSY6ATJcuJ3WR",
    filename:"test.pdf",
    mimetype:"application/pdf"
  }
];

const [visible, setIsVisible] = useState(false);

<ImageView
  images={images}
  imageIndex={0}
  visible={visible}
  onRequestClose={() => setIsVisible(false)}
/>
```

#### [See Example](https://github.com/jobtoday/react-native-image-viewing/blob/master/example/App.tsx#L62-L80)

## Props

| Prop name                | Description                                                                                         | Type                                                        | Required |
| ------------------------ | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | -------- |
| `images`                 | Array of images to display                                                                          | ImageSource[]                                               | true     |
| `imageIndex`             | Current index of image to display                                                                   | number                                                      | true     |
| `visible`                | Is modal shown or not                                                                               | boolean                                                     | true     |
| `onRequestClose`         | Function called to close the modal                                                                  | function                                                    | true     |
| `onImageIndexChange`     | Function called when image index has been changed                                                   | function                                                    | false    |
| `onLongPress`            | Function called when image long pressed                                                             | function (event: GestureResponderEvent, image: ImageSource) | false    |
| `delayLongPress`         | Delay in ms, before onLongPress is called: default `800`                                            | number                                                      | false    |
| `animationType`          | Animation modal presented with: default `fade`                                                      | `none`, `fade`, `slide`                                     | false    |
| `presentationStyle`      | Modal presentation style: default: `fullScreen` **Android:** Use `overFullScreen` to hide StatusBar | `fullScreen`, `pageSheet`, `formSheet`, `overFullScreen`    | false    |
| `backgroundColor`        | Background color of the modal in HEX (#000000EE)                                                    | string                                                      | false    |
| `swipeToCloseEnabled`    | Close modal with swipe up or down: default `true`                                                   | boolean                                                     | false    |
| `doubleTapToZoomEnabled` | Zoom image by double tap on it: default `true`                                                      | boolean                                                     | false    |
| `HeaderComponent`        | Header component, gets current `imageIndex` as a prop                                               | component, function                                         | false    |
| `FooterComponent`        | Footer component, gets current `imageIndex` as a prop                                               | component, function                                         | false    |
| `webViewSupportedMimeTypes`        | Array of mimetypes for which iOS should use `WebView` for display file/document. Default `['application/pdf']`           | string[]                                                    | false    |
| `ShareIcon`        | Array of mimetypes for which iOS should use `WebView` for display file/document. Default `<Text>v</Text>`           | component                                                    | false    |

- type ImageSource = ImageURISource | ImageRequireSource

## Contributing

To start contributing clone this repo and then run inside `react-native-image-viewing` folder:

```bash
yarn
```

Then go inside `example` folder and run:

```bash
yarn & yarn start
```

This will start packager for expo so you can change `/src/ImageViewing` and see changes in expo example app.

## License

[MIT](LICENSE)
