import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    function handleHistory(){
        navigate('/form');
    }
    return(
        <Button onClick={handleHistory} color='secondary'>
            Sign up
        </Button>
    )
}
export default Signup;