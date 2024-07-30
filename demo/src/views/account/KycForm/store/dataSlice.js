import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetAccountFormData } from 'services/AccountServices'

export const getForm = createAsyncThunk('accountDetailForm/data/getForm',async (data) => {
    const response = await apiGetAccountFormData(data)
    return response.data
})

const dataSlice = createSlice({
    name: 'accountDetailForm/data',
    initialState: {
        formData: {
            personalInformation: {
                firstName: '',
                lastName: '',
                email: '',
                residentCountry: '',
                nationality: '',
                dialCode: '',
                phoneNumber: '',
                dob: '',
                gender: '',
                maritalStatus: '',
            },
            identification: {
                documentType: 'passport',
                passportCover: '',
                passportDataPage: '',
                nationalIdFront: '',
                nationalIdBack: '',
                driversLicenseFront: '',
                driversLicenseBack: ''
            },
            addressInformation: {
                country: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zipCode: '',
                sameCorrespondenceAddress: true,
                correspondenceAddress: {
                    country: '',
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    state: '',
                    zipCode: '',
                }
            },
            financialInformation: {
                taxResident: '',
                tin: '',
                noTin: false,
                noTinReason: '',
                occupation: '',
                annualIncome: '',
                sourceOfWealth: '',
                companyInformation: {
                    companyName: '',
                    contactNumber:'',
                    country: '',
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    state: '',
                    zipCode: '',
                }
            }
        },
        stepStatus: {
            0: { status: 'pending' },
            1: { status: 'pending' },
            2: { status: 'pending' },
            3: { status: 'pending' },
            4: { status: 'pending' }
        }
    },
    reducers: {
        setFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload }
        },
        setStepStatus: (state, action) => {
            state.stepStatus = { ...state.stepStatus, ...action.payload }
        },
    },
    extraReducers: {
        [getForm.fulfilled]: (state, action) => {
            state.formData = action.payload.formData
            state.stepStatus = action.payload.formStatus
        },
    }
})

export const { setFormData, setStepStatus } = dataSlice.actions

export default dataSlice.reducer
