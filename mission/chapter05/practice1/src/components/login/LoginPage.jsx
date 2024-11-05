import './LoginPage.css';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const LoginPage = () => {
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
    })
    
    //isDirty: 폼 내용 수정
    //isValid: 폼 유효성 검사 통과
    //trigger: 특정 필드의 유효성 검사 수동 실행
    const {register, handleSubmit, formState: {errors, isDirty, isValid}, trigger} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }

    return (
        <div className="container">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input 
                    type="email" 
                    placeholder="이메일을 입력해주세요!" {...register("email")}
                    onBlur={() => trigger("email")} />
                    {/* onBlur -> 사용자 다른 필드 클릭시 */}
                    {/* trigger("email") -> email 필드의 유효성 검사 실행*/}
                <p className="error">{errors.email?.message}</p>
                
                <input 
                    type="password" 
                    placeholder="비밀번호를 입력해주세요!" 
                    {...register("password")}
                    onBlur={() => trigger("password")}
                    />
                <p className="error">{errors.password?.message}</p>
                
                <button 
                    type="submit" 
                    className={`button ${!isDirty || !isValid ? 'button-disabled' : ''}`}
                    disabled={!isDirty || !isValid}> 
                    {/* 모든 조건 충족되면 button-disabled 클래스 제거 */}
                    {/* !isDirty || !isValid -> 입력 수정 x || 유효성 검사 통과 x */}
                        로그인
                    </button>
            </form>
        </div>
    );
};

export default LoginPage;
