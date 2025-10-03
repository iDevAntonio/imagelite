'use client'

import { InputText, RenderIf, Template, Button, FieldError, useNotification } from '@/components'
import { useState } from 'react'
import { LoginForm, validationScheme, formScheme} from './formScheme'
import { useFormik } from 'formik';
import { useAuth } from '@/resources';
import { useRouter } from 'next/navigation'
import { AcessToken, Credentials } from '@/resources/user/user.resources';

export default function Login() {

    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(false);

    const auth = useAuth();
    const notification = useNotification();
    const router = useRouter();

    const {values, handleChange, handleSubmit, errors} = useFormik<LoginForm>({
        initialValues: formScheme,
        validationSchema: validationScheme,
        onSubmit: onSubmit
    })

    async function onSubmit(values:LoginForm) {
        if(!newUserState){
            const credentials: Credentials = {
                email: values.email,
                password: values.password
        };
        try{
            const acessToken: AcessToken = await auth.authenticate(credentials);
            router.push('/gallery');
        } catch(error: any){
            const message = error?.message;
            notification.notify(message, 'error');
            }
        }
    }

    return (
        <Template loading={loading}>

            <div className='flex min-h-screen flex-1 flex-col justify-center items-center px-6 py-12 lg:px8'>

                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>

                    <h2 className='mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-900'>
                       { newUserState ? 'Create your account' : 'Login to your account' }
                    </h2>

                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <RenderIf condition={newUserState}>

                            <div>
                                <label className='block text-sm font-medium leading-6 text-gray-900'>Name: </label>
                            </div>
                            <div className='mt-2'>
                                <InputText style='w-full' placeholder='Name' id='name' value={values.name} onChange={handleChange}/>
                                <FieldError error={errors.name}/>
                            </div>
                            
                        </RenderIf>

                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900'>Email: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText style='w-full' placeholder='Email:' id='email' value={values.email} onChange={handleChange} />
                            <FieldError error={errors.email}/>
                        </div>

                        <div>
                            <label className='block text-sm font-medium leading-6 text-gray-900'>Password: </label>
                        </div>
                        <div className='mt-2'>
                            <InputText type='password' style='w-full' placeholder='Password:' id='password' value={values.password} onChange={handleChange} />
                            <FieldError error={errors.password}/>
                        </div>
                        
                        <RenderIf condition={newUserState}>
                            <div>
                                <label className='block text-sm font-medium leading-6 text-gray-900'>Repeat Password: </label>
                            </div>
                            <div className='mt-2'>
                                <InputText type='password' style='w-full' placeholder='Repeat Password:' id='passwordMatch' value={values.passwordMatch} onChange={handleChange} />
                                <FieldError error={errors.passwordMatch}/>
                            </div>
                        </RenderIf>

                        <div>
                            <RenderIf condition={newUserState}>
                                <Button type='submit' style='bg-indigo-800 hover:bg-indigo-950 text-white' label='Login'/>
                                <Button onClick={event => setNewUserState(false)} type='submit' style='bg-gray-600 hover:bg-gray-700 text-white mx-2' label='Cancel'/>
                            </RenderIf>
                            <RenderIf condition={!newUserState}>
                                <Button type='submit' style='bg-indigo-800 hover:bg-indigo-950 text-white' label='Login'/>
                                <Button onClick={event => setNewUserState(true)} type='submit' style='bg-gray-600 hover:bg-gray-700 text-white mx-2' label='Sign Up'/>
                            </RenderIf>
                        </div>
                    </form>
                </div>
            </div>
        </Template>
    )
}