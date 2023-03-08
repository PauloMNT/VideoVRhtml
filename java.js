function isDeviceOrientationSupported() {
    return !!window.DeviceOrientationEvent;
  }
  window.addEventListener('deviceorientation', handleOrientation);
  