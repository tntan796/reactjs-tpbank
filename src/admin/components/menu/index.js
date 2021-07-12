import './index.css';
import { PanelMenu } from 'primereact/panelmenu';
import { useHistory } from 'react-router-dom';

function MenuComponent() {
   let history = useHistory();

   const items = [
      {
         label: 'Edit',
         icon: 'pi pi-fw pi-pencil',
         items: [
            {
               label: 'Left',
               icon: 'pi pi-fw pi-align-left',
               command: (event) => {
                  alert('1');
              }
            },
            {
               label: 'Right',
               icon: 'pi pi-fw pi-align-right',
               command: (event) => {
                  alert('2');
              }
            }
         ]
      },
      {
         label: 'Menu Type',
         icon: 'pi pi-fw pi-user',
         items: [
            {
               label: 'Menu Type',
               icon: 'pi pi-fw pi-users',
               command: (event) => {
                  history.push("menu-type")
              }
            },
            {
               label: 'Menu Type Item',
               icon: 'pi pi-fw pi-users',
               command: (event) => {
                  history.push("/admin/menu-item-type")
              }
            }
         ]
      }
   ];

   return (
      <PanelMenu model={items} style={{ 'width': '100%' }}/>
   );
}

export default MenuComponent;