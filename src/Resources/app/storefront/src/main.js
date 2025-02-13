import DtgsGoogleTagManagerPlugin from './plugin/gisl-google-tag-manager/gisl-google-tag-manager.plugin';

window.PluginManager.register('GoogleTagManager', DtgsGoogleTagManagerPlugin);

// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}