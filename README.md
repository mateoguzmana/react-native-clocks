<h1 align="center">React Native Clocks 🕑</h1>

<p align="center">React Native customisable clocks built with <a href="https://github.com/Shopify/react-native-skia" target="_blank">@shopify/react-native-skia</a></p>

![React Native Clocks](https://user-images.githubusercontent.com/20783123/192152085-f14f5025-c7e0-48e3-b0fd-899edeb5944f.jpg)

## Installation

```sh
yarn add react-native-clocks
yarn add @shopify/react-native-skia
```

## Usage

Analog:

```js
import { Clock } from 'react-native-clocks';

// ...

export default function App() {
  return <Clock />;
}
```

Digital:

```js
import { DigitalClock } from 'react-native-clocks';

// ...

export default function App() {
  return <DigitalClock />;
}
```

Take a look to the [example](./example/) folder where there are different examples of the clock's theming usage .

## Library Under Construction 🚧

This library is still under construction, more customisable elements for the clocks are coming soon.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
