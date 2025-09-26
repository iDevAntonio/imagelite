import * as Yup from 'yup';

export interface FormProps {
    name: string;
    tags: string;
    file: string | Blob;
}

export const formScheme: FormProps = {name: '', tags: '', file: ''}

export const formValidationScheme = Yup.object().shape({
    name: Yup.string().trim().required('Name is required').max(50, 'Name must be at most 50 characters'),
    tags: Yup.string().trim().required('Tags are required').max(50, 'Name must be at most 50 characters'),
    file: Yup.mixed<Blob>().required('Select an image to upload').test('size', "File size can't be larger than 5MB", (file) => {
        return file.size <= 5 * 1024 * 1024}.test('type', 'Only PNG, JPG and GIF files are allowed', (file) => {
            return file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/gif'
        })
})