import axios from "axios";

export const GetSpecializationTypes = async()=>{
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Specializations/GetSpecializationsTypes",
        {"RequestData": {}});
    return response.data.ResponseData.ListOfSpecializationsTypes;
}

export const GetServices = async (searchQuery, specializationType, isPremium,) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Specializations/GetSpecializations",
        {"RequestData": {TitleSearchString: searchQuery,SpecializationType:specializationType, IsPremium: isPremium}});
    return response.data.ResponseData.ListOfSpecializations;
}

export const GetDoctors = async (pageNumber,specializationId) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Doctors/GetDoctorsBySpecializationId",
        {RequestData: { PageNumber:pageNumber, SpecializationId: specializationId}});
    return response.data.ResponseData;
}

export const GetDoctorVisitType = async (pageNumber ,specializationId, doctorId) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Doctors/GetDoctorsTypeOfVisits",
        {RequestData: { PageNumber:pageNumber, SpecializationId: specializationId, DoctorId: doctorId}});
    return response.data.ResponseData.ListOfTypes;
}

export const GetDoctorsConsultationsByMainType = async (pageNumber, specializationId, doctorId, consultationMainTypes ) => {

    if (consultationMainTypes.length !== 0){
        let consultations = [];
         for (const item of consultationMainTypes) {
            const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Consultations/GetDoctorsConsultationsByMainType",
                {RequestData: {PageNumber:pageNumber, SpecializationId: specializationId, DoctorId: doctorId, ConsultationMainType:item}});
            if (response.data.ResponseData.Consultations.length !== 0){
                consultations = consultations.concat(response.data.ResponseData.Consultations);
            }
        }
        return consultations;
    }
    else return [];

}

export const CreateMessageForConsultation = async (request) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Service/CreateMessageForConsultation",
        {RequestData: request});
    return response.data.ResponseData;
}
export const GetDoctorsReviews = async (doctorId) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Doctors/GetDoctorsReviews",
        {RequestData: {DoctorId: doctorId}});
    console.log(response.data)

    return response.data.ResponseData;


}

export const GetDoctorsSearch = async (namesSearchString) => {
    const response = await axios.post("https://plugin-medok.spaceapp.ru/ApiConsultations/Doctors/GetDoctorsByName",
        {RequestData: {NamesSearchString: namesSearchString}});
    console.log(response.data)

    return response.data.ResponseData;


}