import React from 'react'
import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    body: {
        padding: 35
    },
    headingDiv: {
        textAlign: 'center',
        paddingBottom: 20,
    },
    heading: {
        fontWeight: 'bolder',
        fontSize: 24,
    },
    title: {
        color: '#04acee',
        paddingBottom: 5
    },
    description: {
        color: '#707f8c',
        paddingBottom: 10
    }
})

const EmployerApplicationsPDF = ({ viewJob }) => {
    return (
        <Document>
            <Page style={styles.body}>
                <View style={styles.headingDiv}>
                    <Text style={styles.heading}>Employer Application</Text>
                </View>
                <Text style={styles.title}>Employer Application ID:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.job_id ? '---' : viewJob?.data?.JobByJobID?.job_id}</Text>
                <Text style={styles.title}>Company Name:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.company_name ? '---' : viewJob?.data?.JobByJobID?.company_name}</Text>
                <Text style={styles.title}>Company Phone:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.company_details_phone_number ? '---' : viewJob?.data?.JobByJobID?.company_details_phone_number}</Text>
                <Text style={styles.title}>Company Logo:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.company_logo ? '---' : viewJob?.data?.JobByJobID?.company_logo}</Text>
                <Text style={styles.title}>Website Link:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.website_link ? '---' : viewJob?.data?.JobByJobID?.website_link}</Text>
                <Text style={styles.title}>Address:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.address ? '---' : viewJob?.data?.JobByJobID?.website_link}</Text>
                <Text style={styles.title}>City:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.city ? '---' : viewJob?.data?.JobByJobID?.city}</Text>
                <Text style={styles.title}>State / Province:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.state ? '---' : viewJob?.data?.JobByJobID?.state}</Text>
                <Text style={styles.title}>Country:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.country ? '---' : viewJob?.data?.JobByJobID?.country}</Text>
                <Text style={styles.title}>Zip Code / Postal Code</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.zip_code ? '---' : viewJob?.data?.JobByJobID?.zip_code}</Text>

                <Text style={styles.title}>First Name:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.first_name ? '---' : viewJob?.data?.JobByJobID?.first_name}</Text>
                <Text style={styles.title}>Middle Name:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.middle_name ? '---' : viewJob?.data?.JobByJobID?.middle_name}</Text>
                <Text style={styles.title}>Last Name:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.last_name ? '---' : viewJob?.data?.JobByJobID?.last_name}</Text>
                <Text style={styles.title}>Email:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.email ? '---' : viewJob?.data?.JobByJobID?.email}</Text>
                <Text style={styles.title}>Admin Contact Number:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.company_admin_contact_number ? '---' : viewJob?.data?.JobByJobID?.company_admin_contact_number}</Text>
                <Text style={styles.title}>Job Title:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.job_title ? '---' : viewJob?.data?.JobByJobID?.job_title}</Text>
                <Text style={styles.title}>Job Type:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.job_type ? '---' : viewJob?.data?.JobByJobID?.job_type}</Text>
                <Text style={styles.title}>Resources Required:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.no_of_resources_required ? '---' : viewJob?.data?.JobByJobID?.no_of_resources_required}</Text>
                <Text style={styles.title}>Job Criteria File:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.job_description_file ? '---' : viewJob?.data?.JobByJobID?.job_description_file}</Text>
                <Text style={styles.title}>Additional Details / Notes:</Text>
                <Text style={styles.description}>{!viewJob?.data?.JobByJobID?.additional_details ? '---' : viewJob?.data?.JobByJobID?.additional_details}</Text>
            </Page>
        </Document>
    )
}

export default EmployerApplicationsPDF