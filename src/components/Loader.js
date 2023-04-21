import { Spinner } from 'react-bootstrap';

export const Loader = () => {
    return (
        <div className='loader'>
            <Spinner animation='border' variant='secondary'/>
        </div>
    )
}