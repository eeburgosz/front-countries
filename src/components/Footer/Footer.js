import style from './Footer.module.css';
import 'primeicons/primeicons.css';


export const Footer = () => {
   return (
      <div className={style.container}>
         <div className={style.subcontainer}>
            <div>Ernesto Burgos</div>
            <div>
               <a href="https://www.linkedin.com/in/eeburgosz" target="_blank" rel="noreferrer">
                  <i className="pi pi-linkedin" style={{ color: 'slateblue' }}></i>
               </a>
               <a href="https://www.github.com/eeburgosz" target="_blank" rel="noreferrer">
                  <i className="pi pi-github" style={{ color: 'slateblue' }}></i>
               </a>
            </div>
         </div>
      </div>
   );
};
