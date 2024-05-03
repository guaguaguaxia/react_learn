import { Link,useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    return (
    <div>
        我是登录页
        <Link to="/article">去文章页</Link>

        <button onClick={() => { navigate('/article') }}>去文章页</button>

        <button onClick={() => { navigate('/article?id=1001&name=jack') }}>searchParams 传参</button>

        <button onClick={() => { navigate('/article/1001/jack') }}>Params 传参</button>

    </div>

)
};

export default Login;