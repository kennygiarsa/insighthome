document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop form dari reload

            // Ambil data menggunakan ID atau urutan jika perlu
            // Tapi paling aman pakai querySelector dari element form
            const inputs = contactForm.querySelectorAll('input, select, textarea');
            const nama = inputs[0].value;
            const whatsapp = inputs[1].value;
            const budgetVal = inputs[2].value;
            const pesan = inputs[3].value;

            // Mapping budget
            const budgetText = {
                "": "Tidak disebutkan",
                "1": "Di bawah Rp 1 Miliar",
                "2": "Rp 1 - 2 Miliar",
                "3": "Rp 2 - 5 Miliar",
                "4": "Di atas Rp 5 Miliar"
            };

            // Susun pesan
            let text = `Halo Insight Homes,\n\n`;
            text += `Saya tertarik dengan unit di BSD City:\n`;
            text += `*Nama:* ${nama}\n`;
            text += `*No. WA:* ${whatsapp}\n`;
            text += `*Budget:* ${budgetText[budgetVal] || "Tidak disebutkan"}\n`;
            text += `*Pesan:* ${pesan}\n`;

            const encodedText = encodeURIComponent(text);
            const phoneNumber = "6282125006251";

            // Redirect (Gunakan location.href jika window.open diblokir browser)
            window.location.href = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        });
    }
});