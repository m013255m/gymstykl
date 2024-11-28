<?php
session_start(); // بدء الجلسة لتخزين حالة تسجيل الدخول

// التحقق من وجود بيانات في الملف النصي
$file = fopen("users.txt", "r");
$users = [];
while (($line = fgets($file)) !== false) {
    $user_data = explode(",", trim($line));
    $users[$user_data[0]] = ["password" => $user_data[1], "duration" => $user_data[2]];
}
fclose($file);

// إذا تم إرسال بيانات النموذج
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (isset($users[$username]) && $users[$username]['password'] == $password) {
        // التحقق من كلمة المرور
        $duration = $users[$username]['duration'];
        $_SESSION['username'] = $username;
        $_SESSION['expiry_time'] = time() + ($duration * 60); // حساب وقت انتهاء الجلسة
        header("Location: index.php"); // الانتقال إلى الصفحة الرئيسية
        exit();
    } else {
        $error = "اسم المستخدم أو كلمة المرور غير صحيحة.";
    }
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل الدخول</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="login-container">
        <h2>تسجيل الدخول</h2>
        <?php if (isset($error)) { echo "<p style='color:red;'>$error</p>"; } ?>
        <form method="POST">
            <label for="username">اسم المستخدم</label>
            <input type="text" id="username" name="username" required><br><br>
            
            <label for="password">كلمة المرور</label>
            <input type="password" id="password" name="password" required><br><br>
            
            <button type="submit">تسجيل الدخول</button>
        </form>
    </div>
</body>

</html>
