// معلومات المستودع على GitHub
const repoOwner = 'm013255m';  // اسم صاحب المستودع
const repoName = 'gymstykl';   // اسم المستودع
const branch = 'main';         // الفرع الافتراضي
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/`;

// تحميل قائمة الملفات من مستودع GitHub
function checkForUpdates() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.forEach(file => {
        // تحقق من وجود الملف في النسخة المحلية أو لا
        // يمكنك هنا وضع منطق المقارنة بين الملفات المحلية وملفات GitHub
        console.log(`الملف: ${file.name}`);
        // تحميل الملفات الجديدة أو المحدثة
        downloadFile(file.download_url, file.name);
      });
    })
    .catch(error => {
      console.error('حدث خطأ أثناء تحميل البيانات:', error);
    });
}

// تحميل الملف من URL
function downloadFile(url, filename) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const a = document.createElement('a');
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
      console.log(`${filename} تم تحميله بنجاح`);
    })
    .catch(error => {
      console.error(`فشل تحميل الملف ${filename}:`, error);
    });
}

// تشغيل التحقق من التحديثات تلقائيًا عند فتح التطبيق
document.addEventListener('DOMContentLoaded', function() {
  checkForUpdates();
});
