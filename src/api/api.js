import axios from "axios";

export const GetServices = async (searchQuery) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Specializations/GetSpecializations",
        {"RequestData": {TitleSearchString: searchQuery}});
    return response.data.ResponseData.ListOfSpecializations;
}

export const GetDoctors = async (specializationId) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Doctors/GetDoctorsBySpecializationId",
        {RequestData: {SpecializationId: specializationId}});
    return response.data.ResponseData;
}

export const GetDoctorVisitType = async (specializationId, doctorId) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Doctors/GetDoctorsTypeOfVisits",
        {RequestData: {SpecializationId: specializationId, DoctorId: doctorId}});
    return response.data.ResponseData.ListOfTypes;
}

export const GetDoctorsConsultationsByMainType = async (specializationId, doctorId, consultationMainType) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Consultations/GetDoctorsConsultationsByMainType",
        {RequestData: {SpecializationId: specializationId, DoctorId: doctorId, ConsultationMainType:consultationMainType}});
    return response.data.ResponseData.Consultations;
}

export const CreateMessageForConsultation = async (request) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Service/CreateMessageForConsultation",
        {RequestData: request});
    return response.data.ResponseData.Consultations;
}

