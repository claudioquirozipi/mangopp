import * as React from 'react';
import img1 from '../../assets/img/blog/blog3/img1.jpg';
import img2 from '../../assets/img/blog/blog3/img2.png';
import img3 from '../../assets/img/blog/blog3/img3.png';
import img4 from '../../assets/img/blog/blog3/img4.jpg';

function Blog3() {
    return(
        <>
            <h2>7 cosas que debes tener en tu página web para vender más.</h2>
            <img src={img1} alt=""/>

            <h1>7 cosas que debes tener presente al tener una página web.</h1>
            <p>Hoy en día es muy importante tener una página web en tu empresa, si no la tienes no existes. Pero ¿qué debería tener en mi página para que sea profesional? Bueno para empezar necesitamos tráfico por lo que podemos empezar con el SEO.</p>

            <h2>1 Tener una página optimizada en SEO.</h2>
            <img src={img2} alt=""/>
            <p>
                El SEO (Search Engine Optimization) son todas aquellas acciones, estrategias y 
                métodos que al aplicarlas, posicionan tu negocio en <strong>los primeros lugares de los 
                buscadores</strong>. brindándote más probabilidades de que te conozcan. 
            </p>

            <h2>2 Tráfico por redes sociales. </h2>
            <p>Tener una página optimizada en seo es un buen inicio para conseguir tráfico, pero se puede mejorar, puedes hacer vida en las redes sociales, compartir información de interés y luego enviarlos a tu página, para que te conozcan mejor como empresa y muy importante le den al botón de comprar. </p>

            <h2>3 Publicidad paga o SEM.</h2>            
            <p>Cuando nos referimos a SEM (Search Engin) Marketing. nos referimos a los anuncios y campañas publicitarias que hacemos de nuestras empresa en google, facebook, youtube, entre otras. Para esta estrategia le pagamos a estas compañías y ellas publicarán nuestra página generando más visitas y más dinero. </p>
            
            <h2>4 Certificado ssl</h2>
            <p>
                Un Certificado SSL (Secure Sockets Layer) es un protocolo que encripta la información
                que se agrega en un formulario dificultando que los hackers obtenga esos datos. 
                En palabras más simples, <strong>hace tu sitio más seguro.</strong>
            </p>
            <p>Puede que pienses que no es importante un certificado SSL si no tienes un formulario, pero Google penaliza en el SEO a las páginas que no cuenten con éste.También si no cuentas con éste, navegadores como Chorme te advierten que el sitio no es seguro creando miedo y clicks de cerrar.</p>
            
            <h2>5 Contenido de calidad.</h2>
            <p>Muy bien ahora tenemos trafico para nuestra página y mantenemos tranquilos al prospecto con un Certificado SSL pero si lo que ve en tu página no le interesa se irá inmediatamente, para evitarlo, debemos tener contenido de calidad. </p>
            <p>Muchas páginas cometen el error de poner un menú que tenga: quienes somos, conócenos,  coctactanos, mision y vision, y otra información que no es de interés, al cliente no le interesa quien eres, no le interesa saber de ti, el quiere saber de ÉL, en que lo puedes ayudar a ÉL, que información tienes útil para ÉL. </p>
            <p>
                Aporta contenido que lo <strong>beneficie de alguna manera</strong>, si vas a hablar de 
                tus productos o servicios, enfócate en <strong>como lo van a ayudar</strong>. Evita la 
                información repetitiva, que no aporte. Esto último nos lleva a nuestro siguiente punto.
            </p>
            <img src={img3} alt=""/>
            
            <h2>6 Diseño UI y UX.</h2>            
            <p>
                Empecemos por definir los conceptos. Diseño UI (user interface) se refiere a la
                parte visible de la página, los colores, la tipografía. la ubicación de los elementos, etc...
            </p>
            <p>Por ejemplo, ¿sabías que el color azul psicológicamente genera confianza y puedes mejorar tus ventas usando este color? todos estos detalles pueden mejorar significativamente la llamada a la acción, resaltando la información importante. y transmitiendo de manera más clara el mensaje que se quiere dar. </p>
            <p>
                Ahora bien, el diseño UX (user experience) se refiere a como están diseñados los componentes
                de tu web para generar la mejor experiencia de usuario. Que el usuario se sienta a gusto en
                tu web y que ejecute fácilmente la llamada a la acción.
            </p>
            <p>Un ejemplo de esto lo encontramos en los formularios. Tu prospecto está convencido de que quiere tu producto o servició está decidido a comprar y cuando clikea en el carrito. Sorpresa, formulario salvaje aparece, con 20 campos preguntando edad, sexo y hasta como se llama tu abuela, el usuario llena los 3 primeros campos, se aburre y se va.  </p>
            <p>Con una buena UX, pides la información importante como el correo, el nombre y ya. que compre, que se haga cliente tuyo y si es importante esa información que llene los datos después. </p>
            <img src={img4} alt=""/>
            
            <h2>7 Google Analytics</h2>
            <p>Con todo esto del UI y UX hay muchos autores que hablan de las reglas que debes tener para destacar, pero la verdad son más guías que reglas, en este tema nadie tiene la verdad en sus manos. </p>
            <p>Lo que puede ser bueno para una web para otra no lo es. Pero entonces, ¿cómo podemos saber que nuestra diseño es bueno?, ¿cómo sabemos que el azul que elegimos es el adecuado? o ¿cómo saber que no tenemos que usar un azul más clarito u otro color distinto como rojo? </p>
            <p>Existen herramientas como Google Analytics que nos permiten saber cuantas veces se dio click en determinado botón, y se puede realizar un test A/B donde se comparan dos botones (A azul obscuro, B azul claro) y luego ver cual tuvo más clicks y así saber que diseño es el mejor. </p>
            <p>Este tema es muy extenso y merece todo un apartado para desarrollarlo, pero podemos quedarnos con la idea de que las métricas nos ayudarán a mejorar nuestra web. Recuerden que todo lo que se mide, se puede mejorar.</p>
        </>
    )
}

export default Blog3;