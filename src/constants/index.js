import {
    faTableColumns,
    faChartLine,
    faGear,
    faUsers,
    faFile,
    faPowerOff,
    faBackward,
    faEllipsisVertical,
    faBook,
    faChartPie,
    faUserCheck,
    faMoneyBill1,
    faMoneyBill,
    faClock,
    faSign,
    faAdd,
    faCalendarDays,
    faBell,
    faMessage,
    faDollar,
    faDatabase,
    faEye
  } from "@fortawesome/free-solid-svg-icons";

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
    { title: 'Update Employee', variant: 'secondary' }, 
    { title: 'Cancel', variant: 'danger', isCancel: true }
]
export const addFormFields = { 
    emp_id: { type: 'text', name: 'emp_id', label:'Employee ID',placeHolder:'Enter ID' }, 
    name: { type: 'text', name: 'name', label:'Name' , placeHolder:'Enter Name' } ,
    email: { type: 'email', name: 'email', label:'Email',placeHolder:'Enter Email' }, 
    mobile: { type: 'text', name: 'mobile', label:'Mobile',placeHolder:'Enter Mobile No.' }, 
    role: { type: 'select', name: 'role', label:'Select Role' } 
}
export const sideMenu = [
    {path:'/dashboard',icon:faTableColumns},
    {path:'/analytics',icon:faChartLine},
    {path:'/users',icon:faUsers},
    {path:'/reports',icon:faFile},
    {path:'/settings',icon:faGear},
    {path:'/',icon:faPowerOff,className:'position-absolute bottom-0'},
    {path:'/',icon:faBackward,className:'position-absolute top-0'}
]
export const upperCards = [
    {lIcon:faBook,rIcon:faEllipsisVertical,mText:'$1234',bText:'This is your bank balance'},
    {lIcon:faChartPie,rIcon:faEllipsisVertical,mText:'80%',bText:'Maximum Percentage'},
    {lIcon:faUserCheck,rIcon:faEllipsisVertical,mText:'7',bText:'employees working today'},
    {lIcon:faMoneyBill1,rIcon:faEllipsisVertical,mText:'$500',bText:'This weeks card spending'},
]
export const chartCards = [
    {title:'New clients',value:'54',badge:'+18.7%',isClient:true},
    {title:'Invoices overdue',value:'6',badge:'+2.7%',isClient:false},
]
export const todoList = [
    {title:'Run payroll',date:new Date(),icon:faMoneyBill},
    {title:'Review time off request',date:new Date(),icon:faClock},
    {title:'Sign board resolution',date:new Date(),icon:faSign},
    {title:'Finish onboarding Tony',date:new Date(),icon:faAdd},
]
export const subMenuList = [
    {icon:faCalendarDays},
    {icon:faBell,isNotification:true},
    {icon:faMessage,isNotification:true},
    {icon:faCalendarDays,isImg:true,img:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'}
]
export const menuDropdown = [
    {icon:faDollar,text:"Make payment"},
    {icon:faDatabase,text:"View balance details"},
    {icon:faEye,text:"View account details"}
]
export const selectRoles=['labor','manager','supervisor']