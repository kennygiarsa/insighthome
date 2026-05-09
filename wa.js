document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop form dari reload

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
            text += `Saya tertarik dengan unit yang ada di insight home\n`;
            text += `*Nama:* ${nama}\n`;
            text += `*No. WA:* ${whatsapp}\n`;
            text += `*Budget:* ${budgetText[budgetVal] || "Tidak disebutkan"}\n`;
            text += `*Pesan:* ${pesan}\n`;

            const encodedText = encodeURIComponent(text);
            const phoneNumber = 628891257232"";

            // Redirect (Gunakan location.href jika window.open diblokir browser)
            window.location.href = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        });
    }
});