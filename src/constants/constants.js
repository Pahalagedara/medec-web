export const bloodGroups = [
    {bloodGroup: 'A+'},
    {bloodGroup: 'A-'},
    {bloodGroup: 'B+'},
    {bloodGroup: 'B-'},
    {bloodGroup: 'AB+'},
    {bloodGroup: 'AB-'},
    {bloodGroup: 'O+'},
    {bloodGroup: 'O-'},
]
export const tittle = [
    {tittle: 'Mr'},
    {tittle: 'Mrs'},
    {tittle: 'Ms'},
    {tittle: 'Hon'},
]

export const CHECKOUT_FIELDS = {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    ADDRESS: 'address',
    PHONE_NUMBER: 'phoneNumber',
    Full_Name: 'fullName',
    Email: 'email',
    Gender:'gender',
    Specialization:'specialization',
    MedicalCouncilNumber:'medicalCouncilNumber',
    Title:'tittle',
    Birthdate:'birthDate',
    Country:'country',
    BloodGroup:'bloodGroup',
    Name:"name",
    Age:"age",
    PASSWORD:'password'
}

export const genders = [
    {gender: 'Male'},
    {gender: 'Female'},
]

export const specializations = [
    {specialization: 'General Practitioner'},
    {specialization: 'Cardiologist'}
]

export const component = {
    chanCenter: 'CHAN_CENTER',
    laboratory: 'LABORATORY',
    user: 'USER'
}

export const dataStore = {
    AddDoctors: "ADD_DOCTORS",
    AddSearchList: "ADD_SEARCH_LIST",
    AuthResponse: "AUTH_RESPONSE",
    AddAppointmentList: "ADD_APPOINTMENT_LIST",
    AddDoctorTimeSchedule: "ADD_DOCTOR_TIME_SCHEDULE"
}

export const authConstants = {
    authTypeAdmin: 1,
    authTypeDoctor: 2,
    authTypeLab: 3,
    authTypePatient: 4,
    authTypeChannelCenter: 5,

    authSuccess: 10,
    authFail: 11,
    authRegisteredSuccess: 12,
    authRegisteredFail: 13,
}

export const addPrescriptionsSections = [
    {
        title: "Laboratory Investigations",
        options: [
            "FBS",
            "PPBS",
            "RBS",
            "Urine HCG",
            "Trop 1",
            "FBC",
            "Urine Culture/ABST",
            "Dengue Antigen",
            "ALT/SGPT",
            "Dengue Antibody",
            "ESR",
            "Gamma GT",
            "Urine Micro Albumin",
            "Lipid Profile",
            "Liver Profile",
            "CRP",
        ]
    },
    {
        title: "MRI/CT Requisitions",
        options: [
            "Brain",
            "Brain MRI",
            "Whole Spine",
            "C/Spine",
            "D/Spine",
            "L/Spine",
            "Backache Protocol",
            "Whole Body",
            "Carotid Angiogram",
            "Arotic Angiogram",
            "MRI Uro",
            "CT Uro",
            "MRI Wrist",
            "MRI Hand",
            "MRI Knee",
        ]
    }
]