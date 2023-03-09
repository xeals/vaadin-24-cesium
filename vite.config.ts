import { UserConfigFn } from 'vite';
import { overrideVaadinConfig } from './vite.generated';
import cesium from 'vite-plugin-cesium';

const customConfig: UserConfigFn = (env) => ({
    plugins: [
        cesium({rebuildCesium: true})
    ]
});

export default overrideVaadinConfig(customConfig);
