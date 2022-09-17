import { AppRegistry } from 'react-native';
import { LoadSkiaWeb } from '@shopify/react-native-skia/lib/module/web';
import { version } from 'canvaskit-wasm/package.json';
LoadSkiaWeb({
  locateFile: (file) =>
    `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}`,
}).then(async () => {
  const App = (await import('./src/App')).default;
  AppRegistry.registerComponent('Example', () => App);
});
