document.addEventListener('DOMContentLoaded', () => {
   const textElement = document.getElementById('wish-text');
    const surpriseButton = document.getElementById('surprise-button');
    const cardContainer = document.getElementById('card-container');
    
    // Khai báo thêm biến mới cho khu vực GIF
    const surpriseDisplay = document.getElementById('surprise-display'); 

    // 1. Nội dung lời chúc (Giữ nguyên phần này)
    const fullText = "Chúc Em ngày PNVN 20/10 luôn khỏe vui, tràn ngập niềm vui, hạnh phúc & đạt mọi ước nguyện trong cuộc sống 💖";
    let index = 0;
    const typingSpeed = 50; 
    
    function typeWriter() {
        if (index < fullText.length) {
            textElement.innerHTML += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            surpriseButton.style.display = 'inline-block';
        }
    }

    typeWriter();

    /**
     * Xử lý sự kiện bấm nút: Ẩn khung thẻ và hiện GIF
     */
    surpriseButton.addEventListener('click', () => {
        // 1. Bắt đầu ẩn khung chữ nhật bằng cách giảm opacity
        cardContainer.style.opacity = '0';
        
        // 2. Sau khi khung chữ nhật ẩn xong (1 giây), hiển thị ảnh GIF
        setTimeout(() => {
            cardContainer.style.display = 'none'; // Ẩn hoàn toàn thẻ cũ
            
            // Hiện khu vực GIF bằng cách thêm class "show-gif"
            surpriseDisplay.classList.remove('hidden-gif');
            surpriseDisplay.classList.add('show-gif');
            
        }, 1000); // 1000ms (1 giây) khớp với thời gian transition opacity của card
    });
});