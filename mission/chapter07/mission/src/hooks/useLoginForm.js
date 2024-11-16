import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

const useLoginForm = () => {
    const navigate = useNavigate();
    const { fetchUserInfo } = useUser();

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
            .required(),
        password: yup
            .string()
            .min(8, '비밀번호는 8 ~ 16자 사이로 입력해주세요!')
            .max(16, '비밀번호는 8 ~ 16자 사이로 입력해주세요!')
            .required(),
    });

    //isDirty: 폼 내용 수정
    //isValid: 폼 유효성 검사 통과
    //trigger: 특정 필드의 유효성 검사 수동 실행
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, trigger } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('로그인 성공:', response.data);
            const { refreshToken, accessToken } = response.data;
            //로컬스토리지에 저장
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('accessToken', accessToken);
            
            await fetchUserInfo();
            navigate('/');

        } catch (error) {
            if (error.response) {
                console.error('로그인 에러:', error.response.data);
            }
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        isDirty,
        isValid,
        trigger,
        onSubmit,
    };
};

export default useLoginForm;
