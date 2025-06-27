# 🎨 Guía de Personalización del Portafolio

Esta guía te ayudará a personalizar completamente tu portafolio con tu información personal.

## 📝 Información Básica

### 1. Datos Personales
Edita el archivo `index.html` y reemplaza:

```html
<!-- Cambiar en múltiples lugares -->
<title>Tu Nombre - Desarrollador Full Stack & Especialista en IA</title>
<meta name="description" content="Desarrollador Full Stack especializado en IA, Cloud Computing y automatización...">

<!-- En la sección Hero -->
<h1 class="hero-title">Tu Nombre</h1>
<h2 class="hero-subtitle">Desarrollador Full Stack & Especialista en IA</h2>

<!-- En la sección About -->
<div class="nav-logo">
    <a href="#home">TuNombre</a>
</div>

<!-- En el Footer -->
<p>&copy; <span id="current-year">2024</span> Tu Nombre. Todos los derechos reservados.</p>
```

### 2. Información de Contacto
```html
<!-- En la sección Contact -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>tuemail@ejemplo.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Tu Ciudad, País</span>
</div>

<!-- Enlaces de redes sociales -->
<a href="https://linkedin.com/in/tu-perfil" class="social-link">
    <i class="fab fa-linkedin"></i>
    <span>LinkedIn</span>
</a>
<a href="https://github.com/tu-usuario" class="social-link">
    <i class="fab fa-github"></i>
    <span>GitHub</span>
</a>
```

## 🖼️ Imágenes y Multimedia

### 1. Foto de Perfil
Reemplaza los iconos de Font Awesome con imágenes reales:

```html
<!-- En Hero Section -->
<div class="hero-avatar">
    <img src="images/tu-foto.jpg" alt="Tu Nombre" />
</div>

<!-- En About Section -->
<div class="profile-image">
    <img src="images/tu-foto-perfil.jpg" alt="Tu Nombre" />
</div>
```

### 2. Imágenes de Proyectos
```html
<!-- En cada project-card -->
<div class="project-image">
    <img src="images/proyecto-1.jpg" alt="Nombre del Proyecto" />
</div>
```

### 3. Favicon
Reemplaza `assets/favicon.ico` con tu propio favicon:
- Genera uno en: https://favicon.io/
- Tamaño recomendado: 32x32px o 16x16px

## 💼 Proyectos

### 1. Añadir Nuevos Proyectos
Copia y modifica esta estructura:

```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <img src="images/tu-proyecto.jpg" alt="Nombre del Proyecto" />
    </div>
    <div class="project-content">
        <h3>Nombre del Proyecto</h3>
        <p>Descripción detallada del proyecto, tecnologías utilizadas y resultados obtenidos.</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
        </div>
        <div class="project-links">
            <a href="https://demo-tu-proyecto.com" class="btn btn-small">Demo</a>
            <a href="https://github.com/tu-usuario/tu-proyecto" class="btn btn-small btn-outline">GitHub</a>
        </div>
    </div>
</div>
```

### 2. Categorías de Proyectos
Organiza tus proyectos por categorías:
- **Desarrollo Web**: Sitios web, aplicaciones web
- **Inteligencia Artificial**: Chatbots, análisis de datos, ML
- **Cloud Computing**: Infraestructura, automatización
- **Móvil**: Apps nativas o híbridas

## 🛠️ Habilidades

### 1. Modificar Habilidades
Edita las secciones de habilidades en `index.html`:

```html
<!-- Desarrollo Web -->
<div class="skills-category">
    <h3>Desarrollo Web</h3>
    <div class="skills-grid">
        <div class="skill-item">
            <i class="fab fa-react"></i>
            <span>React</span>
        </div>
        <!-- Añade más habilidades -->
    </div>
</div>
```

### 2. Iconos Disponibles
Usa iconos de Font Awesome:
- **Tecnologías**: `fab fa-html5`, `fab fa-css3-alt`, `fab fa-js`
- **Herramientas**: `fab fa-git-alt`, `fab fa-github`, `fab fa-docker`
- **Cloud**: `fab fa-aws`, `fab fa-google`, `fas fa-cloud`
- **IA**: `fas fa-brain`, `fas fa-robot`, `fas fa-microchip`

## 🎨 Personalización Visual

### 1. Colores
Modifica las variables CSS en `css/style.css`:

```css
:root {
    --primary-dark: #1a365d;    /* Azul muy oscuro */
    --primary: #2d5a8b;         /* Azul oscuro */
    --primary-light: #4299e1;   /* Azul medio */
    --secondary: #3182ce;       /* Azul claro */
    --accent: #63b3ed;          /* Azul muy claro */
    --white: #ffffff;           /* Blanco */
}
```

### 2. Fuentes
Cambia la fuente en `index.html`:

```html
<!-- En el head -->
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- En CSS -->
:root {
    --font-primary: 'TuFuente', sans-serif;
}
```

### 3. Animaciones
Ajusta las animaciones en `js/script.js`:

```javascript
// Velocidad de animaciones
AOS.init({
    duration: 1000,        // Duración en ms
    easing: 'ease-in-out', // Tipo de easing
    once: true,            // Animar solo una vez
    mirror: false          // No animar al hacer scroll hacia arriba
});
```

## 📱 Responsive Design

### 1. Breakpoints
Los breakpoints están definidos en `css/style.css`:

```css
/* Móvil */
@media (max-width: 768px) { }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

### 2. Ajustes Móviles
Para mejorar la experiencia móvil:

```css
/* Ajustar tamaños de fuente */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
}
```

## 🔧 Funcionalidades Avanzadas

### 1. Formulario de Contacto
Para añadir un formulario funcional:

```html
<form action="https://formspree.io/f/tu-form-id" method="POST" class="contact-form">
    <input type="text" name="name" placeholder="Tu nombre" required>
    <input type="email" name="email" placeholder="Tu email" required>
    <textarea name="message" placeholder="Tu mensaje" required></textarea>
    <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
</form>
```

### 2. Analytics
Añade Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. SEO Mejorado
Añade más meta tags:

```html
<meta name="author" content="Tu Nombre">
<meta name="robots" content="index, follow">
<meta property="og:image" content="https://tu-sitio.com/images/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

## 🚀 Deploy

### 1. GitHub Pages
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings > Pages
4. Selecciona la rama main
5. Tu sitio estará en: `https://tu-usuario.github.io/tu-repositorio`

### 2. Netlify
1. Conecta tu repositorio de GitHub
2. Configura el directorio de build (deja vacío para sitios estáticos)
3. Deploy automático

### 3. Dominio Personalizado
1. Compra un dominio
2. Configura los DNS records
3. Añade el dominio en GitHub Pages o Netlify

## 📊 Monitoreo

### 1. Performance
- Usa Google PageSpeed Insights
- Optimiza imágenes con herramientas como TinyPNG
- Minifica CSS y JS en producción

### 2. Analytics
- Google Analytics para métricas
- Google Search Console para SEO
- Hotjar para análisis de comportamiento

## 🔄 Mantenimiento

### 1. Actualizaciones Regulares
- Actualiza proyectos cada 3-6 meses
- Refresca las habilidades según evoluciones
- Mantén las tecnologías actualizadas

### 2. Backup
- Mantén una copia local del proyecto
- Usa control de versiones (Git)
- Haz backups regulares

---

**¡Tu portafolio está listo para impresionar!** 🎉

Recuerda que la calidad del contenido es más importante que el diseño. Asegúrate de que tus proyectos y habilidades estén bien documentados y sean relevantes para tu público objetivo. 