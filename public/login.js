// 定義多組帳號密碼
const accounts = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
];

function validateInput() {
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    // 驗證帳號密碼
    const isValid = accounts.some(account => account.email === emailOrPhone && account.password === password);

    if (isValid) {
        // 登入成功後重定向到指定頁面
        window.location.href = 'youtube/index.html';
    }

    return false; // 阻止表單的默認提交行為
}