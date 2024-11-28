<?php
// بدء الجلسة للتحقق من بيانات المستخدم
session_start();

// البيانات المخزنة في ملف المستخدمين (يمكنك تعديل هذا حسب احتياجك)
$users = file('users.txt', FILE_IGNORE_NEW_LINES);

// المتغيرات الخاصة بالمستخدم
$username = $password = $duration = "";
$errorMessage = "";

// معالجة البيانات عند تقديم النموذج
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $duration = $_POST['duration'];

    // التحقق من البيانات المخزنة في الملف
    foreach ($users as $user) {
        list($storedUsername, $storedPassword, $storedDuration) = explode(',', $user);
        
        if ($storedUsername === $username && $storedPassword === $password) {
            // التحقق من المدة
            $currentTime = time();
            $expiryTime = $storedDuration * 60; // تحويل المدة إلى ثواني
            
            if ($currentTime < $expiryTime) {
                $_SESSION['username'] = $username;
                $_SESSION['expiry'] = $currentTime + $expiryTime;
                header("Location: index.html"); // إعادة التوجيه إلى صفحة الـ index بعد النجاح
                exit;
            } else {
                $errorMessage = "انتهت مدة الجلسة.";
            }
        }
    }
    // إذا كانت بيانات الدخول غير صحيحة
    if (empty($errorMessage)) {
        $errorMessage = "بيانات تسجيل الدخول غير صحيحة.";
    }
}
?>

<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إدارة الجيم</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }

        .login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f9;
        }

        .login-form {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
        }

        .login-form h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .input-field {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .login-button {
            width: 100%;
            padding: 10px;
            background-color: #333;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .login-button:hover {
            background-color: #575757;
        }

        .error-message {
            color: red;
            text-align: center;
            margin-top: 15px;
        }
    </style>
</head>
<body>

    <div class="login-container">
        <div class="login-form">
            <h2>تسجيل الدخول</h2>
            <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <input type="text" name="username" class="input-field" placeholder="اسم المستخدم" required>
                <input type="password" name="password" class="input-field" placeholder="كلمة المرور" required>
                <input type="number" name="duration" class="input-field" placeholder="مدة الاستخدام (بالدقائق)" required>
                <button type="submit" class="login-button">دخول</button>
            </form>
            
            <?php if (!empty($errorMessage)): ?>
                <div class="error-message"><?php echo $errorMessage; ?></div>
            <?php endif; ?>
        </div>
    </div>

</body>
</html>
