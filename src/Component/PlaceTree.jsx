export default function PlaceTree({ id, placesById }) {
 
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li>
      {place.title}
      {childIds.length > 0 && (
        <ol>
          {childIds.map((id) => (
            <PlaceTree key={id} id={id} placesById={placesById} />
          ))}
        </ol>
      )}
    </li>
  );
}
