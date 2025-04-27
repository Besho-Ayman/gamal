<script>
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            // إنشاء خلفية سوداء شفافة
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = 1000;
            overlay.style.cursor = 'pointer';

            // إنشاء الصورة داخل الخلفية
            const popupImg = document.createElement('img');
            popupImg.src = this.src;
            popupImg.style.maxWidth = '90%';
            popupImg.style.maxHeight = '90%';
            popupImg.style.borderRadius = '10px';
            popupImg.style.boxShadow = '0 0 20px white';

            overlay.appendChild(popupImg);
            document.body.appendChild(overlay);

            // حذف الخلفية عند الضغط عليها
            overlay.addEventListener('click', function() {
                overlay.remove();
            });
        });
    });
});
</script>
