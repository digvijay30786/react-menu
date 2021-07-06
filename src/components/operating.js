export default function Operating_system()
{
    var phone = ['Andriod','Blackberry','iPhone','window Phone'];
    return <div>
        <ul>
            {phone.map((el) => {
                return <li>{el}</li>
            })} 
        </ul>
    </div>;
}


