window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500);
});

function showContent(movement) {

    const data = {

        renaissance: `
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg">
            <h2>Renaissance (1400–1600)</h2>
            <p><strong>Historical Context:</strong> Revival of classical learning and humanism in Europe.</p>
            <p><strong>Key Artists:</strong> Leonardo da Vinci, Michelangelo, Raphael</p>
            <p><strong>Visual Characteristics:</strong> Realism, symmetry, linear perspective.</p>
            <p><strong>Evolution:</strong> Reintroduced proportion, balance, and depth.</p>
        `,

        baroque: `
            <img src="https://primematters.com/sites/default/files/styles/article/public/2020-08/caravaggio-the-calling-of-st-matthew-1200x800-wikimedia-public-domain%20%281%29.jpg?h=10d202d3&itok=ie14dxvF">
            <h2>Baroque (1600–1750)</h2>
            <p><strong>Historical Context:</strong> Religious and political drama in Europe.</p>
            <p><strong>Key Artists:</strong> Caravaggio, Rembrandt</p>
            <p><strong>Visual Characteristics:</strong> Strong contrast, emotional intensity.</p>
            <p><strong>Evolution:</strong> Expanded movement and dramatic composition.</p>
        `,

        impressionism: `
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Claude_Monet%2C_Impression%2C_soleil_levant%2C_1872.jpg">
            <h2>Impressionism (1860–1890)</h2>
            <p><strong>Historical Context:</strong> Industrial revolution in France.</p>
            <p><strong>Key Artists:</strong> Claude Monet, Renoir</p>
            <p><strong>Visual Characteristics:</strong> Light focus, quick brush strokes.</p>
            <p><strong>Evolution:</strong> Shifted from realism to perception of light.</p>
        `,

        cubism: `
            <img src="https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg">
            <h2>Cubism (1907–1914)</h2>
            <p><strong>Historical Context:</strong> Modern science influenced art perspective.</p>
            <p><strong>Key Artists:</strong> Pablo Picasso, Georges Braque</p>
            <p><strong>Visual Characteristics:</strong> Geometric shapes, fragmentation.</p>
            <p><strong>Evolution:</strong> Broke traditional space representation.</p>
        `,

        surrealism: `
            <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg">
            <h2>Surrealism (1920s–1940s)</h2>
            <p><strong>Historical Context:</strong> Inspired by dream psychology.</p>
            <p><strong>Key Artists:</strong> Salvador Dalí, René Magritte</p>
            <p><strong>Visual Characteristics:</strong> Dreamlike imagery.</p>
            <p><strong>Evolution:</strong> Emphasized imagination and subconscious mind.</p>
        `,

        abstract: `
            <img src="https://cdn.shopify.com/s/files/1/0804/6221/7507/files/Jackson_Pollock_convergence_1024x1024.jpg?v=1705803141">
            <h2>Abstract Expressionism (1940s–1960s)</h2>
            <p><strong>Historical Context:</strong> Post-WWII emotional freedom.</p>
            <p><strong>Key Artists:</strong> Jackson Pollock, Mark Rothko</p>
            <p><strong>Visual Characteristics:</strong> Large-scale abstraction.</p>
            <p><strong>Evolution:</strong> Emotion became central artistic principle.</p>
        `
    };

    document.getElementById("display").innerHTML = data[movement];
}
