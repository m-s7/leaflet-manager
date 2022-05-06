import { has, isEmpty } from 'lodash'
import { control, Control, Layer, Map } from 'leaflet'

type ControlManagerActions = {
    showControl(): void,
    hideControl(): void,
    addLayerToControl(layer: Layer, group: string): void,
    removeLayerFromControl(group: string): void,
}

export const createControlManager = (map: Map): ControlManagerActions => {
    let controlLayer: Control.Layers
    const controlLayerList: { [x: string]: Layer } = {}

    return {
        showControl() {
            controlLayer = control.layers(undefined, controlLayerList).addTo(map)
        },
        hideControl() {
            if(controlLayer)
                map.removeControl(controlLayer)
        },
        addLayerToControl(layer: Layer, group) {
            controlLayerList[group] = layer
        },
        removeLayerFromControl(group) {
            if(has(controlLayerList, group))
                delete controlLayerList[group]

            if(controlLayer)
                map.removeControl(controlLayer)
            
            if(!isEmpty(controlLayerList))
                this.showControl()
        },
    }
}