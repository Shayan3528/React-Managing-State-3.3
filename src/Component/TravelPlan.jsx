import {useState} from 'react';
import { initialTravelPlan } from "../Data/Place";
import PlaceTree from './PlaceTree';

export default function TravelPlan(){
    
   
    const [plan,setPlane] = useState(initialTravelPlan);
    
    
    const planets = plan.childPlaces;
    return(
        <>
            <h2>Place to Visit</h2>
            <ol>
                {planets.map(place => <PlaceTree key = {place.id} place = {place}/>)}

            </ol>

        </>

    );
}