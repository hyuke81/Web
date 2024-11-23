import './LoginPage.css';
import useLoginForm from '../../hooks/useLoginForm';

const LoginPage = () => {
    const { 
        register, 
        handleSubmit, 
        errors, 
        isDirty, 
        isValid, 
        trigger, 
        onSubmit,
        isLoading
    } = useLoginForm();

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
                    className={`button ${!isDirty || !isValid || isLoading ? 'button-disabled' : ''}`}
                    disabled={!isDirty || !isValid || isLoading}>
                    {isLoading ? '로그인 중...' : '로그인'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
