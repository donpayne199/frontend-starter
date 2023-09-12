import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const dummy_places = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://media.istockphoto.com/id/486334510/photo/new-york-city-skyline.jpg?s=612x612&w=0&k=20&c=RkcUiEmZYarBPnQW8qm7GUJEegE24Molcl2ijMlY3kQ=",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484445,
      lng: 73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl: "https://media.istockphoto.com/id/486334510/photo/new-york-city-skyline.jpg?s=612x612&w=0&k=20&c=RkcUiEmZYarBPnQW8qm7GUJEegE24Molcl2ijMlY3kQ=",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484445,
      lng: 73.9882393,
    },
    creator: "u2",
  },
];
const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = dummy_places.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
