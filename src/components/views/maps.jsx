import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const MapaGoogle = withScriptjs(withGoogleMap(() => {
  return (
    <section className="mb-0">
    <iframe
      style={{ width: "100%", height: "360px" }}
      src="https://maps.google.com/maps?q=Mu%C3%B1ecas%20643,%20San%20Miguel%20de%20Tucum%C3%A1n,%20Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  </section>
  );
}));

export default MapaGoogle;
