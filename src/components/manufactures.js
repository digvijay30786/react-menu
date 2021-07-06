export default function Manufactures()
{
    var phone = ['samsung', 'HTC','Micromax','Apple'];
    return <div>
        <ul>
            {phone.map((el) => {
                return <li>{el}</li>
            })} 
        </ul>
    </div>;
}