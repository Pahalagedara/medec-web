import availableDc from "../assets/images/available-doctors.png";
import calender from "../assets/images/calendar.png";
import qr from "../assets/images/qr.png";
import labReport from "../assets/images/lab-report-portal.png";

export const DrData = [
  {
    firstName: "Chanaka",
    lastName: "Madushan",
    mediCenter: "NineWells Hospital",
    specialties: "General Practitioner",
    status: true,
    imageSrc: "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
  },
  {
    firstName: "Chanaka",
    lastName: "Madushan",
    mediCenter: "NineWells Hospital",
    specialties: "General Practitioner",
    status: true,
    imageSrc: "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
  },
  {
    firstName: "Chanaka",
    lastName: "Madushan",
    mediCenter: "NineWells Hospital",
    specialties: "General Practitioner",
    status: true,
    imageSrc: "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
  },
  {
    firstName: "Chanaka",
    lastName: "Madushan",
    mediCenter: "NineWells Hospital",
    specialties: "General Practitioner",
    status: true,
    imageSrc: "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
  },
  {
    firstName: "Chanaka",
    lastName: "Madushan",
    mediCenter: "NineWells Hospital",
    specialties: "General Practitioner",
    status: true,
    imageSrc: "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
  },
  {
    firstName: "Chanaka",
    lastName: "Madushan",
    mediCenter: "NineWells Hospital",
    specialties: "General Practitioner",
    status: true,
    imageSrc: "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
  },
  {
    firstName: "Chanaka",
    lastName: "Madushan",
    mediCenter: "NineWells Hospital",
    specialties: "General Practitioner",
    status: true,
    imageSrc: "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
  },
  {
    firstName: "Chanaka",
    lastName: "Madushan",
    mediCenter: "NineWells Hospital",
    specialties: "General Practitioner",
    status: true,
    imageSrc: "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
  },
];
export const userProfile = {
  tittle: "Mr",
  firstName: "Ovindu",
  lastName: "Archana",
  bloodGroup: "O+",
  country: "+94",
  phoneNumber: "771 230 708",
  birthDate: "2013-01-08",
  address: "Gabada weediya, Matara",
  description: "mama ovindu",
  QRCode: "https://docs.google.com/uc?id=1d2poPvYq9ZgiHis0MK4CWC_96WoNxjTE",
};
export const doctorProfile = {
  firstName: "Thilina",
  lastName: "Pahalagedara",
  specialization: "Orthopedist",
  profilePicture:
    "https://docs.google.com/uc?id=1qII4n9Up8Of7LjNf8GaaqE7sf5QxWHkh",
  sessions: [
    {
      hospitalName: "Asiri Hospital",
      sessionList: [
        {
          time: "05.30PM",
          date: "25/11/2021",
          appointments: 20,
          maximumAppointments: 20,
        },
        {
          time: "05.30PM",
          date: "25/11/2021",
          appointments: 5,
          maximumAppointments: 20,
        },
      ],
    },
    {
      hospitalName: "Navinna Hospital",
      sessionList: [
        {
          time: "05.30PM",
          date: "25/11/2021",
          appointments: 20,
          maximumAppointments: 20,
        },
        {
          time: "05.30PM",
          date: "25/11/2021",
          appointments: 5,
          maximumAppointments: 20,
        },
      ],
    },
    {
      hospitalName: "Navinna Hospital",
      sessionList: [
        {
          time: "05.30PM",
          date: "25/11/2021",
          appointments: 20,
          maximumAppointments: 20,
        },
        {
          time: "05.30PM",
          date: "25/11/2021",
          appointments: 5,
          maximumAppointments: 20,
        },
      ],
    },
  ],
};

export const manualAppointmentDoctorProfile = {
  firstName: "Thilina",
  lastName: "Pahalagedara",
  specialization: "Orthopedist",
  profilePicture:
    "https://docs.google.com/uc?id=1qII4n9Up8Of7LjNf8GaaqE7sf5QxWHkh",
  sessionList: [
    {
      time: "05.30PM",
      date: "25/11/2021",
      appointments: 20,
      maximumAppointments: 20,
    },
    {
      time: "05.30PM",
      date: "25/11/2021",
      appointments: 5,
      maximumAppointments: 20,
    },
  ],
};

export const homeContent = {
  chanCenter: [
    {
      title: "Add Doctors",
      content: "Find doctors who are currently in hospitals near you",
      imgUrl: availableDc,
      path: '/add-dct'
    },
    {
      title: "Add Lab Report",
      content: "View your lab reports from one place",
      imgUrl: labReport,
      path: '/add-lb-rt'
    },
    {
      title: "Make an Appointment",
      content: "Channel your doctor from here",
      imgUrl: calender,
      path: '/mke-app'
    },
    {
      title: "Manage Doctor",
      content: "View your lab reports from one place",
      imgUrl: qr,
      path: '/able-dct'
    },
  ],
  lab: [
    {
      title: "Scan QR",
      content: "Get required lab test list from here",
      imgUrl: qr,
      path: '/qr'
    },
    {
      title: "Upload",
      content: "View customer list and upload the reports",
      imgUrl: labReport,
      path: '/add-pre'
    },
  ],
  user: [
    {
      title: "View available doctors",
      content: "Find doctors who are currently in hospitals near you",
      imgUrl: availableDc,
      path: '/able-dct'
    },
    {
      title: "Lab report portal",
      content: "View your lab reports from one place",
      imgUrl: labReport,
      path: '/lb-rpt-ptl'
    },
    {
      title: "Make an Appointment",
      content: "Channel your doctor from here",
      imgUrl: calender,
      path: '/mke-app'
    },
  ],
};

export const availableDoctor = { name: "Dr. Ovindu Archana" };

export const qrCodeDetails = {
  //number should come from saved list
  number: "03",
  name: "Nimal Siriwardena",
  age: 25,
  gender: "Male",
  tp: "0771231235",
  profilePicture:
    "https://docs.google.com/uc?id=1qII4n9Up8Of7LjNf8GaaqE7sf5QxWHkh",
  reportList: [
    { name: "FBC" },
    { name: "Dengue Antibody" },
    { name: "FBS" },
    { name: "Lipid Profile" },
    { name: "Dengue Antibody" },
    { name: "FBS" },
    { name: "Lipid Profile" },
  ],
};

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

export const labPtList = [
  {
    tittle: "Mr",
    firstName: "Jeewantha",
    lastName: "Lahiru",
    age: 25,
    gender: "Male",
    tp: "0771231235",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "FBC", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS", isRequired: true },
      { name: "Lipid Profile", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true, isUpload: false },
    ],
  },
  {
    tittle: "Ms",
    firstName: "Randi",
    lastName: "Ayeshani",
    tp: "0771230708",
    age: 26,
    gender: "Female",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "Dengue Antibody", isRequired: true },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true },
    ],
  },
  {
    tittle: "Mr",
    firstName: "Jeewantha",
    lastName: "Lahiru",
    age: 25,
    gender: "Male",
    tp: "0771231235",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "FBC", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS", isRequired: true },
      { name: "Lipid Profile", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true, isUpload: false },
    ],
  },
  {
    tittle: "Ms",
    firstName: "Randi",
    lastName: "Ayeshani",
    tp: "0771230708",
    age: 26,
    gender: "Female",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "Dengue Antibody", isRequired: true },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true },
    ],
  },
  {
    tittle: "Mr",
    firstName: "Jeewantha",
    lastName: "Lahiru",
    age: 25,
    gender: "Male",
    tp: "0771231235",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "FBC", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS", isRequired: true },
      { name: "Lipid Profile", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true, isUpload: false },
    ],
  },
  {
    tittle: "Ms",
    firstName: "Randi",
    lastName: "Ayeshani",
    tp: "0771230708",
    age: 26,
    gender: "Female",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "Dengue Antibody", isRequired: true },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true },
    ],
  },
  {
    tittle: "Mr",
    firstName: "Jeewantha",
    lastName: "Lahiru",
    age: 25,
    gender: "Male",
    tp: "0771231235",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "FBC", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS", isRequired: true },
      { name: "Lipid Profile", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true, isUpload: false },
    ],
  },
  {
    tittle: "Ms",
    firstName: "Randi",
    lastName: "Ayeshani",
    tp: "0771230708",
    age: 26,
    gender: "Female",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "Dengue Antibody", isRequired: true },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true },
    ],
  },
  {
    tittle: "Mr",
    firstName: "Jeewantha",
    lastName: "Lahiru",
    age: 25,
    gender: "Male",
    tp: "0771231235",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "FBC", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS", isRequired: true },
      { name: "Lipid Profile", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true, isUpload: false },
    ],
  },
  {
    tittle: "Ms",
    firstName: "Randi",
    lastName: "Ayeshani",
    tp: "0771230708",
    age: 26,
    gender: "Female",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "Dengue Antibody", isRequired: true },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true },
    ],
  },
  {
    tittle: "Mr",
    firstName: "Jeewantha",
    lastName: "Lahiru",
    age: 25,
    gender: "Male",
    tp: "0771231235",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "FBC", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS", isRequired: true },
      { name: "Lipid Profile", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true, isUpload: false },
    ],
  },
  {
    tittle: "Ms",
    firstName: "Randi",
    lastName: "Ayeshani",
    tp: "0771230708",
    age: 26,
    gender: "Female",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "Dengue Antibody", isRequired: true },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true },
    ],
  },
  {
    tittle: "Mr",
    firstName: "Jeewantha",
    lastName: "Lahiru",
    age: 25,
    gender: "Male",
    tp: "0771231235",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "FBC", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS", isRequired: true },
      { name: "Lipid Profile", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true, isUpload: false },
    ],
  },
  {
    tittle: "Ms",
    firstName: "Randi",
    lastName: "Ayeshani",
    tp: "0771230708",
    age: 26,
    gender: "Female",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "Dengue Antibody", isRequired: true },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true },
    ],
  },
  {
    tittle: "Mr",
    firstName: "Jeewantha",
    lastName: "Lahiru",
    age: 25,
    gender: "Male",
    tp: "0771231235",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "FBC", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS", isRequired: true },
      { name: "Lipid Profile", isRequired: true, isUpload: true },
      { name: "Dengue Antibody" },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true, isUpload: false },
    ],
  },
  {
    tittle: "Ms",
    firstName: "Randi",
    lastName: "Ayeshani",
    tp: "0771230708",
    age: 26,
    gender: "Female",
    profilePicture:
      "https://docs.google.com/uc?id=1Tey5rRf84gaJyR2e-fJJN_J015bAW-KN",
    reportList: [
      { name: "Dengue Antibody", isRequired: true },
      { name: "FBS" },
      { name: "Lipid Profile", isRequired: true },
    ],
  },
];

export const medicalHistoryList = [
  {
    title: "November 2021",
    details: [
      {
        id: "1",
        day: "23 rd",
        description: "Dr. John Hasitha",
        imgURL: "https://picsum.photos/id/1/200/300",
      },
      {
        id: "2",
        day: "24 th",
        description: "Dr. John Hasitha",
        imgURL: "https://picsum.photos/id/2/200/300",
      },
      {
        id: "3",
        day: "22 nd",
        description: "Dr. John Hasitha",
        imgURL: "https://picsum.photos/id/3/200/300",
      },
    ],
  },
  {
    title: "October 2021",
    details: [
      {
        id: "4",
        day: "23 rd",
        description: "Dr. John Hasitha",
        imgURL: "https://picsum.photos/id/4/200/300",
      },
      {
        id: "5",
        day: "24 th",
        description: "Dr. John Hasitha",
        imgURL: "https://picsum.photos/id/5/200/300",
      },
      {
        id: "6",
        day: "22 nd",
        description: "Dr. John Hasitha",
        imgURL: "https://picsum.photos/id/6/200/300",
      },
    ],
  },
  {
    title: "September 2021",
    details: [
      {
        id: "7",
        day: "23 rd",
        description: "Dr. John Hasitha",
        imgURL: "https://picsum.photos/id/7/200/300",
      },
      {
        id: "8",
        day: "24 th",
        description: "Dr. John Hasitha",
        imgURL: "https://picsum.photos/seed/picsum/200/300",
      },
      {
        id: "9",
        day: "24 th",
        description: "Dr. John Hasitha",
        imgURL: "https://picsum.photos/seed/picsum/200/300",
      },
    ],
  },
];

export const labReportList = [
  {
    title: "November 2021",
    details: [
      {
        id: "1",
        day: "23 rd",
        description: "Full Blood Count Report",
        imgURL: "https://picsum.photos/id/1/200/300",
      },
      {
        id: "2",
        day: "24 th",
        description: "Full Blood Count Report",
        imgURL: "https://picsum.photos/id/2/200/300",
      },
      {
        id: "3",
        day: "22 nd",
        description: "Full Blood Count Report",
        imgURL: "https://picsum.photos/id/3/200/300",
      },
    ],
  },
  {
    title: "October 2021",
    details: [
      {
        id: "4",
        day: "23 rd",
        description: "Full Blood Count Report",
        imgURL: "https://picsum.photos/id/4/200/300",
      },
      {
        id: "5",
        day: "24 th",
        description: "Full Blood Count Report",
        imgURL: "https://picsum.photos/id/5/200/300",
      },
      {
        id: "6",
        day: "22 nd",
        description: "Full Blood Count Report",
        imgURL: "https://picsum.photos/id/6/200/300",
      },
    ],
  },
  {
    title: "September 2021",
    details: [],
  },
];
