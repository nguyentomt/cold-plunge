"use client";
import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type WorldmapProps = {
  setMap: (map: google.maps.Map | null) => void;
};

export function Map({ setMap }: WorldmapProps) {
  const mapElementRef = React.useRef<HTMLDivElement>(null);
  let infoWindowOpen = React.useRef(false);

  const initMap = async () => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: "weekly",
      libraries: ["places"],
    });
    const { Map } = await loader.importLibrary("maps");
    const { AdvancedMarkerElement } = (await loader.importLibrary(
      "marker"
    )) as google.maps.MarkerLibrary;

    const origin = { lat: 33.717293, lng: -117.999583 };

    const mapOptions: google.maps.MapOptions = {
      center: origin,
      zoom: 12,
      mapId: "BBOYWORLD_MAPID",
      gestureHandling: "greedy",
    };

    let map: google.maps.Map | null = null;

    if (mapElementRef.current) {
      map = new Map(mapElementRef.current as HTMLDivElement, mapOptions);
      setMap(map);

      const addMarkersToMap = (map: google.maps.Map) => {
        const location = origin; // insert lat/lng
        const newMarker = new AdvancedMarkerElement({
          map,
          position: location,
          title: "Meta Labs Cold Plunge",
        });
        // console.log(`${markerData.name} added to map`);

        const contentString = `<div><font size="4" color="blue"><u>Meta Labs Cold Plunge</u></font><font color="blue"><p><strong>Address: </strong>16882 Gothard St unit b, Huntington Beach, CA 92647</font></div>`;
        const infoWindow = new google.maps.InfoWindow({
          content: contentString,
        });

        // Open/close info windows on each marker
        newMarker.addListener("click", () => {
          if (!infoWindowOpen.current) {
            infoWindow.open(map, newMarker);
            infoWindowOpen.current = true;
          } else {
            infoWindow.close();
            infoWindowOpen.current = false;
          }
        });

        map.setCenter(location);
      };
      addMarkersToMap(map);
    }
  };

  initMap();

  return <div className="w-full h-[90vh]" ref={mapElementRef} />;
}
