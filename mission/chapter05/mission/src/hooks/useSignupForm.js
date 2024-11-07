import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const useSignupForm = () => {
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
        repassword: yup
            .string()
            .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
            .required('비밀번호를 다시 입력해주세요!'),
    });

    //isDirty: 폼 내용 수정
    //isValid: 폼 유효성 검사 통과
    //trigger: 특정 필드의 유효성 검사 수동 실행
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, trigger } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
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

export default useSignupForm;
