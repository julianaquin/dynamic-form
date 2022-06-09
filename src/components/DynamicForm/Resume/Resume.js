import { Button, CardGroup, Modal } from 'react-bootstrap'
import CardResume from './CardResume'
import CardResumeHobbies from './CardResume/CardResumeHobbies';

export default function Resume({showModal, setModal, setStep}) {

    const favoriteFruit = localStorage.getItem('fruitName');
    const fruitIcon= localStorage.getItem('iconFruit');
    const hobbieStorage= JSON.parse(localStorage.getItem('Hobbie'));
    const additionalHobbie = localStorage.getItem('additionalHobbie');
    const comment= localStorage.getItem('comment');

    const clearForm = () =>{
        localStorage.clear();
        setModal(false);
        setStep(1);
    }

    return(
        <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={clearForm}>
        
            <Modal.Header closeButton>
                <Modal.Title>🥳 Congradulations 🥳</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Here is your resume</h4>
                <CardGroup className="mt-4">
                    {favoriteFruit && fruitIcon && (
                        <CardResume title={fruitIcon} subtitle='Your favourite fruit is' text={favoriteFruit} />
                    )}
                    {hobbieStorage && hobbieStorage && (
                        <CardResumeHobbies subtitle="Your hobbies" text={additionalHobbie} hobbieStorage={hobbieStorage} />
                    )}
                    {comment && comment &&(
                        <CardResume subtitle="And finally, your comment:" text={comment} />
                    )}
                </CardGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={clearForm}
                variant="outline-dark">
                    Exit and Clear Form
                </Button>
            </Modal.Footer>
                       
        </Modal>



    )
    
};
