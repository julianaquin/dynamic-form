import { Card } from "react-bootstrap";


export default function CardResumeHobbies(props) {

    const{ subtitle, hobbieStorage, text} = props;

    return(
        <div>
            <Card className="text-center p-2 card-resume">
                <Card.Body>
                    <Card.Subtitle>
                        <b>{subtitle}</b>
                    </Card.Subtitle>
                    <ul>
                        {hobbieStorage.map((hobbie, index) => (
                            <li key={index}>{hobbie.label}</li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
            {text && (
                <Card className="text-center p2 card-resume">
                <Card.Body>
                    <Card.Subtitle><b>Your additional Hobbie is:</b></Card.Subtitle>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
                </Card>
            )}
        </div>
    )
    
};
