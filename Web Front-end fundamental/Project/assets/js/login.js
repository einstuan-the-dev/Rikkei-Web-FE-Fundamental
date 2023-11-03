document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

  
    var storedUser = JSON.parse(localStorage.getItem(username));
    if (storedUser && storedUser.password === password) {
        alert('Đăng nhập thành công!');
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng.');
    }
});

