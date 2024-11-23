import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useSignupForm = () => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
            .required('이메일을 입력해주세요!'),
        password: yup
            .string()
            .min(8, '비밀번호는 8 ~ 16자 사이로 입력해주세요!')
            .max(16, '비밀번호는 8 ~ 16자 사이로 입력해주세요!')
            .required('비밀번호를 입력해주세요!'),
        passwordCheck: yup
            .string()
            .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
            .required('비밀번호를 다시 입력해주세요!'),
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid }, trigger } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const mutation = useMutation(
        async (data) => {
            const response = await axios.post('http://localhost:3000/auth/register', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        },
        {
            onSuccess: (data) => {
                console.log('회원가입 성공:', data);
                navigate('/login'); 
            },
            onError: (error) => {
                if (error.response) {
                    console.error('회원가입 에러:', error.response.data);
                } else {
                    console.error('회원가입 중 문제가 발생했습니다.');
                }
            },
        }
    );

    const onSubmit = (data) => {
        const { ...requestData } = data;
        mutation.mutate(requestData); 
    };

    return {
        register,
        handleSubmit,
        errors,
        isDirty,
        isValid,
        trigger,
        onSubmit,
        isLoading: mutation.isLoading
    };
};

export default useSignupForm;
