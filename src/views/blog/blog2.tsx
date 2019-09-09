import * as React from 'react';

import img1 from '../../assets/img/blog/blog2/img1.png';
import img2 from '../../assets/img/blog/blog2/img2.png';
function Blog2() {
    return(
        <>
            <h2>Página web vs redes sociales en el 2019</h2>
            <img src={img1} alt=""/>
            <h1>Comparación de las páginas web vs las redes sociales. </h1>
            <p>Para este 2019 si tu negocio no está en la red no existe. De nada te sirve tener el mejor producto del mundo si no lo das a conocer y si no te pueden encontrar en Internet. Ahora bien ¿por donde empiezo? ¿promociono mi empresa por las redes sociales o por una página web? </p>
            <p>Para hacer esta comparación primero veamos las ventaja y desventajas de las redes sociales y las páginas web.</p>
            <h2>Ventajas de las redes sociales. </h2>
            <ul>
                <li>Iniciar una página de facebook, un canal de youtube o cualquier red de manera gratuita.</li>
                <li>Crear una comunidad en torno a tu empresa.</li>
                <li>Escuchar las opiniones de tu comunidad, (hacer encuestas, y leer opiniones)</li>
                <li>Llegar personas interesadas en tu producto con campañas de facebook ads.</li>
            </ul>
            <h2>Desventajas de las redes sociales. </h2>
            <ul>
                <li>Crear contenido de calidad y ser interesante para tu comunidad puede ser una tarea laboriosa. </li>
                <li>Las redes sociales pueden cambiar sus políticas o cerrarte la cuenta sin previo aviso. </li>
                <li>No puedes personalizar el 100% de tu red.</li>
                <li>Estás compitiendo constantemente con otras usuarios de la red. </li>
            </ul>
            <img src={img2} alt=""/>
            <h2>Ventajas de una página web.</h2>
            <ul>
                <li>Control total de tu web.</li>
                <li>Calcular presupuestos y responder preguntas frecuentes. </li>
                <li>Tienda on-line 24 horas. </li>
                <li>Chat o chat-bots personalizado. </li>
                <li>Aplicación de el diseño UI y UX para mejorar la experiencia de usuario. </li>
                <li>Uso de <a target="_blank" href="https://analytics.google.com/analytics/web/provision/?authuser=0#/provision">Google Analytics</a> para mejorar tu web.</li>
                <li>Dentro de tu página no compites contra nadie. tu decides que quieres que tenga atención y que no. </li>
                <li>Da seriedad a tu negocio, tener una web es tu tarjeta de presentación, no te garantiza nada, pero ayuda a vender.</li>
                <li>Posicionar tu página con SEO.</li>
            </ul>
            <h2>Desventajas de una página web.</h2>
            <ul>
                <li>Debes pagar hosting y dominio. </li>
                <li>A pesar de que existen CMS como <a href="https://es.wordpress.org/">wordpress</a>, si deseas algo realmente personalizado es recomendable pagarle a un programador. </li>
                <li>Conseguir un buen experto en esta área es difícil. muchos quieren vender una plantilla como algo único e inovador, pero no es necesariamente lo que necesitas. </li>
            </ul>
            <h3>En conclusión. </h3>
            <p>Si tienes la oportunidad y los recursos para invertir. Entonces aparece en todas las redes sociales y ten tu página web. Pero si estás iniciando y quieres empezar a ganar dinero. te recomiendo que dejes la página web para después ya que lo más barato siempre serán las redes sociales. </p>
            <p>Por otra parte, concéntrate en una o dos redes sociales, no busques estar en todas, será un desperdicio de recursos, tiempo y dinero. A cada negocio le sirve un tipo de red social, tu debes buscar cual es el tuyo y enfocarte.</p>
            <p>También cada proyecto tiene su tipo de página web. tal vez para ti con una plantilla de wordpress sea más que suficiente, o por el contrario requiera algo muy personalizado. </p>
            <p>Si te gustó el tema y quieres saber más, déjalo en los comentarios. </p>
        </>
    )
}

export default Blog2;