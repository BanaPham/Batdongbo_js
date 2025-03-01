import {router} from './main.js';

function LogIn()
{
    document.querySelector("#content").innerHTML = `
        <div id="login" class="flex justify-center items-center min-h-screen">
            <form action="" class="flex flex-col bg-gray-200 w-sm p-6 rounded-lg">
                <h2 class="font-bold text-3xl flex justify-center mb-5">Đăng nhập</h2>
                <p class="mb-1">Tên đăng nhập</p>
                <input class="rounded-sm p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="email" placeholder="Email">
                <p class="mt-3 mb-1">Mật khẩu</p>
                <input class="rounded-sm p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="password" placeholder="Password">
                <button type="submit" class="w-full bg-green-600 text-white py-2 px-4 mt-5 cursor-pointer rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Đăng Nhập</button>
                <a href="#" class="text-base flex justify-center mt-2 text-blue-600 hover:text-indigo-500">Quên mật khẩu?</a>
            </form>
        </div>
    `
    
    const email = "test@test.com";
    const password = "test";
    const auth = {
        email,
        password
    };
    this.addEventListener("submit", function (x) {
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            body: JSON.stringify(auth),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Lỗi đăng nhập");
                }
                return res.json();
            })
            .then((data) => {
                alert("Đăng nhập thành công");
                window.localStorage.setItem("token",data.token)
                window.location.href = "/home"
            })
            .catch((error) => {
                alert("Đăng nhập thất bại");
            });
        const items = document.querySelectorAll('.icon');
        if (items.length > 0) {
            items[0].classList.add('show');
        }
        items.forEach(btn => {
            btn.addEventListener('click', () => {
                items.forEach(item => item.classList.remove('show'));
                btn.classList.add('show');
            });
        });
    });
}

function Home()
{
    document.querySelector("#content").innerHTML = `
        <strong>Tạm ẩn</strong>
    `
    const items = document.querySelectorAll('.icon');
    items.forEach(btn => {
        btn.addEventListener('click', () => {
            items.forEach(item => item.classList.remove('show'));
            btn.classList.add('show');
        });
    });
}

export default LogIn
export {Home}