import { useRef } from 'react';
import classes from './newsletterForm.module.css';

export default function NewsletterForm() {

    const nameInput = useRef();

    const emailInput = useRef();


    function submitHandler(event) {
        event.preventDefault();
        const enteredName = nameInput.current.value;

        const enteredEmail = emailInput.current.value;


        const formsData = {
            name: enteredName,

            email: enteredEmail,

        };
        console.log(formsData);
    }

    return (

        <div className={classes.container}>




            <form className={classes.formContainer} onSubmit={submitHandler}>

                <h2 >
                    FAÇA SUA ASSINATURA
                </h2>
                <div className={classes.lineOne}>
                    <input
                        type="text"
                        id="name"
                        className={classes.input}
                        required
                        ref={nameInput}
                        placeholder="Nome" />

                    <input
                        type="text"
                        id="email"
                        className={classes.input}
                        required
                        ref={emailInput}
                        placeholder="Email" />
                </div>



                <div className={classes.submit}>
                    <button>Assinar</button>
                </div>
            </form>
        </div>

    )
}