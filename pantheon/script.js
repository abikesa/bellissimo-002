// Pantheon of Transcendence - Interactive Experience
        // Quantum Field Particle Generator
        function createQuantumParticles() {
            const quantumField = document.getElementById('quantumField');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('quantum-particle');
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.animationDelay = `${Math.random() * -20}s`;
                particle.style.opacity = Math.random() * 0.5 + 0.2;
                quantumField.appendChild(particle);
            }
        }

        // Custom Cursor
        const cursor = document.getElementById('customCursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Vertex Interaction
        const vertices = document.querySelectorAll('.vertex');
        const panels = document.querySelectorAll('.transcendence-panel');
        let activeVertex = null;

        vertices.forEach(vertex => {
            vertex.addEventListener('click', () => {
                const panelId = vertex.getAttribute('data-transcendence');
                const panel = document.getElementById(panelId);

                // Reset previous states
                panels.forEach(p => p.classList.remove('manifested'));
                vertices.forEach(v => v.classList.remove('transcendent'));

                // Activate current vertex and panel
                vertex.classList.add('transcendent');
                panel.classList.add('manifested');
                activeVertex = vertex;
            });
        });

        // Dismiss Panel
        const dismissButtons = document.querySelectorAll('.dismiss-transcendence');
        dismissButtons.forEach(button => {
            button.addEventListener('click', () => {
                panels.forEach(p => p.classList.remove('manifested'));
                if (activeVertex) {
                    activeVertex.classList.remove('transcendent');
                    activeVertex = null;
                }
            });
        });

        // Initialize Quantum Field
        window.addEventListener('load', createQuantumParticles);

        // Close panel on click outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.vertex') && !e.target.closest('.transcendence-panel')) {
                panels.forEach(p => p.classList.remove('manifested'));
                vertices.forEach(v => v.classList.remove('transcendent'));
                activeVertex = null;
            }
        });
 