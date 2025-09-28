import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import SignIn from './signin';
import SignUp from './signup';

interface AuthPopupProps {
    open: boolean;
    onClose: () => void;
}

const AuthPopup: React.FC<AuthPopupProps> = ({ open, onClose }) => {
    const [authForm, setAuthForm] = useState<string>('signin');
    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                {
                    authForm === 'signin' ?
                        <SignIn signUpInstead={() => setAuthForm('signup')} onClose={onClose} />
                        :
                        <SignUp signInInstead={() => setAuthForm('signin')} onClose={onClose} />
                }
            </DialogContent>
        </Dialog>
    );
};

export default AuthPopup;