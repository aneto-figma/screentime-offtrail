// Shared config overrides applied at runtime via setConfigProperty
const SHARED_CONFIG = {
  theme: 'default',
  showRoadLabels: false,
  showPedestrianRoads: false,
}

export const MAP_STYLES = {
  Dark: {
    url: 'mapbox://styles/brettmcm/cmnhzyk7c007k01sg0u50hs3c',
    shadeFrom: '#615c67',
    shadeTo: 'rgba(97, 92, 103, 0)',
    config: {
      ...SHARED_CONFIG,
      lightPreset: 'dusk',
      colorLand: '#424857',
      colorBuildings: '#424857',
      colorIndustrial: '#424857',
      colorCommercial: '#424857',
      colorEducation: '#424857',
      colorMedical: '#424857',
      colorGreenspace: '#424857',
      colorRoads: '#5f788e',
      colorMotorways: '#5f788e',
      colorTrunks: '#5f788e',
      colorPlaceLabels: 'rgba(255, 255, 255, 0.4)',
      colorRoadLabels: 'rgba(255, 255, 255, 0.3)',
      colorPointOfInterestLabels: 'rgba(255, 255, 255, 0.3)',
      roadsBrightness: 0.2,
    },
  },
  Light: {
    url: 'mapbox://styles/brettmcm/cmni0akyb007l01sgh05a2roc',
    shadeFrom: '#5f788e',
    shadeTo: 'rgba(95, 120, 142, 0)',
    config: {
      ...SHARED_CONFIG,
      colorLand: '#5f788e',
      colorBuildings: '#5f788e',
      colorIndustrial: '#5f788e',
      colorCommercial: '#5f788e',
      colorEducation: '#5f788e',
      colorMedical: '#5f788e',
      colorGreenspace: '#5f788e',
      colorRoads: '#86a8c0',
      colorMotorways: '#86a8c0',
      colorTrunks: '#86a8c0',
      colorPlaceLabels: '#d2edff',
      colorRoadLabels: '#bbe4ff',
      colorPointOfInterestLabels: '#bbe4ff',
    },
  },
}
