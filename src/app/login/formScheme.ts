import * as Yup from 'yup';

export interface LoginForm {
    name?: string;
    email: string;
    password: string;
    passwordMatch?: string;
}

export const validationScheme = Yup.object().shape({
    email: Yup.string().trim().email('Invalid email').required('Email is required'),
    password: Yup.string().trim().required('Password is required').min(6, 'Password must be at least 6 characters'),
    passwordMatch: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
})

export const formScheme: LoginForm = {name: '', email: '', password: '', passwordMatch: ''}