import * as React from 'react';

//Components
import Blog1 from '../views/blog/blog1';
import Blog2 from '../views/blog/blog2';
import Blog3 from '../views/blog/blog3';
//Assest
import img1 from '../assets/img/blog/blog2/img2.png';
import img2 from '../assets/img/blog/blog2/img1.png';
import img3 from '../assets/img/blog/blog3/img1.jpg';


export const dataBlog = [
    {   
        idBlog: "1",
        img: img1 ,
        title: "Digitalización empresarial",
        description: "Quieres llevar a tu empresa al mundo digital, entonces esto post te interesará. ",
        url: "/blog/1",
        blogContent: <Blog1 />
    },
    {   
        idBlog: "2",
        img: img2,
        title: "Página web vs redes sociales ",
        description: "Aquí veremos las diferencias entre las páginas webs y las redes sociales, y como te sirven en tu negocio.",
        url: "/blog/2",
        blogContent: <Blog2 />
    },
    {   
        idBlog: "3",
        img: img3 ,
        title: "7 cosas que debes tener en tu página web",
        description: "Hoy en día es muy importante tener una página web en tu empresa, si no la tienes no existes. Pero ¿qué debería tener en mi página para que sea profesional?",
        url: "/blog/3",
        blogContent: <Blog3 />
    }
]

