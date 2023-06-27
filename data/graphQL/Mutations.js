import { gql } from "@apollo/client"

export const ADD_JOB = gql`
mutation AddJob($companyName: String!, $companyDetailsPhoneNumber: String!, $address: String!, $city: String!, $state: String!, $country: String!, $zipCode: String!, $firstName: String!, $lastName: String!, $email: String!, $companyAdminContactNumber: String!, $jobType: String!, $companyLogo: Upload, $websiteLink: String, $middleName: String, $jobTitle: String, $additionalDetails: String, $noOfResourcesRequired: String, $jobDescriptionFile: Upload) {
  AddJob(company_name: $companyName, company_details_phone_number: $companyDetailsPhoneNumber, address: $address, city: $city, state: $state, country: $country, zip_code: $zipCode, first_name: $firstName, last_name: $lastName, email: $email, company_admin_contact_number: $companyAdminContactNumber, job_type: $jobType, company_logo: $companyLogo, website_link: $websiteLink, middle_name: $middleName, job_title: $jobTitle, additional_details: $additionalDetails, no_of_resources_required: $noOfResourcesRequired, job_description_file: $jobDescriptionFile)
}
`
export const APPLY_FOR_JOB_WITHOUT_JOB_ID = gql`
mutation ApplyWithoutJob($firstName: String!, $lastName: String!, $email: String!, $phoneNumber: String!, $city: String!, $jobSector: String!, $resume: Upload!, $middleName: String) {
  ApplyWithoutJob(first_name: $firstName, last_name: $lastName, email: $email, phone_number: $phoneNumber, city: $city, job_sector: $jobSector, resume: $resume, middle_name: $middleName)
}
`

export const DELETE_JOBS_BY_JOB_ID = gql`
mutation DeleteJobByID($jobId: Int!) {
  DeleteJobByID(job_id: $jobId)
}
`

export const ADD_AGENCY_JOB_POST = gql`
    mutation AgencyJobPost($language: String!, $country: String!, $companyName: String!, $location: String!, $jobTitle: String!, $jobDescription: String!, $jobSector: String!, $noOfResourcesRequired: Int!, $jobId: Int, $requiredQualification: String, $workingLocation: String, $requirements: [String], $skills: [String], $startDate: String, $startTime: String, $startTimeZone: String, $endTime: String, $endTimeZone: String, $payRate: Float, $payRateCurrency: String, $priority: Int, $safetyShoes: Boolean, $safetyGloves: Boolean, $safetyJacket: Boolean, $saveAsATemplate: Boolean) {
  AgencyJobPost(language: $language, country: $country, company_name: $companyName, location: $location, job_title: $jobTitle, job_description: $jobDescription, job_sector: $jobSector, no_of_resources_required: $noOfResourcesRequired, job_id: $jobId, required_qualification: $requiredQualification, working_location: $workingLocation, requirements: $requirements, skills: $skills, start_date: $startDate, start_time: $startTime, start_time_zone: $startTimeZone, end_time: $endTime, end_time_zone: $endTimeZone, pay_rate: $payRate, pay_rate_currency: $payRateCurrency, priority: $priority, safety_shoes: $safetyShoes, safety_gloves: $safetyGloves, safety_jacket: $safetyJacket, save_as_a_template: $saveAsATemplate)
}
`

export const DELETE_AGENCY_JOB_POST = gql`
  mutation DeleteAgencyPostedJobByID($agencyJobPostJobId: Int!) {
    DeleteAgencyPostedJobByID(agency_job_post_job_id: $agencyJobPostJobId)
  }
`

export const APPLY_FOR_JOB_WITH_JOB_ID = gql`
mutation ApplyJob($agencyJobPostJobId: Int!, $firstName: String!, $lastName: String!, $email: String!, $phoneNumber: String!, $city: String!, $jobSector: String!, $resume: Upload!, $middleName: String) {
  ApplyJob(agency_job_post_job_id: $agencyJobPostJobId, first_name: $firstName, last_name: $lastName, email: $email, phone_number: $phoneNumber, city: $city, job_sector: $jobSector, resume: $resume, middle_name: $middleName)
}
`