type UsuariosProps = {
  color: string;
  width: number;
  height: number;
};

function Usuariosicon({color,width,height}:UsuariosProps ) {
    return (  
        <>
        
<svg xmlns="http://www.w3.org/2000/svg" width={`${width}`} height={`${height}`} viewBox="0 0 22 18.462">
  <g id="Grupo_224" data-name="Grupo 224" transform="translate(-21 -231.901)">
    <path id="Trazado_83295" data-name="Trazado 83295" d="M15.545,20.455V18.636A3.636,3.636,0,0,0,11.909,15H4.636A3.636,3.636,0,0,0,1,18.636v1.818" transform="translate(21 228.909)" fill="none" stroke={`${color}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <circle id="Elipse_9417" data-name="Elipse 9417" cx="3.636" cy="3.636" r="3.636" transform="translate(25.636 233)" fill="none" stroke={`${color}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Trazado_83296" data-name="Trazado 83296" d="M22.727,20.466V18.648A3.636,3.636,0,0,0,20,15.13" transform="translate(19.273 228.897)" fill="none" stroke={`${color}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Trazado_83297" data-name="Trazado 83297" d="M16,3.13a3.636,3.636,0,0,1,0,7.045" transform="translate(19.636 229.988)" fill="none" stroke={`${color}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

        </>
    );
}

export default Usuariosicon;