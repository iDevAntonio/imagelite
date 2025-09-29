'use client'

import {RenderIf, Template} from '@/components/'
import {useState} from 'react'

export default function Login() {
    const [loading, setLoading] = useState<boolean>(false);
    const [newUserState, setNewUserState] = useState<boolean>(false);
    return (
        <Template loading={loading}>

            <div className='flex min-h-screen justify-center items-center px-6 py-12 lg:px8'>

                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>

                    <h2 className='mt-10 text-center text-1xl font-bold leading-9 tracking-tight text-gray-900'>
                       Login to your account 
                    </h2>

                </div>
                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <form className='space-y-6'>
                        <RenderIf condition={newUserState}>

                        </RenderIf>
                    </form>
                </div>
            </div>
        </Template>
    )
}