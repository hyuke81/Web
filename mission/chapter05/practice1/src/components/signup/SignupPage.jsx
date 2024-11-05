import './SignupPage.css';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const SignUpPage = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(16).required(),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'email'} {...register("email")}/>
            <p style={{color: 'red'}}>{errors.email?.message}</p>
            <input type={'password'} {...register("password")}/>
            <p style={{color: 'red'}}>{errors.password?.message}</p>
            <input type={'submit'}/>
        </form>
    );
};

export default SignUpPage;
