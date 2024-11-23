import './SignupPage.css';
import useSignupForm from '../../hooks/useSignupForm';

const SignupPage = () => {
    const { 
        register, 
        handleSubmit, 
        errors, 
        isDirty, 
        isValid, 
        trigger, 
        onSubmit,
        isLoading, // 로딩 상태 추가
    } = useSignupForm();

    return (
        <div className="container">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input 
                    type="email" 
                    placeholder="이메일을 입력해주세요!" 
                    {...register("email")}
                    onBlur={() => trigger("email")}
                />
                {/* onBlur -> 사용자 다른 필드 클릭 시 */}
                {/* trigger("email") -> email 필드의 유효성 검사 실행 */}
                <p className="error">{errors.email?.message}</p>
                
                <input 
                    type="password" 
                    placeholder="비밀번호를 입력해주세요!" 
                    {...register("password")}
                    onBlur={() => trigger("password")}
                />
                <p className="error">{errors.password?.message}</p>
                
                <input 
                    type="password" 
                    placeholder="비밀번호를 다시 입력해주세요!" 
                    {...register("passwordCheck")}
                    onBlur={() => trigger("passwordCheck")}
                />
                <p className="error">{errors.passwordCheck?.message}</p>

                <button 
                    type="submit" 
                    className={`button ${!isDirty || !isValid || isLoading ? 'button-disabled' : ''}`}
                    disabled={!isDirty || !isValid || isLoading}>
                    {/* 모든 조건 충족되면 button-disabled 클래스 제거 */}
                    {/* 로딩 상태 추가 */}
                    {isLoading ? '회원가입 중...' : '제출'}
                </button>
            </form>
        </div>
    );
};

export default SignupPage;