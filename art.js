window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});

function showContent(movement) {

    const data = {

        renaissance: `
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg">
            <h2>Renaissance (1400–1600)</h2>
            <h3>Historical Context</h3>
            <p>Revival of classical ideas and humanism in Europe.</p>
            <h3>Key Artists</h3>
            <p>Leonardo da Vinci, Michelangelo, Raphael</p>
            <h3>Visual Characteristics</h3>
            <p>Realism, symmetry, perspective, accurate anatomy.</p>
            <h3>Evolution</h3>
            <p>Reintroduced balance and linear perspective in art.</p>
        `,

        baroque: `
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg">
            <h2>Baroque (1600–1750)</h2>
            <p><strong>Historical Context:</strong> Religious and political drama in Europe.</p>
            <p><strong>Key Artists:</strong> Caravaggio, Rembrandt, Bernini</p>
            <p><strong>Visual Characteristics:</strong> Dramatic lighting, emotion, movement.</p>
            <p><strong>Evolution:</strong> Strong contrast and dynamic composition.</p>
        `,

        impressionism: `
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Claude_Monet%2C_Impression%2C_soleil_levant.jpg">
            <h2>Impressionism (1860–1890)</h2>
            <p><strong>Historical Context:</strong> Industrialization in France.</p>
            <p><strong>Key Artists:</strong> Claude Monet, Degas, Renoir</p>
            <p><strong>Visual Characteristics:</strong> Light focus, loose brushwork.</p>
            <p><strong>Evolution:</strong> Focused on perception instead of realism.</p>
        `,

        cubism: `
            <img src="https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg">
            <h2>Cubism (1907–1914)</h2>
            <p><strong>Historical Context:</strong> Modern science and new perspectives.</p>
            <p><strong>Key Artists:</strong> Picasso, Braque</p>
            <p><strong>Visual Characteristics:</strong> Geometric shapes, fragmentation.</p>
            <p><strong>Evolution:</strong> Broke traditional perspective rules.</p>
        `,

        surrealism: `
            <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg">
            <h2>Surrealism (1920s–1940s)</h2>
            <p><strong>Historical Context:</strong> Inspired by dream psychology.</p>
            <p><strong>Key Artists:</strong> Salvador Dalí, René Magritte</p>
            <p><strong>Visual Characteristics:</strong> Dreamlike imagery, symbolism.</p>
            <p><strong>Evolution:</strong> Focused on subconscious creativity.</p>
        `,

        abstract: `
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/No._5%2C_1948.jpg">
            <h2>Abstract Expressionism (1940s–1960s)</h2>
            <p><strong>Historical Context:</strong> Post-WWII emotional expression.</p>
            <p><strong>Key Artists:</strong> Jackson Pollock, Mark Rothko</p>
            <p><strong>Visual Characteristics:</strong> Large canvases, abstraction.</p>
            <p><strong>Evolution:</strong> Emotional intensity became central principle.</p>
        `
    };

    const display = document.getElementById("display");
    display.classList.remove("show");
    display.innerHTML = data[movement];

    setTimeout(() => {
        display.classList.add("show");
    }, 50);
}