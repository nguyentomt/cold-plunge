// "use client";
// import React, { useEffect, useState } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// type WorldmapProps = {
//   setMap: (map: google.maps.Map | null) => void;
// };

// export function Map({ setMap }: WorldmapProps) {
//   const mapElementRef = React.useRef<HTMLDivElement>(null);
//   let infoWindowOpen = React.useRef(false);

//   const initMap = async () => {
//     const loader = new Loader({
//       apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
//       version: "weekly",
//       libraries: ["places"],
//     });
//     const { Map } = await loader.importLibrary("maps");
//     const { AdvancedMarkerElement } = (await loader.importLibrary(
//       "marker"
//     )) as google.maps.MarkerLibrary;

//     const origin = { lat: 40.8471, lng: -73.9246 };

//     const mapOptions: google.maps.MapOptions = {
//       center: origin,
//       zoom: 12,
//       mapId: "BBOYWORLD_MAPID",
//       gestureHandling: "greedy",
//     };

//     let map: google.maps.Map | null = null;

//     if (mapElementRef.current) {
//       map = new Map(mapElementRef.current as HTMLDivElement, mapOptions);
//       setMap(map);

//       const addMarkersToMap = (map: google.maps.Map) => {
//         const location = results[0].geometry.location; // insert lat/lng
//         const newMarker = new AdvancedMarkerElement({
//           map,
//           position: location,
//           title: markerData.name,
//         });
//         // console.log(`${markerData.name} added to map`);

//         const contentString = `<div><font size="4" color="blue"><u>Meta Labs Cold Plunge</u></font><font color="blue"><p><strong>Address: </strong>${markerData.address}<p><strong>Time: </strong>${markerData.time}<p><strong>Frequency: </strong>${markerData.frequency}<p><strong>Contact: </strong>${markerData.contact}<p><strong>Style: </strong>${markerData.style}</font></div>`;
//         const infoWindow = new google.maps.InfoWindow({
//           content: contentString,
//         });

//         // Open/close info windows on each marker
//         newMarker.addListener("click", () => {
//           if (!infoWindowOpen.current) {
//             infoWindow.open(map, newMarker);
//             infoWindowOpen.current = true;
//           } else {
//             infoWindow.close();
//             infoWindowOpen.current = false;
//           }
//         });

//         map.setCenter(location);
//       };
//       addMarkersToMap(map);
//     }
//   };

//   return <div className="w-full h-[90vh]" ref={mapElementRef} />;
// }
