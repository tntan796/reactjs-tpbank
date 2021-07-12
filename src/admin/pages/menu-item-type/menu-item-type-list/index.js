import './index.css';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Fragment, useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import * as menuTypeService from '../../../services/menu-type-item.service';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';
import { Dialog } from 'primereact/dialog';
import MenuItemTypeDetailPage from '../menu-item-type-detail';
import MenuTypeItemModel from '../../../models/menu-type-item.model';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

function MenuItemTypeListPage() {
    const [basicFirst, setBasicFirst] = useState(0);
    const [menuItemTypes, setMenuItemTypes] = useState([]);
    const [filter, setFilter] = useState('');
    const [offSet, setOffSet] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState(new MenuTypeItemModel());
    const toast = useRef(null);

    const onBasicPageChange = (event) => {
        setBasicFirst(event.first);
        setOffSet(event.page);
        setPageSize(event.rows);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = (search = null) => {
        menuTypeService.getMenuTypeItems({ filter: search != null ? search : filter, offSet, pageSize })
            .then(response => {
                setTotalRecords(response.data.RecordsTotal);
                setMenuItemTypes(response.data.Data);
            })
    }

    const resetFilter = () => {
        fetchData('');
        setFilter('');
    }
    const breadCrumbItems = [
        { label: 'Home' },
        { label: 'Menu Type Item' },
    ];
    const breadCrumbHome = { icon: 'pi pi-home' }

    const leftContents = (
        <Fragment>
            <InputText placeholder="Nhập nội dung tìm kiếm..." value={filter} onChange={(e) => { setFilter(e.target.value) }} />
            <Button title="Tìm kiếm" icon="pi pi-search" iconPos="right" onClick={() => fetchData()} />
            <Button title="Hủy bỏ" icon="pi pi-refresh" className="p-button-warning" iconPos="right" onClick={() => resetFilter()} />
        </Fragment>
    );

    const rightContents = (
        <Fragment>
            <Button icon="pi pi-plus" title="Thêm mới" className="p-mr-2" onClick = {() => handleAdd()}/>
            <Button icon="pi pi-file-excel" title="Xuất Excel" className="p-button-success p-mr-2" />
        </Fragment>
    );

    const methodTemplate = (rowData) => {
        return (
            <Fragment>
                <Button icon="pi pi-pencil" title="Sửa" className="p-button-rounded p-mr-1" onClick={() => handleEdit(rowData)} />
                <Button icon="pi pi-trash" title="Xóa" className="p-button-rounded p-button-danger" onClick = {() => handleDelete(rowData)}/>
            </Fragment>
        );
    }

    const handleEdit = (rowData) => {
        setIsDisplayForm(true);
        setSelectedItem(rowData);
    }

    const handleAdd = () => {
        setIsDisplayForm(true);
        setSelectedItem(new MenuTypeItemModel());
    }

    const handleDelete = (rowData) => {
        confirmDialog({
            message: 'Bạn có chắc chắn muốn xóa?',
            header: 'Xác nhận xóa',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            acceptLabel: 'Có',
            acceptIcon : 'pi pi-check',
            rejectLabel: 'Không',
            rejectIcon: 'pi pi-times',
            accept: () => accept(rowData)
        });
    }

    const accept = (rowData) => {
        console.log(rowData);
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const handleSave = (data) => {
        console.log(data);
    }

    return (
        <Fragment>
            <Toast ref={toast} />
            <BreadCrumb model={breadCrumbItems} home={breadCrumbHome} />
            <Toolbar right={rightContents} left={leftContents} />
            {
                menuItemTypes.length &&
                <div className="card">
                    <DataTable value={menuItemTypes}>
                        <Column field="Id" header="Id"></Column>
                        <Column field="Name" header="Tên"></Column>
                        <Column field="Description" header="Mô tả"></Column>
                        <Column header="Chức năng" body={methodTemplate}></Column>
                    </DataTable>
                    <Paginator
                        first={basicFirst}
                        rows={pageSize}
                        totalRecords={totalRecords}
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        onPageChange={onBasicPageChange}>
                    </Paginator>
                </div>
            }
            <Dialog header="Chỉnh sửa Menu Item" visible={isDisplayForm} style={{ width: '40vw' }} onHide={() => setIsDisplayForm(false)}>
                <MenuItemTypeDetailPage selectedItem = {selectedItem} handleSave = {() => handleSave}></MenuItemTypeDetailPage>
            </Dialog>
        </Fragment>
    );
}

export default MenuItemTypeListPage;