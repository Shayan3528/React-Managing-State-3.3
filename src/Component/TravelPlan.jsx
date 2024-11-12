import {useState} from 'react';
import { initialTravelPlan } from "../Data/Place";
import PlaceTree from './PlaceTree';

export default function TravelPlan(){
    
   
    const [plan,setPlane] = useState(initialTravelPlan);
    const root  = plan[0];
    const planetIds = root.childIds;
    
    return(
        <>
            <h2>Place to Visit</h2>
            <ol>
                {planetIds.map(placeId => <PlaceTree key = {placeId} id = {placeId} placesById = {plan}/>)}

            </ol>

        </>

    );
}