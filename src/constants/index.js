export const tableHeadings = [
    "#",
    "Emp. Id",
    "Name",
    "Email",
    "Mobile",
    "Role",
    "Action",
];
export const addBtns = [
    { title: 'Add Employee', variant: 'primary' },
    { title: 'Cancel', variant: 'danger', isCancel: true }
]
export const deleteBtns = [
    { title: 'Delete', variant: 'secondary' }, 
    { title: 'Cancel', variant: 'danger', isCancel: true }
]
export const editBtns = [
    { title: 'Edit', variant: 'secondary' }, 
    { title: 'Cancel', variant: 'danger', isCancel: true }
]
export const addFormFields = { 
    emp_id: { type: 'number', name: 'emp_id', label:'Employee ID',placeHolder:'Enter ID' }, 
    name: { type: 'text', name: 'name', label:'Name' , placeHolder:'Enter Name' } ,
    email: { type: 'email', name: 'email', label:'Email',placeHolder:'Enter Email' }, 
    mobile: { type: 'number', name: 'mobile', label:'Mobile',placeHolder:'Enter Mobile No.' }, 
    role: { type: 'select', name: 'role', label:'Select Role' } 
}