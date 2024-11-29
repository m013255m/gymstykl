<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>إدارة الجيم</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* إعدادات أساسية */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }

        /* إعدادات الحاوية التي تحتوي على الشريط الجانبي والمحتوى */
        .container {
            display: flex;
        }

        /* إعدادات الشريط الجانبي */
        .sidebar {
            width: 250px;
            background-color: #333;
            color: white;
            padding: 20px;
            height: 100vh;
        }

        .sidebar h2 {
            font-size: 24px;
            text-align: center;
            margin-bottom: 20px;
        }

        .sidebar nav ul {
            list-style: none;
            padding: 0;
        }

        .sidebar nav ul li {
            margin: 15px 0;
        }

        .sidebar nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 18px;
            display: block;
            padding: 10px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .sidebar nav ul li a:hover {
            background-color: #575757;
        }

        /* إعدادات المحتوى الرئيسي */
        .content {
            flex: 1;
            padding: 20px;
            background-color: white;
        }
    </style>
</head>

<body>

    <div class="container">
        <!-- الشريط الجانبي -->
        <div class="sidebar">
            <h2>إدارة الجيم</h2>
            <nav>
                <ul>
                    <li><a href="index.html">الرئيسية</a></li>
                    <li><a href="members.html">إدارة الأعضاء</a></li>
                    <li><a href="trainers.html">إدارة المدربين</a></li>
                    <li><a href="subscriptions.html">إدارة الاشتراكات</a></li>
                    <li><a href="inventory.html">إدارة المخزون</a></li>
                    <li><a href="damagedInventory.html">المخزون التالف</a></li>
                    <li><a href="meals.html">إدارة الوجبات الغذائية</a></li>
                    <li><a href="ratings.html">التقييمات</a></li>
                    <li><a href="rewards.html">المكافآت</a></li>
                    <li><a href="specialRequests.html">الطلبات الخاصة</a></li>
                    <li><a href="marketing.html">حملات التسويق</a></li>
                    <li><a href="advancedScheduling.html">الجدولة المتقدمة</a></li>
                    <li><a href="complaints.html">الشكاوي</a></li>
                </ul>
            </nav>
        </div>

        <!-- المحتوى الرئيسي -->
        <div class="content">
            <h3>مرحبًا بك في لوحة تحكم إدارة الجيم</h3>
            <p>اختر أحد الأقسام من الشريط الجانبي للتنقل بين النماذج المختلفة.</p>
        </div>
    </div>

</body>

</html>
