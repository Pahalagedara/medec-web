import availableDc from '../assets/images/available-doctors.png';
import calender from '../assets/images/calendar.png';
import qr from '../assets/images/qr.png';
import labReport from '../assets/images/lab-report-portal.png';

export const DrData = [
    {firstName: 'Chanaka', lastName: 'Madushan', mediCenter: 'NineWells Hospital', specialties: 'General Practitioner', status: true, imageSrc: 'https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN'},
    {firstName: 'Chanaka', lastName: 'Madushan', mediCenter: 'NineWells Hospital', specialties: 'General Practitioner', status: true, imageSrc: 'https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN'},
    {firstName: 'Chanaka', lastName: 'Madushan', mediCenter: 'NineWells Hospital', specialties: 'General Practitioner', status: true, imageSrc: 'https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN'},
    {firstName: 'Chanaka', lastName: 'Madushan', mediCenter: 'NineWells Hospital', specialties: 'General Practitioner', status: true, imageSrc: 'https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN'},
    {firstName: 'Chanaka', lastName: 'Madushan', mediCenter: 'NineWells Hospital', specialties: 'General Practitioner', status: true, imageSrc: 'https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN'},
    {firstName: 'Chanaka', lastName: 'Madushan', mediCenter: 'NineWells Hospital', specialties: 'General Practitioner', status: true, imageSrc: 'https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN'},
    {firstName: 'Chanaka', lastName: 'Madushan', mediCenter: 'NineWells Hospital', specialties: 'General Practitioner', status: true, imageSrc: 'https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN'},
    {firstName: 'Chanaka', lastName: 'Madushan', mediCenter: 'NineWells Hospital', specialties: 'General Practitioner', status: true, imageSrc: 'https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN'},
];
export const userProfile ={
    tittle:'Mr',
    firstName:'Ovindu',
    lastName:'Archana',
    bloodGroup:'O+',
    country:'+94',
    phoneNumber:'771 230 708',
    birthDate:'2013-01-08',
    address:'Gabada weediya, Matara',
    description:'mama ovindu',
    QRCode:'https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE'
}
export const doctorProfile ={
    firstName:'Thilina',
    lastName:'Pahalagedara',
    specialization:'Orthopedist',
    profilePicture:'https://docs.google.com/uc?id=1qII4n9Up8Of7LjNf8GaaqE7sf5QxWHkh',
    sessions:[
        {
            hospitalName:'Asiri Hospital',
            sessionList:[
                {
                    time:'05.30PM',
                    date:'25/11/2021',
                    appointments:20,
                    maximumAppointments:20,
                },
                {
                    time:'05.30PM',
                    date:'25/11/2021',
                    appointments:5,
                    maximumAppointments:20,
                }
            ]

        },
        {
            hospitalName:'Navinna Hospital',
            sessionList:[
                {
                    time:'05.30PM',
                    date:'25/11/2021',
                    appointments:20,
                    maximumAppointments:20,
                },
                {
                    time:'05.30PM',
                    date:'25/11/2021',
                    appointments:5,
                    maximumAppointments:20,
                }
            ]

        },
        {
            hospitalName:'Navinna Hospital',
            sessionList:[
                {
                    time:'05.30PM',
                    date:'25/11/2021',
                    appointments:20,
                    maximumAppointments:20,
                },
                {
                    time:'05.30PM',
                    date:'25/11/2021',
                    appointments:5,
                    maximumAppointments:20,
                }
            ]

        }
    ]
}

export const searchList = [
    {label: 'hello', value: 'kekek'},
    {label: 'Hisks', value: 'asasa'},
    {label: 'helasaslo', value: 'saassd'},
]

export const homeContent = {
    chanCenter: [
        {title: 'Add Doctors', content : 'Find doctors who are currently in hospitals near you', imgUrl: availableDc},
        {title: 'Add Lab Report', content : 'View your lab reports from one place', imgUrl: labReport},
        {title: 'Make an Appointment', content : 'Channel your doctor from here', imgUrl: calender},
        {title: 'Manage Doctor', content : 'View your lab reports from one place', imgUrl: qr},
    ],
    lab: [
        {title: 'Scan QR', content : 'Get required lab test list from here', imgUrl: qr},
        {title: 'Upload', content : 'View customer list and upload the reports', imgUrl: labReport}
    ],
    user: [
        {title: 'View available doctors', content : 'Find doctors who are currently in hospitals near you', imgUrl: availableDc},
        {title: 'Lab report portal', content : 'View your lab reports from one place', imgUrl: labReport},
        {title: 'Make an Appointment', content : 'Channel your doctor from here', imgUrl: calender}
    ]
}

export const availableDoctor = {name : "Dr. Ovindu Archana"}

export const qrCodeDetails = {
    //number should come from saved list
    number: '03',
    name: 'Nimal Siriwardena',
    age: 25,
    gender: 'Male',
    tp: '0771231235',
    profilePicture:'https://docs.google.com/uc?id=1qII4n9Up8Of7LjNf8GaaqE7sf5QxWHkh',
    reportList:[
        {name:'FBC'},
        {name:'Dengue Antibody'},
        {name:'FBS'},
        {name:'Lipid Profile'},
        {name:'Dengue Antibody'},
        {name:'FBS'},
        {name:'Lipid Profile'}
    ],
}


export const ptList = [
    {
        tittle: "Mr",
        firstName: "Ovindu",
        lastName: "Archana",
        bloodGroup: "AB+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-10-20",
        address: "Gabada weediya, Matara",
        description: "Penicillin Allery",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Thilina",
        lastName: "Pahalagedara",
        bloodGroup: "O+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1997-03-08",
        address: "No 2/345, Nagollagama, Ella",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Chanaka",
        lastName: "Herath",
        bloodGroup: "B+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-12-23",
        address: "No 165/2, Kurmburubedda, Aladeniya",
        description: "Stomache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Charith",
        lastName: "Wijebandara",
        bloodGroup: "A+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-05-08",
        address: "No 2/16, Oruthota, Theldeaniya",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Dineth",
        lastName: "Gimhana",
        bloodGroup: "AB+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-10-20",
        address: "Gabada weediya, Matara",
        description: "Penicillin Allery",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Ravindu",
        lastName: "Gunarathna",
        bloodGroup: "O+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1997-03-08",
        address: "No 2/345, Nagollagama, Ella",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Chinthaka",
        lastName: "Chathuranga",
        bloodGroup: "B+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-12-23",
        address: "No 165/2, Kurmburubedda, Aladeniya",
        description: "Stomache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Ms",
        firstName: "Hansika",
        lastName: "Herath",
        bloodGroup: "A+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-05-08",
        address: "No 2/16, Oruthota, Theldeaniya",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Neminda",
        lastName: "Prabashwara",
        bloodGroup: "O+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-10-20",
        address: "Gabada weediya, Matara",
        description: "Penicillin Allery",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Jeewantha",
        lastName: "Lahiru",
        bloodGroup: "A-",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1997-03-08",
        address: "No 2/345, Nagollagama, Ella",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Ms",
        firstName: "Randi",
        lastName: "Ayeshani",
        bloodGroup: "B+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-12-23",
        address: "No 165/2, Kurmburubedda, Aladeniya",
        description: "Stomache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Hansa",
        lastName: "Sandamal",
        bloodGroup: "A+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-05-08",
        address: "No 2/16, Oruthota, Theldeaniya",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Sisitha",
        lastName: "Jayawardena",
        bloodGroup: "B-",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-10-20",
        address: "Gabada weediya, Matara",
        description: "Penicillin Allery",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Lahiru",
        lastName: "Sandeepa",
        bloodGroup: "AB-",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1997-03-08",
        address: "No 2/345, Nagollagama, Ella",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Ms",
        firstName: "Pinsari",
        lastName: "Jayasundara",
        bloodGroup: "B+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-12-23",
        address: "No 165/2, Kurmburubedda, Aladeniya",
        description: "Stomache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Ravindu",
        lastName: "Gunarathna",
        bloodGroup: "O+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1997-03-08",
        address: "No 2/345, Nagollagama, Ella",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Chinthaka",
        lastName: "Chathuranga",
        bloodGroup: "B+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-12-23",
        address: "No 165/2, Kurmburubedda, Aladeniya",
        description: "Stomache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Ms",
        firstName: "Hansika",
        lastName: "Herath",
        bloodGroup: "A+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-05-08",
        address: "No 2/16, Oruthota, Theldeaniya",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Mr",
        firstName: "Jeewantha",
        lastName: "Lahiru",
        bloodGroup: "A-",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1997-03-08",
        address: "No 2/345, Nagollagama, Ella",
        description: "Headache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
    {
        tittle: "Ms",
        firstName: "Randi",
        lastName: "Ayeshani",
        bloodGroup: "B+",
        country: "+94",
        phoneNumber: "771 230 708",
        birthDate: "1998-12-23",
        address: "No 165/2, Kurmburubedda, Aladeniya",
        description: "Stomache",
        QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
    },
];
