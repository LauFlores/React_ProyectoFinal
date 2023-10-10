import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PropTypes from 'prop-types';

const Modal = ({handleClose, open, children, title}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <DialogTitle>{title}</DialogTitle>
                {children}
            </DialogContent>
        </Dialog>
    )
}

Modal.propTypes = {
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    children: PropTypes.object,
    title: PropTypes.string.isRequired
}

export default Modal