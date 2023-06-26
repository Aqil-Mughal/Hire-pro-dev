import { gql } from "@apollo/client"

export const LOGIN = gql`
query Query($email: String!, $password: String!) {
  signin(email: $email, password: $password)
}
`

export const JOBS_BY_JOB_TITLE_LOCATION_DISTANCE_JOB_SECTOR = gql`
query SearchAgencyPostedJobByJobTitleLocationDistanceJobsector($jobTitle: String, $location: String, $distance: Int, $jobSector: String) {
  SearchAgencyPostedJobByJobTitleLocationDistanceJobsector(job_title: $jobTitle, location: $location, distance: $distance, job_sector: $jobSector) {
    agency_job_post_job_id
    job_id
    language
    country
    company_name
    location
    working_location
    job_title
    job_sector
    job_description
    required_qualification
    start_date
    start_time
    start_time_zone
    end_time
    end_time_zone
    pay_rate
    pay_rate_currency
    no_of_resources_required
    save_as_a_template
    is_deleted
    deleted_at
    created_at
    updated_at
    latitude
    longitude
    priority
    safety_shoes
    safety_gloves
    safety_jacket
  }
}
`

export const GET_LOCATION_DROPDOWN = gql`
query Query($address: String!) {
  addressList(address: $address)
}
`

export const GET_ALL_JOBS = gql`
query AllJobs($skip: Int!, $take: Int!) {
  AllJobs(skip: $skip, take: $take) {
    job_id
    company_name
    company_logo
    company_details_phone_number
    website_link
    address
    city
    state
    country
    zip_code
    first_name
    middle_name
    last_name
    email
    company_admin_contact_number
    job_title
    job_type
    additional_details
    no_of_resources_required
    job_description_file
    is_posted
    is_deleted
    deleted_at
    created_at
    updated_at
  }
}
`

export const GET_JOBS_BY_JOB_ID = gql`
query JobByJobID($jobId: Int!) {
  JobByJobID(job_id: $jobId) {
    job_id
    company_name
    company_logo
    company_details_phone_number
    website_link
    address
    city
    state
    country
    zip_code
    first_name
    middle_name
    last_name
    email
    company_admin_contact_number
    job_title
    job_type
    additional_details
    no_of_resources_required
    job_description_file
    is_posted
    is_deleted
    deleted_at
    created_at
    updated_at
  }
}
`

export const CANDIDATES_WITHOUT_JOB_LINK_COUNT = gql`
query Query {
  TotalNumberOfCandidatesWithoutJobLink
}
`

export const CANDIDATES_WITH_JOB_LINK_COUNT = gql`
  query {
    TotalNumberOfCandidatesWithJobLink
  }
`

export const GET_ALL_JOBS_COUNT = gql`
  query {
    TotalNumberOfJobs
  }
`

export const GET_ALL_AGENCY_JOB_POST_COUNT = gql`
query {
  TotalNumberOfAgencyPostedJobs
}
`

export const GET_ALL_AGENCY_JOB_POSTS = gql`
query ($skip: Int!, $take: Int!) {
  AllAgencyJobPosts(skip: $skip, take: $take) {
    agency_job_post_job_id
    job_id
    language
    country
    company_name
    location
    working_location
    job_title
    job_sector
    job_description
    required_qualification
    start_date
    start_time
    start_time_zone
    end_time
    end_time_zone
    pay_rate
    pay_rate_currency
    no_of_resources_required
    save_as_a_template
    is_deleted
    deleted_at
    created_at
    updated_at
    latitude
    longitude
    priority
    safety_shoes
    safety_gloves
    safety_jacket
    candidates {
      candidate_id
      agency_job_post_job_id
      first_name
      middle_name
      last_name
      email
      phone_number
      city
      job_sector
      resume
      is_job_link
      is_deleted
      deleted_at
      created_at
      updated_at
    }
    agencyJobPostRequirements {
      guid
      agency_job_post_job_id
      description
    }
    agencyJobPostskills {
      guid
      agency_job_post_job_id
      description
    }
    job {
      job_id
      company_name
      company_logo
      company_details_phone_number
      website_link
      address
      city
      state
      country
      zip_code
      first_name
      middle_name
      last_name
      email
      company_admin_contact_number
      job_title
      job_type
      additional_details
      no_of_resources_required
      job_description_file
      is_posted
      is_deleted
      deleted_at
      created_at
      updated_at
    }
  }
}
`

export const GET_AGENCY_JOB_POST_BY_AGENCY_JOB_POST_ID = gql`
query ($agencyJobPostJobId: Int!) {
  AgencyJobPostByAgencyJobPostID(agency_job_post_job_id: $agencyJobPostJobId) {
    agency_job_post_job_id
    job_id
    language
    country
    company_name
    location
    working_location
    job_title
    job_sector
    job_description
    required_qualification
    start_date
    start_time
    start_time_zone
    end_time
    end_time_zone
    pay_rate
    pay_rate_currency
    no_of_resources_required
    save_as_a_template
    is_deleted
    deleted_at
    created_at
    updated_at
    latitude
    longitude
    priority
    safety_shoes
    safety_gloves
    safety_jacket
    candidates {
      candidate_id
      agency_job_post_job_id
      first_name
      middle_name
      last_name
      email
      phone_number
      city
      job_sector
      resume
      is_job_link
      is_deleted
      deleted_at
      created_at
      updated_at
    }
    agencyJobPostRequirements {
      guid
      agency_job_post_job_id
      description
    }
    agencyJobPostskills {
      guid
      agency_job_post_job_id
      description
    }
    job {
      job_id
      company_name
      company_logo
      company_details_phone_number
      website_link
      address
      city
      state
      country
      zip_code
      first_name
      middle_name
      last_name
      email
      company_admin_contact_number
      job_title
      job_type
      additional_details
      no_of_resources_required
      job_description_file
      is_posted
      is_deleted
      deleted_at
      created_at
      updated_at
    }
  }
}
`

export const UPDATE_AGENCY_JOB_POST_PRIORITY_BY_AGENCY_JOB_POST_ID = gql`
mutation UpdateAgencyJobPostPriority($agencyJobPostJobId: Int!, $priority: Int!) {
  UpdateAgencyJobPostPriority(agency_job_post_job_id: $agencyJobPostJobId, priority: $priority)
}
`

export const CANDIDATES_WITH_JOB_LINK = gql`
  query AllCandidatesWithJobLink($skip: Int!, $take: Int!) {
    AllCandidatesWithJobLink(skip: $skip, take: $take) {
      candidate_id
      agency_job_post_job_id
      first_name
      middle_name
      last_name
      email
      phone_number
      city
      job_sector
      resume
      is_job_link
      is_deleted
      deleted_at
      created_at
      updated_at
    }
  }
`

export const CANDIDATES_WITHOUT_JOB_LINK = gql`
  query ($skip: Int!, $take: Int!) {
    AllCandidatesWithoutJobLink(skip: $skip, take: $take) {
      candidate_id
      agency_job_post_job_id
      first_name
      middle_name
      last_name
      email
      phone_number
      city
      job_sector
      resume
      is_job_link
      is_deleted
      deleted_at
      created_at
      updated_at
    }
  }
`