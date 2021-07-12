import { InputText } from 'primereact/inputtext';
import { Fragment, useState } from 'react';
import './index.css'
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

function MenuItemTypeDetailPage({selectedItem, handleSave}) {
    const [item, setItem] = useState(selectedItem);

    const handleSaveEvent = () => {
        console.log(item);
    }

    return (
        <Fragment>
            <input hidden value = {item.Id} name="Id" onChange = {(e) => {console.log(e)}} />
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12">
                    <label>Tên</label>
                    <InputText type="text" name="Name" placeholder="Nhập tên" value={item.Name}
                    onChange = {e => setItem({...item, Name: e.target.value})}/>
                </div>
                <div className="p-field p-col-12">
                    <label>Mô tả</label>
                    <InputTextarea rows={5} name="Description" placeholder="Nhập mô tả" 
                    value={item.Description} onChange = {e => setItem({...item, Description: e.target.value})}/>
                </div>
               
            </div>
            <div className="">
                <Button label="Lưu lại" onClick= {() => handleSaveEvent()} icon="pi pi-check"/>
            </div>
        </Fragment>
    );
}

export default MenuItemTypeDetailPage;