import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import { useMutation } from 'react-query';

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

    const mutation = useMutation(
        async (data) => {
            const response = await axios.post('http://localhost:3000/auth/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        },
        {
            onSuccess: async (data) => {
                console.log('로그인 성공:', data);
                const { refreshToken, accessToken } = data;

                // 로컬스토리지에 저장
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('accessToken', accessToken);

                // 유저 정보 갱신
                await fetchUserInfo();
                navigate('/'); // 로그인 성공 시 메인 페이지로 이동
            },
            onError: (error) => {
                if (error.response) {
                    console.error('로그인 에러:', error.response.data);
                } else {
                    console.error('로그인 중 문제가 발생했습니다.');
                }
            },
        }
    );

    const onSubmit = (data) => {
        mutation.mutate(data);
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

export default useLoginForm;